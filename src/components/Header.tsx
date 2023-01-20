import './Header.css';
import SearchBar from './SearchBar';

function Header(){
    return <div className="header">
    <ul className="navbar">
      <div className="navbar-item" id="logo">
        <img src={"/images/logo.png"}></img>
      </div>
      <div className="navbar-item" id="navbar-menu">
        <SearchBar />
      </div>
      <div className="navbar-item" id="navbar-extra-cont"></div>
    </ul>
  </div>
}

export default Header;