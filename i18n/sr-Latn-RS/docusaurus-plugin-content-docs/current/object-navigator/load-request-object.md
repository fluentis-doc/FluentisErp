---
title: Zahtevi za učitavanje objekta
sidebar_position: 2
---

### Kako prikazati dodatna polja u formama

Da biste dodali svojstva koja nisu prisutna u formama, potrebno je proveriti da li su ta svojstva uključena u *Load Request* objekta.

### Učitavanje novih svojstava

**Primeri**:

- dodavanje *PDV-a* i *poreskog broja* u proširenje kupca, u **zaglavlje** narudžbine kupca

- dodavanje *SWIFT* podatka u **tabelu** plaćanja narudžbine

![](/img/it-it/guide/panels/object-navigator/load-request-object/image01.png)


1. Prikažite panel **Object Navigator** tako da ostane vidljiv tokom definisanja dodatnih polja, odnosno do kreiranja prilagođenog profila.

2. U **Object Navigator-u** kliknite desnim tasterom miša na naziv objekta, izaberite **Detalji**, otvorite sekciju **Load Request** i desnim klikom odaberite **Novi zahtev za učitavanje objekta**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image02.png)


3. Otvorite formu *Novi zahtev za učitavanje objekta*, unesite istu šifru kao kod *Standard Load Request-a* i sačuvajte zapis kako bi se učitala sva svojstva objekta.

4. Pretražite stablo objekata i pronađite željena svojstva.

   U ovom primeru otvorene su reference *Kupca* i odgovarajućeg *Šifarnika* kako bi se pronašli *OIB* i *PDV broj*, nakon čega su ta polja odabrana.

5. U istoj formi, u tabeli **Based On**, aktivirajte odgovarajući *Load Request* kako bi sva svojstva bila dostupna u *Personalizovanom Load Request-u*.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image03.png)


6. Zatvorite formu.

### Dodavanje svojstava u zaglavlje forme

6.1. Sa leve strane Fluentis forme koju želite da prilagodite otvorite i ostavite prikazan **Form Navigator**.

6.2. Otvorite stablo forme i aktivirajte formu u režimu **Customization Mode**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image04.png)


U ovom trenutku forma će biti označena crvenom bojom:

![](/img/it-it/guide/panels/object-navigator/load-request-object/image05.png)


6.3. U **Object Navigator-u** pronađite svojstva koja želite da dodate na formu.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image06.png)


6.4. Izaberite željeno svojstvo i prevucite ga u **Form Navigator**, tačno iznad sekcije u koju treba da bude dodato, kako bi se prikazalo na Fluentis formi.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image07.png)


6.5. Kada završite sa prilagođavanjem forme, deaktivirajte **Customization Mode**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image08.png)


### Dodavanje svojstava u tabele forme

Za dodavanje svojstava u tabele nije potrebno aktivirati **Customization Mode**.


7.1. U **Object Navigator-u** pronađite svojstva koja želite da dodate.

7.2. Izaberite željeno svojstvo i prevucite ga u tabelu. Tokom ove operacije forma će biti označena crvenom bojom.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image09.png)


Dodato svojstvo će se pojaviti kao poslednja kolona u tabeli, nakon čega ga možete prevući na željenu poziciju.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image10.png)


8. Kreirajte **profil** kako biste sačuvali prilagođavanje.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image11.png)


9. Ponovo pokrenite **Fluentis** kako bi prilagođavanje postalo aktivno.