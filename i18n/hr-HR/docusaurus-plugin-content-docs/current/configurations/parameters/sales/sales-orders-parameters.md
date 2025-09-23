---
title: Parametri ordini clienti
sidebar_position: 2
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako želite ručno konfigurirati, pogledajte kontrolni popis na povezanoj stranici.   
:::

Parametri faktura prodaje omogućuju osnovnu postavku za ispravno upravljanje, u skladu sa specifičnim zahtjevima svake pojedine tvrtke. Prozor povezan s ovim parametrima sastoji se od 4 različitih kartica: Općenito, Ispunjenje,Otprema  i Analitika. 

### Generale

**Gestione doppia unità misura**: se attivo, nelle righe ordine verranno visualizzate le due colonne UM Alternativa e Quantità Alternativa, sarà perciò possibile gestire la doppia unità di  misura, considerando sempre che è l’unità di misura principale sulla quale vengono fatti i controlli per l’evasione.      

**Proposta automatica UM alternativa:** questo flag diventa editabile solo se è stato attivato il flag di gestione della doppia unità di misura e consente di riportare nel tab articoli dell’ordine l'unità di misura alternativa impostata nell'anagrafica articolo, nell’apposita colonna 'UM alternativa'; se non attivo, l'unità di misura non viene proposta.      

**Controllo Disponibilità:** questo flag e gli altri relativi al controllo, visualizzazione e obbligorietà con la considerazion per area, nella versione attuale, non sono gestite.     

**Riferimento Ordine**: se questo flag viene impostato, nel progetto creato da ordine verrà inserito il Riferimento all’ordine nel titolo del progetto; la composizione nota deve essere specificata nel campo *Descrizione* secondo i parametri descritti nella label.     

**Ricerca prezzi articoli in tutti i listini predefiniti**: quando si cercano il prezzo e gli sconti per un articolo all'interno di un ordine, il sistema segue delle regole basate sulle impostazioni configurate nell'anagrafica cliente, sotto la sezione *Listini*. Se è attivata l'opzione 'default' su un determinato tipo di listino, la ricerca di prezzi e sconti si concentrerà solo su quella specifica tipologia di listino; se il flag "default" non è attivo, il sistema estenderà la ricerca a tutti i tipi di listini presenti, seguendo un ordine di priorità. In pratica, con il flag 'default' attivo, il sistema cercherà prima un listino valido per la tipologia predefinita; se non trova risultati, passerà a controllare le altre tipologie di listino in ordine di priorità inserita. Tuttavia, se nell'anagrafica del cliente non è presente alcuna tipologia di listino impostata come 'default' e ci sono solo priorità, questo parametro non influenzerà la ricerca, anche se attivo.       

**Proponi provvigione per gli articoli omaggio**: con questo flag verranno proposte le provvigioni agente anche per le righe articolo di tipo omaggio come avviene per le righe di tipo Articolo Codificato.     

**Consentire sconti per gli articoli omaggio**: con questo flag verranno inseriti gli sconti sull'importo di riga anche per le righe articolo di tipo omaggio.     

**Obbligo rapporto colli articolo con quantità**: se settato il flag costringe l’utente ad inserire una quantità corrispondente o multipla del numero colli definito nel tab *Pesi/Dimensioni* dell’anagrafica articoli; se la quantità non è il numero colli o un suo multiplo appare il messaggio: “Articolo non vendibile in quantità inferiore o non multiplo di .      

**Proponi lotto economico**: se il flag è settato viene proposto come quantità il lotto economico e se la quantità è inferiore al lotto economico viene dato il messaggio “La quantità non può essere inferiore a …”.       

**Verifica articoli in esaurimento**: se settato, questo flag farà apparire un pop-up di avviso nel caso in cui vengano inseriti in ordine degli articoli che hanno settato in anagrafica il flag in Esaurimento e la data in cui l’articolo va in esaurimento; questo controllo evita di vendere articoli che non verranno più prodotti o riassortiti.      

**[Abilita Widget sconti semplificato](/docs/sales/sales-flow/discount-widget)**: attivando questo flag nella sezione Articoli verranno visualizzate due nuove colonne: *Sconti Articolo* e *Sconti Finali Articolo*. La colonna *Sconti Articolo* è modificabile e mostra gli sconti applicati automaticamente in base alle impostazioni relative al cliente, all'articolo, al listino o alla categoria di sconto. L'utente ha la possibilità di inserire, modificare o eliminare gli sconti direttamente in questa colonna. Per utilizzare questo widget è necessario che, oltre ad attivare il flag, sia specificato nel tipo di ordine quale tipo di sconto utilizzare.     

**Uso articolo cliente**: se settato, questo flag inserirà, nella griglia articoli dell'ordine, le colonne per il Codice e la Descrizione cliente inseriti in anagrafica articolo, tab Cliente.       

**Uso barcode**: se settato, questo flag inserirà, nella griglia articoli dell'ordine, la colonna per riportare il barcode dell'articolo.     

**Consenti modifica commessa di produzione da ordine cliente collegato**: se attivo, permette di modificare la commessa di produzione collegataq ad un ordine.

**Codice operatore obbligatorio**: questo flag rende obbligatorio compilare il campo *Operatore* in testata.     

**Blocca inserimento documento in date festive da calendario di fabbrica**: se attivo, il sistema non permette l'inserimento dell'offerta in date festive (viene controllato prima il Calendario di Fabbrica della società, poi il Calendario delle capacità produttive); se non attivo, il sistema non effettua nessun controllo e lascia inserire il documento.     

**Utilizzo il configuratore matrici**: questo parametro attiva la gestione delle matrici.       

**Esplodi distinta base**: se attivo, nel momento dell'inserimento di un articolo questo verrà sostituito dal primo livello della sua distinta base, se esiste; quindi invece dell'articolo “prodotto Finito” l'ordine sarà popolato con la distinta base di questo articolo.        

**Proponi Dati commerciali per distinta base esplosa manualmente**: se attivo, questo flag indica che per i componenti di primo livello inseriti tramite il flag “Esplodi distinta base” verranno proposti prezzi di listino, sconti e provvigioni come per gli articoli codificati.         

**Gestione Versione Distinta Base**: se attivo, il flag abilita nel tab articoli la colonna Versione distinta base pe poter scegliere una versione diversa da quella di default automaticamente utiizzata.        

**Non raggruppare le righe quando inserisci da distinta base**: se attivo, il flag permette di inserire i componenti del primo livello di distinta in righe diverse anche se hanno lo stesso codice materiale.        

### Evasione

In questo tab sono presenti i seguenti campi:       

**Pagamento**: specifica il valore usato per il pagamento dell'ordine cliente nel caso dell'evasione multipla dei progetti in Ordine: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Destinatario**: specifica il valore usato per il destinatario dell'ordine cliente nel caso dell'evasione multipla dei progetti in Ordine: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Raggruppamento per tipo e soluzione pagamento**: Specifica il fatto che gli ordini clienti verranno raggruppati per tipo e soluzione pagamento all'evasione dalla form di ricerca Ordini con i ribbon Button  Evasione DDT o Evasione fatture.       

**Raggruppamento per destinazione**: Specifica il fatto che gli ordini clienti verranno raggruppati per il destinatario e la destinazione all'evasione dalla form di ricerca Ordini con i ribbon Button  Evasione DDT o Evasione fatture.       

**Visualizzazione griglia evasione:** se attivo, il flag abilita la modalità griglia nella form di evasione ordini vendita.      

**Visualizzazione tree evasione:** se attivo, il flag abilita la modalità tree nella form di evasione ordini vendita.

### Scarico

**Priorità parametri inseriti per ogni riga ordine**: se attivo il magazzino e la causale di scarico vengono letti dalle righe dell'ordine mentre se non viene attivato, verranno utilizzati il magazzino e la causale inseriti nei campi successivi (*Magazzino* e *Causale di magazzino*).

### Analitica

Ova KARTICA specificira kojim prioritetom se dohvaća Centar troškova (CDC) ili Centar profita (CDP) u retku dokumenta.        
Prioriteti se mogu mijenjati pomoću tipki **Premjesti gore**![](/img/neutral/common/move-up.png) i **Premjesti dole**![](/img/neutral/common/delete-cc.png).     
*Zadane vrijednosti*: CDC ili CDP dohvaćaju se iz vrste fakturiranog, ako je prisutna.      
Za dodatne informacije pogledajte tablicu [Vrsta fakturiranog](/docs/configurations/tables/sales/sales-turnover).      
Ako nije prisutno u *Vrsti fakturiranog* sustav će ga tražiti u *Podacima kupca*. Ako nije ni tamo, tražit će u kartoteci artikla, a potom na razini skladišta.         
Flag **Procijeni prioritet za svaku dimenziju** omogućava da se u dokumentima CDC/CDP grupiraju po dimenziji, u kartici Analitika.