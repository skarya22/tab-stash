import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const theme = createTheme();

export default function SignInPage() {
  const [signingIn, setSigningIn] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {signingIn ? (
        <SignIn setSigningIn={setSigningIn} />
      ) : (
        <SignUp setSigningIn={setSigningIn} />
      )}
    </ThemeProvider>
  );
}
