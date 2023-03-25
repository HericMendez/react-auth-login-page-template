import { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import Drawer from "@mui/material/Drawer";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import LogoBlack from "../../assets/hello-world-black.png";
import LogoWhite from "../../assets/hello-world-white.png";
import { useTheme } from "../../contexts/Theme/ThemeContext";
const Navbar = () => {
  const auth = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);
  const {  setCurrentTheme } = useTheme();


  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);

    setCurrentTheme(() => (isDarkMode ? "light" : "dark"));
  };


  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };

  return (
    <header className={styles.container}>
      <Link className={styles.logo} to="/">
        <img src={LogoWhite} alt="Logo da Biotrônica" />
      </Link>

      <nav>
        <div className={styles.nav_list}>
          {auth.user && (
            <>
              <Link to="/">Home</Link>
              
              <Link to="/gateways">Gateways</Link>
              <Link to="/devices">Devices</Link>
              <Link to="/" onClick={handleLogout}>
                Sair
              </Link>
              <DarkModeSwitch
                moonColor="#fff"
                sunColor="#ffff00"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
              />
            </>
          )}
        </div>
        {auth.user && (
          <div className={styles.nav_icons}>
            <DarkModeSwitch
              moonColor="#fff"
              sunColor="#ffff00"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
            <button onClick={() => setIsShown(true)} className={styles.menu}>
              <GrMenu size={32} />
              &nbsp; &nbsp; &nbsp;
            </button>
          </div>
        )}

        <Drawer anchor="right" open={isShown} onClose={() => setIsShown(false)}>
          <button
            onClick={() => setIsShown(false)}
            className={styles.btn_close}
          >
            <GrClose size={20} />
          </button>

          <nav className={styles.menu_list} >
            <Link  onClick={() => setIsShown(false)} to="/">Home</Link>
            
            <Link  onClick={() => setIsShown(false)} to="/gateways">Gateways</Link>
            <Link  onClick={() => setIsShown(false)} to="/devices">Devices</Link>
            <Link  to="/" onClick={handleLogout}>
              Sair
            </Link>
          </nav>
        </Drawer>
      </nav>
    </header>
  );
};

export default Navbar;
