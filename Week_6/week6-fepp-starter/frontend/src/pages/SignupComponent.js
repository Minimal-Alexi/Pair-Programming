import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { email, setEmail, password, setPassword, handleSignup } = useSignup(setIsAuthenticated);
  const textInput = useField('text', email, setEmail);
  const passwordInput = useField('password', password, setPassword);

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input {...textInput}
        />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordInput}
        />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
