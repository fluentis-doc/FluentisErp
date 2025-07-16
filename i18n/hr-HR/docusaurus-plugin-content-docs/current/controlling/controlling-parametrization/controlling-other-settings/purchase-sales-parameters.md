---
title: Parametri u modulima područja Nabave i Prodaje
sidebar_position: 35
---

Dokumenti u tijeku poslovanja imaju svoje specifične postavke za vrednovanje *centara poduzeća*.

## Područje nabave
U području nabave postavke su dostupne za Zahtjeve za nabavu, Narudžbe dobavljača, Primke i Ulazne račune.

### Zahtjevi za nabavu
Unutar parametara modula, na kartici Analitički, moguće je definirati prioritet vrednovanja centara među sljedećim opcijama:
    - *Tip prometa* prema kontu u kontnom planu povezanim s prihodima od nabave artikla
    - *Šifrarnik artikala* prema odabranom artiklu
    - *Šifarnik* prema dobavljaču povezanom s linijom zahtjeva
    - *Skladište* prema skladištu povezanim s linijom artikla


### Narudžbe dobavljača
Unutar parametara modula, na kartici *Analitički*, također je moguće definirati prioritet vrednovanja centara među sljedećim opcijama
    - *Tip prometa* prema kontu u kontnom planu povezanim s prihodima od nabave artikla
    - *Šifrarnik artikala* prema odabranom artiklu
    - *Šifrarnik dobavljača* prema dobavljaču na narudžbi
    - *Skladište* prema skladištu povezanim s linijom artikla
Također su prisutni sljedeći flagovi:
- *Preračun*: kada se narudžba stvori iz prethodnog dokumenta (npr. zahtjeva za nabavu), ovaj flag omogućava ponovno izračunavanje analitike prema parametrima ciljnog modula
- *Obavezan je centar troškova/prihoda*: : obvezuje korisnika na 100% vrednovanje analitike za svaku liniju artikla
- *Ocijeni prioritet za svaku dimenziju*: flag je dostupan samo za poduzeća s aktiviranim *kontrolingom*. Ako **nije** prisutan, ***FluentisERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji
omogućuje vrednovanje centara poduzeća. **Ako je prisutan**, ***FluentisERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikl, skladište, dobavljač).

### Primke
Unutar parametara modula, na kartici *Analitički*, moguće je definirati prioritet vrednovanja centara na isti način kao za narudžbe dobavljača.
    - *Tip prometa* prema kontu u kontnom planu povezanim s prihodima od nabave artikla
    - *Šifrarnik artikala* prema odabranom artiklu
    - *Šifrarnik dobavljača* prema dobavljaču na narudžbi
    - *Skladište* prema skladištu povezanim s linijom artikla
Također su prisutni sljedeći flagovi:
- *Preračun*: : kada se narudžba stvori iz prethodnog dokumenta (npr. zahtjeva za nabavu), ovaj flag omogućava ponovno izračunavanje analitike prema parametrima ciljnog modula
- *Procjena prioriteta po svakoj dimenziji*: lag je dostupan samo za poduzeća s aktiviranim *kontrolingom*. Ako **nije** prisutan, ***FluentisERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji
omogućuje vrednovanje centara poduzeća. **Ako je prisutan**, ***FluentisERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikl, skladište, dobavljač).

U postupku ***Izrade primke iz prijema robe***  dostupan je tabu je Parametar flag za ***Preračunavanje centara troška/profita***, koji postavlja ponovni izračun analitike prema parametrima modula odredišta.

### Ulazni računi
U parametrima modula, u kartici *Analitički*, može se definirati prioritet vrednovanja centara između:
    - *Tip prometa* prema kontu u kontnom planu povezanim s prihodima od nabave artikla
    - *Šifrarnik artikala* prema odabranom artiklu
    - *Šifrarnik dobavljača* prema dobavljaču na narudžbi
    - *Skladište* prema skladištu povezanim s linijom artikla
Također su prisutni sljedeći flagovi:
- *Preračun*: : kada se narudžba stvori iz prethodnog dokumenta (npr. zahtjeva za nabavu), ovaj flag omogućava ponovno izračunavanje analitike prema parametrima ciljnog modula
- *Procjena prioriteta po svakoj dimenziji*: lag je dostupan samo za poduzeća s aktiviranim *kontrolingom*. Ako **nije** prisutan, ***FluentisERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji
omogućuje vrednovanje centara poduzeća. **Ako je prisutan**, ***FluentisERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikl, skladište, dobavljač).

U postupku ***Kreiranja računa iz prijema robe*** dostupan je u tabu Parametar flag za ***Preračunavanje centara troška/profita***, koji postavlja ponovni izračun analitike prema parametrima modula odredišta.

U postupku ***Valorizacije primke*** dostupan je u tabu Parametar flag za ***Preračunavanje centara troška/profita***, koji postavlja ponovni izračun analitike prema parametrima modula odredišta.

U postupku ***Valorizacije primke i povrata*** dostupan je u tabu Parametar flag za ***Preračunavanje centara troška/profita***, koji postavlja ponovni izračun analitike prema parametrima modula odredišta.

## Područje prodaje
U području prodaje, konfiguracije su dostupne za narudžbe kupaca, otpremnice i izlazne fakture.

### Ponude

### Narudžbe kupaca
U parametrima modula, u kartici *Analitički*, postoji mogućnost definiranja prioriteta vrednovanja centara između:
    - *Tip prometa* prema kontu u kontnom planu povezanim s prihodima od nabave artikla
    - *Šifrarnik artikala* prema odabranom artiklu
    - *Šifrarnik dobavljača* prema dobavljaču na narudžbi
    - *Skladište* prema skladištu povezanim s linijom artikla
Također su prisutni sljedeći flagovi:
- *Procjena prioriteta po svakoj dimenziji*: flag je dostupan samo za poduzeća s aktiviranim *kontrolingom*. Ako **nije** prisutan, ***FluentisERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji
omogućuje vrednovanje centara poduzeća. **Ako je prisutan**, ***FluentisERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikl, skladište, dobavljač).

### Otpremnica
U parametrima modula, u kartici *Analitički*, postoji mogućnost definiranja prioriteta vrednovanja centara između:
    - *Tip prometa* prema kontu u kontnom planu povezanim s prihodima od nabave artikla
    - *Šifrarnik artikala* prema odabranom artiklu
    - *Šifrarnik dobavljača* prema dobavljaču na narudžbi
    - *Skladište* prema skladištu povezanim s linijom artikla
Također su prisutni sljedeći flagovi:
- *Procjena prioriteta po svakoj dimenziji*: flag je dostupan samo za poduzeća s aktiviranim *kontrolingom*. Ako **nije** prisutan, ***FluentisERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji
omogućuje vrednovanje centara poduzeća. **Ako je prisutan**, ***FluentisERP*** će primijeniti prioritet za vrednovanje svih mogućih dimenzija koje su postavljene u različitim izvorima (konto, artikl, skladište, dobavljač).

### Prodajne fakture
U parametrima modula, u kartici *Analitički*, postoji mogućnost definiranja prioriteta vrednovanja centara između:
    - *Tip prometa* prema kontu u kontnom planu povezanim s prihodima od nabave artikla
    - *Šifrarnik artikala* prema odabranom artiklu
    - *Šifrarnik dobavljača* prema dobavljaču na narudžbi
    - *Skladište* prema skladištu povezanim s linijom artikla
Također su prisutni sljedeći flagovi:
- *Procjena prioriteta po svakoj dimenziji*: flag je dostupan samo za poduzeća s aktiviranim *kontrolingom*. Ako **nije** prisutan, ***FluentisERP*** će primijeniti prioritet pretrage i zaustaviti vrednovanje na prvom entitetu koji
omogućuje vrednovanje centara poduzeća. **Ako je prisutan**, ***FluentisERP*** će primijeniti prioritet za vrednovanje svih mogućih [*dimenzija*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) koje su postavljene u različitim izvorima (konto, artikl, skladište, dobavljač).

U postupku ***Izrada iz otpremnice*** dostupan je u tabu Parametar flag za **Preračunavanje centara troška/profita**, koji postavlja ponovni izračun analitike prema parametrima modula odredišta.