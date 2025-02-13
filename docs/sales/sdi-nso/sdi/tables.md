---
title: Impostazione tabelle di gestione
sidebar_position: 4
---

Per la gestione della fatturazione elettronica è necessario un intervento di verifica e completamento di 
alcune tabelle di gestione, al fine di creare i file XML con la corretta codifica prevista dalle specifiche tecniche 
emanate dall’Agenzia delle Entrate. L’impostazione prevista richiede di codificare i valori normalmente 
utilizzati nelle gestioni con i valori previsti per la codifica del file.
A titolo di esempio: le tipologie di documenti previsti per il flusso di fatturazione elettronica dovranno essere 
censiti in Fluentis abbinando, ad ogni tipologia di documento, il corrispondente valore indicato dalle 
specifiche tecniche dell’Agenzia delle Entrate.

## Tabella Tipi documento 

Per il documento fattura, in questa tabella di Fluentis, in corrispondenza della colonna **Codice PA** è necessario indicare il tipo documento, in formato alfanumerico, di lunghezza 4 caratteri. I valori ammessi sono:       
TD01 Fattura      
TD02 Acconto/Anticipo su fattura        
TD03 Acconto/Anticipo su parcella       
TD04 Nota di Credito      
TD05 Nota di Debito      
TD06 Parcella       
TD20 Autofattura        
         
I valori sui quali è necessario eseguire un raccordo o una verifica dell’effettiva compilazione sono:

| Tabella | Valori obbligatori | 
| :-- | :-- |
| Società (Tabelle > Impostazioni Generali > Società) | Descrizione, Partita Iva, Codice fiscale obbligatorio se non impostata la PIVA, Codice Nazione, Regime fiscale, Telefono/FAX, Domicilio fiscale e CAP, comune, provincia, Soci/Stato liquidazione, Ufficio Rea, Numero iscrizione Rea, Capitale sociale (riportando anche i decimali separati dal “.”) | 
| Aliquote IVA (Tabelle > Amministrazione > Aliquote/Modalità IVA)  | Codice P.A: è il codice che identifica univocamente l’aliquota IVA nei file XML; è possibile reperire il codice specifico per ogni aliquota dalle Specifiche Tecniche rilasciate dall’Agenzia delle Entrate per la fatturazione elettronica | 
| Tabella Tipi Documento (Tabelle > Amministrazione > Tipi Documento) | Codice P.A: è il codice che identifica univocamente il Tipo documento a cui il file XML si riferisce (fattura, nota di accredito...); è possibile reperire il codice specifico per ogni aliquota dalle Specifiche Tecniche rilasciate dall’Agenzia delle Entrate per la fatturazione elettronica | 
| Tabella Tipi Pagamento (Tabelle > Impostazioni generali > Tipi pagamento) | Codice P.A: è il codice che identifica univocamente il Tipo pagamento nel file XML; è possibile reperire il codice specifico per ogni aliquota dalle Specifiche Tecniche rilasciate dall’Agenzia delle Entrate per la fatturazione elettronica | 
| Tipi fatture di vendita (Tabelle > Vendite > Tipi Fatture) | Escluse da Fat.El: il check deve essere impostato SOLO per i documenti che si intende escludere dal flusso di fatturazione elettronica. A fronte di tale impostazione quindi i documenti non potranno essere elaborati per il flusso di fatturazione elettronica | 
| Tipi ritenuta (Tabelle > Amministrazione > Tipi Ritenute) | Tipi ritenuta fatturazione elettronica: è il codice che identifica univocamente il Tipo ritenuta nel file XML; è possibile reperire il codice specifico per ogni aliquota dalle Specifiche Tecniche rilasciate dall’Agenzia delle Entrate per la fatturazione elettronica | 
| Tabella Divise (Tabelle > Impostazioni generali > Divise) | CodIso: in corrispondenza della valuta impostata per l’Euro, inserire il codice iso EUR | 
| Tabella Tipo Documenti (Tabelle > Impostazioni generali >Tipo Documenti) | Tipo documento FattPubb: identifica il tipo documento relativo alla fatturazione elettronica. Deve essere inserito con il valore CODICE: *FattPubb* e DESCRIZIONE: *Fatturazione Elettronica* e lasciando inalterati gli altri valori proposti | 

## Anagrafica articoli

Per la corretta gestione della casistica di articoli che richiedono l’indicazione in fattura di specifici codici 
normativi o ministeriali, quali ad esempio il codice AIC (codice ministeriale prodotto) per alcuni farmaci o il 
codice DM0-DM1, è necessario censire nella tabella **Tipi barcode** un barcode specifico identificato conil 
flag **Export Pubblica Amministrazione** e riportato nell’anagrafica dell’articolo nel pannello **Codici BarCode**, campo **Tipo barcode**.

## Split payment

Per la corretta gestione della casistica Split Payment sui documenti rivolti alla Pubblica Amminstrazione, le 
Specifiche tecniche relative alla compilazione del file XML richiedono l’individuazione di una specifica 
tipologia di esigibilità IVA, in formato alfanumerico di lunghezza 1 carattere. I valori ammessi sono i seguenti:          
*I* IVA ad esigibilità immediata       
*D* IVA ad esigibilità differita      
*S* scissione dei pagamenti       

In Fluentis pertanto è necessario impostare sulle causali contabili abbinate al tipo documento di vendita
verso la PA, il tipo movimento 29 – Iva vendite con split Payment.

