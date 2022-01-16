import React, {Component, Fragment} from 'react';
import TopNavigations from "../components/TopNavigations/TopNavigations";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/AllCourses/AllCourses";

class AllCoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigations title='Courses'/>
                <PageTop pageTitle='All Courses'/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllCoursesPage;