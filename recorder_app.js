const record = document.querySelector('#record');
const stop = document.querySelector('#stop');
const play = document.querySelector('#play');

let audioCtx;
let chunks = [];
let recording;

navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream){
    const mediaRecorder = new MediaRecorder(stream);
    record.onclick = function() {
        mediaRecorder.start();
        console.log("recorder started");
        record.style.background = "red";  
        stop.disabled = false;
        record.disabled = true;
      };
      stop.onclick = function() {
        mediaRecorder.stop();
        record.style.background = "";  
        console.log("recorder stopped");
        stop.disabled = true;
        record.disabled = false;
      };

      play.onclick = function(){
        console.log("play");
        recording.playbackRate = 1;
        recording.loop = true;
        recording.play();
      }

      mediaRecorder.onstop = function(e) {
        recording = document.createElement('audio');  
        document.body.appendChild(recording);
        const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=opus' });
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        recording.src = audioURL;
        console.log("recorder stopped");
      };  
  
     mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
     } 

});
