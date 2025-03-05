---
title: Panorama prodaje
sidebar_position: 1.1
description: Panorama 
draft: true
---

### Kreiranje prodajnih dokumenata

Fluentis omogućuje kreiranje sljedećih dokumenata, obično u ovom redoslijedu, ali samo je *faktura obvezna u procesu prodaje*.   

| <div style={{ width:'200px' }}>Dokument</div> | <div style={{ width:'400px' }}>Napomene</div> |
| :-- | :--|
| 1. [Prodajna ponuda](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list) | Predstavlja ponudu robe i/ili usluga koje su ponuđene kupcu/potencijalnom kupcu. *Ponuda ne uključuje nikakav zapis koji mijenja količine/vrijednosti u skladišnom upravljanju ili u računovodstvu.* |
| 2. [Narudžba kupca](/docs/sales/sales-orders/create-new-sales-orders\header) | Dokument je koristan za *planiranje proizvodnje*, *kreiranje narudžbi za kupnju* i *planiranje resursa*. Svaki dokument ažurira količine u skladištu i glavnoj knjizi. |
| 3. [Dokument prijevoza](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list) | Služi kako bi se naznačilo da je proizvod poslan. |
| 4. [Prodajni račun](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list) | S računom se zahtijeva **plaćanje** i **zabilježava** prihod u bilancu uspjeha. Račun za prodaju koji se kreira bez ikakve reference na isporuku smanjuje količinu u skladištu. Račun za prodaju uvijek stvara knjigovodstvenu operaciju s evidentiranjem prihoda i poreza te ažuriranjem računa kupaca na temelju nove nepodmirene ravnoteže.|

**Kreiranje drugih prodajnih dokumenata**

| <div style={{ width:'200px' }}>Dokument</div> | <div style={{ width:'400px' }}>Napomene</div> |
| :-- | :--|
| *Proforma račun* | Utječe na potvrđenu vrijednost zaliha klijenta (i količinu dostupnu u skladištu) i stvara knjigovodstvenu operaciju.|
| *Povrat od kupaca*| Povećavaju količinu u skladištu i ažuriraju povezane račune skladišta. |
| *Prodajni račun s plaćanjem* | Smanjuje količinu u skladištu i bilježi prihode i poreze.|
| *Obavijest o odobrenju dobavljača* | Povećava dostupne razine zaliha i stvara knjigovodstvene transakcije. Tereti račun kupca u glavnoj knjizi i korigira račun prihoda za isti iznos.|

### Prodajni postupci

Navodimo nekoliko najčešćih postupaka:  

| <div style={{ width:'200px' }}>Procedura</div> | <div style={{ width:'400px' }}>Napomene</div> |
| :-- | :--|
| Ručno kreiranje prodajnih dokumenata | Pregledati [Prodajna ponuda](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list), [Narudžbe klijenata](/docs/sales/sales-orders/create-new-sales-orders\header), [Dokument o prijevozu](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list), [Prodajni račun](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list)|
| Automatsko stvaranje prodajnih dokumenata | Fluentis također omogućuje stvaranje novih dokumenata na temelju postojećih (na primjer [Kreiraj račune iz otpremnice](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list)). Kada se ova operacija izvrši, prikazuju se samo otvoreni dokumenti (dokumenti za koje nije stvoren nijedan kasniji dokument i ostaju takvi sve dok svi članovi nisu preneseni na kasniji  dokument ili dok ih se ručno ne zatvori ili stornira).|
| Unos cijena i popusta | korištenje cijena iz prodajnih kataloga ili iz šifarnika artikala; korištenje popusta iz prodajnih kataloga. |
| Unos artikala | unos u račun čak i [nekodificirani artikli](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list), navođenjem samo njihovog opisa. |
| Unos napomena | unos [napomena za svaki artikal](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list), navođenje samo njihovog opisa. |
| Unos varijacija | povezivanje [postojećih varijacija s dodatnim atributima](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list), na razini artikla. |
| Kombiniranje pošiljki u jedan račun | stvaranje računa iz otpremnica mogućnošću [grupiranja otpremnica](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list) prema razlozima skladišta, valutama, agentima itd., ili grupiranje po rokovima plaćanja ili različitim godinama. |
| Registracija cijena, popusta i ugovora o plaćanju za prodaju | unos različitih popusta i posebnih cijena koji se odobravaju kupcima ovisno o artiklu, količinama i/ili datumu.|
| Knjiženje dokumenata | knjiženje računa i efekata. |
| Korištenje barkoda| stvaranje obavijesti putem barkoda.|
| Poništiti prodaju | Ako je registriran račun o prodaji plaćen, bit će potrebno stvoriti kreditnu notu o prodaji ili narudžbu o povratu robe za poništavanje prodaje. |
| Upravljanje kreditnim notama | xxxxxxxxxxxx|
| Obrada povrata | xxxxxxxxxxxx|
| Uredi ili otkaži račun| Operacije koje se mogu izvršiti na registriranom računu o prodaji prije nego što bude plaćen. Korisno je ako želite ispraviti tipfelere ili ako kupac traži izmjenu u obradi narudžbe unaprijed. |
| Postupci odobrenja | https://learn.microsoft.com/it-it/dynamics365/business-central/across-use-workflows|
 
### Postavke prodaje

| <div style={{ width:'200px' }}>Postavka</div> | <div style={{ width:'400px' }}>Napomene</div> |
| :-- | :--|
| Postavljanje dokumenata | Narudžbe, Otpremnice, [Fakture](/docs/configurations/parameters/sales/sales-invoices-parameters)|
| Postavljanje agenata | Postavljanje agenata kako bi ih mogli dodijeliti kupcima ili ocijeniti njihove performanse radi izračuna provizije na prodaju. |Postavljanje profila slanja dokumenata..|
| Postavljanje metoda plaćanja | Definiranje različitih Incoterms-a ponuđenih kupcima ili od dobavljača.|
| Postavljanje prijevoznika| Unos informacija o različitim pružateljima usluga prijevoza koji se koriste.|


### Vidi također 

[Video obuka o prodaji](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list)  

[Dodavanje novih polja u obrasce](/docs/object-navigator/load-request-object)  
[Izrada ispisa](/docs/object-navigator/create-report)  
[Zajedničke funkcije u obrascima](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list)  

[Registracija novih klijenata](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list)  
[Osnovni podaci o kontaktima](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list)  
[Osnovni podaci o artiklima](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list)  

