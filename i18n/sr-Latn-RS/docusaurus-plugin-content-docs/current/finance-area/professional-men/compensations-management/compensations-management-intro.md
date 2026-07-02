---
title: Evidencija kompenzacija/naknada
sidebar_position: 1
---

### Povezani sadržaj

- **[Ukupan obračun poreza po odbitku](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**
- **[Lista plaćanja](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**
- **[Uplate poreza po odbitku](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in)**
- **[PDV pregledi](/docs/finance-area/professional-men/compensations-management/vat-summaries)**
- **[Mesta troška / profitni centri](/docs/finance-area/professional-men/compensations-management/cost-profit-centres)**
- **[Doprinosi (INPS)](/docs/finance-area/professional-men/compensations-management/national-insurance)**

Ova forma služi za unos i izmenu dokumenata primljenih od trgovačkih predstavnika ili agenata, bilo da se radi o **privremenom obračunu** ili **konačnom računu**.

Razlika između ova dva dokumenta sastoji se isključivo u tome što se kod konačnog računa naknadno popunjavaju podaci o broju i datumu konačnog dokumenta.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

## Zaglavlje dokumenta

**Spoljni saradnik**: bira se konto primaoca naknade. U ovom polju moguće je odabrati isključivo:

- konto agenta
- konto dobavljača kod kojeg je u matičnim podacima aktivirana opcija **Porez po odbitku**.

### Statusi dokumenta

Statusi su dostupni otvaranjem dodatne sekcije.

- **Proknjiženo**: status se automatski postavlja tokom postupka knjiženja naknade. Nakon knjiženja dokument više nije moguće menjati.
- **Porez po odbitku uplaćen**: može se postaviti ručno ili automatski putem postupka **[Uplate poreza po odbitku](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in)** koji je dostupan iz forme za pretragu naknada.
- **Potvrđeno**: status se automatski postavlja nakon konačne štampe potvrda o obračunatom porezu po odbitku.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

Ako je za izabranog agenta ili dobavljača u matičnim podacima definisan **tip poreza po odbitku**, sistem će ga automatski predložiti prilikom unosa naknade.

**Napomena**: omogućava unos slobodnog teksta koji će biti prenet u napomene svih računovodstvenih knjiženja povezanih sa ovom naknadom.

**Opis knjiženja**: koristi se kao opis računovodstvenog knjiženja prilikom izvršavanja postupka knjiženja naknade.

### Desni deo forme

**Šifra vrste isplate**: ovo polje se automatski popunjava na osnovu izabranog tipa poreza po odbitku, ukoliko je odgovarajuće polje definisano u formi **[Vrste poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types)**. Šifra predstavlja oznaku vrste isplate koja se iskazuje u obrascu **JOPPD**, odnosno odgovarajućoj poreskoj prijavi za primanja.

Primeri:

- **A** – primanja od samostalne delatnosti
- **Q** – provizije agenta sa isključivim zastupanjem
- **R** – provizije agenta sa višestrukim zastupanjem
- **U** – provizije posrednika

**Broj i godina naknade**: jedinstvena interna oznaka koju sistem automatski dodeljuje za svaku naknadu unutar preduzeća.

**Datum dokumenta**: podrazumevano se predlaže trenutni datum, ali ga je moguće promeniti u datum prijema privremene notule.

**Datum i broj konačnog dokumenta**: predstavljaju podatke konačnog računa. Oba polja su obavezna za knjiženje naknade, čak i kada se koristi računovodstveni obrazac koji nije povezan sa PDV-om. Nakon knjiženja plaćanja moguće je menjati samo ova dva podatka.

**Datum prijema**: služi za evidentiranje datuma prijema konačnog računa. Ovo polje nije obavezno za knjiženje.

**Projekat**: omogućava povezivanje naknade sa projektom. Na primer, može se koristiti za evidentiranje troškova stručnog veštačenja na projektu. Ako računovodstveni obrazac korišćen za knjiženje ima aktiviranu opciju **Projekti**, svi troškovi evidentirani ovom naknadom biće raspoređeni na izabrani projekat.

**Kurs / Datum kursa / Valuta**: polja su povezana sa upravljanjem stranim valutama. Podaci o kursu preuzimaju se iz tabele kurseva, dok se valuta predlaže iz matičnih podataka agenta ili dobavljača.

## Stavke dokumenta

**Vrsta reda**: određuje način obračuna poreza po odbitku i predstavlja jedan od najvažnijih podataka dokumenta. Omogućava automatsku primenu poreza po odbitku na naknadu za uslugu, kao i njegovo isključenje za iznose doprinosa, odnosno penzionog fonda primaoca.

Dostupne su sledeće vrste redova:

### Trošak usluge

Koristi se za unos iznosa koji podleže porezu po odbitku.

Sistem automatski predlaže:

- procenat poreske osnovice
- stopu poreza po odbitku
- konto troška iz matičnih podataka agenta ili dobavljača
- iznos u valuti i domaćoj valuti
- odgovarajuću PDV stopu
- procenat doprinosa, odnosno penzionog fonda prema tipu poreza po odbitku
- period na koji se trošak odnosi.

Periodi se određuju prema korisničkim parametrima unosa. Nakon unosa prvog reda, svaki sledeći red automatski predlaže period koji se nastavlja na prethodno uneti.

### Doprinos / Penzioni fond

Kod ove vrste reda sistem automatski postavlja:

- **0 %** poreske osnovice za porez po odbitku
- osnovicu za PDV izračunatu prema procentu definisanom na redu **Trošak usluge**.

### Ostalo

Koristi se za ostale iznose, na primer refundacije troškova.

Podrazumevano, iznos podleže porezu po odbitku, ali korisnik to može promeniti. Ovakvi iznosi su najčešće oslobođeni PDV-a ili nisu predmet oporezivanja.

Prilikom čuvanja dokumenta sistem proverava:

- da li iznos otvorene stavke odgovara ukupnom iznosu za plaćanje
- da li su troškovi pravilno raspoređeni po mestima troška i profitnim centrima.

Nakon knjiženja naknade podaci više nisu izmenjivi.

Ako su već izvršena knjiženja plaćanja ili obračun doprinosa, moguće je menjati samo:

- broj konačnog dokumenta
- datum konačnog dokumenta
- opis knjiženja
- konto naveden u redu stavke.

Ako je dokument sačuvan i sadrži broj i datum konačnog dokumenta, knjiženje se može izvršiti pomoću dugmeta **Knjiži i zatvori** na traci sa alatkama.

Tom prilikom otvara se forma u kojoj sistem automatski predlaže poslednje raspoložive datume za PDV registar povezan sa računovodstvenim obrascem izabranog tipa poreza po odbitku.

Na traci sa alatkama dostupno je i nekoliko izveštaja povezanih sa ovom procedurom.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)

### Posebne funkcije

> **Parametri unosa**: u korisničkim podešavanjima moguće je definisati da li će se prilikom unosa nove naknade automatski predlagati isti konto primaoca, isti tip poreza po odbitku, način određivanja datuma dokumenta i način postavljanja perioda ekonomske pripadnosti. Dostupne su sledeće opcije:
>
> - **Kraj poslovne godine** – završni datum se automatski postavlja na kraj poslovne godine.
> - **Dnevno** – završni datum jednak je početnom datumu.
> - **Bez datuma za uslužna konta** – za konta tipa **Usluga** obavezan je ručni unos početnog i završnog datuma.
>
> **Knjiži i zatvori**: aktivno je nakon unosa broja i datuma konačnog dokumenta i pokreće knjiženje naknade.
>
> **Nova stavka**: postavlja pokazivač na novi red za unos stavke naknade.
>
> **Obriši stavku**: briše izabrane stavke naknade.
>
> **Izračunaj vrednosti**: ponovo izračunava porez po odbitku i ostale iznose na osnovu podataka unetih u stavke dokumenta.

---

## Video uputstva

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>