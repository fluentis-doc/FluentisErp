---
title: Uvod
sidebar_position: 1
---

Počevši od verzije 805, modul **Provizije** sistema Fluentis ERP upravlja aktivnostima povezanim sa obračunom provizija agenata (na osnovu podataka iz administrativnog područja) i naknadno isplaćenim naknadama, u skladu sa obračunom provizija.

Modul može da preuzima osnovne podatke za obračun provizija agenata iz dokumenata u području **Prodaja**.

U prethodnim verzijama neki obrasci već su bili dostupni u modulima *Otvorene stavke* i *Primaoci naknada*.

:::tip[Važno]
Počevši od verzije 805, objekat *FSCommission* izmenjen je kako bi se dodala direktna veza sa izvornom fakturom, u svojstvu FSCommission.SalesInvoice (polje baze podataka fluentis.FI_Commissions.FIC_SalesInvoice_SDSI_Id). Ta veza se automatski popunjava prilikom knjiženja prodajne fakture.

Osim toga, knjiženjem prodajnih faktura popunjava se objekat FSCommission čak i ako u računovodstvenom šablonu nije aktivirana oznaka *Provizije*. Ta oznaka sada služi isključivo za prikaz podataka korisniku direktno unutar knjiženja fakture.
:::

**Glavne funkcionalnosti**

- **Pretraživanje i upravljanje provizijama i naknadama agenata**: omogućava unos, izmenu i pregled provizija, sa pripadajućim detaljima o izvršenim naplatama i naknadama agenata.
- **Knjiženje naknada i plaćanja**: naknade se mogu direktno proknjižiti, kako u pogledu poreskih obaveza (porez po odbitku, INPS, ENASARCO), tako i u pogledu upravljanja centrima troška i centrima prihoda preduzeća. Konačne naknade zatim se unose u računovodstvo.

**Dostupni izveštaji**

- **Obračun provizija**: kreira preliminarni obračun provizija koje su agenti ostvarili.
- **Izveštaji agenata**: kreira dodatne izveštaje koji se odnose na penzijsko i doprinosno stanje agenata.

**Glavni postupci**

- **Obračun provizija**: automatizuje obračun provizija agenata, uz mogućnost povezivanja naknada sa određenim projektima ili nalozima.
- **Simulacija provizija**: omogućava preliminarni obračun rezultata koji se naknadno mogu pretvoriti u naknade agenata.