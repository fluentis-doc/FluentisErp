---
title: Vrste prezentacijskih lista vrijednosnih papira
sidebar_position: 4
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju namjeravate izvršiti ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Tablica je povezana s poljem *Vrsta* koje se nalazi u zaglavlju prezentacijske liste vrijednosnih papira.

Popunjava se unosom šifre i opisa, kojima je potrebno dodijeliti odgovarajuću numeraciju.

Dodatne opcije dostupne u obrascu omogućuju definiranje sljedećeg:

- **Prijenos dobavljaču:** određuje treba li se vrsta liste obrađivati kao lista za prijenos vrijednosnih papira dobavljaču.

- **Izravna terećenja:** određuje treba li se vrsta liste obrađivati kao RID lista, koju je u postupku izrade elektroničke datoteke u modulu Ri.Ba. trenutačno zamijenio tip SDD (SEPA Direct Debit – na europskoj razini). Uključivanjem ove opcije omogućuje se gumb za izvoz odgovarajućeg formata datoteke na alatnoj vrpci obrasca prezentacijske liste.

- **LCR:** francuski ekvivalent naših Ri.Ba. potvrda. Uključivanjem ove opcije u prezentacijskoj listi aktivira se gumb za izvoz LCR datoteke umjesto uobičajenog izvoza.

- **Trenutačno odobrenje:** kada je ova opcija uključena, knjiženjem prezentacijskih lista na dugovnoj strani knjiži se konto banke, a na potražnoj strani prijelazni konto banke (primjerice *Banka X C/S.B.F.*). S druge strane, knjiženjem odobrenja na dugovnoj strani knjiži se prijelazni konto banke, a na potražnoj strani konto vrste vrijednosnog papira (primjerice konto *Aktivni vrijednosni papiri u portfelju*).

Kada je ova opcija isključena, primjenjuje se standardna logika: na dugovnoj strani knjiži se prijelazni konto, a na potražnoj konto preuzet iz vrste vrijednosnog papira (primjerice konto *Aktivni vrijednosni papiri u portfelju*). Knjiženje odobrenja tada se, kao i dosad, provodi tako da se na dugovnoj strani knjiži konto banke, a na potražnoj prijelazni konto banke.

Ova postavka nije kompatibilna s dvije druge logike koje je moguće aktivirati u obrascu Parametri portfelja vrijednosnih papira:

- Opcija *Zatvaranje kupca prilikom knjiženja prezentacijske liste* ne smije biti uključena jer se njome preskače knjiženje preko konta vrijednosnih papira. Ako je uključena i ova opcija vrste liste, zapravo bi se onemogućilo zatvaranje kupca.
- Korištenje opcija za knjiženje prezentacijskih lista na datum dospijeća također nema smisla kada je ova opcija uključena.

- **Vanjska šifra:** polje koje se upotrebljava u SDD formatu datoteke za određivanje je li prezentacijska lista vrste *CORE* ili *B2B*. Pogledajte tehničku dokumentaciju SDD formata datoteka.

- **Konta**

  - Konto / Analitički konto / Opis **Banke**
  - Konto / Analitički konto / Opis **Prijelaznog konta banke**

  Ova se konta mogu povezati s vrstom prezentacijske liste kako bi se automatiziralo i definiralo računovodstveno knjiženje prilikom kreiranja nove liste. Riječ je o analitičkom kontu iz šifarnika banke na koji će se izvršiti konačno odobrenje vrijednosnih papira te prijelaznom kontu za knjiženje prezentacijskih lista (primjerice *Banka X C/S.B.F.*).

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>