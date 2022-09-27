

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
});

$('#reset').on('click', () => {
  $('.grid-item').removeClass('selected');
  clearInterval(intervalID[0]);
  yourNumber = '';
  $('.your-number').text(yourNumber);
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
    let num = '';
    for (let ii = 0; ii < 7; ii+7) {

      if ( $(elements[ii]).hasClass('spinned') ) {
        num += elements[ii].innerHTML;
      }
    }
    clearInterval(intervals[i]);
    i++;
    if ( i >= j )
      clearInterval(stopIntervals);
  }, 10);

  return 0;

}

async function winnerNum () {

  await spinCrazy();

  const elements = $('.spinned').get()

  console.log(elements);


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
