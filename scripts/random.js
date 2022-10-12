function buttonHover() {
    document.getElementById('readMoreButt').style.backgroundColor = '#cf5fa1'
};

function buttonUnhover() {
    document.getElementById('readMoreButt').style.backgroundColor = '#b8518e'
};

function buttonHover2() {
    document.getElementById('buyNowButton').style.backgroundColor = '#cf5fa1'
};

function buttonUnhover2() {
    document.getElementById('buyNowButton').style.backgroundColor = '#b8518e'
};

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
};