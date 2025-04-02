---
title: Distinte
sidebar_position: 3
---

La form della ricerca distinte 
- si trova in Tesoreria > Portafoglio Effetti > Effetti > Distinte

- permette all'utente di ricercare le distinte di presentazione emesse precedentemente con lo scopo di visualizzarle, modificarle ed eventualmente cancellarle.


## Pulsanti della Ribbon Bar

> - **Ricerca distinte:** Pulsante per ricercare le distinte secondo i filtri di ricerca impostati nella testata della form.
> - **Nuovo distinte:** Richiama la form per inserire una nuova distinta.
> - **Modifica distinte:** Permette di modificare una distinta precedentemente inserita.
> - **Visualizzazione distinte:** Visualizza una distinta precedentemente inserita.
> - **Cancella distinte:** Cancella una distinta precedentemente inserita.

> Esecuzione della **stampa** (*Anteprima* oppure *Stampa*) *Distinta di presentazione*: lancia, relativamente alle distinte selezionate con il mouse, (tenendo premuto Ctrl si possono selezionare più distinte contemporaneamente) l'omonima stampa presente nel [**menu stampe**](/docs/treasury/bills-holding/reports/print-presentation-lists) del modulo

## Filtri nella testata della form

- **Tipo:** filtra per tipo di distinta, dato a sua volta definito nella tabella [***Tipi presentazione distinte effetti***](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)

- **Banca:** filtra per conto **Banca Conto Corrente** impostato sulla testata distinta

- **DA - A Numero distinta:** filtra per numero distinta, dato impostato al numeratore automatico in fase di creazione della distinta

- **DA / A data presentazione:** filtra per data di presentazione, campo ella testata distinta proposto generalmente pari ad "*oggi*" ma può essere variato dall'utente

- **Divise:** filtra per divisa, dato di testata che si riferisce alla divisa degli effetti contenuti in distinta, ad esempio per estrarre solo le divise denominate in dollari.

- **Stampato:** se attivato, questo flag estrae solo distinte stampate (o comunque con flag *stampato* "true")

- **Contabilizzata:** se attivato, questo flag estrae solo distinte contabilizzate attraverso [l'apposita procedura](/docs/treasury/bills-holding/accounting/lists-accounting) (o comunque con flag *contabilizzata* "true")


## Griglia dei risultati

In questa from presenta gli stessi campi presenti nei filtri già dettagliati qui sopra.

Presenta inoltre il **Totale** della distinta (somma gli importi degli effetti in distinta)







