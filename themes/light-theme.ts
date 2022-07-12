import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1E1E1E'
        },
        secondary: {
            main: '#3A64D8'
        },
        info: {
            main: '#000000'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed',
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    height: 60
                },
            }
        },


        MuiButton: {
            defaultProps: {
                variant: 'contained',
                disableElevation: true,
                color: 'info',
            },
            variants: [{
                props: { variant: 'text' },
                style: {
                    backgroundColor: 'transparent',
                    color: 'black',
                    ":hover": {
                        color: 'secondary.main',
                        backgroundColor: 'transparent',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }],
            styleOverrides: {
                root: {
                    padding: '12px 8px',
                    borderRadius: 10,
                    ":hover": {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },


        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        }

    }
});