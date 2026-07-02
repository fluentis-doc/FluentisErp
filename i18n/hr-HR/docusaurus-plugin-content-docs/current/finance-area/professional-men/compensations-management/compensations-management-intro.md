---
title: Evidencija kompenzacija/naknada
sidebar_position: 1
---

### Povezani sadržaj

- **[Ukupni obračun poreza po odbitku](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**
- **[Popis plaćanja](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**
- **[Uplate poreza po odbitku](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in)**
- **[PDV sažeci](/docs/finance-area/professional-men/compensations-management/vat-summaries)**
- **[Mjesta troška / profitni centri](/docs/finance-area/professional-men/compensations-management/cost-profit-centres)**
- **[Doprinosi (INPS)](/docs/finance-area/professional-men/compensations-management/national-insurance)**

Ova forma služi za unos i izmjenu dokumenata zaprimljenih od trgovačkih predstavnika ili agenata, bilo da se radi o **privremenom obračunu** ili **konačnom računu**.

Razlika između ta dva dokumenta sastoji se isključivo u tome što se kod konačnog računa naknadno popunjavaju podaci o broju i datumu konačnog dokumenta.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

## Zaglavlje dokumenta

**Vanjski suradnik**: odabire se konto primatelja naknade. U ovom polju moguće je odabrati isključivo:

- konto agenta
- konto dobavljača kod kojeg je u matičnim podacima aktivirana opcija **Porez po odbitku**.

### Statusi dokumenta

Statusi su dostupni otvaranjem dodatnog odjeljka.

- **Knjiženo**: status se automatski postavlja tijekom postupka knjiženja naknade. Nakon knjiženja dokument više nije moguće mijenjati.
- **Porez po odbitku uplaćen**: može se postaviti ručno ili automatski putem postupka **[Uplate poreza po odbitku](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in)** koji je dostupan iz forme za pretraživanje naknada.
- **Potvrđeno**: status se automatski postavlja nakon konačnog ispisa potvrda o obračunanom porezu po odbitku.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

Ako je uz odabranog agenta ili dobavljača u matičnim podacima definiran **tip poreza po odbitku**, sustav će ga automatski predložiti prilikom unosa naknade.

**Napomena**: omogućuje unos slobodnog teksta koji će se prenijeti u napomene svih računovodstvenih knjiženja povezanih s ovom naknadom.

**Opis knjiženja**: koristi se kao opis računovodstvenog knjiženja prilikom provođenja postupka knjiženja naknade.

### Desni dio forme

**Šifra vrste isplate**: ovo se polje automatski popunjava na temelju odabranog tipa poreza po odbitku, ako je odgovarajuće polje definirano u formi **[Vrste poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types)**. Šifra predstavlja oznaku vrste isplate koja se iskazuje u obrascu **JOPPD** odnosno odgovarajućoj poreznoj prijavi za primitke.

Primjeri:

- **A** – primitci od samostalne djelatnosti
- **Q** – provizije agenta s isključivim zastupanjem
- **R** – provizije agenta s više zastupanja
- **U** – provizije posrednika

**Broj i godina naknade**: jedinstvena interna oznaka koju sustav automatski dodjeljuje za svaku naknadu unutar društva.

**Datum dokumenta**: prema zadanim postavkama predlaže se trenutni datum, ali ga je moguće promijeniti u datum zaprimljene privremene notule.

**Datum i broj konačnog dokumenta**: predstavljaju podatke konačnog računa. Oba su polja obvezna za knjiženje naknade, čak i kada se koristi računovodstveni predložak koji nije povezan s PDV-om. Nakon knjiženja plaćanja moguće je mijenjati samo ova dva podatka.

**Datum primitka**: služi za evidentiranje datuma primitka konačnog računa. Ovo polje nije obvezno za knjiženje.

**Projekt**: omogućuje povezivanje naknade s projektom. Primjerice, može se koristiti za evidentiranje troškova stručnog vještačenja na projektu. Ako računovodstveni predložak korišten za knjiženje ima aktiviranu opciju **Projekti**, svi troškovi evidentirani ovom naknadom bit će raspoređeni na odabrani projekt.

**Tečaj / Datum tečaja / Valuta**: polja su povezana s upravljanjem stranim valutama. Podaci o tečaju preuzimaju se iz tablice tečajeva, dok se valuta predlaže iz matičnih podataka agenta ili dobavljača.

## Stavke dokumenta

**Vrsta retka**: određuje način obračuna poreza po odbitku i jedan je od najvažnijih podataka dokumenta. Omogućuje automatsku primjenu poreza po odbitku na naknadu za uslugu te njegovo isključenje za iznose doprinosa odnosno mirovinskog fonda primatelja.

Dostupne su sljedeće vrste redaka:

### Trošak usluge

Koristi se za unos iznosa koji podliježe porezu po odbitku.

Sustav automatski predlaže:

- postotak porezne osnovice
- stopu poreza po odbitku
- konto troška iz matičnih podataka agenta ili dobavljača
- iznos u valuti i domaćoj valuti
- odgovarajuću PDV stopu
- postotak doprinosa odnosno mirovinskog fonda prema tipu poreza po odbitku
- razdoblje na koje se trošak odnosi.

Razdoblja se određuju prema korisničkim parametrima unosa. Nakon unosa prvog retka, svaki sljedeći redak automatski predlaže razdoblje koje slijedi prethodno unesenom.

### Doprinos / Mirovinski fond

Kod ove vrste retka sustav automatski postavlja:

- **0 %** porezne osnovice za porez po odbitku
- osnovicu za PDV izračunatu prema postotku definiranom na retku **Trošak usluge**.

### Ostalo

Koristi se za ostale iznose, primjerice refundacije troškova.

Prema zadanim postavkama iznos podliježe porezu po odbitku, ali korisnik to može promijeniti. Takvi su iznosi najčešće oslobođeni PDV-a ili nisu predmet oporezivanja.

Prilikom spremanja dokumenta sustav provjerava:

- odgovara li iznos otvorene stavke ukupnom iznosu za plaćanje
- jesu li pravilno raspoređeni troškovi po mjestima troška i profitnim centrima.

Nakon knjiženja naknade podaci više nisu izmjenjivi.

Ako su već provedena knjiženja plaćanja ili obračun doprinosa, moguće je mijenjati samo:

- broj konačnog dokumenta
- datum konačnog dokumenta
- opis knjiženja
- konto naveden u retku stavke.

Ako je dokument spremljen i sadrži broj i datum konačnog dokumenta, knjiženje se može izvršiti pomoću gumba **Knjiži i zatvori** na alatnoj traci.

Tom se prilikom otvara forma u kojoj sustav automatski predlaže posljednje raspoložive datume za PDV registar povezan s računovodstvenim predloškom odabranog tipa poreza po odbitku.

Na alatnoj traci dostupno je i nekoliko izvještaja povezanih s ovom procedurom.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)

### Posebne funkcije

> **Parametri unosa**: u korisničkim postavkama moguće je definirati hoće li se kod unosa nove naknade automatski predlagati isti konto primatelja, isti tip poreza po odbitku, način određivanja datuma dokumenta te način postavljanja razdoblja ekonomske pripadnosti. Dostupne su sljedeće opcije:
>
> - **Kraj poslovne godine** – završni datum automatski se postavlja na kraj poslovne godine.
> - **Dnevno** – završni datum jednak je početnom datumu.
> - **Bez datuma za uslužne konta** – za konta vrste **Usluga** obvezan je ručni unos početnog i završnog datuma.
> **Knjiži i zatvori**: aktivno je nakon unosa broja i datuma konačnog dokumenta te pokreće knjiženje naknade.
> **Nova stavka**: postavlja pokazivač na novi redak za unos stavke naknade.
> **Obriši stavku**: briše odabrane stavke naknade.
> **Izračunaj vrijednosti**: ponovno izračunava porez po odbitku i ostale iznose na temelju podataka unesenih u stavke dokumenta.

---

## Video upute

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>