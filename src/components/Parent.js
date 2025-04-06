import React, { useState } from "react"
import Child from "./Child"

const Parent = () => {
    const [value, setValue] = useState("")
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <h2>{value}</h2>
            <Child implementFun={(e) => setValue(e.target.value)} />
        </div>
    )

}

export default Parent