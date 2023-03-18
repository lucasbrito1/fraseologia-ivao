import { createTheme } from '@mui/material';
import { cyan, red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: red[700],
        },

        secondary: {
            main: cyan[500],
        },

        background: {
            paper: '#fff',
            default: '#e7ebf0',
        },
    },

    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});