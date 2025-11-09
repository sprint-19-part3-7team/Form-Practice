import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = value => {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') setError('');
    else if (!emailRegex.test(value))
      setError('이메일 형식에 맞게 작성해주세요.');
    else setError('');
  };

  return (
    <div className="flex w-full max-w-[720px] flex-col">
      <input
        type="email"
        value={email}
        onChange={e => handleChange(e.target.value)}
        placeholder="이메일을 입력해주세요."
        className="font-regular-16 rounded-md border border-gray-200 px-4 py-3 text-gray-400 placeholder-gray-300"
      />
      {error && <p className="text-error font-regular-16 mt-1">{error}</p>}
    </div>
  );
};

export default EmailForm;
