---
sidebar_position: 4
title: Sustav PDV-a na maržu
---

### KONFIGURACIJE

Potrebno je kodirati (barem) dva **specifična PDV registra**  u koje će se unositi kupnje povezane sa sustavom PDV-a na maržu i prodaje istog sustava, povezujući ih u polju **tip registra**:

- Kupnje sustava PDV-a na maržu
- Prodaje sustava PDV-a na maržu

Drugi korak bit će kreiranje [**PDV stopa**](/docs/configurations/tables/finance/vat-rates)  koje će se koristiti na ovim specifičnim PDV registrima, identificirajući ih s **flagom** ***PDV na maržu***:

![](/img/it-it/finance-area/other/VATMargine.png)

Stopa koja će se koristiti pri kupnji imat će označenu stopu PDV-a margine referencije, kako bi se znalo kojoj stopi proporcionalno dodijeliti vrijednost same margine.

Trebali bismo zatim kodificirati računovodstvene razloge koji predviđaju evidentiranje u ovim specifičnim registrima: razlog prodaje, posebice, bit će povezan s određenim tipom fakture prodaje, što će omogućiti izdavanje dokumenta u prodaji i njegovo slanje u Sdi.
Može biti korisno, kako bi se izbjegla pogrešna korištenja nepredviđenih stopa za upravljanje maržom, omogućiti u ovim razlozima odjeljak za obvezu za aktivirane PDV stope (*Provjera stope PDV-a*).

Razlog prodaje će zabilježiti dug za PDV na margini, s tipom kretanja *prodaje prema normalnom režimu* i redovitim registrovanjem prodaje.

![](/img/it-it/finance-area/other/VATMargine2.png)

Ova registracija predviđa računovodstveno račun dugovanja PDV-a i račun za poništavanje prihoda od prodaje za marginu, koji se postavlja u parametrima općeg računovodstva u ovoj sekciji:

![](/img/it-it/finance-area/other/VATMargine3.png)

Navedeni će biti prihod od prodaje i osnovni razlog. Datum posljednje obrade i negativna vrijednost marže, s druge strane, dva su vrijednosti koja Fluentis automatski ažurira prilikom završnog ispisa obrade marže za razdoblje.

### OBRADA

Unutar izbornika *Izjave* modula *Administracija* odabrati **Obrada PDV-a na maržu**:

Generiranjem novog izračuna imat ćemo:

![](/img/it-it/finance-area/other/VATMargine4.png)

Godina računovodstvenih parametara, registar koji će se koristiti za evidentiranje eventualnog duga na pozitivnoj marži, razlog evidentiranja, klijent koji će biti dodeljen za evidenciju duga i desno opseg datuma koji je predmet obrade.
Nakon što postavimo ove podatke, imat ćemo mogućnost izvršiti izračun putem gumba na traci s alatima, koji će popuniti podatke na dvije kartice:

Na prvoj kartici imat ćemo ukupne iznose PDV stopa evidentirane u registrima kupnje i prodaje marže, gdje ćemo za kupnju imati prikazane odgovarajuće postotke raspodjele:

![](/img/it-it/finance-area/other/VATMargine5.png)

Na drugoj kartici, s druge strane, imat ćemo obradu izračuna marže primjenjujući postotke na PDV stope povezane s PDV stopama na kupnju:

![](/img/it-it/finance-area/other/VATMargine6.png)

Ova druga kartica bit će popunjena samo ako marža za razdoblje, uzimajući u obzir eventualne prethodne negativne marže, dovede do pozitivnog salda same marže.
Zatim ćemo imati nekoliko drugih gumba za upravljanje: ispis izvršene obrade, koji, ako se izvrši izravno, tražit će postavljanje oznake 'definitivno', čime će se izračun učiniti nepovratnim:

![](/img/it-it/finance-area/other/VATMargine7.png)

Ova operacija ažurirat će, u računovodstvenim parametrima, datum posljednje obrade i iznos pohranjen u negativnom saldu marže.

Jednom kada se postavi flag 'definitivo', omogućit će se mogućnost računovodstvenog evidentiranja PDV duga.

![](/img/it-it/finance-area/other/VATMargine8.png)

![](/img/it-it/finance-area/other/VATMargine9.png)

:::tip Posebnosti
U odjeljku PDV imat ćemo samo iznos PDV-a duga, **bez osnovice**.
:::

Postupak završavaju tipke za izvršenje povrata računovodstvene obrade i poništavanje definitivnog ispisa.


![](/img/it-it/finance-area/other/VATMargine10.png)