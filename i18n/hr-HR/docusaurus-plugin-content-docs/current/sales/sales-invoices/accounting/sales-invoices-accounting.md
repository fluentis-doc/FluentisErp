---
title: Knjiženje računa
sidebar_position: 1
---

Postupak se otvara putem putanje **Prodaja > Prodajni računi > Knjiženje > Knjiženje računa**. 

Da bi račun bio knjiženn, mora zadovoljiti niz uvjeta: u zaglavlju mora biti postavljena oznaka *Ispisano*, ne smije biti tipa *pro forma*, a tip računa mora sadržavati opću osnovu za knjiženje.

### Knjiženje

Obrazac sadrži na vrhu filtre za pretraživanje kako bi se pronašli i prikazali, u mreži, popis računa za knjiženje
prisutnih u sustavu.

Na dnu obrasca nalaze se neki parametri upravljanja knjiženjem:

**Datum unosa jednak je datumu dokumenta**: ova oznaka forsira knjiženje svakog pojedinog računa na njegov datum izdavanja.

Ako je oznaka onemogućena, aktivira se sljedeće polje, **Datum unosa**, u kojem je moguće postaviti fiksni datum knjiženja;

**Koristi tečaj iz tečajne tablice**: ovom oznakom forsira se sustav da provjeri tablicu promjena kako bi koristio onu prisutnu na datumu knjiženja/računa (ili zadnju unesenu ranije).

Ako oznaka nije postavljena, umjesto toga koristit će se *promjena prisutna u zaglavlju računa*;

**Ažuriraj izmjene na dokumentu**: polje je aktivno *samo* ako je prethodna oznaka postavljena. Nužno je ažurirati i promjenu prisutnu u zaglavlju računa, brišući onu prisutnu;

**PDV = datum dokumenta**: oznaka forsira da PDV nad pomacima bude jednak datumu računa. U slučaju da se želi iskoristiti mogućnost knjiženja do 15. u mjesecu nakon datuma otpreme (odgođeno fakturiranje), oznaka se mora ukloniti kako bi se osiguralo da se PDV preuzme iz početnog datuma prenesenog u izvorni dokument, kao što je propisano poreznim propisima;

**Troškovno računovodstvo**: polje treba postaviti da bi se istovremeno upravljalo i industrijskim knjiženjem. Polje **Tip temeljnice** koje se aktivira nije obavezno jer je uz tip računa također kodirana industrijska osnova za korištenje.

*Posebni gumbi*: 
> **Pretraga računa**: za pretraživanje računa; svi ispisani i neknjiženi računi su ponuđeni.   
> **Knjiženje računa**: izvršava knjiženje odabranih računa prema definiranim postavkama.

### PARAMETRI

Na ovom obrascu postavljaju se neki opći elementi fakturiranja računa.

**Knjiženje promotivnih poklona**: ova oznaka aktivira upravljanje fakturiranjem darova, aktivirajući povezana sljedeća polja.

1. Ako račun koji se knjiži sadrži dar i upravljački parametar nije postavljen, sustav će korisniku zatražiti potvrdu upozorenjem o nepostavljanju. U ovom će se slučaju račun registrirati normalno bez upravljanja linijom darova, koja će se stoga morati ručno upravljati u računovodstvu.

2. Ako je upravljanje darovima aktivirano, ali nisu uneseni podračuni u sljedeća polja, sustav će dodati na kraj normalnih fakturiranh pokreta potrebne linije za storno prihoda, koristeći isti podračun postavljen za prodaju artikla.

3. Ako je postavljena oznaka **Zamjeni do konta stavke** aktivirat će se polje za postavljanje podračuna za storno predujma, koji će se koristiti umjesto podračuna artikla u ovim dodatnim linijama.

**Šifra PDV-a za darove iz šifarnika**: popunjavanjem ovog polja (obično s poreznim kodom koji odgovara slučaju "izvan područja PDV-a" ili "isključeno..." automatski će se izvršiti linija storna vrijednosti darova u evidenciji PDV-a, ako se ne primijeni povrat PDV-a na kupca).

**Konto za storno PDV-a**: koristi se u slučaju da članak dar u računu nema oznaku **Pravo naplate PDV-a**, kojom se označava je li PDV na artikl dar u teret (s oznakom) ili ne (bez oznake) kupca. Ovaj će se iznos registrirati i stornirati samo ako je unesen *podračun storniranja PDV-a*, bez kojeg će operacija morati biti ručno upravljana u računovodstvu (i u ovom polju postoji potvrda upozorenja korisnika o nepostavljanju).

**Grupirajte automatske redove računa**: s aktivnom oznakom, automatski uneseni računi u dnevnik (kao što je u upravljanju darovima gdje se kupac pojavljuje više puta, jednom za ukupan račun, a zatim mu se darovi storniraju) bit će grupirani po podračunima formirajući kompaktni unos.

**Detaljni konto financijskog popusta**: ovaj se podračun koristi za registriranje financijskog popusta povezanog s datumom dospijeća računa.

*Poseban gumb*: 

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za knjiženje darova.

Nakon odabira računa (iz kartice *Knjiženje*) i postavljanja parametara, računi se mogu kontabilizirati pomoću gumba *Knjiženje računa*.

### Prethodni

Obrazac prikazuje popis provedenih knjiženja, kako bi ih korisnik mogao pregledati i po potrebi poništiti putem odgovarajućih gumba.

Poništavanje će biti moguće samo ako je razdoblje još uvijek promjenjivo (ispis dnevnika, neispisani PDV-registar, neispisana periodična likvidacija, neizvršena zatvaranja računa, zatvoreni računski zapisi u naplati ili efektima).

**Knjiženje računa**: prikaz s pojedinostima provedenih radnji. Popunjava se nakon postupka pretraživanja, a mogu se odabrati radnje na koje se primjenjuju funkcije gornjeg izbornika.

Podaci u donjim prikazima, **Računi** i **Knjiženje računa** odgovaraju odabranoj radnji u gornjoj mreži. Dvostruki klik na dijelu računa/knjiženja omogućit će pregled računa/knjiženja koji je povezan.

*Posebni gumbi*:
> **Pretraga knjiženja**: pretražuje popis provedenih knjiženja.  
> **Ekranski pregled knjiženja**: za prikaz predpregleda tiskanja knjiženja.    
> **Povrati knjiženje**: ovim gumbom bit će obrisana sva provedena knjiženja, sa svim povezanim računima.  
> **Povrati račun**: gumb izvršava poništenje odabranog pojedinog računa.  