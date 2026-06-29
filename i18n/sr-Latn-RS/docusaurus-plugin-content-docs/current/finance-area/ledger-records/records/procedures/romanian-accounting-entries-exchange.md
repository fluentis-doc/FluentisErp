---
title: Zatvaranje kursnih razlika
sidebar_position: 2
---

Obrazac se nalazi na putanji **Administracija > Knjiženja > Procedure > Zatvaranje kursnih razlika**.
Ova procedura omogućava automatski obračun kursnih razlika na određeni datum za konta koja se vode u stranoj valuti.
Moguće je obračunati kursne razlike za:
- potraživanja i obaveze (kupci i dobavljači);
- bankovne račune.

Procedura generiše otvorene stavke i računovodstvena knjiženja za evidentiranje obračunatih kursnih razlika.

## Obračun i knjiženje kursnih razlika

Na primer, na kraju poslovne godine ili na bilo koji drugi datum potrebno je:

- odabrati valutu za koju će se izvršiti obračun putem polja **Valuta** u zaglavlju obrasca;
- u meniju sa desne strane odabrati vrstu obračuna:
  - **Stanja** – obračunava kursne razlike na saldima (na primer bankovni računi);
  - **Otvorene stavke** – obračunava kursne razlike za potraživanja i obaveze kupaca i dobavljača:
    - **Aktiva** – kupci;
    - **Pasiva** – dobavljači.

Polja **Konto/Podkonto** i **Odeljenje** predstavljaju opcione filtere kojima se može suziti pretraga.

U donjem delu obrasca potrebno je:

- uneti **datum** obračuna (na primer **31.12.GGGG**);
- program će automatski učitati odgovarajući **kurs** iz tabele **[Kursevi valuta](/docs/configurations/tables/finance/currency-exchange)**;
- kliknuti na **Traži**.

---

U centralnoj tabeli prikazuju se detalji pronađenih stavki, pri čemu su najvažnija sledeća polja:
- **Konto / Podkonto** – konto pronađen pretragom za koji se obračunava kursna razlika;
- **Iznos u valuti** – zbir dugovnih umanjen za zbir potražnih iznosa izraženih u stranoj valuti;
- **Knjiženi iznos (EUR)** – zbir dugovnih umanjen za zbir potražnih iznosa evidentiranih u evrima;
- **Trenutni iznos** – vrednost iznosa u valuti preračunata po trenutno važećem kursu prikazanom u donjem delu obrasca;
- **Kursna razlika** – pozitivna ili negativna razlika između knjiženog i preračunatog iznosa.

---

U odeljku **Parametri** definišu se konta dobiti i gubitka od kursnih razlika koja će biti korišćena prilikom knjiženja (preuzimaju se iz parametara opšteg računovodstva).

Potrebno je:
- odabrati odgovarajući **šablon knjiženja** koji će se koristiti za kreiranje knjiženja;
- kliknuti na dugme **Knjiženje**.

<details>

<summary>Dodatni detalji (kliknite za prikaz)</summary>

Opcija **Privremeno**: omogućava kreiranje knjiženja kursne razlike kao privremenog računovodstvenog knjiženja.

**Kurs**: vrednost kursa koja se koristi za obračun ažurirane vrednosti. Program ga automatski predlaže na osnovu tabele kurseva, ali ga korisnik može izmeniti.

**Datum**, **broj dokumenta** i **šablon knjiženja** odnose se na računovodstveno knjiženje koje će biti kreirano. **Uneti datum ujedno predstavlja krajnji datum do kojeg će biti obuhvaćena računovodstvena knjiženja u obračunu.**

**Konto prihoda** i **konto rashoda** koriste se za knjiženje kursnih razlika.

Na kartici **Poništavanje** moguće je pregledati i poništiti prethodno izvršena knjiženja kursnih razlika korišćenjem filtera (**Od datuma**, **Do datuma**, **Konto**).

**Poništi usklađivanje**: briše odabrana knjiženja kursnih razlika iz liste rezultata.

</details>

:::danger PAŽNJA

Prilikom kreiranja svakog **šifarnika kupca ili dobavljača**, u kontnom planu se automatski aktivira opcija **Upravljanje valutom**. Ovu opciju **ne treba deaktivirati**, jer bi to onemogućilo korišćenje ove procedure i pravilno zatvaranje salda u stranoj valuti.

Kod vođenja konta u stranoj valuti, bilo da se radi o kupcu, dobavljaču ili bankovnom računu, preporučuje se da se za svaki konto koristi **jedna referentna valuta**. Na primer, ako je konto definisan za američki dolar, sve transakcije na tom kontu treba evidentirati isključivo u dolarima.
Svaka transakcija u stranoj valuti koristi kurs važeći na datum transakcije, dok se protivvrednost automatski evidentira u valuti kompanije (na primer u evrima).
Iako je tehnički moguće na istom kontu evidentirati transakcije u različitim valutama (na primer delom u američkim dolarima, a delom u kineskim juanima), preporučuje se otvaranje posebnog konta za svaku valutu.

Takođe treba **izbegavati knjiženje transakcija u domaćoj valuti (EUR) na konto koji je namenjen za vođenje u stranoj valuti**, uključujući interna knjiženja ili knjiženja nastala putem drugih šablona, jer to može dovesti do nepravilnog rada procedure za obračun kursnih razlika.

:::