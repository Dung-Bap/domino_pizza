import Header from '../DefaultLayout/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default HeaderOnly;
