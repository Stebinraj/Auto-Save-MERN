import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 bg-primary text-white text-center">
                        <strong>Copyright &copy; {new Date().getFullYear()} </strong>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer