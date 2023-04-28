interface IThemeTypes {
    themewhite: {
        headerBackgroundColor: string;
        backgroundColor: string;
        color: string;
    };
    themeBlack: {
        headerBackgroundColor: string;
        backgroundColor: string;
        color: string;
    };
}

export const theme: IThemeTypes = {
    themewhite: {
        headerBackgroundColor: "#37adc5",
        backgroundColor: "#c4f1be",
        color: "#333",
    },
    themeBlack: {
        headerBackgroundColor: "#333",
        backgroundColor: "red",
        color: "#000",
    },
};
