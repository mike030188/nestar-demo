import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";

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

// 1. Pages routing - birinchi _document private ssr iwga tuwib ohiri Client da tugedi iw
// 2. App routing -> by default SSR bo`lib agar Hooklar integration kk bo`lsa "use-client"orqali ClIENT sidega otkaziladi

/* SASS 
1 - NESTED ichma ich
2. Variable - $ syntax
3. Mixin - not use

*/
