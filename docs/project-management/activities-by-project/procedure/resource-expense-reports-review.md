---
title: Verifica nota spese risorse
sidebar_position: 4
---
E' una procedura dove sono visibili tutte le spese di tutti i dipendenti. Le spese evidenziano eventuali discordanze rispetto al plafond autorizzato, e sarà il soggetto responsabile a gestire la validazione delle spese. Al termine della validazione, verrà creato un riepilogo per ciascuna risorsa. 

### Filtri di ricerca 
**Periodo competenza**: 
	viene proposto di default il mese precedente a quello corrente. Indica il mese in funzione del quale verranno cercate le spese

**Da Data Spesa a Data Spesa**: 
	in funzione del periodo selezionato, verranno proposte le date inizio-fine del mese. L’utente potrà modificarle ampliando il range

**Risorsa**: filtra per risorsa; nel caso di spese cumulative (sostenute da soggetto A per i soggetti B e C), il filtro verrà applicato sempre sulla risorsa che ha sostenuto la spesa 	effettivamente (in questo caso soggetto A). 
	Questo approccio è adottato per facilitare il calcolo dei totali da rimborsare che 	saranno riconosciuti al soggetto A ma allo stesso tempo permettere il controllo	correttamente del plafond per ogni risorsa (B e C). 


**Tipo di Spesa**: filtro in funzione del filtro spesa

**Stato Spese**: filtro per lo stato delle righe spese

**Superiore al plafond**: mostra solo le spese che superano il plafond

**Attività**: mostra le spese provenienti dalle dichiarazioni attività

**Interventi**: mostra le spese provenienti dagli interventi
Tipo di intervento / Dal numero al numero / dalla data alla data: 
	filtri per la ricerca delle spese di specifici interventi
Tipo attività / Dal numero al numero / dalla data alla data: 
	filtri per la ricerca delle spese di specifiche dichiarazioni attività

### Griglia risultati
Nella griglia verranno mostrate tutte le spese inserite negli interventi e nelle attivià, che rispettano i criteri selezionati nei filtri. 

**Risorsa**: risorsa a cui si riferisce la spesa

**Data spesa**: data in cui la spesa è stata sostenuta

**Tipo spesa**: tipologia della spesa sostenuta

**Importo**: importo della spesa sostenuta

**Plafond**: importo massimo giornaliero definito in anagrafica risorsa per tipologia di spesa. Se 	plafond = 0 significa che non ci sono limiti di plafond.

**Quota Plafond già usata**: nel caso siano già presenti altre spese già validate in altre Note Spesa per la risorsa/giorno/tipologia di spesa, la quota di plafond va considerata parzialmente erosa (es. 2 interventi nello stesso giorno della stessa risorsa dello stesso Tipo Spesa)

**Eccedenza**: quota che supera il plafond. Ottenuta con il seguente calcolo: 
	Eccedenza = Plafond – Importo spesa – quota Plafond già usata
	Vengono considerati solo valori negativi, che quindi superano il plafond. 

**Stato spesa**:indica se la spesa è stata autorizzata/non autorizzata/autorizzata parzialmente/Autorizzata forzatamente

**Documento**: indica il documento di riferimento da cui proviene la spesa – apribile con doppio click

**Allegati**: indica se sono presenti allegati per la spesa, visualizzabili nella tab “Allegati” 

**Modificato manualmente**: nel caso di cambio stato forzato rispetto a quanto proposto, o modifiche dell’importo di eccedenza, il flag si abilita in automatico

**Tipo Pagamento**: tipologia di pagamento utilizzata per la spesa

**Rimborsabile**: indica se la spesa dovrà essere rimborsata nel cedolino paga. Ad es. se la risorsa 	dispone di carta di credito aziendale, questa voce sarà disabilitata

**Cumulativa**: indica se la spesa è una quota di una spesa cumulativa (quindi la risorsa potrebbe 	essere diversa rispetto a quella a cui andrà il rimborso)

**Note**: note inserite per la spesa in questione. 

#### Stati riga spesa
In fase di ricerca spese, lo stato verrà già impostato in funzione delle regole stabilite.

Stati gestiti: 
-	**Inserito**: spesa inserita non ancora processata.
-	**Autorizzata**: stato attribuito se la spesa è configurata in anagrafica risorsa e non supera il plafond. 
-	**Non Autorizzata**: stato attribuito se la spesa NON è configurata in anagrafica risorsa oppure se la spesa eccede per intero il plafond. Il campo Eccedenza avrà il valore uguale alla spesa.
-	**Parzialmente Autorizzata**: stato attribuito se la spesa è configurata in anagrafica risorsa ed eccede solo parzialmente il plafond. Il campo Eccedenza sarà modificabile.
-	**Autorizzata Forzatamente**: nel caso la spesa superi il plafond oppure non sia prevista in anagrafica risorsa, ma si decide l’approvazione forzata. Il campo Eccedenza sarà forzato a 0.


Nel caso di Spesa Parzialmente autorizzata, il campo “Eccedenza” sarà modificabile. 
Questo per permettere di variare la redistribuzione del plafond da utilizzare (ad es. nel caso di più spese dello stesso tipo / stessa risorsa / stesso giorno oppure per aumentare per il plafond per il caso specifico)


### Parametri (parte inferiore)

per la generazione di una nuova Note Spese

**Tipo Nota spese**: tipologia di Nota Spese da utilizzare nella generazione nuovi documenti

**Data**: data Nota Spese 

**Periodo competenza**: indica in quale cedolino paga verranno incluse le spese 

**Descrizione**: eventuale descrizione aggiuntiva


### Totali

**Totale Spese**: totale delle spese visualizzate

**Totale Eccedenze**: totale delle eccedenze delle spese visualizzate

### Allegati

Nella procedura è presente una tab “Documenti allegati” che mostra l’elenco degli allegati e la relativa anteprima
Selezionando le spese con allegati, verrà mostrato l’elenco allegati. 
Selezionando un documento dell’elenco, nel riquadro sottostante verrà mostrata l’anteprima della spesa. 
E' possibile aggiungere allegati direttamente dalla procedura, che verranno salvati direttamente nei documenti interessati. 

### Funzionalità in ribbon bar
- **Ricerca** funziona come “Ricalcolo” di tutte le voci. Se ci sono voci con il flag “modificate manualmente” verrà richiesto se mantenere le modifiche. 
- **Cambia stato** è possibile attribuire massivamente uno stato specifico alle spese selezionate. 
- **Conferma Verifica** viene generata e salvata la nota spese per ogni risorsa con i parametri indicati nella videata.

Al salvataggio verranno rifatte le verifiche affinché i dati siano coerenti con le regole – stato delle singole spese.

Le righe con stato “Approvazione Forzata” saranno ignorate da questo controllo.

Tutte le altre righe saranno raggruppate per: 
	- Risorsa / data spesa / Tipo spesa

E verrà fatta la seguente verifica :
	- se (Plafond + somma importi Eccedenza – somma importi spese) maggiore uguale a 0 --> OK 

Altrimenti verrà dato messaggio di blocco:

"Attenzione! Ci sono righe modificate manualmente che non rispettano le condizioni stabilite. Procedere alla correzione prima di confermare oppure effettuare una nuova ricerca e validazione. "

Nel caso di righe di dettaglio spese cumulative, anche se nel dettaglio ci sono diverse risorse, tutte le righe verranno inserite nella Nota spese inerente alla risorsa che ha effettivamente sostenuto la spesa. Questo al fine di garantire un corretto rimborso nel cedolino paga. L'indicazione invece delle singole risorse, sarà necessaria per il controllo dei specifici plafond.  

Le spese che sono state inserite nella Nota Spese risulteranno quindi “Verificate” con una data-utente di verifica.

Nel caso di tentativo di modifica spese nei documenti (Interventi ed Attività), si verrà bloccati da messaggio: 

	“Spesa verificata! Impossibile modificare”
	
Per sbloccare la spesa e procedere alla modifica, è necessario eliminarla dalla Nota spese, oppure effettuare un rollback della procedura di generazione Nota Spese: 

### Rollback
Nella tab di rollback è possibile annullare la procedura appena effettuata. Non verranno cancellati gli allegati aggiunti, che resteranno salvati nei specifici documenti. 

Il rollback annulla soltanto la nota spese generata. 
