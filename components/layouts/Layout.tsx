import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Navbar } from '../admin';

import { SideMenu } from '../ui';


interface Props {
    title: string;
    subTitle: string;
    children: React.ReactNode;
    icon?: JSX.Element;
}

export const Layout: FC<Props> = ({ children, title, subTitle, icon }) => {
    return (
        <>

            <nav>
                <Navbar />
            </nav>

            <SideMenu />

            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>

                <Box display="flex" flexDirection='column'>
                    <Typography variant='h1' component='h1'>
                        {icon}
                        {' '} {title}
                    </Typography>
                    <Typography variant='h2' sx={{ mb: 1 }}>{subTitle}</Typography>

                </Box>

                <Box className='fadeIn'>
                    {children}
                </Box>

            </main>


        </>
    )
}