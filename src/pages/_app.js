import React from 'react';
import ThemeContextProvider from '../contexts/theme-context';
import '../styles/globals.css';
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/components/dev";

const App = ({Component, pageProps}) => {
    return (
        <ThemeContextProvider>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
        </ThemeContextProvider>
    );
};

export default App;