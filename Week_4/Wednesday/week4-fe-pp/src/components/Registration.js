import { useState } from "react";

const Registration = () => {
  const [nameData, setName] = useState("");
  const [passwordData, setPassword] = useState("");
  const [emailData, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log({ name: nameData, password: passwordData, email: emailData });
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={nameData}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          value={passwordData}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          value={emailData}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit">Submit registration</button>
      </form>
    </div>
  );
};

export default Registration;
