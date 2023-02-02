function rem2px(rem) {
    var el = document.createElement('div');
    document.body.appendChild(el);
    el.style.width = '1000rem';
    var factor = el.clientWidth / 1000;
    document.body.removeChild(el);
    return rem * factor;
}

getComputedStyle(theElement).fontSize;
