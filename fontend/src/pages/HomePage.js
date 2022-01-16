import React, {Component, Fragment} from 'react';
import TopNavigations from "../components/TopNavigations/TopNavigations";
import TopBanner from "../components/TopBanner/topBanner";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import OurCources from "../components/OurCources/OurCources";
import Video from "../components/Video/Video";
import ClienReview from "../components/ClienReview/ClienReview";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigations title='Homepage'/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProjects/>
                <OurCources/>
                <Video/>
                <ClienReview/>
                <Footer/>

            </Fragment>
        );
    }
}

export default HomePage;