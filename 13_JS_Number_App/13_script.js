//get number
let textArea = document.querySelector('#number');
textArea.addEventListener('keyup', function(){
  let enterdText = textArea.value;

  let displayText = document.querySelector('#text-number');
  displayText.innerText = enterdText;
});

