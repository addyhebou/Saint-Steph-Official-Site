import React from 'react';
import '../Styles/SideNav.scss';
import { PAGES, PageLink } from '../Constants/Pages';
import { SAINT_STEPH_SOCIALS, Social } from '../Constants/Socials';
import Socials from './Socials';
import { Close } from '@mui/icons-material';

export default function SideNav({
  isOpen,
  setIsOpen,
  scroll,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scroll: any;
}) {
  const openStyles = isOpen ? '85vw' : '0vw';

  return (
    <div className="SideNav" style={{ width: openStyles }}>
      <Close sx={{ fontSize: '3em' }} onClick={() => setIsOpen(false)} />
      <ul className="SideNavMenu">
        {PAGES.map((page: PageLink) => {
          return page.name === 'about' ? (
            <p
              className="SideNavItem"
              style={{ margin: '0em' }}
              onClick={() => {
                scroll();
                setIsOpen(false);
              }}
            >
              About
            </p>
          ) : (
            <a
              className="SideNavItem"
              href={page.link}
              target={'_blank'}
              referrerPolicy="no-referrer"
            >
              {page.name}
            </a>
          );
        })}
      </ul>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}
