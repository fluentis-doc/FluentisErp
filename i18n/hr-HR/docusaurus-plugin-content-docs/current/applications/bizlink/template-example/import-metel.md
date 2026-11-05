---
title: Uvoz METEL cjenika
sidebar_position: 6
---

**BizLink** omogućuje uvoz METEL cjenika. Za taj su uvoz dostupna dva tijeka. Jedino što korisnik treba napraviti jest konfigurirati konektor za izvršavanje uvoza.

:::danger[Duljina datoteke]
Fluentis podržava samo dvije vrste datoteka: one duljine 178 i 233 znaka!
:::

:::danger[Format datoteke]
Fluentis podržava samo datoteke u ANSI formatu!
:::

:::tip[Obrada datoteke u neispravnom formatu]
Ako datoteka ne zadovoljava navedena dva uvjeta, BizLink će je premjestiti u mapu obrađenih datoteka, a u dolaznim dokumentima neće zabilježiti ništa jer će datoteku odbaciti.
:::

### Preduvjeti

- Instalirana i aktivna usluga BizLink.
- Valjani METEL cjenik (datoteka u TXT formatu).

:::tip[Službena stranica METEL-a]
U slučaju bilo kakvih nedoumica u vezi s datotekom, posjetite službenu stranicu: [https://listinipubblici.metel.it/](https://listinipubblici.metel.it/), na kojoj je dostupna funkcionalnost „Verifica Listino” (Provjera cjenika).
:::

### Pregled parsera i tijekova

:::note[Napomena]
U ovom odjeljku opisani su i objašnjeni tijekovi koji su već dostupni u Fluentisu. U sljedećem odjeljku objašnjeno je kako konfigurirati konektor i izvršiti uvoz.
:::

#### Parser

Za METEL se koristi parser pod nazivom `FluentisEDIExtendedParser`.

![](/img/it-it/applications/bizlink/import-metel/1.png)

Unutar njega nalaze se dva objekta parsera: jedan za datoteke duljine 178 znakova, a drugi za datoteke duljine 233 znaka.

![](/img/it-it/applications/bizlink/import-metel/2.png)

Uzmimo za primjer objekt parsera za datoteku duljine 233 znaka i pogledajmo kako se uvozi svako polje i na kojoj se poziciji nalazi u datoteci.

To može biti korisno u slučaju pogrešaka pri uvozu jer na temelju svojstva koje sadrži pogrešku možemo utvrditi na kojoj se poziciji u datoteci nalazi odgovarajući podatak.

![](/img/it-it/applications/bizlink/import-metel/3.png)

#### Tijek

Za METEL je dostupan i tijek pod nazivom `METEL`.

![](/img/it-it/applications/bizlink/import-metel/4.png)

Taj tijek sadržava operaciju pod nazivom `FLOW_OP_MetlPriceList`.

![](/img/it-it/applications/bizlink/import-metel/5.png)

Navedena operacija sadržava dva dokumenta tijeka, koji se razlikuju prema broju znakova u datoteci.

![](/img/it-it/applications/bizlink/import-metel/6.png)

Dokument tijeka zatim određuje koji će se objekt parsera koristiti za obradu datoteke.

![](/img/it-it/applications/bizlink/import-metel/7.png)

### Izrada konektora

Otvorite **BizLink > Konektori** i kliknite **Novo**.

![](/img/it-it/applications/bizlink/import-metel/8.png)

Zatim postavite sljedeće vrijednosti:

- Šifra
- Opis
- Vrsta konektora = **Folder Monitor**
- Partner
- Tijek
- Operacija tijeka
- Dokument tijeka (ovisno o broju znakova u datoteci koju želite uvesti)
- **Managed by Authentication Service**

Na kraju postavite putanje mapa:

- **Incoming**: mapa u koju će se smjestiti datoteka za obradu.
- **Processed**: mapa u koju će usluga premjestiti datoteku ako je uspješno uvezena.
- **Failed**: mapa u koju će usluga premjestiti datoteku ako tijekom obrade dođe do pogrešaka.

![](/img/it-it/applications/bizlink/import-metel/9.png)

:::tip[Obrada obje vrste datoteka]
Za obradu obje vrste datoteka potrebno je izraditi dva različita konektora, svaki s odgovarajućim dokumentom tijeka.

Osim toga, mapa **Incoming** mora biti različita za svaki konektor. Mape **Failed** i **Processed** mogu biti zajedničke.
:::

### Testiranje uvoza

:::danger[Pozor]
U slučaju pogrešaka ili ponovnog uvoza iste datoteke potrebno je ponovno pokrenuti uslugu BizLink jer ona ne može obraditi dokument s istim nazivom kako bi se izbjegli duplikati. Ponovnim pokretanjem usluge uklanja se to ograničenje.
:::

Za testiranje uvoza provjerite je li usluga aktivna, kopirajte TXT datoteku u mapu **Incoming** i pričekajte nekoliko sekundi.

U odjeljku **Dolazni dokumenti** aplikacije BizLink pojavit će se redak s rezultatom uvoza.

![](/img/it-it/applications/bizlink/import-metel/10.png)