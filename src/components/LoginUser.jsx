import React, { useState } from 'react';
import "./style.css"
import { useForm } from 'react-hook-form';
import useToggleActive from '../utils/hook/useToggleActive';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const LoginUser = () => {

    const [isActive, handleActive] = useToggleActive(true)
    const { handleSubmit, register } = useForm();

    const dispatch = useDispatch()

    const Navigate = useNavigate()

    const submit = (data) => {
        const userAllData = {
            ...data,
            isLogin: true,
            userId: Date.now(),
        }

        try {
            dispatch(setUser(userAllData))

            Navigate('/publications')
            toast.success('inicio exitoso')

        } catch (error) {
            console.log("ocurrio un error", error);
        }

    }


    return (
        <div className='cardForm'>
            <h3>Inicio de sesión</h3>

            <form onSubmit={handleSubmit(submit)}>
                <div className='inputContainer'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" {...register("email")} placeholder='example@gmail.com' required />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="password">Contraseña</label>
                    <div className="containerBtn-input">
                        <input type={isActive ? "password" : "text"} id="password" {...register("password")} placeholder='tu contraseña' required />
                        <button type='button' className='lookPassword' onClick={handleActive}>
                            {isActive ? "ver" : "Ocultar"}
                        </button>
                    </div>
                </div>
                <div className='btnContainer'>
                    <button>Iniciar Sesión</button>
                </div>
            </form>

            <Toaster richColors />
        </div>
    );
};

export default LoginUser;