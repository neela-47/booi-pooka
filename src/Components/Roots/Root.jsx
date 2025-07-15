import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
        hello
        <Outlet></Outlet>
        </>
    );
};

export default Root;