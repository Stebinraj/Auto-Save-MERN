import React from 'react'

const Home = () => {
    return (
        <>
            <main className="container-fluid flex-grow-1">
                <div className="row mt-2">
                    <div className="col-sm-12 col-md-4 m-auto mt-2" style={{ border: '2px solid red' }}>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 m-auto mt-2" style={{ border: '2px solid red' }}>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home