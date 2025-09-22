---
title: Parametri narudžbe dobavljača
sidebar_position: 2
---

Parametri narudžbe dobavljača omogućuju pravilno upravljanje osnovnom postavkom i prema specifikacijama koje zahtijeva svaka pojedinačna tvrtka.

Prozor se sastoji od gumba i tri različite kartice: Općenito, Učitaj, Analitika.

### Općenito

**Upravljanje duplom mjernom jedinicom**:  samo ako je aktivirano, sustav može upravljati alternativnom mjernom jedinicom u narudžbi dobavljača.

**Automatski prijedlog alternativne jedinice mjere**: ako je aktiviran, osigurava da se predloži količina koja se odnosi na alternativnu mjernu jedinicu, pod uvjetom da je zadana postavljena u matičnim podacima stavke. Ovu zastavu možete aktivirati samo ako je prethodna zastavica bila aktivirana;

**Trošak nula ako nedostaje cjenik**: ako je aktivno, u odsutnosti važeće cjenovne liste popunjava cijenu s vrijednošću nula. U slučaju da ova stavka nije označena, polje bi bilo popunjeno s posljednjim troškom artikla, ako je prisutno.

**Blokiraj umetanje dokumenata na državni praznik**: ako je aktivno, sustav ne dopušta unos narudžbe na prazničnim danima (subota, nedjelja i blagdani). Ako nije aktivno, sustav ne provodi nikakvu kontrolu i dopušta unos narudžbe.

**Predloži marku s prioritetnim cjenikom/Narudžba prodaje**: ne koristi se više.

**Dopusti uređivanje PDV-a**: ako je aktivan, u slučaju [Automatskog kreiranja narudžbi iz zahtjeva za kupnju](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) predlaže se PDV šifra iz šifarnika dobavljača;

**Obvezna šifra korisnika**: ako je aktivna, šifra operatera mora biti navedena u zaglavlju. Bez ovih podataka nije moguće nastaviti s narudžbom. Ako nije aktivna, ovi podaci nisu obvezni, već izborni;

**Traži cijenu stavke u svim zadanim cjenicima**: ako je aktivno, artikl umetnut u retku narudžbe dobavljača će se pretraživati u svim cjenicima navedenim u bazi dobavljača, uz zadani cjenik;  

**Koristi predmet dobavljača**: ako je aktivno, polje za unos šifre stavke dobavljača također se predlaže u mreži stavki narudžbe dobavljača. Ako nije aktivirano, ovo polje neće biti vidljivo; 

**Provjeri zalihe artikala**: ako je aktivirano, sustav provjerava dostupnost artikala u retku narudžbe i upozorava vas ako artikal ponestaje, odnosno, ako je u [šifrarnik artikala](/docs/erp-home/registers/items/create-new-item) aktivirana opcija *Na izmaku zaliha*.

**Ambalažno računovodstvo**: omogućuje vam da u općem računovodstvu obračunate i linije s ambalažnim artiklima kojima se obično upravlja za provjeru zaliha [Povratne ambalaže](/docs/configurations/tables/logistics/package-to-be-returned).


### Utovar

U ovoj karticu definiraju se parametri koji se koriste za [Zaduženje skladišta pristiglom robom](/docs/purchase/goods-reception/procedures/good-receipt-load).


**Kreiraj zapis s datumom dokumenta**: ako je aktivan, registracija skladišta se vrši s istim datumom kao i narudžba i neće biti potrebno navesti datum registracije u obrascu za utovar. Ako nije aktivan, morat ćete navesti datum u obrascu za učitavanje.  

**Prioritet predloška skladišta i istovara**:  ako je aktivan, osigurava da se utovar skladišta provodi korištenjem skladišta i razloga definiranog u postupku utovara ili ako nema, koristi skladište i razlog definiran u ovoj kartici *Utovar*. Međutim, ako zastavica nije postavljena, koristite **Skladište** i **Predložak** definirane u redovima prijema robe.

### Analitika

U ovoj kartici određujete prioritet s kojim želite dohvatiti mjesto troška ili mjesto profita u retku dokumenta.

Možete promijeniti prioritete pomoću gumba:

> **Premjesti gore** ![](/img/neutral/common/move-up.png) i 
> **Premjesti dolje**![](/img/neutral/common/delete-cc.png).

*Zadane vrijednosti*: CDC ili CDP se dohvaćaju iz naplaćene vrste ako postoji. Dodatne informacije potražite u tablici [Vrste prometa Nabave](/docs/configurations/tables/purchase/purchase-invoices-type). Ako nije prisutan u fakturiranoj vrsti,  sustav će ga potražiti u *Šifarniku dobavljača*. Ako nije prisutan, pretražit će se u *Šifarniku artikla* potom na razini *Skladišta*.

**Preračun**: ako je aktivan, ova zastavica ponovno izračunava troškovne/profitne centre prema odabranom prioritetu.  

**Obavezni centar troška/prihoda**: ako je ova opcija aktivirana, unos centara troška/dobiti postaje obavezan.

**Ocijeni prioritet za svaku dimenziju**: Ako je aktivan, ovaj flag omogućuje procjenu svake prioritetne stavke unesene na vrhu kako bi se utvrdilo postoje li dodatne dimenzije koje još nisu valorizirane. Na primjer, pretpostavimo da imamo u *Šifarniku artikla* troškovni centar dimenzije *Poslovna jedinica* i u *Vrsti fakturiranja* nabave dimenziju *Upravna*. Ako flag nije aktivan, sustav procjenjuje samo CDC prisutan u *Kartonu artikla*; ako je flag aktivan, nakon učitavanja CDC-a prisutnog u *Kartonu artikla*, sustav također procjenjuje dimenziju prisutnu u *Vrsti fakturiranja* nabave (u našem primjeru dimenziju *Upravna*), i ako se razlikuje od onih koje je već obradio (*Poslovna jedinica*), učitava centar i nastavlja s provjerom drugih prioriteta.