import React from 'react'

const BlogTemplateModal = ({ blogForm, handleCloseModal }) => {
    return (
        <>
            <div className="modal fade" id="blogTemplateModal" tabIndex={-1} aria-labelledby="blogTemplateModal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Blog</h1>
                            <button type="button" id="closeAdjustmentModalButton" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            {/* Blog form component */}
                            {blogForm}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogTemplateModal