import Banner from '../Components/Banner';
import Biography from '../Components/Biography';
import DictionaryDefinition from '../Components/DictionaryDefinition';
import Navbar from '../Components/Navbar';
import Section from '../Components/Section';
import SideNav from '../Components/SideNav';
import { BiographyText } from '../Constants/Biography';
import { SUPERPRODUCER_DEFINITION } from '../Constants/Definition';
import '../Styles/HomePage.scss';
import { useState, useRef } from 'react';

export default function HomePage() {
  const [sidenavOpen, setSidenavOpen] = useState<boolean>(false);
  const myRef = useRef(null);
  const executeScroll = () => {
    if (!myRef || !myRef.current) return;
    return (myRef.current as any).scrollIntoView();
  };
  const whoIAmList: string[] = [
    'Is a record producer, musician, composer, and arranger',
    'Boasts wide range of versatility in musical genres',
    'Performed at SXSW',
    'Charted Top 100 iTunes R&B charts',
    'Landed on Rolling Stone publications 3x',
    'Debuted on New Music Friday',
    'Inspired 10+ music videos',
  ];
  const offerList: string[] = [
    'Free intern / personal assistant',
    'Professional studio etiquette',
    'Penthouse Recording Studios NYC',
    'Listen Vision Recording Studios',
    'Hit Factory DMV',
    'WLVS RAdio',
    'Video editor / content creator',
    'Studio maintenance and setup',
    'Email management',
    'Website developer',
    'UI designer',
  ];
  const designImage =
    'https://storage.googleapis.com/isla-producers-media/Frame%2013.png';
  const whoIAmMedia: string[] = [
    'https://storage.googleapis.com/isla-producers-media/image%209.png',
    'https://storage.googleapis.com/isla-producers-media/Frame%2015.png',
  ];

  return (
    <div className="HomePage">
      <Navbar
        turnOnSideNav={setSidenavOpen}
        dimmed={sidenavOpen}
        scroll={executeScroll}
      />
      <Banner dimmed={sidenavOpen} />
      <SideNav
        isOpen={sidenavOpen}
        setIsOpen={setSidenavOpen}
        scroll={executeScroll}
      />
      <div ref={myRef}>
        <p>
          Hey Jahaan, thanks for reading this! I built this app to detail why I
          believe interning for you would give such an impact!
        </p>
        <Section
          title={'Why Jahaan?'}
          paragraph={
            'Nah, the way you use every ounce of classical training in arrangement and instrumentation to make bangers is inspiring man. '
          }
          designImage={designImage}
          magicMoment
        />
        <Section
          title={'Who I Am'}
          paragraph={'Saint Steph:'}
          list={whoIAmList}
          media={whoIAmMedia}
        />
        <Section title={'My Offer'} list={offerList} />
      </div>
    </div>
  );
}
