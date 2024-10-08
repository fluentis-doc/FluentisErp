---
title: Parametri narudžbe dobavljača
sidebar_position: 2
---

Parametri narudžbe dobavljača omogućuju pravilno upravljanje osnovnom postavkom i prema specifikacijama koje zahtijeva svaka pojedinačna tvrtka.

Prozor se sastoji od gumba i tri različite kartice: Općenito, Učitaj, Analitika.

*Gumbi*:

> **Spremi**: omogućuje vam spremanje postavljenih parametara.
> **Vrati**: omogućuje vraćanje parametara na njihove početne vrijednosti.

### Općenito

**Upravljanje duplom mjernom jedinicom**:  samo ako je aktivirano, sustav može upravljati alternativnom mjernom jedinicom u narudžbi dobavljača.

**Automatski prijedlog alternativne jedinice mjere**: ako je aktiviran, osigurava da se predloži količina koja se odnosi na alternativnu mjernu jedinicu, pod uvjetom da je zadana postavljena u matičnim podacima stavke. Ovu zastavu možete aktivirati samo ako je prethodna zastavica bila aktivirana;

**Povrati samo za tekući datum**: omogućuje vam da oporavite sve praznine u numeriranju naloga samo ako nalog ima današnji datum;

**Auto insert varijante u varijante karakteristika**: više se ne koristi;

**Ne dopusti da se izvrši veća količina**: ako je aktivan, sprječava, prilikom obrade narudžbe s potvrdom o primitku robe, navođenje količina većih od onih navedenih u redovima narudžbe, izbjegavajući bilo kakve neusklađenosti između naručenih količina i onih koje su stvarno utovarene u skladište;

**Kontroliraj redni broj dokumenta i datum**: kontrolira slijed datuma/brojeva narudžbenica. Ako nema slijeda, sustav će vratiti grešku koja sprječava unos naloga;

**Trošak nula ako nedostaje cjenik**: ako je aktivan, u nedostatku važećeg cjenika popunjava cijenu s vrijednošću nula. Ako ova stavka nije označena, polje će biti ispunjeno konačnom cijenom stavke, ako postoji;

**Prikaži dimenzije**: ako je aktivno, upravlja se i prikazuje stupce dimenzija (visina, širina, dubina) mreže stavki;

**Dopusti otpremnice s istim brojem i kupcem**: ako je aktivno, dopušta umetanje iste dostavnice broja za istog dobavljača. Preporuča se ostaviti ovu zastavu deaktiviranom kako bi sustav mogao izvršiti provjeru jedinstvenosti;

**Blokiraj unos na praznike**: ako je aktivan, sustav ne dopušta unos naloga na praznike (subota, nedjelja i praznici). Ako nije aktivan, sustav ne provodi nikakve provjere i dopušta unos naloga;

**Izvrši samo autorizirane naloge**: ako je aktivan, ne dopušta obradu neovlaštenih narudžbi dobavljača s povezanom provjerom (u *Narudžbe dobavljača* > kartica *Zaglavlje*);

**Predloži marku s prioritetnim cjenikom/Narudžba prodaje**: više se ne koristi;

**Dopusti uređivanje PDV-a**: ako je aktivan, u slučaju [Automatskog kreiranja narudžbi iz zahtjeva za kupnju](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) predlaže se PDV šifra iz šifarnika dobavljača;

**Obvezna šifra korisnika**: ako je aktivna, šifra operatera mora biti navedena u zaglavlju. Bez ovih podataka nije moguće nastaviti s narudžbom. Ako nije aktivna, ovi podaci nisu obvezni, već izborni;

**Traži cijenu stavke u svim zadanim cjenicima**: ako je aktivno, artikl umetnut u retku narudžbe dobavljača će se pretraživati u svim cjenicima navedenim u bazi dobavljača, uz zadani cjenik;  

**Koristi predmet dobavljača**: ako je aktivno, polje za unos šifre stavke dobavljača također se predlaže u mreži stavki narudžbe dobavljača. Ako nije aktivirano, ovo polje neće biti vidljivo; 

**Provjeri zalihe artikala**: ako je aktivirano, sustav provjerava dostupnost artikala u retku narudžbe i upozorava vas ako artikal ponestaje;

**Ambalažno računovodstvo**: omogućuje vam da u općem računovodstvu obračunate i linije s ambalažnim artiklima kojima se obično upravlja za provjeru zaliha povratne ambalaže. Upravljanje povratnom ambalažom bit će objašnjeno u odgovarajućem videu.

### Utovar

**Kreiraj zapis s datumom dokumenta**: ako je aktivan, registracija skladišta se vrši s istim datumom kao i narudžba i neće biti potrebno navesti datum registracije u obrascu za utovar. Ako nije aktivan, morat ćete navesti datum u obrascu za učitavanje.  

**Prioritet predloška skladišta i istovara**:  ako je aktivan, osigurava da se utovar skladišta provodi korištenjem skladišta i razloga definiranog u postupku utovara ili ako nema, koristi skladište i razlog definiran u ovoj kartici *Utovar*. Međutim, ako zastavica nije postavljena, koristite **Skladište** i **Predložak** definirane u redovima prijema robe.

### Analitika

U ovoj kartici određujete prioritet s kojim želite dohvatiti mjesto troška ili mjesto profita u retku dokumenta.

Možete promijeniti prioritete pomoću gumba:

> **Premjesti gore** ![](/img/neutral/common/move-up.png) i 
> **Premjesti dolje**![](/img/neutral/common/delete-cc.png).

*Zadane vrijednosti*: CDC ili CDP se dohvaćaju iz naplaćene vrste ako postoji. Dodatne informacije potražite u tablici [Vrste prometa Nabave](/docs/configurations/tables/purchase/purchase-invoices-type). Ako nije prisutan u fakturiranoj vrsti,  sustav će ga potražiti u *Šifarniku dobavljača*. Ako nije prisutan, pretražit će se u *Šifarniku artikla* potom na razini *Skladišta*.

**Preračun**: ako je aktivan, ova zastavica ponovno izračunava troškovne/profitne centre prema odabranom prioritetu.  

**Obvezni CdP/CDC**: ako je aktivan, ova oznaka čini atribuciju troškovnih/profitnih centara obveznom.

Nakon što postavite parametre najbolje što želite, morat ćete ih spremiti kako bi postali učinkoviti klikom na gumb **Spremi**.


<iframe width="560" height="315" src="https://www.youtube.com/embed/Ly9eQJHYYro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>