---
title: Liste za prenos utovarnih jedinica (WPF i WMS verzija)
sidebar_position: 2
---

### Liste za prenos (WPF verzija)

:::important Čemu služi

**Lista za prenos utovarnih jedinica** u Fluentis ERP-u namenjena je upravljanju premeštanjem **utovarnih jedinica** unutar sopstvenih skladišta. Omogućava jednostavno, sistematsko i efikasno upravljanje internim premeštajima robe između skladišta i skladišnih lokacija.

Za razliku od **Liste za preuzimanje / Packing liste**, koja se koristi za otpremu robe kupcima, **Lista za prenos** služi isključivo za interna skladišna premeštanja.

Prilikom izrade nove liste potrebno je uneti osnovne podatke, kao što su vrsta pickinga, izvorno skladište i korisnik. Utovarne jedinice koje će biti prenete mogu se jednostavno odabrati pomoću dugmeta **Help**, koje olakšava njihovu pretragu i dodavanje na listu.

Postupak omogućava i pregled artikala povezanih sa određenim narudžbinama kupaca, pružajući jasan pregled sadržaja odabranih utovarnih jedinica. Nakon završetka liste moguće je direktno generisati **otpremnicu (DDT)**, pri čemu se svi podaci o artiklima i utovarnim jedinicama automatski prenose u dokument.

Ovakav način rada pojednostavljuje upravljanje internim skladišnim premeštajima i obezbeđuje potpunu sledljivost zaliha.

:::

**Liste za prenos** veoma su slične [Listama za preuzimanje / Packing listama](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), s tom razlikom što se koriste za premeštanje **utovarnih jedinica** unutar sopstvenih skladišta, dok se **Liste za preuzimanje / Packing liste** koriste za otpremu robe kupcima.

U formi **Pretraga** moguće je pronaći prethodno unete liste.

Za izradu nove liste kliknite **Novo**.

Obavezno je uneti sledeće podatke:

- **Vrsta pickinga**: izbor vrste [pickinga](/docs/logistics/picking/picking-management)
- **Korisnik**: zaposleni koji kreira dokument
- **Korisnik za potvrdu**: zaposleni ovlašćen za potvrdu liste

Nakon unosa obaveznih i eventualnih dodatnih podataka moguće je sačuvati **Listu za prenos**.

Budući da se radi o internom prenosu, potrebno je definisati i:

- **Polazno skladište**
- **Odredišno skladište**

### Specifični dugmići

> **Obriši**: uklanja odabranu utovarnu jedinicu sa liste.  
> **Poništi prenos**: poništava potvrđeni prenos tako što briše knjiženje nastalo potvrdom prenosa. Umesto njega kreira se novo knjiženje povrata u polazno skladište.  
> **Help**: omogućava dodavanje novih utovarnih jedinica putem pomoćnog izbora.

### Specifični dugmići dostupni u pretrazi

> **Upravljanje UJ**: izborom **Liste za prenos** i pritiskom na ovo dugme otvara se forma **Upravljanje UJ**, u kojoj se prikazuju utovarne jedinice dostupne za prenos. Prenos utovarne jedinice izvršava se pomoću dugmeta **Premesti UJ**.  
> **Otpremnica (DDT)**: kreira otpremnicu (DDT) iz odabrane **Liste za prenos UJ**.

Sve informacije o korišćenju ove forme u WMS-u dostupne su u dokumentaciji [Liste za prenos UJ](/docs/logistics/wms/udc/loading-unit-transfer-list).

### Liste za prenos UJ (WMS verzija)

:::important Čemu služi

Funkcionalnost **Liste za prenos UJ** u Fluentis WMS-u omogućava upravljanje premeštanjem **utovarnih jedinica** između skladišta i skladišnih lokacija, obezbeđujući efikasnu organizaciju i potpunu sledljivost tokom internih prenosa.

Omogućava jednostavno kreiranje i uređivanje lista za prenos, čime se poboljšava organizacija internih logističkih procesa.

:::

Ova procedura koristi se za izradu **lista za prenos utovarnih jedinica**.

**Liste za prenos UJ** veoma su slične [Listama za preuzimanje UJ / Packing listama](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), s tom razlikom što se koriste za premeštanje utovarnih jedinica unutar sopstvenih skladišta, dok se **Liste za preuzimanje UJ / Packing liste** koriste za otpremu robe kupcima.

U formi za pretragu moguće je pronaći željene liste prema:

- **vrsti**
- **datumu unosa**
- **datumu otpreme**
- **statusu** liste.

Nakon izbora liste moguće ju je otvoriti pomoću dugmeta **Otvori**. Unutar liste korisnik može uređivati utovarne jedinice na kartici **Detalji UJ**.

Na toj kartici moguće je:

- ukloniti postojeću utovarnu jedinicu pomoću dugmeta **Obriši UJ**
- dodati novu utovarnu jedinicu jednostavnim očitavanjem njenog bar-koda.

Nakon završetka izmena potrebno je sačuvati listu pritiskom na dugme **Sačuvaj**.

Iz forme za pretragu moguće je kreirati i novu listu pritiskom na dugme **Novo**.

Automatski se predlažu:
- **trenutni datum**
- **polazno skladište** definisano u tabeli [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

Korisnik zatim unosi podatke o:
- **odredišnom skladištu**
- **odredišnoj skladišnoj lokaciji**.

Nakon izbora **vrste pickinga**, sistem automatski predlaže i broj liste.
Na kartici **Detalji UJ** korisnik zatim dodaje utovarne jedinice očitavanjem njihovih bar-kodova.
Nakon završetka unosa dovoljno je sačuvati listu pritiskom na dugme **Sačuvaj**.

Iz forme za pretragu takođe je moguće:

- otvoriti odabranu listu samo za pregled pomoću dugmeta **Pregled**
- obrisati listu pomoću dugmeta **Obriši**.

Skladišno knjiženje generiše se tek kroz proceduru [Potvrda prenosa](/docs/logistics/wms/udc/confirm-transfer).

### Parametri knjiženja/rasknjiženja

Potrebno ih je definisati u tabeli [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Za ovaj parametar **predložak skladišta** može ostati prazan.

:::note Napomena

Ako je u tabeli [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) korisniku dodeljeno samo jedno skladište, ono će biti automatski predloženo. Ako je dodeljeno više skladišta, sistem neće predložiti nijedno, pa će korisnik moći da odabere samo jedno od dodeljenih skladišta.

:::

Sve informacije o načinu definisanja bar-kodova koji se očitavaju u polju **Bar-kod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

