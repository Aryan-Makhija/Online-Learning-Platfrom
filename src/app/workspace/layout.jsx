import React from 'react'
import WorkSpaceProvider from './Provider'

const WorkSpacelayout = ({ children }) => {
    return (

        <WorkSpaceProvider>

            <div>{children}</div>

        </WorkSpaceProvider>
    )
}

export default WorkSpacelayout