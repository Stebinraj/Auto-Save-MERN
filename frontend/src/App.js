import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'
import CreateBlogPage from './pages/CreateBlogPage';
import GoogleDocsPage from './pages/GoogleDocsPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create/blog' element={<CreateBlogPage />} />
            <Route path='/doc/google' element={<GoogleDocsPage />} />
        </Routes>
    );
}

export default App;
