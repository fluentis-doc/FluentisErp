---
title: Uvod
sidebar_position: 1
---

Počevši od verzije 805, modul **Provizije** sustava Fluentis ERP upravlja aktivnostima povezanima s obračunom provizija agenata (na temelju podataka iz administrativnog područja) i naknadno isplaćenim naknadama, u skladu s obračunom provizija.

Modul može preuzimati osnovne podatke za obračun provizija agenata iz dokumenata u području **Prodaja**.

U prethodnim verzijama neki su obrasci već bili dostupni u modulima *Otvorene stavke* i *Primatelji naknada*.

:::tip[Važno]
Počevši od verzije 805, objekt *FSCommission* izmijenjen je kako bi se dodala izravna poveznica na izvorni račun, u svojstvu FSCommission.SalesInvoice (polje baze podataka fluentis.FI_Commissions.FIC_SalesInvoice_SDSI_Id). Ta se poveznica automatski popunjava prilikom knjiženja prodajnog računa.

Osim toga, knjiženjem prodajnih računa popunjava se objekt FSCommission čak i ako u računovodstvenom predlošku nije aktivirana oznaka *Provizije*. Ta oznaka sada služi isključivo za prikaz podataka korisniku izravno unutar knjiženja računa.
:::

**Glavne funkcionalnosti**

- **Pretraživanje i upravljanje provizijama i naknadama agenata**: omogućuje unos, izmjenu i pregled provizija, s pripadajućim detaljima o izvršenim naplatama i naknadama agenata.
- **Knjiženje naknada i plaćanja**: naknade se mogu izravno proknjižiti, kako u pogledu poreznih obveza (porez po odbitku, INPS, ENASARCO), tako i u pogledu upravljanja centrima troška i profitnim centrima poduzeća. Konačne naknade zatim se unose u računovodstvo.

**Dostupni ispisi**

- **Obračun provizija**: izrađuje preliminarni obračun provizija koje su agenti ostvarili.
- **Ispisi agenata**: izrađuje dodatne ispise koji se odnose na mirovinsko i doprinosno stanje agenata.

**Glavni postupci**

- **Obračun provizija**: automatizira obračun provizija agenata, uz mogućnost povezivanja naknada s određenim projektima ili nalozima.
- **Simulacija provizija**: omogućuje preliminarni izračun rezultata obračuna koji se naknadno mogu pretvoriti u naknade agenata.