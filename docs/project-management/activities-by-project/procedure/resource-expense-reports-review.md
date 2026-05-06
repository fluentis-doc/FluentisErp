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

**Quota Plafond già usata**: nel caso siano già presenti altre spese già validate in altre Note Spesa per la risorsa/giorno/tipologia di spesa, la quota di plafond va considerata parzialmente erosa (es. 2 interventi nello stesso giorno della stessa 	risorsa dello stesso Tipo Spesa)

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


### Parametri (parte inferiore)

per la generazione di una nuova Note Spese

**Tipo Nota spese**: tipologia di Nota Spese da utilizzare nella generazione nuovi documenti

**Data**: data Nota Spese 

**Periodo competenza**: indica in quale cedolino paga verranno incluse le spese 

**Descrizione**: eventuale descrizione aggiuntiva


### Totali

**Totale Spese**: totale delle spese visualizzate

**Totale Eccedenze**: totale delle eccedenze delle spese visualizzate

