const table = document.querySelectorAll('table td');
const input = document.querySelector('input');
const label = document.querySelector('label');
const h1 = document.querySelector('h1');
const allTable = document.querySelector('table');
const buttonDiv = document.querySelector('#button');
const fastCash = document.querySelector('#fastcash');
const withdrawTable = document.getElementById('withdrawTable');
let cashSelected = 0;
let finalBalance;

const userCardDetail = [
    {
        name: 'Aryan Raj',
        cardNumber: '125',
        cardPassword: '564',
        cardBalance: '45852'
    },

    {
        name: 'Rahul Raj',
        cardNumber: '158',
        cardPassword: '863',
        cardBalance: '5362'
    },

    {
        name: 'Rohit Raj',
        cardNumber: '196',
        cardPassword: '423',
        cardBalance: '9635'
    },

    {
        name: 'Aman Kumar',
        cardNumber: '183',
        cardPassword: '400',
        cardBalance: '589'
    }

];
let cardNotMatch = 0;


for (let td of table) {
    td.addEventListener('click', function () {
        const tableTdValue = td.innerText;
        if (tableTdValue === 'Reset') {
            input.value = window.location.reload();
        }
        else if (tableTdValue === 'C') {
            const arr = input.value.split('');
            arr.pop();
            const str = arr.join("");
            input.value = str;
        }
        else if (tableTdValue === 'Proceed') {
            if (cardNotMatch === 1) {
                for (let j = 0; j < userCardDetail.length; j++) {
                    if (userCardDetail[j].cardPassword === input.value) {
                        h1.innerText = `Welcome ${userCardDetail[j].name}`;
                        label.innerText = 'Select Your Transaction Please';
                        input.classList.add('remove');
                        allTable.classList.add('remove');
                        buttonDiv.innerHTML = '<h4></h4><br><span><button>Withdraw</button><button>Fast Cash</button></span><br><button>Balance</button><button>Cancel</button>';
                        const button = document.querySelectorAll('#button button');
                        const h4 = document.querySelector('#button h4');
                        const span = document.querySelector('#button span');
                        for (let btn of button) {
                            btn.addEventListener('click', () => {
                                if (btn.innerText === 'Balance') {
                                    label.innerText = 'Your Available Balance';
                                    h4.style.display = 'block';
                                    console.log('Balance Clicked');
                                    h4.innerText = userCardDetail[j].cardBalance;
                                    input.style.display = 'none';
                                    withdrawTable.style.display = 'none';
                                    fastCash.style.display = 'none';

                                }
                                else if (btn.innerText === 'Fast Cash') {
                                    label.innerText = 'Please Select Cash Want To Withdraw';
                                    fastCash.style.display = 'block';
                                    fastCash.innerHTML = '<button>500</button><button>1500</button><br><button>3000</button><button>5000</button><br><button id="continue">Continue</button>';
                                    const fastCashButton = document.querySelectorAll('button');
                                    const continues = document.getElementById('continue');
                                    for (let f_C_Button of fastCashButton) {
                                        f_C_Button.addEventListener('click', () => {
                                            h4.style.display = 'block';
                                            if (f_C_Button.innerText === '500') {
                                                cashSelected = 500;
                                                h4.innerText = `You Selected ${cashSelected}`;
                                            }
                                            else if (f_C_Button.innerText === '1500') {
                                                cashSelected = 1500;
                                                h4.innerText = `You Selected ${cashSelected}`;
                                            }
                                            else if (f_C_Button.innerText === '3000') {
                                                cashSelected = 3000;
                                                h4.innerText = `You Selected ${cashSelected}`;
                                            }
                                            else if (f_C_Button.innerText === '5000') {
                                                cashSelected = 5000;
                                                h4.innerText = `You Selected ${cashSelected}`;
                                            }

                                        })
                                    }
                                    continues.addEventListener('click', () => {
                                        if (userCardDetail[j].cardBalance >= cashSelected) {
                                            finalBalance = userCardDetail[j].cardBalance - cashSelected;
                                            h4.innerText = `${cashSelected} is Withdraw`;
                                            userCardDetail[j].cardBalance = finalBalance;
                                            console.log(finalBalance);
                                            fastCash.classList.add('remove');
                                        }
                                        else {
                                            h4.innerText = 'Your Balance Is Low';
                                        }
                                        setTimeout(function(){
                                            window.location.reload();
                                        },10000)
                                    })
                                    withdrawTable.style.display = 'none';
                                    input.style.display = 'none';
                                    h4.style.display = 'none';
                                    span.style.display = 'none';
                                }
                                else if (btn.innerText === 'Cancel') {
                                    window.location.reload();
                                }
                                else if (btn.innerText === 'Withdraw') {
                                    label.innerText = 'Please Enter Your Amount';
                                    input.style.display = 'block';
                                    withdrawTable.style.display = 'block';
                                    withdrawTable.innerHTML = '<table border="1px solid black"><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>0</td><td colspan="2">C</td></tr><tr><td colspan="4">Continue</td></tr></tbody></table>';
                                    const withdrawTableSelect = document.querySelectorAll('table td');
                                    for (let tdSelected of withdrawTableSelect) {
                                        tdSelected.addEventListener('click', () => {
                                            if (tdSelected.innerText === 'C') {
                                                const withdrawArr = input.value.split('');
                                                withdrawArr.pop();
                                                input.value = withdrawArr.join('');
                                            }
                                            else if (tdSelected.innerText === 'Continue') {
                                                h4.style.display = 'block';
                                                const withdrawCash = input.value;
                                                if (userCardDetail[j].cardBalance >= withdrawCash) {
                                                    finalBalance = userCardDetail[j].cardBalance - withdrawCash;
                                                    h4.innerText = `${withdrawCash} You Withdraw`;
                                                    userCardDetail[j].cardBalance = finalBalance;
                                                }
                                                else{
                                                    h4.innerText = 'Your Balance Is Low';
                                                }
                                                withdrawTable.style.display = 'none';
                                                input.style.display = 'none';
                                                setTimeout(function(){
                                                    window.location.reload();
                                                },10000)
                                            }
                                            else {
                                                input.value += tdSelected.innerText;
                                            }
                                        })
                                    }
                                    h4.style.display = 'none';
                                    fastCash.style.display = 'none';
                                    input.value = "";
                                    span.style.display = 'none';
                                }
                            })
                        }
                        break;
                    }
                    else {
                        label.innerText = 'Password Wrong';
                    }
                }
                input.innerText = "";
            }
            else {
                for (let i = 0; i < userCardDetail.length; i++) {
                    cardNotMatch = 0;
                    if (userCardDetail[i].cardNumber === input.value) {
                        label.innerText = 'Please Enter Password';
                        cardNotMatch = 1;
                        input.value = "";
                        break;
                    }
                    else if (cardNotMatch === 0) {
                        label.innerText = 'Please Check Your Card Number';
                    }
                }
            }
        }
        else {
            input.value += tableTdValue;
        }

    })
}

