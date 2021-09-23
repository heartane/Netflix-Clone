import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const history = useHistory();
  const { authService } = useContext(FirebaseContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = userName === "" || password === "" || email === "";

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(authService, email, password);
      await updateProfile(authService.currentUser, {
        displayName: userName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      });
      history.push(ROUTES.BROWSE);
    } catch (error) {
      setUserName("");
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="User name"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />
            <Form.Input
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user?{" "}
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
