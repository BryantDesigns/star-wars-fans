import stars from "../../../images/background-stars.jpeg";
import Logo from "../../../images/Logo";

const navigation = [
  { name: "Characters", href: "#", current: true },
  { name: "Planets", href: "#", current: false },
  { name: "Spaceships", href: "#", current: false },
  { name: "Vehicles", href: "#", current: false },
];

export default function Footer() {
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
        <div className='relative mx-auto flex max-w-7xl py-12 px-4 sm:flex-col sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <p className='text-2xl text-white'>
            “Do. Or do not. There is no try.” — Yoda
          </p>
        </div>
        <div className='relative mx-auto flex w-80 max-w-7xl py-12 px-4 sm:flex-col sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <Logo />
        </div>
      </footer>
    </div>
  );
}
