---
title: Scenario upravljanja agentima – primeri
sidebar_position: 5
---

# Scenario upravljanja agentima – primeri

Na ovoj stranici prikazano je nekoliko primera za kreiranje mogućeg scenarija upravljanja trgovačkim predstavnikom, odnosno agentom.

Ovo je korisno za razumevanje povezanosti između različitih funkcionalnosti i pruža praktične primere kriterijuma za obračun provizija.

Pratićemo sledeći redosled:

1. Definisanje provizionih razreda
2. Kreiranje kartice agenta i odgovarajuća konfiguracija
3. Povezivanje sa klijentima
4. Kreiranje prodajnih dokumenata
5. Naplata faktura
6. Kontrola obračuna provizija
7. Obračun agenata
8. Upravljanje naknadama agenata
9. Uplate Enasarco doprinosa i poreza po odbitku (osnovno)
10. Obrada potvrda o porezu po odbitku (osnovno)

## Definisanje provizionih razreda

Jedan od najčešće korišćenih kriterijuma za obračun provizija, a sa edukativnog aspekta i najzanimljiviji u odnosu na klasične metode poput fiksnog procenta ili procenta koji zavisi od klijenta, predstavljaju *Rasponi popusta*.

Cilj je definisati opadajuće provizije kako raste popust koji agent odobrava klijentu.

Posebnost konfiguracije ovog kriterijuma, u poređenju sa jednostavnijim metodama, jeste potreba da se unapred definišu rasponi popusta povezani sa odgovarajućim procentima provizije.

Zbog toga se najpre upravlja tabelom **Definisanje provizionih razreda**.

:::important
**Obratite pažnju na zaglavlje forme**: preporučuje se da bude stalno vidljivo pomoću opcije za pričvršćivanje (pin) u gornjem desnom uglu. Zaglavlje sadrži ključni filter za upravljanje tabelom: [*Raspon popusta*](/docs/configurations/tables/sales/discount-range).

Povezana tabela omogućava definisanje aktivnih tipova određivanjem šifre i opisa, kao i njihovo povezivanje sa unapred definisanim kriterijumom. Da bi bilo moguće pregledati ili uređivati detalje, potrebno je u zaglavlju forme izabrati odgovarajući *Raspon popusta*.
:::

U odnosu na izabrani raspon popusta, koji može biti tipa *Jedinstveni* (jednostavan), prema *klasi artikla*, *tipologiji artikla*, njegovoj *karakteristici*, *kategoriji robe* ili *prodajnom cenovniku*, moguće je definisati odgovarajuće detalje.

Ako nije izabran nijedan raspon popusta, pretraga će prikazati podatke samo za čitanje.

Na osnovu izabranog raspona popusta pojaviće se dodatni specifični filter u zaglavlju forme.

Na primer, ako se koristi raspon popusta prema kategoriji robe i u sistemu postoje kategorije kao što su vijčana roba ili alati, za svaku kategoriju prikazanu u levoj tabeli moguće je definisati provizione razrede na desnoj strani.

Postupak počinje unosom šifre i opisa. Na primer, raspon od 0% do 10% popusta može imati šifru **010** i opis **od 0 do 10%**. Zatim se definišu početna i krajnja vrednost raspona.

:::important
Posebnu pažnju treba obratiti na definisanje raspona bez praznina između vrednosti, imajući u vidu da raspon važi od vrednosti **veće ili jednake** početnoj granici do vrednosti **manje od** završne granice.
:::

U polju **Vrednost** definiše se procenat provizije za dati raspon, dok se u poslednjoj koloni bira opcija **Procenat**. Po potrebi moguće je koristiti i opciju **Vrednost** za fiksni iznos provizije.

Ako se koristi kriterijum popusta **Jedinstveni**, detalji sa leve strane neće biti prikazani, već se direktno definišu rasponi sa odgovarajućim procentima.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

Na slici je prikazan primer gde popust od 35% odgovara proviziji od 3%.

## Kreiranje kartice agenta i odgovarajuća konfiguracija

Prilikom kreiranja kartice agenta u ovom primeru prikazana su samo najvažnija polja. Za osnovne korake kreiranja kartice potrebno je konsultovati odgovarajuću dokumentaciju.

Nakon definisanja **kriterijuma obračuna provizije** (na primer po potvrđenoj porudžbini, izdatoj fakturi ili izvršenoj uplati), kao i ostalih podataka vezanih za poreze i socijalne doprinose, prelazi se na definisanje obračuna provizije.

U kartici [**Direktne provizije**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions) nalazi se tabela u kojoj se bira kriterijum **Rasponi popusta**.

Važno je obratiti pažnju na polje **Prioritet**. Podrazumevano je inicijalizovan kriterijum *Kartica agenta* sa prioritetom 1. Preporučuje se da se on postavi na niži prioritet, na primer 2, dok kriterijum *Rasponi popusta* treba imati prioritet 1.

Na taj način, ako se specifični kriterijum ne može primeniti, koristiće se rezervni kriterijum definisan na kartici agenta.

:::important
Kod složenih kriterijuma kao što su *Rasponi popusta* obavezno je definisati detalje pomoću opcije **Detalj izabranih procenata** koja se nalazi na alatnoj traci.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

U otvorenoj formi potrebno je ponovo izabrati odgovarajući raspon popusta kako bi se prikazali definisani provizioni razredi.

Postoje dve mogućnosti:

- korišćenje standardnih vrednosti;
- definisanje prilagođenih vrednosti za konkretnog agenta.

Odabirom opcije **Prilagođene provizije**, kolona **Vrednost** postaje dostupna za izmenu.

Takođe je moguće definisati referentnu cenu za obračun:

- cenu iz kartice artikla;
- cenu navedenu na prodajnom dokumentu.

:::important
Ne zaboravite da definišete period važenja, najmanje polje **Važi od**.
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Povezivanje sa klijentima

:::important
Bez obzira na izabrani kriterijum obračuna, agent mora biti povezan sa klijentima za koje ostvaruje proviziju.

Jednom klijentu može biti dodeljeno više agenata.
:::

Za povezivanje nije potrebno otvarati svaku karticu klijenta pojedinačno. Na raspolaganju je funkcionalnost **Dodela agenata** (*Home > Kontakti > Dodela agenata*).

Ova forma omogućava:

- pretragu svih klijenata;
- pregled već povezanih agenata;
- masovno dodavanje agenata;
- zamenu postojećih agenata;
- uklanjanje agenata;
- ažuriranje perioda važenja.

Moguće je i definisati procenat provizije po klijentu, ali se to ne koristi u ovom primeru jer je obračun zasnovan na popustima.

## Kreiranje prodajnih dokumenata

Obračun provizije u dokumentima kao što su porudžbine, otpremnice i fakture vrši se automatski na osnovu prethodno definisanih pravila.

Popust koji utiče na iznos provizije može biti definisan na više načina bez uticaja na sam obračun provizije.

Za više informacija pogledati proceduru [**Definisanje popusta**](/docs/sales/price-control/definition/).

U zaglavlju prodajnih dokumenata prikazani su povezani agenti, dok se detalji obračunate provizije mogu pregledati u kartici [**Artikli**](/docs/sales/sales-invoices/invoicing/sales-invoice).

## Naplata faktura

U ovom primeru kriterijum dospeća provizije zasnovan je na **izvršenoj uplati**.

Da bi provizija postala raspoloživa za obračun, neophodno je evidentirati zatvaranje otvorene stavke nastale knjiženjem izlazne fakture.

Kod naplate putem menica ili bankarskih instrumenata uzima se u obzir stvarni datum dospeća instrumenta, koji može biti produžen u skladu sa parametrima modula [Rizik kupca](/docs/configurations/parameters/treasury/customer-risk-parameters).

## Kontrola dospelih provizija

Za proveru provizija koje su dospele za obračun koristi se izveštaj [**Dospjele provizije**](/docs/sales/agents/reports/accrued-commissions).

Izveštaj prikazuje:

- iznose koji su dospeli;
- iznose spremne za obračun;
- vrednosti koje će biti uključene u narednu isplatu.

Dodatne informacije dostupne su kroz izveštaj [**Platne liste agenata**](//docs/sales/agents/reports/agents-payslip).

## Obračun agenata

Procedura [**Automatsko kreiranje obračuna provizija**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) omogućava obračun i označava provizije kao obračunate.

Nakon toga obračunate provizije više neće biti prikazane u izveštaju *Dospjele provizije*.

Preostali iznosi, na primer kod delimičnih uplata, biće uključeni u naredni obračun nakon zatvaranja odgovarajućih stavki.

:::important
Kod kriterijuma *Izvršena uplata* obračun uvek obuhvata sve dospele iznose do izabranog datuma. Nije moguće ograničiti obračun samo na određeni vremenski period uplata.

Filteri datuma odnose se na datume dokumenata, a ne na datume uplata.
:::

Nakon obračuna moguće je otvoriti kreirani obračun i pregledati:

- uključene fakture;
- stavke faktura;
- obračunate provizije po stavkama.

:::warning
Prikazani iznosi predstavljaju ukupno obračunate provizije po stavkama fakture, a ne nužno i iznose koji su dospeli za isplatu.
:::

## Upravljanje naknadama agenata

U obračunu su već sadržani podaci o:

- porezu po odbitku;
- doprinosima na teret agenta;
- Enasarco doprinosima na teret nalogodavca.

Korišćenjem odgovarajuće procedure moguće je iz obračuna [**kreirati naknadu**](/docs/sales/agents/procedures/create-professional-man-commission).

Kreirana naknada dostupna je u modulu [**Naknade primaocima prihoda**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Uplate Enasarco doprinosa i poreza po odbitku

Automatsko kreiranje naknade omogućava i [**upravljanje isplatama**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), bez obzira da li je agent izdao fakturu ili predračun.

Takođe se automatski evidentiraju obaveze prema poreskoj upravi za [**uplatu poreza po odbitku**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

Posebna procedura [**Knjiženje Enasarco doprinosa**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) generiše potrebna knjiženja troškova i obaveza.

## Obrada potvrde o porezu po odbitku

Proces se završava generisanjem [**Potvrde o porezu po odbitku**](/docs/finance-area/declarations/declarations/withholding-tax-certification) za agenta.

Ova funkcionalnost pripada administrativnom modulu i predstavlja zakonsku obavezu.

## Sažetak i dodatne informacije

Ovaj scenario prikazuje kompletan tok upravljanja agentima, od definisanja provizionih razreda i povezivanja sa klijentima do obračuna provizija, kreiranja naknada i poreskih obaveza.

Povezane teme:

- [Definisanje popusta](/docs/sales/price-control/definition/)
- [Dospjele provizije](/docs/sales/agents/reports/accrued-commissions)
- [Automatsko kreiranje obračuna provizija](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement)
- [Naknade primaocima prihoda](/docs/finance-area/professional-men/search-compensations/search-compensations-intro)

Za dodatne informacije o funkcionalnostima prodajnih agenata pogledajte povezanu dokumentaciju modula Prodaja i Finansije.