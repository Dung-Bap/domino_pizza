import { createContext, useState } from 'react';
import { useDocumentTitle } from '../Hook/useDocumentTitle';

export const ModalEnvironment = createContext();

function ModalProvider({ children }) {
    const [show, setShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showNoti, setShowNoti] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [hide, setHide] = useState(true);
    const [hideModal, setHideModal] = useState(false);
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
        setHideModal(true);
        setTimeout(() => {
            setHideModal(false);
            setShowMenu(false);
        }, 650);
    };

    const handleSetDocumentTitle = (title) => {
        setDoucmentTitle(title);
    };

    const value = {
        hide,
        show,
        showNoti,
        showMenu,
        hideModal,
        document_title,
        showAddProduct,
        setHide,
        setShowNoti,
        setHideModal,
        handleHideModal,
        handleShowModal,
        setShowAddProduct,
        handleShowModalMenu,
        handleHideModalMenu,
        handleSetDocumentTitle,
    };

    return <ModalEnvironment.Provider value={value}>{children}</ModalEnvironment.Provider>;
}

export default ModalProvider;
