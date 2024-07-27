import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Modal from './Modal';
import HolidayInfo from '../services/holidayInfo';
import { fetchHolidays } from '../services/api';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HolidayList = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  useEffect(() => {
    fetchHolidays(year)
      .then(data => {
        setHolidays(data);
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, [year]);

  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Danske Helligdage i {year}</a>
      </div>

      <div className="container mx-auto p-4">
        <Menu as="div" className="relative inline-block text-left w-full mb-4">
          <div className="w-full">
            <Menu.Button className="menu-button">
              {year}
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-primary text-primary-content ring-1 ring-base-300 focus:outline-none z-10">
              <div className="py-1">
                {[currentYear, currentYear + 1, currentYear + 2].map(yr => (
                  <Menu.Item key={yr}>
                    {({ active }) => (
                      <button
                        onClick={() => setYear(yr)}
                        className={classNames(
                          active ? 'bg-secondary text-secondary-content' : 'text-primary-content',
                          'block px-4 py-2 text-sm w-full text-left'
                        )}
                      >
                        {yr}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {loading ? (
          <p className="text-primary-content">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {holidays.map((holiday) => (
              <div key={holiday.date} className="grid-item" onClick={() => setSelectedHoliday(holiday)}>
                <p className="text-sm font-medium">{holiday.localName}</p>
                <p className="text-xs">{holiday.date}</p>
              </div>
            ))}
            {holidays.length === 0 && <div className="text-center col-span-full">Ingen helligdage fundet for {year}.</div>}
          </div>
        )}
        {selectedHoliday && (
          <Modal isOpen={true} onRequestClose={() => setSelectedHoliday(null)}>
            <HolidayInfo holiday={selectedHoliday} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default HolidayList;