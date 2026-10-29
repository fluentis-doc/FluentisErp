---
title: Tipovi kamatnih stopa
sidebar_position: 28
---

Definiranjem ove tablice omogućuje se unos i postavljanje različitih vrsta kamatnih stopa kojima se upravlja u aktivnoj tvrtki.

### Gornja tablica

**Šifra**: identifikacijska šifra kamatne stope.

**Opis**: opis kamatne stope.

**Od datuma dokumenta**: datum od kojeg se primjenjuje izračun kamata, u skladu sa Zakonodavnom uredbom br. 231 od 9. listopada 2002. Svrha ovog polja je spriječiti obračun kamata na dokumente čiji je datum prije datuma stupanja zakona na snagu.

**Od datuma dospijeća**: datum dospijeća od kojeg se primjenjuje izračun kamata, u skladu sa Zakonodavnom uredbom br. 231 od 9. listopada 2002. Svrha ovog polja je spriječiti obračun kamata na dokumente čiji je datum dospijeća prije datuma stupanja zakona na snagu.

**Minimalna kamata**: minimalni iznos kamata ispod kojeg se kamata neće obračunavati.

**Dani odbitka**: broj dana počeka koji se oduzimaju od broja dana kašnjenja.

**Uključi i popust**: oznaka koja omogućuje obračun popusta u slučaju prijevremenog plaćanja.

:::tip Napomena
PRIMJER: ako kupac plati prije dospijeća, a zatim dođe do kašnjenja s plaćanjem, izračunava se kamata na kašnjenje. Ako je taj iznos veći od vrijednosti postavljene u polju Minimalna kamata, od izračunatih kamata oduzima se negativni iznos izračunat na temelju broja dana između datuma plaćanja i datuma dospijeća. Rezultat izračuna ni u kojem slučaju ne može biti negativna kamata.
:::

### Donja tablica

**Šifra**: identifikacijska šifra kamatne stope.

**Od datuma**: datum od kojeg se primjenjuje kamatna stopa navedena u retku.

**Do datuma**: datum do kojeg se primjenjuje kamatna stopa navedena u retku.

**Postotak**: primjenjiva kamatna stopa izražena u postotku.

Polja s datumima valjanosti omogućuju definiranje promjena kamatne stope tijekom vremena. Kao što je poznato, zakonska kamatna stopa podliježe periodičnim izmjenama.

![](/img/it-it/configurations/tables/finance/rate-types/image01.png)