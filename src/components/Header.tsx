import { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/Auth/AuthContext";

const Header = () => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };

  return (
    <header>

      <nav>
 
        {auth.user && <>
               <Link to="/">Home</Link>
        <Link to="/admin">Dashboard</Link>
        <button onClick={handleLogout}>Sair</button>
        </>}
      </nav>
    </header>
  );
};

export default Header;
