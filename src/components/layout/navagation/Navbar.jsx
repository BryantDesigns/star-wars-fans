import { LoginButton } from "./navbar-items/LoginButton";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLinks from "./navbar-items/NavLinks";
import ProfileDropdown from "./navbar-items/ProfileDropdown";
import MobileNavLinks from "./navbar-items/MobileNavLinks";
import MobileProfile from "./navbar-items/MobileProfile";
import Search from "./Search";
import Logo from "../../../assets/images/Logo";
import navagationData from "../../../utilities/navigationData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ setSearchURL = () => {} }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user, navigation, userNavigation } = navagationData;

  return (
    <Disclosure
      as='nav'
      className='lg:bg-black-50 fixed top-0 left-0 right-0 z-10 border-b border-stardata border-opacity-50 bg-black lg:border-none'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
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
                {loggedIn && (
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-stardata p-2 text-gray-200 hover:bg-stardata-600 hover:bg-opacity-75 hover:text-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                )}
              </div>
              <div className='lg:ml-4 lg:block'>
                <div className='flex items-center'>
                  {/* Login Button */}
                  {!loggedIn && <LoginButton setLoggedIn={setLoggedIn} />}

                  {/* Profile dropdown */}
                  <ProfileDropdown
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
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
              setLoggedIn={setLoggedIn}
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
