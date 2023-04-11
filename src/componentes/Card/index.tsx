
import React from "react"
import { CardStyled } from "./style"

const Card: React.FC = ({ children }) => {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}

export default Card