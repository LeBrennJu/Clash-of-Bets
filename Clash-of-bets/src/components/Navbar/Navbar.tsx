import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <>
      <header>

        <h1>Clash of Bets</h1>

        <div className="icon"></div>

        <nav>

          <NavLink className="NavLink" to="/">Accueil</NavLink>
          <NavLink className="NavLink" to="/tableau">Tableau</NavLink>
          <NavLink className="NavLink" to="/">Notification</NavLink>

        </nav>

      </header>
    </>
  );
}

export default Navbar;