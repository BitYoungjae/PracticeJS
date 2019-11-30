import { L, testFunc } from "./module/functional.mjs";
import { createTOC, createTOCObject } from "./module/toc.mjs";

{ // 탐구 1 - QuerySelector의 성능에 대하여

    // 같은 기능을 가진 아래 두 함수 중 무엇이 더 빠를까?

    const getHeadingElementsByFilter = () => go(
        document.getElementsByClassName("content")[0],
        v => Array.from(v.children),
        L.filter(element => element.tagName.startsWith("H")),
        L.take(Infinity)
    );

    const getHeadingElementsByQuerySelector = () => {
        return Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    };

    const testAboveTwoFunction = () => {
        testFunc(getHeadingElementsByFilter, 10000);
        testFunc(getHeadingElementsByQuerySelector, 10000);
    }

    // window.addEventListener("load", testAboveTwoFunction);

    /* 탐구1 결과 : 
     * getHeadingElementsByFilter: 373.438720703125ms
     * getHeadingElementsByQuerySelector: 1066.288818359375ms
     * 결론 : QuerySelector는 참 느리구나..
     */
}

const main = () => {
    // content : 탐색할 대상이 되는 컨텐츠 영역
    const content = document.getElementsByClassName("content")[0];
    // content 영역 내의 머릿글 요소들을 분석해 UL 요소를 생성한다.
    const toclist = createTOC(content);

    // 객체 형태로 출력해본다.
    const obj = createTOCObject(content);
    console.log(
        JSON.stringify(obj, null, 2)
    );

    const toc = document.getElementsByClassName("toc")[0];
    toc.appendChild(toclist);
}

/* module의 경우 브라우저에서 defer 속성이 기본값이다.
 * 어차피 DOM 해석이 완료될 때까지 실행을 알아서 지연시킨다는 이야기다.
 * 따라서, 아래처럼 DomContentLoaded 이벤트를 경유할시 정상 실행이 되지 않는다.
*/
// document.addEventListener("DomContentLoaded", main);
main();