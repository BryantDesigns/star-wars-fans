const Header = ({ children }) => {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1532793218979-f3365c284b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")] bg-cover bg-center pb-32'>
      {children}
      <header className='py-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-white'>
            Star Wars Characters
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
