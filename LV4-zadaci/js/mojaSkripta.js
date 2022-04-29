var sElement = new _lib('h1');

//console.log(sElement[0].innerHTML);

var sElement = new _lib('ul');

//sElement.ubaciElement('li','','tmp','Tekst');
sElement.dodajKlasu("tmp");

localStorage.clear();

sElement.prikazi();

localStorage.setItem('racunarstvo', 'http://racunarstvo.vuv.hr');
localStorage.setItem('loomen', 'http://loomen.vsmti.hr');
localStorage.setItem('imagine', 'http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail');

var sNav = new _lib('.footer-navigation')

for(var i = 0; i < localStorage.length; i++)
{
    sNav.ubaciElement(0,'li', 'item', localStorage.key(i), '');    
    var liTag = new _lib(`#${localStorage.key(i)}`);
    console.log(liTag);
    liTag.ubaciElement(0,'a','', '', localStorage.key(i));
    var aTag = new _lib(`#${localStorage.key(i)} a`);
    aTag.dodajAtribut('href', localStorage.getItem(localStorage.key(i)));

}


