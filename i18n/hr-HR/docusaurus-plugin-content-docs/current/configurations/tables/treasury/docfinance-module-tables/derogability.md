---
title: Odstupanje
sidebar_position: 2
---

Omogućuje definiranje šifri derogabilnosti financijskih tokova, odnosno zapravo stupnja prioriteta/važnosti dugova, kako se upravlja u DocFinanceu (šifra u softveru mora biti ista kao u DocFinanceu).  

Ovo se stoga smatra potrebnim i specifičnim podatkom softvera DocFinance.

:::note[Detalji]
**Ako je parametar za izvoz 0**; uzima se u obzir derogabilnost prema planu konta po defaultu:  

	Ako je null u planu konta:

postavlja se na 01 ako nije BO ili RD (bonifico i rimessa diretta – fiksne oznake)

inače se čita razlika u danima između isteka i današnjeg datuma: ako je veća od 90, tada se postavlja 04, ako je između 30 i 90 dana, tada se postavlja 03, a ako je između 0 i 30, tada se postavlja 02, inače se postavlja 01.

**ako je parametar 1, tada se čita**:

	Za dobavljače se čita derogabilnost iz vrste plaćanja.
 Ako derogabilnost nije definirana (npr. nije postavljena za dobavljača ili se ne radi o dobavljaču), tada se koristi derogabilnost iz plana konta.

:::

Moguće je upravljati u planu računa i prenijeti u DocFinance kao statistički podatak i polje **stavke troškova**.

dostupni znakovi: 6, tako ispunjeni

Prva 4 znaka dolaze iz koda stavke troška računa novčanog toka, ako je to null, tada se uzimaju prva 4 znaka iz računa (FSLedgerAccount.Code).

Druga 2 znaka uzimaju se iz stavke troška računa s najvišim osnovicom PDV-a u računovodstvenom zapisniku koji je stvorio stavku (tako se upravlja samo za tok stavki, iz računa u mreži PDV-a koji ima najvišu osnovicu).

Primjer tipične postavke:

0101      Kupci Italija

0102      Kupci Strani

0201      Dobavljači Italija

0202      Dobavljači Strani

