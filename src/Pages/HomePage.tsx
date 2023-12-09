import { AlertModal } from '../Components/AlertModal';
import Banner from '../Components/Banner';
import Biography from '../Components/Biography';
import DictionaryDefinition from '../Components/DictionaryDefinition';
import { BiographyText } from '../Constants/Biography';
import { SUPERPRODUCER_DEFINITION } from '../Constants/Definition';
import { ModalTypes } from '../Constants/types';
import '../Styles/HomePage.scss';
import { useState, useEffect } from 'react';

interface Props {
  ref: React.MutableRefObject<null>;
  sidenavOpen: boolean;
}

export default function HomePage({ ref, sidenavOpen }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            URL: 'https://www.fiverr.com/s/PN9xA0',
          },
          {
            text: 'Grab Beats',
            URL: 'https://www.beatstars.com/saintstephmusic',
          },
        ]}
        type={ModalTypes.RECORD}
      />
      <Banner dimmed={sidenavOpen} />
      <DictionaryDefinition
        name={SUPERPRODUCER_DEFINITION.name}
        phonetic={SUPERPRODUCER_DEFINITION.phonetic}
        grapheme={SUPERPRODUCER_DEFINITION.grapheme}
        article={SUPERPRODUCER_DEFINITION.article}
        definitions={SUPERPRODUCER_DEFINITION.definitions}
        synonyms={SUPERPRODUCER_DEFINITION.synonyms}
      />
      <div ref={ref}>
        <Biography text={BiographyText} />
      </div>
    </div>
  );
}
