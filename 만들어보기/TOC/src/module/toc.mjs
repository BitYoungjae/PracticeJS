import {
    L,
    curry,
    pipe,
    go,
} from "./functional.mjs";

const getElementsList = curry((f, root) => go(
    Array.from(root.children),
    L.filter(f),
    L.map(({
        tagName,
        id,
        textContent
    }) => {
        return {
            tagName,
            id,
            textContent,
            subHeadings: []
        };
    })
));

const isHeading = element => element.nodeName.startsWith("H");
const getHeadingElementsList = getElementsList(isHeading);

const getHeadingElementsChain = (list) => {
    const iterator = list[Symbol.iterator]();
    const parentPointer = new Map();
    
    let result = {
        tagName: "H1",
        textContent: "",
        subHeadings: []
    };
    let now = iterator.next();
    let previous = null;

    if (now.value.tagName === "H1") {
        result = now.value;
        previous = now.value;
    } else {
        result.subHeadings.push(now.value);
        previous = result;
    }

    while ((now = iterator.next()) && now.value) {
        const {
            tagName
        } = now.value;

        if (previous.tagName < tagName) {
            const subArray = [];
            subArray.push(now.value);

            previous.subHeadings.push(now.value);

            parentPointer.set(tagName, previous);
        } else if (previous.tagName >= tagName) {
            parentPointer.get(tagName).subHeadings.push(now.value);
        } else {
            return {};
        }

        previous = now.value;
    }

    return result;
};

const convertHeadingElementChainToListElement = (now) => {
    const createListItem = v => {
        const list = document.createElement("ul");
        const item = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.textContent = v.textContent;
        anchor.href = `#${v.id}`;

        item.appendChild(anchor);
        list.appendChild(item);

        return list;
    };

    const list = createListItem(now);

    const children = now.subHeadings.map(v => {
        if (v.subHeadings.length) {
            return convertHeadingElementChainToListElement(v);
        }

        const list = createListItem(v);
        return list;
    });

    children.forEach(item => {
        list.appendChild(item);
    });

    return list;
}

const createTOC = pipe(
    getHeadingElementsList,
    getHeadingElementsChain,
    convertHeadingElementChainToListElement
);

const createTOCObject = pipe(
    getHeadingElementsList,
    getHeadingElementsChain
);

export {
    createTOC,
    createTOCObject
};