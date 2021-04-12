import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (  
        <>
            <header className="p-2">
                <nav>
                    <h1 className="m-1 text-center">{title}</h1>
                </nav>
            </header>
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;