import React from 'react'

export default function ButtonUi(props) {
    return (
        <button type="button" className='btn btn-icon'>{props.children}</button>
    )
}
