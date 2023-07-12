import React from 'react'

const MainContent = ({ homePage, createBlogPage, googleDocsPage }) => {
    return (
        <>
            {homePage}
            {createBlogPage}
            {googleDocsPage}
        </>
    )
}

export default MainContent