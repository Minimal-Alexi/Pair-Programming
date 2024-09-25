import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin(setIsAuthenticated);
  const emailInput = useField('text',email,setEmail);
  const passwordInput = useField('password',password,setPassword);

  return (
    <div>
      <h2>Login</h2>
      <label>
        email:
        <input {...emailInput}/>
      </label>
      <br />
      <label>
        Password:
        <input {...passwordInput}/>
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
