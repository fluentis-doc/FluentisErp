---
title: Documenti degli acquisti e vendite
sidebar_position: 20
---

All'interno dei vari documenti del ciclo attivo e passivo abbiamo a disposizione, sostanzialmente, due elementi d'interesse per le valorizzazioni del *Controlling*: i collegamenti ai *Progetti* e il dettaglio di valorizzazione della scheda *Analitica* di ogni articolo movimentato.

Per quanto riguarda i *Progetti*, in testata dei documenti avremo la possibilità di associare un progetto di riferimento, che sarà utilizzato per valorizzare con lo stesso riferimento tutti gli articoli che saranno inseriti al suo interno: nel caso in cui si modifichi il riferimento di testata con articoli già presenti, ***FluentisERP*** chiederà conferma della sostituzione o meno in tutti i dettagli. Viene consentita la modifica manuale del riferimento del progetto sulla singola riga articolo, con un unico campo di collegamento a disposizione.

Per quanto riguarda la scheda *Analitica* di dettaglio, sottostante alla sezione degli articoli, questa ci consentirà di attribuire liberamente il valore di riga su N centri aziendali: ***FluentisERP*** assegnerà automaticamente i dati ai centri secondo le logiche di priorità e le configurazioni disponibili, ma è sempre data libertà all'utente di procedere ad una modifica manuale. Nel caso in cui la società abbia attivo il *Controlling*, questa scheda analitica presenterà le stesse caratteristiche di gestione multidimensionale e di progetto della scheda analitica delle registrazioni contabili: dato che il documento e la riga articolo, come detto al paragrafo precedente, sono già potenzialmente associate ad un *Progetto*, la sezione analitica valorizzerà automaticamente l'eventuale dimensione *Progetti* dei centri aziendali.

:::tip Nota
Dato che la scheda analitica è l'origine dati di valorizzazione della dimensione *Progetti* e dato che la scheda è liberamente modificabile, anche se la riga articolo prevede l'aggancio ad un unico *Progetto* l'utente ha modo di intervenire a livello di analitica per spezzare l'attribuzione su più *Progetti*, senza dover moltiplicare le righe articolo del documento
:::
