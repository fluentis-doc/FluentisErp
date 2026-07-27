---
title: Sažeci platnih lista
sidebar_position: 2
---

Prozor **Sažeci platnih lista** sastoji se od nekoliko celina:

- **Knjiženja**: prikazuje sažetak svih sati zaposlenog, uključujući redovan rad, godišnji odmor, praznike, prekovremeni rad, službena putovanja, odsustva i ostale vrste aktivnosti.
- **Proširivi odeljak knjiženja**: prikazuje sažetak ukupnih sati po pojedinačnom kodu.
- **Vrednosti**: prikazuje sve troškove za koje zaposleni ima pravo na naknadu.
- **Proširivi odeljak Vrednosti**: prikazuje sažetak ukupnih vrednosti po pojedinačnom kodu.
- **Aktivnosti resursa**: omogućava pregled svih prijava aktivnosti unetih za zaposlenog, bez potrebe za otvaranjem drugih prozora, radi jednostavnog poređenja sa rezultatima obračuna plata.
- **Ukupno godišnji odmor – odsustva – ROL**: prikazuje obračun ukupnog broja sati godišnjeg odmora, odsustava i ROL-a za zaposlenog.

Crvenom bojom biće označeni sati koji zahtevaju pažnju korisnika, kao što su nedostajući sati, prekovremeni sati, rad praznikom i slično.

Sati i troškovi (isključivo oni označeni za refundaciju) koji se uzimaju u obzir prilikom izrade obračunskih lista preuzimaju se iz prijava aktivnosti, bez obzira na to da li su uneti direktno u oblasti **PM > Prijava aktivnosti** ili su automatski generisani iz intervencija. Zbog toga je važno da svaka prijava aktivnosti ima definisanu **kategoriju aktivnosti**.

Ako resurs obavlja aktivnosti tokom neradnih dana, na primer subotom ili nedeljom, koji nisu predviđeni njegovim definisanim radnim rasporedom, sati će automatski biti označeni kodom za obračun plate **Prekovremeni rad praznikom**.
Ako prijava aktivnosti ima uključenu oznaku **Rad na daljinu (Smart Working)** i postoji poseban kod za obračun plate, postojeći kod aktivnosti biće zamenjen kodom predviđenim za rad na daljinu.
Svi sati koji premašuju maksimalan broj sati predviđen radnim rasporedom resursa biće zasebno evidentirani odgovarajućim kodom za **Prekovremeni rad**, ako je konfigurisan.
Ako je popunjen kalendar praznika, za navedene dane na obračunskoj listi automatski će se koristiti odgovarajući kod za obračun rada praznikom.
Prioritet pri određivanju kodova za obračun plate je sledeći:

1. Ako se radi o prekovremenom radu, godišnjem odmoru, radu praznikom, službenom putovanju, radu na daljinu i slično, tražiće se odgovarajući specifični kod sa uključenom pripadajućom oznakom.
2. Ako takav specifični kod ne postoji, koristiće se kod za obračun plate definisan u kategoriji aktivnosti izabranoj na prijavi aktivnosti.
3. Ako kod nije definisan u kategoriji aktivnosti, koristiće se prvi kod za obračun plate sa uključenom oznakom **Redovan rad**.
4. Ako ne postoji kod sa uključenom oznakom **Redovan rad**, koristiće se prvi kod iz tabele **Kodovi za obračun plate**.
5. Ako nije definisan nijedan kod, prikazaće se blokirajuća poruka upozorenja.

Službena putovanja imaju posebnu logiku obrade:

**INTERVENCIJE**

- Iz intervencija: u evidentiranim troškovima prijavljeni su sati putovanja. Ako je odgovarajuće konfigurisano u tabeli [Vrste troškova](/docs/configurations/tables/general-settings/expenses-types), nakon što intervencija dobije status **Odobreno**, automatski će se generisati prijave aktivnosti za sate putovanja i izvršene usluge.
- U šifarniku resursa potrebno je konfigurisati službeno putovanje određivanjem broja sati putovanja nakon kojih se, uz redovne sate rada, ostvaruje pravo na službeno putovanje.

Ako [kod za obračun plate](/docs/configurations/tables/employee/Payroll_codes) povezan sa kategorijom aktivnosti za sate putovanja ima uključenu oznaku **Naknada putovanja**, na obračunskoj listi stavka koja se odnosi na putovanje uvek će imati količinu **1**, bez obzira na stvarni broj sati putovanja (svrha je da se označi da je službeno putovanje ostvareno, bez prikazivanja njegovog stvarnog trajanja).

Ako kod za obračun plate povezan sa kategorijom aktivnosti za sate putovanja **nema** uključenu oznaku **Naknada putovanja**, na obračunskoj listi količina stavke za putovanje odgovaraće stvarnom broju sati putovanja.

Na primer, ako je u šifarniku resursa kao prag postavljeno **2** sata putovanja, obračun službenog putovanja izvršiće se samo ako zbir sati usluge i sati putovanja premašuje redovno radno vreme za više od 2 sata.

> Primer 1:

8 redovnih sati

3 sata putovanja

--> na obračunskoj listi u stavkama će biti prikazana 2 reda:

- jedan red sa 8 sati rada
- jedan red za službeno putovanje (sa količinom = 1 ako je uključena oznaka **Naknada putovanja**, odnosno sa količinom = 3 ako oznaka **Naknada putovanja** nije uključena)

> Primer 2:

6 redovnih sati

3 sata putovanja

--> na obračunskoj listi biće prikazan samo jedan red sa 8 redovnih sati, jer je prag za obračun službenog putovanja postavljen na 2 sata putovanja **iznad** 8 redovnih sati. U ovom slučaju ukupno je evidentirano 9 sati, odnosno samo 1 sat više od redovnog radnog vremena.

Ista logika primenjuje se i kada je prijava aktivnosti ručno uneta zasebno za redovne sate i sate putovanja pomoću odgovarajućeg predloška aktivnosti.

**PRIJAVA AKTIVNOSTI**

Ako su sati putovanja prijavljeni kroz evidentirane troškove sa definisanim iznosom po satu i kod za obračun plate povezan sa tim troškom ima uključenu oznaku **Naknada putovanja**, nakon prekoračenja 8 redovnih sati (bez obzira na minimalni prag postavljen u šifarniku resursa) na obračunskoj listi biće dodat zaseban red za službeno putovanje, uvek sa količinom **1**, bez obzira na broj prijavljenih sati.

Ako kod za obračun plate povezan sa evidentiranim troškom nema uključenu oznaku **Naknada putovanja**, na obračunskoj listi biće prikazana dva zasebna reda: jedan za redovne sate, a drugi za stvarno prijavljene sate putovanja.