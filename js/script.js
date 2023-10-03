$(function () {
  // open and close sidebar
  $("#open").click(function () {
    $(".box").css({ left: "0" });
    $(".open").css({ left: "260px" });
  });

  $("#close").click(function () {
    $(".box").css({ left: "-250px" });
    $(".open").css({ left: "10px" });
  });

 // scroll to sections

 let windowScroll = $(window).scrollTop();
 let sectionOffset = $().offset();

  /////////////////////////////////////////////////////////////////////////




  //open and close accordion
  $('.info:first').css('display', 'block')
  $(".title").click(function () {
    $(this).next().slideToggle(500);
  
    $('.info').not($(this).next()).slideUp(500);
  
  });

  
   

/////////////////////////////////////////////////////////////////////////



  //count down timer

  let newDate = new Date("Dec 31, 2024 23:59:59").getTime();
  console.log(newDate);

  let counter = setInterval(() => {
    let now = new Date().getTime();
    // console.log(now);
    let dateDiff = newDate - now;

    let daysCount = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    // console.log(daysCount);
    $(".day").html(daysCount);
    let hoursCount = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    $(".hour").html(hoursCount);

    let mintesCount = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    $(".minte").html(mintesCount);

    let secondsCount = Math.floor((dateDiff % (1000 * 60)) / 1000);
    $(".second").html(secondsCount);

    if (dateDiff < 0) {
      clearInterval(counter);
    }
  }, 1000);



/////////////////////////////////////////////////////////////////////////


  // count doun textarea character

  $('textarea').keyup(function(){
    let lengthVal = $(this).val().length;
    let charCount = 100-lengthVal;
    $('.chars').text(charCount)
  })
});
















    
  