---
title: Nuova scheda tecnica
sidebar_position: 2
---

Le schede tecniche definiscono le proprietà dei prodotti. Le caratteristiche dei prodotti possono essere differenziate in base al cliente. I dati richiesti sono:    
**Tipo scheda**: contiene la [tipologia di Scheda tecnica; essa può essere impostata di default nei [Parametri;        
**Codice**: è un codice alfanumerico precodificabile con la [tipologia di Scheda tecnica;                    
**Revisione**: indica l'attuale revisione della scheda;              
**Descrizione**: contiene la descrizione, sempre precodificabile;                 
**Nome commerciale**: è possibile attribuire un nome commerciale;                 
**Del cliente**: è possibile associare un eventuale cliente alla scheda; questo può servire nel caso in cui lo stesso articolo venga utilizzato per clienti diversi e con caratteristiche particolari che variano;                    
**Validità**: campo gestito automaticamente dal programma nel caso di creazione di nuova Revisione; è un campo modificabile anche manualmente;           
**Responsabile**: è possibile inserire un Dipendente responsabile della scheda; esso è settabile di default nei [Parametri;          
**Tipo/scheda origine/Rev.**: indica l'eventuale scheda tecnica di origine che ha generato questo documento. La scheda tecnica può essere infatti inserita: manualmente, duplicando una scheda tecnica preesistente, oppure crendo una nuova revisione per una scheda preesistente; in quest'ultimo caso la nuova revisione riporterà, in questo campo, il riferimento della scheda di origine, con il relativo **Motivo**;          
**Note**: è possibile inserire liberamente delle note;              
**Attributi scheda**: contiene eventuali [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

 Sono presenti poi alcune tab.

**Tab Articoli associati**    
Contiene gli articoli, con eventuali varianti, associati alla scheda tecnica e quindi per i quali essa ha validità. Il campo [Tipo di dichiarazione (di non responsabilità) indica la tipologia di dichiarazioni da associare all'articolo, che per esempio può essere un prototipo, piuttosto che un prodotto finito, ecc.

**Tab Proprietà**      
Contiene le caratteristiche degli articoli ai quali associeremo la scheda tecnica; per approfondimenti, consultare la tabella [Tipi prova. Gli altri dati richiesti sono:     
**Prova da rilevare**: indica che la provadeve essere inserita nel futuro piano di controllo;                
**Tipo valore**: indica se il valore è di tipo **Testo**, di tipo **Si/No** oppure di tipo **Numerico**; in quest'ultimo caso, è possibile indicare un **Tipo limite**;     
**%**: indica se i valori sono espressi in percentuale o sono assoluti;        
**Valore nominale**: indica il valore numerico che deve avere la prova;   
**Limite minimo** e **Limite massimo**: specifica il limite minimo e massimo di errore che può avere la prova, in percentuale o valore assoluto in base al flag **%**; il limite minimo va sottratto al Valore nominale, il Limite massimo va sommato;                
**L.min.(Toll)**: indica le tolleranze sui limiti minimo e massimo che si aggiungono alle tolleranze precedenti; può essere presente per esempio l'incertezza sull'unità di misura; è un valore percentuale.         
**Stp.**: questo flag indica se la caratteristica deve essere stampata;                       
**Data inizio/fine validità**: è possibile scegliere delle date di validità per la prova.        
E' possibile poi indicare degli Attributi oppure dei Documenti alla singola Proprietà, all'interno delle relative tab sottostanti.

**Tab Schede correlate**                     
In questa tab è presente l'elenco di tutte le Schede tecniche nate da questa.

**Tab Revisioni**                       
In questa tab sono presenti tutte le Revisioni precedenti alla revisione attuale.


**Tab Attributi articolo**     
E' possibile indicare degli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) per la validità della Scheda tecnica. In questo modo, tutti gli articoli che avranno un determinato Extra Data verranno ritenuti associati alla scheda. Questo per fare in modo che ogni volta che viene creato un articolo con determinati attributi, in automatico verrà associato alla scheda tecnica in creazione. La scheda tecnica può quindi essere associata anche a tutti gli articoli che presentano determinate caratteristiche.

I pulsanti specifici della ribbon bar sono:           

![](/img/neutral/common/duplicate.png) Duplica: permette di duplicare la scheda tecnica; questa funzione è utilizzata soprattutto nel caso in cui venga creata una Scheda Tecnica Template da utilizzare come modello per le nuove schede. Infatti, è richiesto l'inserimento di: **Tipo**, **Cliente**, **Codice**; il flag **Duplica con rintracciabilità** farà comparire la scheda di  Origine nel campo   **Scheda origine** della nuova Scheda.          

![](/img/neutral/common/execute.png) Crea nuova revisione: crea una nuova revisione per questa scheda; la creazione di una nuova revisione inserisce il campo **Validità fine** nella scheda con revisione precedente.                       

![](/img/neutral/common/control.png) Crea un nuovo [Piano di controllo, quindi il documento che sarà l'istruzione operativa per il rilevamento di determinati valori. La creazione del Piano creerà un documento legato alla scheda tecnica, della quale riportera le Proprietà con il flag **Da rilevare**.



