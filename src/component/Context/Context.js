import { createContext, useState } from 'react';
import { useDocumentTitle } from '../Hook/useDocumentTitle';
import Modal from '../Modal/Modal';
import ModalMenu from '../Modal/ModalMenu/ModalMenu';

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
    };

    const handleShowModalMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
        document.body.style.overflow = !showMenu ? 'hidden' : 'overlay';
    };

    const handleHideModalMenu = () => {
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

    return (
        <ModalEnvironment.Provider value={value}>
            {children} <Modal />
            <ModalMenu />
        </ModalEnvironment.Provider>
    );
}

export default ModalProvider;
