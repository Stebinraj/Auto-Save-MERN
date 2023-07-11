import React from 'react'
import Layouts from '../components/Layouts/Layouts';
import Navbar from '../components/Layouts/Navbar';
import MainContent from '../components/Layouts/MainContent';
import Footer from '../components/Layouts/Footer';
import CreatePost from '../components/CreatePost/CreatePost';

const CreatePostPage = () => {

    const createPostPage = true;

    return (
        <>
            <Layouts
                navbar={<Navbar />}
                mainContent={<MainContent
                    createPostPage={createPostPage && (<CreatePost />)}
                />}
                footer={<Footer />}
            />
        </>
    )
}

export default CreatePostPage