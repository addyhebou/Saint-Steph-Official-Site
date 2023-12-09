import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import { useState, useRef } from 'react';
import SideNav from './Components/SideNav';
import PortfolioPage from './Pages/PortfolioPage';

function App() {
  const [sidenavOpen, setSidenavOpen] = useState<boolean>(false);
  const myRef = useRef(null);
  const executeScroll = () => {
    if (!myRef || !myRef.current) return;
    return (myRef.current as any).scrollIntoView();
  };
  return (
    <div className="App">
      <Navbar
        turnOnSideNav={setSidenavOpen}
        dimmed={sidenavOpen}
        scroll={executeScroll}
      />
      <SideNav
        isOpen={sidenavOpen}
        setIsOpen={setSidenavOpen}
        scroll={executeScroll}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage ref={myRef} sidenavOpen={sidenavOpen} />}
        />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
