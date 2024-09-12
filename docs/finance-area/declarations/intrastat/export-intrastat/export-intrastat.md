---
title: Esportazione tracciato telematico
sidebar_position: 1
---

Attraverso il bottone **Esporta su File**, collocato dentro i modelli nella ribbon bar ed anche nella form di ricerca viene creato il tracciato telematico necessario per l'invio dei modelli stessi:

- alla dogana (canale *Intraweb*), oppure in alternativa
- all'Agenzia delle entrate (canale *Entratel*)

E' possibile impostare, anche da interfaccia, il tipo di tracciato desiderato accedendo alla form **Parametri generali**, quindi aprendo l'albero di navigazione del business layer fino all'area Finance.

Nel dettaglio del parametro di esportazione intrastat il flag ***Valore*** assume il seguente significato: 0 = flag disattivato (*False*) = Intraweb; 1 = flag attivato (*True*) = Entratel.

![](/img/it-it/finance-area/declarations/intrastat/export/FI_GeneralParameters.png)

Il file del tracciato telematico viene automaticamente archiviato nel documentale e può essere scaricato da li come per tutti gli altri tracciati esportati (bottone con la graffetta).
Parallelamente è prevista anche una esportazione su cartella esterna controllata dall'apposito connettore Bizlink (codice *Intrastat*) e pertanto è possibile personalizzare il percorso del salvataggio.

:::tip Info
La differenza nel tracciato tra la versione Intraweb ed Entratel è riferita al track record di testata dove si nota, per la versione Entratel, il codice iniziale ZENT.
Anche il nome file può essere diverso, tipicamente scambi.cee per intraweb.

E' possibile anche gestire un **codice personalizzato** per il track record di testa tramite il campo **Codice identificativo Utente abilitato** presente all'interno dei [**Parametri generali di contabilità**](/docs/configurations/parameters/finance/accounting-parameters), sezione *Intrastat*
:::