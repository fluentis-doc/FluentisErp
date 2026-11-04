---
title: Odstupanje
sidebar_position: 2
---


## Mogućnost odstupanja

Omogućuje definiranje šifri mogućnosti odstupanja financijskih tokova, odnosno razine prioriteta/važnosti dugovanja, kako se njima upravlja u sustavu DocFinance (šifra u ERP sustavu mora biti jednaka šifri u sustavu DocFinance).

Stoga se ovaj podatak smatra obveznim i specifičnim za softver DocFinance.

:::note[Detalji]
**Ako je parametar za izvoz postavljen na 0:**

Prema zadanim postavkama uzima se mogućnost odstupanja iz kontnog plana.

Ako je vrijednost u kontnom planu `null`, primjenjuje se sljedeća logika:

- Postavlja se vrijednost 01 ako način plaćanja nije BO ni RD (bankovni prijenos i izravna doznaka, fiksne oznake).
- U suprotnom se računa razlika u danima između datuma dospijeća i današnjeg datuma:
  - ako je razlika veća od 90 dana, postavlja se 04;
  - ako je razlika između 30 i 90 dana, postavlja se 03;
  - ako je razlika između 0 i 30 dana, postavlja se 02;
  - u svim ostalim slučajevima postavlja se 01.

**Ako je parametar postavljen na 1:**

- Za dobavljače se uzima mogućnost odstupanja definirana u vrsti plaćanja.
- Ako mogućnost odstupanja nije definirana (odnosno nije postavljena za dobavljača ili se ne radi o dobavljaču), uzima se vrijednost iz kontnog plana.
:::

U kontnom planu moguće je upravljati i poljem **Stavke troška** te ga proslijediti sustavu DocFinance kao statistički podatak.

Dostupno je 6 znakova, koji se popunjavaju na sljedeći način:

- Prva 4 znaka preuzimaju se iz šifre stavke troška konta tijeka novca. Ako je ta vrijednost `null`, preuzimaju se prva 4 znaka šifre konta (`FSLedgerAccount.Code`).
- Sljedeća 2 znaka preuzimaju se iz stavke troška konta s najvećim oporezivim iznosom PDV-a u računovodstvenom knjiženju kojim je kreirana otvorena stavka. Dakle, ovo se upravljanje primjenjuje samo na tijek otvorenih stavki, i to na konto iz tablice PDV-a s najvećim oporezivim iznosom.

Primjer uobičajenih postavki:

| Šifra | Opis |
| --- | --- |
| 0101 | Kupci u Hrvatskoj |
| 0102 | Kupci u inozemstvu |
| 0201 | Dobavljači u Hrvatskoj |
| 0202 | Dobavljači u inozemstvu |

## Postavke za računovodstvene predloške (od verzije Fluentis 2025.) – konfiguracija napomene detalja retka

U obrascu **Opći parametri** definiran je poseban parametar „FS-PR-DocFinanceNote”.

![](/img/it-it/treasury/docfinance/Derogabiliy.png)

Mogući su sljedeći slučajevi:

1. **Kada nema postavljenih postavki (parametar je null ili prazan niz)**

   Vrijednost iz datoteke (`MovDescrDett`) uvijek se unosi u polje `TransactionDecription` retka.

2. **Kada je parametar popunjen**

   2.1. Ako se u nizu nalazi `(DF)`, to znači da treba zadržati niz iz sustava DocFinance (`MovDescrDett`), a opis popuniti prema postavkama samog niza (različite šifre `(2)`, `(3)` itd. koje pozivaju logiku automatskog popunjavanja računovodstvenih predložaka).

   2.2. Ako se u nizu ne nalazi `(DF)`, niz iz sustava DocFinance (`MovDescrDett`) upotrebljava se samo kada redak nije povezan sa zatvaranjem otvorenih stavki. U suprotnom se primjenjuje postavka niza definirana u parametru.

Primjerice, za dobivanje standardne napomene:

`IsNull(FSPostingTemplate.Description, '') + ' FT.N. ' + @MovDescrDett + ' del ' + IsNull(@DataDocPart, '') + ' - ' + IsNull(FSLedgerAccount.Description, '')`

parametar je potrebno postaviti na:

`(2) FT.N. (DF) del (4) – (6)`

Budući da se u nizu nalazi `(DF)`, taj će se niz uvijek zadržati, a ostali definirani podaci naknadno će se popuniti.

Za dobivanje napomene poput:

`'FT. ' + FSMaturity.DocumentNumber + ' del ' + FSMaturity.DocumentDate`

parametar je potrebno postaviti na:

`FT. (3) del (4)`

Budući da se u nizu ne nalazi `(DF)`, ovaj će se niz upotrebljavati samo za retke povezane s otvorenim stavkama.

Kod svih standardnih šifri popunjavanje za DocFinance ne funkcionira potpuno jednako kao kod standardne logike računovodstvenog predloška.

Konkretno:

(1) – šifra predloška trenutačnog knjiženja
(2) – opis predloška trenutačnog knjiženja
(3) – broj dokumenta povezane otvorene stavke
(4) – datum dokumenta povezane otvorene stavke
(5) – šifra konta/analitičkog konta povezane otvorene stavke
(6) – opis analitičkog konta povezane otvorene stavke
(7) – nema smisla za predloške koji se upotrebljavaju u sustavu DocFinance jer ne uključuju PDV operacije
(8) – broj dokumenta + „-” + datum dokumenta povezane otvorene stavke (kao prilikom ručnog zatvaranja otvorenih stavki u knjiženju)
(9) – ne preporučuje se, ali predstavlja `Posting.Description` preuzet iz povezane otvorene stavke (kao prilikom ručnog zatvaranja otvorenih stavki u knjiženju)
(10)– iznos u valuti retka
(11) – drugi opis analitičkog konta povezane otvorene stavke