---
title: Vrste kontrolnog plana
sidebar_position: 8
---

Tablica se nalazi na putu **Tabele > Kvaliteta > Kontrola artikla > Tipovi kontrolnog plana**.

U ovoj tablici moguće je kodirati *Tipove kontrolnog plana*.   
*Tip kontrolnog plana* je sastavni dio, zajedno s *Godinom*, *Brojem* i *Revizijom*, jedinstvenog koda *Kontrolnog plana*.  
Primjeri korištenja *Tipova kontrolnog plana* mogu se pronaći u upravljanjima:  
> **Kontrolni planovi** - u *podacima zaglavlja*;   
> **Parametri kontrole artikla** - u kartici *Općenito*;   
i u svim upravljanjima gdje se koristi *Kontrolni plan*.

Tablica sadrži unaprijed definirane vrijednosti od sustava i nije ih moguće mijenjati niti brisati. Unaprijed definirane vrijednosti su:  
| Kod | Opis |   
|:--|:--|
| MInt | Interno |   
| MNNr | Nenormalizirano |   
| MNrm | Normalizirano |   
| MUff | Službeno |   

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih za pregled, izmjenu ili brisanje (ako su *Brišivi*).  

**Pretraživanje Tipova kontrolnog plana**

Forma se sastoji od područja za filtriranje i područja za rezultat. Nakon što postavite sve željene filtre, kliknite na gumb **Traži** za prikaz rezultata u mreži.

**Unos Tipova kontrolnog plana**  

Za unos novih *Tipova kontrolnog plana* potrebno je kliknuti na prvi prazni redak u mreži ili pritisnuti gumb **Novo**.   
Za novi zapis potrebno je unijeti barem obavezna polja koja zahtijeva program: **Kod** i **Opis**.  

## Tipovi kontrolnog plana

Ovo je popis gdje se unose glavne informacije o *Tipovima kontrolnog plana*.
Popis sadrži sljedeće informacije: 
> **Kod**: kod *Tipa kontrolnog plana*.  
> **Opis**: opis *Tipa kontrolnog plana*.   
> **Numeracija**: kod *Numeracije*.   
> **Brišivo**: označava je li *Tip kontrolnog plana* brišiv. 
> **Napomene**: slobodne bilješke.

### Extra podaci

Moguće je unijeti [Extra podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) općenito za *Tip kontrolnog plana*.     
Ti *Extra podaci* mogu se naslijediti u *Kontrolne planove* te vrste.    

### Planirane probe

Moguće je unijeti [Tipove ispitivanja](/docs/configurations/tables/quality/item-control/test-type) općenito za *Tip kontrolnog plana*.     
Ti *Tipovi ispitivanja* nasljeđuju se u *Kontrolnim planovima* te vrste.    

#### Atributi planiranih probe

Moguće je unijeti [Extra podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) općenito za *Planiranu probu*.   
Ti *Extra podaci* mogu se naslijediti u *Probe* dokumenata gdje je predviđena upotreba atributa.     

#### Konfiguracija planiranih probe

Sadrži [Extra podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) necessari potrebne operaterima za pripremu svih potrebnih alata kako bi mogli započeti određenu probu.
Mogu se smatrati potrebnom konfiguracijom, operativnim informacijama za izvođenje probe.
Ti *Extra podaci* mogu se naslijediti u *Probe* dokumenata gdje je predviđena konfiguracija. 

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu s formama, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).