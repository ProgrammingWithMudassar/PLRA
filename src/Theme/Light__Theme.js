import { createTheme } from '@mui/material';

const font = 'Nunito, sans-serif';

const Theme = createTheme({
    palette: {
        mode: 'light',
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#379237",      // green
            light: "#49EE73",     // Light green
            dark: "#0EA033",      // Dark green
            contrastText: "#fff", // White
        },
        secondary: {
            main: "#F57C00",      // Orange
            light: "#FFA726",     // Light Orange
            dark: "#E65100",      // Dark Orange
            contrastText: "#fff", // White
        },
        error: {
            main: "#FF3D00",      // Red
            light: "#FF8A80",     // Light Red
            dark: "#B71C1C",      // Dark Red
            contrastText: "#fff", // White
        },
        warning: {
            main: "#FFC107",      // Yellow
            light: "#FFD54F",     // Light Yellow
            dark: "#FFA000",      // Dark Yellow
            contrastText: "#fff", // White
        },
        info: {
            main: "#2196F3",      // Light Blue
            light: "#90CAF9",     // Lighter Blue
            dark: "#1565C0",      // Darker Blue
            contrastText: "#fff", // White
        },
        success: {
            main: "#4CAF50",      // Green
            light: "#81C784",     // Light Green
            dark: "#388E3C",      // Dark Green
            contrastText: "#fff", // White
        },
        gray:{
            main:"#A1A1A1"
        },
        grey: {
            50: "#FAFAFA",        // Very Light Grey
            100: "#F5F5F5",       // Light Grey
            200: "#EEEEEE",       // Grey
            300: "#E0E0E0",       // Medium Grey
            400: "#BDBDBD",       // Dark Grey
            500: "#9E9E9E",       // Darker Grey
            600: "#757575",       // Even Darker Grey
            700: "#616161",       // Very Dark Grey
            800: "#424242",       // Almost Black
            900: "#212121",       // Black
            A100: "#D5D5D5",      // Lightest Grey
            A200: "#AAAAAA",      // Lighter Grey
            A400: "#303F9F",      // Purpleish Grey
            A700: "#616161",      // Very Dark Grey
        },
    },
    typography: {
        fontFamily: font,
        h1: {
            fontWeight: '300',
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontWeight: '300',
            fontSize: "3.75rem",
            lineHeight: 1.12,
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontWeight: '400',
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4: {
            fontWeight: '400',
            fontSize: "1.5rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontWeight: '400',
            fontSize: "1.2rem",
            lineHeight: 1.334,
            letterSpacing: "0em",
        },
        h6: {
            fontWeight: '500',
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em"
        },
        subtitle1: {
            fontWeight: '400',
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontWeight: '500',
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em"
        },
        body1: {
            fontWeight: '400',
            fontSize: "16px",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2: {
            fontWeight: '400',
            fontSize: "14px",
            lineHeight: 1.43,
            letterSpacing: "0.01071em",
            color: "#212121"
        },
    },
    components: {
        // Inputs 
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-input": {
                        padding: "0.35rem",
                        border: "1ox solid #ced4da",
                        fontSize: "0.85rem",
                    },
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "0.3rem",
                        "&:hover fieldset": {
                            border: "1ox solid #7EEE9B"
                        },
                        "&.Mui-focused fieldset": {
                            border: "1ox solid #7EEE9B"
                        },
                    },
                    width: '100%',
                    height: "33px"
                },
            },
        },

        // Buttons
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "0.17rem 2rem",
                    border: "none",
                    borderRadius: 4,
                    fontSize: 16,
                    cursor: "pointer",
                    textTransform: 'none',
                    transition: "background-color 0.3s",
                    boxShadow: "0px 0px 9px 5px rgba(231, 231, 231, 0.5)"
                },
                contained: {
                    backgroundColor: "#379237",
                    color: "#fff",
                    borderRadius: 4,
                    "&:hover": {
                        backgroundColor: "#379237",
                        borderRadius: 4,
                        boxShadow: "0px 0px 9px 5px rgba(231, 231, 231, 0.5)"
                    },
                },
                outlined: {
                    backgroundColor: "transparent",
                    color: "rgb(52,199,89)",
                    border: "1px solid #379237",
                    borderRadius: 6,

                    "&:hover": {
                        backgroundColor: "#379237",
                        border: "1px solid rgb(52,199,89)",
                        borderRadius: 6,
                    },
                },
            },
        },

        // InputLabel
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#495057",
                    fontSize: "0.95rem",
                    marginTop: "-0.5rem"
                },
            },
        },

        // Select 
        MuiSelect: {
            styleOverrides: {
                root: {
                    padding: "0.3rem", width: "100%",
                    border: "1ox solid #ced4da",
                    fontSize: "0.85rem",
                    height: "29.5px",
                },
            },
        },

        //Menu Item
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '0.75rem',
                    width: '100%'
                },
            },
        },

        //Table
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: '1px solid rgb(52, 199, 89)',
                    borderRadius: '4px',
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#379237",
                        color: "#FFFFFF",
                        fontSize: 16,
                    },

                    '& .MuiIconButton-root': {
                        Color: "#000",
                    },
                    '& .MuiDataGrid-columnMenuContainer': {
                        width: '0px', // Adjust the desired width
                    },
                },
                columnSeparator: {
                    height: "200px"
                },
                virtualScroller: {
                    '&::-webkit-scrollbar': {
                        width: '0.5rem',
                        height: '0.5rem'
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgb(52, 199, 89)',
                        borderRadius: '4px',
                    },
                },
                columnMenu: {
                    backgroundColor: '#fff', // Change the background color here
                },
            },
        },

        //Card
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 0px 19px 9px rgba(231, 231, 231, 0.7)",
                    borderRadius:'8px'
                },
            },
        },

        //Dialog
        MuiDialog: {
            styleOverrides: {
                paper: {
                    width: '90%', // Set the desired width here
                    maxWidth: 'none',
                    borderRadius: "10px"
                },
            },
        },


        //TabBar Customization
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: "13px",
                    textTransform: 'none',
                },
            },
        },
        MuiTabList: {
            styleOverrides: {
                root: {
                    maxHeight:"20px"
                },
            },
        },
        MuiTabList: {
            styleOverrides: {
                root: {
                    minHeight: '30px', 
                },
            },
        },
    }
});

export default Theme;

