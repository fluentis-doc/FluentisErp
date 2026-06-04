---
title: Tipovi ponuda za klijenta
sidebar_position: 23
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako se želi konfigurirati ručno, potrebno je pratiti kontrolni popis na poveznici.
:::

Tablica se otvara putem **Tablice > Prodaja > Tipovi ponuda za klijenta**.

Omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.  

Forma se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Pretraži** kako bi se rezultati prikazali u mreži rezultata.  

Za unos novih zapisa potrebno je kliknuti na prvu praznu red u mreži ili pritisnuti tipku **Novo**. 

**Šifra/Opis:** polja u kojima se unosi šifra i opis tipologije dokumenta (šifra mora biti jedinstvena).

**Hijerarhijska struktura**: uključivanjem ovog flag-a, artikli u ponudi prate hijerarhijsku strukturu; za više detalja pogledati [dokumentaciju](/docs/sales/offers/insert-offer).

**Izmjena verzije**: ovaj flag označava tipove ponuda za koje se upravlja verzijama.  

**Cijena s PDV-om**: omogućuje sustavu da preuzme prodajnu cijenu iz cjenika ili iz kartice artikla i prikaže je s uključenim PDV-om. Ako cjenik nije dostupan (npr. istekao cjenik ili nekompatibilna valuta), sustav preuzima troškove ili cijene iz kartice artikla i prikazuje ih s PDV-om. Troškovi i cijene u kartici su u EUR, a sustav ih po potrebi konvertira u valutu klijenta.

**Numeracija**: ovdje se unosi šifra odgovarajuće numeracije. Za više informacija o numeraciji dokumenata pogledati članak [Numeracije Fluentis](/docs/configurations/tables/fluentis-numerations).

**Tip narudžbe klijenta**: ovdje se označava [tip narudžbe prodaje](/docs/configurations/tables/sales/sales-order-types) koji se kreira prilikom konverzije ponude odgovarajućom procedurom.    

**Prodajni cjenik**: ovaj generički tip cjenika koristi se za pretraživanje cijena ako u kartici klijenta ili kontakta u kartici cjenici nije upisan nijedan tip cjenika. Obično se koristi za ponude CRM kontaktima koji još nisu postali klijenti i za koje nisu upisani tipovi cjenika u kartici.  

**Ispis i broj kopija**: ovim poljima definira se zadani ispis i broj kopija; za ispis zadane postavke potrebno je odabrati *Višestruki ispisi* prilikom ispisa.

**Tip prototipa artikla**: ovo polje sadrži tip prototipa artikla koji se kreira u proceduri kreiranja prototipa unutar ponude.  

**Tip prilike**: ako se u Tipu ponude poveže [Tip prilike](/docs/configurations/tables/crm/opportunities/opportunity-type), pri spremanju ponude kreira se [Nova prilika](/docs/crm/chance/new-chance) ako u zaglavlju ponude nije unesena već postojeća; ako jest, postojeća prilika se ažurira.  

**Upravljanje sredstvima i Tip operacije**: flag omogućuje upravljanje sredstvima za ovaj tip dokumenta. U sljedećem polju označava se tip operacije sredstava, koji u slučaju prodaje može biti potpuna ili djelomična prodaja ili uništenje.      

**Tip popusta/Opis**: u ovoj koloni moguće je povezati tip popusta koji će se primijeniti kada se popusti unose direktno u kolonu Popusti artikla u mreži artikala dokumenta (za više detalja pogledati članak [Upravljanje pojednostavljenim widgetom popusta](/docs/sales/sales-flow/discount-widget)).

