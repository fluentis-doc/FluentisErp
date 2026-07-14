---
title: Liste za preuzimanje / Packing lista (WPF i WMS verzija)
sidebar_position: 1
---

### Liste za preuzimanje / Packing lista (WPF verzija)

:::important Čemu služi

**Lista za preuzimanje utovarnih jedinica / Packing lista** u Fluentisu omogućuje preuzimanje **utovarnih jedinica**, za razliku od standardnog preuzimanja koje se temelji na pojedinačnim artiklima. Ova funkcionalnost posebno je korisna kada je potrebno otpremiti robu kupcu, jer omogućuje grupiranje artikala unutar unaprijed definiranih utovarnih jedinica.

Kreiranje nove liste za preuzimanje zahtijeva unos osnovnih podataka, kao što su **tip preuzimanja**, **skladište** i **korisnik**. Nakon toga operateri mogu odabrati već kreirane i knjižene utovarne jedinice iz kartice **Detalji utovarne jedinice**, čime se artikli povezuju s odgovarajućom narudžbom kupca.

Pomoću gumba **Pomoć** korisnici mogu jednostavno pretraživati dostupne utovarne jedinice i brzo ih dodati na listu za preuzimanje.

Liste za preuzimanje ne samo da pojednostavljuju pripremu otpreme, već omogućuju i izravno kreiranje **dostavnica** i **izlaznih računa**, koji sadrže sve potrebne informacije o artiklima i jedinicama tereta uključenima u isporuku. Time se osigurava učinkovitije upravljanje logističkim i otpremnim procesima.

:::

Pomoću **lista za preuzimanje** moguće je kreirati **preuzimanje utovarnih jedinica**, za razliku od standardnog preuzimanja koje se sastoji od pojedinačnih artikala.

U formi **Pretraga** moguće je pronaći prethodno kreirane liste za preuzimanje.

Za kreiranje nove liste kliknite **Novo**.

Obvezni podaci koje je potrebno unijeti su:

- **Tip preuzimanja (Vrsta pickinga)**: odaberite vrstu [preuzimanja](/docs/logistics/picking/picking-management) koja će se koristiti.
- **Korisnik**: odaberite zaposlenika koji kreira dokument.
- **Korisnik za potvrdu**: odaberite zaposlenika koji ima pravo potvrditi listu.

Nakon unosa potrebnih podataka moguće je spremiti **listu za preuzimanje**.

Pritiskom na gumb **Pomoć** na alatnoj traci otvara se forma u kojoj je moguće odabrati utovarne jedinice za preuzimanje.

Pretraživanje se može izvršiti među jedinicama tereta povezanima s narudžbama kupaca aktiviranjem oznake **Pretraživanje po narudžbama kupaca**. Za svaku narudžbu kupca moguće je pregledati pripadajuće artikle, a ako su oni prethodno dodani u jedinicu tereta, u donjoj tablici prikazuju se svi podaci o UJT-u koji ih sadrži. Nakon odabira željenih utovarnih jedinica one se dodaju na listu.

Ako se oznaka **Pretraživanje po narudžbama kupaca** isključi, utovarne jedinice moguće je pretraživati među svim postojećim jedinicama, bez obzira jesu li povezane s narudžbom kupca. Odabrane jedinice mogu se na isti način dodati na listu za preuzimanje.

U tablici **Detalji** prikazuju se samo utovarne jedinice sa statusom **Knjižena**, nakon čega je moguće spremiti i zatvoriti **listu za preuzimanje**.

Povratkom u formu **Pretraga lista za preuzimanje**, lista će biti prikazana sa statusom **Suspendirana**. Kako bi status bio promijenjen u **Kontrolirana**, potrebno je izvršiti **rasknjiženje** utovarnih jedinica s liste (vidi odjeljak **Specifični gumbi**). Tek kada lista dobije status **Kontrolirana**, na alatnoj traci postaju dostupni gumbi **Račun** i **Dostavnica**.

### Specifični gumbi

> **Račun**: kreira izlazni račun iz odabrane **Liste**. U dijaloškom prozoru potrebno je odabrati [Tip računa](/docs/configurations/tables/sales/invoices-type) koji će se kreirati te, po potrebi, način grupiranja. Izlazni račun kreira se već u statusu **Rasknjižen**, kako bi se izbjegla mogućnost dvostrukog rasknjiženja.

> **Dostavnica**: kreira dostavnicu iz odabrane **Liste**. U dijaloškom prozoru potrebno je odabrati [Tip dostavnice](/docs/configurations/tables/sales/delivery-notes-type) koji će se kreirati te, po potrebi, način grupiranja. Dostavnica se kreira već u statusu **Rasknjižena**, kako bi se izbjegla mogućnost dvostrukog rasknjiženja.

> **Upravljanje UJT**: odabirom **Liste za preuzimanje** i pritiskom na ovaj gumb otvara se forma **Upravljanje UJT**, u kojoj su unaprijed filtrirane utovarne jedinice s odabrane liste. U toj formi jedinicama tereta moguće je upravljati pomoću gumba na alatnoj traci.

Za sve informacije o korištenju ove forme u **WMS-u** pogledajte dokumentaciju: [Liste za preuzimanje / Packing lista](/docs/logistics/wms/udc/loading-unit-picking-list).

### Liste za preuzimanje / Packing lista (WMS verzija)

:::important Čemu služi

Funkcionalnost **Liste za preuzimanje / Packing lista** u Fluentis WMS-u omogućuje kreiranje **preuzimanja utovarnih jedinica**, čime se pojednostavljuje priprema otprema povezanih s narudžbama kupaca.

Pomoću ovog alata korisnici mogu odabirati, uređivati i upravljati jedinicama tereta, optimizirajući proces preuzimanja i osiguravajući ispravnu dokumentaciju za otpremu.

:::

Ova se procedura koristi za izradu **lista za preuzimanje utovarnih jedinica**.

Pomoću **Lista za preuzimanje / Packing liste** moguće je kreirati **preuzimanje utovarnih jedinica**, za razliku od standardnog postupka preuzimanja, koji kreira listu sastavljenu od pojedinačnih artikala.

Liste za preuzimanje koriste se kada se roba otprema kupcu, dok je za premještanje utovarnih jedinica unutar vlastitih skladišta potrebno koristiti [Liste za prijenos](/docs/logistics/wms/udc/loading-unit-transfer-list).

U formi za pretraživanje moguće je pronaći željene liste filtriranjem prema:
- datumu unosa,
- datumu otpreme,
- statusu liste za preuzimanje.

Nakon odabira liste moguće ju je otvoriti pritiskom na gumb **Otvori**.

Unutar liste korisnik može uređivati utovarne jedinice u kartici **Detalji**.

U toj kartici moguće je:

- odabrati postojeću jedinicu tereta i ukloniti je s liste pomoću gumba **Obriši**
- dodati novu jedinicu tereta jednostavnim očitavanjem njezina barkoda.

Nakon završetka izmjena potrebno je spremiti listu pritiskom na gumb **Spremi**.

Iz forme za pretraživanje moguće je kreirati i novu listu pritiskom na gumb **Novo**.

Sustav automatski predlaže:
- trenutni datum
- skladište definirano u tablici **Parametri knjiženja/rasknjiženja po korisniku**

Nakon odabira **tipa preuzimanja**, automatski se predlaže i broj liste.

Korisnik zatim u kartici **Detalji** dodaje utovarne jedinice očitavanjem njihovih barkodova. Nakon završetka unosa dovoljno je spremiti listu odgovarajućim gumbom.

**Parametri knjiženja/rasknjiženja** definiraju se u tablici [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Za ovaj parametar **predložak skladišta** može ostati prazan.

:::note Napomena

Ako je u tablici [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, sustav neće predložiti nijedno te će korisnik moći odabrati samo jedno od dodijeljenih skladišta.

:::

Sve informacije o načinu definiranja barkodova koji se očitavaju u polju **Barkod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Potvrda prijenosa UJT (WMS verzija)

:::important Čemu služi

Ova se procedura koristi za pretraživanje i potvrdu postojeće [Liste za prijenos UJT](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit), čime se izvršava skladišno knjiženje.

:::

Forma **Potvrda prijenosa UJT** koristi se za potvrdu postojeće [Liste za prijenos UJT](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) radi izvršavanja skladišnog knjiženja.

U dijelu za pretraživanje moguće je pronaći željenu listu prema:
- datumu,
- broju,
- skladištu.

Listu je moguće potvrditi izravno pritiskom na gumb **Potvrdi**, bez njezina otvaranja.

Alternativno, listu je moguće otvoriti pritiskom na gumb **Otvori** te pregledati utovarne jedinice u odgovarajućim karticama:
- **Neprenesene utovarne jedinice**
- **Prenesene utovarne jedinice**

Nakon pregleda listu je moguće potvrditi i time kreirati skladišno knjiženje.

**Parametri knjiženja/rasknjiženja** definiraju se u tablici [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

Parametri su navedeni dvaput jer forma koristi:
- jedan **predložak knjiženja** sa skladištem koje je odredište liste
- jedan **predložak rasknjiženja** sa skladištem u kojem se trenutno nalaze utovarne jedinice koje se prenose.

Oba korištena predloška moraju imati isključenu oznaku **Sastavnica** te ne smiju imati definiranu **protustavku**.

Sve informacije o načinu definiranja barkodova koji se očitavaju u polju **Barkod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Potvrda preuzimanja UJT (WMS verzija)

:::important Čemu služi

Forma **Potvrda preuzimanja UJT** koristi se za pretraživanje i potvrdu postojeće [Liste za preuzimanje UJT / Packing liste](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) radi izvršavanja skladišnog rasknjiženja.

:::

U dijelu za pretraživanje moguće je pronaći željenu listu prema:
- datumu,
- broju,
- skladištu.

Listu je također moguće potvrditi izravno pritiskom na gumb **Potvrdi**, bez njezina otvaranja.

Alternativno, listu je moguće otvoriti pritiskom na gumb **Otvori** te pregledati utovarne jedinice u odgovarajućim karticama:
- **Nepreuzete utovarne jedinice**
- **Preuzete utovarne jedinice**

Nakon pregleda listu je moguće potvrditi, čime se kreira skladišno rasknjiženje.

**Parametri knjiženja/rasknjiženja** definiraju se u tablici [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Ovaj parametar mora biti definiran sa skladištem iz **Liste za preuzimanje** te s **predloškom skladišta** vrste **rasknjiženje**, bez definirane **protustavke**.

Sve informacije o načinu definiranja barkodova koji se očitavaju u polju **Barkod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).