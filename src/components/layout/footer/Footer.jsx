import stars from "../../../images/background-stars.jpeg";

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
        <div className='absolute inset-0 mx-auto  overflow-hidden'>
          <img
            src={stars}
            alt='Stars'
            className='h-full w-screen object-cover'
          />
        </div>
        <div className='absolute inset-0 bg-black bg-opacity-25' />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black' />
      </div>

      <footer>
        <div className='relative mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
            <nav
              className='-mx-5 -my-2 flex flex-wrap justify-center'
              aria-label='Footer'
            >
              {navigation.map((item) => (
                <div key={item.name} className='px-5 py-2'>
                  <a
                    href={item.href}
                    className='text-base text-gray-500 hover:text-stardata'
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div className='space-y-8 xl:col-span-1'>
            <svg
              className='h-24'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 370 370'
            >
              <circle cx='109.8' cy='329.7' r='30.3' fill='#9E4F60' />
              <circle cx='268.2' cy='260.7' r='30.3' fill='#9E4F60' />
              <circle cx='329.7' cy='109.3' r='30.3' fill='#9E4F60' />
              <circle cx='108.9' cy='108.9' r='63.9' fill='none' />
              <path
                fill='#9E4F60'
                d='M280.9 127.3V90.4h-75.8C196.6 44.7 156.6 10 108.4 10 54 10 10 54 10 108.4c0 48.5 35.1 88.8 81.4 96.9v76.5h36.9v-77.1c13.1-2.7 25.3-8 36-15.4l50.8 50.8 26.1-26.1-51-51c7.1-10.6 12.2-22.8 14.8-35.8h75.9zM45 108.9C45 73.6 73.6 45 108.9 45s63.9 28.6 63.9 63.9-28.6 63.9-63.9 63.9c-35.3-.1-63.9-28.7-63.9-63.9z'
              />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
