import React from 'react';
import '../../views/style.css'
import LoginUser from '../../components/LoginUser';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

    const isLogin = useSelector((state) => state.user.isLogin);

    return (
        <div className='homeContainer'>

            <h1>Vienvenido mi App</h1>

            <LoginUser />

        </div>
    );
};

export default Home;