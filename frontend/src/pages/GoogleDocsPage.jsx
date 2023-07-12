import React from 'react'
import Layouts from '../components/Layouts/Layouts';
import Navbar from '../components/Layouts/Navbar';
import MainContent from '../components/Layouts/MainContent';
import Footer from '../components/Layouts/Footer';
import GoogleDocs from '../components/GoogleDocs/GoogleDocs';

const GoogleDocsPage = () => {
    const googleDocsPage = true;

    return (
        <>
            <Layouts
                navbar={<Navbar />}
                mainContent={<MainContent
                    googleDocsPage={googleDocsPage && (<GoogleDocs
                        googleDocsPage={googleDocsPage}
                    />)}
                />}
                footer={<Footer />}
            />
        </>
    )
}

export default GoogleDocsPage