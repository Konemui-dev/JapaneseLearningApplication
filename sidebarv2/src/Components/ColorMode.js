import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material";



export const ColorModeContextProvider = ({ children}) => {
    const [mode, setMode] =  React.useState<"light" | "dark"> ("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () =>{
                setMode((prevMode) = (prevMode === "light"? "dark" : "light"));
            },
            mode,
        }),
        [mode]
    );

    const theme = React.useMemo(
        () =>
        createTheme({
            palett:{
                mode,
                primary:{
                    main: "#5cbc63",
                    contrastText: "#fff",
                }
            }
        })
    )


    return(
        <ColorModeContextProvider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContextProvider>
    )

}
export const useColorMode = () => React.useContext(ColorModeContextProvider);