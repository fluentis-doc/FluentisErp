---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u području *Prodaja > Agenti*.

Ovaj modul nudi cjelovito rješenje za upravljanje, kontrolu i obradu provizija prodajnih agenata. Ova funkcionalnost omogućuje tvrtkama izračun zarađenih provizija, generiranje detaljnih obračuna i upravljanje naknadama za profesionalce.  

**Glavne funkcionalnosti**:
- Upravljanje i kontrola provizija: Sustav omogućuje upravljanje, praćenje i izračun provizija koje pripadaju agentima, uzimajući u obzir ostvarenu prodaju i specifične ugovorne uvjete.  
- Generiranje obračuna: Moguće je periodično generirati obračune za agente, zbrajajući ostvarene provizije i prikazujući jasan pregled iznosa koji im pripadaju.
- Kreiranje naknada za vanjske suradnike: Fluentis omogućuje izradu posebnih naknada za vanjske profesionalce, čime se osigurava fleksibilno i detaljno upravljanje isplatama.  
- Ispis obračunskih listića i dokumentacije: Modul omogućuje ispis obračunskih listića za agente, s detaljima o ostvarenim provizijama i izvršenim obračunima, čime se osigurava jasna i transparentna dokumentacija.  
- Izvještavanje i analitika: Moguće je generirati izvještaje o provizijama i obračunima, što olakšava praćenje učinka agenata te omogućuje detaljnu analizu prodajnih rezultata.  

**Automatizacija i integracija**:        
Modul za obračun provizija agenata u potpunosti je integriran s ostatkom Fluentis ERP sustava, omogućujući automatsko preuzimanje podataka o prodaji i provizijama iz modula prodaje i fakturiranja. Ova integracija smanjuje mogućnost pogrešaka, osigurava dosljednost podataka te olakšava usklađivanje između prodaje, računa i obračuna.  

Također je povezan s modulom Administracija, što omogućuje pretvaranje obračuna provizija u naknadu primatelju, kako bi se automatski provela pripadajuća knjiženja te obračun i uplata predujma poreza i doprinosa ENASARCO.
Naknade agenata zatim se uključuju i u poreznu obradu Godišnje potvrde o zadržanim porezima.   

Prije korištenja modula potrebno je popuniti sljedeće tablice:  
> - [**Registar agenata**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)
> - [**Kategorije agenata**](/docs/configurations/tables/sales/agent-category)
> - [Raspon popusta](/docs/configurations/tables/sales/discount-range)
> - [Definicija provizijskih razreda](/docs/configurations/tables/sales/discount-range)
> - [Karakteristike agenata](/docs/configurations/tables/sales/agent-characteristics)

:::danger[Upozorenje]
Podsjećamo da je, osim konfiguriranja detalja u registru agenata, nužno [**povezati agente s pripadajućim klijentima**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) kako bi se omogućio izračun provizija u dokumentima i time osigurala pravilna izrada obračuna.  