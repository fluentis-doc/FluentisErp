---
title: Uvod u područje Proizvodnja
description: Pregled modula Proizvodnja u Fluentis ERP-u – MRP, MES, proizvodni nalozi, radni nalozi proizvodnje, planiranje i kontrola troškova.
keywords:
  - Fluentis ERP
  - Proizvodnja
  - MRP
  - MES
  - Radni nalozi proizvodnje
  - Planiranje proizvodnje
  - Industrija 4.0
sidebar_position: 1
schema: TechArticle
tags:
  - Proizvodnja
  - Planiranje
  - MES
  - MRP
last_update:
  author: Fluentis Documentation Team
---

# Uvod u područje Proizvodnja

**Fluentis ERP** omogućuje upravljanje proizvodnjom i svim njezinim operativnim aspektima u proizvodnim i industrijskim poduzećima, uključujući organizacije sa složenim procesima kalkulacije, obračuna troškova, upravljanja materijalima i proizvodnim aktivnostima.

Algoritmi sustava **Fluentis** omogućuju upravljanje svim internim i eksternim poslovnim procesima tijekom cjelokupnog životnog ciklusa proizvoda – od kalkulacije i projektiranja, preko nabave materijala i proizvodnih resursa, planiranja interne proizvodnje i/ili kooperantske proizvodnje, do prikupljanja podataka o proizvodnji i kontrole troškova. Pri tome nije zanemarena ni povezanost proizvodnih postrojenja i automatiziranih skladišta u skladu s konceptom Industrije 4.0.

U **Fluentis ERP-u** implementacija **MES modela** (*Manufacturing Execution System*) osmišljena je kroz velik broj parametara za integrirano upravljanje podacima iz proizvodnih procesa koji značajno utječu na profitabilnost poduzeća. U MES sustavu Fluentisa može se vidjeti kako dokumenti povezani s proizvodnim nalozima, koji su pokrenuti, ali ne nužno i izvršni, definiraju slijed aktivnosti prema kojem su za svaki odjel, a još detaljnije za svaki radni centar, dostupne sve informacije potrebne za izvršavanje proizvodnih aktivnosti. Materijali, faze i podfaze, pripreme te sva prateća dokumentacija imaju cilj učiniti izvođenje aktivnosti što automatiziranijim, organiziranijim i učinkovitijim.

Glavni algoritam ERP sustava specijaliziranog za proizvodnju je **MRP (Material Requirements Planning)**, sustav planiranja koji provjerava ispravnu alokaciju materijala i resursa potrebnih za izvršenje proizvodnih aktivnosti. MRP algoritam konfigurira se pomoću velikog broja parametara kako bi se što bolje prilagodio specifičnostima proizvodnog okruženja pojedinog poduzeća.

## Dostupni moduli u području Proizvodnja

Područje Proizvodnja u Fluentis ERP-u sastoji se od više integriranih modula koji pokrivaju planiranje, izvršenje i kontrolu proizvodnih procesa.

### [MRP - Planiranje potreba za materijalima](../planning/ms-master-scheduling/mrp)

MRP procedura predstavlja integrirani sustav planiranja resursa koji pomaže poduzećima optimizirati upravljanje zalihama i proizvodnjom, usklađujući raspoloživost materijala s proizvodnim potrebama radi povećanja operativne učinkovitosti i smanjenja troškova.

### MES - Manufacturing Execution System

Glavne funkcionalnosti:

#### [Radni nalozi proizvodnje](/docs/production/pp-production-in-progress/production-orders/search-production-orders)

Modul je osmišljen za optimizaciju i pojednostavljenje planiranja proizvodnih procesa. Omogućuje upravljanje nalozima u statusima **Pokrenuto** i **Izvršni**, uz jasno razlikovanje naloga spremnih za pokretanje od onih koji su već u fazi izvršenja.

#### [Zadaci](/docs/production/pp-production-in-progress/task/manual-task)

Funkcionalnost ručnog kreiranja zadataka omogućuje ručno stvaranje i upravljanje proizvodnim zadacima grupiranjem faza obrade (koje još nisu prijavljene) iz proizvodnih naloga u statusu **Pokrenuto** i/ili **Izvršni**, polazeći od planiranog materijala koji će se koristiti.

#### [Lista za preuzimanje materijala (Picking)](/docs/production/pp-production-in-progress/picking-materials-list)

Omogućuje upravljanje preuzimanjem materijala, pravilno kretanje komponenti namijenjenih proizvodnji te osigurava usklađenost između planiranja i stvarne potrošnje.

#### [Deklaracije/prijave/signali proizvodnje](/docs/production/pp-production-in-progress/signals/sisgnals)

Ovaj modul omogućuje korisnicima kreiranje prijava proizvodnje uz praćenje statusa napretka svake faze, čime se osigurava potpuna preglednost i kontrola proizvodnog procesa.

#### [Knjiženje](/docs/production/pp-production-in-progress/procedures/signals-record)

Omogućuje istovremeno knjiženje više prijava te ubrzava postupke obračuna i evidentiranja proizvodnje.

#### [Izdavanje proizvodnih naloga](/docs/production/pp-production-in-progress/procedures/production-orders-release)

Procedura puštanja proizvodnih naloga u Fluentisu omogućuje promjenu statusa naloga iz **Pokrenuto** u **Izvršni**, uz istodobno generiranje potrebnih skladišnih knjiženja.

### [Fluentis MES](/docs/production/mes/mes-intro)

#### [Radne stanice](/docs/production/mes/workstation)

Omogućuju učinkovito upravljanje proizvodnim operacijama kroz šifriranje, filtriranje i povezivanje resursa. Zahvaljujući intuitivnom sučelju korisnici mogu optimizirati tijek rada i povećati operativnu učinkovitost.

#### [Proizvodni resursi](/docs/production/mes/production-resources)

Omogućuju jednostavnu i brzu prilagodbu izgleda i ponašanja pojedinog radnog centra, prilagođavajući sustav specifičnim potrebama poduzeća.

#### [MES](/docs/production/mes/mes-main-form)

Osmišljen je za optimizaciju i pojednostavljenje procesa prijave proizvodnih aktivnosti. Ovo sučelje omogućuje operaterima praćenje i upravljanje proizvodnim resursima u stvarnom vremenu te olakšava unos podataka o fazama obrade i proizvedenim količinama.

## Sažetak

Područje Proizvodnja u **Fluentis ERP-u** objedinjuje planiranje, izvršenje i kontrolu unutar jedinstvenog digitalnog ekosustava.

Temeljni stupovi sustava su:

- **MRP** za planiranje materijala i resursa;
- **MES** za izvršenje i praćenje proizvodnje u stvarnom vremenu;
- **Radni nalozi proizvodnje** za operativno upravljanje proizvodnjom;
- **Deklaracije/prijave/signali proizvodnje i obračun** za kontrolu troškova.

Ovakva modularna struktura omogućuje integrirano upravljanje cjelokupnim proizvodnim ciklusom, uz povećanje učinkovitosti, sljedivosti i profitabilnosti poslovanja.