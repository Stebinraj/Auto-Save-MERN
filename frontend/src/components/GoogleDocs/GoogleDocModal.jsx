import React from 'react'

const GoogleDocModal = ({ GoogleDocForm, handleCloseModal}) => {
    return (
        <>
            <div className="modal fade" id="googleDocTemplateModal" tabIndex={-1} aria-labelledby="blogTemplateModal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog" style={{ maxWidth: '100%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Document</h1>
                            <button type="button" id="closeAdjustmentModalButton" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            {/* Google Doc form component */}
                            {GoogleDocForm}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleDocModal