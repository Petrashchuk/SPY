const getByID = x => document.getElementById(x);



async function getIp () {
    const res = await fetch('https://api.db-ip.com/v2/free/self');
    return res.json()
}

function sendData (data) {
     return fetch('/',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}

async function logSubmit(event) {
    event.preventDefault();

    const emailField = getByID('email');
    const nameField = getByID('name')

    await sendData({ name:nameField.value, email:emailField.value, address: await getIp() });

    emailField.value = '';
    nameField.value = ''

    const formWrapper = getByID('formWrapper');
    const gratitude = getByID('gratitude');

    formWrapper.classList.add('hide');
    gratitude.classList.remove('hide');

    setTimeout(() => {
        formWrapper.classList.remove('hide');
        gratitude.classList.add('hide');
    },4000)


}

getByID('form').addEventListener('submit', logSubmit);