import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const ProfileDropdown = ({
  loggedIn = false,
  setLoggedIn = () => {},
  user,
  userNavigation,
  classNames,
}) => {
  return (
    <>
      {loggedIn && (
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
              {userNavigation.map((item) => {
                if (item.name === "Sign out") {
                  return (
                    <Menu.Item
                      key={item.name}
                      onClick={() => setLoggedIn(false)}
                    >
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
                  );
                }
                return (
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
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  );
};

export default ProfileDropdown;
