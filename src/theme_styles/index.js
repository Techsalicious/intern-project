export default {
    // example colors with dark mode
    colors: {
        text: '#343D48', // body color and primary color
        textSecondary: '#ffffff', // secondary body color
        background: '#fff', // body background color
        backgroundSecondary: '#f7f7f7', // secondary background color
        primary: '#ea414b', // primary button and link color
        darkBackground: "#232323",
        muted: "#999999"
    },
    fonts: {
        body: 'DM Sans, sans-serif',
        // body:
        //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'DM Sans, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [
        12, // 0
        14, // 1
        16, // 2
        18, // 3
        20, // 4
        22, // 5
        24, // 6
        28, // 7
        30, //8
        32, // 9
        36, // 10
        42, // 11
        48, // 12
        52, // 13
        64, // 14
    ],
    fontWeights: {
        body: 'normal',
        heading: 700,
        bold: 900,
    },
    lineHeights: {
        body: 1.5,
        // body: 1.5,
        heading: 1.25,
        // heading: 1.125,
    },
    letterSpacings: {
        body: 'normal',
        caps: '0.2em',
        heading: '-0.5px',
    },
    space: [
        0, //0
        8, //1
        16, //2
        24, //3
        32, //4
        40, //5
        48, //6
        56, //7
        64, //8
        72, //9
        80, //10
        88, //11
        96, //12
        104, //13
        112, //14
        120, //15
    ],
    sizes: {},
    breakpoints: [
        '480px',
        '640px',
        '768px',
        '1024px',
        '1200px',
        '1367px',
        '1440px',
    ],
    layout: {
        container: {
            maxWidth: ['100%', null, null, null, '970px', '1140px', '1260px'],
            paddingLeft: [2, 6, 8, 10],
            paddingRight: [2, 6, 8, 10],
            py: [8],
            m: '0 auto',
            // background: "cyan"
        },
    },
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 10,
            color: "text"
        },
        heroTitle: {
            fontSize: [4, 5, , 5, 10],
            fontWeight: 900,
            letterSpacing: 'heading',
            textTransform: "uppercase",
            lineHeight: [1.4, null, null, null, 1.2],
        },
    },
    links: {
        bold: {
            fontWeight: 'bold',
        },
        learnMore: {
            display: 'inline-flex',
            alignItems: 'center',
            fontWeight: 700,
            color: 'primary',
        }
    },
    images: {
        logo: {
            // background: "red",
            height: 'auto',
            width: ['100%'],
        },
    },
    buttons: {
        default: {
            backgroundColor: 'transparent',
            fontSize: 1,
            fontFamily: 'body',
            fontWeight: 'heading',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '0.3s ease-in-out 0s',
            whiteSpace: 'nowrap',
            width: "fit-content",
            borderRadius: "50px",
            border: "3px solid transparent",
            letterSpacing: "1px",
        },
        primary: {
            variant: 'buttons.default',
            color: 'white',
            bg: 'primary',
            // minHeight: ['40px', '40px', '40px', '40px', '40px', '50px'],
            padding: ['10px 25px', null, null, '10px 30px'],
            '&:hover': {
                borderColor: "primary",
                background: "white",
                color: "primary"
            },
        },
    },
    forms: {
        input: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 .1px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        textarea: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 .1px ${t.colors.primary}`,
                outline: 'none',
            },
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',

            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 10,
            },

            '::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                background: 'lightgray'
            },

            "*, *::after, *::before": {
                padding: 0,
                margin: 0,
                boxSizing: "border-box"
            },

            a: {
                textDecoration: "none",
                color: "inherit",
            },
            ul: {
                listStyle: "none"
            },
            // h1-h6 Heading styles
            h1: {
                variant: 'text.heading',
                fontSize: 8,
                letterSpacing: "letterSpacings.caps"
            },
            h2: {
                variant: 'text.subHeading',
                fontSize: 6,
            },
            h3: {
                variant: 'text.heading',
                fontSize: 4,
            },
            h4: {
                variant: 'text.heading',
                fontSize: 3,
            },
            h5: {
                variant: 'text.heading',
                fontSize: 2,
            },
            h6: {
                variant: 'text.heading',
                fontSize: 1,
            },

            // Divider styles
            hr: {
                border: 1,
                borderBottom: '1px solid',
                borderColor: '#D9E0E7',
            },
        },
    }
}