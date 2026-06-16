---
title: Izvoz
sidebar_position: 2
---

Iz ovog obrasca moguće je izvesti podatke za DocFinance korišćenjem tri različite opcije.

**Izvoz šifarnika (nomenklature)**: aktiviranjem ove opcije sistem će kreirati datoteku za usklađivanje kontnog plana i matičnih podataka. Nakon aktivacije postaju dostupna povezana polja za unos naziva datoteke i zajedničke putanje za kreiranje datoteke. Oba podatka se čuvaju kako bi bila automatski predložena prilikom narednog izvoza.

Polje **Datum poslednjeg izvoza** omogućava definisanje referentnog datuma za izvoz samo izmenjenih ili novo dodatih podataka u kontnom planu. Brisanjem ovog datuma moguće je kreirati kompletnu datoteku sa svim postavkama kontnog plana i matičnih podataka. Ovo može značajno uticati na vreme potrebno za usklađivanje dva sistema.

**Automatsko kreiranje novčanog toka**: aktiviranjem ove opcije program će pre izvoza podataka automatski kreirati novi novčani tok u odgovarajućem modulu. Kreiranje se vrši korišćenjem podrazumevanih parametara procedure **Automatsko kreiranje novčanog toka**. Za dodatne informacije pogledajte odgovarajuću dokumentaciju.

**Izvoz novčanog toka**: ovom opcijom sistem kreira datoteku koja sadrži finansijske tokove, računovodstvene stavke i projekcije. Kada je opcija aktivna, dostupna je i opcija **Odstupanje po nomenklaturi/tipu**, kao i polja za unos naziva datoteke i zajedničke putanje za kreiranje datoteke (oba podatka se čuvaju za naredne izvoze).

Detaljno:
- Ako opcija **Odstupanje po nomenklaturi/tipu** nije aktivna, odstupanje za dobavljače određuje se prema vrsti plaćanja, a za kupce prema podacima iz šifarnika.
- Ako je opcija aktivna, odstupanje se preuzima iz šifarnika kupaca/dobavljača. Ako tamo nije definisano, sistem koristi podrazumevane kodove:
  - `01` za Ri.Ba. instrumente,
  - `01`, `02`, `03` ili `04` u zavisnosti od toga da li je rok dospeća istekao, kraći od 30 dana, između 30 i 90 dana ili duži od 90 dana.

Korisnik koji kreira datoteke mora biti definisan u donjem delu obrasca i mora imati pristup deljenim direktorijumima koji su određeni za kreiranje datoteka.

| Funkcija | Značenje |
| --- | --- |
| Sačuvaj | Čuva podešavanja koja će biti automatski predložena prilikom sledećeg otvaranja obrasca. |
| Izvezi | Kreira datoteke prema parametrima definisanim u obrascu. |