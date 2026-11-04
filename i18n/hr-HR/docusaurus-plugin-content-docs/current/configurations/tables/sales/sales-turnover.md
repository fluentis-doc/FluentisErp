---
title: Promet prodaje
sidebar_position: 10
---

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

Za unos novih zapisa potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

#### Specifična polja

**Tip:** identifikacijska šifra prometa prodaje.

**Opis:** opis prometa prodaje.

**Konto/Podkonto/Opis podkonta:** konto troška koji se upotrebljava prilikom knjiženja prodajnih dokumenata.

**Vrsta PDV-a:** upotrebljava se prilikom knjiženja dokumenta. Obično je postavljena na opću vrstu. Za više pojedinosti provjerite njezinu upotrebu u računovodstvenim predlošcima i računovodstvenim knjiženjima u administrativnom području.

**Vrsta iznosa:** upotrebljava se prilikom knjiženja dokumenta. Za više pojedinosti o njezinoj računovodstvenoj [upotrebi](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) pogledajte računovodstvena knjiženja u administrativnom području.

**Grupa proizvoda/Opis grupe proizvoda:** polje za statističku dodjelu prodaje za CRM-ovu prognozu prodaje (Sales Forecast).

**Detalji po državama:** ovi se podaci upotrebljavaju samo za razmjenu podataka s vanjskim programima. U budućnosti će biti moguće definirati različita konta troška prema državi i vrsti knjiženja artikla, koja je povezana u šifarniku kupaca.

:::note Napomena
Ako je *Vrsta fakturiranja* unesena u *šifarnik artikala*, ta će se šifra predložiti u retcima artikala nabavnog dokumenta i automatizirati knjiženje dokumenata na određeni protukonto.
:::

#### Primjer prodajnog računa

Ako je *Vrsta fakturiranja* već unesena u *šifarnik artikala*, u prodajnim dokumentima bit će prikazana na kartici *Artikli*, u polju *Promet prodaje*. Ako nije unesena u šifarnik artikala, moguće ju je odabrati izravno unutar prodajnog dokumenta putem odgovarajućeg padajućeg izbornika.

Ako vrsta fakturiranja nije unesena u šifarnik artikala, a korisnik je zaboravi ručno unijeti u prodajni dokument, sustav omogućuje nastavak knjiženja dokumenata bez blokiranja postupka. U tom slučaju, ako se takav odabir smatra prikladnim, upotrebljava se zadani protukonto analitičkog konta koji je postavljen u **Šifarnik kontakata > kartica Podaci knjiženja > kartica Administracija**, u polju **Trošak/prihod zadane protustavke**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).