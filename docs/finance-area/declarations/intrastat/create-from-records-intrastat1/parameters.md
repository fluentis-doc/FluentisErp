---
title: Parametri
sidebar_position: 3
---

All'interno della sezione 'Parametri' la procedura riporta tutte le righe dei movimenti inseriti. In particolare:

**Stato e codice IVA** sono presi dall'anagrafica del soggetto intestatario;

l'eventuale **Valore in divisa** secondo quanto inserito nella registrazione (il campo è presente solo per l'intra2);

**Ammontare operazioni euro** prende l'importo nella divisa della società;

**Numero del documento**, la **Data di registrazione** e il **Codice del servizio** ripreso dall'anagrafica intestataria della registrazione.

Una volta completati i dati è possibile procedere alla creazione, operazione che andrà a riportare i dettagli nelle sezioni bis - ter - quater.

Il corretto inserimento, automatico, nella sezione adeguata del modello dipende dalla gestione, in fase di inserimento della scrittura contabile, del campo **Tipo IVA** nella griglia iva. Se impostato su *Generico* il movimento sarà inserito nella sezione Bis, se impostato su *Servizio*, sarà inserita nella sezione quater. 
Tale dato, a sua volta, andrà a valorizzare correttamente il campo ***BisTer*** (da intendersi come sezione dle modello) presente nella tab *Intrastat* della registrazione, che è poi il dato di fatto passato in fase di creazione modello.

la sezione Ter viene invece valorizzata, sempre attraverso il tab *Intrastat* della registrazione, quando registrando una nota di accredito, in corrispondenza della griglia iva della registrazione, viene attivato il flag ***Nota di variazione anni precedenti*** (che identifica in ogni caso una variazione non relativa al mese o trimestre di registrazione la quale richiede la compilazione della sezione ter). Accanto a tale flag è possibile inserire la data di riferimento della fattura che viene rettificata.






