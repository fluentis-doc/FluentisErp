---
title: Gestione Conai
sidebar_position: 7
---

Questo paragrafo raccoglie le indicazioni di carattere funzionale per poter gestire in Fluentis l’applicazione 
automatica delle spese relative al Conai nei documenti di acquisto e vendita (negli esempi del documento se ne 
presuppone l’applicazione in vendita)

**Attivazione Gestione Conai**   
La gestione Conai si attiva automaticamente impostando, in tabella società, del Codice partner Conai.     
Si suggerisce di completare la sezione con l’indicazione della tipologia di partner e della data di iscrizione, anche se non 
sono campi obbligatori.    

**Tabella Tipi materiali**     
Le tipologie di materiali d’imballaggio si codificano nella tabella della logistica denominata *Tipi materiali*.
Per ogni tipologia, si indicherà il codice materiale Conai (cioè Acciaio, Alluminio, Carta, Legno, Plastica, …) e poi si dovrà indicare un codice articolo fittizio da utilizzare per l’inserimento della riga spesa Conai in bolla/fattura (se non viene indicato un codice articolo questo materiale non sarà valido per la configurazione Conai negli articoli di vendita/acquisto). 
A seconda del livello di dettaglio che si vuole ottenere in fattura, si potrà utilizzare un unico codice articolo o uno per ogni tipologia di materiale inserito.      
Nella griglia sottostante, invece, si dovranno definire le tariffe da applicare all’interno dei vari range di date, con l’unità di misura da applicare (che dovrebbero essere le Tonnellate): questa deve essere coerente con l’unità di misura che si utilizzerà all’interno degli articoli di vendita e degli articoli fittizi Conai.

**Definizioni in anagrafica articoli**     
All’interno dell’anagrafica articoli, nella scheda *Pesi/dimensioni*, è presente una sezione di codifica delle caratteristiche dei materiali che compongono l’articolo stesso per la gestione Conai.
In particolare:     
- Usa in acquisto: per questo articolo ci sarà il calcolo del Conai nei documenti di acquisto  
- Usa in vendita: per questo articolo ci sarà il calcolo del Conai nei documenti di vendita  
- Tipologia di imballaggio: indicare se è Primario, Secondario o Terziario  
- Vuoto o pieno: se l’articolo è un imballaggio vuoto (flag non impostato) o pieno (flag impostato)  

Nella griglia sottostante si andranno ad indicare i materiali d’imballaggio che compongono l’articolo, ognuno con il relativo peso nell’unità di misura codificata per il tipo di materiale stesso.     

**Impostazioni in anagrafica cliente/fornitore**     
Affinché la spesa Conai sia applicata in acquisto o vendita, il fornitore/cliente deve essere impostato correttamente nella sua anagrafica.
In particolare:   
- Tipo partner Conai: affinché il calcolo sia eseguito in vendita, il cliente deve avere tipo A – Autoproduttore, U1 – Commerciante/distributore oppure U2 – altri utilizzatori; per il calcolo in acquisto, il fornitore dovrà essere P – Produttore.       

Nella griglia sottostante si potranno impostare eventuali percentuali di esenzione tipo materiale per tipo materiale, con 
le relative date validità.

**Tipi ddt e tipi fattura**    
Nei tipi ddt di acquisto e vendita, così come nei tipi fatture di acquisto e vendita, è presente un flag *Gestione Conai*, che attiverà il calcolo per quel tipo documento specifico.   

**Esemplificazione in una fattura di vendita**    
Se per la società attiva è stata attivata la gestione Conai, allora la scheda ‘Articoli’ della fattura di vendita presenterà un  sottotab denominato *Materiali Conai per l’articolo*. Questa sezione riporterà i materiali d’imballaggio che compongono l’articolo in vendita, con la relativa unità di misura, peso unitario (abbattuto dell’eventuale percentuale d’esenzione dell’anagrafica cliente) e il totale del peso ottenuto dalla moltiplicazione tra numero di articoli venduti per il peso unitario.
Al salvataggio del documento, o alla pressione del pulsante ‘Ricalcolo Conai’, Fluentis inserirà una o più righe spese recuperando l’articolo dei materiali, con quantità uguale alla somma delle quantità e prezzo uguale al costo conai per quel materiale.     
Nel file della fattura elettronica per lo Sdi, Fluentis aggiungerà automaticamente una serie di tag nella sezione *Altri dati gestionali* degli articoli per riportare i materiali e i pesi unitari per l’articolo stesso.    

**Stampe di controllo e totalizzazione**     
Nei moduli delle fatture d’acquisto e vendita sono presenti due form di stampa con le quali estrarre i totali periodici per i vari materiali, sia per controllo interno che per ottenere i valori da denunciare al Conai.
Per le vendite, è disponibile anche un report che ricalca le pagine internet del Conai dove caricare i dati delle dichiarazioni: tale report filtra i materiali sulle lettere iniziali del Codice Conai inserito in tabella materiali.