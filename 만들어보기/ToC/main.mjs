import { L, testFunc } from "./functional.mjs";
import { createTOC } from "./toc.mjs";

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
    const content = document.getElementsByClassName("content")[0];
    const toc = document.getElementsByClassName("toc")[0];
    const toclist = createTOC(content);
    toc.appendChild(toclist);
}

window.addEventListener("load", main);