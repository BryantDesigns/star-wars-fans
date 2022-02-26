import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Search from "./Search";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Characters", href: "#", current: true },
  { name: "Planets", href: "#", current: false },
  { name: "Spaceships", href: "#", current: false },
  { name: "Vehicles", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as='nav'
      className='border-b border-stardata border-opacity-50 bg-black lg:border-none lg:bg-black-50'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between lg:border-b lg:border-stardata-400 lg:border-opacity-25'>
              <div className='flex items-center px-2 lg:px-0'>
                <div className='block h-12 w-12'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 370 370'>
                    <circle cx='109.8' cy='329.7' r='30.3' fill='#9E4F60' />
                    <circle cx='268.2' cy='260.7' r='30.3' fill='#9E4F60' />
                    <circle cx='329.7' cy='109.3' r='30.3' fill='#9E4F60' />
                    <circle cx='108.9' cy='108.9' r='63.9' fill='none' />
                    <path
                      fill='#9E4F60'
                      d='M280.9 127.3V90.4h-75.8C196.6 44.7 156.6 10 108.4 10 54 10 10 54 10 108.4c0 48.5 35.1 88.8 81.4 96.9v76.5h36.9v-77.1c13.1-2.7 25.3-8 36-15.4l50.8 50.8 26.1-26.1-51-51c7.1-10.6 12.2-22.8 14.8-35.8h75.9zM45 108.9C45 73.6 73.6 45 108.9 45s63.9 28.6 63.9 63.9-28.6 63.9-63.9 63.9c-35.3-.1-63.9-28.7-63.9-63.9z'
                    />
                  </svg>
                </div>
                <div className='hidden lg:ml-10 lg:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-stardata-700 text-white"
                            : "text-white hover:bg-stardata-500 hover:bg-opacity-75",
                          "rounded-md py-2 px-3 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Search />
              <div className='flex lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-stardata-600 p-2 text-stardata-200 hover:bg-stardata-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stardata-600'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:ml-4 lg:block'>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='inline-flex items-center rounded-md border border-transparent bg-stardata-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-stardata-700 focus:outline-none focus:ring-2 focus:ring-stardata-500 focus:ring-offset-2'
                  >
                    Login
                  </button>

                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-3 flex-shrink-0'>
                    <div>
                      <Menu.Button className='flex rounded-full bg-stardata-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stardata-600'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src={user.imageUrl}
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-stardata-700 text-white"
                      : "text-white hover:bg-stardata-500 hover:bg-opacity-75",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-stardata-700 pt-4 pb-3'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={user.imageUrl}
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>
                    {user.name}
                  </div>
                  <div className='text-sm font-medium text-stardata-300'>
                    {user.email}
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full bg-stardata-600 p-1 text-stardata-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stardata-600'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1 px-2'>
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className='block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-stardata-500 hover:bg-opacity-75'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}