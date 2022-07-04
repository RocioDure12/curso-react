import "../styles/_usandocontext.scss";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";


const UsandoContext = () => {
    return (
        <>
            <div>
                <Nav />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default UsandoContext;