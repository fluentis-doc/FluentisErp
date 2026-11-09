---
title: Tipovi narudžbina i promene statusa
sidebar_position: 6
---

Status **Primljeno** označava narudžbinu koju je Fluentis primio bez grešaka, ali koja još nije uneta kao narudžbina kupca.

Narudžbina se može primiti i sa statusom „Sa greškom”, što znači da je narudžbina primljena i uneta, ali sadrži neispravne podatke, na primer cenu reda 0, ili podatke koji nedostaju, kao što je NSO šifra kupca. Korisnik zato mora da ispravi takve podatke pre nego što se mogu izvršiti dalje promene statusa.

Iz statusa Primljeno mogu se izvršiti dve različite naredbe:

- **Uvezi narudžbinu** – menja status narudžbine u *Uneto*, odnosno generiše narudžbinu u dokumentima Fluentisa.
- **Poništi dokument** – sprečava kreiranje narudžbine u Fluentisu i menja njen status u *Poništeno*, jer ju je dobavljač odbio.

## Jednostavno naručivanje

U procesu jednostavnog naručivanja, u kojem samo kupac šalje narudžbine, a dobavljač ne može da odgovori putem sistema, već to mora da učini drugim kanalima (e-pošta, telefaks itd.), iz statusa „Uneto” moguće je preći u sledeće statuse:

- *Čeka se opoziv od kupca* – narudžbina se stavlja u stanje čekanja na opoziv od strane kupca, koji je verovatno prethodno obavestio o opozivu drugim kanalima (e-pošta, telefon itd.).
- *Čeka se zamena od kupca* – narudžbina se stavlja u stanje čekanja na prijem zamenske narudžbine od strane kupca, koji je verovatno prethodno obavestio o zameni drugim kanalima (e-pošta, telefon itd.).

Kupac može zatražiti zamenu narudžbine.

U tom slučaju izvorna narudžbina prelazi u status „Zatražena zamena”. Iz tog statusa moguće su dve promene statusa:

- *Vrati u status Uneto* – ako se zamena ne prihvata i narudžbina želi da se vrati u status „Uneto” kako bi mogla da se razduži sa izvornim vrednostima.
- *Zamena od kupca* – ako se zamena narudžbine želi prihvatiti.

Prilikom prijema zamenske narudžbine generisaće se dodatni red sa statusom *Čeka se prihvatanje*, koji se odnosi na novu narudžbinu.

Ako se prihvati zamena početne narudžbine novom narudžbinom, red sa statusom *Čeka se prihvatanje* prelazi u status *Uneto*, dok red izvorne narudžbine sa statusom *Zatražena zamena* prelazi u status *Zamenjeno od strane kupca*.

## Potpuno naručivanje

U procesu potpunog naručivanja, u kojem kupac i dobavljač mogu međusobno da šalju narudžbine putem sistema NSO, iz statusa „Uneto” moguće je preći u sledeće statuse:

- *Slanje odgovora o odbijanju* – šalje kupcu obaveštenje o neprihvatanju narudžbine, pri čemu narudžbina prelazi u status *Otkazano od strane dobavljača*.
- *Kreiranje odgovora sa izmenama* – omogućava izmenu dokumenta u pogledu šifre artikla, količine i cene pojedinačnih redova, kao i njegovo slanje kupcu, koji zatim može da prihvati ili odbije tako izmenjenu narudžbinu. Prikazaće se poruka upozorenja o zatvaranju izvorne narudžbine i kreiranju nove narudžbine na kojoj će se sprovoditi izmene.

Nakon što se izmene narudžbine sprovedu, ona se može poslati promenom statusa *U odgovoru sa izmenama*. Nova narudžbina sa izmenama prelazi u status „Čeka se izjašnjenje”. Pored toga, kreiraće se novi red obaveštenja.

- *Slanje potvrde o prijemu* – šalje kupcu jednostavno obaveštenje o prijemu narudžbine, pri čemu narudžbina prelazi u status *Primljeno od dobavljača*.

## Unapred dogovoreno naručivanje

U procesu unapred dogovorenog naručivanja tok započinje dobavljač, koji izdaje NSO narudžbinu u skladu sa prethodnim dogovorom sa kupcem putem drugih kanala (e-pošta, telefaks itd.).

Početni status unapred dogovorene narudžbine je *Kreirano – unapred dogovoreno*. Iz tog statusa može se izvršiti promena statusa *Kontrola unapred dogovorene narudžbine*, kojom narudžbina prelazi u status *Provereno*.

Iz statusa *Provereno* moguće su dve promene statusa:

- *Vrati u status Unapred dogovoreno* – vraća narudžbinu u status *Kreirano – unapred dogovoreno*.
- *Generisanje unapred dogovorene narudžbine* – generiše datoteku unapred dogovorene narudžbine i menja njen status u *Generisano*. Iz tog statusa moguće su još dve promene statusa:
  - *Slanje unapred dogovorene narudžbine* – menja status narudžbine u *Za slanje*, odnosno narudžbina se šalje kupcu i spremna je za fizičko razduživanje.
  - *Vrati u status Provereno* – vraća narudžbinu u status *Provereno*.