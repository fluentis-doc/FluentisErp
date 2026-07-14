---
title: Liste za preuzimanje / Packing lista (WPF i WMS verzija)
sidebar_position: 1
---

### Liste za preuzimanje / Packing lista (WPF verzija)

:::important Čemu služi

**Lista za preuzimanje utovarnih jedinica / Packing lista** u Fluentisu omogućava preuzimanje **utovarnih jedinica**, za razliku od standardnog preuzimanja koje se zasniva na pojedinačnim artiklima. Ova funkcionalnost je naročito korisna kada je potrebno otpremiti robu kupcu, jer omogućava grupisanje artikala unutar unapred definisanih utovarnih jedinica.

Kreiranje nove liste za preuzimanje zahteva unos osnovnih podataka, kao što su **tip preuzimanja**, **skladište** i **korisnik**. Nakon toga operateri mogu odabrati već kreirane i proknjižene utovarne jedinice iz kartice **Detalji utovarne jedinice**, čime se artikli povezuju sa odgovarajućim nalogom kupca.

Pomoću dugmeta **Pomoć** korisnici mogu jednostavno pretraživati dostupne utovarne jedinice i brzo ih dodati na listu za preuzimanje.

Liste za preuzimanje ne samo da pojednostavljuju pripremu otpreme već omogućavaju i direktno kreiranje **otpremnica** i **izlaznih računa**, koji sadrže sve potrebne informacije o artiklima i utovarnim jedinicama uključenim u isporuku. Na taj način obezbeđuje se efikasnije upravljanje logističkim i otpremnim procesima.

:::

Pomoću **lista za preuzimanje** moguće je kreirati **preuzimanje utovarnih jedinica**, za razliku od standardnog preuzimanja koje se sastoji od pojedinačnih artikala.

U formi **Pretraga** moguće je pronaći prethodno kreirane liste za preuzimanje.

Za kreiranje nove liste kliknite **Novo**.

Obavezni podaci koje je potrebno uneti su:

- **Tip preuzimanja (Vrsta pickinga)**: odaberite vrstu [preuzimanja](/docs/logistics/picking/picking-management) koja će se koristiti.
- **Korisnik**: odaberite zaposlenog koji kreira dokument.
- **Korisnik za potvrdu**: odaberite zaposlenog koji ima pravo da potvrdi listu.

Nakon unosa potrebnih podataka moguće je sačuvati **listu za preuzimanje**.

Pritiskom na dugme **Pomoć** na alatnoj traci otvara se forma u kojoj je moguće odabrati utovarne jedinice za preuzimanje.

Pretraga se može izvršiti među utovarnim jedinicama povezanim sa nalozima kupaca aktiviranjem oznake **Pretraga po nalozima kupaca**. Za svaki nalog kupca moguće je pregledati pripadajuće artikle, a ukoliko su oni prethodno dodati u utovarnu jedinicu, u donjoj tabeli prikazuju se svi podaci o UJT-u koji ih sadrži. Nakon odabira željenih utovarnih jedinica one se dodaju na listu.

Ako se oznaka **Pretraga po nalozima kupaca** isključi, utovarne jedinice moguće je pretraživati među svim postojećim jedinicama, bez obzira na to da li su povezane sa nalogom kupca. Odabrane jedinice mogu se na isti način dodati na listu za preuzimanje.

U tabeli **Detalji** prikazuju se samo utovarne jedinice sa statusom **Proknjižena**, nakon čega je moguće sačuvati i zatvoriti **listu za preuzimanje**.

Povratkom u formu **Pretraga lista za preuzimanje**, lista će biti prikazana sa statusom **Suspendovana**. Da bi status bio promenjen u **Kontrolisana**, potrebno je izvršiti **rasknjiženje** utovarnih jedinica sa liste (videti odeljak **Specifična dugmad**). Tek kada lista dobije status **Kontrolisana**, na alatnoj traci postaju dostupna dugmad **Račun** i **Otpremnica**.

### Specifična dugmad

> **Račun**: kreira izlazni račun iz odabrane **Liste**. U dijaloškom prozoru potrebno je odabrati [Tip računa](/docs/configurations/tables/sales/invoices-type) koji će biti kreiran i, po potrebi, način grupisanja. Izlazni račun kreira se već sa statusom **Rasknjižen**, kako bi se izbegla mogućnost dvostrukog rasknjiženja.

> **Otpremnica**: kreira otpremnicu iz odabrane **Liste**. U dijaloškom prozoru potrebno je odabrati [Tip otpremnice](/docs/configurations/tables/sales/delivery-notes-type) koji će biti kreiran i, po potrebi, način grupisanja. Otpremnica se kreira već sa statusom **Rasknjižena**, kako bi se izbegla mogućnost dvostrukog rasknjiženja.

> **Upravljanje UJT**: odabirom **Liste za preuzimanje** i pritiskom na ovo dugme otvara se forma **Upravljanje UJT**, u kojoj su unapred filtrirane utovarne jedinice sa odabrane liste. U toj formi utovarnim jedinicama moguće je upravljati pomoću dugmadi na alatnoj traci.

Za sve informacije o korišćenju ove forme u **WMS-u** pogledajte dokumentaciju: [Liste za preuzimanje / Packing lista](/docs/logistics/wms/udc/loading-unit-picking-list).

### Liste za preuzimanje / Packing lista (WMS verzija)

:::important Čemu služi

Funkcionalnost **Liste za preuzimanje / Packing lista** u Fluentis WMS-u omogućava kreiranje **preuzimanja utovarnih jedinica**, čime se pojednostavljuje priprema otprema povezanih sa nalozima kupaca.

Pomoću ovog alata korisnici mogu birati, uređivati i upravljati utovarnim jedinicama, optimizujući proces preuzimanja i obezbeđujući ispravnu dokumentaciju za otpremu.

:::

Ova procedura koristi se za kreiranje **lista za preuzimanje utovarnih jedinica**.

Pomoću **Lista za preuzimanje / Packing liste** moguće je kreirati **preuzimanje utovarnih jedinica**, za razliku od standardnog postupka preuzimanja, koji kreira listu sastavljenu od pojedinačnih artikala.

Liste za preuzimanje koriste se kada se roba otprema kupcu, dok je za premeštanje utovarnih jedinica između sopstvenih skladišta potrebno koristiti [Liste za prenos](/docs/logistics/wms/udc/loading-unit-transfer-list).

U formi za pretragu moguće je pronaći željene liste filtriranjem prema:

- datumu unosa,
- datumu otpreme,
- statusu liste za preuzimanje.

Nakon odabira liste moguće ju je otvoriti pritiskom na dugme **Otvori**.

Unutar liste korisnik može uređivati utovarne jedinice na kartici **Detalji**.

Na ovoj kartici moguće je:

- odabrati postojeću utovarnu jedinicu i ukloniti je sa liste pomoću dugmeta **Obriši**
- dodati novu utovarnu jedinicu jednostavnim očitavanjem njenog bar-koda.

Nakon završetka izmena potrebno je sačuvati listu pritiskom na dugme **Sačuvaj**.

Iz forme za pretragu moguće je kreirati i novu listu pritiskom na dugme **Novo**.

Sistem automatski predlaže:

- trenutni datum
- skladište definisano u tabeli **Parametri knjiženja/rasknjiženja po korisniku**

Nakon odabira **tipa preuzimanja**, automatski se predlaže i broj liste.

Korisnik zatim na kartici **Detalji** dodaje utovarne jedinice očitavanjem njihovih bar-kodova. Nakon završetka unosa dovoljno je sačuvati listu odgovarajućim dugmetom.

**Parametri knjiženja/rasknjiženja** definišu se u tabeli [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Za ovaj parametar **predložak skladišta** može ostati prazan.

:::note Napomena
Ako je u tabeli [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) sa korisnikom povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, sistem neće predložiti nijedno, već će korisnik moći da odabere samo jedno od dodeljenih skladišta.
:::

Sve informacije o načinu definisanja bar-kodova koji se očitavaju u polju **Bar-kod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Potvrda prenosa UJT (WMS verzija)

:::important Čemu služi
Ova procedura koristi se za pretragu i potvrdu postojeće [Liste za prenos UJT](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit), čime se izvršava skladišno knjiženje.
:::

Forma **Potvrda prenosa UJT** koristi se za potvrdu postojeće [Liste za prenos UJT](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) radi izvršavanja skladišnog knjiženja.

U delu za pretragu moguće je pronaći željenu listu prema:
- datumu,
- broju,
- skladištu.

Listu je moguće potvrditi direktno pritiskom na dugme **Potvrdi**, bez njenog otvaranja.
Alternativno, listu je moguće otvoriti pritiskom na dugme **Otvori** i pregledati utovarne jedinice na odgovarajućim karticama:

- **Neprenesene utovarne jedinice**
- **Prenesene utovarne jedinice**

Nakon pregleda listu je moguće potvrditi, čime se kreira skladišno knjiženje.

**Parametri knjiženja/rasknjiženja** definišu se u tabeli [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

Parametri su navedeni dva puta jer forma koristi:

- jedan **predložak knjiženja** sa skladištem koje je odredište liste
- jedan **predložak rasknjiženja** sa skladištem u kojem se trenutno nalaze utovarne jedinice koje se prenose.

Oba korišćena predloška moraju imati isključenu oznaku **Sastavnica** i ne smeju imati definisanu **protustavku**.

Sve informacije o načinu definisanja bar-kodova koji se očitavaju u polju **Bar-kod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Potvrda preuzimanja UJT (WMS verzija)

:::important Čemu služi

Forma **Potvrda preuzimanja UJT** koristi se za pretragu i potvrdu postojeće [Liste za preuzimanje UJT / Packing liste](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) radi izvršavanja skladišnog rasknjiženja.

:::

U delu za pretragu moguće je pronaći željenu listu prema:
- datumu,
- broju,
- skladištu.

Listu je takođe moguće potvrditi direktno pritiskom na dugme **Potvrdi**, bez njenog otvaranja.

Alternativno, listu je moguće otvoriti pritiskom na dugme **Otvori** i pregledati utovarne jedinice na odgovarajućim karticama:

- **Nepreuzete utovarne jedinice**
- **Preuzete utovarne jedinice**

Nakon pregleda listu je moguće potvrditi, čime se kreira skladišno rasknjiženje.

**Parametri knjiženja/rasknjiženja** definišu se u tabeli [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Ovaj parametar mora biti definisan sa skladištem iz **Liste za preuzimanje** i sa **predloškom skladišta** vrste **rasknjiženje**, bez definisane **protustavke**.

Sve informacije o načinu definisanja bar-kodova koji se očitavaju u polju **Bar-kod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).