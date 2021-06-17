import React from 'react';
import EnvelopeFillIcon from '../icons/EnvelopeFillIcon';
import FileEarmarkPersonFillIcon from '../icons/FileEarmarkPersonFillIcon';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import ProfilePicture from '../images/profile.jpg';
import socialLinks, { SocialLink } from '../utils/SocialLinks';

export default function Home(): JSX.Element {
  const socialIcons = socialLinks.map((socialLink: SocialLink) => (
    <a href={socialLink.href} key={socialLink.displayText.split(' ').join()}>
      {socialLink.icon}
    </a>
  ));

  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center space-y-1.5">
      <img className="rounded-full border-4 border-purple-light shadow-xl w-3/5" src={ProfilePicture} alt="A Beautiful Portrait of the Author of this Website" />
      <p className="text-xxl font-sansBold text-white">James Wood</p>
      <p className="text-xl font-mono text-purple-light">
        Software Engineer
      </p>
      <div className="flex flex-row space-x-4">
        {socialIcons}
      </div>
    </div>
  );
}
