---
title: Parametri projekta
sidebar_position: 1
---

## Općenito

Ovi se parametri koriste prema zadanim postavkama ako za kupca ili za vrstu dokumenta nisu izvršene prethodne konfiguracije.

**Zadana jedinica mjere za uslugu**: zadana JM koja se uzima u obzir za usluge unutar intervencija.

**Jedinica mjere sati**: JM koja označava sate u području projekata. U slučaju konverzije između jedinica mjere bit će jasno da se količina odnosi na radne sate.

**Jedinica mjere dani**: JM koja označava dane u području projekata. U slučaju konverzije između jedinica mjere bit će jasno da se količina odnosi na radne dane.

**Dnevni sati**: označava standardno trajanje radnog dana u poduzeću. Može se konfigurirati u tablici [Radno vrijeme](/docs/configurations/tables/employee/working-hours)

**Artikl**: artikl koji se koristi kao zadani u dokumentima u odsutnosti drugih postavki.

**Radna smjena**: vrijednosti se konfiguriraju u tablici [Radna smjena](/docs/configurations/tables/employee/working-hours) za svaki dan u tjednu. Ukupan broj sati u danu koristi se za konverziju između Sati – Dani. Na primjer, ako poduzeće ima definirano 7 radnih sati dnevno, 1 Dan = 7 Sati, i na temelju toga će se vršiti konverzije – npr. kod usluga unutar intervencije.  

**Vrsta aktivnosti**: tipologija aktivnosti koja se koristi kao zadana, npr. pri automatskom stvaranju aktivnosti iz intervencije. 

**Tip aktivnosti za zahtjev za godišnji odmor/dozvole**: tipologija aktivnosti korištena u fazi potvrde razdoblja godišnjeg odmora, za generiranje pripadajućih izjava aktivnosti resursa.

**Vrsta zadanog sprinta**: tipologija sprinta koja će se koristiti prema zadanim postavkama ako nije specificirano za vrstu dokumenta.

**Zadani trošak materijala projekta**: moguće je odabrati jednu od vrijednosti: Nijedno, Zadnji trošak, Prosječni trošak, Standardni trošak. Odabrana postavka koristi se kao osnovno pravilo za dohvat troška artikla unesenog u karticu Materijali unutar projekata. 

**Zadane tip planirane intervencije**: koji će se koristiti, na primjer, prilikom kreiranja novih planiranih intervencija direktno iz WBS kartice za dodjelu resursa.

**Zadani tip zahtjeva za intervenciju**: tip zahtjeva za intervenciju koji će se koristiti po zadanim postavkama, na primjer prilikom kreiranja novih zahtjeva za intervenciju iz WBS kartice za dodjelu resursa.

**Radna smjena**: označava konkretnu radnu smjenu definiranu u tablici **Radna smjena**.


## Interventi

**Tip interne intervencije**: tip intervencije koji se identificira kao interna intervencija.

**Tip vanjske intervencije**: tip intervencije koji se identificira kao vanjska intervencija.

**Tip zadane intervencije**: tip intervencije koji se koristi kao zadani, npr. pri automatskom generiranju intervencije iz aktivnosti označenih kao naplative.

**Zadani zaposlenik**: zaposlenik koji se koristi kao zadani ako nije prisutna druga vrijednost.

**Artikl redaka izvan radnog vremena u planu fakturiranja**: artikl koji se koristi kao zadani za unos redova koji su izvan radnog vremena u izračunima plana fakturiranja intervencije.  

**Artikl iz storna računa za predujam**: artikal koji se koristi kao zadani za unos redaka za povratak akontacijskih faktura u fakturi generiranoj valorizacijom intervencija.

**Opis stavke storna računa za predujam**: opis za zadano korištenje pri unosu stavki storna avansnih računa u račun generiran valorizacijom intervencija.

**Predloži avansni račun za usluge**: ako je omogućeno, pri svakom spremanju intervencije provjerava se postoji li avansni račun vezan uz projekt naveden u dokumentu.
Ako je preostala vrijednost avansnog računa dovoljna za pokriće usluge, automatski će se povezati s redom usluge intervencije u predviđeno polje.

**Predloži avansni račun za materijale**: ako je omogućeno, pri svakom spremanju intervencije provjerava se postoji li avansni račun vezan uz projekt naveden u dokumentu.
Ako je preostala vrijednost avansnog računa dovoljna za pokriće vrijednosti materijala, automatski će se povezati s redom materijala intervencije u predviđeno polje.

**Predloži račun za predujam u troškovima putovanja**: ako je omogućeno, pri svakom spremanju intervencije provjerava se postoji li avansni račun vezan uz projekt naveden u dokumentu.
Ako je preostala vrijednost avansnog računa dovoljna za pokriće putnih troškova, automatski će se povezati s redom putnih troškova intervencije u predviđeno polje.  

### Postavke valorizacije izvješća o radu

**Koristiti reference intervencije**: ako je aktivirano, u fakturi generiranoj valorizacijom intervencija bit će umetnut opisni redak prije reda intervencije, koji sadrži opis konfiguriran od strane korisnika. 

**Dodaj datum intervencije u redak usluge** ako je aktivno, unosi datum usluge u polje opis retka vezanog za uslugu.

**Predloži opise kodova predmeta**: ako je aktivno, unosi opis koda artikla u polje opis usluge.

**Grupiraj po projektu**: ako je aktivno, izvršava grupiranje po naslovu projekta u fakturi generiranoj valorizacijom intervencija.

**Grupiraj po WBS-u**: ako je aktivirano, izvrši grupiranje prema WBS projektu u fakturi generiranoj valorizacijom intervencija.

**Grupiraj usluge i troškove**: ako je aktivirano, vrši grupiranje usluga i troškova u fakturi generiranoj valorizacijom intervencija.

**Razmotri praznike kao dodatno vrijeme**: ako je omogućeno, u planu fakturiranja će se provjeriti pada li dan usluge na neki od datuma koji su konfigurirani kao neradni dani.
Neradni dani mogu se konfigurirati putem *Konfiguracija > Tablice > Upravljanje Projektima* > [Kalendar neradnih dana](/docs/configurations/tables/project-management/not-working-days-calendar)

**Prioritet za unos podataka**: odredite redoslijed u kojem će se podaci unositi u fakture generirane valorizacijom intervencija.

### PLAN FAKTURIRANJA 

Pravila koja se primjenjuju na plan fakturiranja intervencije mogu se postaviti u općim parametrima Upravljanja projektima i stoga biti valjana za sve klijente, ili specifična za klijenta.  
Postupak izračuna plana fakturiranja prvo će provjeriti prisutnost specifičnih konfiguracija za klijenta, a ako nisu prisutne, uzet će u obzir one prisutne u općim parametrima.

**Mjesto rada** i **Vrsta intervencije**: koristiti kao filtriranje; ako su prazni, smatraju se valjanima za sve radne lokacije i za sve vrste intervencija. Ako su, međutim, konfigurirani, uzimat će se u obzir samo u skladu s radnom lokacijom konfiguriranom u kartonu resursa koji provodi intervenciju, i s vrstom intervencije koja se koristi.

**Tip vremenskog okvira**: označava dogovoreni radni vremenski period s klijentom te dnevni fond sati.
:::note[Napomena] 
Za pojedinog klijenta može se definirati da je dnevni fond sati 7 sati, dok je za drugog 8 sati.
Sati navedeni u vremenskom rasponu koristit će se za konverziju između različitih vremenskih jedinica:  
- npr. ako je obavljeno 7 sati kod klijenta čiji vremenski raspon iznosi 7 sati, pri konverziji u dane količina će biti 1.  
- ako je obavljeno 7 sati kod klijenta čiji vremenski raspon iznosi 8 sati, pri konverziji u dane količina će biti 0,875.  

Vremenski raspon također će se uzimati u obzir pri izračunu prekovremenih sati koji se naplaćuju po drugačijoj tarifi, bilo da se premaši ukupni fond sati ili dogovoreno radno vrijeme.  
:::

**Tip noćnog vremenskog okvira**: funkcioniranje je analogno kao za polje "Vrsta vremenskog okvira", ali će se koristiti u slučaju pružanja usluga tijekom dana i noći, kako bi se omogućila različita tarifacija.

**Vrsta zaokruživanja**: Označava matematičko pravilo prema kojem će se zaokruživati radni sati. Zaokruživanje će se primijeniti na ukupni broj sati intervencije. Primjer: ukupno 7,45 sati, ako je definirano zaokruživanje na pola sata, fakturirat će se 8 sati.

**Komercijalna kategorija**: daljnji filtar za odabir pravila za plan fakturiranja. Ako je prazan, smatrat će se važećim za sve kategorije komercijalnih kupaca; u slučaju specifične naznake, odabrat će se ona koja odgovara unesenoj u kartonu kupca - kartica Administracija.  

**Uključi sate putovanja u usluge**: omogućuje da se sati putovanja unutar intervencije, u kartici "Troškovi za fakturiranje", tretiraju kao radni sati usluge.
Posljedično, na sate putovanja primjenjivat će se sva pravila fakturiranja (radni raspon, zaokruživanja itd.), kao da se radi o pruženoj usluzi.   

**Isključite zaokruživanje**: ako je omogućeno, zaokruživanja se neće primjenjivati u planu fakturiranja.  

**Isključi obračun prekovremenih sati**: ako je omogućeno, prekovremeni sati neće se obračunavati u planu fakturiranja.
Za konverziju između različitih vremenskih jedinica (npr. iz sati u dane) koristit će se dnevni fond sati definiran u polju "Radna smjena" u općim parametrima Upravljanja Projektima.   

**Uključi sve vremenske raspone u obračun prekovremenih sati**: ako je omogućeno, u obračunu prekovremenih sati uzimat će se u obzir i dnevni i noćni radni raspon.
Prekovremenima će se smatrati samo ono što je izvan oba raspona ili premašuje dnevni fond sati.
Ako nije omogućeno, uzimat će se u obzir samo jedan vremenski raspon (dnevni ili noćni, ovisno o vremenu početka usluge), i sve što je izvan tog raspona bit će tarifirano kao prekovremeni rad.  

:::note[Primjer]
Dnevna smjena 7.00 - 18.00
Noćna smjena 20.00 - 5.00

vrijeme usluge: 3.00 - 8.00
Ako je opcija omogućena, plan fakturiranja bit će: 
- redak usluge 3.00 - 5.00 s noćnom tarifom
- redak usluge05.00 - 07.00 s tarifom izvan radnog vremena
- redak usluge 07.00 - 08.00 s dnevnom tarifom
(uzimaju se u obzir obje vremenske smjene, kao izvanredno se računa samo ono što ne ulazi ni u jednu)  

Ako je opcija onemogućena, plan fakturiranja bit će:  
- redak usluge 3.00 - 5.00 s noćnom tarifom
- redak usluge 05.00 - 08.00 s tarifom izvan radnog vremena
(u obračun se uzima samo noćna smjena jer je usluga započela unutar nje)  
:::

## Aktivnosti

**Provjeri nedostajuće aktivnosti u zadnjih: broj mjeseci**: Ovdje se navodi broj mjeseci unazad za koje će se prilikom prijave aktivnosti provjeravati eventualne nedostajuće prijave (sati/dani). Nedostajuće će se prijave automatski predložiti pri novom unosu. 

Zadana vrijednost = 0, kod prijave aktivnosti uvijek će se predložiti današnji datum, bez provjere za prethodne mjesece.

Vrijednost "1": provjerava se razdoblje od današnjeg datuma unatrag do prethodnog mjeseca (npr. 05.06. – 05.07.).
Ako nedostaje prijava za 20.06., sustav će prilikom unosa nove aktivnosti predložiti taj datum.

Povećavanjem broja mjeseci proširuje se vremenski raspon za provjeru nedostajućih prijava.