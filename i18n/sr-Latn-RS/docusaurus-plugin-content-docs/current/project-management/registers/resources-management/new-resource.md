---
title: Novi resurs
sidebar_position: 2
---

U ovom obrascu unose se svi podaci o novom **resursu**.

**Šifra/Opis**: označava šifru resursa i pripadajući opis.

**Vrsta resursa**: označava vrstu resursa, najčešće **Ljudski** ili **Materijalni**.

**Zaposleni**: omogućava povezivanje resursa sa zaposlenim.

**Jedinični trošak / Dostupni mesečni sati**: prikazuje trošak po jedinici rada zaposlenog i njegovu mesečnu raspoloživost.

**Operater**: omogućava povezivanje operatera.

**Konto**: omogućava povezivanje resursa sa spoljnim saradnikom.

**Artikal**: omogućava povezivanje resursa sa materijalnim artiklom.

**Prethodna šifra osnovnog sredstva**: omogućava povezivanje resursa sa osnovnim sredstvom.

**Kompanija**: omogućava povezivanje kompanije.

**Datum isteka važenja**: omogućava definisanje datuma završetka saradnje.

**Beleške**: sadrži proizvoljno unete beleške.

Obrazac sadrži i posebne kartice:

### Kartica Kalendar

Na ovoj kartici moguće je povezati određeni [Kalendar](/docs/project-management/registers/calendars-management/calendars/) sa resursom.

Klikom na dugme ![](/img/neutral/common/detail-propose.png) **Predloži detalje** na alatnoj traci moguće je upravljati **Radnim danima**. U prozoru koji se otvori moguće je isključiti određene radne dane ili označiti slobodan dan. Rezultati će biti prikazani u tabeli **Radni dani**, pri čemu će se uzeti u obzir prethodno definisane radne smene za resurs.

U Fluentisu je moguće definisati trošak resursa koji će se koristiti za obračun troškova na redu projekta i prilikom obrade **Stanja napretka projekta (SAL)**.

Trošak se može podesiti direktno u šifarniku resursa kao jedinstvena vrednost koja važi u svim slučajevima ili se može razlikovati prema sledećim kategorijama:

- **Praznici**: koristi se za dane definisane u kalendaru praznika.
- **Prekovremeni rad**: koristi se za radne dane u kojima je prekoračen dnevni fond sati.
- **Noćni rad**: koristi se za radne dane čija je smena označena kao **noćna**.
- **Noćni prekovremeni rad**: koristi se za radne dane čija je smena označena kao **noćna** i u kojima je prekoračeno radno vreme ili dnevni fond sati.
- **Alternativna smena**: koristi se kada resurs radi u dve različite smene, a jedna od njih treba da se obračunava po drugačijoj tarifi.

Za jednu od ovih stavki moguće je uključiti oznaku **Podrazumevani trošak za neradni dan**. Ova oznaka koristi se u svim slučajevima kada dan aktivnosti ne odgovara nijednom danu iz kalendara praznika niti kalendara radnih dana resursa.

:::note[Primer]
Subota koja nije definisana ni kao praznik ni kao radni dan u kalendaru resursa može se podesiti ili kao praznik ili kao prekovremeni rad.

Prilikom obračuna troška primeniće se trošak označen kao **podrazumevani**.
:::