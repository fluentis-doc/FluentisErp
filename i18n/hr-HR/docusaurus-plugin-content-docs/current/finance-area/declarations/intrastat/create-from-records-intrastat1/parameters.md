---
title: Parametri
sidebar_position: 3
---

Unutar odjeljka 'Parametri' procedura prikazuje sve redove unesenih transakcija. Konkretno:

**Status i šifra PDV-a** se preuzimaju  iz registra nositelja;

moguća **Vrijednost u valuti** prema unesenom prilikom registracije (polje je prisutno samo za intra2);

**Iznos transakcija u eurima** u eurima uzima iznos u valuti firme;

**Broj dokumenta**, la **Datum zapisa** i **Šifra usluge** preuzeti su iz šifarnika klijenta.

Nakon što su podaci popunjeni, moguće je nastaviti s kreiranjem, operacija koja će unijeti detalje u odjeljke bis - ter - quater.

Il corretto inserimento, automatico, nella sezione adeguata del modello dipende dalla gestione, in fase di inserimento della scrittura contabile, del campo **Tipo IVA** nella griglia iva. Se impostato su *Generico* il movimento sarà inserito nella sezione Bis, se impostato su *Servizio*, sarà inserita nella sezione quater. 
Tale dato, a sua volta, andrà a valorizzare correttamente il campo ***BisTer*** (da intendersi come sezione dle modello) presente nella tab *Intrastat* della registrazione, che è poi il dato di fatto passato in fase di creazione modello.

la sezione Ter viene invece valorizzata, sempre attraverso il tab *Intrastat* della registrazione, quando registrando una nota di accredito, in corrispondenza della griglia iva della registrazione, viene attivato il flag ***Nota di variazione anni precedenti*** (che identifica in ogni caso una variazione non relativa al mese o trimestre di registrazione la quale richiede la compilazione della sezione ter). Accanto a tale flag è possibile inserire la data di riferimento della fattura che viene rettificata.






