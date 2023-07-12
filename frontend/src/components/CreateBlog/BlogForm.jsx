import React from 'react'

const BlogForm = ({ blogData, setBlogData, isAutoSaving, publishBlog }) => {
    return (
        <>
            <form>
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
                <button className='form-control btn btn-primary mt-3 w-25 mx-auto d-block' id="closeAdjustmentModalButton" data-bs-dismiss="modal" aria-label="Close"
                    onClick={(e) => {
                        blogData.isPublished ? (publishBlog(e, false)) : (publishBlog(e, true))
                    }}>
                    {blogData.isPublished ? ('Unpublish') : ('Publish')}
                </button>
                <small>{isAutoSaving ? ('Saving...') : ('Saved')}</small>
            </form>
        </>
    )
}

export default BlogForm