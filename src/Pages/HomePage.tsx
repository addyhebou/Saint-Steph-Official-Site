import { AlertModal } from '../Components/AlertModal';
import Banner from '../Components/Banner';
import Biography from '../Components/Biography';
import DictionaryDefinition from '../Components/DictionaryDefinition';
import Navbar from '../Components/Navbar';
import SideNav from '../Components/SideNav';
import { BiographyText } from '../Constants/Biography';
import { SUPERPRODUCER_DEFINITION } from '../Constants/Definition';
import { ModalTypes } from '../Constants/types';
import '../Styles/HomePage.scss';
import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
  const [sidenavOpen, setSidenavOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const myRef = useRef(null);
  const executeScroll = () => {
    if (!myRef || !myRef.current) return;
    return (myRef.current as any).scrollIntoView();
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleOpen();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="HomePage">
      <AlertModal
        open={open}
        handleClose={handleClose}
        artworkURL="https://i1.sndcdn.com/artworks-uD9XBilomZ2tfxLk-uBwzwQ-t500x500.jpg"
        title={'As Seen On Tik Tok'}
        description={
          'Check out all records created on Tik Tok on Soundcloud here!'
        }
        buttons={[
          {
            text: 'Check It Out',
            URL: 'https://soundcloud.com/saintsteph/sets/as-seen-on-tik-tok',
          },
          {
            text: 'Book A Collab Now',
            URL: 'https://beat-shop-client-frontend.web.app/',
          },
          {
            text: 'Grab Beats',
            URL: 'https://www.beatstars.com/saintstephmusic',
          },
        ]}
        type={ModalTypes.RECORD}
      />
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
