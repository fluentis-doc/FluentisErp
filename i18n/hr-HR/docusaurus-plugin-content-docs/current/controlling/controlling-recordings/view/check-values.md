---
title: Vrijednosti kontrole
sidebar_position: 3
---

Ovak obrazac namijenjen je uspostavi usklađenja između računovodstvenih vrijednosti i vrijednosti u kontrolingu te je izuzetno korisno za praćenje atribucija i obračunatih konačnih usklađenja koje sustav izračunava u skladu s definiranim metodama.

Prije pokretanja pretrage podataka potrebno je postaviti sljedeća polja u zaglavlju maske:
- ***Područje*** podataka koje se pretražuje (obavezno)
- ***Dimenzija*** podataka koja se pretražuje (opcionalno)
- ***Godina***, (obavezno)
- Raspon ***perioda (od – do)***, (opcionalno)


Podaci su organizirani u pet odvojenih kartica:

***Izvorne vrijednosti:*** za atribuciju – prikazuje računovodstvene transakcije povezane s centrom označenim kao *konta koja se trebaju dodijeliti*, što se odnosi na troškove koje opće računovodstvo ne može izravno dodijeliti. Posljednji stupac *Iznos* omogućuje provjeru je li atribucija ispravno zatvorena, bez otvorenih stavki.

***Atributi izvora vrijednosti:*** strukturalno sličan prethodnoj kartici, ali prikazuje stvarno dodijeljene podatke od centra zaduženog za ponovu dodjelu troškova prema centrima primateljima. I ovdje posljednji stupac Iznos služi za provjeru je li atribucija ispravno zatvorena, bez otvorenih podataka.

**Revidirane vrijednosti:** prikazuje odnose između centara upravljane putem nositelja troškova. Podaci su grupirani prema svakom nositelju troškova, a unutar svakog centra prikazuje se povezani konto koji je bio predmetom preraspodjele. Posljednji stupac Razlika omogućuje provjeru je li preraspodjela ispravno zatvorena, bez otvorenih podataka na razini nositelja troškova.

**Vrijednosti projekta/naloga:** ova kartica prikazuje preraspodjele unutar dimenzije Projekti/Nalozi, koje su također izvršene putem nositelja troškova.

**Vrijednosti podešavanja:** prikazuje razlike između računovodstvenih podataka i podataka u kontrolingu, grupirajući konta prema *skupini konačnog usklađenja* definiranoj u kontnom planu. Ako postoje vrijednosti u stupcu *Razlika* unutar skupina konta koje ne
predviđaju posebnu izvanračunovodstvenu obradu, to ukazuje na dodjelu vrijednosti putem izvanračunovodstvenih zapisa, što zahtijeva dodatnu analizu kako bi se razumjelo podrijetlo podataka i eventualno prilagodio model analize.


:::tip PRIMJER
Ova posljednja kartica je ključna je za provjeru konta, poput naknada nadzornog odbora, koje se u računovodstvu evidentiraju naknadno i stoga podliježu prethodnoj izvanračunovodstvenoj procjeni u kontrolingu. Na taj način omogućuje se privremeno/godišnje usklađenje unutar procedure  **Obrade perioda** gdje se u sekciji *Obrada računovodstvenih podataka*, nalazi polje **Vremena uravnoteženja** koje omogućuje odabir *privmrene* ili *godišnje* logike obračuna.
:::
