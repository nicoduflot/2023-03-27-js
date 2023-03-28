

function setCookie(name, value = '', days = -1){
    let mageAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; Samesite=Strict; Secure`;
}

function getCookie(name){
    let tabCookie = document.cookie.split('; ');
    for(cookie of tabCookie){
        let tabValue = cookie.split('=');
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}