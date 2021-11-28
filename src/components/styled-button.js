import React from "react"
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './styled-button.module.css'

const StyledButton = ({buttonText, link, isWhite, openInNewTab}) => {
    return(
        <a href={link} className={isWhite ? styles.whiteButton : styles.primaryButton} target={openInNewTab ? '_blank' : ''} rel='noopener noreferrer'>{buttonText}</a>
    );
}

StyledButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isWhite: PropTypes.bool,
    openInNewTab: PropTypes.bool,
}

StyledButton.defaultProps = {
    isWhite: false, 
    openInNewTab: false,
}

export default StyledButton; 