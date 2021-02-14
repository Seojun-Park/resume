interface IProps {
  palette: {
    primary: string;
    hover: string;
    secondary: string;
    background: string;
    white: string;
    black: string;
    lightgray: string;
    gray: string;
    darkgray: string;
    orange: string;
  };
  typography: {
    title: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
    subtitle: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    heading: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
    subheading: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
    label: {
      fontFamily: string;
      fontWeight: number;
    };
    description: {
      fontFamily: string;
      lineHeight: number;
    };
    body: {
      fontFamily: string;
    };
    caption: {
      fontFamily: string;
      fontSize: string;
    };
    button: {
      fontFamily: string;
      fontSize: string;
    };
    textbutton: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      border: number;
    };
  };
}

const theme: IProps = {
  palette: {
    primary: "#0063FF",
    hover: "#1e3799",
    secondary: "#0a8080",
    background: "#151619",
    white: "#ffffff",
    black: "#222525",
    lightgray: "#e2e2e2",
    gray: "#8a8a8a",
    darkgray: "#505050",
    orange: "#f45d48",
  },
  typography: {
    title: {
      fontFamily: '"Archivo", sans-serif',
      fontSize: "3rem",
      fontWeight: 600,
    },
    subtitle: {
      fontFamily: '"Archivo", sans-serif',
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.1,
    },
    heading: {
      fontFamily: '"Archivo", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    subheading: {
      fontFamily: '"Archivo", sans-serif',
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    label: {
      fontFamily: '"Archivo", sans-serif',
      fontWeight: 700,
    },
    description: {
      fontFamily: '"Archivo", sans-serif',
      lineHeight: 1.5,
    },
    body: {
      fontFamily: '"Archivo", sans-serif',
    },
    caption: {
      fontFamily: '"Archivo", sans-serif',
      fontSize: "0.875rem",
    },
    button: {
      fontFamily: '"Archivo", sans-serif',
      fontSize: "0.875rem",
    },
    textbutton: {
      fontFamily: '"Archivo", sans-serif',
      fontWeight: 700,
      fontSize: "1rem",
      border: 0,
    },
  },
};

export default theme;
