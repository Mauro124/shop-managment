import React, { FC } from 'react'


interface Props {
    image: string;
    width?: number;
}

export const Logo: FC<Props> = ({ image, width = 280 }) => {
    return (
        <img src={image} alt="logo" width={width} />
    )
}
