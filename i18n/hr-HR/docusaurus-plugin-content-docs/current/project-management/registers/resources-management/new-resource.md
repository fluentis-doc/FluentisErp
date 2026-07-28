---
title: Novi resurs
sidebar_position: 2
---

U ovom obrascu unose se svi podaci o novom **resursu**.

**Šifra/Opis**: označava šifru resursa i pripadajući opis.

**Vrsta resursa**: označava vrstu resursa, najčešće **Ljudski** ili **Materijalni**.

**Zaposlenik**: omogućuje povezivanje resursa sa zaposlenikom.

**Jedinični trošak / Dostupni mjesečni sati**: prikazuje trošak po jedinici rada zaposlenika i njegovu mjesečnu raspoloživost.

**Operater**: omogućuje povezivanje operatera.

**Konto**: omogućuje povezivanje resursa s vanjskim suradnikom.

**Artikl**: omogućuje povezivanje resursa s materijalnim artiklom.

**Prethodna šifra dugotrajne imovine**: omogućuje povezivanje resursa s dugotrajnom imovinom.

**Tvrtka**: omogućuje povezivanje tvrtke.

**Datum kraja valjanosti**: omogućuje definiranje datuma završetka suradnje.

**Napomene**: sadrži proizvoljno unesene napomene.

Obrazac sadrži i posebne kartice:

### Kartica Kalendar

Na ovoj kartici moguće je povezati određeni [Kalendar](/docs/project-management/registers/calendars-management/calendars/) s resursom.

Klikom na gumb ![](/img/neutral/common/detail-propose.png) **Predloži detalje** na alatnoj traci moguće je upravljati **Radnim danima**. U prozoru koji se otvori moguće je isključiti određene radne dane ili označiti slobodan dan. Rezultati će biti prikazani u tablici **Radni dani**, pri čemu će se uzeti u obzir prethodno definirane radne smjene za resurs.

U Fluentisu je moguće definirati trošak resursa koji će se koristiti za izračun troškova na retku projekta i pri obradi **Stanja napretka projekta (SAL)**.

Trošak se može postaviti izravno u šifarniku resursa kao jedinstvena vrijednost koja vrijedi u svim slučajevima ili se može razlikovati prema sljedećim kategorijama:

- **Blagdani**: koristi se za dane definirane u kalendaru blagdana.
- **Prekovremeni rad**: koristi se za radne dane u kojima je premašen dnevni fond sati.
- **Noćni rad**: koristi se za radne dane čija je smjena označena kao **noćna**.
- **Noćni prekovremeni rad**: koristi se za radne dane čija je smjena označena kao **noćna** i u kojima je premašeno radno vrijeme ili dnevni fond sati.
- **Alternativna smjena**: koristi se kada resurs radi u dvije različite smjene, a jedna se želi obračunavati po drugačijoj tarifi.

Za jednu od ovih stavki moguće je uključiti oznaku **Zadani trošak za neradni dan**. Ova se oznaka koristi u svim slučajevima kada dan aktivnosti ne odgovara nijednom danu iz kalendara blagdana niti kalendara radnih dana resursa.

:::note[Primjer]
Subota koja nije definirana ni kao blagdan ni kao radni dan u kalendaru resursa može se podesiti ili kao blagdan ili kao prekovremeni rad.

Prilikom izračuna troška primijenit će se trošak označen kao **zadani**.
:::