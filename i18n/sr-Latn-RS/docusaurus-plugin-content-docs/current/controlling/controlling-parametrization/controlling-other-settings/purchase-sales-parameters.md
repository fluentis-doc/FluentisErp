---
title: Parametri u modulima područja Nabave i Prodaje
sidebar_position: 35
---

Dokumenti u poslovnim procesima imaju svoje specifične postavke za vrednovanje *centara preduzeća*.

## Područje nabavke

U području nabavke postavke su dostupne za Zahtjeve za nabavku, Narudžbe dobavljača, Primke i Ulazne fakture.

### Zahtjevi za nabavku

Unutar parametara modula, na kartici *Analitika*, moguće je definisati prioritet vrednovanja centara između sljedećih opcija:

- *Tip prometa* prema kontu u kontnom planu povezanom sa troškovima nabavke artikla
- *Šifarnik artikala* prema odabranom artiklu
- *Šifarnik* prema dobavljaču povezanom sa stavkom zahtjeva
- *Skladište* prema skladištu povezanom sa stavkom artikla

### Narudžbe dobavljača

Unutar parametara modula, na kartici *Analitika*, takođe je moguće definisati prioritet vrednovanja centara između sljedećih opcija:

- *Tip prometa* prema kontu u kontnom planu povezanom sa troškovima nabavke artikla
- *Šifarnik artikala* prema odabranom artiklu
- *Šifarnik dobavljača* prema dobavljaču na narudžbi
- *Skladište* prema skladištu povezanom sa stavkom artikla

Takođe su dostupne sljedeće opcije:

- *Preračun*: kada se narudžba kreira iz prethodnog dokumenta (npr. zahtjeva za nabavku), ova opcija omogućava ponovno izračunavanje analitike prema parametrima ciljnog modula.
- *Obavezan centar troška/prihoda*: obavezuje korisnika na 100% vrednovanje analitike za svaku stavku artikla.
- *Procijeni prioritet za svaku dimenziju*: opcija je dostupna samo za preduzeća sa aktivnim *controllingom*. Ako **nije** uključena, ***Fluentis ERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji omogućava vrednovanje centara preduzeća. Ako je **uključena**, ***Fluentis ERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikal, skladište, dobavljač).

### Primke

Unutar parametara modula, na kartici *Analitika*, moguće je definisati prioritet vrednovanja centara na isti način kao kod narudžbi dobavljača:

- *Tip prometa* prema kontu u kontnom planu povezanom sa troškovima nabavke artikla
- *Šifarnik artikala* prema odabranom artiklu
- *Šifarnik dobavljača* prema dobavljaču na narudžbi
- *Skladište* prema skladištu povezanom sa stavkom artikla

Takođe su dostupne sljedeće opcije:

- *Preračun*: kada se primka kreira iz prethodnog dokumenta, ova opcija omogućava ponovno izračunavanje analitike prema parametrima ciljnog modula.
- *Procjena prioriteta po svakoj dimenziji*: opcija je dostupna samo za preduzeća sa aktivnim *controllingom*. Ako **nije** uključena, ***Fluentis ERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji omogućava vrednovanje centara preduzeća. Ako je **uključena**, ***Fluentis ERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikal, skladište, dobavljač).

U proceduri ***Kreiranje primke iz prijema robe*** dostupan je na kartici *Parametri* indikator ***Preračunavanje centara troška/profita***, koji pokreće ponovno izračunavanje analitike prema parametrima odredišnog modula.

### Ulazne fakture

U parametrima modula, na kartici *Analitika*, može se definisati prioritet vrednovanja centara između:

- *Tip prometa* prema kontu u kontnom planu povezanom sa troškovima nabavke artikla
- *Šifarnik artikala* prema odabranom artiklu
- *Šifarnik dobavljača* prema dobavljaču na narudžbi
- *Skladište* prema skladištu povezanom sa stavkom artikla

Takođe su dostupne sljedeće opcije:

- *Preračun*: kada se faktura kreira iz prethodnog dokumenta (npr. zahtjeva za nabavku), ova opcija omogućava ponovno izračunavanje analitike prema parametrima ciljnog modula.
- *Procjena prioriteta po svakoj dimenziji*: opcija je dostupna samo za preduzeća sa aktivnim *controllingom*. Ako **nije** uključena, ***Fluentis ERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji omogućava vrednovanje centara preduzeća. Ako je **uključena**, ***Fluentis ERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikal, skladište, dobavljač).

U proceduri ***Kreiranje fakture iz prijema robe*** dostupan je na kartici *Parametri* indikator ***Preračunavanje centara troška/profita***, koji pokreće ponovno izračunavanje analitike prema parametrima odredišnog modula.

U proceduri ***Valorizacija primke*** dostupan je na kartici *Parametri* indikator ***Preračunavanje centara troška/profita***, koji pokreće ponovno izračunavanje analitike prema parametrima odredišnog modula.

U proceduri ***Valorizacija primke i povrata*** dostupan je na kartici *Parametri* indikator ***Preračunavanje centara troška/profita***, koji pokreće ponovno izračunavanje analitike prema parametrima odredišnog modula.

## Područje prodaje

U području prodaje konfiguracije su dostupne za narudžbe kupaca, otpremnice i izlazne fakture.

### Ponude

### Narudžbe kupaca

U parametrima modula, na kartici *Analitika*, postoji mogućnost definisanja prioriteta vrednovanja centara između:

- *Tip prometa* prema kontu u kontnom planu povezanom sa prihodima od prodaje artikla
- *Šifarnik artikala* prema odabranom artiklu
- *Šifarnik kupca* prema kupcu na narudžbi
- *Skladište* prema skladištu povezanom sa stavkom artikla

Takođe je dostupna sljedeća opcija:

- *Procjena prioriteta po svakoj dimenziji*: opcija je dostupna samo za preduzeća sa aktivnim *controllingom*. Ako **nije** uključena, ***Fluentis ERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji omogućava vrednovanje centara preduzeća. Ako je **uključena**, ***Fluentis ERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikal, skladište, kupac).

### Otpremnice

U parametrima modula, na kartici *Analitika*, postoji mogućnost definisanja prioriteta vrednovanja centara između:

- *Tip prometa* prema kontu u kontnom planu povezanom sa prihodima od prodaje artikla
- *Šifarnik artikala* prema odabranom artiklu
- *Šifarnik kupca* prema kupcu na dokumentu
- *Skladište* prema skladištu povezanom sa stavkom artikla

Takođe je dostupna sljedeća opcija:

- *Procjena prioriteta po svakoj dimenziji*: opcija je dostupna samo za preduzeća sa aktivnim *controllingom*. Ako **nije** uključena, ***Fluentis ERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji omogućava vrednovanje centara preduzeća. Ako je **uključena**, ***Fluentis ERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikal, skladište, kupac).

### Prodajne fakture

U parametrima modula, na kartici *Analitika*, postoji mogućnost definisanja prioriteta vrednovanja centara između:

- *Tip prometa* prema kontu u kontnom planu povezanom sa prihodima od prodaje artikla
- *Šifarnik artikala* prema odabranom artiklu
- *Šifarnik kupca* prema kupcu na dokumentu
- *Skladište* prema skladištu povezanom sa stavkom artikla

Takođe je dostupna sljedeća opcija:

- *Procjena prioriteta po svakoj dimenziji*: opcija je dostupna samo za preduzeća sa aktivnim *controllingom*. Ako **nije** uključena, ***Fluentis ERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji omogućava vrednovanje centara preduzeća. Ako je **uključena**, ***Fluentis ERP*** će primijeniti prioritet za vrednovanje svih mogućih [*dimenzija*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) koje su postavljene u različitim izvorima (konto, artikal, skladište, kupac).

U proceduri ***Kreiranje fakture iz otpremnice*** dostupan je na kartici *Parametri* indikator **Preračunavanje centara troška/profita**, koji pokreće ponovno izračunavanje analitike prema parametrima odredišnog modula.