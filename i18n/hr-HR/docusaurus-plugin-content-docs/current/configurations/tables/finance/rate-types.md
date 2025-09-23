---
title: Tipovi kamatnih stopa
sidebar_position: 28
---

Definicija ove tablice omogućuje kodificiranje i postavljanje različitih vrsta kamatnih stopa koje se upravljaju u aktivnom poduzeću.

 

### Gornja mreža

**Šifra**: identifikacijska šifra kamatne stope.

**Opis**: opis kamatne stope.

**Od datuma dokumenta**: datum dokumenta od kojeg se obračun kamata treba upravljati (referenca: Zakonodavni dekret 9. listopada 2002., br. 231). Svrha ovog polja je spriječiti obračun kamata na dokumente s datumom prije stupanja zakona na snagu.

**Od datuma dospijeća**: datum dospijeća od kojeg se obračun kamata treba upravljati (referenca: Zakonodavni dekret 9. listopada 2002., br. 231). Svrha ovog polja je spriječiti obračun kamata na dokumente čije je dospijeće bilo prije stupanja zakona na snagu.

**Minimalna kamata**: minimalni iznos kamate ispod kojeg se neće obračunavati nikakav iznos.

**Broj dana bez kamata**: broj dana „gracije“ koji će se odbiti od obračuna dana zakašnjenja.

**Obračun i za popust**: oznaka koja omogućuje obračun i u slučaju ranije uplate (popusta).

:::tip Napomena
PRIMJER: u slučaju ranije uplate od strane klijenta i kasnijeg kašnjenja plaćanja, ako je iznos kamate obračunate na kašnjenje veći od vrijednosti postavljene u polju Minimalna kamata, od obračunate kamate će se odbiti iznos (negativan) izračunat na temelju dana između datuma plaćanja i datuma dospijeća. U svakom slučaju, rezultat obračuna nikada ne može biti negativna kamata.
:::

### Donja mreža  

**Šifra**: identifikacijska šifra stope.

**Od datuma**: datum od kojeg se upravlja stopom navedenu u retku.

**Do datuma**: datum do kojeg se upravlja stopom navedenu u retku.

**Postotak**: primjenjivi postotak kamatne stope.

Polja vezana uz datume valjanosti postotka omogućuju definiranje kretanja politike kamatne stope koja, kao što je poznato, podliježe periodičnim revizijama u skladu s zakonskom kamatnom stopom.

![](/img/it-it/configurations/tables/finance/rate-types/image01.png)