import React, {Component, Fragment} from 'react';
import TopNavigations from "../components/TopNavigations/TopNavigations";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import AllServices from "../components/AllServices/AllServices";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigations title='Service'/>
                <PageTop pageTitle='Services'/>
                <AllServices/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;