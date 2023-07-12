import React from 'react'

const CreateBlogDraftButton = ({ createBlogDraft }) => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <button className='btn btn-primary' onClick={createBlogDraft}>Create Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBlogDraftButton