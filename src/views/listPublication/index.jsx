import React, { useEffect, useState } from 'react';
import '../style.css'
import { getAllPublications } from '../../api/getAllPublications';
import useToggleActive from '../../utils/hook/useToggleActive';
import ModalCreatePublication from './ModalCreatePublication';

const ListPublication = () => {

    const [publications, setPublications] = useState(null)
    const [isActive1, handleActive1] = useToggleActive(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getAllPublications()
            .then((res) => setPublications(res.data))
            .catch((Error) => {
                console.log("ocurrio al tarer las publicaciones", Error);
            })
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className='containerPublications' >
            <h2>List Publication</h2>

            <div className='createPublication'>
                <button onClick={handleActive1}>
                    Click aquí para crear tú Publicación
                </button>
            </div>

            {
                isActive1 && (
                    <ModalCreatePublication handleActive1={handleActive1} />
                )
            }

            <ul>
                {loading && (<li>Cargando...</li>)}
                {publications?.map((publication) => (
                    <li key={publication.id}>
                        <div className='cardPublication'>
                            <h3>{publication.title}</h3>
                            <p>{publication.body}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPublication;