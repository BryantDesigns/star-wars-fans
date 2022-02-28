import { Disclosure } from "@headlessui/react";

const MobileProfile = ({
  loggedIn = false,
  setLoggedIn = () => {},
  user = {},
  userNavigation = [],
}) => {
  return (
    <>
      {loggedIn && (
        <div className='border-t border-stardata-700 pt-4 pb-3'>
          <div className='flex items-center px-5'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src={user.imageUrl}
                alt={user.name}
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
          </div>
          <div className='mt-3 space-y-1 px-2'>
            {userNavigation.map((item) => {
              if (item.name === "Sign out") {
                return (
                  <>
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      onClick={() => setLoggedIn(false)}
                      className='block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-stardata-500 hover:bg-opacity-75'
                    >
                      {item.name}
                    </Disclosure.Button>
                  </>
                );
              }
              return (
                <>
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className='block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-stardata-500 hover:bg-opacity-75'
                  >
                    {item.name}
                  </Disclosure.Button>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileProfile;
