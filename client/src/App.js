import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/main-routes";
import {ThemeContext} from "./contexts/ThemeContext";
import './App.scss';

function App() {
    const {theme} = React.useContext(ThemeContext)
    return (
        <div data-theme={theme} className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
