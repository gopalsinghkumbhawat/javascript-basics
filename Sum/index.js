// const sum = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }

// const sum = (a) => {
//   return (b) => {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

const sum = (a) => (b) => b ? sum(a + b) : a;

const result = sum(5)(4)(3)(2)(1)(5)(4)(3)(2)(1)();

console.log(result);
