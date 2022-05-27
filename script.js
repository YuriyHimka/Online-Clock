let hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    seconds = document.querySelector('#seconds');

setInterval(() => {

    let day = new Date(),
        hh = day.getHours() * 30,
        mm = day.getMinutes() * 6,
        ss = day.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;

    let hr = document.querySelector('#hour'),
        mn = document.querySelector('#minute'),
        sc = document.querySelector('#second'),
        ampm = document.querySelector('#ampm');

    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();

    let am = h >= 12 ? 'PM' : 'AM';

    if (h > 12) {
        h = h -12;
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hr.innerHTML = h;
    mn.innerHTML = m;
    sc.innerHTML = s;
    ampm.innerHTML = am;

});