---
title: Knjiženje plaćanja dobavljača
sidebar_position: 1
---

Ovaj obrazac nalazi se na putanji **Riznica > Plaćanja dobavljačima > Knjiženja > Knjiženje plaćanja dobavljača**.

Iz ovog obrasca moguće je knjižiti plaćanja koja su prethodno unesena u platne naloge (liste za plaćanje).

Alternativno, može se koristiti integrisana procedura [**Automatsko kreiranje plaćanja dobavljačima**](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), koja istovremeno generiše platni nalog i knjiži plaćanja.

## Kako knjižiti plaćanja

1. U gornjem delu obrasca koriste se filteri za pronalaženje plaćanja koja su kreirana, ali još nisu proknjižena. Klikom na dugme **Pretraži** prikazuju se sve stavke plaćanja iz različitih platnih naloga, koje se mogu knjižiti pojedinačno ili grupno. U praksi se najčešće koristi filtriranje po referenci platnog naloga i grupno knjiženje svih njegovih stavki.

2. U donjem delu obrasca unose se parametri za knjiženje:
   - **Tip temeljnice**
   - **Datum knjiženja**
   - **Datum obračunskog perioda**

   Proširivanjem dodatne sekcije moguće je izabrati i **kriterijum grupisanja** za knjiženje.

   Podrazumevana opcija **Grupisanje po banci** omogućava kreiranje jednog knjiženja za svaki bankovni račun sa kojeg se vrši plaćanje, što olakšava kasnije usklađivanje sa bankovnim izvodima.

   Dostupne su i sledeće opcije:
   - **Grupisanje po analitičkom kontu (dobavljaču)**,
   - **Bez grupisanja**, gde se svaka uplata knjiži zasebno.

   **Konto za evidentiranje aktivnih i pasivnih razlika** unetih u platnom nalogu automatski se predlaže na osnovu konta **vanrednih prihoda** definisanog u parametrima glavne knjige.

   Polja **Datum dokumenta** i **Broj dokumenta** nisu obavezna i mogu se koristiti kao referenca u zaglavlju knjiženja (na primer broj i datum platnog naloga).

   Opcija **Zatvaranje otvorene stavke** (podrazumevano uključena) omogućava automatsko zatvaranje odgovarajućih stavki u evidenciji dospeća. Ne preporučuje se njeno isključivanje.

   Ako šema knjiženja podržava upravljanje bankarskim datumom valute, a u registru banaka je definisan broj dana za njegov obračun, polje će biti automatski popunjeno tokom knjiženja.

3. Kliknite na dugme **Knjiženje** kako biste pokrenuli postupak.

## Kartica Povrat knjiženja (Prethodna knjiženja)

Kartica omogućava pregled izvršenih knjiženja, kao i njihovo delimično ili potpuno poništavanje.

Dvostrukim klikom na zapis moguće je otvoriti povezano knjiženje.

Poništavanje je moguće samo ako je obračunski period i dalje otvoren za izmene (nije izvršeno zaključivanje glavne knjige niti štampanje dnevnika knjiženja).

### Specifična dugmad

> **Pretraži**: Prikazuje listu izvršenih knjiženja.

> **Poništi knjiženje**: Poništava kompletno izabrano knjiženje.

> **Poništi temeljnicu**: Poništava pojedinačna označena knjiženja.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>