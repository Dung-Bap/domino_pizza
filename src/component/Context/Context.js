import { createContext, useState } from 'react';

export const ModalEnvironment = createContext();

function ModalProvider({ children }) {
    const [show, setShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleShowModal = () => {
        setShow(true);
    };

    const handleHideModal = () => {
        setShow(false);
    };

    const handleShowModalMenu = () => {
        setShowMenu(!showMenu);
    };

    const value = {
        handleShowModal,
        handleHideModal,
        handleShowModalMenu,
        show,
        showMenu,
    };

    return <ModalEnvironment.Provider value={value}>{children}</ModalEnvironment.Provider>;
}

export default ModalProvider;
