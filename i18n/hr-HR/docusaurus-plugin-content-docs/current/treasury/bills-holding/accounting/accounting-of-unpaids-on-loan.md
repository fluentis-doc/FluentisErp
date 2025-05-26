---
title: Računovodstvo neplaćenih potraživanja
sidebar_position: 6
---

Obrazac se nalazi u **Riznica** > **Portfelj učinaka** > **Knjiženja** > **Računovodstvo neplaćenih potraživanja**.

Iz ove obrasca nastavlja se s knjiženjem nepodmirenih obveza prenesenih na plaćanje dobavljaču: procedura, prema postavkama računovodstvenog uzroka, ponovno će otvoriti kupce povezane s nepodmirenim potraživanjima, kao i zatvorene obveze dobavljača s prijenosom potraživanja.



## Kako računovodstveno obraditi neplaćeno potraživanje na osnovi cesije

1. Iskoristite gornji dio obrasca za filtriranje pretraživanja neplaćenih stavki koje treba knjižiti.  
2. Odaberite iz središnje mreže neplaćene stavke koje želite knjižiti.  
3. Ispunite karticu parametara za knjiženje, unoseći podatke poput **Predložak knjiženja**, **datuma registracije** i **datuma dospijeća**..

:::note[Nota]
Ovaj odjeljak može biti unaprijed definiran pomoću [**parametara**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) unutar modula Portfelj efekata.
:::

Zastavica **Troškovi povrata** upravljat će naplatom troškova na računu kupca, prema tome registrirajući pripadajući prihod prema podračunu unesenom u istom obrascu (**Račun / podračun naplate troškova kupcu**).

Podračuni za **Troškove protesta** i račun **Privremeni** preuzimaju se iz parametara modula, ali se mogu izmijeniti ili dodavati svaki put.

4. Pritisnite gumb u traci izbornika **Računovodstvo neplaćenih potraživanja**.

**Specifične tipke**

**Traži**: Pretraži popis neplaćenih stavki za knjiženje. 

**Knjiženje**: izvršava knjiženje za odabrane stavke.

### Predhodni

Na kartici Predhodni moguće je poništiti već izvršena knjiženja. 

Poništenje će biti moguće samo ako je razdoblje još uvijek podložno izmjenama (nisu izvršeni ispis dnevnika ili zatvaranje računa). 

Dvostruki klik na odjeljak s knjiženjima omogućit će prikaz povezane knjigovodstvene stavke. 

Dostupno je i izvješće za pregled pogrešaka zabilježenih tijekom knjiženja.

**Specifične tipke**

**Traži**: Pretraži popis izvršenih knjiženja. 

**Poništavanje knjiženja**: Izvršava obnovu odabranih knjiženja.

**Poništavanje dugovanja**: Izvršava obnovu odabrane računovodstvene registracije.
