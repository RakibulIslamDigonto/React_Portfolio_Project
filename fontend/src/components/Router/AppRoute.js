import React, {Component, Fragment} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ServicesPage from "../../pages/ServicesPage";
import AllCourcesPage from "../../pages/AllCourcesPage";
import PortfolioPage from "../../pages/PortfolioPage";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route end path='/' element={<HomePage/>}/>
                    <Route end path='/service' element={<ServicesPage/>}/>
                    <Route end path='/course' element={<AllCourcesPage/>}/>
                    <Route end path='/portfolio' element={<PortfolioPage/>}/>
                    <Route end path='/contact' element={<ContactPage/>}/>
                    <Route end path='/about' element={<AboutPage/>}/>

                </Routes>

            </Fragment>
        );
    }
}

export default AppRoute;