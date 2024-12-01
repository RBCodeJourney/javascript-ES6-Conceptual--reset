const outerFunction = () => {
    let count = 0;
    const inner = () => {
        count++;
        console.log('count: ', count)
    }
    return inner;
};

const x = outerFunction();
x();
x();