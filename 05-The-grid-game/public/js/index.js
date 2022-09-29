


const express = require("express");
const app = express();
  
// Define routes here ...
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})

let yourNumber = '';


$('.grid-item').on('click', (element) => {
  if ( $(element.currentTarget).hasClass('selected') ) {
    $(element.currentTarget).removeClass('selected');
    yourNumber -= $(element.currentTarget).text();
  }
  else {
    $(element.currentTarget).addClass('selected');
    yourNumber += $(element.currentTarget).text();
  }
  $('.your-number').text(yourNumber);
  // console.log(element.currentTarget);
});

$('.grid-item').on('dblclick', () => {
  $('.grid-item').removeClass('selected');
  yourNumber = '';
  $('.your-number').text(yourNumber);
});

$('#reset').on('click', () => {
  $('.grid-item').removeClass('selected');
  yourNumber = '';
  $('.your-number').text(yourNumber);
});

$('#commit').on('click', () => {
  $.ajax('localhost:5000',{
    yourNumber
  })
});


async function spinCrazy () {

  const elements = $('.grid-item').get()
  const intervals = [];
  let j = 0;
  while (j < 500) {
    let i = 0;
    const intervalID = setInterval(function () {
      $(elements[i]).removeClass('spinned');
      i = Math.floor(Math.random() * 49);
      $(elements[i]).addClass('spinned');
    }, 1);
    intervals.push(intervalID);
    j++;
    // console.log(j);
  }

  let i = 0;
  const stopIntervals = setInterval(function () {
    // console.log(i);
    clearInterval(intervals[i]);
    i++;
    if ( i >= j ) {
      let num = '';
      for (let ii = 0; ii < 7; ii++) {
        for (let jj = 0; jj < 49; jj+=7) {
          // console.log(ii+jj);
          if ( $(elements[ii+jj]).hasClass('spinned') ) {
            num += elements[ii+jj].innerHTML;
          }
        }
      }
      $('.winner-number').text(num);
      clearInterval(stopIntervals);
    }
  }, 10);
  
}

$('#spin').on('click', () => {
  
  spinCrazy();

  

});



function heartBeat() {

  const countDown = setInterval( function () {
    let count = parseInt($('.timer').text());
    if (count > 0) {
      $('.timer').text(count - 1);
    } else {
      $('.timer').text(60);
      clearInterval(countDown);
    }
  }, 1000);

  spinNow();

  heartBeat()

}

//heartBeat();
