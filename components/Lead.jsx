import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPeace,
  faEnvelope,
  faPaperPlane,
  faLink,
  faComment,
  faAt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFaceKissWinkHeart,
  faFaceKiss,
} from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faGithubAlt,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

export const Lead = () => {
  const [hovered, setHovered] = useState(false);
  const links = [
    {
      link: 'https://t.me/Koshacha',
      icon: faPaperPlane,
      hoverIcon: faTelegram,
    },
    {
      link: 'mailto:eceqe@protonmail.com',
      icon: faEnvelope,
      hoverIcon: faAt,
    },
    {
      link: 'https://github.com/Koshacha',
      icon: faGithub,
      hoverIcon: faGithubAlt,
    },
    {
      link: 'https://novosibirsk.hh.ru/resume/df437b21ff045d40790039ed1f43325530646d',
      icon: faLink,
      label: 'HeadHunter',
      hoverIcon: faLink,
    },
    {
      link: 'https://www.upwork.com/freelancers/~01355186bd65b2bf29',
      icon: faLink,
      label: 'Upwork',
      hoverIcon: faLink,
    },
    {
      link: 'https://freelancehunt.com/freelancer/tlenkie.html',
      icon: faLink,
      label: 'FreelanceHunt',
      hoverIcon: faLink,
    },
  ];

  const LogoIcon = hovered
    ? typeof hovered !== 'boolean'
      ? hovered
      : faFaceKissWinkHeart
    : faFaceKiss;

  return (
    <div className="px-4 py-16 mx-auto flex items-center sm:max-w-xl md:h-screen md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
        <span className="mb-4 mr-8">
          <div
            className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-iconBg"
            onMouseOver={(e) => setHovered(true)}
            onMouseOut={(e) => setHovered(false)}
          >
            <FontAwesomeIcon className="w-12 h-12 text-icon" icon={LogoIcon} />
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
            Let’s create awesome apps together. I hope you consider me to be
            part of your business. I look forward to fruitful cooperation.
            Contact me so we can discuss your project as soon as possible.
          </p>
          <div className="flex items-center gap-4 flex-wrap mt-6">
            {links.map((el, i) => (
              <Link key={i} href={el.link}>
                {el.label ? (
                  <a
                    className="bg-iconBg hover:animate-pulse text-link font-sans text-sm py-1 px-3 rounded inline-flex items-center"
                    onMouseOver={(e) => setHovered(el.hoverIcon || false)}
                    onMouseOut={(e) => setHovered(false)}
                  >
                    <FontAwesomeIcon className="w-4 h-4 mr-2" icon={el.icon} />
                    <span>{el.label}</span>
                  </a>
                ) : (
                  <a
                    className="text-link transition-colors duration-300 hover:text-lead"
                    onMouseOver={(e) => setHovered(el.hoverIcon || false)}
                    onMouseOut={(e) => setHovered(false)}
                  >
                    <FontAwesomeIcon className="w-6 h-5 mt-1" icon={el.icon} />
                  </a>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
