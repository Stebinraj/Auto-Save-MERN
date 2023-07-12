import React from 'react'
import Layouts from '../components/Layouts/Layouts';
import Navbar from '../components/Layouts/Navbar';
import MainContent from '../components/Layouts/MainContent';
import Footer from '../components/Layouts/Footer';
import CreateBlog from '../components/CreateBlog/CreateBlog';

const CreateBlogPage = () => {

    const createBlogPage = true;

    return (
        <>
            <Layouts
                navbar={<Navbar />}
                mainContent={<MainContent
                    createBlogPage={createBlogPage && (<CreateBlog />)}
                />}
                footer={<Footer />}
            />
        </>
    )
}

export default CreateBlogPage