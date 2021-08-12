import '../styles/styles.css';

const Aside = () => {

    return (
    <>
        <aside className="col-1 order-1 aside-menu bg-light">
            <nav className="d-flex flex-column w-100 h-100 align-items-center">
                <i className="fas fa-home fa-2x my-3 text-secondary trans-color-300 pointer"></i>
                <i className="fas fa-map-marker-alt fa-2x my-3 text-primary trans-color-300 pointer"></i>
                <i className="far fa-star fa-2x my-3 text-secondary trans-color-300 pointer"></i>
                <i className="fas fa-search fa-2x my-3 text-secondary trans-color-300 pointer"></i>
            </nav>
        </aside>
    </>
    )
}

export default Aside;
