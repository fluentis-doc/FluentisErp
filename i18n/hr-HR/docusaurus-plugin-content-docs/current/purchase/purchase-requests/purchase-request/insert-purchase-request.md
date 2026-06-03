---
title: Unos zahtjeva za nabavu
sidebar_position: 3
---

Ova značajka omogućuje unos novog zahtjeva za kupnju koji će zatim trebati biti odobren pomoću gumba **Autorizacija Zahtjeva nabave**.

# Novi zahtjev za nabavu

Obrazac se otvara putem izbornika **Nabava > Zahtjevi za nabavu > Novi zahtjev** ili iz pregleda zahtjeva za nabavu korištenjem funkcije **Novo**.

## Kako kreirati zahtjev za nabavu

:::info Osnovni koraci

1. **Odabrati vrstu zahtjeva za nabavu**. Datum, godina i broj dokumenta automatski će se predložiti prema definiranoj numeraciji.

2. **Dodati artikle**. Dvostrukim klikom na polje **Šifra artikla** otvara se pregled artikala iz kojeg je moguće odabrati postojeći artikl. Ostali podaci na stavci, poput jedinice mjere, količine i cijene, automatski se popunjavaju, ali ih je moguće izmijeniti.

   Alternativno, moguće je odabrati vrstu retka **Nekodificirani artikl** i ručno unijeti podatke.

3. Po potrebi unesite dodatne informacije u kartici **Podaci artikla**.

4. Nakon unosa svih stavki kliknite na gumb **Odobri zahtjev za nabavu** kako bi dokument postao dostupan za daljnje procese nabave.
:::

## 1. Zaglavlje dokumenta

Obavezna polja za unos zahtjeva za nabavu su:

- [**Vrsta**](/docs/configurations/tables/purchase/purchase-request-type) – definira se u izborniku **Konfiguracija > Šifrarnici > Vrste zahtjeva za nabavu**. Ovisno o odabranoj vrsti mogu biti aktivirane dodatne funkcionalnosti, primjerice provjera raspoloživosti zaliha.

- **Datum / Godina** – prema zadanim postavkama predlaže se trenutačni datum, ali ga je moguće ručno izmijeniti.

- **Broj dokumenta** – automatski se generira prema numeraciji povezanoj s odabranom vrstom zahtjeva.

### Drugi podaci

- **Povijesni** – ako je opcija uključena, zahtjev više neće biti dostupan u proceduri **Automatsko kreiranje narudžbi**.

- **Napomene** – omogućuje unos internih napomena vidljivih na razini cijelog zahtjeva.

- **Zahtijevani status** – informativno polje koje prikazuje status realizacije zahtjeva na temelju statusa pojedinih stavki.

  Zahtjev se smatra:

  - **Izvršenim** kada su sve stavke prenesene u narudžbe dobavljača.
  - **Djelomično izvršenim** kada je samo dio stavki prenesen u narudžbe dobavljača.

## 2. Artikli

U tablici stavki dostupni su sljedeći podaci:

- **Tip** – omogućuje odabir različitih vrsta stavki:

  - **Artikl s klasom** – artikl definiran u šifrarniku artikala koji se može knjižiti u analitičkom računovodstvu i evidentirati na skladištu.

  - **Artikl bez klase** – opisna stavka koja se može knjižiti u analitičkom računovodstvu, ali se ne vodi kroz skladišno poslovanje.

  - **Artikl - Bilješke** – tekstualna stavka koja se ispisuje na dokumentu i nema utjecaja na računovodstvo niti na stanje skladišta.

- **Klasa / Artikl / Naziv artikla** – podatke je moguće unijeti ručno ili odabrati korištenjem pomoći za unos artikala. Nakon odabira artikla sustav automatski preuzima klasu, naziv i ostale podatke iz kartice artikla. Ako artikl koristi varijante, moguće je odabrati željenu varijantu u kartici **Podaci artikla**.

- **Jedinica mjere** – sustav predlaže osnovnu jedinicu mjere artikla. Ako su na artiklu definirane alternativne jedinice mjere, korisnik može odabrati drugu jedinicu.

- **Količina** – količina izražena u osnovnoj jedinici mjere artikla.

- **Cijena** – cijena se automatski predlaže iz zadanog cjenika preferiranog dobavljača artikla. Cjenik koji je korišten za određivanje cijene prikazan je u kartici **Popusti/Cjenici**.

  Unutar istog zahtjeva moguće je imati artikle čije su cijene preuzete iz različitih cjenika. Dvostrukim klikom na polje **Cjenici** korisnik može odabrati drugi cjenik iz kojeg će se preuzeti cijena artikla.

  Ako za artikl nije pronađen odgovarajući cjenik, cijena se može:
  - preuzeti iz posljednje nabavne cijene artikla
  - postaviti na nulu

  Način određivanja cijene ovisi o postavkama u parametrima zahtjeva za nabavu.

- **Prisilno izvršeno** – omogućuje označavanje stavke za prisilnu realizaciju. U tom slučaju za tu stavku neće biti generirano skladišno zaprimanje.

- **Status** – prikazuje trenutačni status realizacije pojedine stavke zahtjeva.

- **Datum zahtjeva** – kod zahtjeva nastalih iz planiranja proizvodnje automatski se preuzima datum završetka planiranog nabavnog naloga. Vrijednost je moguće ručno izmijeniti.

- **Datum pošiljke** – kod zahtjeva nastalih iz planiranja proizvodnje automatski se preuzima FOB datum planiranog naloga ako je definiran. Vrijednost se može ručno promijeniti.

- **Predviđeni datum dolaska** – kod zahtjeva nastalih iz planiranja proizvodnje automatski se preuzima ETA datum planiranog naloga ako je definiran. Vrijednost se također može ručno izmijeniti.

:::warning Važno
Kod zahtjeva za nabavu generiranih iz planiranih naloga uvijek se prenosi **količina korištenja** iz planiranog naloga zajedno s pripadajućom jedinicom mjere.

Ako se jedinica mjere iz planiranog naloga razlikuje od osnovne jedinice mjere artikla, prilikom kreiranja narudžbe dobavljača koristit će se kao **alternativna jedinica mjere**, zajedno s pripadajućom količinom.

U tablici stavki zahtjeva prikazuje se osnovna jedinica mjere artikla, dok se količina automatski preračunava prema faktoru konverzije definiranom na kartici artikla.
:::

U donjem dijelu obrasca prikazuju se ukupni iznosi zahtjeva za nabavu:

- **Osnovica** – ukupan iznos osnovice svih stavki zahtjeva za nabavu.

- **PDV** – ukupni iznos poreza izračunat na temelju poreznih stopa definiranih na pojedinim stavkama.

- **Ukupno** – ukupna vrijednost dokumenta, izračunata kao zbroj osnovice i PDV-a.

### Posebni gumbi

- **Autorizacija zahtjeva za nabavu** – odobrava sve odabrane stavke zahtjeva. Nakon odobrenja dokument se smatra potvrđenim i može se koristiti u daljnjim procesima nabave.

- **Generator zahtjeva za ponudom (RDO)** – kreira zahtjev za ponudom za stavke definirane u kartici **Generator RDO**. Za više informacija pogledajte dokumentaciju o zahtjevima za ponudom.

- **Poništi zahtjev za ponudom (Rollback RDO)** – poništava i briše prethodno generirani zahtjev za ponudom.

### 2.1 Podaci artikla

Ova kartica sadrži dodatne informativne podatke o artiklu. Vrijednosti se automatski preuzimaju s kartice artikla ili od preferiranog dobavljača, ali ih je moguće promijeniti na razini pojedine stavke.

- **Cjenik** – prikazuje cjenik iz kojeg je preuzeta cijena artikla.

- **Dobavljač** – prikazuje preferiranog dobavljača definiranog na kartici artikla.

- **PDV** – porezna stopa povezana s artiklom.

- **Marka** – oznaka robne marke artikla preuzeta s kartice artikla ili iz cjenika.

- **Valuta** – zadana valuta definirana na kartici preferiranog dobavljača.

- **Tečaj** – datum i tečaj koji se koriste za preračun valuta.

- **Varijanta** – omogućuje odabir jedne od definiranih varijanti artikla. Ako za pojedine varijante postoje različite cijene ili popusti, oni će se automatski ažurirati nakon promjene varijante.

- **Nalog** – ako je zahtjev za nabavu nastao iz planiranja proizvodnje ili proizvodnog naloga, ovdje se prikazuje povezani dokument.

- **Operater** – korisnik koji je evidentirao zahtjev za nabavu.

- **Projekt** – omogućuje povezivanje stavke s projektom. Ako je zahtjev kreiran iz proizvodne komese povezane s projektom, projekt se automatski prenosi na stavku.

- **Vrsta prometa nabave** – zadana vrsta fakturiranja preuzeta s kartice artikla.

- **Prioritet potražnje** – prikazuje prioritet nabave definiran u proizvodnom nalogu ili drugom izvornom dokumentu.

- **Napomene** – napomene vezane uz pojedinu stavku artikla. Prenose se na sve dokumente nastale iz ovog zahtjeva.

- **Datum izvršenja** – nakon kreiranja narudžbe dobavljača iz zahtjeva za nabavu ovdje se upisuje datum realizacije stavke.

- **Odobreno** – oznaka koja pokazuje je li stavka odobrena. Može se postaviti ručno ili korištenjem funkcije **Odobri zahtjev za nabavu**.

- **Datum odobrenja** – datum kada je stavka zahtjeva odobrena.

- **Po korisniku** – korisnik koji je izvršio odobrenje zahtjeva za nabavu.

### 2.2 Analitika

Ova kartica sadrži podatke vezane uz analitičko računovodstvo.

Prikazuju se mjesta troška i profitni centri na koje se raspoređuju vrijednosti nabavljenih artikala.

Podatke je moguće:

- unijeti ručno
- automatski preuzeti iz kartice dobavljača
- automatski preuzeti iz kartice artikla
- automatski preuzeti iz kontnog plana

### 2.3 Dokumenti u privitku

U ovoj kartici prikazuju se podaci o dokumentima povezanim sa zahtjevom za nabavu, uključujući:

- naziv dokumenta
- vrstu dokumenta
- napomene
- internu i eksternu referencu

Za detaljne upute o dodavanju priloga pogledajte dokumentaciju za funkcionalnost **Priloženi dokumenti**.

### 2.4 Generator zahtjeva za ponudom (RDO)

U ovoj kartici prikazuju se preferirani dobavljači definirani na kartici odabranog artikla zajedno s pripadajućim cjenicima i cijenama.

Na temelju tih podataka moguće je odabrati najpovoljnijeg dobavljača za slanje zahtjeva za ponudom. Alternativno, dobavljača je moguće odabrati ili unijeti ručno.

Moguće je koristiti sljedeće vrste primatelja zahtjeva:

1. **Dobavljač** – odabir postojećeg dobavljača iz šifrarnika. Odabirom ove opcije omogućuje se unos podataka u polje *Naziv dobavljača*.

2. **Nomenklatura** – odabir unaprijed definiranog naziva i poslovnog subjekta. Odabirom ove opcije omogućuje se unos podataka u polja *Nomenklatura* i *Opis nomenklature*.

3. **Kontakt** – odabir CRM kontakta kojem će biti poslan zahtjev za ponudom.

4. **Novi dobavljač** – omogućuje unos dobavljača koji još nije evidentiran u sustavu. Odabirom ove opcije omogućuje se unos podataka u polje *Opis dobavljača*.

#### Podaci dostupni u tablici

- **Šifra / Naziv / Barkod artikla dobavljača** – podaci kojima dobavljač identificira traženi artikl. Unos je opcionalan.

- **Jedinica mjere** – predlaže se jedinica mjere definirana za dobavljača na kartici artikla. Ako nije definirana, koristi se osnovna jedinica mjere artikla.

- **Količina** – predlaže se prema ekonomičnoj količini narudžbe definiranoj za dobavljača. Ako nije definirana, koristi se količina iz zahtjeva za nabavu.

- **Cijena** – preuzima se iz cjenika povezanog s preferiranim dobavljačem. Ako je cijena na zahtjevu za nabavu ručno promijenjena, moguće ju je dodatno izmijeniti i u Generatoru RDO-a.

  Cijena definirana u Generatoru RDO prenijet će se na generirani zahtjev za ponudom te će biti označena kao ručno unesena cijena.

- **Procijenjeni datum dostave** – datum do kojeg se očekuje isporuka robe.

- **PDV** – porezna stopa preuzeta iz kartice artikla. Vrijednost je moguće ručno izmijeniti.

- **Alternativna jedinica mjere / Alternativna količina** – omogućuje definiranje alternativne jedinice mjere i količine koje će biti prenesene na generirane dokumente.

- **Cijena po alternativnoj jedinici mjere** – cijena definirana za alternativnu jedinicu mjere. Sustav automatski množi cijenu s alternativnom količinom.

- **Cjenik nabave** – prikazuje cjenik iz kojeg je preuzeta cijena artikla.

- **Suspendirano** – oznaka se automatski uključuje nakon što je za stavku generiran zahtjev za ponudom.

#### Generiranje zahtjeva za ponudom

Ako je u kartici prisutna barem jedna stavka, aktivira se funkcija **RDO generator** na alatnoj traci.

Pokretanjem ove funkcije sustav generira zahtjev za ponudom za sve označene stavke.

Nakon kreiranja dokument se može pregledati izravno iz zahtjeva za nabavu korištenjem funkcije **Otvori zahtjev za ponudom**.

#### Poništavanje generiranja

Ako je potrebno poništiti generirani zahtjev za ponudom, koristi se funkcija **Poništi zahtjev za ponudom (Rollback RDO)** koja briše prethodno kreirani zahtjev za ponudom.
