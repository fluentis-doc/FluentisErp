---
title: Račun za redujam
sidebar_position: 7
---

Na ovoj kartici moguće je upravljati **računima predujma** povezanima s projektom, koje se mogu povezati s dokumentima područja **Projekti**, kao što su **Zahtjevi za intervenciju**, **Planirane intervencije** i **Intervencije**.
Povezivanje s dokumentima može se izvršiti automatski konfiguriranjem odgovarajućih parametara područja **Projekti** ili ručno. Navođenje ove informacije u pojedinačnim dokumentima omogućuje automatsko storniranje faktura predujma na konačnim računima generiranima tijekom valorizacije intervencija.
Retci na ovoj kartici sadrže artikle koji će se fakturirati zajedno s njihovim specifičnim svojstvima:

**Vrsta retka**: moguće je odabrati jednu od sljedećih vrsta:
- **1 – Artikli s klasom**
- **2 – Artikli bez klase**

**Mjerna jedinica**: dopuštene su isključivo mjerne jedinice vrste **Vrijeme**. Unatoč tome, fakture predujma mogu se koristiti za pokrivanje usluga, materijala i dodatnih troškova koji imaju mjerne jedinice različite od **Vrijeme**.

**Količina**: količina na fakturi predujma koja služi kao početna vrijednost za izračun i ažuriranje preostale količine.

**Jedinična cijena**: vrijednost koja se koristi kao jedinična cijena i na fakturi predujma i na redcima storna fakture predujma.

**Izlazni računi**: sadrži referencu na fakturu predujma generiranu iz projekta.

**Vrsta**: moguće je odabrati način fakturiranja:
- **Na konto**
- **Saldiraj**

**Preostala količina**: vrijednost dobivena sljedećim izračunom:

Količina unesena u retku fakture predujma projekta

**minus**

količine koje se nalaze u planu fakturiranja svake intervencije povezane s tom fakturom predujma putem odgovarajućeg polja.
Količina koja će se stornirati izračunava se razmjerno cijeni retka u planu fakturiranja.

:::note[Primjer 1]

Na projektu, na kartici **račun predujma**, u retku artikla unesite planiranu količinu i jediničnu cijenu.
Zatim generirajte fakturu predujma.

Za svaku intervenciju povezanu s tim projektom ili za svaku intervenciju kupca koji ima važeće fakture predujma, u polju **račun predujma** na karticama **Usluge**, **Materijali**, **Troškovi** i **Plan fakturiranja** automatski će se prikazati referenca na fakturu predujma definiranu na projektu.

Tijekom valorizacije intervencija koje sadrže reference na fakture predujma automatski će se dodati redak storna s referencom na odgovarajuću fakturu predujma.
Ukupna vrijednost retka storna odgovarat će zbroju svih stavki s kojima je faktura predujma povezana, neovisno radi li se o uslugama, materijalima ili dodatnim troškovima.
Jedna faktura predujma može se koristiti i za djelomično pokrivanje intervencije, primjerice samo za usluge, bez materijala i dodatnih troškova.
Jedinična cijena retka storna preuzima se iz jedinične cijene fakture predujma definirane na projektu.
Stoga će se količina za storniranje izračunati razmjerno prema formuli:

**ukupan iznos za storniranje / jedinična cijena fakture predujma**.
:::

Primjer računa **PREDUJMA**:

- količina: **10**
- mjerna jedinica: **dani**
- jedinična cijena: **500 €**
- ukupno: **5.000 €**

**INTERVENCIJA**

- usluga: **1 dan**, **500 €**, povezana s fakturom predujma

Nakon **valorizacije intervencija** dobit će se:

- usluga: **1 dan**, **500 €**
- redak storna fakture predujma:
  - količina: **1**
  - mjerna jedinica: **dani**
  - jedinična cijena: **500 €**
  - ukupno retka: **–500 €**

Provjerom preostale količine na fakturi predujma utvrdit će se da preostaje **9 dana**.

:::

:::note[Primjer 2]

Na projektu, na kartici **Faktura predujma**, u retku artikla unesite planiranu količinu i jediničnu cijenu.
Zatim generirajte fakturu predujma.
Za svaku intervenciju povezanu s tim projektom ili za svaku intervenciju kupca koji ima važeće fakture predujma, u polju **Faktura predujma** na karticama **Usluge**, **Materijali**, **Troškovi** i **Plan fakturiranja** automatski će se prikazati referenca na fakturu predujma definiranu na projektu.

Tijekom valorizacije intervencija koje sadrže reference na fakture predujma automatski će se dodati redak storna s referencom na odgovarajuću fakturu predujma.
Ukupna vrijednost retka storna odgovarat će zbroju svih stavki s kojima je faktura predujma povezana, neovisno radi li se o uslugama, materijalima ili dodatnim troškovima.
Jedna faktura predujma može se koristiti i za djelomično pokrivanje intervencije, primjerice samo za usluge, bez materijala i dodatnih troškova.
Jedinična cijena retka storna preuzima se iz jedinične cijene fakture predujma definirane na projektu.
Stoga će se količina za storniranje izračunati razmjerno prema formuli:

**ukupan iznos za storniranje / jedinična cijena fakture predujma**

Primjer fakture **PREDUJMA**:

- količina: **10**
- mjerna jedinica: **dani**
- jedinična cijena: **500 €**
- ukupno: **5.000 €**

**INTERVENCIJA**

- usluga: **1 dan**, **500 €**, povezana s fakturom predujma
- materijal: **3 komada**, ukupno **300 €**, povezan s fakturom predujma

Nakon **valorizacije intervencija** dobit će se:

- usluga: **1 dan**, **500 €**
- materijal: **3 komada**, ukupno **300 €**
- redak storna fakture predujma:
  - količina: **1,6**
  - mjerna jedinica: **dani**
  - jedinična cijena: **500 €**
  - ukupno retka: **–800 €**

Provjerom preostale količine na fakturi predujma utvrdit će se da preostaje **8,4 dana**.

:::

Prilikom svakog generiranja plana fakturiranja intervencije odgovarajuća količina automatski će se oduzeti od izvorne količine fakture predujma. Na taj će način preostala količina uvijek biti ažurna. Po potrebi ju je moguće ručno ponovno izračunati pomoću gumba **Ažuriraj SAL**.

**Preostala količina ažurirana na dan**: prikazuje datum posljednjeg ažuriranja preostale količine.

**Aktivan od**: datum od kojeg je faktura predujma aktivna te se može predlagati u dokumentima.

**Datum zatvaranja**: datum zatvaranja fakture predujma. Nakon tog datuma više nije moguće povezivati dokumente s kasnijim datumom.

Za svaki redak moguće je izravno izdati račun s ovog zaslona pomoću gumba **Valoriziraj**. Sustav će prikazati poruku u kojoj korisnik može odabrati želi li otvoriti generirani račun.
Ako gumb **Valoriziraj** nije dostupan, provjerite je li za odgovarajuću **Vrstu projekta** definiran **Vrsta računa**, koji je potreban za generiranje računa.

![](/img/it-it/project-management/projects/sal.png)