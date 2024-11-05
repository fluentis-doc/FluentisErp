---
title: Ricerca Leasing
sidebar_position: 2
---

Da questa posizione è possibile ricercare i contratti leasing presenti nella base dati e procedere a modificarne il dettaglio, oppure inserire un nuovo contratto con il tasto **Nuovo**.

I filtri di ricerca, oltre al numero, descrizione e data di stipula, sono possibili per banca di pagamento dei canoni e per società concedente (società di leasing).

Un altro campo di filtro fondamentale è il **Tipo Leasing**.

Questo campo, riportato anche nella griglia dei risultati, rimanda alla **tabella specifica** (accessibile anche con il tasto destro del mouse > Apri form) che è **necessario compilare prima di inserire un nuovo leasing per la prima volta**.

![](/img/it-it/finance-area/leasing/search/image01.png)

Gli altri dati riportati nella griglia dei risultati sono la **Data di stipula** (del contratto, data dal quale decorre il calcolo dei giorni di competenza),

**Data estinzione** (data fino alla quale calcolare i giorni totali al fine del calcolo dei giorni di competenza),

**Numero** del contratto,

**Descrizione** del bene concesso in leasing,

**Conto / sottoconto** della banca di pagamento e della società concedente,

**Maxicanone iniziale** (se previsto ed inserito nei dati del contratto)

**Spese di istruttoria** (spese di gestione del contratto se previste ed inserite)

**Debito residuo**: campo calcolato come somma delle quote capitali dei canoni previsti al netto di quelle già contabilizzate come pagate.

**TABELLA TIPI LEASING**:

Tabella che definisce tutti gli attributi obbligatori della tipologia di leasing, tipologia da richiamare obbligatoriamente nell'inserimento di un nuovo contratto di leasing.![](/img/it-it/finance-area/leasing/search/image02.png)

**Codice / Descrizione**: liberamente assegnabili identificano il tipo di leasing che stiamo codificando.

**Tipo leasing**: campo attualmente solo informativo, non determina alcun automatismo, definisce se si tratta di Leasing Finanziario o Noleggio Operativo.

**Metodo contabile**: ATTENZIONE attualmente solo la modalità **Patrimoniale** risulta implementata e permette il regolare funzionamento delle procedure di contabilizzazione.

Il metodo Patrimoniale corrisponde ai principi contabili italiani OIC (prevedono di contabilizzare i canoni secondo la forma giuridica del contratto, come una semplice locazione senza trasferimento di proprietà, e conseguente iscrizione nell'attivo patrimoniale e caricamento del cespite solo alla fine del contratto quando il bene sarà riscattato).

Il metodo Finanziario corrisponde ai principi contabili internazionali IAS/ IFRS (prevedono di considerare la sostanza dell'operazione anziché la forma giuridica iscrivendo il bene nell'attivo patrimoniale e caricando la scheda cespite).

**Tipi Flusso**: combo box che permette di richiamare dalla tabella Tipi Flusso del modulo Cash flow la tipologia (avente il flag Extracontabile all'interno della tabella Tipi flusso) la voce con la quale rappresentare i flussi finanziari del fabbisogno per i vari canoni previsti all'interno del contratto.

**Registrazione causale**: causale contabile che sarà utilizzata nelle registrazioni contabili relative ai canoni leasing fatturati dalla società concedente e da contabilizzare.

**Conto / sottoconto interessi**: indicare in questi campi il conto sul quale sarà contabilizzata la quota interessi dei canoni previsti. Questa impostazione sarà proposta nei nuovi contratti inseriti con questa tipologia.

**Conto / sottoconto canoni**: indicare in questo campo il conto da utilizzare per la quota capitale dei canoni che sarà contabilizzata. Il conto sarà proposto nei nuovi leasing inseriti con questa tipologia.

**Conto / sottoconto costo**: indicare il conto da utilizzare per la quota di costo di incasso dei singoli canoni (se prevista).

**IVA**: trattandosi di registrazione di fattura dei canoni indicare l'aliquota da proporre automaticamente nelle registrazioni contabili dei canoni.






