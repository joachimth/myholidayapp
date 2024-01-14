import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HolidayList = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/DK`)
      .then(response => {
        setHolidays(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, [year]);

  return (
    <div className="container mx-auto p-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn">
            {year}
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
        
        <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">currentYear</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"> 
          <li><button onClick={setYear(currentYear)}>currentYear</button></li>
          <li><button onClick={setYear(currentYear+1)}>currentYear+1</button></li>
          <li><button onClick={setYear(currentYear+2)}>currentYear+2</button></li>
        </ul>
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {[currentYear, currentYear + 1, currentYear + 2].map(yr => (
                <Menu.Item key={yr}>
                  {({ active }) => (
                    <button
                      onClick={() => setYear(yr)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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

      <h1 className="text-3xl font-bold text-center my-6">Danske Helligdage i {year}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="mt-4">
          {holidays.map((holiday) => (
            <li key={holiday.date} className="card bordered">
              <div className="card-body">
                <h2 className="card-title">{holiday.localName}</h2>
                <p>{holiday.date}</p>
              </div>
            </li>
          ))}
          {holidays.length === 0 && <li className="px-4 py-4 text-center">Ingen helligdage fundet for {year}.</li>}
        </ul>
      )}
    </div>
  );
};

export default HolidayList;