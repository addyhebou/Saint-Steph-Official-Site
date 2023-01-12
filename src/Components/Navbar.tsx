import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/Navbar.scss';

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1>Saint Steph</h1>
      <div className="menuIcon">
        <MenuIcon sx={{ fontSize: '2em' }} />
      </div>
    </div>
  );
}
