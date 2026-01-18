import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import RollEpstein from './Components/EpsteinRoll/rollEpstein.jsx';
import '../css/container.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <h1>Hello, React!!</h1>
        <RollEpstein />
    </>
);
