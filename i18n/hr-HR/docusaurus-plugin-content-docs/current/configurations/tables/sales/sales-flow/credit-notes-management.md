---
title: Upravljanje povratima i odobrenjima
sidebar_position: 3
---

U modulu Prodaja sustava Fluentis, upravljanje povratima i odobrenjima omogućuje evidentiranje i praćenje vraćene robe ili usluga od strane kupaca, uz automatsko generiranje potrebnih računovodstvenih i logističkih dokumenata.  
Ovaj proces osigurava pravilno praćenje transakcija te trenutno ažuriranje zaliha u skladištu i stanja kupaca u glavnoj knjizi.

Fluentis podržava različite vrste povrata:

- Povrat s odobrenjem (Nota odobrenja): vraćanje robe uz izdavanje odobrenja radi storniranja iznosa prethodno fakturiranog. Roba se može vratiti putem otpremnice (OTP) ili izravno prilikom izdavanja note odobrenja, ovisno o postavkama skladišta.

- Povrat bez odobrenja: vraćanje robe bez izdavanja note odobrenja, primjerice u slučaju zamjene artikala.  
U ovom se slučaju tipično koriste dokumenti otpreme radi zaduženja skladišta.

Povrat može biti:  

- Djelomični povrat: vraća se samo dio isporučene robe.  

- Potpuni povrat: vraća se cijela isporuka.

##  Operativni proces

Dokumenti **Povrata** mogu se generirati na dva načina:

1) *putem postupka **Storno** koji se nalazi na traci izbornika pretrage otpremnica ili računa.*  
   Ovim postupkom moguće je djelomično ili potpuno stornirati dokumente odabrane u mreži rezultata.  
   Nakon što se klikne tipka *Storno*, otvara se skočni prozor u kojem je potrebno:  
   - odabrati stavke artikala koje se storniraju zajedno s pripadajućim količinama,  
   - unijeti tip dokumenta koji se kreira (**bit će moguće odabrati samo vrste dokumenata s prirodom „Povrat”**),  
   - unijeti **predložak storna skladišta**.

2) *ručno, kreiranjem nove otpremnice ili računa.*  
   U tom slučaju važno je postaviti tip dokumenta s prirodom *Povrat*, unijeti kupca i artikle koje treba stornirati.  
   Kod ručno kreiranog povrata neće postojati automatska poveznica s izvornim dokumentom — korisnik ju mora dodati ručno.


Ako je izrađena otpremnica, iz nje se može generirati račun, bilo automatskim postupkom ili ručno.  
Prilikom spremanja ručno unesene note odobrenja, korisnik će biti upozoren da je potrebno unijeti negativnu količinu.  
Ova funkcionalnost osigurava ažuran prikaz prometa, uključujući negativne vrijednosti nota odobrenja.

:::note Pažnja  
U tablici [Vrste otpremnica](/docs/configurations/tables/sales/delivery-notes-type), Tipu otpremnice *Povrat* mora biti pridružen [Tip računa](/docs/configurations/tables/sales/invoices-type) *Nota odobrenja*.  
:::

Kod pretvaranja otpremnica povrata u note odobrenja mogu se pojaviti različiti slučajevi, ovisno o znakovima količine i cijene u izvornom dokumentu:
1)	Otpremnica Povrat      Kol.   10, Cijena  10 ->redak računa (običan ili kreditna nota) Kol.  -10, Cijena  10
2)	Otpremnica Povrat      Kol.  -10, Cijena  10 -> redak računa običan            Kol.  10, Cijena  10 
3)	Otpremnica Povrat      Kol.  -10, Cijena  10 -> redak računa KN                       Kol. -10, Cijena  10 
4)	Otpremnica Povrat      Kol.   10, Cijena -10 -> redak računa običan             Kol. -10, Cijena -10 
5)	Otpremnica Povrat       Kol.   10, Cijena -10 -> redak računa KN                       Kol. -10, Cijena  10 
6)	Otpremnica Povrat      Kol.  -10, Cijena -10 -> redak računa običan             Kol.  10, Cijena -10 
7)	Otpremnica Povrat      Kol.  -10, Cijena -10 -> redak računa KN                       Kol. -10, Cijena  10 
8)	Otpremnica Obična Kol.  10, Cijena  10 -> redak računa KN                        Kol. -10, Cijena  10
9)	Otpremnica Obična Kol.  -10,Cijena  10 -> redak računa KN                        Kol. -10, Cijena  10
10)	Otpremnica Obična Kol.   10,Cijena -10 -> redak računa KN                        Kol. -10, Cijena  10 
11)	Otpremnica Obična Kol.  -10,Cijena -10 -> redak računa KN                        Kol. -10, Cijena  10 

## Konfiguracije i parametri

Za ispravnu obradu povrata i nota odobrenja potrebno je provjeriti sljedeće postavke:  

- **Vrste dokumenata** – definirati vrste dokumenata za povrate i note odobrenja.    

- **Skladište i predložak skladišta** – svaki dokument koji utječe na stanje skladišta mora imati povezano  
[Skladište](/docs/configurations/tables/logistics/warehouses) i odgovarajući [predložak](/docs/configurations/tables/logistics/warehouse-templates). U povratima i notama odobrenja kretanje robe obično predstavlja **primitak**, jer se roba vraća od kupca.. 

## Upravljanje mješovitim znakovima  - NAPOMENA ZA PARTNERE I VODITELJE PROJEKATA 

Mogućnost knjiženja dokumenata s mješovitim znakovima mora se posebno omogućiti putem SQL skripte.  

:::note Tehnička napomena za aktivaciju   
Sljedeća SQL naredba omogućuje pronalazak odgovarajućeg parametra:  

PAŽNJA: Parametar u nastavku koji kontrolira način upravljanja znakovima sada treba biti postavljen na +1, za razliku od ranijih postavki, zbog promjene politike upravljanja znakovima.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

Potrebno je pronaći ID parametra u pitanju.

Zatim u pretraživanju:

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = ..... pronaći red za trenutnu tvrtku koristeći polje SHCP_Company_SHC_Id

i izvršiti update polja SHCP_Value

VRIJEDNOSTI PARAMETRA:

0 = trenutna postavka, ne dopušta miješane znakove (NC su uvijek negativne)

-1 = NC su uvijek invertirane (+ postaje -, a - postaje +)

+1 = Trenutno tražena postavka za miješane znakove; i FT i NC se knjiže s postojećim znakovima, + ostaje +, a - ostaje -
:::


