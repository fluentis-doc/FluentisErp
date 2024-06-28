---
title: Upravljanje Izvješća o odobrenju 
sidebar_position: 1
---

### Unos s negativnim znakom

Od verzije 607, kreditne note moraju biti unesene s negativnim znakom.

Negativni znak treba biti postavljen već u polju količine kako bi ukupni iznos dokumenta uvijek bio negativan.

Upravljanje knjiženjem dokumenta ne mijenja se u odnosu na prošlost, budući da negativni dokument i dalje ostaje izuzet iz registra PDV-a (ranije je bio pretvoren u negativni tijekom knjiženja).

Slanje dokumenta putem SDI-a putem generiranja .xml datoteke podrazumijeva novo promjenu znaka u skladu s tehničkim specifikacijama za elektroničko fakturiranje.

Promjena u komentaru postala je potrebna, posebno radi boljeg upravljanja prodajnim statistikama i povezanim obradama.


### Upravljanje mješanim znakovima

U ovoj sekciji također objašnjavamo posebno upravljanje kreditnim notama s "miješanim" znakovima, tj. s pozitivnim i negativnim stavkama (na primjer, zbog ponovnog naplate poreza na pečat).


**Mogućnost knjiženja dokumenta s miješanim znakovima mora se posebno omogućiti pomoću SQL skripte.**

:::note TEHNIČKA NAPOMENA ZA AKTIVACIJU
U nastavku je skripta koju treba izvršiti:

UPOZORENJE: Parametar u nastavku koji kontrolira način upravljanja znakovima sada treba postaviti na +1, različito od prošlosti zbog promjene politike upravljanja znakovima kako je gore navedeno.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

identificirajte ID parametra u pitanju

U pretraživanju

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = .....identificirajte redak za trenutnu tvrtku putem polja SHCP_Company_SHC_Id

i izvršite ažuriranje polja SHCP_Value

VRIJEDNOSTI PARAMETRA:

0 = trenutno stanje, ne dopušta miješane znakove (kreditne note uvijek su prisilno negativne)

-1 = kreditne note uvijek su invertirane (pozitivno postaje negativno, a negativno postaje pozitivno)

+1 = trenutno zahtijevani tip za miješane znakove, i FT i NC knjižene su s postojećim znakovima, + ostaje +, a - ostaje -.
:::