import './Header.css';

function Header(){
    return <div className="header">
    <ul className="navbar">
      <div className="navbar-item" id="logo">
        <img src={"/images/logo.png"}></img>
      </div>
      <div className="navbar-item" id="navbar-menu">
        <li className="navbar-menu-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#">Second</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#">Third</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#">Fourth</a>
        </li>
      </div>
      <div className="navbar-item" id="navbar-extra-cont"></div>
    </ul>
  </div>
}

export default Header;