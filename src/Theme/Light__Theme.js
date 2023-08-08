import { createTheme } from '@mui/material';

const font = 'Roboto, sans-serif';

const Theme = createTheme({
    palette: {
        mode: 'light',
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#34C759",      // Blue
            light: "#49EE73",     // Light Blue
            dark: "#0EA033",      // Dark Blue
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
            fontSize: "2.125rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontWeight: '400',
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
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
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2: {
            fontWeight: '400',
            fontSize: "0.875rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em"
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(52,199,89)",
                    color: "#fff",
                    padding: "0.2rem",
                    border: "none",
                    borderRadius: 4,
                    fontSize: 16,
                    cursor: "pointer",
                    textTransform: 'none',
                    transition: "background-color 0.3s",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                        backgroundColor: "rgba(41,184,77,1)",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    },
                },
            },
        },
    },
});

export default Theme;

