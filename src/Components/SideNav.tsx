import React from 'react';
import '../Styles/SideNav.scss';
import { PAGES } from '../Constants/Pages';
import { SAINT_STEPH_SOCIALS, Social } from '../Constants/Socials';
import Socials from './Socials';
import { Close } from '@mui/icons-material';

export default function SideNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const openStyles = isOpen ? '85vw' : '0vw';

  return (
    <div className="SideNav" style={{ width: openStyles }}>
      <Close sx={{ fontSize: '3em' }} onClick={() => setIsOpen(false)} />
      <ul className="SideNavMenu">
        {PAGES.map((page: string) => (
          <li className="SideNavItem">{page}</li>
        ))}
      </ul>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}
