import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onclick}) => {
    return (
        <button onClick={onclick} style = {{ backgroundColor:color}} 
        className="btn">{text}</button>    
    )
}

Button.defaultProps = {
    color:'steelblue',
    text:'Add'
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onclick:PropTypes.func
}

export default Button
