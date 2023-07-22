import React from 'react';
import { ReactComponent as GitHubLogo } from '/src/assets/logo-github.svg';
import { ReactComponent as LinkedInLogo } from '/src/assets/logo-linkedin.svg';

const Socials = () => {
  return (
    <div className='flex mx-8 space-x-4'>
      <a href='https://github.com/MMinauf'>
        <GitHubLogo></GitHubLogo>
      </a>
      <a href=''>
        <LinkedInLogo></LinkedInLogo>
      </a>
    </div>
  );
};

export default Socials;
