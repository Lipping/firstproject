import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    size: 'small' | 'medium' | 'large'
}
export function Button({ size, children, ...rest }: ButtonProps ) {
    return <Container size={size} {...rest}>{children}</Container>
}

