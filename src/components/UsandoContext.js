import "../styles/_usandocontext.scss";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Context from "../Context/Context";
import { useContext } from "react";


const UsandoContext = () => {
    return (
        <>
            <div className="modo-claro">
                <Nav />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default UsandoContext;