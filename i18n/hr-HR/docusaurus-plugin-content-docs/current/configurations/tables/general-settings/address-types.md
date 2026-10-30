---
title: Tipovi adrese
sidebar_position: 6
---

Tablica se otvara putem izbornika **Tablice > Opće postavke > Tipovi adrese** i služi za slobodno definiranje (na razini šifre i opisa) različitih alternativnih adresa koje se povezuju sa šifarnikom kontakata (dobavljač, kupac, banka ili agent).

Za unos zapisa potrebno je kliknuti prvi prazan redak tablice ili pritisnuti gumb **Novo**.

Dostupne su unaprijed definirane zastavice kojima se određuju svojstva koja se mogu koristiti u dodatnim automatizacijama unutar programa (neke su već dostupne u standardnoj verziji).

Sljedeće su automatizacije već dostupne i spremne za korištenje:

**E-pošta za račune kupaca**: povezivanjem ove zastavice s vrstom adrese koja se definira te unosom takve adrese u šifarnik kontakata, u odjeljak *Alternativne adrese*, adresa (ili više adresa) e-pošte unesena u odgovarajuće polje koristit će se u tijeku rada (promjena statusa) za automatsko masovno slanje izlaznih računa.

:::note[Napomena]
Ostale dostupne zastavice povezane sa slanjem e-pošte mogu se povezati s određenim dokumentom nakon odgovarajuće *konfiguracije*.
:::

**Zajednički nositelji**: povezivanjem ove zastavice definira se vrsta adrese prikladna za unos matičnih podataka svakog suvlasnika u šifarniku, kako bi se ti podaci kasnije mogli dohvatiti prilikom izrade izlaznog računa.

**Korišteno se u SEPA-i**: omogućuje pohranu alternativne adrese u šifarniku kontakata radi dohvaćanja **naziva vjerovnika** i njegova unosa u **nalog za prijenos sredstava** (polje *Vjerovnik*) te u pripadajuću XML datoteku za izvoz na bankovne portale. Time se izbjegavaju problemi povezani s **provjerom vlasnika računa**.

**Stalna poslovna jedinica**: zastavicu je potrebno aktivirati za korištenje alternativne adrese u šifarniku dobavljača, kojom se označava stalna poslovna jedinica inozemnog dobavljača u Italiji.

**Porezni zastupnik**: zastavicu je potrebno aktivirati za korištenje alternativne adrese u šifarniku dobavljača, kojom se označava porezni zastupnik inozemnog dobavljača u Italiji.

**Opća lokacija**: nije povezana s posebnom funkcionalnošću i preporučuje se za opće alternativne adrese.