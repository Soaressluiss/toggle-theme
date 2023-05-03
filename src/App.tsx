import { Main } from "./AppStyles";
import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { ThemeContextt } from "./contexts/themeContext/ThemeContext";

function App() {
    const { toggle } = useContext(ThemeContextt);

    return (
        <ThemeProvider theme={toggle}>
            <Header />
            <Main>
                <h4>Theme toggle with Styled Components</h4>
            </Main>
        </ThemeProvider>
    );
}

export default App;
