function _lib(sSelektor)
{
    this.m_selektor = sSelektor;
    this.el = document.querySelectorAll(this.m_selektor);       
}

_lib.prototype.ubaciElement = function(index, sNaziv, sKlasa, sId, sTekst)
{
    if(sNaziv == "")
    {
        console.log("Elementu morate dodijelit naziv.")
    }
    else
    {
        var oElement = document.createElement(sNaziv);
        if(sKlasa != "") oElement.setAttribute("class", sKlasa);
        if(sId != "") oElement.setAttribute("id", sId);
        if(sTekst != "") oElement.innerHTML = sTekst;

        this.el[index].appendChild(oElement);
    }
}

_lib.prototype.dodajKlasu = function(sKlasa)
{
    this.el[0].setAttribute("class", sKlasa);
}

_lib.prototype.dodajAtribut = function(sAttr, sValue)
{
    if(sAttr == "")
    {
        console.log("Unesite naziv atributa");
    }
    else
    {
        this.el[0].setAttribute(sAttr, sValue);
    }    
}

_lib.prototype.prikazi = function()
{
    this.el[0].style.visibility = "visible";   
}

_lib.prototype.sakrij = function()
{
    this.el[0].style.visibility = "hidden";
}