---
title: Konto kartica
sidebar_position: 3
---

Ovo je osnovni izveštaj za pregled detalja računovodstvenih knjiženja svakog podkonta, bez obzira na njegovu vrstu (aktiva, pasiva, rashod ili prihod). Za svaki podkonto generiše se zaseban list izveštaja.

Ovaj izveštaj odgovara onome što se u računovodstvenoj praksi naziva **glavna knjiga**.

## GLAVNI FILTERI

- Podaci o knjiženju

  - **Konto**: referentni podkonto (npr. za pregled prometa i salda određenog dobavljača u izabranom periodu ili za pregled prihoda evidentiranih na određenom kontu kontnog plana);
  - Datum knjiženja;
  - Datum **obračuna**;
  - Broj knjiženja;
  - Vrsta / datum / broj dokumenta, ukoliko postoji. Datum i broj dokumenta mogu izostati kod naloga glavne knjige;
  - Tip konta.

- PDV podaci

  - Registar;
  - Protokol (otvoriti proširivi meni).

- Vrsta knjiženja (privremeno i/ili konačno).

## OSTALE KARAKTERISTIKE IZVEŠTAJA

- Filteri **Agent** i **Banka**: omogućavaju, na primer, prikaz konto kartica svih kupaca dodeljenih određenom agentu ili svih dobavljača plaćenih preko određenog bankovnog računa.

- Filter **Projekti**: omogućava filtriranje podkonta povezanih sa određenim projektom.

- **Prikaži iznose u valuti**: kada je opcija uključena, prikazuju se i iznosi u originalnoj valuti (uz iznose u evrima, bez grupisanja). Ako opcija nije uključena, prikazuju se samo dugovna i potražna knjiženja u valuti preduzeća.

- **Prikaži povezana knjiženja**: kada je opcija uključena, prikazuju se i povezana knjiženja koja se odnose na promet izabranog podkonta (horizontalni A4 format).

- **Broj redova**: ovo polje postaje aktivno kada je uključena prethodna opcija i određuje koliko će redova protivstavki iz odeljka **[Knjiženje glavne knjige](/docs/finance-area/ledger-records/records/ledger-record)** biti prikazano na konto kartici. Na primer, ukoliko jedno knjiženje sadrži više konta prihoda, vrednost se može povećati kako bi bile prikazane sve protivstavke.

- **Napomena**: omogućava unos proizvoljnog teksta koji će biti prikazan samo na ovom ispisu. Polje se automatski briše zatvaranjem obrasca.

### Pregled knjiženja po valuti

- **Prikaži konto karticu u valuti**: aktiviranjem ove opcije omogućava se izbor valute, automatski se isključuje opcija **Prikaži iznose u valuti**, a knjiženja se grupišu po izabranoj valuti uz prikaz ukupnih iznosa.

- **Valuta**: omogućava izbor referentne valute. Prikazaće se samo knjiženja evidentirana u izabranoj valuti za odabrani podkonto.

Knjiženja je moguće sortirati prema **datumu knjiženja** ili prema **datumu obračuna**. Ova opcija je posebno korisna kada se zatvaranje i ponovno otvaranje konta evidentiraju sa različitim datumima knjiženja, kako bi saldo bio pravilno prikazan.

### Poslednji datum otvaranja konta

Za razliku od **[Pregleda konta](/docs/finance-area/ledger-records/records/view-accounts)**, gde su sva knjiženja podkonta uvek dostupna, kod štampanog izveštaja broj obrađenih zapisa ograničava se radi boljih performansi.

Zbog toga aplikacija za početno stanje koristi **poslednji datum otvaranja konta**, koji se automatski predlaže kao poslednji datum pre početka izabranog perioda.

**Primer:**

Ako korisnik postavi period od **01.09.2017. do 31.12.2017.** (za datum knjiženja i datum obračuna), a poslednji datum otvaranja konta bude **01.01.2017.**, izveštaj će sadržati:

- početno stanje obračunato za period od **01.01.2017. do 31.08.2017.**;
- detaljna knjiženja za period **01.09.2017. – 31.12.2017.**.

Ako korisnik obriše poslednji datum otvaranja konta, rezultat će biti identičan prikazu u obrascu **Pregled konta**.

### Više podataka na jednoj stranici

Ova opcija generiše sažeti izveštaj u kojem se svi podkonti prikazuju uzastopno, bez preloma stranica. Preporučuje se za štampanje glavne knjige koja se prilaže završnim godišnjim izveštajima.

| Funkcija | Značenje |
| --- | --- |
| Pregled | Otvara pregled štampe konto kartice. |
| Štampaj | Štampa konto karticu. |

:::important VIDI TAKOĐE
[**VIDEO TUTORIJALI ZA RAČUNOVODSTVENE IZVEŠTAJE**](/docs/video/finance/intro)
:::