import React from "react"

const Child = ({implementFun}) => {

    return (
        <div className="child">
            <h1>Child Component</h1>
            <input type="text" onChange={implementFun} />
        </div>
    )
}

export default Child