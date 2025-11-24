---
title: Ricerca e Nuovo Budget Consuntivo
sidebar_position: 5
---

## Ricerca

Il comando **Budget consuntivo** consente di ricercare, gestire e stampare le elaborazioni dei consuntivi di budget, per valutare l’andamento e gli scostamenti tra previsionale e consuntivo: potremo crearne di nuovi (con il pulsante Nuovo posto nella ribbon bar, oppure con il comando Nuovo Budget consuntivo posto direttamente nel menu), oppure modificare l’esistente.

Inserendo un **Nuovo consuntivo** si apre la maschera per valorizzare i consuntivi ***dei vari sotto-budget***, al fine di analizzare **l’andamento degli scostamenti**.

## Come ottenere un'analisi scostamenti a consuntivo

1. Usando la combo box **Budget** selezionare il Budget previsionale da consuntivare (da analizzare in termini di scostamenti a consuntivo)
2. Selezionare i dati a **consuntivo** per l'analisi scostamenti nella sezione di **destra** della testata della form; questi possono essere:
    - Una **chiusura infrannuale** precedentemente elaborata, da selezionare con l'apposita combo box;
    - **Dati dal Controlling**, ovvero la *contabilità gestionale*, attivando l'apposito flag e selezionando un **Area** di analisi (tra quelle configurate precedentemente), un **Dimensione** dei centri aziendali (centri di costo) ed un **range di periodi** (Anno / mese).
3. Salvare la testa della form con i parametri di cui ai punti precedenti e procedere selezionando uno ad uno i vari *sotto-budget* nella griglia superiore;
4. Premere il bottone **Calcola consuntivo** il quale valorizza i dati di dettaglio della griglia inferiore per ognuno dei sotto -budget selezionati nella griglia superiore
 
Nella griglia inferiore, a seconda del tipo di sotto-budget valorizzato avremo le colonne con i dati totali di budget e totali del consuntivo (quelle etichettate come ***effettivo***), per valutare gli scostamenti.

:::note[Nota]
Se la chiusura infrannuale (o i periodi di controlling impostati) vanno fino al 31/06, per esempio, si totalizzeranno e valuteranno automaticamente i primi 6 mesi del budget.

La form non visualizza il dettaglio della comparazione per il singolo periodo, ma questo è presente nell’elaborazione sottostante (oggetto FSBudgetActualObjectValueByPeriod) ed è quindi disponibile per dashboard e visualizzazioni customizzate.

:::

## Stampa Analisi Budget

Il report di stampa ***Analisi Budget*** rappresenta gli stessi dati dei consuntivi di budget evidenziati nella presente form. Prima ell'esecuzione sono disponibili i filtri corrispondenti ai dati in questione: il Tipo Budget, Tipo periodo e per Data / Numero sia del previsionale che del consuntivo.