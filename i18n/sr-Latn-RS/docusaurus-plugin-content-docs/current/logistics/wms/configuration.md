---
title: Konfigurisanje
sidebar_position: 2
---

**Instalacija na uređaj**

Da biste instalirali aplikaciju na uređaj, potrebno je koristiti .apk datoteku.

**Preuzimanje ažuriranja**

Ako se klijentsko okruženje ažurira, nije potrebno ponovo instalirati aplikaciju, jer će aplikacija automatski preuzeti sve informacije sa servera i ažurirati se. Postoje specifični slučajevi u kojima je ipak potrebno zameniti .apk datoteku na uređaju, pa će biti neophodno ponovo instalirati aplikaciju.

**Konfiguracija u WPF-u**

- **Meni/Korisnik**: kreiranje prilagođenog *Menija* u kojem se prikazuju samo forme koje treba koristiti. WMS korisnik mora imati aktiviranu oznaku za *Fluentis WMS rešenje*.

- **Parametri skladišta za ulaz/izlaz po korisniku**: ovi parametri služe za postavljanje ograničenja za korisnike i mogu se definisati u tabeli [Parametri skladišta za ulaz/izlaz po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping), koja se nalazi u *Podešavanja > Opšti parametri*. Ako ti parametri nisu definisani, korisnik može obavljati operacije premeštanja na bilo kom skladištu, ali to podrazumeva izbor skladišta u pojedinim formama zajedno sa odgovarajućim predloškom. Takav način rada nije preporučljiv niti ga operater može jednostavno kontrolisati. U ovim parametrima moguće je za svaku formu i svakog operatera definisati skladište i podrazumevani predložak koji će se automatski predlagati prilikom otvaranja forme.

- **Barcode tokenizer**: barkodovi se mogu konfigurisati u formi [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer), koja se nalazi na putanji: *Tabele > Opšta podešavanja > Barcode tokenizer*. Na taj način program može „tumačiti“ barkodove i izvršavati odgovarajuće operacije.

- **Alternativna JM – Podrazumevano za WMS**: samo za forme *Utovar artikla*, *Istovar artikla*, *Premeštanje artikla*, *Korekcija artikla*, *Zaliha artikla* i *Inventar* uvedena je mogućnost upravljanja robom putem alternativne merne jedinice. Konfiguracija se vrši aktiviranjem oznake *Podrazumevano za WMS* na kartici [Alternativne merne jedinice](/docs/erp-home/registers/items/create-new-item) u *Šifarniku artikala*. U navedenim formama prikazivaće se samo alternativna merna jedinica u polju **Merna jedinica**, dok će kreirana skladišna kretanja imati popunjena polja **Alternativna merna jedinica** i **Alternativna količina** prema definisanom faktoru konverzije.

- **Forme u WPF-u**: za pristup formama u WPF-u korisnik mora imati dodeljeno rešenje **F21-WMS**.

- **WMS licenca**: WMS koristi namenske licence. Na kartici **Licenca** u WPF-u moguće je proveriti broj licenci dodeljenih WMS-u. Licencu koristi svaki korisnik kojem je dodeljeno rešenje **F21-WMS**, bez obzira pristupa li sistemu putem mobilnog uređaja ili putem WPF aplikacije.