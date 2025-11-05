import { useState } from "react";
import "./Bio.css";

const BioForm = () => {
  const [bio, setBio] = useState("");

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="bio-form">
      <textarea
        value={bio}
        onChange={onChangeBio}
        placeholder="자기소개를 입력해주세요."
      />
    </div>
  );
};
export default BioForm;
// 선택 입력 (입력하지 않아도 제출 가능)
