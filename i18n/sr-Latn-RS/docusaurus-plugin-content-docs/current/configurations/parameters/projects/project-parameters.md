---
title: Parametri projekata
sidebar_position: 1
---

## Opšte

Ovi parametri koriste se kao podrazumevane vrednosti ako za klijenta ili vrstu dokumenta nisu definisane unapred podešene konfiguracije.

**Podrazumevana merna jedinica za uslugu**: podrazumevana merna jedinica koja se uzima u obzir za usluge u intervencijama.

**Merna jedinica sati**: merna jedinica koja označava sate u oblasti projekata. U slučaju konverzije između mernih jedinica biće jasno da li se količina odnosi na radne sate.

**Merna jedinica dana**: merna jedinica koja označava dane u oblasti projekata. U slučaju konverzije između mernih jedinica biće jasno da li se količina odnosi na radne dane.

**Dnevni broj sati**: označava standardno trajanje radnog dana u preduzeću. Može se konfigurisati u tabeli [Radno vreme](/docs/configurations/tables/employee/working-hours).

**Artikal**: artikal koji se podrazumevano koristi u dokumentima ako nisu definisana druga podešavanja.

**Radna smena**: označava glavnu radnu smenu u preduzeću. Vrednosti se mogu konfigurisati za svaki dan u nedelji u tabeli [Radna smena](/docs/configurations/tables/employee/working-hours). Ukupan broj sati u danu uzima se u obzir pri konverziji sati u dane i obrnuto. Ako, na primer, preduzeće predviđa 7 radnih sati dnevno, tada 1 dan odgovara 7 sati, a ta osnova koristi se za konverzije, na primer, u uslugama intervencije.

**Vrsta aktivnosti**: podrazumevana vrsta aktivnosti koja se koristi, na primer, pri automatskom kreiranju aktivnosti iz intervencije.

**Vrsta aktivnosti za zahtev za godišnji odmor/odsustvo**: vrsta aktivnosti koja se koristi pri potvrđivanju perioda godišnjeg odmora radi generisanja odgovarajućih prijava aktivnosti za resurs.

**Podrazumevana vrsta sprinta**: vrsta sprinta koja se koristi kao podrazumevana ako nije navedena za vrstu dokumenta.

**Podrazumevani trošak materijala projekta**: moguće je izabrati jednu od sledećih vrednosti: Bez troška, Poslednji trošak, Prosečni trošak ili Standardni trošak. Izabrano podešavanje koristi se kao osnovno pravilo za određivanje troška artikla unetog na kartici *Materijali* projekta.

**Podrazumevana vrsta planirane intervencije**: vrsta planirane intervencije koja se koristi kao podrazumevana, na primer pri kreiranju novih planiranih intervencija direktno iz WBS-a radi dodele resursa.

**Podrazumevana vrsta zahteva za intervenciju**: vrsta zahteva za intervenciju koja se koristi kao podrazumevana, na primer pri kreiranju novih zahteva za intervenciju direktno iz WBS-a radi dodele resursa.

**Radna smena**: označava određenu radnu smenu definisanu u tabeli **Radne smene**.

## Intervencije

**Vrsta interne intervencije**: vrsta intervencije koja je definisana kao interna intervencija.

**Vrsta eksterne intervencije**: vrsta intervencije koja je definisana kao eksterna intervencija.

**Podrazumevana vrsta intervencije**: vrsta intervencije koja se koristi kao podrazumevana, na primer pri automatskom generisanju intervencije iz aktivnosti označenih kao naplative.

**Podrazumevani zaposleni**: zaposleni koji se koristi kao podrazumevana vrednost ako nije navedena druga vrednost.

**Artikal za stavke van radnog vremena u planu fakturisanja**: artikal koji se podrazumevano koristi za unos stavki koje su u obračunima plana fakturisanja intervencije utvrđene kao stavke van radnog vremena.

**Artikal za storniranje računa avansa**: artikal koji se podrazumevano koristi za unos stavki za storniranje računa avansa u račun generisan na osnovu vrednovanja intervencija.

**Opis stavke za storniranje računa avansa**: opis koji se podrazumevano koristi za unos stavki za storniranje računa avansa u račun generisan na osnovu vrednovanja intervencija.

**Predlaganje računa avansa u uslugama**: ako je opcija omogućena, pri svakom čuvanju intervencije proverava se da li postoji račun avansa povezan sa projektom navedenim u dokumentu. Ako je preostali iznos računa avansa dovoljan da pokrije uslugu, račun će se automatski povezati sa redom usluge intervencije u odgovarajućem polju.

**Predlaganje računa avansa u materijalima**: ako je opcija omogućena, pri svakom čuvanju intervencije proverava se da li postoji račun avansa povezan sa projektom navedenim u dokumentu. Ako je preostali iznos računa avansa dovoljan da pokrije vrednost materijala, račun će se automatski povezati sa redom materijala intervencije u odgovarajućem polju.

**Predlaganje računa avansa u putnim troškovima**: ako je opcija omogućena, pri svakom čuvanju intervencije proverava se da li postoji račun avansa povezan sa projektom navedenim u dokumentu. Ako je preostali iznos računa avansa dovoljan da pokrije putni trošak, račun će se automatski povezati sa redom putnog troška intervencije u odgovarajućem polju.

### Podešavanja vrednovanja intervencija

**Upotreba referenci intervencije**: ako je opcija omogućena, u račun generisan na osnovu vrednovanja intervencija, pre reda intervencije umeće se opisni red koji sadrži opis koji je konfigurisao korisnik.

**Dodavanje datuma intervencije u red usluge**: ako je opcija omogućena, datum usluge umeće se u polje opisa reda koji se odnosi na uslugu.

**Predlaganje opisa šifre artikla**: ako je opcija omogućena, opis šifre artikla umeće se u polje opisa usluge.

**Grupisanje prema projektu**: ako je opcija omogućena, u računu generisanom na osnovu vrednovanja intervencija stavke se grupišu prema zaglavlju projekta.

**Grupisanje prema WBS-u**: ako je opcija omogućena, u računu generisanom na osnovu vrednovanja intervencija stavke se grupišu prema WBS-u projekta.

**Grupisanje usluga i troškova**: ako je opcija omogućena, u računu generisanom na osnovu vrednovanja intervencija usluge i troškovi grupišu se zajedno.

**Uzimanje neradnih dana u obzir kao prekovremenog rada**: ako je opcija omogućena, u planu fakturisanja proverava se da li dan u kojem je usluga izvršena pripada nekom od datuma definisanih kao neradni dani. Neradni dani mogu se konfigurisati u odeljku *Konfiguracija > Tabele > Upravljanje projektima* > [Kalendar neradnih dana](/docs/configurations/tables/project-management/not-working-days-calendar).

**Prioritet unosa podataka**: određuje redosled kojim se podaci unose u račune generisane na osnovu vrednovanja intervencija.

### PLAN FAKTURISANJA

Pravila koja se primenjuju na plan fakturisanja intervencije mogu se definisati u opštim parametrima modula Upravljanje projektima, čime važe za sve klijente, ili se mogu definisati zasebno za pojedinačnog klijenta.

Postupak obračuna plana fakturisanja najpre proverava da li postoje posebne konfiguracije za klijenta. Ako ne postoje, primenjuju se podešavanja definisana u opštim parametrima.

**Radno mesto** i **Vrsta intervencije**: koriste se kao filteri. Ako nisu navedeni, važe za sva radna mesta i sve vrste intervencija. Ako su konfigurisani, uzimaju se u obzir samo kada odgovaraju radnom mestu definisanom u šifarniku resursa koji izvršava intervenciju i vrsti intervencije koja se koristi.

**Vrsta vremenskog raspona**: označava radno vreme dogovoreno sa klijentom i broj radnih sati dnevno.

:::note[Napomena]
Za jednog klijenta može se definisati dnevno radno vreme od 7 sati, a za drugog 8 sati. Broj sati naveden u vremenskom rasponu koristi se pri konverziji između različitih vremenskih mernih jedinica:

- Ako je kod klijenta odrađeno 7 sati, a njegov vremenski raspon iznosi 7 sati, pri konverziji u dane količina će biti 1.
- Ako je kod klijenta odrađeno 7 sati, a njegov vremenski raspon iznosi 8 sati, pri konverziji u dane količina će biti 0,875.

Vremenski raspon uzima se u obzir i pri obračunu vremena van redovnog radnog vremena, koje se obračunava po drugoj ceni, kako u slučaju prekoračenja ukupnog broja sati tako i u slučaju rada van definisanog rasporeda.
:::

**Vrsta noćnog vremenskog raspona**: funkcioniše na isti način kao polje „Vrsta vremenskog raspona“, ali se koristi kada se usluge obavljaju i danju i noću, kako bi se omogućio različit obračun cena.

**Vrsta zaokruživanja**: određuje matematičko pravilo za zaokruživanje radnih sati. Zaokruživanje se zatim primenjuje na ukupan broj sati intervencije. Na primer, ako ukupno trajanje iznosi 7,45 sati, a predviđeno je zaokruživanje na pola sata, fakturisaće se 8 sati.

**Komercijalna kategorija**: dodatni filter za izbor pravila plana fakturisanja. Ako nije navedena, pravilo važi za sve komercijalne kategorije klijenata. Ako je navedena određena kategorija, bira se ona koja odgovara kategoriji definisanoj u šifarniku klijenta, na kartici *Administracija*.

**Uključi sate putovanja u usluge**: omogućava da se sati putovanja navedeni u intervenciji na kartici *Troškovi za fakturisanje* uzmu u obzir kao sati usluge. Posledično se sva pravila fakturisanja (vremenski raspon, zaokruživanje itd.) primenjuju i na sate putovanja, kao da je reč o izvršenoj usluzi.

**Isključi zaokruživanja**: ako je opcija omogućena, u planu fakturisanja neće se primenjivati zaokruživanja.

**Isključi obračun rada van radnog vremena**: ako je opcija omogućena, u planu fakturisanja neće se obračunavati rad van radnog vremena. Za konverziju između različitih vremenskih mernih jedinica (npr. iz sati u dane) koristiće se broj sati naveden u polju *Radna smena* u opštim parametrima modula Upravljanje projektima.

**Uzmi u obzir sve vremenske raspone pri obračunu rada van radnog vremena**: ako je opcija omogućena, pri obračunu rada van radnog vremena uzimaju se u obzir i dnevni i noćni vremenski raspon. Radom van radnog vremena smatraće se samo ono vreme koje ne pripada nijednom od tih raspona ili koje premašuje dnevni fond sati. Ako je opcija onemogućena, uzima se u obzir samo jedan vremenski raspon (noćni ili dnevni, u zavisnosti od vremena početka usluge), a sve vreme van tog raspona obračunava se kao rad van radnog vremena.

:::note[Primer]
Dnevni vremenski raspon: 7:00 – 18:00  
Noćni vremenski raspon: 20:00 – 5:00

Vreme usluge: 3:00 – 8:00

Ako je opcija omogućena, plan fakturisanja biće sledeći:

- Red usluge od 3:00 do 5:00 sa noćnom tarifom
- Red usluge od 5:00 do 7:00 sa tarifom za rad van radnog vremena
- Red usluge od 7:00 do 8:00 sa dnevnom tarifom

Pri obračunu se uzimaju u obzir oba vremenska raspona. Radom van radnog vremena smatra se samo vreme koje ne pripada nijednom od njih.

Ako je opcija onemogućena, plan fakturisanja biće sledeći:

- Red usluge od 3:00 do 5:00 sa noćnom tarifom
- Red usluge od 5:00 do 8:00 sa tarifom za rad van radnog vremena

Pri obračunu se uzima u obzir samo noćni vremenski raspon jer je on merodavan za uslugu koja je započela unutar tog raspona.
:::

## Aktivnosti

**Provera nedostajućih aktivnosti za poslednjih: broj meseci**

Vrednost koja se koristi za određivanje datuma i vremena koji će biti predloženi pri prijavi aktivnosti.

Unosi se broj meseci za koje će se tokom prijave aktivnosti proveravati prethodnih N meseci radi pronalaženja nedostajućih prijava aktivnosti (dan i vreme). Pronađene prijave automatski će biti predložene pri unosu nove prijave aktivnosti.

Podrazumevana vrednost = 0: pri prijavi aktivnosti uvek će se predlagati današnji datum, bez provere nedostajućih prijava iz prethodnih meseci.

Vrednost „1“: proveravaće se period od današnjeg datuma do istog datuma prethodnog meseca, npr. od 5. 6. do 5. 7.

Na primer, ako nedostaje prijava aktivnosti za 20. 6., pri unosu nove prijave aktivnosti predložiće se datum 20. 6.

Povećanjem broja meseci proširuje se period prethodnih meseci koji će se proveravati.

**Provera nedostajućih aktivnosti samo prema dnevnom fondu sati, a ne prema satnici smene resursa**

Opcija koja određuje koji će datum i vreme biti predloženi pri prijavi aktivnosti.

- **Omogućeno**: provera nedostajućih prijava aktivnosti vrši se prema dnevnom fondu sati definisanom u smeni resursa. Ne proverava se da li vremena navedena u prijavama aktivnosti odgovaraju vremenima definisanim u smeni resursa.

  Nedostajuće prijave aktivnosti uvek se traže unutar prethodnih N meseci, određenih prethodnim parametrom.

  Ako je dnevni fond sati ispunjen, dan se smatra važećim čak i ako prijavljene aktivnosti ne odgovaraju dogovorenom vremenskom rasponu resursa. Nakon toga proveravaju se sledeći dani.

  Ovaj pristup je pogodan kada resursi imaju fleksibilno radno vreme: postoji referentna smena, ali resursi ne moraju strogo da se pridržavaju navedenih sati. Jedini uslov je da ukupan broj sati za dan odgovara broju sati definisanom u smeni.

- **Onemogućeno**: provera nedostajućih prijava aktivnosti vrši se prema smeni definisanoj za resurs, nezavisno od ukupnog broja prijavljenih sati. Prijavljena vremena moraju se u potpunosti podudarati sa vremenima smene. U suprotnom će se pri prijavi aktivnosti predložiti vremenski raspon koji nedostaje.