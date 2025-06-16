---
title: Izvoz telematskog zapisa
sidebar_position: 1
---

Pritiskom na tipku **Izvoz u datoteku**, koja se nalazi unutar modela na traci izbornika kao i u obrascu za pretraživanje, generira se telematski zapis potreban za slanje samih modela:

- carini (kanal *Intraweb*), ili alternativno
- Poreznoj upravi (kanal *Entratel*)

Vrstu željenog zapisa moguće je postaviti i putem sučelja, pristupom obrascu  **Opći parametri**, a zatim otvaranjem navigacijskog stabla poslovnog sloja do područja Financije.

U detaljima parametra za Intrastat izvoz, flag ***Vrijednost*** ima sljedeće značenje: 0 = flag deaktiviran (*False*) = Intraweb; 1 = flag aktiviran (*True*) = Entratel.

![](/img/it-it/finance-area/declarations/intrastat/export/FI_GeneralParameters.png)

Datoteka telematskog zapisa automatski se arhivira u dokumentacijski sustav i može se od tamo preuzeti kao i svi ostali izvezeni zapisi (tipka sa spajalicom).
Paralelno je predviđen i izvoz u vanjsku mapu kojom upravlja odgovarajući Bizlink konektor (šifra *Intrastat*) te je moguće prilagoditi putanju spremanja.

:::tip Info
Razlika između zapisa za verziju Intraweb i Entratel odnosi se na zaglavlje zapisa, gdje se u verziji za Entratel nalazi početni kod ZENT.
Također, naziv datoteke može biti različit, tipično scambi.cee za  intraweb.

Moguće je postaviti i **prilagođeni kod** za zaglavlje zapisa putem polja **Identifikacijski kod ovlaštenog korisnika** koje se nalazi unutar [**Općih računovodstvenih parametara**](/docs/configurations/parameters/finance/accounting-parameters), u sekciji *Intrastat*
:::