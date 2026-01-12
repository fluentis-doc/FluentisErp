---
title: Ricerca e Nuovo Budget
sidebar_position: 4
---

## Ricerca

Il comando **Budget** consente di ricercare, gestire e stampare i budget: potremo crearne di nuovi (con il pulsante Nuovo posto nella ribbon bar, oppure con il comando Nuovo Budget posto direttamente nel menu), modificare l’esistente, oppure anche duplicarne uno precedentemente inserito. La duplica, in particolare, restituirà un popup di gestione con il quale 
-	potremo definire se vogliamo creare una **Nuova versione** (flag) del budget selezionato, piuttosto che creare un nuovo budget con l’attribuzione di un nuovo numero (flag settato a false); 
-	dovremo impostare la **Descrizione** per la copia da creare
-	potremo applicare (Flag true) o meno (Flag false) le **Percentuali di variazione** assegnate ai vari sottoconti contabili.

La form di ricerca dei Budget visualizza di default solo l’ultima versione di ogni budget (a parità di *Numero* Budget, *Tipo* Budget e *Tipo Periodo*): aprendo la sezione di filtro della form sarà  possibile visualizzare anche le versioni precedenti, che restano in memoria, attivando il Flag **Mostra tutte le versioni**.


:::note[Nota]
La tabella delle [**Percentuali di variazione**](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), presente nelle tabelle del Controlling, consente di definire un valore percentuale di variazione per la quota fissa e la quota variabile dei valori dei sottoconti. Ogni codice può poi essere assegnato al singolo sottoconto di costo/ricavo all’interno del piano dei conti.
:::

:::tip[Consuntivo]
I successivi comandi del menu, per ricercare ed inserire un nuovo **Budget Consuntivo** permettono di creare delle elaborazioni a consuntivo per evidenziare **l'analisi degli scostamenti** rispetto al preventivo elaborato nella presente form, e dunque giudicare l'andamento della gestione.
:::

## Nuovo Budget

1. Compilare i dati i testata obbligatori quali *Tipo Budget*, *Tipo periodo*, **Descrizione**. Modificare se necessario gli altri dati quali la Data, l'Anno e le date di riferimento del budget (**Data Inizio - Data Fine**). E' obbligatorio impostare o l’anno o il range di date di riferimento (in questo secondo caso, Fluentis compilerà il campo anno dall’anno della data inizio).

- Flag **Definitivo**: rende il budget non modificabile; 
- Flag **Predefinito**: identifica qual è il budget in uso rispetto ad altre versioni usate ad esempio solo a scopo di simulazione; 
- Flag **Dettagliato per divisione**: attiva la possibilità di associare dei *sotto-budget* ad ogni specifica divisione aziendale.

2. Compilare i dati della griglia superiore inserendo le **tipologie di valori** che utilizzeremo nel nostro Budget (definito di seguito in relazione ai dati di dettaglio *sotto-budget*), tra quelle disponibili, dal campo **Tipo di oggetto di Budget**:
    - Sottoconti contabili
    - Centri di costo / ricavo
    - Modelli di riclassificazione
    - Articoli
 
A seconda del tipo di dato si abilita la relativa colonna per l'impostazione del dato (nel caso del dato contabile o del modello di riclassificazione)
La colonna **Descrizione**, facoltativa, permette di inserire maggiori dettagli sul dato selezionato;

La colonna **Dipartimento** è attiva solo se in testata è stata attivata la definizione del budget per divisione.

3. Gestire le griglie inferiori contestualmente al tipo di dato selezionato:

- La griglia in basso a **sinistra** conterrà la lista con il dettaglio dei valori riferita al sotto-budget selezionato sopra, quindi i campi disponibili dipenderanno dalla tipologia del sotto-budget stessa (tipologia di dato), mantenendo in comune l’importo *dare*, *avere*, importo *fisso* e importo *variabile*. La valorizzazione percentuale dell’Importo fisso e importo variabile si possono predefinire nel piano dei conti, compilando il campo della *variabilità* a livello di sottoconto oppure a livello della griglia delle variabilità del sottoconto per centro di costo.

:::note[Esempio]
Se il sotto-budget è per sottoconti, avremo una lista di sottoconti; se è di tipo centri di costo, avremo il sottoconto e il centro di costo; se è di tipo centro di ricavo, avremo il sottoconto e il centro di ricavo; se è di tipo modello, potremo selezionare i nodi del modello associato.
:::

Una volta che si inizia a compilare i dati di dettaglio di un sotto-budget, la riga superiore collegata non sarà più editabile.

- La griglia di **destra** darà la possibilità di valorizzare periodo per periodo i dati: nel caso di inserimento manuale nella griglia di sinistra, al momento non esiste alcuna valorizzazione automatica né verifica di quadratura della sezione di dettaglio di destra con quella di sinistra.

### Procedure di valorizzazione automatica dei sotto-budget

All’interno del budget sono presenti alcuni pulsanti che consentono di valorizzare automaticamente i dati dei vari sotto-budget, prelevando i dati da altre sezioni di Fluentis a seconda del sotto-budget selezionato.

**BUDGET PER SOTTOCONTI CONTABILI**

Possiamo valorizzare questo sotto-budget tramite due pulsanti: 
-	**Crea da registrazioni contabili**: fa comparire un popup per filtrare le date registrazione, competenza, l'eventuale causale contabile da escludere (esempio quella di chiusura conti per un periodo precedente, al fine di non avere i saldi a zero), i flag per riportare anche i conti patrimoniali (l’economico sarà sempre ripreso); applicare le percentuali di variazione (definite in tabella ‘Percentuali di variazione’); applicare il valore relativo del periodo oppure (in alternativa) utilizzare le competenze economiche originali.

:::note[Nota]
Con queste due ultime opzioni, tra loro alternative, Fluentis valorizzerà il dettaglio dei periodi (cioè la griglia in basso a destra) leggendo i pesi attribuiti ai singoli periodi di budget, oppure andando a considerare i range di date competenza originali delle registrazioni (es. se il costo X ha un solo movimento di competenza dal 01/03 al 31/08, a destra troveremo i valori da marzo ad agosto, proporzionati sul numero di giorni effettivi di ogni singolo mese)
:::

- **Crea da chiusure infrannuali**: fa comparire un popup per filtrare la chiusura infrannuale da prendere come origine dati applicando a questa le medesime opzioni già viste nel caso precedente (flag per includere i dati patrimoniali, applicare le percentuali di variazione e applicare i valori relativi di periodo dalla distribuzione periodi o le competenze economiche originali delle registrazioni).

- **Raggruppa righe dei dettagli**: serve quando si è utilizzata l’opzione *Usa competenze economiche originali*: in questo caso, infatti, Fluentis inserirà una riga di dettaglio per ogni range di competenza economica che trova, comodo per una verifica dei calcoli ma scomodo per la gestione successiva per totali del budget. Questo pulsante, quindi, consente di totalizzare i valori per singolo sottoconto, raggruppando i dati relativi dei periodi.

**BUDGET PER CENTRI DI COSTO - RICAVO**

Per questa tipologia avremo a disposizione i seguenti pulsanti: (I prime due e l’ultimo sono le stesse opzioni viste nel punto precedente e non necessitano di ulteriori spiegazioni).

-	Crea da registrazioni contabili

-	Crea da chiusure infrannuali

-	Crea centri di costo dai conti contabili: attiva un popup per selezionare (selezione multipla attiva) la lista dei sotto-budget di tipo *Sottoconto* da utilizzare come origine dati; vengono letti i dati di budget di questi sottoconti e valorizzato il budget per centri di costo leggendo le impostazioni di default del Piano dei conti (legami con i centri ecc...) per ogni sottoconto, ricalcolando eventualmente la variabilità (stesso riferimento del tipo precedente).

-	Crea centri di costo da storico registrazioni gestionali: attiva un popup (utile solo se viene utilizzato completamente il modulo controlling) per selezionare lo *Storico registrazioni gestionali* (Da anno a anno e da periodo a periodo e l'Area) potendo applicare eventualmente (Flag) le percentuali di variazione.

-	Raggruppa righe dei dettagli

**BUDGET SU MODELLI DI RICLASSIFICAZIONE**

Per questa tipologia l’unico pulsante attivo è **Crea valori del modello**, che attiva un popup per selezionare i *sotto-budget* da considerare come origine dati (nella combo box è attiva la selezione multipla con i tasti Ctrl o Shift):

- i *sotto-budget* per *sottoconti* saranno utilizzati per valorizzare i nodi (le righe) del modello di riclassificazione [**impostate con tipologia *sottoconti***](/docs/controlling/reclassifications/create-reclassification-model)
- i *sotto-budget* per *centri di costo* saranno utilizzati per valorizzare i nodi (le righe) del modello di riclassificazione [**impostate con tipologia *centri di costo***](/docs/controlling/reclassifications/create-reclassification-model)