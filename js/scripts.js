$(function() {
Â  var curPos = 0;
Â  var slider = $('.slider');
Â  var cntImages= slider.length;
Â  var sliderWidth = slider.width();
Â  $('#sliderWrapper').css('width', sliderWidth * cntImages);
Â  setInterval(SlideImage, 2000);

Â  function SlideImage() {
Â  Â  if (curPos == cntImages - 1)
Â  Â  Â  curPos = 0;
Â  Â  else
Â  Â  Â  curPos++;
Â Â  Â  $('#sliderWrapper').animate({
Â  Â  Â  'marginLeft': sliderWidth * (-curPos)
Â  Â  });
Â  }
});
