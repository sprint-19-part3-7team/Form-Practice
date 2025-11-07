import { useState } from "react";

const BioForm = () => {
  const [bio, setBio] = useState("");

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <textarea
        className={`
          w-full max-w-[720px]
          h-[150px]
          resize-none
          py-3 px-4
          rounded-lg
          border border-[#CCC]
          bg-white
          text-text font-pretendard text-[16px] leading-[26px]
          placeholder:placeholder font-pretendard placeholder:text-[16px]
          outline-none
        `}
        value={bio}
        onChange={onChangeBio}
        placeholder="자기소개를 입력해주세요."
      />
    </div>
  );
};

export default BioForm;
