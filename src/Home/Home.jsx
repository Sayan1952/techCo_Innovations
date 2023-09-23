import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet/>
        </div>
    );
};

export default Home;