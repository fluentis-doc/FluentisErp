---
title: Tipovi adresa
sidebar_position: 6
---

Tabela se otvara putem menija **Tabele > Opšta podešavanja > Tipovi adresa** i služi za slobodno definisanje različitih alternativnih adresa (na nivou šifre i opisa) koje se povezuju sa šifarnikom kontakata (dobavljač, kupac, banka ili agent).

Za unos zapisa potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Dostupne su unapred definisane oznake kojima se određuju svojstva koja se mogu koristiti u dodatnim automatizacijama unutar programa (neke su već dostupne u standardnoj verziji).

Sledeće automatizacije već su dostupne i spremne za upotrebu:

**E-pošta za fakture kupaca**: povezivanjem ove oznake sa tipom adrese koji se definiše i unosom takve adrese u šifarnik kontakata, u odeljak *Alternativne adrese*, adresa (ili više adresa) e-pošte uneta u odgovarajuće polje koristiće se u toku rada (promena statusa) za automatsko masovno slanje izlaznih faktura.

:::note[Napomena]
Ostale dostupne oznake povezane sa slanjem e-pošte mogu se povezati sa određenim dokumentom nakon odgovarajuće *konfiguracije*.
:::

**Zajednički vlasnici**: povezivanjem ove oznake definiše se tip adrese pogodan za unos matičnih podataka svakog suvlasnika u šifarniku, kako bi ti podaci kasnije mogli da se preuzmu prilikom izrade izlazne fakture.

**Koristi se u SEPA-i**: omogućava čuvanje alternativne adrese u šifarniku kontakata radi preuzimanja **naziva poverioca** i njegovog unosa u **nalog za prenos sredstava** (polje *Poverilac*), kao i u pripadajuću XML datoteku za izvoz na bankarske portale. Time se izbegavaju problemi povezani sa **proverom vlasnika računa**.

**Stalna poslovna jedinica**: oznaku je potrebno aktivirati za korišćenje alternativne adrese u šifarniku dobavljača kojom se označava stalna poslovna jedinica inostranog dobavljača u Italiji.

**Poreski zastupnik**: oznaku je potrebno aktivirati za korišćenje alternativne adrese u šifarniku dobavljača kojom se označava poreski zastupnik inostranog dobavljača u Italiji.

**Opšta lokacija**: nije povezana sa posebnom funkcionalnošću i preporučuje se za opšte alternativne adrese.