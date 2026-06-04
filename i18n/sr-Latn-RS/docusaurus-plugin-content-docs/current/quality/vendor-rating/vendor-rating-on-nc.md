---
title: Periodične procjene nesukladnosti
sidebar_position: 3
---

Upravljanje se nalazi na putanji **Kvaliteta > Kvalifikacije dobavljača > Periodične procjene nesukladnosti**.  


:::important Čemu služi
*Periodične procjene nesukladnosti* jedna su od metoda ocjenjivanja dobavljača koje su dostupne za njihovo ocjenjivanje.   
Ova se objektivna metoda temelji na težini neispravnosti dodijeljenima *Nesukladnostima dobavljaču* i uobičajeno se koristi za periodične procjene.   

Upravljanje omogućuje unos novih *Periodičnih procjena nesukladnosti* ili pretraživanje već postojećih za pregled.   
:::


## Tipke za upravljanje


### ![](/img/neutral/common/search.png) Pretraga Periodičnih procjena nesukladnosti

Obrazac se sastoji od područja filtra i područja rezultata. Nakon što se postave svi željeni filtri, dovoljno je kliknuti na tipku **Traži** kako bi se prikazali podaci unutar tablice rezultata.   


### ![](/img/neutral/common/accountant-search.png) Periodična kvalifikacija

Za izvršavanje procjene potrebno je pritisnuti tipku **Periodična kvalifikacija**.   
Prikazuje se zahtjev za:   
> **Datum završetka procjene**: predložen na današnji datum, to je datum od kojeg se ocjenjuje svaki pojedini *Dobavljač*, idući unatrag, za razdoblje koje mu je dodijeljeno.   
> **Tip procjene**: to je vrsta dodijeljena procjeni svakog pojedinog *Dobavljača*.   
> Predlaže se *Vrsta procjene* navedena u *Parametrima kvalifikacije dobavljača*.   
Obje informacije su obvezne.   



## Upravljani podaci


### Periodične procjene nesukladnosti

To je popis gdje se prikazuju glavne informacije o *Periodičnim procjenama nesukladnosti*.   
Popis se sastoji od sljedećih informacija:   
> **Od datuma procjene**: početni je datum razdoblja procjene.   
> **Do datuma procjene**: krajnji je datum razdoblja procjene.   
> **Dobavljač**: naziv je tvrtke ocijenjenog *Dobavljača*.   
> **Bonus**: početna je vrijednost *Bonusa* dodijeljenog *Dobavljaču*.   
> **Preostali bonus**: konačna je vrijednost *Bonusa* nakon izvršene procjene.   
> **Bodovi %**: postotna je vrijednost između *Preostalog bonusa* i *Početnog bonusa*.   
> **Procjena**: *Procjena* je dodijeljena *Dobavljaču* na temelju postignutog *Bodovi %*.   
> Ćelija je obojena *pozadinskom* i *tekstualnom* bojom predviđenom u tablici *Procjena dobavljača*.   
> Ako je dodijeljena *Procjena* povezana s *Procjenom dobavljača* s *Automatskom suspenzijom*, ocijenjeni *Dobavljač* bit će *Suspendiran* od *Datuma procjene*.   
> Oporavak suspenzije mora se izvršiti ručno od strane nadležne *Poslovne funkcije*.   
> **Napomene**: slobodne bilješke.   
Sve su informacije samo za čitanje, osim Bilješki.   


### Vrijednosti nesukladnosti u periodu

To je popis različitih *Ozbiljnosti* utvrđenih u procijenjenom razdoblju.   
Popis se sastoji od sljedećih informacija:   
> **Ozbiljnost**: to je šifra *Ozbiljnosti*.   
> **Opis ozbiljnosti**: opis *Ozbiljnosti*.   
> **Broj**: broj je prebrojanih *Ozbiljnosti*.   
> **Bodovi ozbiljnosti**: *Bodovi izračuna indeksa kvalifikacije dobavljača* povezani su s *Ozbiljnošću*.   
> **Ukupni izračunati bodovi**: zbroj je svih *Bodova izračuna indeksa kvalifikacije dobavljača* (**IQF**) i međusobno pomnoženih.   


### Dodatni podaci

Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) generalno za *Periodične procjene nesukladnosti*.   


:::tip Metoda korištena za izračun   
*Metoda korištena za izračun:* **Ukupno izračunati bodovi**, **Preostali bonus**, **Bodovi %** i **Ocjena**.   
- Razmatra se svaki pojedini redak *Kvara* *Nesukladnosti* unesen u procijenjenom razdoblju, i dodijeljen *Dobavljaču* u procjeni.   
- Za svaki redak *Uočenog kvara* množi se svaki pojedini *IQF*: *Uočenog kvara*, *Stvarnog uzroka* ili *Pretpostavljenog uzroka* (u nedostatku povezanog *Stvarnog uzroka*), *Predloženog rješenja* i *Poduzete odluke*. Ako jedan od tih podataka nije unesen, *IQF* je jednak **1,0**. Primjer:   
  - redak 1: *IQF Uočenog kvara* = **5,1**, *IQF Stvarnog uzroka* = **1,5**, *IQF Predloženo rješenje* = **1,3** i *IQF Poduzete odluke* = **2,1**;   
  Ukupno za redak iznosi: **5,1 * 1,5 * 1,3 * 2,1 = 20,8845** = *Ukupno Redak 1*.   
  - redak 2: *IQF Uočenog kvara* = **2,1**, *IQF Pretpostavljenog uzroka* = **4,2** (*Stvarni uzrok* nije unesen), *Predloženo rješenje* nije uneseno, stoga *IQF* = **1,0** i *IQF Poduzete odluke* = **1,7**;   
  Ukupno za redak iznosi: **2,1 * 4,2 * 1,0 * 1,7 = 14,994** = *Ukupno Redak 2*.   
- Ukupan izračunati rezultat za pojedinačni redak zbraja se s ostalim razmatranim recima koji imaju istu *Ozbiljnost*. Zbroj svih rezultata po retku je *Ukupno izračunati rezultat* za tu *Ozbiljnost*. Primjer:   
  - **Ukupno izračunato bodova** = *Ukupno Redak 1* + *Ukupno Redak 2* = **20,8845 + 14,994 = 35,8785**.   
- Za izračun *Preostalog bonusa* uzimamo početni *Bonus* *Dobavljača* jednak **500**. Dakle:   
    - **Preostali bonus** = **Bonus** - zbroj **Ukupno izračunatih bodova** za svaku *Ozbiljnost* = **500 - 35,8785 = 464,1215**.   
- Za izračun *Postotka bodova* primjenjuje se postotak između *Preostalog bonusa* i *Početnog bonusa*:   
    - **Preostali bonus** / **Bonus** * 100 = **464,1215 / 500 * 100 = 92.8243%**.   
- **Ocjena** se dodjeljuje na temelju vrijednosti *Bodova od* navedenih na popisu *Raspona bodova za ocjenjivanje* koji se nalazi u *Parametrima kvalifikacije dobavljača*. Uzima se u obzir *Ocjena* s *Bodovi od* koja je odmah niža od **Postotka bodova**.   
:::


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).