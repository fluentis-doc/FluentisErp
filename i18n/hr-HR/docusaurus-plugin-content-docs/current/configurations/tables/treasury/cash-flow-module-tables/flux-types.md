---
title: Tip tijeka
sidebar_position: 2
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju namjeravate izvršiti ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Ova tablica, koja je preduvjet za korištenje modula, omogućuje definiranje vrsta tijeka novčanog toka koje poduzeće želi omogućiti za simulacije.

Preporučuje se definirati sve predviđene vrste. Postupak *automatskog generiranja tijeka novca* omogućuje da se prilikom svakog pokretanja odredi koje će se od njih uzeti u obzir, a koje neće.

Šifra i opis vrste tijeka mogu se slobodno definirati prema potrebi, a zatim je potrebno odgovarajućim opcijama povezati vrstu s podacima kojima se može upravljati.

Predviđeni su sljedeći izvori podataka:

**Šifra:** šifra vrste tijeka.

**Opis:** opis vrste tijeka.

**Dospijeća plaćanja (otvorene stavke):** izvor podataka su otvorene stavke glavne knjige.

**Stanje glavne knjige:** ova vrsta tijeka omogućuje dohvat početne financijske raspoloživosti na temelju definiranih *vrsta financijskih konta*.

**Narudžbe kupaca/Narudžbe dobavljača:** narudžbe kupaca i dobavljača onih vrsta za koje je uključena opcija *Novčani tok*, a koje su ispisane i potvrđene, ali još nisu razdužene.

**Ulazni/prodajni računi:** ispisani i provjereni računi koji još nisu proknjiženi (ne uključuju predračune).

**Izvanbilančne stavke:** ručno unesena izvanbilančna dospijeća definirana u samom modulu tijeka novca putem obrasca *Izvanbilančna dospijeća*.

**Primatelji plaćanja (naknada):** naknade za stručne usluge koje još nisu proknjižene (ako su proknjižene, obuhvaćene su otvorenim stavkama).

**Primka/otpremnica:** otpremnice onih vrsta za koje je uključena opcija *Novčani tok*, a koje su ispisane i potvrđene, ali im još nije dodijeljena vrijednost (ako im je dodijeljena vrijednost, obuhvaćene su računima).

**Narudžbe i povrati od podizvođača:** narudžbe podizvođačima koje je potrebno razdužiti i povrati od podizvođača za koje računi još nisu izdani.

**Zahtjev nabave:** zahtjevi za nabavu.

**Planirani nalozi:** nalozi za proizvodnju s planiranim vanjskim fazama ili nalozi za proizvodnju za koje je predviđen zahtjev za nabavu.

**Vrijednosni papiri:** izdani vrijednosni papiri (i predani na naplatu, ovisno o postavci opcije *Upotrijebi u dospijećima u rasporedu*, dostupne u obrascu *Automatsko generiranje tijeka novca*).

**Predujmovi (avans):** kreirane liste predujmova po računima. Ako je za ovu vrstu uključena opcija „Upotrijebi u dospijećima u rasporedu” (u obrascu *Automatsko generiranje tijeka novca*), obrada tijeka novca dohvaća iznose proknjiženih lista za iznos predujma na bankovnom kontu te dospijeća u odgovarajućim datumima dospijeća. Kada se računi naplate (prilikom obrade novog tijeka novca), dospijeća se uklanjaju, a iznos na bankovnom kontu ažurira se za preostali dio koji još nije bio predujmljen, umanjen za eventualne naknade i kamate.

**Fakturiranje projekata:** svaki redak artikla u projektu može sadržavati plan fakturiranja koji se upotrebljava za automatsko kreiranje računa iz samog projekta (naredba *Upravljanje projektima > Procedure > Izrada prodajnog računa*).

Ovaj se postupak, primjerice, upotrebljava za periodične naknade predviđene projektom, a ne za fakturiranje intervencija.

Postupak obrade tijeka novca učitava plan fakturiranja kako bi kreirao simulirano dospijeće za svaku stavku za koju račun još nije izdan (takve stavke nakon izdavanja računa postaju dio tijeka računa).