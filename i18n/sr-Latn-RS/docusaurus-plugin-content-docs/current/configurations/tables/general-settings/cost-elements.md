---
title: Element troška
sidebar_position: 44
---

Tabela omogućava unos novih zapisa ili pretraživanje postojećih radi njihovog pregleda, izmene ili brisanja.

### Pretraživanje stavki (elemenata) troškova

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

### Unos stavki troškova

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

#### Specifična polja

**Šifra**: označava šifru stavke troška.

**Opis**: označava opis stavke troška.

**Tip troška**: označava kategoriju kojoj pripada stavka troška: *Direktni troškovi*, *Opšti troškovi* ili *Ostali troškovi*.

**Primeni na**: označava na koju će se vrstu troška primeniti ova stavka:

> *Trošak materijala*: trošak se primenjuje samo na trošak materijala (primenljivo samo na stavke kod kojih je **Tip troška** postavljen na *Direktni troškovi*).

> *Trošak mašine*: trošak se primenjuje samo na trošak mašine (primenljivo samo na stavke kod kojih je **Tip troška** postavljen na *Direktni troškovi*).

> *Trošak radne snage*: trošak se primenjuje samo na trošak rada (primenljivo samo na stavke kod kojih je **Tip troška** postavljen na *Direktni troškovi*).

> *Trošak obrade*: trošak se primenjuje samo na trošak obrade (ukupan trošak mašine i rada) (primenljivo samo na stavke kod kojih je **Tip troška** postavljen na *Direktni troškovi*).

> *Industrijski trošak*: trošak se primenjuje samo na ukupni trošak materijala i trošak obrade (primenljivo samo na stavke kod kojih je **Tip troška** postavljen na *Direktni troškovi* ili *Opšti troškovi*).

> *Opšti trošak*: trošak se primenjuje na ukupne opšte troškove (primenljivo samo na stavke kod kojih je **Tip troška** postavljen na *Opšti troškovi*).

> *Ostali troškovi*: trošak se primenjuje na ukupne ostale troškove (primenljivo samo na stavke kod kojih je **Tip troška** postavljen na *Ostali troškovi*).

:::note[Napomena]
Stavke troškova kod kojih je **Primeni na** postavljeno na *Trošak materijala*, *Trošak mašine*, *Trošak radne snage*, *Trošak obrade* ili *Industrijski trošak* uključuju se u odeljak **Direktni troškovi**.

Stavke troškova kod kojih je **Primeni na** postavljeno na *Opšti trošak* ili *Ostali troškovi* uključuju se u odgovarajuće odeljke **Opšti troškovi** odnosno **Ostali troškovi** u okviru postupka [Vrednovanje](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).
:::

**Procenat/Vrednost**: označava da li je stavka troška definisana kao *procenat*, *fiksna vrednost* ili *varijabilna vrednost* (aktivno samo za stavke troškova kod kojih je **Primeni na** = *Ostali troškovi*).

Detaljnije:
- *Procenat* se izračunava na osnovu ukupnog troška navedenog u polju **Primeni na**.
- *Fiksna vrednost* dodaje se ukupnom trošku navedenom u polju **Primeni na**.
- *Varijabilna vrednost* množi se sa količinom unetom u upravljanju *Ostalim troškovima* u postupku obračuna troškova.

**Vrednost**: označava podrazumevanu vrednost stavke troška koja će zatim biti automatski predložena.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).