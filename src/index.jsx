import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpFrom from './components/SignAppForm';
import Content from './components/Content';
import Stars from './components/Stars';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Stars/>
        <Content/>
        <SignUpFrom/>
    </>
);