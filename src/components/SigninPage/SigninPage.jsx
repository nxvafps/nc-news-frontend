import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/features/authSlice";
import {
  SigninContainer,
  SigninForm,
  FormTitle,
  FormGroup,
  Input,
  SubmitButton,
  ErrorMessage,
  SignupButton,
} from "./styles";

const SigninPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

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
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </SubmitButton>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <SignupButton type="button" onClick={() => navigate("/signup")}>
          Create an Account
        </SignupButton>
      </SigninForm>
    </SigninContainer>
  );
};

export default SigninPage;
