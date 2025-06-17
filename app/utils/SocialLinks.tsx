import React from 'react';
import EnvelopeFillIcon from '../icons/EnvelopeFillIcon';
import FileEarmarkPersonFillIcon from '../icons/FileEarmarkPersonFillIcon';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

export interface SocialLink {
  displayText: string;
  href: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    displayText: 'GitHub Icon',
    href: 'https://github.com/James-D-Wood',
    icon: <GitHubIcon className="w-8 h-8 text-white" />,
  },
  {
    displayText: 'LinkedIn Icon',
    href: 'https://www.linkedin.com/in/james-wood-dev',
    icon: <LinkedInIcon className="w-8 h-8 text-white" />,
  },
  {
    displayText: 'Email Icon',
    href: 'mailto:woodjames275@gmail.com',
    icon: <EnvelopeFillIcon className="w-8 h-8 text-white" />,
  },
  {
    displayText: 'Resume Icon',
    href: '#/resume',
    icon: <FileEarmarkPersonFillIcon className="w-8 h-8 text-white" />,
  },
];

export default socialLinks;
