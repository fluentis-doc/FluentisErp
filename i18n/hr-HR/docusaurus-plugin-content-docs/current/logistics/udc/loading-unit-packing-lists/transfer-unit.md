---
title: Liste za prijenos utovarnih jedinica (WPF i WMS verzija)
sidebar_position: 2
---

### Liste za prijenos(WPF verzija)

:::important Čemu služi

**Lista za prijenos utovarnih jedinica** u Fluentis ERP-u namijenjena je upravljanju premještanjem **utovarnih jedinica** unutar vlastitih skladišta. Omogućuje jednostavno, sustavno i učinkovito upravljanje internim premještajima robe između skladišta i skladišnih lokacija.

Za razliku od **Liste za preuzimanje / Packing liste**, koja se koristi za otpremu robe kupcima, **Lista za prijenos** služi isključivo za interna skladišna premještanja.

Prilikom izrade nove liste potrebno je unijeti osnovne podatke, poput vrste pickinga, izvornog skladišta i korisnika. Utovarne jedinice koje će biti prenesene mogu se jednostavno odabrati pomoću gumba **Help**, koji olakšava njihovo pretraživanje i dodavanje na listu.

Postupak omogućuje i pregled artikala povezanih s određenim narudžbama kupaca, pružajući jasan pregled sadržaja odabranih utovarnih jedinica. Nakon dovršetka liste moguće je izravno generirati **otpremnicu (DDT)**, pri čemu se svi podaci o artiklima i utovarnim jedinicama automatski prenose u dokument.

Ovakav način rada pojednostavljuje upravljanje internim skladišnim premještajima te osigurava potpunu sljedivost zaliha.

:::

**Liste za prijenos** vrlo su slične [Listama za preuzimanje/ Packing listama](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), s tom razlikom što se koriste za premještanje **utovarnih jedinica** unutar vlastitih skladišta, dok se **Liste za preuzimanje/ Packing liste** koriste za otpremu robe kupcima.

U formi **Pretraživanje** moguće je pronaći prethodno unesene liste.

Za izradu nove liste kliknite **Novo**.

Obvezno je unijeti sljedeće podatke:

- **Vrsta pickinga**: odabir vrste [pickinga](/docs/logistics/picking/picking-management)
- **Korisnik**: zaposlenik koji kreira dokument
- **Korisnik za potvrdu**: zaposlenik ovlašten za potvrdu liste

Nakon unosa obveznih i eventualnih dodatnih podataka moguće je spremiti **Listu za prijenos**.

Budući da se radi o internom prijenosu, potrebno je definirati i:

- **Polazno skladište**
- **Odredišno skladište**

### Posebni gumbi

> **Obriši**: uklanja odabranu utovarnu jedinicu s liste.  
> **Poništi prijenos**: poništava potvrđeni prijenos tako da briše knjiženje nastalo potvrdom prijenosa. Umjesto njega kreira se novo knjiženje povrata u polazno skladište.  
> **Help**: omogućuje dodavanje novih utovarnih jedinica putem pomoćnog odabira.

### Posebni gumbi dostupni u pretraživanju

> **Upravljanje UJ**: odabirom **Liste za prijenos** i pritiskom na ovaj gumb otvara se forma **Upravljanje UJ**, u kojoj se prikazuju utovarne jedinice dostupne za prijenos. Prijenos utovarne jedinice izvršava se pomoću gumba **Premjesti UJ**.  
> **Otpremnica (DDT)**: kreira otpremnicu (DDT) iz odabrane **Liste za prijenos UJ**.

Sve informacije o korištenju ove forme u WMS-u dostupne su u dokumentaciji [Liste za prijenos UJ](/docs/logistics/wms/udc/loading-unit-transfer-list).

### Liste za prijenos UJ (WMS verzija)

:::important Čemu služi

Funkcionalnost **Liste za prijenos UJ** u Fluentis WMS-u omogućuje upravljanje premještanjem **utovarnih jedinica** između skladišta i skladišnih lokacija, osiguravajući učinkovitu organizaciju i potpunu sljedivost tijekom internih prijenosa.

Omogućuje jednostavno kreiranje i uređivanje lista za prijenos, čime se poboljšava organizacija internih logističkih procesa.

:::

Ova se procedura koristi za izradu **lista za prijenos utovarnih jedinica**.

**Liste za prijenos UJ** vrlo su slične [Listama za preuzimanje UJ / Packing listama](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), s tom razlikom što se koriste za premještanje utovarnih jedinica unutar vlastitih skladišta, dok se **Liste za preuzimanje UJ / Packing liste** koriste za otpremu robe kupcima.

U formi za pretraživanje moguće je pronaći željene liste prema:
- **vrsti**
- **datumu unosa**
- **datumu otpreme**
- **statusu** liste.

Nakon odabira liste moguće ju je otvoriti pomoću gumba **Otvori**. Unutar liste korisnik može uređivati utovarne jedinice u kartici **Detalji UJ**.

U toj kartici moguće je:
- ukloniti postojeću utovarnu jedinicu pomoću gumba **Obriši UJ**
- dodati novu utovarnu jedinicu jednostavnim očitavanjem njezina barkoda.

Nakon završetka izmjena potrebno je spremiti listu pritiskom na gumb **Spremi**.

Iz forme za pretraživanje moguće je kreirati i novu listu pritiskom na gumb **Novo**.

Automatski se predlažu:
- **trenutni datum**
- **polazno skladište** definirano u tablici [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

Korisnik zatim unosi podatke o:
- **odredišnom skladištu**
- **odredišnoj skladišnoj lokaciji**.

Nakon odabira **vrste pickinga**, sustav automatski predlaže i broj liste.

U kartici **Detalji UJ** korisnik zatim dodaje utovarne jedinice očitavanjem njihovih barkodova.

Nakon završetka unosa dovoljno je spremiti listu pritiskom na gumb **Spremi**.

Iz forme za pretraživanje također je moguće:
- otvoriti odabranu listu samo za pregled pomoću gumba **Pregled**
- obrisati listu pomoću gumba **Obriši**.

Skladišno knjiženje generira se tek kroz proceduru [Potvrda prijenosa](/docs/logistics/wms/udc/confirm-transfer).

### Parametri knjiženja/rasknjiženja

Potrebno ih je definirati u tablici [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Za ovaj parametar **predložak skladišta** može ostati prazan.

:::note Napomena

Ako je u tablici [Parametri knjiženja/rasknjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) korisniku dodijeljeno samo jedno skladište, ono će biti automatski predloženo. Ako je dodijeljeno više skladišta, sustav neće predložiti nijedno te će korisnik moći odabrati samo jedno od dodijeljenih skladišta.

:::

Sve informacije o načinu definiranja barkodova koji se očitavaju u polju **Barkod** dostupne su u dokumentaciji za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
