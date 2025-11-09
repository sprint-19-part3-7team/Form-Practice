import { useState } from 'react';

const Password = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = value => {
    setPassword(value);

    if (value === '') setError('');
    else if (value.length < 8)
      setError('비밀번호는 최소 8자 이상이어야 합니다.');
    else setError('');
  };

  return (
    <div className="flex w-full max-w-[720px] flex-col">
      <input
        type="password"
        value={password}
        onChange={e => handleChange(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
        className="font-regular-16 rounded-md border border-gray-200 px-4 py-3 text-gray-400 placeholder-gray-300"
      />
      {error && <p className="text-error font-regular-16 mt-1">{error}</p>}
    </div>
  );
};

export default Password;
