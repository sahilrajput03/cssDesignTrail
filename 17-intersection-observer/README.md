# learn intersection observers

FYI: For lazy loading you can simply use `<img loading='lazy'> </img>` with your image tags but be sure to give respective heights and width to your images so they even if they are still loading your content doesn't shift at all when the user starts reading the content as the page is still loading. Learn [more about it by Kevin here](https://youtu.be/AActXSWxsRo).

TODO: *Article suggested by Kevin: [Click here](https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/)*

Kevin 7 Video Playlist on Intersetction Observer: https://www.youtube.com/playlist?list=PLC2rzhluWUp-iWl6P2S7JG3xkHxeVCgBs

Theory: They are basically events which we register which get fired when the target html element intersects with viewport boundary. ~ kevin

~ Sahil: Callback registered will be fired on page load if script (when used with `deffered`) and thereafter the cb will be triggered whenever the element(even small part of it) enters the view port OR the element gets removed **completely** from the the view port.

- Kevin: Intro to intersection observer: [youtube](https://www.youtube.com/watch?v=T8EYosX4NOo&t=65s)

- Kevin: slide-in-with-intersection-observer: [youtube](https://youtu.be/huVJW23JHKQ), [github](https://github.com/kevin-powell/slide-in-with-intersection-observer)
