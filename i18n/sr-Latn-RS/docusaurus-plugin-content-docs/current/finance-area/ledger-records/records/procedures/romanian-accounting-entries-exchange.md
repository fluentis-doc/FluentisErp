---
title: Zatvaranje tečajnih razlika 
sidebar_position: 2
---

Maske se nalaze u Administracija > Knjigovodstveni zapisi > Procedure > Zatvaranje tečajnih razlika

Ova procedura omogućuje automatsko izračunavanje, na određeni datum, razlika u tečaju za račune u stranoj valuti.

Moguće je upravljati:

- Krediti i dugovi (klijenti i dobavljači)
- Bankovni računi 

**Generiraju se otvorene stavke i računovodstveni unosi za prilagodbu razlici tečaja.**

### Kako izračunati i registrirati razlike u tečaju (na primjer na kraju godine ili na drugi datum) 

- odabrati jednu valutu (jednu po jednu), prema kojoj će se vršiti izračun, putem kombinirane kutije **Valuta** u zaglavlju obrasca.
- Pomoću izbornika s desne strane vrstu izračuna:
    - Raspoloživost: uzima u obzir stanja (npr. banka) 
    - Dospijeća plaćanja: čita dugove i potražnje prema kupcima/dobavljačima  
        - Aktivno: kupci
        - Pasiva: dobavljači

Konto/podkotno i odjel su izborni filtri za sužavanje pretraživanja.  

- Postavite dolje u obrascu **datum**  (na primjer 31/12/GGGG) za usklađivanje (odnosno izračun razlike u tečaju)  
- Vrijednost odgovarajućeg **tečaja** bit će učitana na temelju rezultata tablice [**tečajevi valuta**](/docs/configurations/tables/finance/currency-exchange)
- Pritisnite Pretraživanje  
---

U središnjoj tablici koja prikazuje detalje traženih stavki ističu se:

- **Konto / Podkonto** izvučen iz pretrage i koji treba upravljati;  

- **Iznos u valuti** (izražen u stranom novcu), jednak zbroju dugovanja minus zbroj potraživanja u valuti svih transakcija na računu; 

- **Iznos (u eurima) povijestan**, zbroj transakcija dugovanja u eurima minus zbroj potraživanja u eurima;

- **Trenutni iznos**  koji odgovara iznosu u valuti preračunatom prema trenutnom tečaju (prikazanom u donjem dijelu obrasca);   

- **Razlika** u tečaju, pozitivna ili negativna.  

---

U zoni ***Parametri*** definirani su računi za dobit ili gubitak od valutnih razlika s kojima će se izvršiti knjiženje usklađivanja (preuzeti iz parametara opće računovodstvene evidencije):  

- Unesite željeni računovodstveni razlog za stvaranje knjiženja  

- Pritisnite naredbu **Knjiženje**

---

<details>

  <summary>Dodatni detalji (Click to expand)</summary>
  
Flag **Privremeno**: omogućuje generiranje tečajne razlike kao privremeni računovodstveni unos;

**Tečaj**: broj s kojim se izračunava ažurirana vrijednost. Program ga automatski predlaže (iz tablice mjenjačnice), ali ga korisnik može promijeniti;  

**Datum** i **broj dokumenta** i **knjigovodstveni predložak** koji se odnosi na knjigovodstveno knjiženje koje treba urediti. **Uneseni datum također predstavlja datum do kojeg su odabrani računovodstveni zapisi**

**Konto prihoda** i **rashoda**: koriste se za evidentiranje tečajnih razlika;  

U kartici *Poništavanje* knjiženja korekcije tečaja moguće je pregledati i vratiti rezultat obavljenih knjiženja na temelju postavljenih filtera (Od datuma/Do datuma, račun).

**Povrati usklađenje**: Tipka za brisanje odabranih operacija regulacije u mreži rezultata. 
</details>

:::danger[Pažnja]
Prema zadanim postavkama, svaki **šifarnik klijenta dobavljača**  koji se stvori aktivira **u planu konta flag  *Upravljanje valutom***. Ova opcija **ne smije biti deaktivirana**, kako ne bi došlo do blokiranja mogućnosti korištenja ove procedure i pravilnog upravljanja zatvaranjem salda u stranoj valuti.  

**U upravljanju računom u valuti**, bilo da se radi o računu klijenta, dobavljača ili bankovnom računu, preporučujemo da **račun bude vođen na ujednačen način**, definirajući valutu za transakcije, na primjer dolar, i da se račun uvijek vodi u dolarima.  

Transakcija u valuti će, dakle, imati tečaj vezan uz određeni datum valute, a protuvrijednost u eurima koja će se unijeti u naš bilans, izražen u valuti društva, na primjer EURO.  

Pokretanje računa, na primjer, dobavljača, istovremeno u dvije različite valute, na primjer dolar za neke transakcije i kineski juan za druge, moguće je, ali savjetujemo, ako je moguće, održavanje dva odvojena računa, svaki s jednom referentnom valutom.  

**Treba se** međutim **izbjegavati**, kako bi se izbjeglo kompromitiranje pravilnog korištenja procedure koju ilustriramo, **transakcije u eurima na računu u eurima**, uključujući interne prijenose ili druge predloške, **na računu u stranoj valuti**.

:::








