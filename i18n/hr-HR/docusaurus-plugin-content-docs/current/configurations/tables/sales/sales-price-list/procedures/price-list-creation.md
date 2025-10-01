---
title: Creazione listini di vendita
sidebar_position: 3
---

Questa procedura permette di creare nuovi listini di vendita, partendo dagli articoli dei documenti preesistenti.
Nella parte alta della maschera sono presenti i filtri per ricercare i Dati di origine: scegliere tra Listino di vendita, Listino di acquisto, Anagrafica articoli, DDT di acquisto, Fatture di acquisto o Ordini fornitori; esplodendo la Ricerca documento è inoltre possibile filtrare ulteriormente per cercare uno specifico listino. Per visualizzare i risultati premere Ricerca listini.

:::note Attenzione
Il campo **Arrotondamenti**, situato nella parte inferiore della maschera, rappresenta un campo obbligatorio. Per poter visualizzare i dati e procedere con la creazione die listini, è necessario selezionare uno degli [arrotondamenti](/docs/sales/sales-price-list/procedures/rounding) precedentemente codificati nell'apposita maschera. 
:::


Nella prima griglia verranno riportati i documenti risultanti dalla ricerca, e selezionando una riga, nella griglia in basso verranno riportati gli articoli del documento. Analizziamo le colonne:       
- **Classe/Codice/Descrizione articolo**: dati identificativi dell'articolo, seguiti da **Variante**, **Quantità**, **UM**, **Marca**.       
- **Non considerare**: gli articoli che presentano questo valore spuntato non saranno variati nel nuovo listino.     
- **Costo precedente**: propone il costo dell’ultimo documento del tipo selezionato in dati di origine.     
- **Prezzo ini.**: identifica il prezzo che era presente nel documento di origine.     
- **Prezzo ivato ini.**: viene visualizzato il prezzo iniziale iva inclusa.      
- **Prezzo non arr.**: propone quello che è il prezzo compreso dell’incrementato (o decrementato) deciso per il nuovo listino.    
- **Prezzo ivato non arr.**: prezzo non arrotondato compreso di IVA.     
- **Mask**: visualizza il mask a cui è soggetto il singolo articolo.       
- **Prezzo arrotondato**: viene proposto il *Prezzo non arr*. arrotondato secondo il *Mask* definito.      
- **Prezzo ivato arrotondato**: viene proposto il *Prezzo ivato non arr*. arrotondato secondo il *Mask* definito.     
- **Prezzo listino attuale**: se nella sezione *Listino da creare* (in basso) viene selezionato **Accodare i dati selezionati ad un listino già creato**, nella colonna verrà visualizzato il prezzo che l’articolo ha nel listino selezionato, se presente.       

Nella sezione in basso sono richiesti i dati obbligatori del *Listino da creare*: la tipologia di listino (se generico o personalizzato), il Tipo o Cliente  in base alla tipologia, la Data di inizio validità (eventualmente anche una Data fine validità), la Divisa, gli Arrotondamenti da applicare ed i flag:         
- **Prezzo Ivato**: significa che il listino da creare sarà un listino con prezzi già incorporati di Iva.       
- **Listino minimo**: flag informativo che indica di creare un listino dei prezzi minimi di tentata vendita.  

Questi dati possono essere inseriti manualmente, oppure cliccando il bottone **Accodare i dati selezionati ad un listino già creato** verranno inseriti automaticamente, in quanto si aprirà un pop up nel quale selezionare il listino dal quale prendere i dati anagrafici. Questa operazione farà in modo che, all'avvio della procedura, gli articoli verranno aggiunti al listino preesistente, e non verrà creato un listino nuovo; se nel listino preesistente selezionato alcuni articoli esistono già, verrà chiesto all'utente se mantenere il prezzo di listino vecchio oppure aggiornarlo.           

La creazione dei listini viene effettuata con i bottoni presenti nella ribbon bar:       
- **Creazione di tutti gi articoli**: il listino viene creato con tutti gli articoli presenti nel documento selezionato nella prima griglia.         
- **Creazione degli articoli selezionati**: il listino viene creato con gli articoli selezionati nella seconda griglia.        

Una volta creato il nuovo listino, Fluentis chiederà se aprirlo o meno.      

Nella ribbon bar sono presenti ulteriori bottoni per la gestione del mask:     
- **Aggiornamento mask**: aggiorna in anagrafica dell’articolo il *Mask* che è stato associato al singolo articolo evidenziato       
- **Riprendi mask dai range**: in caso di variazione del campo *Arrotondamenti* nella sezione *Listini da creare*, questo bottone ricalcola il *Mask* nella seconda griglia, proponendo il *Mask* dell'Arrotondamento selezionato.             
- **Attivazione\disattivazione flag Non considera**: Attiva o disattiva il flag *Non considerare* degli articoli evidenziati.     


