import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Posts, PostDetails } from './pages';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Posts />} />
                    <Route path='/posts/:id' element={<PostDetails />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;