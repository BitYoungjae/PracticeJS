const L = {};
const curry = f => (h, ...args) => args.length ? f(h, ...args) : (...args) => f(h, ...args);

L.map = curry(function* (f, iter) {
    for (const one of iter) {
        yield f(one);
    }
});

L.filter = curry(function* (f, iter) {
    for (const one of iter) {
        if (f(one)) yield one;
    }
});

L.take = curry(function* (n, iter) {
    const iterator = iter[Symbol.iterator]();
    let now;

    do {
        now = iterator.next();
        now.value && (yield now.value);

        if (!--n) break;
    } while (!now.done);
});

const take = curry((n, iter) => {
    const result = [];
    const iterator = iter[Symbol.iterator]();
    let now = null;

    do {
        now = iterator.next();
        now.value && result.push(now.value);

        if (!--n) break;
    } while (!now.done);

    return result;
});

const reduce = curry(
    (f, iter, start) => {
        const iterator = iter[Symbol.iterator]();
        let acc = null;

        if (start) {
            acc = start;
        } else {
            acc = iterator.next().value;
        }

        for (const one of iterator) {
            acc = f(acc, one);
        }

        return acc;
    }
);

const go = (...routine) => reduce((acc, now) => now(acc), routine);
const pipe = (first, ...routine) => (...args) => go(first(...args), ...routine);

const testFunc = (f, n = 1000, ...args) => {
    console.time(f.name);
    while (n--) {
        f(...args);
    }
    console.timeEnd(f.name);
};

export {
    L, curry, take, reduce, go, pipe, testFunc
};