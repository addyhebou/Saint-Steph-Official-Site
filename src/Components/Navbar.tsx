import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/Navbar.scss';
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
          return page.name === 'about' ? (
            <p className="MenuItem" onClick={scroll}>
              About
            </p>
          ) : (
            <a
              className="MenuItem"
              href={page.link}
              target={page.name !== 'portfolio' ? '_blank' : ''}
              rel="noreferrer"
            >
              {page.name}
            </a>
          );
        })}
      </ul>
      <h1 className="SaintStephHeader">Saint Steph</h1>
      <div className="menuIcon" onClick={() => turnOnSideNav(true)}>
        <MenuIcon sx={{ fontSize: '2em' }} />
      </div>
      <Socials />
    </div>
  );
}
