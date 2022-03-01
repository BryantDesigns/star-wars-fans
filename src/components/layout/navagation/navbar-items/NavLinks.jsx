const NavLinks = ({ loggedIn, navigation, classNames }) => {
  return (
    <>
      {loggedIn && (
        <div className='hidden lg:ml-10 lg:block'>
          <div className='flex space-x-4'>
            {navigation.map((item) => (
              <a
                key={crypto.randomUUID()}
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
      )}
    </>
  );
};

export default NavLinks;
