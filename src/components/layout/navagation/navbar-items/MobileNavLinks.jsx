import { Disclosure } from "@headlessui/react";

const MobileNavLinks = ({ loggedIn, navigation, classNames }) => {
  return (
    <>
      {loggedIn && (
        <div className='space-y-1 px-2 pt-2 pb-3'>
          {navigation.map((item) => (
            <Disclosure.Button
              key={crypto.randomUUID()}
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
      )}
    </>
  );
};

export default MobileNavLinks;
