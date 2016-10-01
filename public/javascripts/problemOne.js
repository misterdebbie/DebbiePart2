for (var i = 1; i <= 100; i++){
    var modThreeClean = i % 3 === 0;
    var modFiveClean = i % 5 === 0;

    if (modThreeClean && modFiveClean){
        console.log('FizzBuzz');
    }
    else if (modThreeClean){
        console.log('Fizz');
    }
    else if (modFiveClean){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}
