function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var header = getUrlParameter('player')
document.title = `The Stupid Six / ${capitalizeFirstLetter(header)}`

document.body.getElementsByClassName('playerIcon')[0].id = `${header}_pfp`

var profileHeading = document.body.querySelector('.nameTitle')

if (header === 'maki') {
    // Matt's
    profileHeading.querySelector('#playerUsername').innerHTML = 'Maki'
    profileHeading.querySelector('#playerRealname').innerHTML = '(Matthias)'
    profileHeading.querySelector('#playerTitle').innerHTML = 'The Leader'
}
else if (header === 'soluri') {
    // Jim
    profileHeading.querySelector('#playerUsername').innerHTML = 'Soluri'
    profileHeading.querySelector('#playerRealname').innerHTML = '(Jim)'
    profileHeading.querySelector('#playerTitle').innerHTML = 'The Co-Leader'
}
else if (header === 'bruhman') {
    // George Taylor
    profileHeading.querySelector('#playerUsername').innerHTML = 'bruhman'
    profileHeading.querySelector('#playerRealname').innerHTML = '(George Ta)'
    profileHeading.querySelector('#playerTitle').innerHTML = 'The New One'
}
else if (header === 'forgor') {
    // Ellen
    profileHeading.querySelector('#playerUsername').innerHTML = 'forgor'
    profileHeading.querySelector('#playerRealname').innerHTML = '(Ellen)'
    profileHeading.querySelector('#playerTitle').innerHTML = 'Uhhhhh....'
}
else if (header === 'maxyMoo') {
    // Max
    profileHeading.querySelector('#playerUsername').innerHTML = 'MaxyMoo'
    profileHeading.querySelector('#playerRealname').innerHTML = '(Max)'
    profileHeading.querySelector('#playerTitle').innerHTML = 'The Fool'
}
else if (header === 'woffle') {
    // George Turner
    profileHeading.querySelector('#playerUsername').innerHTML = 'Woffle'
    profileHeading.querySelector('#playerRealname').innerHTML = '(George Tu)'
    profileHeading.querySelector('#playerTitle').innerHTML = 'A Dumbass'
}