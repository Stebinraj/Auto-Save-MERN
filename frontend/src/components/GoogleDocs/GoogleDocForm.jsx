import React from 'react'

const GoogleDocForm = ({ googleDocData, setGoogleDocData, isAutoSaving }) => {
    return (
        <form>
            <div className="form-group">
                <label className="form-label" htmlFor="title">Title</label>
                <input className='form-control' autoComplete='title' type="text" id='title' onChange={(e) => { setGoogleDocData({ ...googleDocData, title: e.target.value }) }} value={googleDocData.title} />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="content">Text</label>
                <textarea className='form-control' autoComplete='content' id='content' onChange={(e) => { setGoogleDocData({ ...googleDocData, text: e.target.value }) }} value={googleDocData.text} />
            </div>
            <p className='text-end'>{isAutoSaving ? ('Saving...') : ('Saved')}</p>
        </form>
    )
}

export default GoogleDocForm