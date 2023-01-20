import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu-items">
        <li className="menu-item">
          <img src={"/images/diet.png"}></img>
          <a href="#">Dietas</a>
        </li>
        <li className="menu-item">
          <img src={"/images/desayunos.png"}></img>
          <a href="#">Desayunos</a>
        </li>
        <li className="menu-item">
          <img src={"/images/snacks.png"}></img>
          <a href="#">Snacks</a>
        </li>
        <li className="menu-item">
          <img src={"/images/comidas.png"}></img>
          <a href="#">Comidas</a>
        </li>
        <li className="menu-item">
        <img src={"/images/cenas.png"}></img>
          <a href="#">Cenas</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
