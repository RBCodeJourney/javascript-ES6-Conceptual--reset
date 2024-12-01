// function show(name, age) {
//     console.log('my name is: ', name, 'age is: ', age)
// }

// function fun1(name, age, callback) {
//     console.log("hello from first function");
//     setTimeout(() => {
//         callback(name, age)
//     }, 2000);
// };

// fun1('Refatullah', 26, show);


function a() {
    console.log('hello from callback: This is first func')
}
function main(callback) {
    callback()
}

main(a)