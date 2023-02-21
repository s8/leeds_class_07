
const button = document.querySelector('button');
button.addEventListener('click', () => {
  const audioCtx = new AudioContext();
  console.log('button!');
  const audioElement = new Audio('sine.wav');
  audioElement.loop = true;
  audioElement.addEventListener('loadeddata', () => {
      console.log('loaded')
      const track = audioCtx.createMediaElementSource(audioElement);
      const gainNode = audioCtx.createGain();
      track.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      const playButton = document.querySelector('#button');
      gainNode.gain.value=0.2;
      document.body.addEventListener('click', function() {
      // check if context is in suspended state (autoplay policy)
      if (audioCtx.state === 'suspended') {
          audioCtx.resume();
          console.log("resume");
      }
      
      audioElement.play();
  });
  });
  


}, false);

// button.querySelector('#info').addEventListener('click', function() {
//     const audioCtx = new AudioContext();
// });


// const audioCtx = new AudioContext();
