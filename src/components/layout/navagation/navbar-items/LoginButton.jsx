export function LoginButton({ setLoggedIn = () => {} }) {
  return (
    <button
      type='button'
      onClick={() => setLoggedIn(true)}
      className='inline-flex items-center rounded-md border border-transparent bg-stardata px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-stardata-600'
    >
      Login
    </button>
  );
}
