import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../../views/style.css'
import { createPublication } from '../../../api/createPublication';
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ModalCreatePublication = ({ handleActive1 }) => {


    const { handleSubmit, register } = useForm();

    const userId = useSelector((state) => state.user.userId);
    const isLogin = useSelector((state) => state.user.isLogin);
    const [loading, setLoading] = useState(true);



    const Navigate = useNavigate();

    const submit = async (data) => {
        if (isLogin === true) {
            const sentData = {
                ...data,
                userId: userId,
            }
            try {
                setLoading(true)
                const response = await createPublication(sentData);
                if (response.status === 201) {
                    toast.success("Publicaciión exitosa")
                    console.log('Publicación exitosa', response.data);
                    setTimeout(() => {
                        handleActive1();
                        const alertMessage = `Título: ${sentData.title}\nDescripción: ${sentData.body}`
                        alert(alertMessage)
                    }, 2000);
                }
            } catch (error) {
                console.error('Error al crear la publicación:', error);
            } finally {
                setLoading(false)
            }

        } else {
            Navigate('/')
        }

    };

    return (
        <div className='containerCreatePublication'>

            <h3>
                Escribe tú publicaión
            </h3>

            <form onSubmit={handleSubmit(submit)}>

                <div className='inputContainer'>
                    <label htmlFor="title">titulo</label>
                    <input type="text" id="title" {...register("title")} />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="body">Texto</label>
                    <textarea name="" id="body" cols="30" rows="10" {...register("body")}>

                    </textarea>

                </div>

                <div className='btnContainer'>
                    <button>Publicar</button>
                    <button onClick={handleActive1} type='button' style={{ background: "red" }}>
                        Cancelar
                    </button>
                </div>

            </form>
            <Toaster richColors />
        </div>
    );
};

export default ModalCreatePublication;