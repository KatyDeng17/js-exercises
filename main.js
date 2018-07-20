const colors = [
  "#C94C24",
  "#268BD2",
  "#C4226F",
  "#859835",
  "purple",
  "green",
  "red",
  "yellow",
  "gray"
];

function makeBoxs(howMany){
  const colorLength = colors.length; 
  let currentColor = 0; 
  let newElement; 
  let node = document.querySelector('.boxes')
debugger
  for (let i = 0; i < howMany; i++){
    newElement = document.createElement('div'); //create div element 
    newElement.className = 'box'; //add class 'box' to created div element 
    newElement.style = 'background-color:' + colors[currentColor]; // add inline style to the div element 
    node.appendChild(newElement); //append the created element to the selected location (the div element with class 'boxes)

    if(currentColor === colorLength-1){
      currentColor = 0;
    }else{
      currentColor ++ ;
    }
  }
  //remove the targeted box by clicking
  node.addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target)
  })
}


makeBoxs(26)