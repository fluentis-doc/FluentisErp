---
title: Razduženje skladišta na osnovu računa
sidebar_position: 2
---

Procedura se otvara putem putanje **Prodaja > Izlazni računi > Procedure > Razduženje skladišta na osnovu računa**.

Ova procedura omogućava izvršavanje/ponovno izvršavanje operacija automatskog razduženja artikala iz skladišta na osnovu računa.

:::info Zapamti
Ako dokument sadrži **fiktivne artikle**, procedura će uzeti u obzir **način nabavke** definisan u **MRP parametrima** artikla:
- artikli tipa **Nabavka** neće biti uključeni u skladišnu registraciju
- artikli tipa **Proizvodnja** ili **Radni nalog** biće evidentirani u skladištu koristeći prvi nivo sastavnice (BOM)
:::

### Filter

Na ovoj kartici korisnik ima mogućnost pretrage i prenosa računa koji imaju postavljenu oznaku *Odštampano*.

**Datum skladišne evidencije**: omogućava definisanje datuma razduženja iz skladišta, osim ako je uključena opcija *Kreiraj zapis sa datumom dokumenta* u *Parametri izlaznih računa > kartica Razduženje*.

*Posebna dugmad*:

> **Traži**: omogućava pretragu računa za razduženje.  
> **Razduženje**: omogućava izvršavanje razduženja odabranih računa iz skladišta, na osnovu algoritama razduženja i parametara postavljenih na sledećoj kartici *Parametri*.

### Parametri

Na ovom ekranu korisnik može definisati način obrade izuzetaka za stavke artikala.

U slučaju da stavke računa nemaju definisano skladište i razlog za skladišno knjiženje, dostupne su sledeće opcije:

- **Ne razdužuj/zadužuj kompletnu otpremnicu/prijemnicu**: ne dozvoljava delimično razduženje dokumenta;

- **Ignoriši stavke bez skladišta i šablona**: omogućava delimično razduženje dokumenta;

- **Prihvati kao skladište i šablon sledeće podatke**: za sve artikle koji nemaju definisano skladište i razlog u odabranim računima iz filtera, automatski postavlja unesene podatke u polja: *Skladište* i *Razlog* (obezbeđuje potpuno razduženje dokumenta).

*Posebna dugmad*

> **Sačuvaj parametre**: omogućava čuvanje podešenih parametara za evidenciju.

Nakon odabira računa (sa kartice *Filter*) i podešavanja parametara, računi se mogu evidentirati pomoću dugmeta *Razduženje*.

### Sažetak

Na ovoj kartici korisnik ima mogućnost pretrage, pregleda i poništavanja izvršenih skladišnih razduženja koja ispunjavaju određene uslove za brisanje skladišnih zapisa.

Podaci u donjim tabelama, **Računi** i **Zapis**, odgovaraju odabranoj evidenciji razduženja u gornjoj tabeli (nakon filtriranja podataka). Takođe, u ove dve tabele postoji mogućnost pregleda računa i odgovarajućeg skladišnog zapisa (dvostrukim klikom na odabrani red).

*Posebna dugmad*:

> **Pretraga razduženih računa**: omogućava pretragu evidentiranih računa. Rezultat ove procedure prikazuje se u tabeli rezultata.  
> **Obriši razduženje**: omogućava potpuno brisanje odabranih operacija razduženja iz tabele rezultata.  
> **Povrati račune**: omogućava brisanje odabranih operacija razduženja iz prikaza rezultata za trenutno odabrani račun u detaljima tabele.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MWEUxnmD1hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>