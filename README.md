# 🕺 폼 구현 실습하기 (진행 과정)

- 작업 기간: 11.5 ~
- JS 구현 진행 과정 정리

---

# ⚙️ 프로젝트 기본 세팅

## 0️⃣ TODO

- [x] vite 프로젝트 세팅
- [x] Prettier 설정
- [ ] ESLint 설정
- [ ] Husky 설정
- [ ] commit lint 설정
- [ ] 파일 절대 경로 설정

## 1️⃣ vite 프로젝트 설치

- `.`은 현재 디렉토리를 의미함

```bash
npm create vite@latest .
```

---

## 2️⃣ Prettier 설정

**프리티어 패키지 설치**

- `--save-exact` 옵션을 추가하면 버전이 고정됨 `ex) ^9.1 (x) 9.1(o)`
- 프로젝트 시 같은

```bash
npm install --save-dev --save-exact prettier
```

**프리티어 설정 추가**

- `.prettierrc`, `.prettierignore` 파일 생성 후 설정 추가

> 참고) 아래 명령어로 프리티어 파일을 생성할 수 있음
> 명령어 없이 그냥 파일 생성해도 됨
>
> ```bash
> node --eval "fs.writeFileSync('.prettierrc','{}\n')"
> node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
> ```

- Prettier [playground](https://prettier.io/playground/) 참고해서 prettier 설정 추가
- prettierignore 파일 설정 추가 (node_modules, dist, .github)
- `scripts`에 프리티어 실행 커맨드 설정

---

## 3️⃣ ESLint 설정

**프리티어 설정 패키지 설치**

- ESLint와 Prettier를 같이 사용할 때 설치하는 패키지
- ESLint 규칙 중 프리티어와 충돌할 수 있는 규칙을 꺼줌

```bash
npm i --D --save-exact eslint-config-prettier
```
