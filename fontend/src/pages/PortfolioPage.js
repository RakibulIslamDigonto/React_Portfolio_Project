import React, {Component, Fragment} from 'react';
import TopNavigations from "../components/TopNavigations/TopNavigations";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigations title='Portfolio'/>
                <PageTop pageTitle='Portfolio'/>
                <AllProjects/>
                <Footer/>

            </Fragment>
        );
    }
}

export default PortfolioPage;