//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
  var inner = outer();

//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var callHim = callFriend();
callHim(435-215-9248);


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  function makeCounter() {
    var count = 0;
    return function() {
      count++;
      return count;

    }
  }
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'.
  Write a second function named codeFriend that accepts the first function as it's first parameter.
  The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
*/

  //Code Here
function codeLove() {
  return 'I love code';
}
function codeFriend(cl) {
  var limiter = 1;
  function three() {
    if (limiter === 1) {
      limiter++;
      return cl();
    }
    else {
      return null;
    }
  }
  return three;
}
var codeEcho = codeFriend(codeLove);

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters.
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number.
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times.
  After it's been invoked 'N' number of times, return 'STOP'.
*/



//Next Problem
function fnCounter(par1, par2) {
  var limiter = par2
  return function() {
  if (limiter > 0) {
  limiter--;
  return par1();
  }
  else {
    return 'STOP';
  }
 };
}



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter.
   Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked.
   *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //it will show the counter "i" in the console, every second for five seconds it will display the counter "i"


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Wrong, it showed the number 6, 5 times.


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

    //Code Here
function timerFn(i){
    return function(){
      console.log( i );
    };
};
  var counter = function(){
    for (var i=1; i<=5; i++) {
          setTimeout(timerFn(i) , i*1000 );
        }
      };
counter();

//Next Problem




  var funcArray = [function () {
    return 0;
  }, function (){
    return 1;
  },function (){
    return 2;
  },function (){
    return 3;
  },function (){
    return 4;
  },function (){
    return 5;
  },];
