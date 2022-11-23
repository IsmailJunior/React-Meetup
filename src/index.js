import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/context';
export {default as AllMeetups} from './pages/AllMeetups'
export {default as NewMeetup} from './pages/NewMeetup'
export {default as Favorites} from './pages/Favorites'
export { default as MainNavigation } from './components/layout/MainNavigation'
export { default as MeetupItem } from './components/meetups/MeetupItem'
export { default as MeetupList } from './components/meetups/MeetupList'
export { default as Card } from './components/interface/Card'
export { default as Layout } from './components/layout/Layout'
export { default as NewMeetupForm } from "./components/meetups/NewMeetupForm";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter> 
    </FavoritesContextProvider>
);
