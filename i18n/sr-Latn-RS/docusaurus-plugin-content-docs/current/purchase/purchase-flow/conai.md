---
title: Upravljanje CONAI-jem
sidebar_position: 2
---

Upravljanje **CONAI-jem** (*Consorzio Nazionale Imballaggi*) u Fluentisu je modul koji omogućava automatsku primenu troškova povezanih sa CONAI ekološkim doprinosom na dokumentima nabavke i prodaje. Ovaj alat namenjen je kompanijama koje posluju sa ambalažom i moraju poštovati italijanske propise o zbrinjavanju i reciklaži ambalažnih materijala. Automatska primena CONAI troškova u Fluentisu zasniva se na parametrima koje definiše korisnik i direktno se odražava na knjigovodstvene dokumente, obezbeđujući tačan i usklađen obračun.

## Aktivacija upravljanja CONAI-jem

Za aktivaciju upravljanja CONAI-jem u Fluentisu potrebno je konfigurisati određena polja u tabeli [Društva](/docs/configurations/tables/general-settings/company), u odeljku **Ostala podešavanja**:

- **Šifra CONAI partnera**: šifra koju kompanija dobija prilikom registracije u CONAI. Predstavlja jedinstveni identifikator koji služi za praćenje prijava i ekoloških doprinosa koje kompanija duguje na osnovu ambalaže stavljene na tržište.

- **Tip CONAI partnera**: definiše ulogu kompanije u italijanskom lancu ambalaže. Dostupni su sledeći tipovi partnera:
  - **A – Samostalni proizvođač**: kompanija koja proizvodi ambalažu za sopstvene potrebe, bez prodaje trećim licima. Ambalažu koristi za pakovanje sopstvenih proizvoda.
  - **U1 – Trgovac/Distributer**: kompanija koja kupuje ambalažu radi dalje prodaje, bez sopstvene upotrebe. U ovu grupu spadaju veletrgovci i distributeri.
  - **U2 – Ostali korisnici**: kompanije koje kupuju ambalažu za pakovanje proizvoda namenjenih prodaji, ali je same ne proizvode. Ne pripadaju kategorijama **Samostalni proizvođač** ni **Trgovac/Distributer**.
  - **P – Proizvođač**: kompanija koja proizvodi ambalažu i prodaje je drugim korisnicima ili distributerima.

- **Datum početka/završetka CONAI partnerstva**: omogućava definisanje perioda važenja partnerstva sa CONAI-jem, ako je primenljivo.

## Tipovi materijala

Upravljanje tipovima ambalažnih materijala vrši se u logističkoj tabeli [Tipovi materijala](/docs/configurations/tables/logistics/material-types). U ovoj tabeli definišu se različiti materijali (poput čelika, aluminijuma, papira, drveta, plastike i dr.) koji se koriste za ambalažu. Za svaki tip materijala potrebno je podesiti:

- **CONAI šifra materijala**: određuje tip materijala prema CONAI klasifikaciji.
- **Šifra fiktivnog artikla**: koristi se za kreiranje reda troška CONAI doprinosa na primkama ili računima. Ako šifra artikla nije navedena, taj materijal neće moći da se koristi u CONAI konfiguraciji.

Moguće je koristiti jednu šifru artikla za sve materijale ili definisati posebnu šifru za svaki materijal, u zavisnosti od željenog nivoa detalja na poreskim dokumentima.

- **Tarife i jedinice mere**: donja tabela omogućava definisanje tarifa za svaki materijal prema različitim vremenskim periodima. Jedinica mere, koja je najčešće tona, mora odgovarati jedinici mere definisanoj na prodajnim artiklima i fiktivnim CONAI artiklima.

## Definicije u šifarniku artikala

Na kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala moguće je definisati karakteristike ambalaže potrebne za upravljanje CONAI-jem. U ovom odeljku mogu se podesiti:

- **Koristi u nabavci/prodaji**: određuje da li se CONAI doprinos primenjuje na artikal u dokumentima nabavke ili prodaje.
- **Tip ambalaže**: određuje da li je ambalaža primarna, sekundarna ili tercijarna.
- **Prazna ili puna**: određuje da li je ambalaža prazna (oznaka nije uključena) ili puna (oznaka je uključena).
- **Ambalažni materijali**: spisak materijala od kojih se ambalaža sastoji, zajedno sa njihovom težinom u definisanoj jedinici mere.

## Podešavanja u šifarniku kupaca/dobavljača

Kako bi se CONAI troškovi ispravno primenjivali na dokumentima nabavke ili prodaje, potrebno je pravilno konfigurisati šifarnik kupca ili dobavljača na kartici [CONAI podešavanja](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

- **Tip CONAI partnera**: za obračun u prodaji kupac mora biti **Samostalni proizvođač (A)**, **Trgovac/Distributer (U1)** ili **Ostali korisnici (U2)**. Za obračun u nabavci dobavljač mora biti **Proizvođač (P)**.
- **Procenti oslobođenja**: u tabeli je moguće definisati procente oslobođenja za pojedine tipove materijala, zajedno sa odgovarajućim periodima važenja.

## Tipovi primki i tipovi računa

U [tipovima primki](/docs/configurations/tables/sales/delivery-notes-type) i [tipovima računa](/docs/configurations/tables/sales/invoices-type) nalazi se oznaka **Upravljanje CONAI-jem**. Uključivanjem ove oznake aktivira se automatski obračun CONAI doprinosa za izabrani tip dokumenta.

## Primer primene na izlaznom računu

Ako je upravljanje CONAI-jem aktivirano za društvo, na kartici **Artikli** izlaznog računa biće dostupan pododeljak **CONAI materijali za artikal**. Ovaj odeljak sadrži ambalažne materijale od kojih se artikal sastoji, zajedno sa sledećim podacima:

- **Jedinica mere**: određuje jedinicu mere koja se koristi za materijal.
- **Jedinična težina**: težina pojedinog materijala, umanjena za eventualni procenat oslobođenja definisan u šifarniku kupca.
- **Ukupna težina**: obračunava se množenjem prodate količine artikala sa jediničnom težinom.

Prilikom čuvanja dokumenta ili pritiskom na dugme **Preračun CONAI-ja** na alatnoj traci, Fluentis će automatski dodati jedan ili više redova troška, koristeći odgovarajući artikal materijala sa količinom i cenom koje odgovaraju CONAI doprinosu za taj materijal.

U XML datoteci elektronskog računa za SDI (*Sistema di Interscambio*), Fluentis će automatski dodati oznake u odeljak **Altri Dati Gestionali** kako bi prikazao ambalažne materijale i njihove jedinične težine.

## Kontrolni i zbirni izveštaji

U modulima ulaznih i izlaznih računa dostupna su dva formata ispisa koji omogućavaju pregled periodičnih ukupnih vrednosti po tipovima materijala, kako za internu kontrolu, tako i za pripremu podataka koji se prijavljuju CONAI-ju.

Za izlazne račune dostupan je i izveštaj koji odgovara obrascima dostupnim na internet stranicama CONAI-ja za učitavanje podataka prijava, pri čemu se materijali filtriraju prema početnim slovima CONAI šifre definisane u tabeli materijala.