---
title: Odstupanje
sidebar_position: 2
---


**## Mogućnost odstupanja**

Omogućava definisanje šifara mogućnosti odstupanja finansijskih tokova, odnosno nivoa prioriteta/važnosti dugovanja, kako se njima upravlja u sistemu DocFinance (šifra u ERP sistemu mora biti jednaka šifri u sistemu DocFinance).

Stoga se ovaj podatak smatra obaveznim i specifičnim za softver DocFinance.

:::note[Detalji]
**Ako je parametar za izvoz postavljen na 0:**

Podrazumevano se preuzima mogućnost odstupanja iz kontnog plana.

Ako je vrednost u kontnom planu `null`, primenjuje se sledeća logika:

- Postavlja se vrednost 01 ako način plaćanja nije BO ni RD (bankarski prenos i direktna doznaka, fiksne oznake).
- U suprotnom se računa razlika u danima između datuma dospeća i današnjeg datuma:
  - ako je razlika veća od 90 dana, postavlja se 04;
  - ako je razlika između 30 i 90 dana, postavlja se 03;
  - ako je razlika između 0 i 30 dana, postavlja se 02;
  - u svim ostalim slučajevima postavlja se 01.

**Ako je parametar postavljen na 1:**

- Za dobavljače se preuzima mogućnost odstupanja definisana u tipu plaćanja.
- Ako mogućnost odstupanja nije definisana (odnosno nije postavljena za dobavljača ili se ne radi o dobavljaču), preuzima se vrednost iz kontnog plana.
:::

U kontnom planu moguće je upravljati i poljem **Stavke troška** i proslediti ga sistemu DocFinance kao statistički podatak.

Dostupno je 6 znakova, koji se popunjavaju na sledeći način:

- Prva 4 znaka preuzimaju se iz šifre stavke troška konta novčanog toka. Ako je ta vrednost `null`, preuzimaju se prva 4 znaka šifre konta (`FSLedgerAccount.Code`).
- Sledeća 2 znaka preuzimaju se iz stavke troška konta sa najvećim oporezivim iznosom PDV-a u računovodstvenom knjiženju kojim je kreirana otvorena stavka. Dakle, ovo upravljanje primenjuje se samo na tok otvorenih stavki, i to na konto iz tabele PDV-a sa najvećim oporezivim iznosom.

Primer uobičajenih podešavanja:

| Šifra | Opis |
| --- | --- |
| 0101 | Kupci u zemlji |
| 0102 | Kupci u inostranstvu |
| 0201 | Dobavljači u zemlji |
| 0202 | Dobavljači u inostranstvu |

**## Podešavanja za računovodstvene šablone (od verzije Fluentis 2025.) – konfiguracija napomene detalja reda**

U obrascu **Opšti parametri** definisan je poseban parametar „FS-PR-DocFinanceNote”.

![](/img/it-it/treasury/docfinance/Derogabiliy.png)

Mogući su sledeći slučajevi:

1. **Kada nema podešavanja (parametar je null ili prazan niz)**

   Vrednost iz datoteke (`MovDescrDett`) uvek se unosi u polje `TransactionDecription` reda.

2. **Kada je parametar popunjen**

   2.1. Ako se u nizu nalazi `(DF)`, to znači da treba zadržati niz iz sistema DocFinance (`MovDescrDett`), a opis popuniti prema podešavanjima samog niza (različite šifre `(2)`, `(3)` itd. koje pozivaju logiku automatskog popunjavanja računovodstvenih šablona).

   2.2. Ako se u nizu ne nalazi `(DF)`, niz iz sistema DocFinance (`MovDescrDett`) koristi se samo kada red nije povezan sa zatvaranjem otvorenih stavki. U suprotnom se primenjuje podešavanje niza definisano u parametru.

Na primer, za dobijanje standardne napomene:

`IsNull(FSPostingTemplate.Description, '') + ' FT.N. ' + @MovDescrDett + ' del ' + IsNull(@DataDocPart, '') + ' - ' + IsNull(FSLedgerAccount.Description, '')`

parametar je potrebno postaviti na:

`(2) FT.N. (DF) del (4) – (6)`

Budući da se u nizu nalazi `(DF)`, taj niz će uvek biti zadržan, a ostali definisani podaci naknadno će se popuniti.

Za dobijanje napomene poput:

`'FT. ' + FSMaturity.DocumentNumber + ' del ' + FSMaturity.DocumentDate`

parametar je potrebno postaviti na:

`FT. (3) del (4)`

Budući da se u nizu ne nalazi `(DF)`, ovaj niz će se koristiti samo za redove povezane sa otvorenim stavkama.

Kod svih standardnih šifara popunjavanje za DocFinance ne funkcioniše potpuno isto kao kod standardne logike računovodstvenog šablona.

Konkretno:

(1) – šifra šablona trenutnog knjiženja
(2) – opis šablona trenutnog knjiženja
(3) – broj dokumenta povezane otvorene stavke
(4) – datum dokumenta povezane otvorene stavke
(5) – šifra konta/analitičkog konta povezane otvorene stavke
(6) – opis analitičkog konta povezane otvorene stavke
(7) – nema smisla za šablone koji se koriste u sistemu DocFinance jer ne uključuju PDV operacije
(8) – broj dokumenta + „-” + datum dokumenta povezane otvorene stavke (kao prilikom ručnog zatvaranja otvorenih stavki u knjiženju)
(9) – ne preporučuje se, ali predstavlja `Posting.Description` preuzet iz povezane otvorene stavke (kao prilikom ručnog zatvaranja otvorenih stavki u knjiženju)
(10) – iznos u valuti reda
(11) – drugi opis analitičkog konta povezane otvorene stavke