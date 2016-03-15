if (Pomodoro === undefined) { var Pomodoro; }
Pomodoro = (function(){
  "use strict";
  var
  on_time = 25 * 60 * 1000,
  off_time = 5 * 60 * 1000,
  video = document.getElementsByTagName('video')[0],
  timer_id,
  on = function(){
    video.play();
    timer_id = setTimeout(function(){ off(); }, on_time);
  },
  off = function(){
    video.pause();
    timer_id = setTimeout(function(){ on(); }, off_time);
  },
  reset = function(){
    if (timer_id === undefined) { return; }
    clearTimeout(timer_id);
    timer_id = undefined;
  };
  return {
    on: on,
    off: off,
    reset: reset
  };
})();
Pomodoro.reset();
Pomodoro.on();
