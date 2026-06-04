---
title: Pretraga kontrolnih planova
sidebar_position: 1
---

Filter se nalazi na putanji **Kvaliteta > Kontrola artikala > Kontrolni planovi**.  


**Kontrolni planovi** definiraju slijedove *Planiranih ispitivanja* koja se provode pri prihvaćanju materijala, tijekom proizvodnog toka ili tijekom završnog pregleda kako bi se provjerila prikladnost primljenih materijala ili proizvedenih artikala.
*Kontrolni planovi* mogu se definirati za pojedinačne artikle ili grupe ili povezati s *Fazama* *Ciklusa obrade* i razlikovati prema *Kupcu* i *Dobavljaču*.
*Revizijama* *Kontrolnih planova* također se mogu upravljati.


Filter podataka omogućuje umetanje novih *Kontrolnih planova* ili pretraživanje postojećih kako bi se pregledali, izmijenili ili izbrisali. 


### ![](/img/neutral/common/search.png) Pretraga kontrolnih planova

Obrazac se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, jednostavno se kliknite tipka **Traži** da bi se vidjeli rezultate u pregledu rezultata.


### ![](/img/neutral/common/new.png) Unos kontrolnih planova

Za umetanje novih *Kontrolnih planova* potrebno je pritisnuti tipku **Novo**.   


### ![](/img/neutral/common/edit.png) Izmijeni ili ![](/img/neutral/common/view.png) Prikaži kontrolne planove

Za otvaranje upravljanja prikazim rezultata potrebno je dvaput kliknuti na redak on interesa ili odabirom jednog ili više redaka, pritisnuti tipke **Izmijeni** ili **Prikaži**. 


*Specifične tipke*: 


### ![](/img/neutral/common/duplicate.png) Dupliciranje kontrolnih planova

Za dupliciranje postojećeg *kontrolnog plana* u novi *kontrolni plan*, kliknuti na *kontrolni plan* koji se želi duplicirati u prikazu i pritisnuti tipku **DDupliciraj kontrolni plan**. Može se duplicirati samo jedan *kontrolni plan* istovremeno. Pojavit će se upit:   
> **Tip kontrolnog plana**: to je *Vrsta kontrolnog plana* novog *kontrolnog plana* (obavezni podatak), predlaže se *Vrsta kontrolnog plana* izvornog *kontrolnog plana*.
> **Broj**: ovo je progresivni *broj* novog *kontrolnog plana* (obavezni podatak). Predlaže se na temelju *numeriranja* povezanog s *Vrstom kontrolnog plana* i današnjim datumom.
> **Dupliciraj sa sljedivošću**: označava želi li se zadržati odnos/sljedivost odredišnog *kontrolnog plana* u izvornom *kontrolnom planu*, posebno na kartici *Srodni planovi kontrole*. 

Zatim se pritisne tipja **U redu** ili **Otkaži** kako bi se odlučilo želi li se nastaviti s dupliciranjem ili ne.
Kada je obrada završena, prikazuje se novi *kontrolni plan*.


### ![](/img/neutral/common/execute.png) Stvori novu reviziju

Za izradu nove *Revizije* postojećeg *kontrolnog plana* klikne se na *kontrolni plan* iz kojeg se želi stvoriti nova *Reviziju* u prikazu i pritisne tipka **Stvori novu reviziju**. Nova *Reviziju* može se stvoriti samo za jedan *kontrolni plan* istovremeno.
Novi *kontrolni plan* stvara se sa svim informacijama iz izvornog *kontrolnog plana*, ali s povećanim indeksom *Revizije* i *Datumom početka stupanja na snagu* postavljenim na današnji datum.
Izvorni *kontrolni plan* istječe, a *Datum završetka stupanja na snagu* automatski se postavlja na današnji datum.
Nakon što je obrada dovršena, prikazuje se nova *Revizija* *kontrolnog plana*.


### Stvori novu tehničku shemu

Iz *kontrolnog plana* može se stvoriti *Tehničko uputstvo*. Da bi se to učinilo, klikne se na *kontrolni plan* za koji se želi kreirati uputstvo u prikazu i pritisne tipka **Stvori novu tehničku shemu**. Može se stvoriti novo *Tehničko uputstvo* samo za jedan *kontrolni plan* istovremeno.   
Stvori se novo *Tehničko uputstvo* sa svim informacijama iz izvornog *kontrolnog plana*, ali s indeksom *revizije* *nula* i *Datumom početka važenja* od danas. Pojavit će se upit:   
> **Vrsta lista**: ovo je *Vrsta kartice (uputstva)* novog *Tehničkog uputstva* (obavezno).
> **Kupac**: ovo je *Kupac* novog *Tehničkog uputstva*. Predlaže se račun *Kupca* iz izvornog *kontrolnog plana* (samo ako je *Vrsta računa kupac*).
> **Nova šifra**: ovo je *Šifra* novog *Tehničkog uputstva* (obavezno). Predlaže se na temelju *Metode kodiranja* povezane s *Vrstom tehničkog lista*. 
> **Rev.**: Ovo je indeks *Revizije* novog *Tehničkog uputstva* (obavezni podaci); postavljen je na *nulu*.
> **Stvara održavanje sljedivosti**: označava želi li se održati odnos/sljedivost u odredišnom *Tehničkm uputstvu*, u izvornom *kontrolnim planu* i posebno na kartici *Povezane sheme*.   

Zatim se pritisne tipka **U redu** ili **Otkaži** da bi se nastavilo s postupkom izrade ili ne.   
Nakon što je postupak završen, prikazuje se novo *Tehničko uputstvo*.   


### Zahtjevi za kontrolne planove
Pomoću ove tipke može se upravljati *Zahtjevima za plan kontrole*. 


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).