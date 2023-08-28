import { createTheme } from '@mui/material';
const font = 'Segoe UI';
const Theme = createTheme({
    palette: {
        mode: 'light',
        common: {
            black: "#201F1E",
            white: "#F3F2F1",
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
        gray: {
            main: "#A1A1A1"
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
            color: "#201F1E"
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
            fontSize: "12px",
            lineHeight: 1.43,
            letterSpacing: "0.01071em",
            color: "#201F1E"
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-input": {
                        padding: "0.2rem",
                        paddingLeft: "0.67rem",
                        borderRadius: "0.2rem",
                        fontSize: "12px",
                        height: "13.5px",
                    },
                    "& .MuiOutlinedInput-root": {
                        padding: "0.2rem",
                        borderRadius: "0.2rem",
                        "&:hover fieldset": {
                            padding: "0.2rem",
                            border: "1px solid #379237",
                            borderRadius: "0.2rem",
                        },
                        "&.Mui-focused fieldset": {
                            padding: "0.2rem",
                            border: "1px solid #379237",
                            borderRadius: "0.2rem",
                        },
                    },
                    width: '100%',
                },
                disabled: { // Style for disabled state
                    "& .MuiOutlinedInput-root": { // Change to .MuiOutlinedInput-root
                        border: "1px solid #fff",
                        color: "#000",
                    },
                },
            },
        },
        // Buttons
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "0.3rem 0rem",
                    border: "none",
                    borderRadius: 30,
                    fontSize: 22,
                    cursor: "pointer",
                    textTransform: 'none',
                    transition: "background-color 0.3s",
                    "&:hover": {
                        backgroundColor: 'rgba(41, 184, 77, 0.1)'
                    }
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
                    fontSize: "0.85rem",
                    marginTop: "-0.5rem",
                    fontFamily: font,
                    color: "#201F1E"
                },
            },
        },

        // Select
        MuiSelect: {
            styleOverrides: {
                root: {
                    width: "100%",
                    fontSize: "12px",
                    height: "26.5px",
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
                    border: '1px solid #379237',
                    borderRadius: '6px',
                    backgroundColor: "#F9F8F7",
                    color: "#201F1E",
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#379237",
                        color: "#FFFFFF",
                        fontSize: 14,
                    },
                    '& .MuiIconButton-root': {
                        Color: "#000",
                    },
                    '& .MuiDataGrid-columnMenuContainer': {
                        width: '0px', // Adjust the desired width
                    },
                },
                columnSeparator: {
                    height: "120px"
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
                    // boxShadow: "0px 0px 19px 9px rgba(231, 231, 231, 0.7)",
                    borderRadius: '8px',
                    backgroundColor: "#F9F8F7"
                },
            },
        },

        //Dialog
        MuiDialog: {
            styleOverrides: {
                paper: {
                    width: '90%', // Set the desired width here
                    maxWidth: 'none',
                    borderRadius: "10px",
                    backgroundColor: "#F9F8F7",
                },
            },
        },

        //Drawar
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#F3F2F1", // Set your desired background color here
                },
            },
        },

        //TabBar Customization
        MuiTab: {
            styleOverrides: {
                root: {
                    color: "#201F1E",
                    fontSize: "13px",
                    textTransform: 'none',
                    fontWeight: 600
                },
            },
        },
        MuiTabList: {
            styleOverrides: {
                root: {
                    color: "#201F1E",
                    maxHeight: "20px"
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