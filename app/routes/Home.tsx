import ProfilePicture from '../images/profile.jpg';
import socialLinks, { SocialLink } from '../utils/SocialLinks';

export default function Home(): JSX.Element {
  const socialIcons = socialLinks.map((socialLink: SocialLink) => (
    <a href={socialLink.href} key={socialLink.displayText.split(' ').join()}>
      {socialLink.icon}
    </a>
  ));

  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center space-y-1.5 lg:space-y-2">
      <img className="rounded-full border-4 border-purple-light shadow-xl w-3/5 lg:w-1/3 lg:border-8 lg:shadow-2xl" src={ProfilePicture} alt="A Beautiful Portrait of the Author of this Website" />
      <p className="text-4xl font-sansBold text-white">James Wood</p>
      <p className="text-2xl font-mono text-purple-light">
        Professional Tinkerer
      </p>
      <div className="flex flex-row space-x-4">
        {socialIcons}
      </div>
    </div>
  );
}
