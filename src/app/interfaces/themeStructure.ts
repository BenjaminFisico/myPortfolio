export interface themeProperties{
    name: string,
    colorBackground: string;
    primaryColor: string;
    secondaryColor: string;
}

export interface theme{
    lightTheme: themeProperties;
    darkTheme?: themeProperties;
    blueTheme?: themeProperties;
    greenTheme?: themeProperties;
}