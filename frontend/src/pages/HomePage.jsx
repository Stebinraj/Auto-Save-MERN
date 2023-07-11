import React from 'react'
import Layouts from '../components/Layouts/Layouts';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import MainContent from '../components/Layouts/MainContent';
import Home from '../components/Home/Home';

const HomePage = () => {

    const homePage = true;

    return (
        <>
            <Layouts
                navbar={<Navbar />}
                mainContent={<MainContent
                    homePage={homePage && (<Home />)}
                />}
                footer={<Footer />}
            />
        </>
    )
}

export default HomePage