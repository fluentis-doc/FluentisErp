---
title: Business Areas - Riznica
sidebar_position: 2
---

**Kreiranje SEPA datoteke** (kod FS-PR-SEPA-PaymentRequest): Ovaj parametar omogućava povezivanje određenog BizLink toka „SEPA“ za izvoz SEPA naloga za plaćanje u evrima. Svaka geografska lokalizacija ima podrazumevani format generisanja (trenutno je za Italiju dostupna verzija 4.01), ali u slučaju promene formata može biti korisno promeniti tip datoteke koja će se generisati, počevši od određenog datuma.

**SDD (SEPA direktno zaduženje)** (kod FS-PR-SEPA-SDD): kao i prethodni parametar, ali za SDD datoteke koje se mogu generisati iz izvoda efekata (trenutno je za Italiju dostupna verzija 1.01).

**Kreiranje SEPA datoteka za inostranstvo** (kod FS-PR-SEPA-ForeignPaymentRequest): kao i prvi parametar, ali za datoteke naloga za plaćanje u stranoj valuti (inostrana plaćanja).

Trenutno dostupni tokovi su:

- *EsteroSEPA_XML_Payment*
- *ExportSDDWorkflow*
- *ExportSDDWorkflow_1.01*
- *SEPA_XML_Payments_Export*
- *SEPA_XML_Payments_Export_4.01*
- *SEPA_XML_Payments_Export_FR*
- *SEPA_XML_Payments_Export_HR*
- *SEPA_XML_Payments_Export_RO*
- *SEPA_XML_Payments_Export_RS*
- *SEPA_XML_Payments_Export_SI*

**Detalji prometa** (kod FS-PR-DocFinanceNote): za preduzeća koja primaju stavke bankovnog prometa iz sistema DocFinance, ovim parametrom može se definisati način na koji će **_FluentisERP_** popunjavati opise uvezenih stavki. Logika kodiranja teksta prati postojeću logiku koja se koristi kod računovodstvenih šifara, uz dodatak oznake (DF), koja označava opis preuzet direktno iz DocFinance datoteke.

:::tip[Napomena]
Na primer:

- Ako se parametar postavi na „(2) FT.N. (DF) del (4) – (6)“, generisaće se tekst:

  „Opis šifre“ + FT.N. + „Opis iz DocFinance“ del „datum dokumenta stavke“ - „Opis podkonta stavke“

- Ako se parametar postavi na „FT. (3) del (4)“, odnosno bez korišćenja teksta iz DocFinance, dobićemo:
  - za stavke povezane sa otvorenim stavkama, napomenu u obliku FT. + „broj dokumenta“ + del + „datum dokumenta“
  - za stavke koje nisu povezane sa otvorenim stavkama, koristiće se podrazumevani tekst iz DocFinance datoteke.
::: 