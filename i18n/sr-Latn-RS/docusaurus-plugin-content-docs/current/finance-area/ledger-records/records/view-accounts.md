---
title: Prikaz konta
sidebar_position: 2
---

Ovaj obrazac omogućava pregled računovodstvenih zapisa za bilo koje konto ili podkonto, bez obzira na njegovu vrstu (aktiva, pasiva, troškovi, prihodi ili analitički konto). Dostupan je pregled svih knjiženja za sve računovodstvene godine. U zavisnosti od zatvaranja obračunskog perioda nakon obaveznih poreskih izveštaja ili izvršenog zatvaranja konta, zapise je moguće i menjati.

## Zaglavlje

U gornjem delu obrasca obavezno je uneti šifru konta ili direktno podkonta, dok su ostali filteri opcionog karaktera.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image01.png)

## Prikaz podataka

Podrazumevano se podaci prikazuju sortirani opadajuće prema datumu knjiženja (redosled sortiranja može se promeniti) i prikazuju promet u skladu sa postavljenim filterima.

Sa podrazumevanim podešavanjima podaci se obrađuju na sledeći način:

- ako je postavljen filter **Od datuma knjiženja** na 01/01/yyyy, u poljima **Prethodno stanje** biće prikazan zbir dugovne i potražne strane za sva knjiženja pre tog datuma;

- u tabeli prometa knjiženja će biti prikazana od najnovijih ka najstarijima;

- polje **Progresivno** će u poslednjem redu prikazati iznos iz polja **Prethodno stanje**, uvećan ili umanjen za vrednost tog reda, a zatim će se vrednost ažurirati red po red, odozdo nagore.

:::note[NAPOMENA]
Polje **Progresivno** vidljivo je samo ako je zadržan podrazumevani redosled prikaza u obrascu. Ako se promeni način sortiranja, polje se više neće prikazivati. Da bi se ponovo pojavilo, potrebno je zatvoriti i ponovo otvoriti obrazac, a zatim ponoviti pretragu.
:::

## Ukupni iznosi na dnu obrasca

**Saldo selekcije**: zbir dugovnih i potražnih iznosa označenih redova u tabeli. Ako označite sve redove (Ctrl+A), ova vrednost odgovaraće polju **Tekuće stanje**.

**Tekuće stanje**: zbir dugovnih i potražnih iznosa svih prikazanih redova, bez obzira na trenutnu selekciju.

**Ukupno**: zbir prethodnog stanja i tekućeg stanja.

**Saldo**: konačno dugovno ili potražno stanje, koje uvek odgovara progresivnom saldu prikazanom u prvom redu tabele.

:::tip[Kako tumačiti ukupne iznose]

Prethodno dugovno/potražno stanje (za period pre primenjenog filtera, počev od poslednjeg ponovnog otvaranja konta) + Tekuće stanje = Ukupno, pri čemu su u sva tri bloka (**Prethodno stanje**, **Tekuće stanje** i **Ukupno**) uvek prikazane obe kolone: **Duguje** i **Potražuje**.

Prethodno stanje + Tekuće stanje (izraženi kao razlika između dugovne i potražne strane) = **Saldo** (trenutno stanje).

Tekuće stanje prikazuje se u obe kolone (**Duguje** i **Potražuje**) kako bi se jasno prikazao način izračunavanja polja **Ukupno**, koje nastaje sabiranjem odgovarajućih iznosa iz kolona **Prethodno dugovno stanje** i **Prethodno potražno stanje** sa pripadajućim iznosima **Tekućeg stanja**.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image04.png)

:::

U tabeli su prikazana dva podkonta:

- **Podkonto zaglavlja**, koji se preuzima iz podkonta nosioca računovodstvenog knjiženja iz kojeg potiče pojedinačno knjiženje.
- **Podkonto detalja**, koji predstavlja podkonto za koji se stvarno pretražuju knjiženja.

Na primer, ako se pregledaju knjiženja opšteg konta troškova, u koloni **Podkonto zaglavlja** biće prikazane šifre dobavljača čije su fakture knjižene na taj konto troška, dok će u koloni **Podkonto detalja** biti prikazana pojedinačna podkonta troškova na koja su ti iznosi evidentirani.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image02.png)

Takođe je moguće proširiti red klikom na znak **+** sa leve strane kako bi se prikazalo kompletno računovodstveno knjiženje.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image03.png)

## Dodatne operacije u prikazu podataka

- **Dvoklik na prikazani red**: ako korisnik ima odgovarajuća prava, otvara se obrazac za izmenu pripadajućeg računovodstvenog zapisa.

- **Dugme Izmeni** na traci sa alatkama: ima isti efekat kao dvoklik na izabrani red.

- **Dugme Izvorni dokument**, kada je aktivno: otvara pregled ulazne ili izlazne fakture iz koje je nastao izabrani računovodstveni zapis, pod uslovom da korisnik ima odgovarajuća prava.

## Područje filtera

Područje filtera namenjeno je definisanju uslova za pretragu računovodstvenih zapisa. Filteri se primenjuju logikom **AND**, što znači da svi zadati kriterijumi moraju biti istovremeno ispunjeni. Moguće je kombinovati više filtera radi preciznijeg izdvajanja podataka.

## Prikaz rezultata

Prikaz rezultata sadrži listu računovodstvenih zapisa koji zadovoljavaju zadate kriterijume pretrage. Nakon definisanja filtera, potrebno je kliknuti na dugme **Traži** na traci sa alatkama kako bi se prikazali odgovarajući rezultati.

:::important Pogledajte takođe
[**VIDEO TUTORIJALI O RAČUNOVODSTVENIM ZAPISIMA**](/docs/video/finance/intro)
:::