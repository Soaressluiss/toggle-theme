export interface IThemeTypes {
    themeLight: {
        colorPrimary: string;
        colorSecondary: string;
        color: string;
        containerIcon: string;
        colorSpan: string;
    };
    themeDark: {
        colorPrimary: string;
        colorSecondary: string;
        color: string;
        containerIcon: string;
        colorSpan: string;
    };
}

export const Theme: IThemeTypes = {
    themeLight: {
        colorPrimary: "#DFEDF4",
        colorSecondary: "#FEFEDF",
        color: "#333",
        containerIcon: "#FFC75F",
        colorSpan: "#008584",
    },
    themeDark: {
        colorPrimary: "#333",
        colorSecondary: "#656565",
        color: "white",
        containerIcon: "#845EC2",
        colorSpan: "#FF69B4",
    },
};
