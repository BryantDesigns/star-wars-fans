import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLinks from "./navbar-items/NavLinks";
import ProfileDropdown from "./navbar-items/ProfileDropdown";
import MobileNavLinks from "./navbar-items/MobileNavLinks";
import MobileProfile from "./navbar-items/MobileProfile";
import Search from "./Search";
import Logo from "../../../images/Logo";
import navagationData from "../../../utilities/navagationData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ setSearchURL }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user, navigation, userNavigation } = navagationData;
  
  return (
    <Disclosure
      as='nav'
      className='lg:bg-black-50 border-b border-stardata border-opacity-50 bg-black lg:border-none'
    >
      {({ open }) => (
        <>
          <div className='mx-auto  max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between lg:border-b lg:border-stardata-400 lg:border-opacity-25'>
              <div className='flex items-center px-2 lg:px-0'>
                <div className='block h-12 w-12'>
                  <Logo />
                </div>

                <NavLinks
                  loggedIn={loggedIn}
                  navigation={navigation}
                  classNames={classNames}
                />
              </div>
              <Search setSearchURL={setSearchURL} />
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
                  {/* Login */}
                  {!loggedIn && (
                    <button
                      type='button'
                      onClick={() => setLoggedIn(true)}
                      className='inline-flex items-center rounded-md border border-transparent bg-stardata-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-stardata-700 focus:outline-none focus:ring-2 focus:ring-stardata-500 focus:ring-offset-2'
                    >
                      Login
                    </button>
                  )}

                  {/* Profile dropdown */}
                  <ProfileDropdown
                    loggedIn={loggedIn}
                    classNames={classNames}
                    user={user}
                    userNavigation={userNavigation}
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            {/* Mobile NavLinks */}
            <MobileNavLinks
              loggedIn={loggedIn}
              navigation={navigation}
              classNames={classNames}
            />

            {/* Mobile Profile */}
            <MobileProfile
              loggedIn={loggedIn}
              classNames={classNames}
              user={user}
              userNavigation={userNavigation}
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
