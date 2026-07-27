---
title: Sažeci platnih lista
sidebar_position: 2
---

Prozor **Sažeci platnih lista** sastoji se od nekoliko cjelina:

- **Knjiženja**: prikazuje sažetak svih sati zaposlenika, uključujući redovni rad, godišnji odmor, blagdane, prekovremeni rad, službena putovanja, dopuste i ostale vrste aktivnosti.
- **Proširivi odjeljak knjiženja**: prikazuje sažetak ukupnih sati po pojedinom kodu.
- **Vrijednosti**: prikazuje sve troškove za koje zaposlenik ima pravo na naknadu.
- **Proširivi odjeljak Vrijednosti**: prikazuje sažetak ukupnih vrijednosti po pojedinom kodu.
- **Aktivnosti resursa**: omogućuje pregled svih prijava aktivnosti unesenih za zaposlenika, bez potrebe za otvaranjem drugih prozora, radi jednostavne usporedbe s rezultatima obračuna plaća.
- **Ukupno godišnji odmor – dopusti – ROL**: prikazuje izračun ukupnog broja sati godišnjeg odmora, dopusta i ROL-a za zaposlenika.

Crvenom bojom bit će označeni sati koji zahtijevaju pažnju korisnika, poput nedostajućih sati, prekovremenih sati, rada blagdanom i slično.

Sati i troškovi (isključivo oni označeni za refundaciju) koji se uzimaju u obzir prilikom izrade obračunskih lista preuzimaju se iz prijava aktivnosti, neovisno o tome jesu li uneseni izravno u području **PM > Prijava aktivnosti** ili su automatski generirani iz intervencija. Stoga je važno da svaka prijava aktivnosti ima definiranu **kategoriju aktivnosti**.

Ako resurs obavlja aktivnosti tijekom neradnih dana, primjerice subotom ili nedjeljom, koji nisu predviđeni njegovim definiranim radnim rasporedom, sati će automatski biti označeni kodom za obračun plaće **Prekovremeni rad blagdanom**.

Ako prijava aktivnosti ima uključenu oznaku **Rad na daljinu (Smart Working)** te postoji poseban kod za obračun plaće, postojeći kod aktivnosti bit će zamijenjen kodom predviđenim za rad na daljinu.

Svi sati koji premašuju maksimalan broj sati predviđen radnim rasporedom resursa bit će zasebno evidentirani odgovarajućim kodom za **Prekovremeni rad**, ako je konfiguriran.

Ako je popunjen kalendar blagdana, za navedene dane na obračunskoj će se listi automatski koristiti odgovarajući kod za obračun rada blagdanom.

Prioritet pri određivanju kodova za obračun plaće je sljedeći:

1. Ako se radi o prekovremenom radu, godišnjem odmoru, radu blagdanom, službenom putovanju, radu na daljinu i slično, tražit će se odgovarajući specifični kod s uključenom pripadajućom oznakom.
2. Ako takav specifični kod ne postoji, koristit će se kod za obračun plaće definiran u kategoriji aktivnosti odabranoj na prijavi aktivnosti.
3. Ako kod nije definiran u kategoriji aktivnosti, koristit će se prvi kod za obračun plaće s uključenom oznakom **Redovni rad**.
4. Ako ne postoji kod s uključenom oznakom **Redovni rad**, koristit će se prvi kod iz tablice **Kodovi za obračun plaće**.
5. Ako nije definiran nijedan kod, prikazat će se blokirajuća poruka upozorenja.

Službena putovanja imaju posebnu logiku obrade:

**INTERVENCIJE**

- Iz intervencija: u evidentiranim troškovima prijavljeni su sati putovanja. Ako je odgovarajuće konfigurirano u tablici [Vrste troškova](/docs/configurations/tables/general-settings/expenses-types), nakon što intervencija dobije status **Odobreno**, automatski će se generirati prijave aktivnosti za sate putovanja i izvršene usluge.
- U šifarniku resursa potrebno je konfigurirati službeno putovanje određivanjem broja sati putovanja nakon kojih se, uz redovne sate rada, ostvaruje pravo na službeno putovanje.

Ako [kod za obračun plaće](/docs/configurations/tables/employee/Payroll_codes) povezan s kategorijom aktivnosti za sate putovanja ima uključenu oznaku **Naknada putovanja**, na obračunskoj listi stavka koja se odnosi na putovanje uvijek će imati količinu **1**, neovisno o stvarnom broju sati putovanja (svrha je označiti da je službeno putovanje ostvareno, bez prikazivanja njegovog stvarnog trajanja).

Ako kod za obračun plaće povezan s kategorijom aktivnosti za sate putovanja **nema** uključenu oznaku **Naknada putovanja**, na obračunskoj listi količina stavke za putovanje odgovarat će stvarnom broju sati putovanja.

Primjerice, ako je u šifarniku resursa kao prag postavljeno **2** sata putovanja, obračun službenog putovanja izvršit će se samo ako zbroj sati usluge i sati putovanja premašuje redovno radno vrijeme za više od 2 sata.

> Primjer 1:

8 redovnih sati

3 sata putovanja

--> na obračunskoj listi u stavkama će biti prikazana 2 retka:

- jedan redak s 8 sati rada
- jedan redak za službeno putovanje (s količinom = 1 ako je uključena oznaka **Naknada putovanja**, odnosno s količinom = 3 ako oznaka **Naknada putovanja** nije uključena)

> Primjer 2:

6 redovnih sati

3 sata putovanja

--> na obračunskoj listi bit će prikazan samo jedan redak s 8 redovnih sati, jer je prag za obračun službenog putovanja postavljen na 2 sata putovanja **iznad** 8 redovnih sati. U ovom slučaju ukupno je evidentirano 9 sati, odnosno samo 1 sat više od redovnog radnog vremena.

Ista logika primjenjuje se i kada je prijava aktivnosti ručno unesena zasebno za redovne sate i sate putovanja pomoću odgovarajućeg predloška aktivnosti.

**PRIJAVA AKTIVNOSTI**

Ako su sati putovanja prijavljeni kroz evidentirane troškove s definiranim iznosom po satu te kod za obračun plaće povezan s tim troškom ima uključenu oznaku **Naknada putovanja**, nakon prekoračenja 8 redovnih sati (neovisno o minimalnom pragu postavljenom u šifarniku resursa) na obračunskoj će se listi biti dodan zaseban redak za službeno putovanje, uvijek s količinom **1**, bez obzira na broj prijavljenih sati.

Ako kod za obračun plaće povezan s evidentiranim troškom nema uključenu oznaku **Naknada putovanja**, na obračunskoj će se listi biti prikazana dva zasebna retka: jedan za redovne sate, a drugi za stvarno prijavljene sate putovanja.