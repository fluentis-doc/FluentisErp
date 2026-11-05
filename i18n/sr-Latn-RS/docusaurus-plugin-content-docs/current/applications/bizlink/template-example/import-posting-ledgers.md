---
title: Uvoz knjiženja glavne knjige
sidebar_position: 2
---

Excel datoteka (šablon) za uvoz knjiženja glavne knjige u Administrativni modul omogućava popunjavanje dela za PDV i dela za knjiženje, pa se popunjava na odgovarajući način u zavisnosti od toga da li se uvoze knjiženja koja uključuju PDV ili samo knjiženja glavne knjige.

**AKO se uvoze knjiženja faktura:**

1. red = zaglavlje  
2. red = dnevnik + PDV  
3. red (i svi naredni redovi) = knjiženja glavne knjige

**Prva knjiga**

1. red = zaglavlje  
Ostali redovi = dnevnik

Primer

![](/img/it-it/applications/bizlink/import-mov-contabili.png)

**Datum knjiženja / Datum obračuna:** datumi knjiženja i valute knjiženja glavne knjige.

**Broj knjiženja:** pažnja, mora biti slobodan u odredišnoj bazi podataka jer će funkcija u suprotnom prepisati postojeći zapis bez provere (u pitanju je SQL ažuriranje).

**Šablon:** koristite šifru šablona koji već postoji i koji odgovara knjiženju (na primer, šablon za PDV ako uvozite knjiženja faktura).

**Knjiga računa:** koristite šifru registra (knjige) koji već postoji.

**Referentni broj PDV-a:** koristite slobodan protokol.

**Valuta; Valuta; Evro:** uvek popunite sva polja, čak i ako je sve u evrima i nema promene. Uvek popunite i drugu kolonu vrednošću 0,00 (primer: ako u kolonu Duguje unesete 1000,00, u susednu kolonu Potražuje unesite 0,00).

**Konto / podkonto:** koristite šifre konta koja već postoje.

---

**PDV podaci**

Unesite **šifru** poreske stope koja već mora postojati u bazi podataka.

Popunite sve podatke, uključujući poresku osnovicu i iznos poreza, čak i ako je neoporezivo (po potrebi unesite vrednost 0,00).

---

**Preduzeće:** opciono, ako želite da učitate i vezu sa centrom troška (koji već mora postojati).

**Broj narudžbine:** opciono, ako želite da učitate i povežete narudžbinu.

---

Na **kartici Parametri** možete postaviti vrednost 1 za **Preračun (ponovni obračun)**. Na taj način ponovo se obračunavaju podaci iz dnevnika i generišu otvorene stavke na osnovu podataka o uslovima plaćanja, ako, na primer, nisu uvezene zasebno. U suprotnom se neće izvršiti ponovni obračun i stavke neće biti kreirane ako nisu uvezene. (Ova opcija se preporučuje zbog performansi i vremena obrade, naročito kada postoji veliki broj redova.)

Pažnja: konta moraju već postojati u bazi podataka. U suprotnom, poruka o grešci neće navesti koje konto nedostaje, već će se uvek odnositi na poslednji red u Excel tabeli.