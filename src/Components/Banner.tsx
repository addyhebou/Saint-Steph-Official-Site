import { SAINT_STEPH_SOCIALS, Social } from '../Constants/Socials';
import '../Styles/Banner.scss';
import HeaderWithBtn from './HeaderWithBtn';
export default function Banner({ dimmed }: { dimmed: boolean }) {
  const dimStyles = dimmed ? 'rgba(0,0,0,.5)' : '';

  return (
    <div className="Banner" style={{ backgroundColor: dimStyles }}>
      <HeaderWithBtn
        title={'Saint Steph'}
        buttonText={'Listen Now'}
        link={
          SAINT_STEPH_SOCIALS?.[
            SAINT_STEPH_SOCIALS.findIndex(
              (social: Social) => social.name.toLowerCase() === 'spotify'
            )
          ].link
        }
      />
    </div>
  );
}
