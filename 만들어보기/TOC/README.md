# 목차 생성하기

특정 영역 안 쪽의 머릿글 요소들을 분석하여 목차를 생성한다.

# 데모

index.html 의 실행 화면이다.

![demo](https://user-images.githubusercontent.com/3115669/69888775-fc459d00-1330-11ea-9df1-c39c73b9aa7a.png)

## 원문

[자바스크립트의 객체 (Bityoungjae 개인블로그)](https://bityoungjae.com/2019/09/08/JavaScript/%EC%8B%9C%EB%A6%AC%EC%A6%88/%EA%B0%9D%EC%B2%B4%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC/1.%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98%20%EA%B0%9D%EC%B2%B4/)

# 사용법

## 리스트 요소로 만들기

![usagen1](https://user-images.githubusercontent.com/3115669/69887538-cac9d300-132a-11ea-9ee4-8998dea34e5b.png)

toclist에는 UL 요소가 할당된다.

## 객체로 만들기

![usagen2](https://user-images.githubusercontent.com/3115669/69887540-cc939680-132a-11ea-862c-94e21babdf7e.png)

### 출력

```json
{
  "tagName": "H1",
  "id": "자바스크립트의-객체",
  "textContent": "자바스크립트의 객체",
  "subHeadings": [
    {
      "tagName": "H2",
      "id": "객체란-무엇인가",
      "textContent": "객체란 무엇인가",
      "subHeadings": []
    },
    {
      "tagName": "H2",
      "id": "생김새",
      "textContent": "생김새",
      "subHeadings": [
        {
          "tagName": "H3",
          "id": "키",
          "textContent": "키",
          "subHeadings": []
        },
        {
          "tagName": "H3",
          "id": "값",
          "textContent": "값",
          "subHeadings": []
        }
      ]
    },
    {
      "tagName": "H2",
      "id": "키를-이용해-값을-수정하고-조회하는-방법",
      "textContent": "키를 이용해 값을 수정하고 조회하는 방법",
      "subHeadings": []
    },
    {
      "tagName": "H2",
      "id": "속성",
      "textContent": "속성",
      "subHeadings": [
        {
          "tagName": "H3",
          "id": "메서드",
          "textContent": "메서드",
          "subHeadings": [
            {
              "tagName": "H4",
              "id": "자신이-속한-객체를-참조하는-방법",
              "textContent": "자신이 속한 객체를 참조하는 방법",
              "subHeadings": [
                {
                  "tagName": "H5",
                  "id": "this-binding-규칙",
                  "textContent": "this binding 규칙",
                  "subHeadings": []
                }
              ]
            }
          ]
        },
        {
          "tagName": "H3",
          "id": "getter와-setter",
          "textContent": "getter와 setter",
          "subHeadings": [
            {
              "tagName": "H4",
              "id": "용도",
              "textContent": "용도",
              "subHeadings": []
            },
            {
              "tagName": "H4",
              "id": "표기방법",
              "textContent": "표기방법",
              "subHeadings": []
            },
            {
              "tagName": "H4",
              "id": "getter와-setter를-동적으로-추가하기",
              "textContent": "getter와 setter를 동적으로 추가하기",
              "subHeadings": []
            }
          ]
        }
      ]
    },
    {
      "tagName": "H2",
      "id": "변수에-실제로-저장되는-것",
      "textContent": "변수에 실제로 저장되는 것",
      "subHeadings": [
        {
          "tagName": "H3",
          "id": "원시-자료형과-참조-자료형의-차이",
          "textContent": "원시 자료형과 참조 자료형의 차이",
          "subHeadings": []
        },
        {
          "tagName": "H3",
          "id": "재할당시의-차이점",
          "textContent": "재할당시의 차이점",
          "subHeadings": []
        }
      ]
    },
    {
      "tagName": "H2",
      "id": "배열도-객체고-함수도-객체다",
      "textContent": "배열도 객체고 함수도 객체다",
      "subHeadings": [
        {
          "tagName": "H3",
          "id": "배열의-예",
          "textContent": "배열의 예",
          "subHeadings": []
        },
        {
          "tagName": "H3",
          "id": "함수의-예",
          "textContent": "함수의 예",
          "subHeadings": []
        },
        {
          "tagName": "H3",
          "id": "그래서-배열과-함수도-참조복사가-됩니다",
          "textContent": "그래서 배열과 함수도 참조복사가 됩니다.",
          "subHeadings": []
        },
        {
          "tagName": "H3",
          "id": "함수는-일급-객체-입니다",
          "textContent": "함수는 일급 객체 입니다",
          "subHeadings": []
        }
      ]
    },
    {
      "tagName": "H2",
      "id": "객체는-연관된-기능과-데이터의-집합이다",
      "textContent": "객체는 연관된 기능과 데이터의 집합이다",
      "subHeadings": []
    }
  ]
}
```