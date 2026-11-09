---
title: Vrste narudžbi i promjene statusa
sidebar_position: 6
---

Status **Primljeno** označava narudžbu koju je Fluentis zaprimio bez pogrešaka, ali još nije unesena kao narudžba kupca.

Narudžba se može zaprimiti i sa statusom „S pogreškom”, što znači da je narudžba zaprimljena i unesena, ali sadržava neispravne podatke, primjerice cijenu retka 0, ili podatke koji nedostaju, kao što je NSO šifra kupca. Korisnik stoga mora ispraviti takve podatke prije nego što se mogu izvršiti daljnje promjene statusa.

Iz statusa Primljeno mogu se izvršiti dvije različite naredbe:

- **Uvezi narudžbu** – mijenja status narudžbe u *Uneseno*, odnosno generira narudžbu u dokumentima Fluentisa.
- **Poništi dokument** – sprječava izradu narudžbe u Fluentisu i mijenja njezin status u *Poništeno*, jer ju je dobavljač odbio.

## Jednostavno naručivanje

U procesu jednostavnog naručivanja, u kojem samo kupac šalje narudžbe, a dobavljač ne može odgovoriti putem sustava, već to mora učiniti drugim kanalima (e-pošta, telefaks itd.), iz statusa „Uneseno” moguće je prijeći u sljedeće statuse:

- *Čeka se opoziv od kupca* – narudžba se stavlja u stanje čekanja na opoziv od strane kupca, koji je vjerojatno prethodno obavijestio o opozivu drugim kanalima (e-pošta, telefon itd.).
- *Čeka se zamjena od kupca* – narudžba se stavlja u stanje čekanja na primitak zamjenske narudžbe od strane kupca, koji je vjerojatno prethodno obavijestio o zamjeni drugim kanalima (e-pošta, telefon itd.).

Kupac može zatražiti zamjenu narudžbe.

U tom slučaju izvorna narudžba prelazi u status „Zatražena zamjena”. Iz tog statusa moguće su dvije promjene statusa:

- *Vrati u status Uneseno* – ako se zamjena ne prihvaća i narudžba se želi vratiti u status „Uneseno” kako bi se mogla razdužiti s izvornim vrijednostima.
- *Zamjena od kupca* – ako se zamjena narudžbe želi prihvatiti.

Prilikom primitka zamjenske narudžbe generirat će se dodatni redak sa statusom *Čeka se prihvaćanje*, koji se odnosi na novu narudžbu.

Ako se prihvati zamjena početne narudžbe novom narudžbom, redak sa statusom *Čeka se prihvaćanje* prelazi u status *Uneseno*, dok redak izvorne narudžbe sa statusom *Zatražena zamjena* prelazi u status *Zamijenjeno od strane kupca*.

## Potpuno naručivanje

U procesu potpunog naručivanja, u kojem kupac i dobavljač mogu međusobno slati narudžbe putem sustava NSO, iz statusa „Uneseno” moguće je prijeći u sljedeće statuse:

- *Slanje odgovora o odbijanju* – šalje kupcu obavijest o neprihvaćanju narudžbe, pri čemu narudžba prelazi u status *Otkazano od strane dobavljača*.
- *Izrada odgovora s izmjenama* – omogućuje izmjenu dokumenta u pogledu šifre artikla, količine i cijene pojedinih redaka te njegovo slanje kupcu, koji zatim može prihvatiti ili odbiti tako izmijenjenu narudžbu. Prikazat će se poruka upozorenja o zatvaranju izvorne narudžbe i izradi nove narudžbe na kojoj će se provoditi izmjene.

Nakon što se izmjene narudžbe provedu, ona se može poslati promjenom statusa *U odgovoru s izmjenama*. Nova narudžba s izmjenama prelazi u status „Čeka se očitovanje”. Osim toga, izradit će se novi redak obavijesti.

- *Slanje potvrde o primitku* – šalje kupcu jednostavnu obavijest o primitku narudžbe, pri čemu narudžba prelazi u status *Primljeno od dobavljača*.

## Unaprijed dogovoreno naručivanje

U procesu unaprijed dogovorenog naručivanja tijek započinje od strane dobavljača, koji izdaje NSO narudžbu u skladu s prethodnim dogovorom s kupcem putem drugih kanala (e-pošta, telefaks itd.).

Početni status unaprijed dogovorene narudžbe jest *Izrađeno – unaprijed dogovoreno*. Iz tog statusa može se izvršiti promjena statusa *Kontrola unaprijed dogovorene narudžbe*, kojom narudžba prelazi u status *Provjereno*.

Iz statusa *Provjereno* moguće su dvije promjene statusa:

- *Vrati u status Unaprijed dogovoreno* – vraća narudžbu u status *Izrađeno – unaprijed dogovoreno*.
- *Generiranje unaprijed dogovorene narudžbe* – generira datoteku unaprijed dogovorene narudžbe i mijenja njezin status u *Generirano*. Iz tog statusa moguće su još dvije promjene statusa:
    - *Slanje unaprijed dogovorene narudžbe* – mijenja status narudžbe u *Za slanje*, odnosno narudžba se šalje kupcu i spremna je za fizičko razduživanje.
    - *Vrati u status Provjereno* – vraća narudžbu u status *Provjereno*.