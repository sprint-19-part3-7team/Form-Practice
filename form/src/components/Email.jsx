import { useState } from "react";
import "./Email.css";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setError("");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError("이메일 형식에 맞게 작성해주세요.");
    } else {
      setError("");
    }
  };

  return (
    <div className="email-form">
      <input
        onChange={onChangeEmail}
        placeholder={"이메일을 입력해주세요."}
        type="email"
        value={email}
        className={error ? "error" : ""}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
export default EmailForm;
