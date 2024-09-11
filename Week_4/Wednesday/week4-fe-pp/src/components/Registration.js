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
    <section className="section">
      <div>
        <form onSubmit={submit}>
          <input
            value={nameData}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          ></input>
          <input
            value={passwordData}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></input>
          <input
            value={emailData}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          ></input>
          <button type="submit" className="btn">
            Submit registration
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
