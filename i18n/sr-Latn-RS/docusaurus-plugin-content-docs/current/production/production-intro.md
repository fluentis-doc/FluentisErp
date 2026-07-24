---
title: Uvod u oblast Proizvodnja
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

# Uvod u oblast Proizvodnja

**Fluentis ERP** omogućava upravljanje proizvodnjom i svim njenim operativnim aspektima u proizvodnim i industrijskim preduzećima, uključujući organizacije sa složenim procesima kalkulacije, obračuna troškova, upravljanja materijalima i proizvodnim aktivnostima.

Algoritmi sistema **Fluentis** omogućavaju upravljanje svim internim i eksternim poslovnim procesima tokom celokupnog životnog ciklusa proizvoda – od kalkulacije i projektovanja, preko nabavke materijala i proizvodnih resursa, planiranja interne proizvodnje i/ili kooperantske proizvodnje, do prikupljanja podataka o proizvodnji i kontrole troškova. Pri tome nije zanemarena ni povezanost proizvodnih postrojenja i automatizovanih skladišta u skladu sa konceptom Industrije 4.0.

U **Fluentis ERP-u** implementacija **MES modela** (*Manufacturing Execution System*) osmišljena je kroz veliki broj parametara za integrisano upravljanje podacima iz proizvodnih procesa koji značajno utiču na profitabilnost preduzeća. U MES sistemu Fluentisa može se videti kako dokumenti povezani sa proizvodnim nalozima, koji su pokrenuti, ali ne nužno i izvršni, definišu sled aktivnosti prema kojem su za svako odeljenje, a još detaljnije za svaki radni centar, dostupne sve informacije potrebne za izvršavanje proizvodnih aktivnosti. Materijali, faze i podfaze, pripreme, kao i sva prateća dokumentacija imaju za cilj da izvođenje aktivnosti učine što automatizovanijim, organizovanijim i efikasnijim.

Glavni algoritam ERP sistema specijalizovanog za proizvodnju je **MRP (Material Requirements Planning)**, sistem planiranja koji proverava ispravnu alokaciju materijala i resursa potrebnih za izvršenje proizvodnih aktivnosti. MRP algoritam se konfiguriše pomoću velikog broja parametara kako bi se što bolje prilagodio specifičnostima proizvodnog okruženja pojedinačnog preduzeća.

## Dostupni moduli u oblasti Proizvodnja

Oblast Proizvodnja u Fluentis ERP-u sastoji se od više integrisanih modula koji pokrivaju planiranje, izvršenje i kontrolu proizvodnih procesa.

### [MRP - Planiranje potreba za materijalima](../planning/ms-master-scheduling/mrp)

MRP procedura predstavlja integrisani sistem planiranja resursa koji pomaže preduzećima da optimizuju upravljanje zalihama i proizvodnjom, usklađujući raspoloživost materijala sa proizvodnim potrebama radi povećanja operativne efikasnosti i smanjenja troškova.

### MES - Manufacturing Execution System

Glavne funkcionalnosti:

#### [Radni nalozi proizvodnje](/docs/production/pp-production-in-progress/production-orders/search-production-orders)

Modul je osmišljen za optimizaciju i pojednostavljenje planiranja proizvodnih procesa. Omogućava upravljanje nalozima u statusima **Pokrenuto** i **Izvršni**, uz jasno razlikovanje naloga spremnih za pokretanje od onih koji su već u fazi izvršenja.

#### [Zadaci](/docs/production/pp-production-in-progress/task/manual-task)

Funkcionalnost ručnog kreiranja zadataka omogućava ručno kreiranje i upravljanje proizvodnim zadacima grupisanjem faza obrade (koje još nisu prijavljene) iz proizvodnih naloga u statusu **Pokrenuto** i/ili **Izvršni**, polazeći od planiranog materijala koji će se koristiti.

#### [Lista za preuzimanje materijala (Picking)](/docs/production/pp-production-in-progress/picking-materials-list)

Omogućava upravljanje preuzimanjem materijala, pravilno kretanje komponenti namenjenih proizvodnji i obezbeđuje usklađenost između planiranja i stvarne potrošnje.

#### [Deklaracije/prijave/signali proizvodnje](/docs/production/pp-production-in-progress/signals/sisgnals)

Ovaj modul omogućava korisnicima kreiranje prijava proizvodnje uz praćenje statusa napretka svake faze, čime se obezbeđuje potpuna preglednost i kontrola proizvodnog procesa.

#### [Knjiženje](/docs/production/pp-production-in-progress/procedures/signals-record)

Omogućava istovremeno knjiženje više prijava i ubrzava postupke obračuna i evidentiranja proizvodnje.

#### [Izdavanje proizvodnih naloga](/docs/production/pp-production-in-progress/procedures/production-orders-release)

Procedura puštanja proizvodnih naloga u Fluentisu omogućava promenu statusa naloga iz **Pokrenuto** u **Izvršni**, uz istovremeno generisanje potrebnih skladišnih knjiženja.

### [Fluentis MES](/docs/production/mes/mes-intro)

#### [Radne stanice](/docs/production/mes/workstation)

Omogućavaju efikasno upravljanje proizvodnim operacijama kroz šifriranje, filtriranje i povezivanje resursa. Zahvaljujući intuitivnom interfejsu korisnici mogu optimizovati tok rada i povećati operativnu efikasnost.

#### [Proizvodni resursi](/docs/production/mes/production-resources)

Omogućavaju jednostavno i brzo prilagođavanje izgleda i ponašanja pojedinog radnog centra, prilagođavajući sistem specifičnim potrebama preduzeća.

#### [MES](/docs/production/mes/mes-main-form)

Osmišljen je za optimizaciju i pojednostavljenje procesa prijave proizvodnih aktivnosti. Ovaj interfejs omogućava operaterima praćenje i upravljanje proizvodnim resursima u realnom vremenu i olakšava unos podataka o fazama obrade i proizvedenim količinama.

## Sažetak

Oblast Proizvodnja u **Fluentis ERP-u** objedinjuje planiranje, izvršenje i kontrolu unutar jedinstvenog digitalnog ekosistema.

Temeljni stubovi sistema su:

- **MRP** za planiranje materijala i resursa;
- **MES** za izvršenje i praćenje proizvodnje u realnom vremenu;
- **Radni nalozi proizvodnje** za operativno upravljanje proizvodnjom;
- **Deklaracije/prijave/signali proizvodnje i obračun** za kontrolu troškova.

Ovakva modularna struktura omogućava integrisano upravljanje celokupnim proizvodnim ciklusom, uz povećanje efikasnosti, sledljivosti i profitabilnosti poslovanja.