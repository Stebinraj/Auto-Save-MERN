import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'

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
                <div className="row mt-2">
                    {blogData.map((value, index) => {
                        return (
                            <div className="col-sm-12 col-md-4 m-auto mt-2" key={index}>
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <h6>Category : {value.categories}</h6>
                                        <p className="card-text">{value.content}</p>
                                        <p className="card-text"><small className="text-body-secondary">{moment(value.createdAt).format('DD-MM-YYYY')} - {value.author}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Home