# MementoAI FE Assignment

MementoAI Frontend Developer Assignment Repository

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

## 🚀 프로젝트 상세

#### [Assignment 1] 프로젝트 세팅

- 1.1) `react-scripts`를 사용하지 않고 프로젝트 세팅

  > 별도의 툴을 사용하지 않고 `webpack` 설정을 통해 `react` 프로젝트를 세팅했습니다.

- 1.2) TypeScript 사용

  > 타입 안정성을 위해 모든 코드를 타입스크립트로 작성하고, 기존 작성된 js 파일을 ts 파일로 재작성 했습니다.

<br/>

#### [Assignment 2] 칼럼 확장

기존 1개의 컬럼을 4개로 확장 하였고, dummy column data를 관리하기 위해 `mock` 폴더에 별도 파일로 분리했습니다.

추가적인 컬럼 확장이 필요한 경우 `dummay.ts` 파일에 컬럼 데이터를 추가하여 컬럼을 확장할 수 있습니다.

<br/>

#### [Assignment 3] 드래그 제약 조건

- 1.1) 첫 번째 컬럼에서 세 번째 컬럼으로 아이템 이동 불가

  > 컬럼의 `index`를 이용하여 첫 번쨰 컬럼에서 세 번째 컬럼으로 이동할 수 없도록 구현했습니다.

- 1.2) 짝수 아이템은 다른 짝수 아이템 앞으로 이동 불가

  > `짝수 아이템` 을 화면에 그려지는 아이템의 순서 중 짝수 번째의 아이템으로 이해하고, 이에 맡게 구현했습니다.
  >
  > 컬럼 내의 아이템 `index`를 이용하였으며, 동일 컬럼 내의 짝수 아이템은 다른 짝수 아이템 앞으로의 이동이 불가능 하도록 구현했습니다. (ex. 화면상 2번째 아이템은 4번째 아이템의 앞으로 이동할 수 없습니다.

- 1.3) 이동 불가 제약의 알림

  > 사용자가 이동이 불가능한 위치로 드래그 할 경우 색상 변경을 통해 이를 시각적으로 나타냈습니다.

![짝수아이템](https://github.com/H0onnn/Front_Assignment/assets/116232939/43c5f3fa-e8c4-421b-bf5a-d35dc71eda0e)

#### [Assignment 4] 멀티 드래그

키보드의 `ctrl` (mac의 경우 `command`) 키를 누른 상태로 아이템을 클릭하여 다중 선택이 가능하도록 구현했습니다. 또, `tab` 키로 아이템 간 이동이 가능하며 `enter` 키로 아이템을 선택할 수 있습니다.

![멀티드래그](https://github.com/H0onnn/Front_Assignment/assets/116232939/51a6c602-cf15-46b7-be35-6bde2c549c4a)



