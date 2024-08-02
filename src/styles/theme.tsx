import { extendTheme } from "@chakra-ui/react";
import '@fontsource/ubuntu';

const theme = extendTheme({
    styles: {
        global: () => ({
            'html, body': {
                color: 'black',
                background: 'whitesmoke'
            }
        }),
    },
    fonts: {
        heading: `'Ubuntu', sans-serif`,
        body: `'Ubuntu', sans-serif`,
    },
});

export default theme;
