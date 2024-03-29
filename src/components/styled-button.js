import React from "react"
import PropTypes from 'prop-types'
import { primaryButton, whiteButton } from './styled-button.module.css'

const StyledButton = ({buttonText, link, isWhite, openInNewTab, children}) => {
    return(
        <a href={link} className={isWhite ? whiteButton : primaryButton} target={openInNewTab ? '_blank' : ''} rel='noopener noreferrer'>{buttonText}{children}</a>
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