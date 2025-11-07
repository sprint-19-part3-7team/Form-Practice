const PasswordForm = ({ password, error, onChangePassword }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <input
        type="password"
        value={password}
        onChange={(e) => onChangePassword(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
        className={`
          w-full max-w-[720px]
          py-3 px-4
          rounded-lg
          border ${error ? "border-danger" : "border-[#CCC]"}
          bg-white
          text-text font-pretendard text-[16px] leading-[26px]
          placeholder:placeholder font-pretendard placeholder:text-[16px]
          outline-none
        `}
      />
      {error && (
        <p className="text-danger font-pretendard text-[16px] leading-[26px] mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordForm;
