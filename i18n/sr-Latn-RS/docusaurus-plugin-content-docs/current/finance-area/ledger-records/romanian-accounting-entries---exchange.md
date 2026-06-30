---
title: Zatvaranje kursnih razlika
sidebar_position: 2
---

Ovaj obrazac omogućava automatski obračun kursnih razlika na određeni datum za konta u stranoj valuti (na primer potraživanja, obaveze ili bankovne račune) i generisanje odgovarajućih računovodstvenih knjiženja.

**Najpre je potrebno odabrati valutu** (jednu po jednu) za koju će se vršiti obračun, kao i (pomoću menija sa desne strane) vrstu obračuna:

- Raspoloživost: uzima u obzir stanja (npr. banka)
- Dospeća plaćanja: obrađuje dugovanja i potraživanja kupaca i dobavljača
    - Aktivno: kupci
    - Pasiva: dobavljači

Konto/podkonto i odeljenje predstavljaju opcione filtere za sužavanje pretrage.

---

U centralnom pregledu prikazuju se detalji pronađenih stavki, iznos izražen u stranoj valuti, istorijska vrednost u evrima – izračunata kao algebarski zbir svih prometa, trenutna vrednost preračunata prema prikazanom kursu, kao i pozitivna ili negativna kursna razlika.

---

U odeljku *Parametri* definišu se parametri koji će se koristiti prilikom knjiženja:

**Privremeno**: omogućava generisanje kursne razlike kao privremenog računovodstvenog zapisa.

**Kurs**: vrednost kursa prema kojoj se izračunava ažurirana vrednost. Program ga automatski predlaže (iz kursne liste), ali ga korisnik može promeniti.

**Datum**, **Broj dokumenta** i **Računovodstveni šablon** odnose se na računovodstveno knjiženje koje će biti kreirano. **Uneti datum ujedno predstavlja krajnji datum do kojeg će biti obuhvaćena računovodstvena knjiženja.**

**Konto prihoda** i **konto rashoda**: koriste se za evidentiranje kursnih razlika.

---

Na kartici *Poništavanje knjiženja korekcije kursnih razlika* moguće je pregledati i poništiti prethodno izvršena knjiženja na osnovu postavljenih filtera (Od datuma/Do datuma, konto).

| Funkcija | Značenje |
| --- | --- |
| Traži | Pokreće pretragu konta koja treba uskladiti na osnovu postavljenih filtera. |
| Knjiženje | Izvršava knjiženje za zapise koji odgovaraju postavljenim filterima i parametrima. |
| Poništi usklađenje | Briše knjiženja izabrana u pregledu rezultata. |