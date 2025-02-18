import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../store/features/authSlice";
import {
  SignupContainer,
  SignupForm,
  FormTitle,
  FormGroup,
  Input,
  ButtonContainer,
  SubmitButton,
  ErrorMessage,
  SigninButton,
} from "./styles";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "confirmPassword" || name === "password") {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const userData = {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    const resultAction = await dispatch(signupUser(userData));
    if (signupUser.fulfilled.match(resultAction)) {
      navigate("/signin", {
        state: {
          message: "Account created successfully! Please sign in.",
          email: formData.email,
        },
      });
    }
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <FormTitle>Create Account</FormTitle>
        <FormGroup>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <ButtonContainer>
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </SubmitButton>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          <SigninButton type="button" onClick={() => navigate("/signin")}>
            Already have an account? Sign In
          </SigninButton>
        </ButtonContainer>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignupPage;
