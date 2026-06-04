---
title: Upravljanje povratima i kreditnim računima
sidebar_position: 3
---

U modulu Prodaje sustava Fluentis, upravljanje povratima i kreditnim notama omogućuje registraciju i praćenje vraćanja dobara ili usluga od strane kupaca, generirajući potrebne računovodstvene i logističke dokumente. Ovaj proces osigurava ispravnu praćenje operacija i ažuriranje u stvarnom vremenu zaliha u skladištu i računovodstvenih pozicija kupaca.

Fluentis podržava različite tipove povrata:

- Povrat s kreditnim računom: povrat robe uz izdavanje kreditnog računa za storniranje fakturiranog iznosa. Roba se može vratiti putem otpremnice ili izravno prilikom izdavanja kreditnog računa, ovisno o postavkama skladišta.

- Povrat bez kreditnog računa: povrat robe bez izdavanja kreditnog računa, npr. za zamjenu robe. U tom slučaju se obično koriste otpremnice za kretanje robe u skladištu.

Povrat također može biti: 

- Djelomični povrat: povrat samo dijela isporučene robe.  

- Potpuni povrat: povrat cijele isporuke.  

##  Operativni proces

Dokumenti **Povrat** mogu se generirati na dva načina:

1) *putem procedure **Storno** dostupne na traci izbornika u pretrazi otpremnica ili faktura*. Ovom procedurom moguće je djelomično ili potpuno poništiti odabrane dokumente u mreži pretraživanja. Nakon što kliknete tipku *Poništi*, otvorit će se iskačući prozor gdje: odaberite redove artikala koje želite poništiti s pripadajućim količinama, unesite Tip dokumenta koji treba stvoriti (**bit će moguće odabrati samo tipove dokumenata s prirodom Povrata**) i unesite Razlog poništenja skladišta.

2) *ručno, kreiranjem nove otpremnice ili fakture* 
U ovom slučaju važno je unijeti tip dokumenta s prirodom *Povrat*, odabrati klijenta i artikle za storniranje. Međutim, prilikom ručnog kreiranja povrata neće postojati veza s originalnim dokumentom, koji mora biti dodan ručno od strane korisnika.

Ako je generirana otpremnica, iz nje je moguće generirati fakturu putem odgovarajuće procedure ili ručno.
Prilikom spremanja ručno unesene kreditne fakture, korisnik će biti upozoren da mora unijeti negativnu količinu u kreditnu fakturu. Ova funkcionalnost omogućuje ažuriran promet, pri čemu se kreditne fakture uzimaju u obzir s negativnim iznosom.

:::note Pažnja
U tablici [Tipovi otpremnica](/docs/configurations/tables/sales/delivery-notes-type), tipu otpremnice *Povrat*mora biti pridružen [Tip fakture](/docs/configurations/tables/sales/invoices-type) *Kreditna faktura*.
:::

Za obračun otpremnica povrata u kreditnu fakturu mogu postojati različiti slučajevi, ovisno o znakovima količine i cijene u izvornoj otpremnici:   
1)	Otpremnica – Povrat      Kol   10, Cijena 10 -> stavka fakture (normalna ili kreditna) Kol  -10, Cijena  10
2)	Otpremnica – Povrat     Kol  -10, Cijena  10 -> stavka normalne fakture            Kol  10, Cijena  10 
3)	Otpremnica – Povrat       Kol  -10, Cijena  10 -> stavka kreditne fakture                       Kol -10, Cijena  10 
4)	Otpremnica – Povrat       Kol   10, Cijena -10 -> stavka normalne fakture            Kol -10, Cijena -10 
5)	Otpremnica – Povrat      Kol   10, Cijena -10 -> stavka kreditne fakture                      Kol -10, Cijena  10 
6)	Otpremnica – Povrat      Kol  -10, Cijena -10 -> stavka kreditne fakture           Kol  10, Cijena -10 
7)	Otpremnica – Povrat       Kol  -10, Cijena -10 -> stavka kreditne fakture                       Kol -10, Cijena  10 
8)	Otpremnica – Normalna Kol  10, Cijena  10 -> stavka kreditne fakture                        Kol -10, Cijena  10
9)	Otpremnica – Normalna Kol  -10,Cijena  10 -> stavka kreditne fakture                        Kol -10, Cijena  10
10)	Otpremnica – Normalna   10,Cijena -10 -> stavka kreditne fakture                        Kol -10, Cijena  10 
11)	Otpremnica – Normalna Kol  -10,Cijena -10 -> stavka kreditne fakture                        Kol -10, Cijena  10 

## Konfiguracije i Parametri

Za ispravno upravljanje povratima i kreditnim fakturama, potrebno je osigurati konfiguraciju sljedećih elemenata:  

- **Tipovi dokumenta**: Definiranje vrsta dokumenata za povrate i kreditne fakture.  

- **Skladište i Razlog skladišta**: svaka vrsta dokumenta koja utječe na stanje skladišta mora biti povezana s [Skladištem](/docs/configurations/tables/logistics/warehouses) i pripadajućem [predlošku](/docs/configurations/tables/logistics/warehouse-templates); općenito, u povratima i u kreditnim bilješkama, kretanje će biti teret, budući da se roba vraća od kupca.

## Upravljanje mješovitim znakovima - NAPOMENA ZA PARTNERE I PROJECT MANAGERE

Mogućnost knjiženja dokumenta s mješovitim oznakama treba posebno omogućiti putem SQL skripte.

:::note Tehnička napomena za aktivaciju:
Slijedi SQL skripta koju je potrebno izvršiti:

PAŽNJA: Parametar ispod koji kontrolira način upravljanja znakovima sada se mora postaviti na +1, za razliku od prošlosti, uslijed promjene politike upravljanja znakovima o kojoj je riječ.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

Identificirati Id traženog parametra  

U pretraživanju

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = ..... individuare la riga per la società in uso attraverso il campo SHCP_Company_SHC_Id

i izvršiti update na polju SHCP_Value

VRIJEDNOSTI PARAMETRA:

0 = trenutna postavka, ne dopušta miješane znakove (NC su uvijek prisiljene negativne)

-1 = NC uvijek invertirane (pozitivno postaje negativno i obrnuto)

+1 = Trenutno zahtijevana postavka za miješane znakove; i fakture (FT) i kreditne fakture (NC) se knjiže sa stvarnim znakovima, + ostaje + i - ostaje -.
:::


