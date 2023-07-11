import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create/post' element={<CreatePostPage />} />
        </Routes>
    );
}

export default App;
