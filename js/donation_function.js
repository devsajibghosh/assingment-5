// donation function get data form input field
function getInputValueById(id){
  const inputData = document.getElementById(id).value;
  const inputNumber = parseFloat(inputData);
  return inputNumber;
}

  // string convert a number

function textDataGet(id){
  const textData = document.getElementById(id).innerText;
  const convertNumber = parseFloat(textData);
  return convertNumber;
}

// toggole btn show and hide history btn

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.remove('hidden');
    // when i click the btn hide to the donation section

    document.getElementById('donation-section').classList.add('hidden');
})

// toggle show and hide doantion btn

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})

// show blog and home button

document.getElementById('show-blog').addEventListener('click', function(){
  window.location.href = '/blog.html';
})


