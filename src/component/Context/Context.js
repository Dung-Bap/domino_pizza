import { createContext, useState } from 'react';
import { useDocumentTitle } from '../Hook/useDocumentTitle';

export const ModalEnvironment = createContext();

function ModalProvider({ children }) {
    const [show, setShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [document_title, setDoucmentTitle] = useDocumentTitle(
        `Domino's Pizza Việt Nam - Thương Hiệu Pizza Số 1 Thế Giới`,
    );

    const handleShowModal = () => {
        setShow(true);
        document.body.style.overflow = !show ? 'hidden' : 'overlay';
    };

    const handleHideModal = () => {
        setShow(false);
        document.body.style.overflow = !show ? 'hidden' : 'overlay';
    };

    const handleShowModalMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const handleHideModalMenu = (e) => {
        e.stopPropagation();
        setShowMenu(false);
    };

    const handleSetDocumentTitle = (title) => {
        setDoucmentTitle(title);
    };

    const value = {
        handleShowModal,
        handleHideModal,
        handleShowModalMenu,
        handleHideModalMenu,
        handleSetDocumentTitle,
        show,
        showMenu,
        document_title,
    };

    return <ModalEnvironment.Provider value={value}>{children}</ModalEnvironment.Provider>;
}

export default ModalProvider;
