import React, { useEffect, useState } from 'react'
import CreateBlogDraftButton from './CreateBlogDraftButton';
import axios from 'axios';
import BlogDraft from './BlogDraft';
import BlogTemplateModal from './BlogTemplateModal';
import BlogForm from './BlogForm';
import { useNavigate } from 'react-router-dom';

const CreateBlog = ({ createBlogPage }) => {

    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        author: '',
        categories: '',
        isPublished: '',
    }); //blog data to send backend
    const [blogDraftData, setBlogDraftData] = useState([]); //fetch and set the data of  draft blog
    const [isAutoSaving, setIsAutoSaving] = useState(false); //show the status while autosaving as saving and saved
    const [id, setId] = useState(''); //store the id of blog draft
    const navigate = useNavigate();

    // create blog draft blank template
    const createBlogDraft = async () => {
        try {
            const response = await axios.post('/blog');
            if (response && response.data.success) {
                await getBlogDraft();
            }
        } catch (error) {
            console.log(error);
        }
    };

    // fetch blog draft blank template
    const getBlogDraft = async () => {
        try {
            const response = await axios.get('/blog');
            if (response && response.data.success) {
                setBlogDraftData(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // handle editing of draft blog template
    const handleEditBlog = async (e, value) => {
        try {
            e.preventDefault();
            setId(value._id);
            setBlogData({
                ...blogData,
                title: value.title,
                content: value.content,
                author: value.author,
                categories: value.categories,
                isPublished: value.isPublished
            });
        } catch (error) {
            console.log(error);
        }
    };

    // to delete the blog
    const deleteBlog = async (e, value) => {
        try {
            e.preventDefault();
            const response = await axios.delete(`/blog/${value._id}`);
            if (response && response.data.success) {
                await getBlogDraft();
            }
        } catch (error) {
            console.log(error);
        }
    }

    // clear out id and blogdata while closing modal
    const handleCloseModal = async () => {
        try {
            setId('');
            setBlogData({ ...blogData, title: '', content: '', author: '', categories: '', isPublished: '' });
        } catch (error) {
            console.log(error);
        }
    }

    // publish the auto saved blog
    const publishBlog = async (e, publishStatus) => {
        try {
            e.preventDefault();
            await handleCloseModal();
            const response = await axios.put(`/blog/${id}`, { isPublished: publishStatus });
            if (response && response.data.success) {
                navigate('/', { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
    }

    // handle sideffects while fetching blog draft template
    useEffect(() => {
        getBlogDraft();
    }, [])

    // auto save feature as per the blogdata array dependencies changes
    useEffect(() => {
        try {
            setIsAutoSaving(true);
            const { title, author, content, categories } = blogData;
            if (title.length > 0 || author.length > 0 || content.length > 0 || categories.length > 0) {
                const autoSaveBlog = async () => {
                    const response = await axios.put(`/blog/${id}`, {
                        title: title,
                        author: author,
                        content: content,
                        categories: categories
                    });
                    if (response && response.data.success) {
                        await getBlogDraft();
                    }
                }
                autoSaveBlog();
            }
        } catch (error) {
            console.log((error));
        } finally {
            setIsAutoSaving(false);
        }
    }, [blogData, id]);

    return (
        <>
            <main className="container-fluid flex-grow-1 bg-primary">
                {/* create blog draft button component */}
                <CreateBlogDraftButton
                    createBlogDraft={createBlogDraft}
                    createBlogPage={createBlogPage}
                />

                {/* Blog template modal component */}
                <BlogTemplateModal
                    blogForm={<BlogForm
                        blogData={blogData}
                        setBlogData={setBlogData}
                        isAutoSaving={isAutoSaving}
                        publishBlog={publishBlog}
                    />}
                    handleCloseModal={handleCloseModal}
                />

                {/* Blog draft component */}
                <BlogDraft
                    blogDraftData={blogDraftData}
                    handleEditBlog={handleEditBlog}
                    deleteBlog={deleteBlog}
                />
            </main>
        </>
    )
}

export default CreateBlog