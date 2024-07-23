import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import fetchHolidays from '../services/api';
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
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const getHolidays = async () => {
      const data = await fetchHolidays(year);
      setHolidays(data);
      setLoading(false);
    };
    getHolidays();
  }, [year]);

  const openModal = (holiday) => {
    setModalData(holidayDetails[holiday.localName] || null);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <div className="navbar bg-primary text-primary-content mb-4">
        <a className="btn btn-ghost normal-case text-xl">Danske Helligdage i {year}</a>
      </div>

      <div className="container mx-auto p-4">
        <Menu as="div" className="relative inline-block text-left w-full mb-4">
          <div className="w-full">
            <Menu.Button className="inline-flex w-full justify-between rounded-md shadow-sm px-4 py-2 bg-primary text-primary-content hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-primary">
              {year}
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out​⬤