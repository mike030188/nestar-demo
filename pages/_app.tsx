import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { light } from "../scss/MaterialTheme";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // console.log("App - PAGES ROUTER");
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, Redux, Mui...global integration qiliw mumkin
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
// App-> (pageProps.ni)qolgan barcha pages routingda joylawgan filelarga tarqatmoqda props sifatida;
