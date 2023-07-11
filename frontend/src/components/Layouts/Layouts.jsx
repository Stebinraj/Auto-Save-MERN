import React from 'react'

const Layouts = ({ navbar, footer, mainContent }) => {
    return (
        <>
            <div className="container-fluid p-0 d-flex flex-column min-vh-100">
                {navbar}
                {mainContent}
                {footer}
            </div>

        </>
    )
}

export default Layouts