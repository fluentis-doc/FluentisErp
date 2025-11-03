---
title: Novi POS  
sidebar_position: 2
---

Forma **Kreiraj POS** otvara se putem putanje **Prodaja > POS > Kreiraj POS** ili pomoću tipke **Novo** koja se nalazi u formi za pretragu *POS*-a.  

## **1. Obavezni podaci**
U formi za unos automatski se predlažu **Datum** i **Godina** trenutni, ali se mogu promijeniti.  

Za nastavak kreiranja prodajne fakture korisnik mora unijeti sljedeća obavezna polja:  

- **Vrsta POS-a**, unaprijed definirana u *Konfiguracija > Tablice > Prodaja > Vrste POS-a*.  

- **Broj** — svakom se dokumentu automatski dodjeljuje broj prema numeraciji definiranoj u tablici [Numeracija POS-a](/docs/configurations/tables/fluentis-numerations)  i tipu dokumenta povezanom s njom.  

- **Konto**, koristeći [pomoć polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  ili unosom [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) podataka.- 

:::danger[Pažnja]
Ovo polje nije relevantno za upravljanje [**Kontabilizacijom POS-a**](/docs/sales/pos/pos-accounting). Računovodstvena stavka povezana s kontabilizacijom POS-a mora imati definiran **FIKSNI** račun kupca s detaljnim **subkontom** (npr. račun “Kupac gotovinski promet”). Tip iznosa u računovodstvenoj stavci za subkonto kupaca bit će postavljen kao *Ukupan dokument / knjiženje*.
:::

- **Kartica subjekta**: alternativno polje prethodnom *Kontu* koje se koristi za unos *kontakta* koji nije povezan ni s jednim subkontom.

### 1.1 Ukupni iznosi dokumenta

Nella parte destra della form sono presenti i totali del documento.

**Bruto iznos artikala**: predstavlja zbroj vrijednosti svih artikala;

**Predujam**: predstavlja vrijednost eventualnog primljenog predujma;

**Iznos poklona**: predstavlja iznos artikala tipa poklon unesenih u karticu *Articoli*.

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost popusta primijenjenih na artikle, ali bez konačnih popusta. 

**Neto iznos artikala**: *Bruto iznos artikala* – *Ukupni primijenjeni popusti*; 

**Ukupni konačni rabati**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala; 

**Ukupno s neto finalnim rabatima**: *Neto iznos artikala* - *Ukupni konačni rabati*;

**Nedokumentirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikle *Tip trošak*; 

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mreži *Naknade*; 

**Troškovi ovjere**: predstavlja zbroj troškova ovjere unesenih u mreži *Naknade*;

**Dokumentirani troškovi**: predstavlja vrijednost troškova unesenih u mreži *Naknade*; 

**Osnovica**: *Neto iznos artikala* – *Konačni rabati* + *Ukupno nedokumentirani troškovi* + *Ukupno dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;

**Ukupno**: *Osnovica* + *PDV*.

<SummariesDocumentTotal />

#### Posebne tipke   
>  **Fiskalno**: omogućuje generiranje fiskalnog računa u komunikaciji s blagajnom (nakon prethodne konfiguracije veze kroz odgovarajuća polja).  
> **Otpremi POS**: omogućuje otpremu POS-a ako su za svaki artikl navedeni skladište i uzrok.


## **2. Zaglavlje**

Nakon unosa obaveznih podataka u gornjem dijelu, korisnik može nastaviti unos ostalih podataka[ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  ili putem [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Unosom **Konta** automatski se predlažu svi podaci zaglavlja prema postavkama u [kartici kontakta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), poljima adrese i *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Otprema**: [Otprema](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date)

#### Ostala polja

- **Status POS-a**: prilikom kreiranja POS-a nijedna opcija nije aktivna. Ova sekcija sadrži:  
> - **Status POS-a**: prilikom kreiranja POS-a nijedna opcija nije aktivna. Ova sekcija sadrži:    
> - **Otpremljeno**: označava da je POS otpremljen iz skladišta ručno ili automatskom procedurom.    
> - **Knjiženo**: automatski se aktivira kada se POS knjiži.     
> - **Poništeno**: aktivni pokazatelj omogućuje poništavanje POS-a.  

:::note
Ovi se pokazatelji mogu poništiti postupkom vraćanja operacije.
:::

- **Naša referenca / Vaša referenca**: polja u koja se obično unose interne i kupčeve reference vezane uz POS.  

**Početne bilješke**: mogu se odabrati bilješke prethodno unesene u istoimenu tablicu koja se nalazi u *Konfiguracija > Korisnost > Upravljanje šifriranim bilješkama*. Za to korisnik treba napraviti dvoklik na polje **Početna bilješka** kako bi otvorio *Pomoć šifriranih bilješki* i odabrao podatke, ili desnim klikom miša može otvoriti prozor u kojem je moguće upisati vrlo dugačak tekst bilješke. Ako polje sadrži neku vrijednost, boja pozadine polja se mijenja.

- **Operater**: omogućuje unos korisnika koji kreira dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici* putem putanje *Početna > Zaposlenici*.  

- **Projekt**: putem [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom.  

### 2.1 Plaćanja

**Rješenja plaćanja** automatski se preuzimaju iz *Kartice kupca > tab Plaćanja* te ih korisnik može izmijeniti ili obrisati.

#### Posebna tipka

> **Izbriši plaćanja**: koristi se za brisanje odabranih redaka plaćanja.

### 2.2  Popusti

Predlažu se samo unaprijed definirani popusti iz *Kartice kupca > kartica Popusti*, a korisnik ih može mijenjati ili brisati.
  
Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi redak artikla unesen u dokument.

Ako nakon unosa redaka artikla bude unesen novi popust u zaglavlju, taj popust se neće replicirati u već unesenim redovima artikla.

*Posebna tipka*

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

### 2.3 Agenti

Navodi kod agenta i njegovu proviziju za svaki redak artikla. Predlažu se podaci definirani u *Kartici kupca > tab Agenti*.

Ako provizija nije povezana s kupcem, agent se svejedno mora unijeti, ali s provizijom NULL — jer bi 0 značilo da je povezan, ali bez naknade.

Ista će se sekcija pojaviti za svaki redak artikla u odgovarajućem tabu *Agenti*.

#### Posebna tipka

> **Izbriši agente**: omogućuje brisanje odabranih agenata.

## **3. Artikli**

U ovoj kartici unose se svi artikli s pripadajućim podacima.

Za opći opis zajedničkih funkcionalnosti formi pogledaj [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz upotrebu [helpa na polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili mogu biti predloženi iz povezanih procedura.

Za unos **novog artikla** potrebno je pozicionirati se na redak i unijeti podatke ili koristiti tipku **Novo** u traci izbornika.


### 3.1 Obavezni podaci

**Broj retka**: ovo polje će se automatski i progresivno popunjavati prilikom unosa podataka u retku.

- **Vrsta retka** omogućuje odabir artikala različitih karakteristika:

> - **Kodirani artikl**: artikli koji su kodirani u šifrarniku i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> - **Artikl – bilješka**: obična napomena, ne utječe na računovodstvo ni skladište.
> - **Artikl – poklon**: označava da je artikl u tom retku poklon i nema trošak za kupca.

**Klasa/Šifra/Opis artikla**: se ogu unijeti  [ručno ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz upotrebu  [helpa u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koji će prikazati sve unesene podatke u *Šifarniku artikla*.

Nakon unosa artikla, njegov *Opis* bit će automatski preuzet iz šifarnika. Ako artikl ima *Varijante*, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: predlaže se glavna mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.

**Varijante**: Ako odabrani artikal ima varijante, bit će potrebno odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante je koristan za artikle s ovom posebnom konfiguracijom koji mogu imati cijenu različitu od standardno postavljene. Kao rezultat, cijena artikla s varijantama može biti drugačija od cijene artikla bez varijanti. To može eventualno zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne mjerne jedinice i kao zadanu vrijednost ima 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izuzimanje (na primjer iz narudžbe dobavljača).

- **Cijena s PDV-om**: predstavlja cijenu s uključenim PDV-om, prethodno unesenu u *Karticu artikla > kartica Troškovi* i može se razlikovati po skladištima.

- **PDV** i **Osnovica** automatski se izračunavaju na temelju cijene s PDV-om.

#### Pulsanti specifici

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

### 3.2 Sconti/Listini

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.3 Dettaglio articolo

All'interno di questo tab vengono riportarte/inserite ulteriori informazioni relative all'articolo.

- **Articolo**: riprende le informazioni dell'articolo selezionato nella griglia degli articoli.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo.

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

- **Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*.

Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* 

- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dalla tabella *Tipi POS*.

- **Note**: offre la possibilità di inserire note per ogni articolo.

### 3.4 Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.5 Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## **4. Riepiloghi**

### 4.1 Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Spese/Sconti/Maggiorazioni finali

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### 4.4 Riepilogo scadenze

Rappresenta il riepilogo delle scadenze del documento, per ogni *tipo* e *soluzione* di pagamento. 
 
- **Numero**: valore progressivo della riga.  
- **Pagamento**: rappresenta il codice alfanumerico del *Tipo pagamento* ripreso dalla *Testata del documento > tab Pagamenti*.  
- **Importo**: Importo della scadenza calcolato. Può essere forzato manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*. (Scattano in automatico dei controlli e avvisi sulla quadratura tra i valori delle scadenze e il totale fattura)
- **Data scadenza**: Data della scadenza calcolata. Può essere forzata manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*.
- **Spese di incasso**: Campo in cui riportate le spese di incasso calcolate.
- **IVA**: da applicare alle spese di incasso (può essere impostata anche manualmente)
- **Causale pagamento**: è possibile inserire direttamente in fattura una causale contabile che da luogo ad una scrittura automatica di incasso / pagamento. NB prestare attenzione al template della causale perchè utilizzerà i conti presenti anche senza sottoconto, motivo per il quale è presente il campo seguente.
- **Conto/sottoconto cliente**: conto che usa per incassare/pagare (cassa o banca ad esempio) la scadenza andando a sovrascrivere il conto presente nella causale contabile di pagamento (o incasso)