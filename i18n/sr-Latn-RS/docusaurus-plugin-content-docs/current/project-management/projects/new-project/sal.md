---
title: Račun za avans
sidebar_position: 7
---

Na ovoj kartici moguće je upravljati **računima avansa** povezanim sa projektom, koji se mogu povezati sa dokumentima oblasti **Projekti**, kao što su **Zahtevi za intervenciju**, **Planirane intervencije** i **Intervencije**.
Povezivanje sa dokumentima može se izvršiti automatski konfigurisanjem odgovarajućih parametara oblasti **Projekti** ili ručno. Navođenje ove informacije u pojedinačnim dokumentima omogućava automatsko storniranje faktura avansa na konačnim računima generisanim tokom valorizacije intervencija.

Redovi na ovoj kartici sadrže artikle koji će se fakturisati zajedno sa njihovim specifičnim svojstvima:

**Vrsta reda**: moguće je izabrati jednu od sledećih vrsta:
- **1 – Artikli sa klasom**
- **2 – Artikli bez klase**

**Jedinica mere**: dozvoljene su isključivo jedinice mere vrste **Vreme**. Uprkos tome, fakture avansa mogu se koristiti za pokrivanje usluga, materijala i dodatnih troškova koji imaju jedinice mere različite od **Vreme**.

**Količina**: količina na fakturi avansa koja služi kao početna vrednost za obračun i ažuriranje preostale količine.

**Jedinična cena**: vrednost koja se koristi kao jedinična cena i na fakturi avansa i na redovima storna fakture avansa.

**Izlazni računi**: sadrži referencu na fakturu avansa generisanu iz projekta.

**Vrsta**: moguće je izabrati način fakturisanja:
- **Na konto**
- **Saldiraj**

**Preostala količina**: vrednost dobijena sledećim obračunom:

Količina uneta u redu fakture avansa projekta

**minus**

količine koje se nalaze u planu fakturisanja svake intervencije povezane sa tom fakturom avansa putem odgovarajućeg polja.
Količina koja će se stornirati obračunava se srazmerno ceni reda u planu fakturisanja.

:::note[Primer 1]

Na projektu, na kartici **račun avansa**, u redu artikla unesite planiranu količinu i jediničnu cenu.  
Zatim generišite fakturu avansa.

Za svaku intervenciju povezanu sa tim projektom ili za svaku intervenciju kupca koji ima važeće fakture avansa, u polju **račun avansa** na karticama **Usluge**, **Materijali**, **Troškovi** i **Plan fakturisanja** automatski će se prikazati referenca na fakturu avansa definisanu na projektu.

Tokom valorizacije intervencija koje sadrže reference na fakture avansa automatski će se dodati red storna sa referencom na odgovarajuću fakturu avansa.

Ukupna vrednost reda storna odgovaraće zbiru svih stavki sa kojima je faktura avansa povezana, bez obzira da li se radi o uslugama, materijalima ili dodatnim troškovima.
Jedna faktura avansa može se koristiti i za delimično pokrivanje intervencije, na primer samo za usluge, bez materijala i dodatnih troškova.
Jedinična cena reda storna preuzima se iz jedinične cene fakture avansa definisane na projektu.

Stoga će se količina za storniranje obračunati srazmerno prema formuli:

**ukupan iznos za storniranje / jedinična cena fakture avansa**.
:::

Primer računa **AVANSA**:

- količina: **10**
- jedinica mere: **dani**
- jedinična cena: **500 €**
- ukupno: **5.000 €**

**INTERVENCIJA**

- usluga: **1 dan**, **500 €**, povezana sa fakturom avansa

Nakon **valorizacije intervencija** dobiće se:
- usluga: **1 dan**, **500 €**
- red storna fakture avansa:
  - količina: **1**
  - jedinica mere: **dani**
  - jedinična cena: **500 €**
  - ukupno reda: **–500 €**

Proverom preostale količine na fakturi avansa utvrdiće se da preostaje **9 dana**.
:::

:::note[Primer 2]
Na projektu, na kartici **Faktura avansa**, u redu artikla unesite planiranu količinu i jediničnu cenu.  
Zatim generišite fakturu avansa.

Za svaku intervenciju povezanu sa tim projektom ili za svaku intervenciju kupca koji ima važeće fakture avansa, u polju **Faktura avansa** na karticama **Usluge**, **Materijali**, **Troškovi** i **Plan fakturisanja** automatski će se prikazati referenca na fakturu avansa definisanu na projektu.

Tokom valorizacije intervencija koje sadrže reference na fakture avansa automatski će se dodati red storna sa referencom na odgovarajuću fakturu avansa.
Ukupna vrednost reda storna odgovaraće zbiru svih stavki sa kojima je faktura avansa povezana, bez obzira da li se radi o uslugama, materijalima ili dodatnim troškovima.
Jedna faktura avansa može se koristiti i za delimično pokrivanje intervencije, na primer samo za usluge, bez materijala i dodatnih troškova.
Jedinična cena reda storna preuzima se iz jedinične cene fakture avansa definisane na projektu.
Stoga će se količina za storniranje obračunati srazmerno prema formuli:

**ukupan iznos za storniranje / jedinična cena fakture avansa**

Primer fakture **AVANSA**:

- količina: **10**
- jedinica mere: **dani**
- jedinična cena: **500 €**
- ukupno: **5.000 €**

**INTERVENCIJA**

- usluga: **1 dan**, **500 €**, povezana sa fakturom avansa
- materijal: **3 komada**, ukupno **300 €**, povezan sa fakturom avansa

Nakon **valorizacije intervencija** dobiće se:

- usluga: **1 dan**, **500 €**
- materijal: **3 komada**, ukupno **300 €**
- red storna fakture avansa:
  - količina: **1,6**
  - jedinica mere: **dani**
  - jedinična cena: **500 €**
  - ukupno reda: **–800 €**

Proverom preostale količine na fakturi avansa utvrdiće se da preostaje **8,4 dana**.
:::

Prilikom svakog generisanja plana fakturisanja intervencije odgovarajuća količina automatski će se oduzeti od izvorne količine fakture avansa. Na taj način će preostala količina uvek biti ažurna. Po potrebi ju je moguće ručno ponovo obračunati pomoću dugmeta **Ažuriraj SAL**.

**Preostala količina ažurirana na dan**: prikazuje datum poslednjeg ažuriranja preostale količine.

**Aktivan od**: datum od kojeg je faktura avansa aktivna i može se predlagati u dokumentima.

**Datum zatvaranja**: datum zatvaranja fakture avansa. Nakon tog datuma više nije moguće povezivati dokumente sa kasnijim datumom.

Za svaki red moguće je direktno izdati račun sa ovog ekrana pomoću dugmeta **Valorizuj**. Sistem će prikazati poruku u kojoj korisnik može izabrati da li želi da otvori generisani račun.

Ako dugme **Valorizuj** nije dostupno, proverite da li je za odgovarajuću **Vrstu projekta** definisana **Vrsta računa**, koja je potrebna za generisanje računa.

![](/img/it-it/project-management/projects/sal.png)