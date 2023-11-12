import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpFrom from './components/SignAppForm';
import Content from './components/Content';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <script type="text/javascript" src='./utils/validation.js'></script>
        <Content/>
        <SignUpFrom/>
    </>
);