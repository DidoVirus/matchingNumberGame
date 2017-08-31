var n = 10;
var values = [];

//
var state = []

// Generate the initial array
for(i=0; i<n; i++){
  values.push(i+1);
  values.push(i+1);
}

for(f=0; f<values.length; f++){
state.push("F")
}

// shuffle the array
values.sort(function() {
  return Math.random() - Math.random();
});
// for(g=0; g<n*2; g++){
// var r_index1 = Math.round(Math.random() * ((n * 2) - 1));
// var r_index2 = Math.round(Math.random() * ((n * 2) - 1));
//
// var c ;
// c = values[r_index1];
// values[r_index1] = values[r_index2];
// values[r_index2] = c;
// };

// Draw the elements
var bigBox = document.getElementById("game");
// values.forEach(function(element) {
//     var littelBox = document.createElement("div");
//     var value = document.createTextNode(element);
//     littelBox.appendChild(value);
//     bigBox.appendChild(littelBox);
// });

for (x = 0; x < values.length; x++) {
  var element = undefined;

  if (state[x]==="F"){
    element = "F";
  } else {
    element = values[x];
  }


  var littelBox = document.createElement("div");
var value = document.createTextNode(element);
littelBox.appendChild(value);
bigBox.appendChild(littelBox);
littelBox.setAttribute("id", x + 1)
littelBox.addEventListener("click", function(e) {
      console.log(e.target.id);
      state[x] = "T";
       e.target.textContent = 'Potato'
      // bigBox.style.display = 'none';
      // bigBox.style.display = 'block';
  });
}
