---
title: Početne i periodične procene
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvalitet > Kvalifikacija dobavljača > Početne i periodične procene**.

:::important Čemu služi
*Početne i periodične procene* predstavljaju jedan od dostupnih metoda evaluacije dobavljača.

Ova subjektivna metoda je ručna i najčešće se koristi za početnu kvalifikaciju dobavljača, kao i za periodične naknadne procene.

Upravljanje omogućava unos novih *Početnih i periodičnih procena* ili pretragu postojećih radi pregleda, izmene ili brisanja.
:::

## Dugmad za upravljanje

### ![](/img/neutral/common/search.png) Pretraga početnih i periodičnih procena

Forma se sastoji od dela za filtriranje i dela sa rezultatima.

Nakon podešavanja željenih filtera potrebno je kliknuti na dugme **Traži** kako bi se podaci prikazali u tabeli rezultata.

### ![](/img/neutral/common/new.png) Unos početnih i periodičnih procena

Za unos nove *Početne i periodične procene* potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za kreiranje novog zapisa obavezno je uneti sledeća polja:

- **Datum procene**
- **Dobavljač**
- **Vrsta procene**

### ![](/img/neutral/common/select-all.png) Poveži kontrolnu listu

Ovo dugme je omogućeno samo kada je izabrana jedna *Početna i periodična procena* i kada izabrani *Dobavljač* još nije evaluiran.

Prikazuje se pomoćna lista *Kontrolnih lista* iz koje je moguće odabrati samo jednu stavku.

Ako je za zapis već povezana *Kontrolna lista*, sistem će postaviti pitanje da li želite da zamenite postojeću listu i pripadajuća *Pitanja* novoizabranom *Kontrolnom listom*.

## Podaci kojima se upravlja

### Početne i periodične procene

Ova lista sadrži osnovne informacije o *Početnoj i periodičnoj proceni*.

Podaci kojima se upravlja su:

> **Datum procene**: (obavezno polje) datum kada je evaluacija izvršena.
>
> Prilikom kreiranja nove procene automatski se predlaže tekući datum.
>
> **Dobavljač**: (obavezno polje) naziv kompanije *Dobavljača* koji se ocenjuje.
>
> **Vrsta procene**: (obavezno polje) šifra *Vrste procene*.
>
> Prilikom kreiranja nove procene predlaže se *Vrsta procene* definisana u *Parametrima kvalifikacije dobavljača*.
>
> **Kontrolna lista (Check-list)**: šifra povezane *Kontrolne liste*.
>
> Nakon izbora *Dobavljača*, automatski se predlaže *Kontrolna lista* definisana u njegovim *Računovodstvenim podacima > Podaci o kvalitetu*, zajedno sa povezanim *Pitanjima*.
>
> Izmena *Kontrolne liste* zamenjuje postojeće *Opise/Pitanja* nakon potvrde korisnika.
>
> **Inspektor**: šifra *Inspektora* koji vrši procenu.
>
> **Razlog procene**: slobodne beleške koje opisuju razlog sprovođenja evaluacije.
>
> **Procena**: *Ocena* koju je *Inspektor* dodelio *Dobavljaču*.
>
> Polje se prikazuje bojama pozadine i teksta definisanim u tabeli *Ocene dobavljača*.
>
> Ako je izabrana *Ocena* povezana sa opcijom *Automatska suspenzija*, ocenjeni *Dobavljač* biće automatski označen kao *Suspendovan* počev od *Datuma procene*.
>
> Suspenziju mora ručno ukloniti odgovorna *Funkcija kompanije*.
>
> Nakon dodele *Ocene*, polja *Datum procene*, *Dobavljač* i *Vrsta procene* više nije moguće menjati.
>
> **Opis vrste procene**: opis *Vrste procene*.
>
> **Opis kontrolne liste**: opis povezane *Kontrolne liste*.
>
> **Opis inspektora**: opis izabranog *Inspektora*.
>
> **Napomene**: slobodne beleške.

### Opisi/Pitanja

Ova lista sadrži pitanja i aktivnosti koje se koriste tokom evaluacije dobavljača.

Podaci kojima se upravlja su:

> **Redosled**: redosled izvršavanja *Pitanja/Aktivnosti*.
>
> **Opis/Pitanje**: slobodan tekst pitanja ili aktivnosti.
>
> **Odgovor**: slobodan tekst odgovora.
>
> **Kategorija**: *Kategorija* povezana sa *Opisom/Pitanjem* ukoliko je preuzeto iz *Kontrolne liste*.
>
> **Očekivana procena**: minimalni zahtevani *Nivo procene*.
>
> **Težina (%)**: procenat važnosti povezan sa *Opisom/Pitanjem* ukoliko je preuzeto iz *Kontrolne liste*.
>
> **Evidentirana procena**: procenjeni *Nivo procene*.
>
> Tekst se prikazuje crvenom bojom ukoliko je evidentirana procena niža od očekivane procene.
>
> **Ocena težine**: ocena koju sistem automatski izračunava na osnovu *Nivoa evidentirane procene* i definisane *Težine (%)*.
>
> Formula za obračun:
>
> `Ocena težine = Nivo evidentirane procene / 100 × Težina (%)`
>
> **Napomene**: slobodne beleške.

:::tip Metoda izračunavanja ocene težine

Za svaki *Opis/Pitanje* za koji su unete vrednosti *Težina (%)* i *Evidentirana procena*, primenjuje se sledeća formula:

- **Ocena težine** = **Nivo evidentirane procene** / **100** × **Težina (%)**
- Primer: **15 / 100 × 20 = 3**

:::

### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *Početne i periodične procene*.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).