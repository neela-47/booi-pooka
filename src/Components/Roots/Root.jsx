import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Homepage from '../HomePage/Homepage';

const Root = () => {
    return (
        <>
        hello
        <Homepage></Homepage>
        <Outlet></Outlet>
        </>
    );
};

export default Root;