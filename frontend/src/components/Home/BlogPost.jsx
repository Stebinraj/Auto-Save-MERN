import moment from 'moment/moment'
import React from 'react'
import ShowMoreText from 'react-show-more-text'

const BlogPost = ({ blogData }) => {
    return (
        <>
            <div className="row mt-2 mb-2">
                {blogData.map((value, index) => {
                    return (
                        <div className="col-sm-12 col-md-4 m-auto mt-2" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <h6>Category : {value.categories}</h6>
                                    <ShowMoreText
                                        lines={3}
                                        anchorClass=""
                                        more={<span className='badge text-bg-primary' style={{ cursor: 'pointer' }}>Read More</span>}
                                        less={<span className='badge text-bg-danger' style={{ cursor: 'pointer' }}>Read Less</span>}
                                        expanded={false}
                                    >
                                        {value.content}
                                    </ShowMoreText>
                                    <p className="card-text"><small className="text-body-secondary">Posted / Updated {moment(value.updatedAt).format('DD-MM-YYYY')} - {value.author} </small></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BlogPost