---
title: Početne i periodične procjene
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvaliteta > Kvalifikacije dobavljača > Početne i periodične procjene**


:::important Čemu služi
*Početne i periodične procjene* jedna je od dostupnih metoda evaluacije dobavljača.   
Ova subjektivna metoda je ručna i obično se koristi za početne i naknadne evaluacije.   

Upravljanje omogućuje umetanje novih *Početnih i periodičnih procjena* ili pretraživanje postojećih kako bi se pregledale, izmijenile ili izbrisale.   
:::


## Tipke za upravljanje


### ![](/img/neutral/common/search.png) Pretraga Početnih i periodičnih procjena

Obrazac se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, jednostavno se klikne tipka **Traži** da bi se vidjeli podaci u pregeldu rezultata.


### ![](/img/neutral/common/new.png) Unos Početnih i periodičnih procjena

Za unos novih *Početnih i periodičnih procjena* klikne se na prvi prazan redak u pregledu ili pritisne tipka **Novo**.   
Za novi zapis moraju se unijeti barem obavezna polja koja zahtijeva program: **Datum procjene**, **Dobavljač** i **Tip procjene**.


### ![](/img/neutral/common/select-all.png) Pridruži Check-listu

Ova tipka je omogućena samo ako se odabere samo jednu *Početna i periodična procjena*, a *Dobavljač* još nije evaluiran.   
Pojavljuje se *Pomoć za kontrolnu listu* s koje se može odabrati samo jedna takva lista.
Ako za redak već postoji *Kontrolna lista*, pojavit će se upit želi li se zamijeniti postojeća lista (i pripadajuća *Pitanja*) s novoodabranom *Kontrolnom listom*.


## Upravljani podaci


### Početne i periodične procjene

Ovo je popis na koji se unose glavni podaci iz *Početne i periodične procjene*.   
Popis se sastoji od sljedećih podataka:  
> **Datum procjene**: (obavezno) ovo je datum kada je evaluacija provedena.   
> Prilikom unosa nove evaluacije, automatski se prikazuje današnji datum.   
>
> **Dobavljač**: (obavezno) je naziv tvrtke *Dobavljača* koji se ocjenjuje.    
>
> **Tip procjene**: (obavezno polje) je šifra *Vrste evaluacije*.   
> Prilikom unosa nove evaluacije, predlaže se *Vrsta evaluacije* naznačena u *Parametrima kvalifikacije dobavljača*.   
>
> **Kontrolna lista**: ovo je šifra za *Kontrolnu listu*.   
> Prilikom unosa *Dobavljača*, automatski se prikazuje *Kontrolna lista* koja se nalazi u njegovim *Računovodstvenim podacima > Podaci o kvaliteti* i povezana *Pitanja*.   
> Uređivanje *Kontrolne liste* zamjenjuje postojeće *Opise/Pitanja* na zahtjev.
>
> **Inspektor**: je šifra *Inspektora* koji provodi evaluaciju.   
>
> **Raztog procjene**: slobodne bilješke o temi, to je opis motivacije za evaluaciju.   
>
> **Procjena**: ovo je *Ocjena* koju je *Inspektor* dao *Dobavljaču*.   
> Ćelija je obojena bojama *pozadine* i *teksta* navedenima u tablici *Ocjene dobavljača*.   
> Ako je dodijeljena *Ocjena* povezana s *Ocjenom dobavljača* s *Automatskom suspenzijom*, ocijenjeni *Dobavljač* bit će *Suspendiran* od *Datuma ocjenjivanja*.   
> Suspenziju mora ručno vratiti odgovorna *Funkcija tvrtke*.   
> Nakon što je *Ocjena* povezana, podaci o *Datumu ocjenjivanja*, *Dobavljaču* i *Vrsti ocjenjivanja* više se neće moći uređivati.   
>
> **Opis vrste procjene**: ovo je opis *Vrste procjene*.   
> **Opis kontrolne liste**: ovo je opis *Kontrolne liste*.   
> **Opis inspektora**: ovo je opis *Inspektora*.   
> **Napomene**: bilješke u slobodnom obliku.   


### Opisi/Pitanja

Ovo je popis pitanja/aktivnosti koje će se koristiti/izvoditi za evaluaciju dobavljača.   
Popis se sastoji od sljedećih informacija:   
> **Redoslijed**: ovo je slijed kojim se provode *pitanja/aktivnosti*.   
> **Opis/Pitanje**: bilješke u slobodnom obliku o temi.   
> **Odgovor**: bilješke u slobodnom obliku o temi.   
> **Kategorija**: ovo je *Kategorija* povezana s *Opisom/Pitanjem* ako je preuzeto s *Kontrolne liste*.   
> **Očekivana procjena**: ovo je minimalna *Razina ocjene* potrebna za ocjenu.   
> **Težina (%)**: ovo označava *Težinu* (važnost), izraženu kao postotak, povezanu s *Opisom/Pitanjem* ako je preuzeto s *Kontrolne liste*.   
> **Zabilježena procjena**: ovo je procijenjena *Razina ocjene*.   
> Font postaje *crven* ako je *Otkrivena ocjena* niža od *Očekivane ocjene*.   
> **Ocjena težine**: ovo je *Ocjena* koju sustav automatski dodjeljuje evaluaciji danoj određenom *Opisu/Pitanju* na temelju *Razine* *Otkrivene evaluacije*;
> Ova se ocjena izračunava (Ocjena težine = Otkrivena Razina Evaluacije.Razina / 100 * Pitanje S Popisa Provjere.Postotak težine).
> **Napomene**: bilješke u slobodnom obliku.


:::tip Metoda korištena za izračun ocjene težine   
Za svaki *Opis/Pitanje*, gdje su uneseni podaci *Težina (%)* i *Otkrivena ocjena*, primjenjuje se sljedeći izraz:
- **Ocjena težine** = **Razina** od **Zabilježena procjene** / **100** * **Težina (%)**;
- **Ocjena težine** = **15** / **100** * **20** = **3**.
:::


### Dodatni podaci

 Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) generalno za *Početne i periodične procjene*.   


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).