const cachingDecorator = f => {
    const cache = new Map();

    return (first, ...args) => {
        let cachedData = null;
        if (cachedData = cache.get(first)) return cachedData;

        const result = f.call(this, first, ...args);
        cache.set(first, result);

        return result;
    };
};

const test = cachingDecorator((a) => {
    let result = 0;
    for (let i = 1; i < a; i++) {
        result += i;
    }
    return result;
});

console.log(test(1000000000));
console.log(test(1000000000));
console.log(test(1000000000));
console.log(test(1000000000));
console.log(test(1000000000));

console.log(test(2000000000));
console.log(test(2000000000));
console.log(test(2000000000));
console.log(test(2000000000));
console.log(test(2000000000));

// export { cachingDecorator };