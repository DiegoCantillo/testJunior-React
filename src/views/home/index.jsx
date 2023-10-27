import React from 'react';
import '../../views/style.css'
import LoginUser from '../../components/LoginUser';
import { useSelector } from 'react-redux';

const Home = () => {


    return (
        <div className='homeContainer'>

            <h1>Bienvenido a mi App TESTPUBLICATION</h1>

            <LoginUser />

        </div>
    );
};

export default Home;