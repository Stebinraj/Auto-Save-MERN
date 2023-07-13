import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost';

const Home = () => {

    const [blogData, setBlogData] = useState([]);

    // fetch blog posts
    const getBlog = async () => {
        try {
            const response = await axios.get('/blog');
            if (response && response.data.success) {
                setBlogData(response.data.data.filter(items => items.isPublished === true));
            }
        } catch (error) {
            console.log(error);
        }
    };

    // handle the side effects while fetching blog posts
    useEffect(() => {
        getBlog();
    }, [])


    return (
        <>
            <main className="container-fluid flex-grow-1">
                {/* Blog post component */}
                <BlogPost
                    blogData={blogData}
                />
            </main>
        </>
    )
}

export default Home