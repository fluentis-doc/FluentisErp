---
title: Reclami - 8D problem solving
sidebar_position: 3
---


## Oggetti reclamati

E' l'elenco degli *Oggetti reclamati* e si compone delle seguenti informazioni:   
> **Oggetto**   
>> **Bar code**: può essere utilizzato per aggiungere o sostituire l'Articolo, Lotto, Numero seriale e Unità di carico.   
>> Per tutte le informazioni su come codificare i barcode consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Classe**: è la *Classe articolo* reclamato.   
>> **Codice articolo**: è il codice dell'*Articolo* reclamato.   
>> **Descrizione articolo**: è la descrizione dell'*Articolo* reclamato.   
>> **Variante**: è la codice variante dell'*Articolo* reclamato.   
>> **Lotto**: è il codice del *Lotto* interno dell'*Articolo* reclamato.   
>> **Numero seriale**:  è il *Numero seriale* dell'*Articolo* reclamato.   
>> **Unità di carico**: è l'*Unità di carico* di origine che conteneva l'Articolo* reclamato.   
>> L'inserimento di una *Unità di carico* comporta l'automatico inserimento di tutte le righe di dettaglio *Articolo* presenti in essa.   
>> Se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Reclami* è stato richiesto il *Raggruppamento dati U.D.C.*, le righe con *Articoli* uguali verranno riportate in un'unica riga con le quantità sommate.   
>  
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* principale dell'*Articolo* reclamato.   
>> **Venduta**: è la quantità di *Articolo* venduta al mittente del *Reclamo*.   
>> **Contestata**: è la quantità di *Articolo* contestata dal mittente del *Reclamo*.   
>> **Resa**: è la quantità di *Articolo* resa dal mittente del *Reclamo*.   
>> **Rilavorata**: è la quantità di *Articolo* rilavorata dal mittente del *Reclamo*.   
>> **Accettata**: è la quantità di *Articolo* accettata.   
>
> **Valore**   
>> **Reclamato**: è il valore reclamato dal mittente del *Reclamo*.   
>> **Accettato**: è il valore accettato.   
>
> **Dati reso**   
>> **Autorizzazione al rientro**: indica che si autorizza il rientro dell'*Articolo* reso per la *Quantità accettata*.   
>> **Data rientro prevista**: è la data prevista di rientro dell'*Articolo* reso.   
>> **Lotto**: è il *lotto* di rientro dell'*Articolo* reso.   
>> **Numero seriale**:  è il *Numero seriale* di rientro dell'*Articolo* reso.   
>> **Unità di carico**: è l'*Unità di carico* di rientro dell'*Articolo* reso.   


### Dati oggetto

Sono le informazioni aggiuntive alla riga dell'*Oggetto reclamato* selezionato. Le informazioni gestite sono:   
> **Progetto**: è il riferimento al *Progetto* del *Difetto* specifico*.   
> **Note articolo**: annotazioni libere sull'*Articolo* del *Difetto* specifico*.   
> **Note lotto**: annotazioni libere sul *Lotto* del *Difetto* specifico*.   
> **Note unità di carico**: annotazioni libere sulla *Unità di carico* riga del *Difetto* specifico*.   
> **Note**: annotazioni libere sulla riga del *Difetto* specifico*.   
> **DDT cliente**: è il riferimento alla *Bolla di vendita* (*Tipo*, *Anno* e *Numero*), con la quale si presume si sia venduto l'*Articolo* .   
> **Fattura di vendita**: è il riferimento alla *Fattura di vendita* (*Tipo*, *Anno* e *Numero*), con la quale si presume si sia fatturato l'*Articolo*.   
> **Ricevimento merce**: è il riferimento al *Ricevimento merce* (*Tipo*, *Anno* e *Numero*), con il quale il mittente rende l'*Articolo*.   
> **DDT di acquisto**: è il riferimento alla *Bolla di acquisto* (*Tipo*, *Anno* e *Numero*), con il quale il mittente rende l'*Articolo*.   

### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Oggetto reclamato* selezionato.   


### Documenti allegati

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Oggetto reclamato* selezionato.   


## Gestione 8D


### Team

E' il gruppo di risorse che prenderanno parte alla gestione del *Reclamo* e si compone delle seguenti informazioni:   
> **Funzione aziendale**   
>> **Codice**: è il codice della *Funziona aziendale* da coinvolgere/coinvolta.   
>> **Descrizione**: è la descrizione della *Funziona aziendale* da coinvolgere/coinvolta.   
>   
> **Dipendente**   
>> **Codice**: è il codice del *Dipendente* da coinvolgere/coinvolto.   
>> **Cognome**: è il cognome del *Dipendente* da coinvolgere/coinvolto.   
>> **Nome**: è il nome del *Dipendente* da coinvolgere/coinvolto.   
>   
> **Leader**: indica che il soggetto da coinvolgere/coinvolto è il *Team leader*.   
> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto da coinvolgere/coinvolto, non sia *Funziona aziendale* o *Dipendente*.   
> **Note**: annotazioni libere.   


### Azioni di contenimento

Sono le azioni immediate che verranno intraprese fino all’implementazione dell’azione correttiva permanenti.   
Queste permetteranno che il problema segnalato non si ripresenti e si compone delle seguenti informazioni:   
> **Dati azione**   
>> **Sequenza**: è la *Sequenza* di visualizzazione delle *Azione di contenimento*; viene proposto un progressivo con la possibilità di essere variato.   
>> **Azione di contenimento**: annotazione libera sull'*Azione di contenimento* da effettuare.   
>> **Data scadenza**: è la data entro la quale si deve completare le attività inerenti all'*Azione di contenimento*.   
>> **Attuata**: indica che l'*Azione di contenimento* è stata completata.   
>> **Data attuazione**: è la data in cui l'*Azione di contenimento* è stata completata.   
>
> **Funzione aziendale**   
>> **Codice**: è il codice della *Funziona aziendale* responsabile dell'azione.    
>> **Descrizione**: è la descrizione della *Funziona aziendale* responsabile dell'azione.   
>   
> **Dipendente**   
>> **Codice**: è il codice del *Dipendente* responsabile dell'azione.   
>> **Cognome**: è il cognome del *Dipendente* responsabile dell'azione.   
>> **Nome**: è il nome del *Dipendente* responsabile dell'azione.   
>   
> **Riferimento azione correttiva**   
>> **Tipo**, **Anno**, e **Numero**: sono i riferimenti, in sola lettura, all'*Azione correttiva* associata alla riga dell'*Azione di contenimento* e generata tramite il pulsante **Crea azione correttiva**.   
>   
> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto responsabile dell'azione, non sia *Funziona aziendale* o *Dipendente*.   
> **Note**: annotazioni libere.   


### Cause

Sono le potenziali *Cause* che potrebbero spiegare perché il problema è accaduto con l'attribuzione di una percentuale di probabilità.   
> **Sequenza**: è la *Sequenza* di visualizzazione delle *Cause*; viene proposto un progressivo con la possibilità di essere variato.   
> **Causa** e **Descrizione causa**: è la causa che ha probabilmente generato il problema; è possibile inserire solamente le *Cause* attive e previste dai *Reclamo*.   
> **Descrizione aggiuntiva**: annotazioni libere sulla *Causa*.   
> **Tipo causa**: è il tipo di causa; ne esistono di tue tipi previsti: la tipologia che ha permesso il generarsi dell'*Evento* e quello che ne ha permesso le *Fuga* senza che l'*Evento* venisse rilevato.   
> **Peso (%)**: è il peso (espresso in percentuale) di ogni singola *Causa*. La sommatoria di tutti i Pesi deve essere il 100%.   
> **Dati del problema**: annotazione libera sull'argomento.   
> **Note**: annotazioni libere.   


### Azioni permanenti

Sono le azioni permanenti che verranno intraprese tenendo presente che le stesse oltre a risolvere il problema, non causeranno effetti collaterali indesiderati.   
L'elenco si compone delle seguenti informazioni:   
> **Dati azione**   
>> **Sequenza**: è la *Sequenza* di visualizzazione delle *Azione permanente*; viene proposto un progressivo con la possibilità di essere variato.   
>> **Azione permanente**: annotazione libera sull'*Azione permanente* da effettuare.   
>> **Causa origine** e **Descrizione causa origine**: è la causa, tra quelle specificate precedentemente nel tabulatore **Cause**, sulla quale si andrà ad effettuare l'*Azione*.   
>> **Data scadenza**: è la data entro la quale si deve completare le attività inerenti all'*Azione permanente*.   
>> **Attuata**: indica che l'*Azione permanente* è stata completata e la *Data attuazione* viene automaticamente proposta alla data odierna, con la possibilità di essere variata.   
>> **Data attuazione**: è la data in cui l'*Azione permanente* è stata completata. All'atto dell'inserimento della data viene impostato il flag *Attuata*.   
>
> **Funzione aziendale**   
>> **Codice**: è il codice della *Funziona aziendale* responsabile dell'azione.   
>> **Descrizione**: è la descrizione della *Funziona aziendale* responsabile dell'azione.   
>   
> **Dipendente**   
>> **Codice**: è il codice del *Dipendente* responsabile dell'azione.   
>> **Cognome**: è il cognome del *Dipendente* responsabile dell'azione.   
>> **Nome**: è il nome del *Dipendente* responsabile dell'azione.   
>   
> **Riferimento azione correttiva**   
>> **Tipo**, **Anno**, e **Numero**: sono i riferimenti, in sola lettura, all'*Azione correttiva* associata alla riga dell'*Azione permanente* e generata tramite il pulsante **Crea azione correttiva**.   
>   
> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto responsabile dell'azione, non sia *Funziona aziendale* o *Dipendente*.   
> **Note**: annotazioni libere.   


### Convalida azioni

Elenco, precompilato con tutte le *Azioni permanenti* precedentemente inserite ed *Attuate*, utilizzato per il controllo che le *Azioni* siano portate a termine entro le date previste e per valutarne l’implementazione e l’efficacia. Da questo elenco non è quindi possibile inserire nuove *Azioni* o eliminane di esistenti. L'elenco si compone delle seguenti informazioni:   
> **Dati azione attuata**   
>> **Sequenza**: è la *Sequenza* di visualizzazione delle *Azione permanente*; viene riportato il progressivo dell'*Azione permanente*. L'informazione è di sola lettura.   
>> **Azione permanente**: *Azione permanente* effettuata. L'informazione è di sola lettura.   
>> **Causa origine** e **Descrizione causa origine**: è la *Causa di origine* dell*Azione permanente* effettuata. L'informazione è di sola lettura.   
>
> **Dati convalida azione attuata**   
>> **Convalidata il**: è la data in cui l'*Azione permanente* è stata convalidata.   
All'inserimento di una qualsiasi altra informazione viene automaticamente proposta alla data odierna, con la possibilità di essere variata.   
>> **Test attuati per convalidare l'efficacia dell'azione**: annotazione libera sull'argomento.   
>
> **Convalidata dalla Funzione**   
>> **Codice**: è il codice della *Funziona aziendale* responsabile della convalida.   
>> **Descrizione**: è la descrizione della *Funziona aziendale* responsabile della convalida.   
>   
> **Convalidata dal Dipendente**   
>> **Codice**: è il codice del *Dipendente* responsabile della convalida.   
>> **Cognome**: è il cognome del *Dipendente* responsabile della convalida.   
>> **Nome**: è il nome del *Dipendente* responsabile della convalida.   
>   
> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto responsabile dell'*Azione*, non sia *Funziona aziendale* o *Dipendente*.   


### Fasi

Sono altre attività dove implementare altre azioni. L'elenco si compone delle seguenti informazioni:   
> **Fasi identificate e/o implementate**   
>> **Sequenza**: è la *Sequenza* di visualizzazione della *Fase*.   
>> **Attività da intraprendere**: annotazione libera dell'*Attività* da effettuare per il completamento della fase.   
>> **Data implementazione prevista**: è la data prevista di completamento dell'*Attività*.   
>> **Attività intrapresa**: annotazione libera dell'*Attività* effettuata per il completamento della fase.   
>> **Data implementazione**: è la data effettiva di completamento dell'*Attività*.   
>
> **Convalidata dalla Funzione**   
>> **Codice**: è il codice della *Funziona aziendale* responsabile della convalida.   
>> **Descrizione**: è la descrizione della *Funziona aziendale* responsabile della convalida.   
>   
> **Convalidata dal Dipendente**   
>> **Codice**: è il codice del *Dipendente* responsabile della convalida.   
>> **Cognome**: è il cognome del *Dipendente* responsabile della convalida.   
>> **Nome**: è il nome del *Dipendente* responsabile della convalida.   
>   
> **Riferimento azione correttiva**   
>> **Tipo**, **Anno**, e **Numero**: sono i riferimenti, in sola lettura, all'*Azione correttiva* associata alla riga dell'*Attività* e generata tramite il pulsante **Crea azione correttiva**.   
>   
> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto responsabile dell'*Attività*, non sia *Funziona aziendale* o *Dipendente*.   
> **Note**: annotazioni libere.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   