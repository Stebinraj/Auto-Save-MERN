import React from 'react'

const DocDraft = ({ googleDocDataDraft, handleEditDoc, deleteDoc }) => {
    return (
        <>
            <div className="row">
                {googleDocDataDraft.map((value, index) => {
                    return (
                        <div className="col-6 col-md-4 col-lg-3 mt-3 mb-3" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{value.title ? (value.title) : ('Blank Template')}</h5>
                                    <p className="card-text">Get Started by creating your Doc!!!</p>
                                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#googleDocTemplateModal" onClick={(e) => { handleEditDoc(e,value) }}>Edit</button>
                                    <button className='btn btn-danger ms-5' onClick={(e) => { deleteDoc(e, value) }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DocDraft