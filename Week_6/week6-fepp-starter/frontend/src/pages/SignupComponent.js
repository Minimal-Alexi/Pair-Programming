import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { email, setEmail, password, setPassword, confirmationPassword, setConfirmationPassword, handleSignup } = useSignup(setIsAuthenticated);
  const textInput = useField('text', email, setEmail);
  const passwordInput = useField('password', password, setPassword);
  const passwordInput2 = useField('password', confirmationPassword, setConfirmationPassword);



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
      <label>
        Confirm password:
        <input {...passwordInput2}
        />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
