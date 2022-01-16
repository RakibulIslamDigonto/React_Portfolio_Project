import React from 'react';
import ServicesPage from "./pages/ServicesPage";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./components/Router/AppRoute";

function App() {
  return (
    <BrowserRouter>
        <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
