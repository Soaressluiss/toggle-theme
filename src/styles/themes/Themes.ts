export interface IThemeTypes {
    themeLight: {
        colorPrimary: string;
        colorSecondary: string;
        color: string;
        containerIcon: string;
    };
    themeDark: {
        colorPrimary: string;
        colorSecondary: string;
        color: string;
        containerIcon: string;
    };
}

export const Theme: IThemeTypes = {
    themeLight: {
        colorPrimary: "#DFEDF4",
        colorSecondary: "#FEFEDF",
        color: "#333",
        containerIcon: "#FFC75F",
    },
    themeDark: {
        colorPrimary: "#333",
        colorSecondary: "#656565",
        color: "white",
        containerIcon: "#845EC2",
    },
};
