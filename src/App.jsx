import NavbarPhone from "./componentes/NavbarPhone"
import NavbarDesktop from "./componentes/NavbarDesktop"
import Home from "./componentes/Home"
import SobreMi from "./componentes/SobreMi"
import QueHago from "./componentes/QueHago"
import Portfolio from "./componentes/Portfolio"
import Contacto from "./componentes/Contacto"
import Footer from "./componentes/Footer"
import { useEffect, useState } from "react"

const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {windowWidth <= 980 ? <NavbarPhone /> : <NavbarDesktop />}
    <div className="divav">
    <Home />
    <SobreMi />
    <QueHago />
    <Portfolio />
    <Contacto />
    <Footer />
    </div>
    </>
  )
}

export default App
