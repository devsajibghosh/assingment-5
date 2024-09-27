// nowaKhali balance donation

document.getElementById('donation-btn-n').addEventListener('click', function(e){
  e.preventDefault();

  const  donateNoakhali = textDataGet('increse-noakhali-donation');

  const mianBalance = textDataGet('main-balance');

  const InputDataNoakhali = getInputValueById('noakhali-donation-balance');

  const addBalanceNoakhali = InputDataNoakhali + donateNoakhali;
  const mianBalanceMinase = mianBalance - InputDataNoakhali;

  if(InputDataNoakhali < 0){
    alert('no minimize');
    return InputDataNoakhali;
  }
  else if(isNaN(InputDataNoakhali)){
    alert('write a number')
    return InputDataNoakhali;
  }
  else if (InputDataNoakhali > mianBalance) {
    Swal.fire({
      icon: 'error',
      title: 'Transaction Failed',
      text: 'Insufficient funds. Your balance is too low for this donation.',
    });
    return InputDataNoakhali;
  }
  else{

    // transcaiton 

    const div = document.createElement('div');
    const date = Date();
    div.style.backgroundColor = '#b4f461';
    div.style.fontSize = '20px';
    div.style.border = '1px solid white';
    div.style.borderRadius = '10px';
    div.style.padding = '10px';
    div.style.marginBottom = '10px';
    div.innerHTML = `
      <p class="text-center font-bold">Donation for Noakhali: ${InputDataNoakhali} Tk.</p>
      <p class="text-center text-white">Date: ${date}</p>
    `
    document.getElementById('history-section').appendChild(div);

    document.getElementById('increse-noakhali-donation').innerText = addBalanceNoakhali;
  }

  document.getElementById('main-balance').innerText = mianBalanceMinase;

  // Display success alert
  Swal.fire({
    icon: 'success',
    title: 'Donation Successful',
    text: 'Thank you for your donation!',
  });

})


// Donate for Flood Relief in Feni,Bangladesh


document.getElementById('feni-donation-btn').addEventListener('click', function(e){
  e.preventDefault();

  const donateFeni =  textDataGet('feni-donation-tk');
  const mianBalance = textDataGet('main-balance');

  const InputDataFeni = getInputValueById('feni-input-data');

  const addBalanceFeni = donateFeni + InputDataFeni;

  const mianBalanceFeni = mianBalance - InputDataFeni;

  
  if(InputDataFeni < 0){
    alert('no minimize');
    return InputDataFeni;
  }
  else if(isNaN(InputDataFeni)){
    alert('write a number')
    return InputDataFeni;
  }
  else if(InputDataFeni > mianBalance){
    Swal.fire({
      icon: 'error',
      title: 'Transaction Failed',
      text: 'Insufficient funds. Your balance is too low for this donation.',
    });
    return InputDataFeni;
  }
  else{

    // transcaiton 

    const div = document.createElement('div');
    const date = Date();
    div.style.backgroundColor = '#f1c40f';
    div.style.fontSize = '20px';
    div.style.border = '1px solid white';
    div.style.borderRadius = '10px';
    div.style.padding = '10px';
    div.style.marginBottom = '10px';
    div.innerHTML = `
      <p class="text-center font-bold">Donation for Feni: ${InputDataFeni} Tk.</p>
      <p class="text-center text-white">Date: ${date}</p>
    `
    document.getElementById('history-section').appendChild(div);

    document.getElementById('feni-donation-tk').innerText = addBalanceFeni;
  }

  document.getElementById('main-balance').innerText = mianBalanceFeni;

  // Display success alert
Swal.fire({
  icon: 'success',
  title: 'Donation Successful',
  text: 'Thank you for your donation!',
});

})

// donation for aid

document.getElementById('aid-btn').addEventListener('click', function(e){
  e.preventDefault();

  const aidBalance = textDataGet('aid-balance');
  const aidInputData = getInputValueById('aid-input-data');

  const mianBalance = textDataGet('main-balance');

  const addAidBalance = aidInputData + aidBalance;

  const aidMainBalance = mianBalance - aidInputData;

  if(aidInputData < 0){
    alert('no minimize');
    return aidInputData;
  }
  else if(isNaN(aidInputData)){
    alert('write a number')
    return aidInputData;
  }
  else if(aidInputData > mianBalance){
    Swal.fire({
      icon: 'error',
      title: 'Transaction Failed',
      text: 'Insufficient funds. Your balance is too low for this donation.',
    });
    return aidInputData;
  }
  else{

    // transcaiton 

    const div = document.createElement('div');
    const date = Date();
    div.style.backgroundColor = '#3498db';
    div.style.fontSize = '20px';
    div.style.border = '1px solid white';
    div.style.borderRadius = '10px';
    div.style.padding = '10px';
    div.style.marginBottom = '10px';
    div.innerHTML = `
      <p class="text-center font-bold">Donation for Aid: ${aidInputData} Tk.</p>
      <p class="text-center text-white">Date: ${date}</p>
    `
    document.getElementById('history-section').appendChild(div);

    document.getElementById('aid-balance').innerText = addAidBalance;
  }

  document.getElementById('main-balance').innerText = aidMainBalance;

  // Display success alert
  Swal.fire({
    icon: 'success',
    title: 'Donation Successful',
    text: 'Thank you for your donation!',
  });

})

// chnge the btn color

const button =
document.getElementById('history-btn');
button.addEventListener('click',
() => {
    button.style.backgroundColor = 
        "#b4f461";
        button.style.color = 'white';
});
// chnage the btn color 2
const donation =
document.getElementById('donation-btn');
donation.addEventListener('click',
() => {
    donation.style.backgroundColor = 
        "#b4f461";
        donation.style.color = 'white';
});

