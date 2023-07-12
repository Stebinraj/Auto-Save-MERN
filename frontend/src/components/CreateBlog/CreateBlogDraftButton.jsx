import React from 'react'

const CreateBlogDraftButton = ({ createBlogDraft, createBlogPage, googleDocsPage, createDocsDraft }) => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <button className='btn btn-primary' onClick={createBlogPage ? (createBlogDraft) : googleDocsPage && (createDocsDraft)}>{createBlogPage ? ('Create Blog') : ('Create Doc')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBlogDraftButton