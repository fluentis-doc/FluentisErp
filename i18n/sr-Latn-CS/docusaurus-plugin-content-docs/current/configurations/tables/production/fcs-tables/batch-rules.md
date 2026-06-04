---
title: Pravila podešavanja stroja
sidebar_position: 3
---

Tablica se nalazi putem izbornika **Tablice > Proizvodnja > Tablice F.C.S. > Pravila grupiranja po stroju**.

Podaci iz ove tablice koriste se isključivo unutar postupka [F.C.S. Planiranja](/docs/planning/ms-master-scheduling/fcs-scheduling). 

Svako pravilo grupiranja definira se jedinstvenim zapisom u ovoj tablici.

**Specifična polja**

> **Element za razmatranje**: odabire se element na temelju kojeg se računa razina popunjenosti stroja (jedna od linearnih dimenzija artikla, volumen, težina, maksimalan broj obrada neovisno o dimenzijama artikla ili ukupan broj komada za obradu).
Ako je odabran dimenzionalni parametar, njegova vrijednost preuzeta iz šifrarnika artikla množi se s količinom proizvodnog naloga, osim ako nije označen flag "Neovisno o količini".     
> **Minimalna vrijednost**: minimalna vrijednost popunjenosti stroja potrebna za pokretanje.      
> **Maksimalna vrijednost**: maksimalna vrijednost popunjenosti stroja. Ako obrada s istim kodom grupiranja premaši ovu vrijednost, planer će podijeliti posao u više sesija, kreirajući jedan zadatak za svaku od njih.       
> **Neovisno o količini**: ako je ovaj flag označen, dimenzionalna vrijednost artikla na koju se pravilo odnosi neće se množiti s količinom proizvodnog naloga.            
> **Grupiraj samo naloge s istom količinom**: ako je ovaj flag označen, grupirat će se samo faze koje imaju isti kod grupiranja i istu količinu za proizvodnju.
Planer će za te faze generirati fiktivni kod grupiranja spajanjem šifre grupiranja i količine za proizvodnju.        
> **Bilješke**: omogućuje unos slobodne napomene          

:::note Napomena
Ako radnom centru nije aktiviran flag za fiksno vrijeme obrade, moguće je da faze s istim kodom grupiranja imaju različita vremena obrade (vrijeme po jedinici × količina).
U tom slučaju, kao vrijeme obrade uzet će se najveće od svih faza koje se grupiraju (konzervativna i sigurnosna procjena).
Tijekom uvoza podataka prije pokretanja planiranja, sustav će prikazati upozorenja na listi grešaka uvoza, podsjećajući da će biti uzeto najveće vrijeme obrade.
:::

**Pretraživanje pravila grupiranja po stroju**

Forma se sastoji od područja za filtriranje i prikaza rezultata. Nakon što se postave željeni filteri, klikni na tipku **Traži** za prikaz rezultata unutar mreže.

**Unos pravila grupiranja po stroju**

Za unos nove šifre potrebno je kliknuti na prvi prazan red u mreži ili pritisnuti tipku **Novo**. 

Kod unosa novog zapisa obavezno je unijeti barem polja: **Šifra** i **Element za razmatranje**.

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).