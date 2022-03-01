import stars from "../../../assets/images/background-stars.jpeg";
import Logo from "../../../assets/images/Logo";
import navigationData from "../../../utilities/navigationData";

export default function Footer() {
  const { navigation } = navigationData;
  return (
    <div className='relative overflow-hidden bg-black'>
      {/* Decorative background image and gradient */}
      <div aria-hidden='true' className='absolute inset-0'>
        <div className='absolute inset-0 mx-auto overflow-hidden'>
          <img
            src={stars}
            alt='Stars'
            className='h-full w-screen object-cover'
          />
        </div>
        <div className='absolute inset-0 bg-black bg-opacity-25' />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black opacity-30' />
      </div>

      <footer>
        <div className='relative mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 md:flex md:justify-between lg:px-8'>
          <p className='text-xl text-gray-400'>
            “Do. Or do not. There is no try.” — Yoda
          </p>
          <nav className='-mx-5 -my-2 flex justify-center' aria-label='Footer'>
            {navigation.map(({ name, href }) => (
              <div key={crypto.randomUUID()} className='px-2 sm:px-5 py-8'>
                <a
                  href={href}
                  className='text-base text-gray-400 hover:text-stardata'
                >
                  {name}
                </a>
              </div>
            ))}
          </nav>
        </div>
        <div className='relative mx-auto flex w-28 max-w-7xl items-center py-12 px-4 sm:flex-col sm:px-6 md:flex md:justify-between lg:px-8'>
          <Logo />
        </div>
      </footer>
    </div>
  );
}
