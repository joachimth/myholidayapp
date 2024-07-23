import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const themes = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
  'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
  'night', 'coffee', 'winter'
];

const ThemeSelector = () => {
  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="w-full flex justify-center mt-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-between rounded-md shadow-sm px-4 py-2 bg-secondary text-secondary-content hover:bg-secondary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-primary">
            Vælg Tema
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
          <Menu.Items className="origin-top absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-secondary text-secondary-content ring-1 ring-base-300 focus:outline-none z-10">
            <div className="py-1">
              {themes.map((theme) => (
                <Menu.Item key={theme}>
                  {({ active }) => (
                    <button
                      onClick={() => handleThemeChange(theme)}
                      className={classNames(
                        active ? 'bg-primary text-primary-content' : 'text-secondary-content',
                        'block px-4 py-2 text-sm w-full text-left'
                      )}
                    >
                      {theme}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeSelector;