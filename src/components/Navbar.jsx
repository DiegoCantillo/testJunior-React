import React from 'react';
import offUser from '../assets/user-profile.jpg'
import onUser from '../assets/profileOn.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../features/userSlice';

const Navbar = () => {

    const isLogin = useSelector((state) => state.user.isLogin)
    const email = useSelector((state) => state.user.email)

    const dispatch = useDispatch()

    const goOut = () => {
        const data = {
            email: "",
            password: "",
            userId: "",
            isLogin: false
        }
        dispatch(setUser(data))
    }

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <h3>
                    TEST REACT JUNIOR
                </h3>
            </Link>
            <div className='profile'>
                <div className='imgUser'>
                    <img src={!isLogin ? offUser : onUser} alt='imgProfile' />
                    <p>{email}</p>
                </div>
                <div>
                    {!isLogin ? (
                        <Link to={'/'}>
                            <button>
                                Iniciar sesión
                            </button>
                        </Link>
                    ) :
                        <button style={{ background: "red" }} onClick={goOut}>
                            Cerrar sesión
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;