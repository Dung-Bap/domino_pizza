import { createContext, useState } from 'react';

export const ModalEnvironment = createContext();

function ModalProvider({ children }) {
    const [show, setShow] = useState(false);

    const handleShowModal = () => {
        setShow(true);
    };

    const handleHideModal = () => {
        setShow(false);
    };

    const value = {
        handleShowModal,
        handleHideModal,
        show,
    };

    return <ModalEnvironment.Provider value={value}>{children}</ModalEnvironment.Provider>;
}

export default ModalProvider;
