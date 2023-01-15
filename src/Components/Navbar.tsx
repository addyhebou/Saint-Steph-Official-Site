import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/Navbar.scss';
import { SAINT_STEPH_SOCIALS, Social } from '../Constants/Socials';
import { PAGES } from '../Constants/Pages';
import Socials from './Socials';

export default function Navbar({
  turnOnSideNav,
  dimmed,
}: {
  turnOnSideNav: React.Dispatch<React.SetStateAction<boolean>>;
  dimmed: boolean;
}) {
  const dimStyles = dimmed ? 'rgba(0,0,0,.5)' : '';

  return (
    <div className="Navbar" style={{ backgroundColor: dimStyles }}>
      <ul className="MenuItems">
        {PAGES.map((page: string) => (
          <li className="MenuItem">{page}</li>
        ))}
      </ul>
      <h1 className="SaintStephHeader">Saint Steph</h1>
      <div className="menuIcon" onClick={() => turnOnSideNav(true)}>
        <MenuIcon sx={{ fontSize: '2em' }} />
      </div>
      <Socials />
    </div>
  );
}
