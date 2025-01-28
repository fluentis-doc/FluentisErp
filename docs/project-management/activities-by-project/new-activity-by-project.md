---
title: Nuova Dichiarazione Attività per Progetto
sidebar_position: 1
---

I dati sono:

**Tipo attività**: contiene il [Tipo attività](/docs/configurations/tables/project-management/activity-type/);

**Data attività/Numero attività**: contiene la data e il numero dell’attività; verrà proposta in automatico la più vecchia data mancante in base ai mesi da verificare impostati nei parametri progetti. Se la data è una giornata configurata nel Caledario giorni non lavorativi, questa non verrà proposta.

**Risorsa**: contiene la risorsa che svolge l’attività;

**Data/Tempo manuale**: contiene la data di inserimento e il flag, se attivo, abilita il campo **Totale tempo** in modo che non sia calcolato in automatico ma possa essere modificato manualmente dall'utente;

**Cliente**: contiene il cliente per il quale viene svolta l’attività;

**Conto statistico**: è possibile inserire un conto da utilizzare per le statistiche;

**Progetto**: contiene il [Progetto](/docs/project-management/projects/search-projects-intro/) collegato;

Aprendo l'expander del Progetto, è possibile impostare un **Articolo**: questo codice articolo verrà utilizzato nel caso l'attività sia fatturabile, e quindi convertita in intervento. Se non viene indicato un codice articolo specifico, il servizio nell'intervento avrà codice articolo, UM e prezzo presi dal progetto collegato. 
Se invece viene indicato un articolo specifico: 
- se l'UM articolo e UM progetto collegato coincidono, e la UM nel progetto è di tipo "Tempo", nell'intervento avremo il codice articolo indicato in attività, con prezzo ed UM presi dal progetto. 
- se l'UM articolo e UM progetto collegato NON coincidono o la UM del progetto non è di tipo "Tempo", nell'intervento avremo il codice articolo indicato in attività, con prezzo ed UM attribuiti in base alle logiche standard dei documenti (come nel caso di inserimento di una nuova riga in un documento, vengono considerati listini, sconti, prezzo default in anagrafica articolo, etc) 

**Ora di inizio/Ora fine**: contiene l’orario di inizio e di fine dell’attività; viene proposta in base al turno della risorsa, e se già presenti altre dichiarazioni, verrà proposta solo la fascia oraria mancante per la giornata. 
<u>Non sono ammesse date disallineate</u> tra i vari campi Inizio-Fine, Inizio-Fine pausa e Data attività, per cui alla modifica di una qualsiasi data di queste, gli altri campi si allineeranno in automatico. 
Modificando l' Ora di fine, se antecedente alla pausa, questa verrà cancellata in automatico

**Ora inizio pausa/Ora fine pausa**: contiene gli orari della pausa;

**Attività sovrapposta** : flag che si abilita in automatico se rileva la presenza di altre attività per la risorsa nella stessa giornata o fascia oraria.

**Minuti Sovrapposti** : è possibile indicare manualmente a cura dell'utente il tempo effettivo per cui le attività si sovrappongono.

**Attività in Smart Working** : flag che si abilita in automatico in base alle configurazioni inerenti allo Smartworking nell'anagrafica risorsa. Verrà utilizzato poi nell'elaborazione cedolini paga, per identificare le giornate in cui è stato svolto lo smart working. Nelle apposite dashboard sarà poi possibile verificare la presenza di giornate con dichiarazioni attività ibride per la stessa giornata. 

**Centro di costo di origine**: centro di costo proposto dall'anagrafica dipendente associato alla risorsa. 

**Centro di costo**: centro di costo proposto dalla categoria attività.

**Tickets**: ticket associato all’attività; se nella dichiarazione attività non è compilato il cliente ed il progetto, questi verranno compilati in automatico dal ticket associato.

**Stima tecnica**: se nel ticket è presente una stima tecnica che corrisponde al cliente ed alla risorsa, questa verrà proposta in automatico. Se nella dichiarazione attività non è compilato il cliente ed il progetto, questi verranno compilati in automatico dal ticket/stima tecnica associati. 

**Impianto**: anagrafica impianto dell'area EAM, associata all'attività. 

**Società / Divisione Intercompany** : indica la società e divisione di appartenenza se diverso dalla società di inserimento. 

**Intervento**: contiene l’eventuale [Intervento](/docs/project-management/service-activities/search-intervention/) collegato manualmente o generato in automatico al salvataggio attività o generato dalla procedura guidata; Nel tipo attività è possibile impostare il tipo intervento da utilizzare. 
![](/img/it-it/project-management/projects/declaration.png)

**Stato attività**: contiene lo stato tra Inserito, Verificato, Sospeso, Chiuso.

**Totale tempo**: contiene il conteggio in ore della dichiarazione attività, calcolato in base agli orari dichiarati. Se abilitato il flag "Tempo Manuale" il campo sarà modificabile dall'utente. 

**Percentuale Stima del lavoro** : è possibile indicare un valore da 0 a 100 perchè venga inserito nell'eventuale servizio dell'intervento generato dall'attività.

**Criteri di fatturazione**

**Categoria di attività**: proposta in automatico dal progetto se presente, o inserita dall'utente. Dalla categoria attività dipendono il centro di costo ed il flag "Attività Fatturabile"

**Attività intercompany** flag che identifica l'attività gestita come intercompany. 

**Attività Fatturata**: flag che indica se l'attività è collegata all'intervento, e di conseguenza fatturata. 

**Attività fatturabile**: flag che indica se l'attività può essere convertita in intervento, e di conseguenza fatturata. Questo flag viene impostato a seconda della categoria attività o dall'utente. 

**Forza l'attività fatturata**: flag indica se l'attività può essere considerata fatturata anche senza esserlo effettivamente, in modo che non si generi l'intervento collegato. 

**Attività a valore aggiunto**: flag che identifica le attività a valore aggiunto, a scopo statistico. Valorizzato in base al progetto, se non presente in base alla configurazione della categoria attività. Può essere modificato manualmente dall'utente. 

Successivamente sono presenti diverse tab.


**Tab Descrizione**
In questa tab è possibile descrivere l’attività nel campo **Descrizione attività**, che verrà utilizzata come Descrizione attività svolta negli interventi (se generati). E' presente anche una **Descrizione interna** che invece non verrà propagata in alcun altro documento. 
Se l'attività è collegata ad un intervento e si fanno modifiche ad orari e/o descrizione, verrà automaticamente aggiornato anche l'intervento. 

**Tab Oneri di viaggio**
Questa tab contiene eventuali oneri di viaggio sostenuti dalla risorsa. 
In fase di inserimento manuale della dichiarazione attività, le spese verranno proposte in automatico selezionando la risorsa, se configurate in anagrafica. 
Se invece la dichiarazione attività è stata generata in automatico dall'intervento, la tab Oneri di viaggio conterrà soltanto quanto dichiarato dalla risorsa come Spese sostenute nell'intervento. Se la tab Spese sostenute nell'intervento sarà completamente vuota, nell'attività verranno comunque proposte le spese configurate in anagrafica risorsa. 

Al salvataggio se le spese proposte non sono state completate con valori ed importi, verranno cancellate in automatico. 

È possibile indicare il **Tipo spese**, ed in base alla sua configurazione saranno abiliati alla modifica gli altri campi quali **Ore viaggio**, **Costo orario**, **KM**, **costo KM**, **Importo forfait**, **Imposta**, **IVA inclusa**, **Importo spesa**, **Data**, **Tipo pagamento**, ecc.

**Costo totale** è calcolato in automatico nel caso di "costo orario" o "costo KM", moltiplicati per i rispettivi "ore viaggio" e "KM". 

**Da rimborsare** se abilitato, nell'elaborazione del cedolino paga, l'importo verrà considerato come da rimborsare, altrimenti sarà escluso dal cedolino. 

**In fattura** indica se la spesa dev'essere inserita come spesa "Da fatturare" nell'intervento qualora venga generato. 

**Note** eventuali note inserite dall'utente.

**Tab Attività contatto**
In questa tab è possibile collegare la dichiarazione attività ad un contatto dell'area CRM, ad un'Opportunità area CRM ed ad una Campagna Marketing. 

**Tab Documenti allegati**
In questa tab è possibile visualizzare e aggiungere degli allegati, che verranno salvati nel modulo Documentale di Fluentis. Per aggiungere un file è sufficiente utilizzare il drag and drop, ossia selezionando il file dal percorso in cui si trova attualmente e rilasciandolo all’interno della tabella.

**Tab Extra Data** 
In questo tab è possibile inserire eventuali Extra Data collegati; per maggiori informazioni consultare la sezione [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata). 1



