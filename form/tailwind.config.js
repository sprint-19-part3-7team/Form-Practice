/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        primary: "#9935FF", // 버튼 활성화
        secondary: "#CCCCCC", // 버튼 비활성화
        danger: "#F74747", // 에러메시지
        text: "#181818", // 기본 글씨
        placeholder: "#939393", // 이미지 텍스트/placeholder
      },
    },
  },
  plugins: [],
};
