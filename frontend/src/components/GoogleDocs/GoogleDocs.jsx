import React, { useEffect, useState } from 'react'
import CreateBlogDraftButton from '../CreateBlog/CreateBlogDraftButton'
import axios from 'axios';
import DocDraft from './DocDraft';
import GoogleDocModal from './GoogleDocModal';
import GoogleDocForm from './GoogleDocForm';

const GoogleDocs = ({ googleDocsPage }) => {

    const [googleDocData, setGoogleDocData] = useState({
        title: '',
        text: ''
    });
    const [isAutoSaving, setIsAutoSaving] = useState(false); //show the status while autosaving as saving and saved
    const [googleDocDataDraft, setGoogleDocDataDraft] = useState([]);
    const [id, setId] = useState('');

    // create google docs draft blank template
    const createDocsDraft = async () => {
        try {
            const response = await axios.post('/doc');
            if (response && response.data.success) {
                await getGoogleDocDraft();
            }
        } catch (error) {
            console.log(error);
        }
    };

    // fetch google doc draft blank template
    const getGoogleDocDraft = async () => {
        try {
            const response = await axios.get('/doc');
            if (response && response.data.success) {
                setGoogleDocDataDraft(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // to delete the blog
    const deleteDoc = async (e, value) => {
        try {
            e.preventDefault();
            const response = await axios.delete(`/doc/${value._id}`);
            if (response && response.data.success) {
                await getGoogleDocDraft();
            }
        } catch (error) {
            console.log(error);
        }
    }

    // handle editing of draft doc template
    const handleEditDoc = async (e, value) => {
        try {
            e.preventDefault();
            setId(value._id);
            setGoogleDocData({
                ...googleDocData,
                title: value.title,
                text: value.text
            });
        } catch (error) {
            console.log(error);
        }
    };

    // clear out id and google doc while closing modal
    const handleCloseModal = async () => {
        try {
            setId('');
            setGoogleDocData({ ...googleDocData, title: '', text: '' });
        } catch (error) {
            console.log(error);
        }
    }

    // handle sideffects while fetching google doc draft template
    useEffect(() => {
        getGoogleDocDraft();
    }, [])

    // auto save feature as per the blogdata array dependencies changes
    useEffect(() => {
        try {
            setIsAutoSaving(true)
            const { title, text } = googleDocData;
            if (title.length > 0 || text.length > 0) {
                const autoSaveDoc = async () => {
                    const response = await axios.put(`/doc/${id}`, {
                        title: title,
                        text: text
                    });
                    if (response && response.data.success) {
                        await getGoogleDocDraft();
                    }
                }
                autoSaveDoc();
            }
        } catch (error) {
            console.log((error));
        } finally {
            setIsAutoSaving(false);
        }
    }, [googleDocData]);

    return (
        <main className="container-fluid flex-grow-1">
            {/* create blog draft button component */}
            <CreateBlogDraftButton
                googleDocsPage={googleDocsPage}
                createDocsDraft={createDocsDraft}
            />

            {/* Google doc modal component */}
            <GoogleDocModal
                GoogleDocForm={
                    <GoogleDocForm
                        googleDocData={googleDocData}
                        setGoogleDocData={setGoogleDocData}
                        isAutoSaving={isAutoSaving}
                    />
                }
                handleCloseModal={handleCloseModal}
            />

            {/* Doc draft component */}
            <DocDraft
                googleDocDataDraft={googleDocDataDraft}
                deleteDoc={deleteDoc}
                handleEditDoc={handleEditDoc}
            />
        </main>
    )
}

export default GoogleDocs