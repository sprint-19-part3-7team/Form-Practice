import { useState } from "react";
import "./Password.css";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value === "") {
      setError("");
    } else if (value.length < 8) {
      setError("비밀번호는 최소 8자 이상이어야 합니다.");
    } else {
      setError("");
    }
  };

  return (
    <div className="password-form">
      <input
        onChange={onChangePassword}
        placeholder={"비밀번호를 입력해주세요."}
        type="password"
        value={password}
        className={error ? "error" : ""}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
export default PasswordForm;
