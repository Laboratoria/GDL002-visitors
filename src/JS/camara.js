firebase.initializeApp(config);

var camera = document.getElementById('camera');
  var frame = document.getElementById('frame');

  camera.addEventListener('change', function(e) {
    var file = e.target.files[0];
    // Do something with the image file.
    frame.src = URL.createObjectURL(file);
  });



  var player = document.getElementById('player');

  var handleSuccess = function(stream) {
    player.srcObject = stream;
  };

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);


  var player = document.getElementById('player');
  var snapshotCanvas = document.getElementById('snapshot');
  var captureButton = document.getElementById('capture');
 var videoTracks;

  var handleSuccess = function(stream) {
    // Attach the video stream to the video element and autoplay.
		player.srcObject = stream;
		videoTracks = stream.getVideoTracks();
  };

  captureButton.addEventListener('click', function() {
    var context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width,
				snapshotCanvas.height);
				//stop all video streams.
				videoTracks.forEach(function(track) {track.stop()});
  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);

