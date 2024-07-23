import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro",
  "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel",
  "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business",
  "acid", "lemonade", "night", "coffee", "winter"
];

const ThemeSelector = () => {
  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="flex justify-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-secondary-content shadow-sm ring-1 ring-inset ring-secondary hover:bg-secondary-focus">
            Skift Tema
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-secondary-content" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top rounded-md bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {themes.map((theme) => (
                <Menu.Item key={theme}>
                  {({ active }) => (
                    <button
                      onClick={() => handleThemeChange(theme)}
                      className={`${
                        active ? 'bg-primary text-primary-content' : 'text-base-content'
                      } block w-full px-4 py-2 text-left text-sm`}
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