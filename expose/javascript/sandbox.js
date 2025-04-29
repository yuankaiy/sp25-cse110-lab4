function modifyArray(array, callback){
    const newArr = [];
    for(let i =0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }

    console.log(newArr);
    return newArr;
}

function doSomething(num){
    return num * 2;
}

modifyArray([1,2,3], doSomething)


// let student = {
//     name: 'Sarah',
//     major: 'Computer Science',
//     'Grad Year': '2022',
//     greeting: function(){console.log('Hello!');},
//     'Favorite Teacher': {
//         name: 'Thomas Powell',
//         course: 'CSE 110'
//     },
//     courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
// }

// console.log(student.courseLoad[0])



// function discountedPrices(prices, discount){
//     const discounted = [];
//     const length = prices.length;

//     for(let i = 0; i < length; i++){
//         const discountedPrice = prices[i] * (1 - discount);
//         discounted.push(discountedPrice);
//     }

//     // console.log(i);
//     // console.log(length);

//     console.log(discounted);
//     return discounted;
    
// }

// discountedPrices([100,200,300], 0.5)





// function discountedPrices(prices, discount){
//     let discounted = [];
//     let finalPrice = 0;

//     for(let i = 0; i < prices.length; i++){
//         let discountedPrice = prices[i] * (1 - discount);
//         finalPrice = Math.round(discountedPrice * 100) / 100;
//         discounted.push(finalPrice);
//     }

//     // console.log(i);
//     // console.log(discountedPrice);
//     // console.log(finalPrice);

//     console.log(discounted)
//     return discounted;
    
// }

// discountedPrices([100, 200, 300], 0.5);






// function sumValues(num1, num2, add){

//     if(add){

//         const result = 0;

//         result = num1 + num2;

//         console.log('values added: ', result);

//     } else return;

//     console.log('final result: ', result);
// }

// sumValues(10, 10, true);