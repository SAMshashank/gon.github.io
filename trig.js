var clock;
$(document).ready(function () {
  clock = $(".clock").FlipClock({
    clockFace: "DailyCounter",
    autoStart: false,
    callbacks: {
      stop: function () {
        $(".message").html("The IDO has been started!");
      },
    },
  });
  // 8100000
  //   9==10sec
  clock.setTime(3000000);
  clock.setCountdown(true);
  clock.start();
});
