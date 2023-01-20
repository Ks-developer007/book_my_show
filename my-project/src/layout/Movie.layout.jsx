import React, { Component } from 'react'
import Movienavbar from '../componets/navbar/Movienavbar.component'

const MovieLayoutHoc =
(component) =>
({...props}) => {
    return (
        <div>
            <Movienavbar />
            <component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default MovieLayoutHoc