import React, {FC, ReactNode} from "react"
import {ButtonProps} from "./Button.types";

const View: FC<ButtonProps> = ({children}) => {
    return (
        <button>{children}</button>
    )
}

export default View