# Mement AI FE Assignment

Mement AI Frontend Developer Assignment Repository

## 프로젝트 소개

### 내용

과제 목표에 따라 기능을 구현합니다.

<br/>

## 과제 목표

- **Webpack 적용**

이 과제에서는 `create-react-app`의 `react-scripts` 대신 직접 Webpack 설정을 구현해야 합니다. 초기 `index.js` 파일과 `webpack.config.js` 파일을 설정하여 React 애플리케이션을 빌드할 수 있도록 합니다.

- **칼럼 확장**

현재 애플리케이션은 하나의 칼럼만을 가지고 있습니다. 이를 네 개의 칼럼으로 확장하고 각 칼럼에는 독립적인 드래그 앤 드롭 영역이 있어야 합니다.

- **드래그 제약 조건**

- 첫 번째 칼럼에서 세 번째 칼럼으로는 아이템 이동이 불가능해야 합니다.
- 짝수 아이템은 다른 짝수 아이템 앞으로 이동할 수 없습니다.
- 이동할 수 없는 지점으로 아이템을 드래그 할 경우, 제약이 있음을 사용자가 알 수 있도록 합니다.
  (ex. 드래그 중인 아이템의 색상이 붉은색으로 변경됨 등)

- **멀티 드래그 구현**

사용자가 여러 아이템을 선택하고, 이를 다른 칼럼으로 함께 드래그하여 이동할 수 있어야 합니다.

<br/>

## 프로젝트 실행 가이드

- 실행 방법 (2가지 중 택 1)
  > 1. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행
  > 2. 아래 커멘드를 이용한 실행

```bash
$ git clone https://github.com/H0onnn/Front_Assignment.git
$ yarn install
$ yarn dev
```

<br/>

## 기술 스택

#### Core

`TypeScript`, `React 18`

#### Convention

`eslint`, `prettier`, `yarn`

### Styling

`TailwindCss`

<br/>
