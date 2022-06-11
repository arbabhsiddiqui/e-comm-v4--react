import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormInputValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formInputs, setFormInputs] = useState(defaultFormInputValues);

  const { email, password } = formInputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("Email / user not found");
          break;

        default:
          alert(error);
          break;
      }
    }
  };

  const sigInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h1>SignIn</h1>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="btn-container">
          <Button type="submit">SignIn</Button>
          <Button type="button" buttonType="google" onClick={sigInWithGoogle}>
            SignInWithGoogle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
