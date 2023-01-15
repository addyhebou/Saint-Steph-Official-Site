import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import SideNav from '../Components/SideNav';
import '../Styles/HomePage.scss';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [sidenavOpen, setSidenavOpen] = useState<boolean>(false);
  return (
    <div className="HomePage">
      <Navbar turnOnSideNav={setSidenavOpen} dimmed={sidenavOpen} />
      <Banner dimmed={sidenavOpen} />
      <SideNav isOpen={sidenavOpen} setIsOpen={setSidenavOpen} />
    </div>
  );
}
