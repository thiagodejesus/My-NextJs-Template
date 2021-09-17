import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
