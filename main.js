// card states
var FACE_DOWN = "F";
var TURNED_UP = "T";
var PAIRED = "P";

// game states
var WON = "W";
var LOST = "L";

var n = 10;
var values = [];
var state = [];

// Generate the initial array
for (i = 0; i < n; i++) {
  values.push(i + 1);
  values.push(i + 1);
}

for (f = 0; f < values.length; f++) {
  state.push(FACE_DOWN)
}

// shuffle the array
values.sort(function() {
  return Math.random() - Math.random();
});

// Draw the elements
var bigBox = document.getElementById("game");
var lastTargetValue;
var lastTargetId;
var preventClick = false;

for (x = 0; x < values.length; x++) {
  var element = undefined;

  if (state[x] === FACE_DOWN) {
    element = FACE_DOWN;
  } else {
    element = values[x];
  }


  var littelBox = document.createElement("div");
  var value = document.createTextNode(element);
  littelBox.appendChild(value);
  bigBox.appendChild(littelBox);
  littelBox.setAttribute("id", x)
  littelBox.addEventListener("click", function(e) {
    if (preventClick) { return; }
    console.log(e.target.id);
    state[x] = TURNED_UP;
    // i mean here these two lines do not make sense
    // what we want is
    e.target.textContent = values[e.target.id];
    // check you have pair
    var targetValue = values[e.target.id]
    if (!lastTargetValue) { // first click in a round
      lastTargetValue = targetValue;
      lastTargetId = e.target.id;
      return;
    } else if (lastTargetValue === targetValue) {
      // matching
      matching(e.target.id, lastTargetId);
    } else {
      // non-matching
      nonMatching(e.target.id, lastTargetId);
    }
    preventClick = true;
    setTimeout(function() { updateView() }, 2000);
    lastTargetValue = null;
    lastTargetId = null;
  });
}

function matching(targetId, lastTargetId) {
  state[targetId] = PAIRED;
  state[lastTargetId] = PAIRED;
}

function nonMatching(targetId, lastTargetId) {
  state[targetId] = FACE_DOWN;
  state[lastTargetId] = FACE_DOWN;
}

function updateView() {
  for (x = 0; x < values.length; x++) {
    var element = document.getElementById(x);

    if (state[x] === FACE_DOWN) {
      element.textContent = FACE_DOWN;
    } else {
      element.textContent = values[x];
    }
  }

  preventClick = false;
}
