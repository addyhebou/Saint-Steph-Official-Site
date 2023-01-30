import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/Navbar.scss';
import { SAINT_STEPH_SOCIALS, Social } from '../Constants/Socials';
import { PAGES, PageLink } from '../Constants/Pages';
import Socials from './Socials';

export default function Navbar({
  turnOnSideNav,
  dimmed,
  scroll,
}: {
  turnOnSideNav: React.Dispatch<React.SetStateAction<boolean>>;
  dimmed: boolean;
  scroll: any;
}) {
  const dimStyles = dimmed ? 'rgba(0,0,0,.5)' : '';

  return (
    <div className="Navbar" style={{ backgroundColor: dimStyles }}>
      <ul className="MenuItems">
        {PAGES.map((page: PageLink) => {
          return (
            <p className="MenuItem" onClick={scroll}>
              {page.name}
            </p>
          );
        })}
      </ul>
      <h1 className="SaintStephHeader">My Intern Proposal</h1>
      <div className="menuIcon" onClick={() => turnOnSideNav(true)}>
        <MenuIcon sx={{ fontSize: '2em', color: 'white' }} />
      </div>
      <Socials />
    </div>
  );
}
