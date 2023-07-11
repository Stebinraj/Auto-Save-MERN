import React, { useState } from 'react'

const CreatePost = () => {

    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        author: '',
        categories: '',
        image: []
    });

    return (
        <>
            <main className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="row w-100">
                    <div className="col-md-6 m-auto">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <h1 className='text-center text-primary'>Create Blog</h1>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="title">Title</label>
                                        <input className='form-control' autoComplete='title' type="text" id='title' onChange={(e) => { setBlogData({ ...blogData, title: e.target.value }) }} value={blogData.title} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="content">Content</label>
                                        <textarea className='form-control' autoComplete='content' id='content' onChange={(e) => { setBlogData({ ...blogData, content: e.target.value }) }} value={blogData.content} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="author">Author</label>
                                        <input className='form-control' type="text" id='author' onChange={(e) => { setBlogData({ ...blogData, author: e.target.value }) }} value={blogData.author} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="categories">Categories</label>
                                        <input className='form-control' type="text" id='categories' onChange={(e) => { setBlogData({ ...blogData, categories: e.target.value }) }} value={blogData.categories} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="image">Image</label>
                                        <input className='form-control' name='blog-image' type="file" id='image' onChange={(e) => { setBlogData({ ...blogData, image: e.target.files[0] }) }} />
                                    </div>
                                    <button className='form-control btn btn-primary mt-3 w-25 mx-auto d-block' type='submit' id='btn'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CreatePost