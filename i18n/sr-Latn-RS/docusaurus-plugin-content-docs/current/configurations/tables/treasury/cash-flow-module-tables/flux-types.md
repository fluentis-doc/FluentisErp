---
title: Tip toka
sidebar_position: 2
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju nameravate da izvršite ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Ova tabela, koja je preduslov za korišćenje modula, omogućava definisanje tipova novčanog toka koje preduzeće želi da omogući za simulacije.

Preporučuje se definisanje svih predviđenih tipova. Postupak *automatskog generisanja novčanog toka* omogućava da se prilikom svakog pokretanja odredi koji će se od njih uzeti u obzir, a koji neće.

Šifra i opis tipa toka mogu se slobodno definisati prema potrebi, a zatim je potrebno odgovarajućim opcijama povezati tip sa podacima kojima se može upravljati.

Predviđeni su sledeći izvori podataka:

**Šifra:** šifra tipa toka.

**Opis:** opis tipa toka.

**Dospelost plaćanja (otvorene stavke):** izvor podataka su otvorene stavke glavne knjige.

**Stanje glavne knjige:** ovaj tip toka omogućava preuzimanje početne finansijske raspoloživosti na osnovu definisanih *tipova finansijskih konta*.

**Narudžbine kupaca/Narudžbine dobavljača:** narudžbine kupaca i dobavljača onih tipova za koje je uključena opcija *Novčani tok*, a koje su odštampane i potvrđene, ali još nisu razdužene.

**Ulazne/prodajne fakture:** odštampane i proverene fakture koje još nisu proknjižene (ne uključuju predračune).

**Vanbilansne stavke:** ručno uneta vanbilansna dospeća definisana u samom modulu novčanog toka putem obrasca *Vanbilansna dospeća*.

**Primaoci plaćanja (naknada):** naknade za stručne usluge koje još nisu proknjižene (ako su proknjižene, obuhvaćene su otvorenim stavkama).

**Primka/otpremnica:** otpremnice onih tipova za koje je uključena opcija *Novčani tok*, a koje su odštampane i potvrđene, ali im još nije dodeljena vrednost (ako im je dodeljena vrednost, obuhvaćene su fakturama).

**Narudžbine i povrati od podizvođača:** narudžbine podizvođačima koje je potrebno razdužiti i povrati od podizvođača za koje fakture još nisu izdate.

**Zahtev za nabavku:** zahtevi za nabavku.

**Planirani nalozi:** nalozi za proizvodnju sa planiranim eksternim fazama ili nalozi za proizvodnju za koje je predviđen zahtev za nabavku.

**Hartije od vrednosti:** izdate hartije od vrednosti (i predate na naplatu, u zavisnosti od podešavanja opcije *Koristi u dospećima u rasporedu*, dostupne u obrascu *Automatsko generisanje novčanog toka*).

**Avansi:** kreirane liste avansa po fakturama. Ako je za ovaj tip uključena opcija „Koristi u dospećima u rasporedu” (u obrascu *Automatsko generisanje novčanog toka*), obrada novčanog toka preuzima iznose proknjiženih lista za iznos avansa na bankarskom kontu, kao i dospeća sa odgovarajućim datumima dospeća. Kada se fakture naplate (prilikom obrade novog novčanog toka), dospeća se uklanjaju, a iznos na bankarskom kontu ažurira se za preostali deo koji još nije bio avansiran, umanjen za eventualne naknade i kamate.

**Fakturisanje projekata:** svaki red artikla u projektu može sadržati plan fakturisanja koji se koristi za automatsko kreiranje faktura iz samog projekta (naredba *Upravljanje projektima > Procedure > Izrada prodajne fakture*).

Ovaj postupak se, na primer, koristi za periodične naknade predviđene projektom, a ne za fakturisanje intervencija.

Postupak obrade novčanog toka učitava plan fakturisanja kako bi kreirao simulirano dospeće za svaku stavku za koju faktura još nije izdata (takve stavke nakon izdavanja fakture postaju deo toka faktura).