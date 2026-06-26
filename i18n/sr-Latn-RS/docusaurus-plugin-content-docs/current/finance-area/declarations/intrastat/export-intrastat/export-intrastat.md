---
title: Izvoz zapisa
sidebar_position: 1
---

Klikom na dugme **Izvoz u datoteku**, koje se nalazi na traci sa alatkama unutar Intrastat obrasca, kao i u obrascu za pretragu, generiše se elektronski zapis potreban za slanje Intrastat prijave:

- Carinskoj upravi (kanal *CIWS*), ili
- Poreskoj upravi (kanal *e-Porezna*).

Vrsta zapisa koji će biti generisan može se podesiti u obrascu **Opšti parametri**, otvaranjem stabla poslovne logike i izborom oblasti **Finansije**.
U parametrima za Intrastat izvoz, polje **Vrednost** ima sledeće značenje:

- **0** = oznaka nije aktivirana (*False*) = **Intraweb**
- **1** = oznaka je aktivirana (*True*) = **Entratel**

![](/img/it-it/finance-area/declarations/intrastat/export/FI_GeneralParameters.png)

Generisana datoteka se automatski arhivira u sistem za upravljanje dokumentima, odakle se može preuzeti kao i svi ostali izvezeni zapisi (dugme sa ikonom spajalice).
Istovremeno se zapis izvozi i u spoljašnji direktorijum kojim upravlja odgovarajući **Bizlink** konektor (šifra *Intrastat*), pri čemu je moguće prilagoditi putanju za čuvanje datoteka.

:::tip Informacija

Razlika između zapisa za verzije **Intraweb** i **Entratel** (Italija) odnosi se na zaglavlje zapisa. Kod verzije **Entratel** zaglavlje počinje kodom **ZENT**.
Naziv izlazne datoteke takođe može biti različit, a za **Intraweb** se najčešće koristi naziv **scambi.cee**.
Moguće je definisati i **prilagođeni identifikacioni kod** za zaglavlje zapisa putem polja **Identifikacioni kod ovlašćenog korisnika**, koje se nalazi u [**Opštim parametrima knjiženja**](/docs/configurations/parameters/finance/accounting-parameters), u odeljku **Intrastat**.

::: 