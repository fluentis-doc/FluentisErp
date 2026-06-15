---
title: Knjiženje nenaplaćenog na cesiju
sidebar_position: 6
---

Obrazac se nalazi u **Riznica > Vrijednosni papiri > Knjiženja > Knjiženje nenaplaćenog na cesiju**.

Ova funkcija služi za knjiženje nenaplaćenih vrijednosnih papira koji su prethodno preneseni dobavljaču kao sredstvo plaćanja. Postupak, prema postavkama odabranog kontnog naloga, ponovno otvara otvorene stavke kupaca povezane s nenaplaćenim vrijednosnim papirima te istovremeno ponovno otvara stavke dobavljača koje su bile zatvorene prijenosom tih vrijednosnih papira.

## Kako knjižiti nenaplaćeni vrijednosni papir kod cesije

1. U gornjem dijelu obrasca postavite filtre za pretraživanje nenaplaćenih vrijednosnih papira.
2. U središnjoj tablici označite zapise koje želite knjižiti.
3. U kartici **Parametri knjiženja** unesite potrebne podatke:
   - **Konto-knjiženje**
   - **Datum knjiženja**
   - **Datum obračunskog razdoblja**

:::note Napomena
Ove se vrijednosti mogu unaprijed definirati u parametrima modula **Portfelj vrijednosnih papira**.
:::

Opcija **Troškovi terećenja kupca** omogućuje zaduženje troškova kupcu te evidentiranje pripadajućeg prihoda na konto naveden u polju **Konto/podkonto za terećenje troškova kupcu**.

Podkonta za **Troškove protesta** i **Prijelazni konto** preuzimaju se iz parametara modula, ali ih je moguće promijeniti ili unijeti ručno za pojedinu obradu.

4. Kliknite **Knjiženje nenaplaćenih vrijednosnih papira** na alatnoj traci.

### Posebne funkcije

- **Pretraži**: prikazuje popis nenaplaćenih vrijednosnih papira spremnih za knjiženje.
- **Knjiži**: izvršava knjiženje za označene retke.

## Kartica Prethodna knjiženja

Na kartici **Prethodna knjiženja** moguće je poništiti prethodno izvršena knjiženja.

Poništenje je moguće samo ako je obračunsko razdoblje još uvijek otvoreno za izmjene (glavna knjiga nije zaključena i nije izvršeno zaključavanje konta).

Dvostrukim klikom na zapis moguće je otvoriti povezani knjižni nalog.

Dostupna je i kartica za pregled eventualnih pogrešaka koje su nastale tijekom knjiženja.

### Posebne funkcije

- **Pretraži**: prikazuje popis izvršenih knjiženja.
- **Vrati knjiženje**: poništava odabrana knjiženja.
- **Vrati nenaplaćeni vrijednosni papir**: poništava knjiženje povezano s pojedinačnim nenaplaćenim vrijednosnim papirom.