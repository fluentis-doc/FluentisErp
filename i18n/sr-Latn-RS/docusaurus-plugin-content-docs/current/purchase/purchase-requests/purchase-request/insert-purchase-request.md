---
title: Unos zahteva za nabavku
sidebar_position: 3
---

Ova funkcionalnost omogućava unos novog zahteva za nabavku koji zatim treba odobriti pomoću dugmeta **Autorizacija zahteva za nabavku**.

# Novi zahtev za nabavku

Forma se otvara putem menija **Nabavka > Zahtevi za nabavku > Novi zahtev** ili iz pregleda zahteva za nabavku korišćenjem funkcije **Novo**.

## Kako kreirati zahtev za nabavku

:::info Osnovni koraci

1. **Izabrati tip zahteva za nabavku**. Datum, godina i broj dokumenta automatski će biti predloženi prema definisanoj numeraciji.

2. **Dodati artikle**. Dvostrukim klikom na polje **Šifra artikla** otvara se pregled artikala iz kojeg je moguće izabrati postojeći artikal. Ostali podaci na stavci, poput jedinice mere, količine i cene, automatski se popunjavaju, ali ih je moguće izmeniti.

   Alternativno, moguće je izabrati tip reda **Artikal bez klase** i ručno uneti podatke.

3. Po potrebi uneti dodatne informacije na kartici **Podaci artikla**.

4. Nakon unosa svih stavki kliknuti na dugme **Odobri zahtev za nabavku** kako bi dokument postao dostupan za dalje procese nabavke.
:::

## 1. Zaglavlje dokumenta

Obavezna polja za unos zahteva za nabavku su:

- [**Tip**](/docs/configurations/tables/purchase/purchase-request-type) – definiše se u meniju **Konfiguracija > Šifarnici > Tipovi zahteva za nabavku**. U zavisnosti od izabranog tipa mogu biti aktivirane dodatne funkcionalnosti, na primer provera raspoloživosti zaliha.

- **Datum / Godina** – prema podrazumevanim podešavanjima predlaže se trenutni datum, ali ga je moguće ručno izmeniti.

- **Broj dokumenta** – automatski se generiše prema numeraciji povezanoj sa izabranim tipom zahteva.

### Drugi podaci

- **Istorijski** – ako je opcija uključena, zahtev više neće biti dostupan u proceduri **Automatsko kreiranje narudžbina**.

- **Beleške** – omogućava unos internih beleški vidljivih na nivou celog zahteva.

- **Zahtevani status** – informativno polje koje prikazuje status realizacije zahteva na osnovu statusa pojedinačnih stavki.

  Zahtev se smatra:

  - **Realizovanim** kada su sve stavke prenete u narudžbine dobavljača.
  - **Delimično realizovanim** kada je samo deo stavki prenet u narudžbine dobavljača.

## 2. Artikli

U tabeli stavki dostupni su sledeći podaci:

- **Tip** – omogućava izbor različitih tipova stavki:

  - **Artikal sa klasom** – artikal definisan u šifarniku artikala koji se može knjižiti u analitičkom računovodstvu i evidentirati u skladištu.

  - **Artikal bez klase** – opisna stavka koja se može knjižiti u analitičkom računovodstvu, ali se ne vodi kroz skladišno poslovanje.

  - **Artikal - Beleške** – tekstualna stavka koja se štampa na dokumentu i nema uticaj na računovodstvo niti na stanje skladišta.

- **Klasa / Artikal / Naziv artikla** – podatke je moguće uneti ručno ili izabrati korišćenjem pomoći za unos artikala. Nakon izbora artikla sistem automatski preuzima klasu, naziv i ostale podatke sa kartice artikla. Ako artikal koristi varijante, moguće je izabrati željenu varijantu na kartici **Podaci artikla**.

- **Jedinica mere** – sistem predlaže osnovnu jedinicu mere artikla. Ako su na artiklu definisane alternativne jedinice mere, korisnik može izabrati drugu jedinicu.

- **Količina** – količina izražena u osnovnoj jedinici mere artikla.

- **Cena** – cena se automatski predlaže iz podrazumevanog cenovnika preferiranog dobavljača artikla. Cenovnik koji je korišćen za određivanje cene prikazan je na kartici **Popusti/Cenovnici**.

  U okviru istog zahteva moguće je imati artikle čije su cene preuzete iz različitih cenovnika. Dvostrukim klikom na polje **Cenovnici** korisnik može izabrati drugi cenovnik iz kojeg će biti preuzeta cena artikla.

  Ako za artikal nije pronađen odgovarajući cenovnik, cena može:

  - biti preuzeta iz poslednje nabavne cene artikla
  - biti postavljena na nulu

  Način određivanja cene zavisi od podešavanja u parametrima zahteva za nabavku.

- **Prinudno realizovano** – omogućava označavanje stavke za prinudnu realizaciju. U tom slučaju za tu stavku neće biti generisan prijem robe.

- **Status** – prikazuje trenutni status realizacije pojedinačne stavke zahteva.

- **Datum zahteva** – kod zahteva nastalih iz planiranja proizvodnje automatski se preuzima datum završetka planiranog naloga nabavke. Vrednost je moguće ručno izmeniti.

- **Datum isporuke** – kod zahteva nastalih iz planiranja proizvodnje automatski se preuzima FOB datum planiranog naloga, ako je definisan. Vrednost se može ručno promeniti.

- **Predviđeni datum dolaska** – kod zahteva nastalih iz planiranja proizvodnje automatski se preuzima ETA datum planiranog naloga, ako je definisan. Vrednost se takođe može ručno izmeniti.

:::warning Važno
Kod zahteva za nabavku generisanih iz planiranih naloga uvek se prenosi **količina korišćenja** iz planiranog naloga zajedno sa odgovarajućom jedinicom mere.

Ako se jedinica mere iz planiranog naloga razlikuje od osnovne jedinice mere artikla, prilikom kreiranja narudžbine dobavljača koristiće se kao **alternativna jedinica mere**, zajedno sa odgovarajućom količinom.

U tabeli stavki zahteva prikazuje se osnovna jedinica mere artikla, dok se količina automatski preračunava prema faktoru konverzije definisanom na kartici artikla.
:::

U donjem delu forme prikazuju se ukupni iznosi zahteva za nabavku:

- **Osnovica** – ukupan iznos osnovice svih stavki zahteva za nabavku.

- **PDV** – ukupan iznos poreza obračunat na osnovu poreskih stopa definisanih na pojedinačnim stavkama.

- **Ukupno** – ukupna vrednost dokumenta, obračunata kao zbir osnovice i PDV-a.

### Specifična dugmad

- **Autorizacija zahteva za nabavku** – odobrava sve izabrane stavke zahteva. Nakon odobrenja dokument se smatra potvrđenim i može se koristiti u daljim procesima nabavke.

- **Generator zahteva za ponudu (RDO)** – kreira zahtev za ponudu za stavke definisane na kartici **Generator RDO**. Za više informacija pogledajte dokumentaciju o zahtevima za ponudu.

- **Poništi zahtev za ponudu (Rollback RDO)** – poništava i briše prethodno generisani zahtev za ponudu.

### 2.1 Podaci artikla

Ova kartica sadrži dodatne informativne podatke o artiklu. Vrednosti se automatski preuzimaju sa kartice artikla ili od preferiranog dobavljača, ali ih je moguće promeniti na nivou pojedinačne stavke.

- **Cenovnik** – prikazuje cenovnik iz kojeg je preuzeta cena artikla.

- **Dobavljač** – prikazuje preferiranog dobavljača definisanog na kartici artikla.

- **PDV** – poreska stopa povezana sa artiklom.

- **Marka** – oznaka robne marke artikla preuzeta sa kartice artikla ili iz cenovnika.

- **Valuta** – podrazumevana valuta definisana na kartici preferiranog dobavljača.

- **Kurs** – datum i kurs koji se koriste za obračun valuta.

- **Varijanta** – omogućava izbor jedne od definisanih varijanti artikla. Ako za pojedine varijante postoje različite cene ili popusti, oni će se automatski ažurirati nakon promene varijante.

- **Nalog** – ako je zahtev za nabavku nastao iz planiranja proizvodnje ili proizvodnog naloga, ovde se prikazuje povezani dokument.

- **Operater** – korisnik koji je evidentirao zahtev za nabavku.

- **Projekat** – omogućava povezivanje stavke sa projektom. Ako je zahtev kreiran iz naloga za nabavku povezanog sa projektom, projekat se automatski prenosi na stavku.

- **Tip prometa nabavke** – podrazumevani tip fakturisanja preuzet sa kartice artikla.

- **Prioritet potražnje** – prikazuje prioritet nabavke definisan u proizvodnom nalogu ili drugom izvornom dokumentu.

- **Beleške** – beleške vezane za pojedinačnu stavku artikla. Prenose se na sve dokumente nastale iz ovog zahteva.

- **Datum realizacije** – nakon kreiranja narudžbine dobavljača iz zahteva za nabavku ovde se upisuje datum realizacije stavke.

- **Odobreno** – oznaka koja pokazuje da li je stavka odobrena. Može se postaviti ručno ili korišćenjem funkcije **Odobri zahtev za nabavku**.

- **Datum odobrenja** – datum kada je stavka zahteva odobrena.

- **Od strane korisnika** – korisnik koji je izvršio odobrenje zahteva za nabavku.

### 2.2 Analitika

Ova kartica sadrži podatke vezane za analitičko računovodstvo.

Prikazuju se mesta troška i profitni centri na koje se raspoređuju vrednosti nabavljenih artikala.

Podatke je moguće:

- uneti ručno
- automatski preuzeti sa kartice dobavljača
- automatski preuzeti sa kartice artikla
- automatski preuzeti iz kontnog plana

### 2.3 Priloženi dokumenti

Na ovoj kartici prikazuju se podaci o dokumentima povezanim sa zahtevom za nabavku, uključujući:

- naziv dokumenta
- tip dokumenta
- beleške
- internu i eksternu referencu

Za detaljna uputstva o dodavanju priloga pogledajte dokumentaciju za funkcionalnost **Priloženi dokumenti**.

### 2.4 Generator zahteva za ponudu (RDO)

Na ovoj kartici prikazuju se preferirani dobavljači definisani na kartici izabranog artikla zajedno sa odgovarajućim cenovnicima i cenama.

Na osnovu tih podataka moguće je izabrati najpovoljnijeg dobavljača za slanje zahteva za ponudu. Alternativno, dobavljača je moguće izabrati ili uneti ručno.

Moguće je koristiti sledeće tipove primalaca zahteva:

1. **Dobavljač** – izbor postojećeg dobavljača iz šifarnika. Izborom ove opcije omogućava se unos podataka u polje *Naziv dobavljača*.

2. **Nomenklatura** – izbor unapred definisanog naziva i poslovnog subjekta. Izborom ove opcije omogućava se unos podataka u polja *Nomenklatura* i *Opis nomenklature*.

3. **Kontakt** – izbor CRM kontakta kojem će biti poslat zahtev za ponudu.

4. **Novi dobavljač** – omogućava unos dobavljača koji još nije evidentiran u sistemu. Izborom ove opcije omogućava se unos podataka u polje *Opis dobavljača*.

#### Podaci dostupni u tabeli

- **Šifra / Naziv / Barkod artikla dobavljača** – podaci kojima dobavljač identifikuje traženi artikal. Unos je opcion.

- **Jedinica mere** – predlaže se jedinica mere definisana za dobavljača na kartici artikla. Ako nije definisana, koristi se osnovna jedinica mere artikla.

- **Količina** – predlaže se prema ekonomskoj količini narudžbine definisanoj za dobavljača. Ako nije definisana, koristi se količina iz zahteva za nabavku.

- **Cena** – preuzima se iz cenovnika povezanog sa preferiranim dobavljačem. Ako je cena na zahtevu za nabavku ručno promenjena, moguće ju je dodatno izmeniti i u Generatoru RDO.

  Cena definisana u Generatoru RDO biće preneta na generisani zahtev za ponudu i biće označena kao ručno uneta cena.

- **Procenjeni datum isporuke** – datum do kojeg se očekuje isporuka robe.

- **PDV** – poreska stopa preuzeta sa kartice artikla. Vrednost je moguće ručno izmeniti.

- **Alternativna jedinica mere / Alternativna količina** – omogućava definisanje alternativne jedinice mere i količine koje će biti prenete na generisane dokumente.

- **Cena po alternativnoj jedinici mere** – cena definisana za alternativnu jedinicu mere. Sistem automatski množi cenu sa alternativnom količinom.

- **Cenovnik nabavke** – prikazuje cenovnik iz kojeg je preuzeta cena artikla.

- **Suspendovano** – oznaka se automatski uključuje nakon što je za stavku generisan zahtev za ponudu.

#### Generisanje zahteva za ponudu

Ako je na kartici prisutna bar jedna stavka, aktivira se funkcija **RDO generator** na alatnoj traci.

Pokretanjem ove funkcije sistem generiše zahtev za ponudu za sve označene stavke.

Nakon kreiranja dokument se može pregledati direktno iz zahteva za nabavku korišćenjem funkcije **Otvori zahtev za ponudu**.

#### Poništavanje generisanja

Ako je potrebno poništiti generisani zahtev za ponudu, koristi se funkcija **Poništi zahtev za ponudu (Rollback RDO)** koja briše prethodno kreirani zahtev za ponudu.