---
title: Parametri projekata
sidebar_position: 1
---

## Općenito

Ovi se parametri upotrebljavaju kao zadane vrijednosti ako za klijenta ili vrstu dokumenta nisu definirane unaprijed postavljene konfiguracije.

**Zadana mjerna jedinica za uslugu**: zadana mjerna jedinica koja se uzima u obzir za usluge u intervencijama.

**Mjerna jedinica sati**: mjerna jedinica koja označava sate u području projekata. U slučaju pretvorbe između mjernih jedinica bit će jasno odnosi li se količina na radne sate.

**Mjerna jedinica dana**: mjerna jedinica koja označava dane u području projekata. U slučaju pretvorbe između mjernih jedinica bit će jasno odnosi li se količina na radne dane.

**Dnevni broj sati**: označava standardno trajanje radnog dana u tvrtki. Može se konfigurirati u tablici [Radno vrijeme](/docs/configurations/tables/employee/working-hours).

**Artikl**: artikl koji se prema zadanim postavkama upotrebljava u dokumentima ako nisu definirane druge postavke.

**Radna smjena**: označava glavnu radnu smjenu u tvrtki. Vrijednosti se mogu konfigurirati za svaki dan u tjednu u tablici [Radna smjena](/docs/configurations/tables/employee/working-hours). Ukupan broj sati u danu uzima se u obzir pri pretvorbi sati u dane i obrnuto. Ako, primjerice, tvrtka predviđa 7 radnih sati dnevno, tada 1 dan odgovara 7 sati, a ta se osnova upotrebljava za pretvorbe, primjerice u uslugama intervencije.

**Vrsta aktivnosti**: zadana vrsta aktivnosti koja se upotrebljava, primjerice, pri automatskom stvaranju aktivnosti iz intervencije.

**Vrsta aktivnosti za zahtjev za godišnji odmor/odsutnost**: vrsta aktivnosti koja se upotrebljava pri potvrdi razdoblja godišnjeg odmora radi generiranja odgovarajućih prijava aktivnosti za resurs.

**Zadana vrsta sprinta**: vrsta sprinta koja se upotrebljava kao zadana ako nije navedena za vrstu dokumenta.

**Zadani trošak materijala projekta**: moguće je odabrati jednu od sljedećih vrijednosti: Bez troška, Posljednji trošak, Prosječni trošak ili Standardni trošak. Odabrana postavka upotrebljava se kao osnovno pravilo za određivanje troška artikla unesenog na kartici *Materijali* projekta.

**Zadana vrsta planirane intervencije**: vrsta planirane intervencije koja se upotrebljava kao zadana, primjerice pri stvaranju novih planiranih intervencija izravno iz WBS-a za dodjelu resursa.

**Zadana vrsta zahtjeva za intervenciju**: vrsta zahtjeva za intervenciju koja se upotrebljava kao zadana, primjerice pri stvaranju novih zahtjeva za intervenciju izravno iz WBS-a za dodjelu resursa.

**Radna smjena**: označava određenu radnu smjenu definiranu u tablici **Radne smjene**.

## Intervencije

**Vrsta interne intervencije**: vrsta intervencije koja je definirana kao interna intervencija.

**Vrsta vanjske intervencije**: vrsta intervencije koja je definirana kao vanjska intervencija.

**Zadana vrsta intervencije**: vrsta intervencije koja se upotrebljava kao zadana, primjerice pri automatskom generiranju intervencije iz aktivnosti označenih kao naplative.

**Zadani zaposlenik**: zaposlenik koji se upotrebljava kao zadana vrijednost ako nije navedena druga vrijednost.

**Artikl za stavke izvan radnog vremena u planu fakturiranja**: artikl koji se prema zadanim postavkama upotrebljava za unos stavki koje su u izračunima plana fakturiranja intervencije utvrđene kao stavke izvan radnog vremena.

**Artikl za storno računa predujma**: artikl koji se prema zadanim postavkama upotrebljava za unos storno stavki računa predujma u račun generiran na temelju vrednovanja intervencija.

**Opis storno stavke računa predujma**: opis koji se prema zadanim postavkama upotrebljava za unos storno stavki računa predujma u račun generiran na temelju vrednovanja intervencija.

**Predlaganje računa predujma u uslugama**: ako je opcija omogućena, pri svakom spremanju intervencije provjerava se postoji li račun predujma povezan s projektom navedenim u dokumentu. Ako je preostali iznos računa predujma dovoljan za pokriće usluge, račun će se automatski povezati s retkom usluge intervencije u odgovarajućem polju.

**Predlaganje računa predujma u materijalima**: ako je opcija omogućena, pri svakom spremanju intervencije provjerava se postoji li račun predujma povezan s projektom navedenim u dokumentu. Ako je preostali iznos računa predujma dovoljan za pokriće vrijednosti materijala, račun će se automatski povezati s retkom materijala intervencije u odgovarajućem polju.

**Predlaganje računa predujma u putnim troškovima**: ako je opcija omogućena, pri svakom spremanju intervencije provjerava se postoji li račun predujma povezan s projektom navedenim u dokumentu. Ako je preostali iznos računa predujma dovoljan za pokriće putnog troška, račun će se automatski povezati s retkom putnog troška intervencije u odgovarajućem polju.

### Postavke vrednovanja intervencija

**Upotreba referenci intervencije**: ako je opcija omogućena, u račun generiran na temelju vrednovanja intervencija prije retka intervencije umeće se opisni redak koji sadržava opis konfiguriran od strane korisnika.

**Dodavanje datuma intervencije u redak usluge**: ako je opcija omogućena, datum usluge umeće se u polje opisa retka koji se odnosi na uslugu.

**Predlaganje opisa šifre artikla**: ako je opcija omogućena, opis šifre artikla umeće se u polje opisa usluge.

**Grupiranje prema projektu**: ako je opcija omogućena, u računu generiranom na temelju vrednovanja intervencija stavke se grupiraju prema zaglavlju projekta.

**Grupiranje prema WBS-u**: ako je opcija omogućena, u računu generiranom na temelju vrednovanja intervencija stavke se grupiraju prema WBS-u projekta.

**Grupiranje usluga i troškova**: ako je opcija omogućena, u računu generiranom na temelju vrednovanja intervencija usluge i troškovi grupiraju se zajedno.

**Uzimanje neradnih dana u obzir kao prekovremenog rada**: ako je opcija omogućena, u planu fakturiranja provjerava se pripada li dan u kojem je usluga izvršena nekom od datuma definiranih kao neradni dani. Neradni dani mogu se konfigurirati u odjeljku *Konfiguracija > Tablice > Upravljanje projektima* > [Kalendar neradnih dana](/docs/configurations/tables/project-management/not-working-days-calendar).

**Prioritet unosa podataka**: određuje redoslijed kojim se podaci unose u račune generirane na temelju vrednovanja intervencija.

### PLAN FAKTURIRANJA

Pravila koja se primjenjuju na plan fakturiranja intervencije mogu se definirati u općim parametrima modula Upravljanje projektima, čime vrijede za sve klijente, ili se mogu definirati zasebno za pojedinog klijenta.

Postupak izračuna plana fakturiranja najprije provjerava postoje li posebne konfiguracije za klijenta. Ako ne postoje, primjenjuju se postavke definirane u općim parametrima.

**Radno mjesto** i **Vrsta intervencije**: upotrebljavaju se kao filtri. Ako nisu navedeni, vrijede za sva radna mjesta i sve vrste intervencija. Ako su konfigurirani, uzimaju se u obzir samo kada odgovaraju radnom mjestu definiranom u šifarniku resursa koji izvršava intervenciju i vrsti intervencije koja se upotrebljava.

**Vrsta vremenskog raspona**: označava radno vrijeme dogovoreno s klijentom i broj radnih sati dnevno.

:::note[Napomena]
Za jednog klijenta može se definirati dnevno radno vrijeme od 7 sati, a za drugog 8 sati. Broj sati naveden u vremenskom rasponu upotrebljava se pri pretvorbi između različitih vremenskih mjernih jedinica:

- Ako je kod klijenta odrađeno 7 sati, a njegov vremenski raspon iznosi 7 sati, pri pretvorbi u dane količina će biti 1.
- Ako je kod klijenta odrađeno 7 sati, a njegov vremenski raspon iznosi 8 sati, pri pretvorbi u dane količina će biti 0,875.

Vremenski raspon uzima se u obzir i pri izračunu vremena izvan redovnog radnog vremena, koje se obračunava po drugoj cijeni, kako u slučaju prekoračenja ukupnog broja sati tako i u slučaju rada izvan definiranog rasporeda.
:::

**Vrsta noćnog vremenskog raspona**: funkcionira na isti način kao polje „Vrsta vremenskog raspona”, ali se upotrebljava kada se usluge obavljaju i danju i noću kako bi se omogućio različit obračun cijena.

**Vrsta zaokruživanja**: određuje matematičko pravilo za zaokruživanje radnih sati. Zaokruživanje se zatim primjenjuje na ukupan broj sati intervencije. Primjerice, ako ukupno trajanje iznosi 7,45 sati, a predviđeno je zaokruživanje na pola sata, fakturirat će se 8 sati.

**Komercijalna kategorija**: dodatni filtar za odabir pravila plana fakturiranja. Ako nije navedena, pravilo vrijedi za sve komercijalne kategorije klijenata. Ako je navedena određena kategorija, odabire se ona koja odgovara kategoriji definiranoj u šifarniku klijenta, na kartici *Administracija*.

**Uključi sate putovanja u usluge**: omogućuje da se sati putovanja navedeni u intervenciji na kartici *Troškovi za fakturiranje* uzmu u obzir kao sati usluge. Posljedično se sva pravila fakturiranja (vremenski raspon, zaokruživanje itd.) primjenjuju i na sate putovanja, kao da je riječ o izvršenoj usluzi.

**Isključi zaokruživanja**: ako je opcija omogućena, u planu fakturiranja neće se primjenjivati zaokruživanja.

**Isključi izračun rada izvan radnog vremena**: ako je opcija omogućena, u planu fakturiranja neće se izračunavati rad izvan radnog vremena. Za pretvorbu između različitih vremenskih mjernih jedinica (npr. iz sati u dane) upotrebljavat će se broj sati naveden u polju *Radna smjena* u općim parametrima modula Upravljanje projektima.

**Uzmi u obzir sve vremenske raspone pri izračunu rada izvan radnog vremena**: ako je opcija omogućena, pri izračunu rada izvan radnog vremena uzimaju se u obzir i dnevni i noćni vremenski raspon. Radom izvan radnog vremena smatrat će se samo ono vrijeme koje ne pripada nijednom od tih raspona ili koje premašuje dnevni fond sati. Ako je opcija onemogućena, uzima se u obzir samo jedan vremenski raspon (noćni ili dnevni, ovisno o vremenu početka usluge), a sve vrijeme izvan tog raspona obračunava se kao rad izvan radnog vremena.

:::note[Primjer]
Dnevni vremenski raspon: 7:00 – 18:00  
Noćni vremenski raspon: 20:00 – 5:00

Vrijeme usluge: 3:00 – 8:00

Ako je opcija omogućena, plan fakturiranja bit će sljedeći:

- Redak usluge od 3:00 do 5:00 s noćnom tarifom
- Redak usluge od 5:00 do 7:00 s tarifom za rad izvan radnog vremena
- Redak usluge od 7:00 do 8:00 s dnevnom tarifom

Pri izračunu se uzimaju u obzir oba vremenska raspona. Radom izvan radnog vremena smatra se samo vrijeme koje ne pripada nijednom od njih.

Ako je opcija onemogućena, plan fakturiranja bit će sljedeći:

- Redak usluge od 3:00 do 5:00 s noćnom tarifom
- Redak usluge od 5:00 do 8:00 s tarifom za rad izvan radnog vremena

Pri izračunu se uzima u obzir samo noćni vremenski raspon jer je on mjerodavan za uslugu koja je započela unutar tog raspona.
:::

## Aktivnosti

**Provjera nedostajućih aktivnosti za posljednjih: broj mjeseci**

Vrijednost koja se upotrebljava za određivanje datuma i vremena koji će se predložiti pri prijavi aktivnosti.

Unosi se broj mjeseci za koje će se tijekom prijave aktivnosti provjeravati prethodnih N mjeseci radi pronalaženja nedostajućih prijava aktivnosti (dan i vrijeme). Pronađene prijave automatski će se predložiti pri unosu nove prijave aktivnosti.

Zadana vrijednost = 0: pri prijavi aktivnosti uvijek će se predlagati današnji datum, bez provjere nedostajućih prijava iz prethodnih mjeseci.

Vrijednost „1”: provjeravat će se razdoblje od današnjeg datuma do istog datuma prethodnog mjeseca, npr. od 5. 6. do 5. 7.

Primjerice, ako nedostaje prijava aktivnosti za 20. 6., pri unosu nove prijave aktivnosti predložit će se datum 20. 6.

Povećanjem broja mjeseci proširuje se razdoblje prethodnih mjeseci koje će se provjeravati.

**Provjera nedostajućih aktivnosti samo prema dnevnom fondu sati, a ne prema satnici smjene resursa**

Opcija koja određuje koji će se datum i vrijeme predložiti pri prijavi aktivnosti.

- **Omogućeno**: provjera nedostajućih prijava aktivnosti provodi se prema dnevnom fondu sati definiranom u smjeni resursa. Ne provjerava se odgovaraju li vremena navedena u prijavama aktivnosti vremenima definiranim u smjeni resursa.

  Nedostajuće prijave aktivnosti uvijek se traže unutar prethodnih N mjeseci, određenih prethodnim parametrom.

  Ako je dnevni fond sati ispunjen, dan se smatra valjanim čak i ako prijavljene aktivnosti ne odgovaraju dogovorenom vremenskom rasponu resursa. Nakon toga provjeravaju se sljedeći dani.

  Ovaj je pristup prikladan kada resursi imaju fleksibilno radno vrijeme: postoji referentna smjena, ali se ne moraju strogo pridržavati navedenih sati. Jedini je uvjet da ukupan broj sati za dan odgovara broju sati definiranom u smjeni.

- **Onemogućeno**: provjera nedostajućih prijava aktivnosti provodi se prema smjeni definiranoj za resurs, neovisno o ukupnom broju prijavljenih sati. Prijavljena vremena moraju se potpuno podudarati s vremenima smjene. U suprotnom će se u prijavi aktivnosti predložiti vremenski raspon koji nedostaje.