import Blog from '~/pages/Blog/Blog';
import Header from '../DefaultLayout/Header';
import Footer from '../DefaultLayout/Footer';

function BlogLayout({ children }) {
    return (
        <>
            <Header />
            <Blog />
            {children}
            <Footer />
        </>
    );
}

export default BlogLayout;
