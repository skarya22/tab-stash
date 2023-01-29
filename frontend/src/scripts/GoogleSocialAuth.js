/*global responseGoogle*/
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import googleLogin from "./googleLoginService";

class GoogleSocialAuth extends Component {
  render() {
    const googleResponse = (response) => {
      console.log(response);
    };
    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>

        <GoogleLogin
          clientId="873000737127-3hbkfmrvajj0gs1i6oipa42n67ijg2eq.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={googleResponse}
          onFailure={googleResponse}
        />
      </div>
    );
  }
}

export default GoogleSocialAuth;
