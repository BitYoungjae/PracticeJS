# 목차 생성하기

특정 영역 안 쪽의 머릿글 요소들을 분석하여 목차를 생성한다.

# 데모

index.html 의 실행 화면이다.

![usage2](https://user-images.githubusercontent.com/3115669/69886526-b0412b00-1325-11ea-8851-e87820d7d26e.png)

# 사용법

## 리스트 요소로 만들기

![usage](https://user-images.githubusercontent.com/3115669/69886544-c6e78200-1325-11ea-8e31-7a4f44f35ae1.png)

toclist에는 UL 요소가 할당된다.

## 객체로 만들기

![usage3](https://user-images.githubusercontent.com/3115669/69886648-60af2f00-1326-11ea-92d4-4027ff7057c1.png)

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