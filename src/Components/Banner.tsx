import { SAINT_STEPH_SOCIALS, Social } from '../Constants/Socials';
import '../Styles/Banner.scss';
import HeaderWithBtn from './HeaderWithBtn';
export default function Banner({ dimmed }: { dimmed: boolean }) {
  const dimStyles = dimmed ? 'rgba(0,0,0,.5)' : '';

  // const url =
  //   'https://storage.googleapis.com/saint_steph_site_photos/Me%20at%20PH%20Studio%201.png';

  return (
    <div className="Banner" style={{ backgroundColor: dimStyles }}>
      <ImageStack
        firstImage={
          'https://storage.googleapis.com/isla-producers-media/image%206.png'
        }
        secondImage={
          'https://storage.googleapis.com/isla-producers-media/image%205.png'
        }
      />
      <HardTextBlock title={'Jahaan,'} subtitle={'I’d love to lend a hand!'} />
    </div>
  );
}

export const HardTextBlock = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="hardTextBlock">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export const ImageStack = ({
  firstImage,
  secondImage,
}: {
  firstImage: string;
  secondImage: string;
}) => (
  <div className="ImageStack">
    <img src={firstImage} alt={'First image to be displayed in a stack'} />
    <img src={secondImage} alt={'First image to be displayed in a stack'} />
  </div>
);
