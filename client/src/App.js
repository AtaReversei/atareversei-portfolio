import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/main-routes";
import {ThemeContext} from "./contexts/ThemeContext";
import './App.scss';
import Navbar from "./macro-components/Navbar/Navbar";
import Footer from "./macro-components/Footer/Footer";

function App() {
    const {theme} = React.useContext(ThemeContext)
    return (
        <div data-theme={theme} className="app">
            <Navbar/>
            <RouterProvider router={router} />
            <Footer/>
        </div>
    );
}

export default App;
