import Banner from '../Components/Banner';
import Biography from '../Components/Biography';
import DictionaryDefinition from '../Components/DictionaryDefinition';
import Navbar from '../Components/Navbar';
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
      <DictionaryDefinition
        name={SUPERPRODUCER_DEFINITION.name}
        phonetic={SUPERPRODUCER_DEFINITION.phonetic}
        grapheme={SUPERPRODUCER_DEFINITION.grapheme}
        article={SUPERPRODUCER_DEFINITION.article}
        definitions={SUPERPRODUCER_DEFINITION.definitions}
        synonyms={SUPERPRODUCER_DEFINITION.synonyms}
      />
      <div ref={myRef}>
        <Biography text={BiographyText} />
      </div>
    </div>
  );
}
