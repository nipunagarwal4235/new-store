import React from 'react';
import AboutHero from './_components/AboutHero';
import OurStory from './_components/OurStory';
import OurAchievements from './_components/OurAchievements';

export default function Component() {
  return (
    <React.Fragment>
      <AboutHero />
      <OurStory />
      <OurAchievements />
    </React.Fragment>
  );
}
