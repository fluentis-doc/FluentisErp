---
title: Dettaglio
sidebar_position: 1
---

**Stato cespite**: viene gestito automaticamente sulla base delle operazioni collegate al cespite e non va forzato. In caso di cespite pregresso inserendo anche il fondo ammortamento lo stato passerà a Parzialmente/Totalmente ammortizzato. Per il corretto inserimento di un cespite pregresso vedere  [**l'allegato all'articolo sulla registrazione contabile di un cespite**.](/docs/finance-area/ledger-records/records/ledger-record) 



La **data d'inizio attività**, proposta come data odierna, è la data alla quale il cespite è effettivamente entrato in uso nella società: solo a partire da questa data sarà possibile ammortizzare il cespite. La **data di fine attività** normalmente non va impostata se non in casi particolari per bloccare il calcolo dell'ammortamento e non visualizzare più il cespite a libro cespiti: nella gestione normale, infatti, al completamento dell'ammortamento residuo il cespite non sarà comunque più ammortizzato. Le **date** relative alle **garanzie** hanno una funzione informativa non collegata ad alcun automatismo.



Nel campo **Cespite** viene riportato automaticamente il sottoconto patrimoniale di riferimento per la categoria cespite selezionata; il successivo codice del fornitore non viene gestito automaticamente dal programma, in quanto i fornitori e i clienti di riferimento delle varie operazioni saranno indicati specificatamente all'interno di queste. Il sottoconto industriale fa riferimento in dettaglio del piano dei conti industriale, normalmente non utilizzato.

Il campo **Ubicazione** richiama la tabella omonima e serve per memorizzare dove si trova fisicamente il cespite (ad es. una sede aziendale) mentre **Matricola** è un campo testuale libero, dove annotare l'ubicazione e la matricola del cespite; il codice **dipendente** può consentire di memorizzare il soggetto che ha in uso il cespite.

A seconda delle impostazioni dei parametri (Configurazione > Utilità > Parametri Cespiti), può essere visibile inoltre una **percentuale di ammortamento** civile 'personalizzata' per il singolo cespite, da utilizzare in via prioritaria rispetto a quella della categoria d'appartenenza come anche l'unità di misura per le quantità valorizzate nella scheda cespite.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image01.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image02.png)

 

Nel campo **Tipi Deducibilità** si può associare al singolo cespite il suo tipo prioritario di deducibilità fiscale degli ammortamenti. La combo box rinvia alla specifica tabella dove codificare il codice e descrizione dei possibili tipi di deducibilità e nella griglia inferiore la relativa percentuale di deducibilità che sarà utilizzata, durante il calcolo della quota di ammortamento, per calcolare la quota deducibile fiscalmente. I campi data inizio / data fine permettono di gestire eventuali cambiamenti di aliquota tenendo traccia dei precedenti.

La sezione dei **Centri di costo**: consente di attribuire una percentuale di valorizzazione automatica degli ammortamenti ai vari centri di costo definiti nella società.
Per abilitarne la lettura occorre attivare, all'interno della form Parametri > Amministrazione > Parametri cespiti, il **flag Abilitazione centro contabilità**

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image03.png)

 

Sono poi presenti una serie di check box visibili aprendo l'Expander Extra Data: 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image04.png)

 

il default del cespite **in uso** (se il flag non è presente, il cespite non potrà essere ammortizzato), lo stato di cespite **usato** (se il flag è impostato, l'ammortamento anticipato sarà applicato solo il primo anno di acquisto e il flag Ammortamento primo anno (presente nella tabella delle ** [Categorie cespiti](/docs/configurations/tables/finance/fixed-asset-category) **) non avrà effetto, per cui le percentuali di applicazione  degli ammortamenti del primo anno non saranno dimezzate); 

**In manutenzione** significa che il cespite è da conteggiare nella stampa manutenzioni; 

**Cessato** è un flag attivo solo per categorie cespiti immateriali e serve ad escluderne la stampa a libro cespiti nel caso in cui il valore patrimoniale sia stato stornato dal bilancio (ammortamento diretto in conto e non a fondo); 

**Amm**. **Totale** consente di attribuire al cespite l'ammortamento al 100% direttamente al primo anno: al salvataggio del cespite ERP sarà effettuata una verifica della correttezza di questa impostazione in relazione al limite impostato in categoria cespite; sarà visibile lo stato di cespite stampato o meno, che indicherà la non modificabilità dei riferimenti di testata del cespite nel caso in cui questo sia già stato inserito in una stampa definitiva del libro cespiti ammortizzabili;

Per concludere, i flag **Ricavometro** e **Studi di settore** servono per identificare i cespiti da considerare per questi adempimenti fiscali.



| Funzione | Significato |
| --- | --- |
| Salva | Salva il cespite, obbligatorio per assegnare un numero al cespite e attivare i vari tab. |
|  [Documenti](/docs/guide/common/operations-with-data/document-manager)  | Gestione dell'archiviazione documentale associata alla maschera in uso. |






