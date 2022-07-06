import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Lead = () => {
  const links = [
    {
      link: 'https://t.me/Koshacha',
      icon: faTelegram
    },
    {
      link: 'tel:79994512512',
      icon: faWhatsapp
    },
    {
      link: 'mailto:baka@derpy.ru',
      icon: faEnvelope
    }
  ];

  return (
    <div className="px-4 py-16 mx-auto flex items-center sm:max-w-xl md:h-screen md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
        <span className="mb-4 mr-8">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-iconBg">
            <FontAwesomeIcon className='w-9 h-9 text-icon' icon={faHandPeace} />
          </div>
        </span>
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-header uppercase font-sans">
          JavaScript Developer
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-h1 sm:text-5xl sm:leading-none font-display">
            Ilya Mazunin
          </h2>
          <p className="text-base text-lead md:text-lg font-sans">
            Let’s create awesome apps together. I hope you consider me to be part of your business. I look forward to fruitful cooperation. Contact me so we can discuss your project as soon as possible.
          </p>
          <div className="flex items-center mt-6 space-x-4">
            {links.map((el, i) => (
              <Link key={i} href={el.link}>
                <a className="text-link transition-colors duration-300 hover:text-lead">
                  <FontAwesomeIcon className='w-7 h-7' icon={el.icon} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};