---
title: Importa articoli da controllare
sidebar_position: 2
---

La procedura di importazione si trova sul percorso **Qualità > Controlli articolo > Controlli articolo > Importa articoli da controllare**.   


:::important A cosa serve
Questa gestione permette di creare nuovi *Controlli articolo* importando gli *Articoli* da controllare dai *Tipi documento* previsti:   
> ***Ricevimento merci***   
> ***DDT di acquisto***   
> ***Fatture di acquisto***   
> ***Dichiarazioni di produzione***   
> ***Fasi ordine di produzione***   
> ***Rientri di conto lavoro***   
> ***Movimentazioni di carico***   

associarli al *Piano di controllo* previsto per poi, tramite rilevazioni visive o con l'ausilio di *Strumenti di misura*, andare a verificare la loro conformità.   
:::


La form è suddivisa in:
- un'area di filtro, contestuale al *Tipo documento* da cui si desiderano importare gli *Articoli* da controllare;   
- un'area composta da diversi tabulatori, uno per *Tipo documento*,  ognuno dei quali contiene le griglie dedicate al risultato del filtro.   

## Pulsanti specifici

### ![](/img/neutral/common/search.png) Ricerca righe documento da importare

L'area di filtro e il tabulatore contenente la griglia risultato variano una volta indicato il *Tipo documento*.   
Impostati i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.   
Del *Tipo documento* selezionato, verranno visualizzate solamente le righe documento di articoli:   
- codificati per *Ricevimento merci*, *DDT di acquisto*, *Fatture di acquisto* e *Rientri di conto lavoro*;   
- con quantità prodotte e/o scartate per *Dichiarazioni di produzione*;   

per i restanti *tipi documento* di *Fasi ordine di produzione* e *Movimentazioni di carico* verranno visualizzate tutte le righe documento.   

### Conferma righe documento da importare

Abilitato se si seleziona almeno una riga dalla griglia risultato e il *Tipo controllo* da creare.   
Selezionate le righe desiderate è necessario cliccare sul pulsante **Conferma** per associare i *Piani di controllo* e creare i *Controlli articolo*.   
Al termine dell'operazione viene richiesto se proseguire nell'attività di importazione o aprire i *Controlli articolo* appena creati.   

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />

## Gestione Importa articoli da controllare

### Area di filtro

L'area è composta da una parte fissa dove vengono riportati i filtri di ricerca relativi alle informazioni generali e da una parte variabile e contestuale al *Tipo documento* selezionato; la parte variabile viene visualizzata al di sotto dell'expander *Articolo*.   
I filtri di ricerca relativi alle informazioni generali sono:   
> **Tipo documento**: è il *Tipo documento* nel quale ricercare le informazioni.   
> All'esecuzione della gestione viene proposto il *Tipo documento* indicato come *Default* nell'elenco *Tipi documento per l'importazione* presente nel tabulatore *Controlli articolo* dei *Parametri controlli articolo*; se non indicato viene proposto *DDT di acquisto*.   
> La proposta automatica, o la successiva variazione da parte dell'operatore, faranno variare la parte variabile del filtro dati e il tabulatore visualizzato.
>   
> **Dettaglio articolo**: è il tipo di dettaglio da controllare dell'*Articolo* per la tipologia documento specifica.   
> E' un elenco di valori predefiniti dal sistema:   
> - *Nessuno* - la riga *Articolo* considerata non prenderà alcun dato di dettaglio;   
> - *Lotto* - la riga *Articolo* considerata prenderà come massimo dettaglio il *Lotto*;   
> - *S.N.* - la riga *Articolo* considerata prenderà come massimo dettaglio il *Serial Number*;   
> - *UDC* - la riga *Articolo* considerata prenderà come massimo dettaglio l'*Unità di Carico*.   
>   
> All'esecuzione della gestione viene proposto il *Dettaglio articolo* indicato in *Dettaglio articolo* nell'elenco *Tipi documento per l'importazione* presente nel tabulatore *Controlli articolo* dei *Parametri controlli articolo*.   
>
> **Tipo controllo**: il codice del *Tipo controllo* da associare al *Controllo articoli* da creare.   
> All'esecuzione della gestione viene proposto il *Tipo controllo* indicato in *Tipo controllo* nell'elenco *Tipi documento per l'importazione* presente nel tabulatore *Controlli articolo* dei *Parametri controlli articolo*.   
>   
> expander **Dettaglio**   
>> **Non ancora considerate**: indica se ricercare solamente le righe del documento non ancora considerate in precedenti importazioni.   
>> **Già considerate**:  indica se ricercare, oltre a quelle non ancora considerate, anche le righe del già considerate in precedenti importazioni (solitamente utilizzata nel caso si desideri effettuare ulteriori controlli).   
>   
> **Bar Code**: è il codice che abilitato al riconoscimento di: *Articolo*, *Unità di carico*, *Lotto* e *Serial number*.   
>   
> expander **Articolo**
>> **Unità di carico**: è il codice formattato dell'*Unità di carico*.   
>> **Lotto**: è il codice del *Lotto*.   
>> **Serial number**: è il codice del *Serial number*.   

### Area di risultato   

Contenuta in ogni tabulatore, è la "griglia" che contiene il risultato della *Ricerca* applicata all'area di filtro.   
Le informazioni contenute nell'elenco sono contestuali al *Tipo documento* selezionato.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).