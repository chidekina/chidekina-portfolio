import { Outlet } from "react-router";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Container from "../components/Container";


const SiteLayout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}

export default SiteLayout;