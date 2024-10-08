---
title: Parametri zahtjeva za kupnju
sidebar_position: 5
---

Parametri zahtjeva za kupnju omogućuju pravilno upravljanje osnovnom postavkom i prema specifikacijama koje zahtijeva svaka pojedinačna tvrtka.

*Gumbi*:

> **Spremi**: omogućuje vam spremanje postavljenih parametara.   
> **Vrati**: omogućuje vraćanje parametara na njihove početne vrijednosti.  

### Općenito
 

**Trošak nula ako nedostaje cjenik**: cijena se traži u cjenicima; ako nije pronađena, a ova zastavica je aktivna, cijena se postavlja na 0 u retku zahtjeva. Ako nije aktivna, a ni drugi parametar nije aktivan i ne nalazi cijenu na popisu, traži zadnji trošak u matičnim podacima stavke, a ako nije pronađen stavlja 0.  

**Zadnja cijena ako cjenik nedostaje**: kada je aktivan, ako ne pronađe cijenu na popisu i ne pronađe zadnji trošak u bazi podataka artikla, uzima maksimalnu među cijenama prisutnim u zahtjevima za kupnju isti dobavljač i artikl.

**Proširi sastavnicu materijala**: sako je aktivno, prilikom umetanja stavke bit će zamijenjeno prvom razinom njegovog popisa materijala, ako postoji. Dakle, umjesto stavke “gotov proizvod”, narudžba će biti popunjena popisom materijala umetnute stavke. 

### Analitika

U ovoj kartici određujete prioritet s kojim želite dohvatiti mjesto troška ili mjesto profita u retku dokumenta.

Možete promijeniti prioritete pomoću gumba:

> **Premjesti gore** i **Premjesti dolje**

*Zadane vrijednosti*: CDC ili CDP se dohvaćaju iz naplaćene vrste ako postoji. Dodatne informacije potražite u tablici [Vrste prometa kupnje](/docs/configurations/tables/purchase/purchase-invoices-type). Ako nije prisutan u fakturiranoj vrsti, sustav će ga potražiti u *Šifarniku dobavljača*. Ako nije prisutan, tražit će se u *Šifarniku o artiklu*.