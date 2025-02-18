import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../store/features/authSlice";
import {
  SigninContainer,
  SigninForm,
  FormTitle,
  FormGroup,
  Input,
  ButtonContainer,
  SubmitButton,
  ErrorMessage,
  SignupButton,
  SuccessMessage,
} from "./styles";

const SigninPage = () => {
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: location.state?.email || "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState(
    location.state?.message || ""
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    // Clear success message after 5 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser(credentials));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  return (
    <SigninContainer>
      <SigninForm onSubmit={handleSubmit}>
        <FormTitle>Sign In</FormTitle>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <ButtonContainer>
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </SubmitButton>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          <SignupButton type="button" onClick={() => navigate("/signup")}>
            Create an Account
          </SignupButton>
        </ButtonContainer>
      </SigninForm>
    </SigninContainer>
  );
};

export default SigninPage;
