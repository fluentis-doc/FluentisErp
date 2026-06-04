---
sidebar_position: 4
title: Sustav PDV-a na maržu
---

### KONFIGURACIJE

Potrebno je kodirati (barem) dvije **specifične PDV šifre** u koje će se unositi nabave povezane sa sustavom PDV-a na maržu i prodaje istog sustava, povezujući ih u polju **tip registra**:

- Nabave sustava PDV-a na maržu
- Prodaje sustava PDV-a na maržu

Drugi korak bit će kreiranje [**PDV stopa**](/docs/configurations/tables/finance/vat-rates) koje će se koristiti na ovim specifičnim PDV šiframa, identificirajući ih s **flagom** ***PDV na maržu***:

![](/img/it-it/finance-area/other/VATMargine.png)

Stope koje se koriste u nabavi sadržavat će oznaku PDV stope pripadajuće marže, kako bi se moglo odrediti kojoj PDV stopi proporcionalno dodijeliti vrijednost same marže.

Zatim je potrebno definirati računovodstvene predloške koji predviđaju evidentiranje na tim specifičnim šiframa: posebno će predložak prodaje biti povezan s određenom vrstom izlaznog računa, što će omogućiti izdavanje dokumenta u prodaji i njegovo slanje prema SDI sustavu. Kako bi se izbjegla pogrešna upotreba PDV stopa koje nisu predviđene za upravljanje maržom, može biti korisno u tim predlošcima aktivirati sekciju ograničenja dopuštenih PDV stopa (*Provjera stope PDV-a*).

Predložak prodaje evidentirat će obvezu PDV-a na maržu, s vrstom knjiženja prodaje u standardnom režimu i standardnim registrom prodaje.

![](/img/it-it/finance-area/other/VATMargine2.png)

Takvo knjiženje računovodstveno predviđa konto obveze PDV-a i konto storna prihoda od prodaje za maržu, koji se postavlja u parametrima glavne knjige u ovoj sekciji:

![](/img/it-it/finance-area/other/VATMargine3.png)

Navedeni će biti prihod od prodaje i osnovni predložak. Datum posljednje obrade i negativna vrijednost marže, s druge strane, dva su vrijednosti koja Fluentis automatski ažurira prilikom završnog ispisa obrade marže za razdoblje.

### OBRADA

Unutar izbornika *Izjave* modula *Administracija* odabrati **Obrada PDV-a na maržu**:

Generiranjem novog izračuna imat ćemo:

![](/img/it-it/finance-area/other/VATMargine4.png)

Godina računovodstvenih parametara, registar koji će se koristiti za evidentiranje eventualnog duga na pozitivnoj marži, razlog evidentiranja, klijent koji će biti dodeljen za evidenciju duga i desno opseg datuma koji je predmet obrade.
Nakon što postavimo ove podatke, imat ćemo mogućnost izvršiti izračun putem gumba na traci s alatima, koji će popuniti podatke na dvije kartice:

U prvoj će se prikazivati ukupni iznosi PDV stopa evidentiranih u registrima marže nabave i prodaje, gdje će za nabavu biti prikazan i pripadajući postotak raspodjele:

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