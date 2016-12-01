// function getTempCallbackk (location, callback) {
//   callback(undefined, 13);
//   callback('City not found');
// }
//
// getTempCallbackk('Columbus', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(15);
//       reject('City is not found!');
//     }, 5000);
//
//   });
// }
//
// getTempPromise('Columbus').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not both arguments are numbers');
    }
  });
}

addPromise(5, 6).then( function (sum) {
  console.log('promise success', sum);
}, function(err) {
  console.log('promise error', err);
});

addPromise('5', 6).then( function (sum) {
  console.log('this should not show up');
}, function(err) {
  console.log('promise error', err);
});
