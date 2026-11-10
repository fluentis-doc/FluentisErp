---
title: Tipovi prezentacionih lista hartija od vrednosti
sidebar_position: 4
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju nameravate da izvršite ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Tabela je povezana sa poljem *Tip* koje se nalazi u zaglavlju prezentacione liste hartija od vrednosti.

Popunjava se unosom šifre i opisa, kojima je potrebno dodeliti odgovarajuću numeraciju.

Dodatne opcije dostupne u obrascu omogućavaju definisanje sledećeg:

- **Prenos dobavljaču:** određuje da li tip liste treba obrađivati kao listu za prenos hartija od vrednosti dobavljaču.

- **Direktna zaduženja:** određuje da li tip liste treba obrađivati kao RID listu, koju je u postupku izrade elektronske datoteke u modulu Ri.Ba. trenutno zamenio tip SDD (SEPA Direct Debit – na evropskom nivou). Uključivanjem ove opcije omogućava se dugme za izvoz odgovarajućeg formata datoteke na traci sa alatkama obrasca prezentacione liste.

- **LCR:** francuski ekvivalent naših Ri.Ba. potvrda. Uključivanjem ove opcije u prezentacionoj listi aktivira se dugme za izvoz LCR datoteke umesto uobičajenog izvoza.

- **Trenutno odobrenje:** kada je ova opcija uključena, knjiženjem prezentacionih lista na dugovnoj strani knjiži se konto banke, a na potražnoj strani prelazni konto banke (na primer *Banka X C/S.B.F.*). S druge strane, knjiženjem odobrenja na dugovnoj strani knjiži se prelazni konto banke, a na potražnoj strani konto tipa hartije od vrednosti (na primer konto *Aktivne hartije od vrednosti u portfelju*).

Kada je ova opcija isključena, primenjuje se standardna logika: na dugovnoj strani knjiži se prelazni konto, a na potražnoj konto preuzet iz tipa hartije od vrednosti (na primer konto *Aktivne hartije od vrednosti u portfelju*). Knjiženje odobrenja tada se, kao i do sada, sprovodi tako što se na dugovnoj strani knjiži konto banke, a na potražnoj prelazni konto banke.

Ovo podešavanje nije kompatibilno sa dve druge logike koje je moguće aktivirati u obrascu Parametri portfelja hartija od vrednosti:

- Opcija *Zatvaranje kupca prilikom knjiženja prezentacione liste* ne sme biti uključena jer se njome preskače knjiženje preko konta hartija od vrednosti. Ako je uključena i ova opcija tipa liste, zapravo bi se onemogućilo zatvaranje kupca.
- Korišćenje opcija za knjiženje prezentacionih lista na datum dospeća takođe nema smisla kada je ova opcija uključena.

- **Eksterna šifra:** polje koje se koristi u SDD formatu datoteke za određivanje da li je prezentaciona lista tipa *CORE* ili *B2B*. Pogledajte tehničku dokumentaciju SDD formata datoteka.

- **Konta**

  - Konto / podkonto / Opis **Banke**
  - Konto / podkonto / Opis **Prelaznog konta banke**

  Ova konta mogu se povezati sa tipom prezentacione liste kako bi se automatizovalo i definisalo računovodstveno knjiženje prilikom kreiranja nove liste. Reč je o analitičkom kontu iz šifarnika banke na koji će se izvršiti konačno odobrenje hartija od vrednosti, kao i o prelaznom kontu za knjiženje prezentacionih lista (na primer *Banka X C/S.B.F.*).

**Konto / podkonto / Opis avansa** (aktivno samo kada je oznaka *Trenutno odobrenje* deaktivirana) omogućava unapred definisanje željenog konta u zaglavlju prezentacione liste. Unos ovog konta menja način izvršavanja računovodstvenog knjiženja prezentacione liste. Uobičajenom knjiženju, kojim se stornira konto portfolija i prenose iznosi na prelazni konto banke kojoj se prezentaciona lista predaje, dodaju se dva reda za evidentiranje trenutnog odobrenja na redovnom tekućem računu koji je već podešen u zaglavlju liste, kao i protivstavke na kontu avansa prikazanom ovde. (Na primer, konto tipa „Banka X – račun avansa”.)

**Napomena: Knjiženje odobrenja uzima u obzir ovu izmenu i storniraće i prethodno navedeni konto avansa i uobičajeni prelazni konto za prezentacionu listu, pod uslovom naplate.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>