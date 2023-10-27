import { useState } from 'react';

const useToggleActive = (initialValue = false) => {

    const [isActive, setIsActive] = useState(initialValue);

    const handleActive = () => {
        setIsActive(prevActive => !prevActive);
    };

    return [isActive, handleActive];
};

export default useToggleActive;
