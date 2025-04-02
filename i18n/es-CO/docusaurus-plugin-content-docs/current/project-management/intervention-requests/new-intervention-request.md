---
title: Nuova Richiesta di Intervento
sidebar_position: 2
---

In questa form è possibile inserire i dati della **Richiesta di intervento**:

**Tipo richiesta Intervento**: contiene la [tipologia della richiesta](/docs/configurations/tables/project-management/request-intervention-type/);

**Numero/Data**: contiene il numero e la data della richiesta;

**Cliente**: contiene il cliente a cui è destinata;

**Contatto**: contiene l’eventuale *Contatto* a cui è destinata la richiesta, il quale potrebbe ancora non essere cliente;

**Categoria di attività**: indica l’eventuale categoria di attività collegata alla richiesta;

**Anagrafica impianti**: è possibile collegare un impianto alla richiesta;

**Articolo**: è possibile collegare un articolo; se non indicato, in fase di selezione del progetto viene proposto l'articolo inserito nella riga di progetto. 

**Progetto**: contiene il [Progetto](/docs/project-management/projects/search-projects-intro/) collegato;

**Ticket**: contiene il ticket della richiesta di intervento, con la relativa severità;

**SLA**: contiene il livello di Service Level Agreement, necessario per lo studio delle prorità;

**Stato richiesta di intervento**: indica lo stato attuale della richiesta, tra Aperto, Pianificato, Rilasciato o Chiuso;

**Data conferma**: contiene la data in cui viene confermata la richiesta;

**Data chiusura**: contiene l’eventuale data di chiusura della richiesta.


In questa form poi sono presenti delle tab specifiche.

**Tab Risorse**

Questa tab contiene la risorsa per la quale viene effettuata la richiesta di intervento. Sono inoltre presenti alcune tab che indicano l’obbligatorietà o meno del Tecnico e della Data, ed un flag che indica se l’Attività sia fatturabile. Gli altri dati sono:

**Risorsa**: contiene la risorsa codificata in Gestione Progetti > Gestione Risorse;

**Dipendente**: contiene il conto Dipendente, solitamente coincidente con la risorsa;

**Da data richiesta**: contiene data e ora di inizio dell’attività;

**Ora inizio pausa**: contiene data e ora di inizio della pausa;

**Ora fine pausa**: contiene data e ora di fine della pausa;

**A data richiesta**: contiene data e ora di fine dell’attività;

**Tempo effettivo**: contiene il tempo di svolgimento, calcolato dai precedenti dati;

**Descrizione**: contiene una libera descrizione della richiesta.

È possibile collegare ulteriori risorse nella griglia **Risorse collegate**.

 
**Tab Soluzione**

In questa tab è possibile descrivere liberamente la richiesta di intervento negli spazi **Soluzione** e **Nota**. 

**Tab Stima**

In questa tab è presente la stima del Progetto collegato alla Richiesta di intervento. Se non dovesse esserci un collegamento, questi campi sono comunque liberamente modificabili:

**Unità di misura**: indica l’unità di misura da considerare per la quantificazione;

**Listino di vendita**: contiene un eventuale [Listino](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) da considerare;

**Quantità**: viene indicata la quantità di unità necessaria;

**Prezzo netto unitario**: viene indicato il prezzo netto unitario;

**Importo totale**: viene indicato l’importo totale.

In fase di selezione del progetto, vengono proposti i seguenti valori: 

- Listino di vendita
- Ticket
- Descrizione
- Categoria attività 
- Fatturabile
- Attività a valore aggiunto
- Articolo (se non già inserito)
- Unità di misura se non già inserita
- Prezzo netto unitario

Il prezzo netto unitario viene aggiornato con il valore presente nel progetto se l'articolo è già presente nella richiesta intervento e coincide con l'articolo nel progetto.
Oppure se l'articolo non è presente nella richiesta intervento e viene assegnato dal progetto, di conseguenza anche il prezzo sarà aggiornato con il valore presente nel progetto.

