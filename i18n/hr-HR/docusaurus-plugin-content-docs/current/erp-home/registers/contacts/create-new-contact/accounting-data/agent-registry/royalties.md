---
title: Upravljanje autorskim pravima
sidebar_position: 9
---

Upravljanje pravima na naknadu slično je upravljanju provizijama agenata, s kojim djelomično dijeli postavke.

### Konfiguracija artikla 

Artikli koji su podložni autorskim pravima/royalties trebaju imati odgovarajući flag (*Autorska prava*) na kartici **Općenito**

Prilikom unosa označenog članka u prodajne dokumente, samo za članke koji imaju ovaj flag Fluentis će identificirati odgovarajućeg dizajnera (agenta) koji posjeduje autorska prava na istom.

### Konfiguracija zapisa za osobne podatke agenta

Konfiguracija subjekta koji posjeduje autorska prava na različite članke vrši se putem definiranja šifarnika agenta.

Uobičajeno, ovi subjekti nisu podložni porezu na dohodak niti posebnim doprinosima, stoga će biti potrebno kreirati posebnu [**Kategoriju agenata**](/docs/configurations/tables/sales/agent-category/) i poseban [**Tip poreza**](/docs/configurations/tables/finance/withholding-tax-types/) koji ne uključuje ni doprinose ni postotke poreza na dohodak.

U kartici **Obračun** ćemo odabrati vrstu poreza (koja se može stvoriti ili odabrati, kao što je gore spomenuto, vrstu s nulom postotkom), a zatim kriterij za ostvarivanje provizije kao što je to slučaj s agentom.

:::tip VAŽNO 
Specifičnost postavki nalazi se unutar kartice **Direktne provizije**, gdje ćemo kodirati vrstu provizije **23 – Autorska prava**
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/tipo23.png)

Kada se detaljnije prouče ove postavke (pomoću opcije **Detalj označenog postotka**), moguće je pratiti dva različita pristupa:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/dettaglio.png)

- Unesite detaljan popis članaka koji su podložni autorskim pravima (Fluentis neće dopustiti unos članaka koji nemaju postavljenu ovu oznaku)

- ili proizvodna linija koja sadrži članke podložne autorskim pravima, pretpostavljajući da proizvodna linija identificira dizajn (ili element) podložan pravu: **ipak će samo članci s oznakom autorskih prava biti podložni odgovarajućem postotku**, nije dovoljno da budu povezani s linijom postavljenom šifarnik agenta.

:::danger VAŽNO
Nije dopušteno unijeti u agenta X članak (ili liniju) ako je isti članak upravljan u drugom agentu (kao članak ili kao pripadajuća linija): na istom članku, naime, nije dopušteno da više dizajnera zarađuje autorske naknade.
:::

### Logika korištenja

Obavljene su postavke u artiklu i agentu, logika rada je sljedeća: prilikom unosa artikla u prodajne dokumente, Fluentis će provjeriti je li artikl podložan na autorska prava ili ne, u prvom slučaju će tražiti koji agent ima postavke (specifične ili za povezanu liniju artikla) provizija u detaljima tipa ’23 - Autorska prava’ i dodat će odgovarajući provizorni redak u dokument.

Logika koja će slijediti nakon ove valorizacije bit će ista kao i kod bilo kojeg drugog agenta, s pregledima agenta i izračunima liquidacija na zrelosti.

:::tip BILJEŠKA
Razlika između agenta i vlasnika autorskih prava je u tome što za potonjeg nije potrebno uključivanje u svaku klijentsku anketu kako bi Fluentis prepoznao postotak koji se primjenjuje na prodaju, što je obavezno za obične agente.
:::