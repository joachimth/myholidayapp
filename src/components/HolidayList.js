import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import holidayDetails from '../services/holidayInfo';
import Modal from './Modal';

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
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/DK`)
      .then(response => {
        setHolidays(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, [year]);

  const handleHolidayClick = (holiday) => {
    setSelectedHoliday(holidayDetails[holiday.localName] || null);
  };

  const closeModal = () => {
    setSelectedHoliday(null);
  };

  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <span className="btn btn-ghost normal-case text-xl">Danske Helligdage i {year}</span>
      </div>

      <div className="container mx-auto p-4">
        <Menu as="div" className="relative inline-block text-left w-full">
          <div className="w-full">
            <Menu.Button className="inline-flex w-full justify-between rounded-md shadow-sm px-4 py-2 bg-primary text-primary-content hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-primary">
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
              <div key={holiday.date} className="bg-primary text-primary-content rounded-lg shadow-md p-4 cursor-pointer" onClick={() => handleHolidayClick(holiday)}>
                <p className="text-sm font-medium">
                  {holiday.localName}
                  {holidayDetails[holiday.localName]?.noWork && (
                    <FontAwesomeIcon icon={faBriefcase} className="ml-2" />
                  )}
                </p>
                <p className="text-xs">{holiday.date}</p>
              </div>
            ))}
            {holidays.length === 0 && <div className="text-center col-span-full">Ingen helligdage fundet for {year}.</div>}
          </div>
        )}

        {selectedHoliday && (
          <Modal isOpen={!!selectedHoliday} onRequestClose={closeModal}>
            <div className="p-4">
              <h2 className="text-xl font-bold">{selectedHoliday.title}</h2>
              <p>{selectedHoliday.description}</p>
              <p>
                <a href={selectedHoliday.reference} target="_blank" rel="noopener noreferrer" className="text-secondary">Læs mere</a>
              </p>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default HolidayList;