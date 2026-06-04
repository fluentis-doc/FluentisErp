---
title: Vrste podatkovne liste
sidebar_position: 4
---

Tablica se nalazi na putanji **Tabele > Kvaliteta > Kontrola artikala > Vrste podatkovne liste**. 

U ovoj tablici moguće je kodificirati *Vrste podatkovne liste*.  
*Vrsta podatkovne liste* je sastavni dio, zajedno s *Godina*, *Broj* i *Revizija*, jedinstvenog koda *Podatkovne liste*.  
Neki primjeri upotrebe *Vrste podatkovne liste* nalazimo u upravljanjima:  
> **Podatkovne liste** - u *podacima zaglavlja*;   
> **Parametri kontrole artikala** - u tabulatoru *Općenito*;   
i u svim upravljanjima gdje se koristi *Podatkovna lista*.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.  

**Pretraži Vrste podatkovne liste**  

Forma se sastoji od područja za filtriranje i područja za rezultat. Kada postavite sve željene filtre, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali unutar rezultatne mreže.

**Unos Vrste podatkovne liste**

Za unos novih *Vrste podatkovne liste* potrebno je kliknuti na prvu praznu red u mreži ili pritisnuti tipku **Novo**.
Za novi zapis potrebno je unijeti barem obavezna polja koja zahtijeva program: **Šifra** i **Opis**.

## Vrste podatkovne liste

Ovdje se unose glavne informacije o *Vrste podatkovne liste*.  
Popis se sastoji od sljedećih informacija:     
> **Šifra**: šifra *Vrste podatkovne liste*.     
> **Opis**: opis *Vrste podatkovne liste*.    
> **Bilješke**: slobodne napomene.  

### Atributi Vrste podatkovne liste

Moguće je unijeti [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) općenito za *Vrstu podatkovne liste*.     
Ovi *Extra data* mogu se naslijediti u *Podatkovnim listama* te vrste.  

### Metoda kodifikacije

Ovdje se unose informacije za kodiranje *Šifre* i *Opisa* *Podatkovne liste*.
Popis se sastoji od sljedećih informacija  
> **Redoslijed**: redoslijed primjene pri kreiranju *Šifre* i *Opisa* *Podatkovne liste*.    
> **Tip**: popis unaprijed definiranih vrijednosti u sustavu koji identificiraju element za kodiranje *Podatkovne liste*; unaprijed definirane vrijednosti su:    
>> *ExtraData* - koristi se samo za kreiranje šifre i opisa, to je Extra data prepoznat po stupcu *Extradata*;   
>> *Godina* - koristi se samo za kreiranje šifre, to je *Godina* kreiranja *Podatkovne liste*, može se postaviti na 2, 3 ili 4 znamenke u polju *Duljina*;    
>> *Mjesec* - koristi se samo za kreiranje šifre, to je *Mjesec* kreiranja *Podatkovne liste*, fiksna vrijednost 2 znamenke;  
>> *Dan* - koristi se samo za kreiranje šifre, to je *Dan* kreiranja *Podatkovne liste*, fiksna vrijednost 2 znamenke;    
>> *Progresivno* - koristi se samo za kreiranje šifre, to je *Progresivno* kreiranja *Podatkovne liste*, početna vrijednost, znak za popunjavanje i dimenzije se postavljaju u polju *Duljina*;    
>> *Šifra tipa* - koristi se samo za kreiranje šifre, to je *Šifra* *Vrste podatkovne liste*;     
>> *Opis tipa* - koristi se samo za kreiranje opisa, to je *Opis* *Vrste podatkovne liste*;     
>> *Fiksna vrijednost šifre* - koristi se samo za kreiranje šifre, fiksni znakovi se postavljaju u stupcu *Fiksna vrijednost*;     
>> *Fiksna vrijednost opisa* - koristi se samo za kreiranje opisa, fiksni znakovi se postavljaju u stupcu *Fiksna vrijednost*.     
>
> **Extradata**: aktivno ako je u *Tip* odabrana vrijednost *ExtraData*, to je *ExtraData* koji se koristi za sastavljanje *Šifre* i/ili *Opisa* *Podatkovne liste*.     
> **Svojstvo Šifra**: aktivno ako je u *Tip* odabrana vrijednost *ExtraData*, to je svojstvo *Šifra* *ExtraData* koji se koristi za sastavljanje *Šifre* *Podatkovne liste*.    
> **Svojstvo Opis**: aktivno ako je u *Tip* odabrana vrijednost *ExtraData*, to je svojstvo *Opis* *ExtraData* koji se koristi za sastavljanje *Opisa* *Podatkovne liste*.     
> **Duljina**: aktivno ako je u *Tip*: *Godina* ili *Progresivno*, to je duljina koja će se dodijeliti *Tipu*.    
> **Razmak**: označava hoće li se u *Šifri* umetnuti razmak između ove komponente i sljedeće.   
> **Separator**: znak koji se koristi kao separator između ove komponente *Šifre* i sljedeće.     
> **Znak popunjavanja**: znak koji se koristi za popunjavanje duljine *Progresivnog*.     
> **Početna vrijednost progresivnog**: početna vrijednost *Progresivnog* prilikom unosa prve *Podatkovne liste*.     
> **Fiksna vrijednost**: aktivno ako je u *Tip*: *Fiksna vrijednost šifre* ili *Fiksna vrijednost opisa*.    

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu s formama, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).