import PropTypes from 'prop-types';


const Header = ({ title }) => {
    return(
    <h1>{title}</h1>
    )
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header