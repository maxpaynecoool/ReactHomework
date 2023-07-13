import React from 'react';
import { Typography } from './typography/Typography';
import { Colors } from './colors/Colors';
import { Icons } from './icons/Icons';
import { Button } from './buttons/Button';
import { StylingElements } from './stylingElements/StylingElements';
import { Header } from './Header/Header';
import { FirstContent } from './FirstContent/FirstContent';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { Socials } from './Footer/Socials';

function App() {

  const headerHead = [
    'why this is awesome',
    'stylish axure desigh'
  ]
  const headerAbout = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Use the sections you need, remove the ones you don\'t Create gorgeous prototypes faster than ever'
  ]

  const socialsArray = [
    './icons/facebook.png',
    './icons/twitter.png',
    './icons/google-plus.png',
    './icons/pinterest.png',
    './icons/instagram.png',
    './icons/telegram.png'
  ]

  return (
    <div>
      <Header
        head={headerHead[0]}
        about={headerAbout[0]}
        button={'none'}
      />
      <Content />
      <Header
        head={headerHead[1]}
        about={headerAbout[1]}
        button={'block'}
      />
      <Footer />
      <Typography />
      <Colors />
      <Icons />
      <Socials imageUrl={socialsArray[0]}/>
      <Socials imageUrl={socialsArray[1]}/>
      <Socials imageUrl={socialsArray[2]}/>
      <Socials imageUrl={socialsArray[3]}/>
      <Socials imageUrl={socialsArray[4]}/>
      <Socials imageUrl={socialsArray[5]}/>
      <Socials imageUrl={socialsArray[6]}/>
      <Button />
      <StylingElements />
    </div>
  );
}

export default App;
