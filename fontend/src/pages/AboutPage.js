import React, {Component, Fragment} from 'react';
import TopNavigations from "../components/TopNavigations/TopNavigations";
import PageTop from "../components/PageTop/PageTop";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigations title='About'/>
                <PageTop pageTitle='About Me'/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;