import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Footer from './components/Footer'; // Sørg for at filstien er korrekt
import './App.css'; // Tilpasset stilark hvis nødvendigt

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
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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

      <h1 className="text-2xl font-bold text-center text-gray-800 mt-6 mb-4">Danske Helligdage i {year}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="mt-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          {holidays.map((holiday) => (
            <li key={holiday.date} className="px-4 py-4 sm:px-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600 truncate">{holiday.localName}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {holiday.date}
                  </p>
                </div>
              </div>
            </li>
          ))}
          {holidays.length === 0 && <li className="px-4 py-4 sm:px-6 text-center">Ingen helligdage fundet for {year}.</li>}
        </ul>
      )}
    </div>
  );
};

const App = () => (
  <div>
    <HolidayList />
    <Footer />
  </div>
);

export default App;