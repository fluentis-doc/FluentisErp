---
title: Novo
sidebar_position: 2
---

Procedura **Automatsko otvaranje konta** može se koristiti kao alternativa ručnom unosu putem **[Generisanja knjiženja glavne knjige](/docs/finance-area/ledger-records/records/ledger-record)** za evidentiranje početnih salda na početku poslovnog perioda.

**Nakon prvog zatvaranja poslovnih knjiga, sva naredna otvaranja konta mogu se izvršavati direktno kroz proceduru zatvaranja konta.**

:::note NAPOMENA
Ovom procedurom evidentiraju se isključivo početna računovodstvena salda poslovnog perioda, a ne i otvorene računovodstvene stavke.
:::

**Datum otvaranja**: predstavlja **datum obrade** i nije povezan sa datumom knjiženja koji se unosi u odgovarajuće polje na dnu obrasca.

**Broj otvaranja**: automatski generisan redni broj.

**Opis**: omogućava unos opisa ili napomene vezane za otvaranje konta.

**Konto** i **Tip konta**: filteri za pretragu konta iz kontnog plana.

**Datum knjiženja** i **Datum obračuna**: obavezna polja koja će biti dodeljena knjiženju otvaranja.

**Broj**: dodeljuje se automatski nakon knjiženja.

**Šablon otvaranja konta** i **Opis knjiženja**: koriste se za kreiranje knjiženja u glavnoj knjizi.

Nakon unosa obaveznih podataka moguće je sačuvati podešavanja i učitati kompletnu listu podkonta.

Sledeći korak je unos početnih dugovnih ili potražnih salda po podkontima, kao i eventualnih početnih iznosa u stranoj valuti.

![](/img/it-it/finance-area/ledger-records/records/automatic-accounts-opening/new/image01.png)

*Primer (nije zasnovan na stvarnim podacima).*

Knjiženje početnog stanja moguće je izvršiti tek kada su ukupni dugovni i ukupni potražni iznosi jednaki. U suprotnom će prilikom pokretanja knjiženja biti prikazana poruka o grešci.

## Operativni saveti

Isto otvaranje konta može se više puta otvarati i dopunjavati, što je korisno kada postupak traje više dana.

Takođe je moguće kreirati više različitih otvaranja, na primer:

- jedno za aktivu;
- jedno za pasivu;
- posebno za kupce i dobavljače.

Procedura ne podržava funkciju vraćanja (rollback). Po potrebi se zapis otvaranja jednostavno briše, pri čemu će aplikacija zatražiti potvrdu brisanja.

Ako se nakon knjiženja izvrše izmene u detaljima otvaranja konta, dovoljno je ponovo pokrenuti funkciju **Kreiraj knjiženje otvaranja**. Program će prikazati upozorenje i, nakon potvrde, ažurirati postojeće računovodstveno knjiženje.

| Funkcija | Značenje |
| --- | --- |
| Sačuvaj | Čuva zaglavlje otvaranja konta nakon unosa opisa i šablona knjiženja. |
| Traži | Pretražuje listu konta koja će biti uključena u otvaranje, koristeći filtere konta i tipa konta. |
| Kreiraj knjiženje otvaranja | Kreira knjiženje otvaranja konta. |
| Otvori knjiženje otvaranja | Otvara kreirano knjiženje otvaranja konta. |
| Obriši detalj | Briše sadržaj polja izabranog reda. **PAŽNJA:** redovi koji predstavljaju konta ne mogu se obrisati; ukoliko ostanu prazni, neće biti uključeni u knjiženje otvaranja. |