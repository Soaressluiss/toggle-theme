import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { ThemeContextt } from "./contexts/themeContext/ThemeContext";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    const { toggle } = useContext(ThemeContextt);

    return (
        <ThemeProvider theme={toggle}>
            <Header />
            <Main />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
