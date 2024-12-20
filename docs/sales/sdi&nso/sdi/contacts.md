---
title: Impostazione anagrafiche contatti
sidebar_position: 3
---

Nelle anagrafiche dei contatti clienti sarà necessario impostare la gestione della fatturazione elettronica al 
fine di censire correttamente in Fluentis il Codice destinatario o l’indirizzo PEC dei clienti destinatari del file 
fattura B2B oppure, in caso di censimento di una Pubblica Amministrazione, il codice Ufficio relativo. 

## Fatturazione B2B

Per configurare i contatti, è necessario accedere a *Home > Anagrafiche contatti*, ricercare e richiamare 
l’anagrafica contatto per il quale si intende impostare la gestione della fatturazione elettronica e, nel 
pannello *Dati contabili > Informazioni fiscali*, impostare il check **Fatturazione elettronica** e i campi ad esso 
correlati:     
- **Ragione sociale**: questo campo deve rimanere vuoto
- **Descrizione**: questo campo deve rimanere vuoto
- **Fatturazione elettronica firmata**: questo check si riferisce alla possibilità di gestire fatture 
elettroniche firmate PER IL CONTATTO SELEZIONATO. Viene riportato il valore dell’impostazione 
fatta a livello di Società emittente nella sezione Configurazione Fatturazione Elettronica per Società
e può essere variato rispetto all’impostazione generale inserita, creando l’eccezione per il soggetto 
in gestione. Se impostato il check, al momento dell’emissione della fattura elettronica sarà possibile 
esportare il file XML, firmarlo con appositi supporti esterni e importarlo formato in Fluentis, 
proseguendo poi con le fasi di emissione. Tale facoltà è discrezionale per i documenti fattura emessi 
verso clienti residenti sul terriorio Italiano mentre è OBBLIGATORIA per i documenti emessi nei 
confronti di soggetti non residenti, non stabiliti, non identificati in Italia e per i quali si intende inviare 
i documenti tramite il SdI.
- **Fatturazione elettronica con PDF allegato**: questo check si riferisce alla possibilità di inviare i file di 
fatture elettroniche con allegato il PSF della fattura. Viene riportato il valore dell’impostazione fatta 
a livello di Società emittente nella sezione Configurazione Fatturazione Elettronica per Società e può 
essere variato rispetto all’impostazione generale inserita, creando l’eccezione per il soggetto in 
gestione. Se impostato il check, al momento dell’emissione della fattura elettronica verrà generato il 
file XML al quale verrà allegato il file PDF realtivo. 
- **Trasformazione ARM per creazione PDF fattura**: in questo campo può essere indicato il riferimento 
della trasformazione ARM relativa alla creazione del file PDF di fattura, ad esempio lo stesso processo 
che potrebbe essere invocato per l’invio via mail della fattura al cliente. Se non indicato e se 
impostato il check “Fatturazione elettronica con PDF allegato”, per la creazione del PDF viene utilizzata la trasformazione indicata nella sezione Configurazione Fatturazione Elettronica per Società. 
- **Tipo codice**: il campo identifica il canale da utilizzare per l’invio dei documenti elettronici; la 
compilazione di questo campo richiede anche la definizione corretta dei campi CODICE 
DESTINATARIO e EMAIL, al fine di creare il file fattura con l’indirizzamento corretto. Sulla base dela 
scelta di tale campo, la grigia della sezione FATTURAZIONE ELETTRONICA dovrà essere compilata 
secondo alcune regole specifiche. I valori che può assumere sono:
> - **Canale SDI**: la scelta di questo valore indica che si intende utilizzare come modalità di invio il 
codice destinatario conosciuto oppure un indirizzo mail oppure demandare al SdI la 
determinazione del canale registrato dal cliente. Nello specifico, l’attribuzione di questo 
valore in anagrafica richiede la compilazione del campo CODICE DESTINATARIO e EMAIL 
secondo le regole di seguito indicate:

| Modalità di invio | Codice destinatario | Email | Descrizione destinatario | Data inizio | Data fine |
| :-- | :-- | :-- | :-- | :-- | :--|
| Codice destinatario del cliente rilasciato dall’AdE a seguito del suo accreditamento | Codice destinatario del cliente | Vuoto | Ragione sociale del cliente | Data inizio rapporto | Data fine validità del canale utilizzato |
| Mail PEC | 0000000 (7 zeri) | Email PEC del cliente | Ragione sociale del cliente | Data inizio rapporto | Data fine validità del canale utilizzato |
| Non si conosce nè codice destinatario nè mail PEC OPPURE Cliente privato OPPURE Cliente in regime di vantaggio o Forfettario | 0000000 (7 zeri) | Vuoto | Ragione sociale del cliente | Data inizio rapporto | Data fine validità del canale utilizzato |
| Cliente non residente, non stabilito, non identificato in Italia | XXXXXXX (7 "X") | Vuoto | Ragione sociale del cliente | Data inizio rapporto | Data fine validità del canale utilizzato |
      

> - **Pec Destinatario**: la scelta di questo valore indica che si intende utilizzare la mail PEC come 
canale di invio e tale impostazione richiede la compilazione CODICE DESTINATARIO e EMAIL 
secondo le regole di seguito indicate:

| Modalità di invio | Codice destinatario | Email | Descrizione destinatario | Data inizio | Data fine |
| :-- | :-- | :-- | :-- | :-- | :--|
| Mail PEC | 0000000 (7 zeri) | Email PEC del cliente | Ragione sociale del cliente | Data inizio rapporto | Data fine validità del canale utilizzato |
      

> - **Soggetto non residente/stabilito/identificato in Italia**: la scelta di questo valore identifica 
come canale possibile il SdI al quale i documenti fattura devono essere inviati riportando 
come codice destinatario la specifica codifica “XXXXXXX” e quindi i campi CODICE 
DESTINATARIO ed EMAIL devono essere compilati come segue:

| Modalità di invio | Codice destinatario | Email | Descrizione destinatario | Data inizio | Data fine |
| :-- | :-- | :-- | :-- | :-- | :--|
| Cliente non residente, non stabilito, non identificato in Italia | XXXXXXX (7 "X") | Vuoto | Ragione sociale del cliente | Data inizio rapporto | Data fine validità del canale utilizzato | 
        

## Fatturazione pubblica amministrazione

In caso di censimento nell’anagrafica di una Pubblica Amministrazione, è necessario accedere a *Home > 
Anagrafiche contatti*, ricercare e richiamare l’anagrafica contatto per il quale si intende impostare la 
gestione della fatturazione elettronica e, nel pannello *Dati contabili > Informazioni fiscali*, impostare il flag 
**Pubblica Amministrazione**. Contestualmente allla selezione del check, viene richiesta la compilazione della 
Griglia **Pubblica Amministrazione**.
I campi della griglia devono essere così compilati:         
- **Codice Ufficio**: Codice dell'ufficio pubblico destinatario della fattura
- **Nome ufficio**: Descrizione del campo codice ufficio da compilare con il nome dell'ufficio pubblico
- **Ragione sociale**: in questo campo è possibile collegare un'anagrafica già codificata in Fluentis e riferita, ad 
esempio, all'uffico pubblico che dipende dall'anagrafica principale che stiamo utilizzando (esempio: ufficio 
lavori pubblici del comune di ..., oppure Azienda sanitaria ....... che dipende dall'anagrafica principale "Comune di ....") Tale anagrafica collegata dovrà essere impostata come destinazione per l'anagrafica 
principale nel tab “consegna”, in questo modo la destinazione (esempio ufficio lavori pubblici ....) sarà 
riportata nel tracciato del file .xml completa di codice ufficio e degli altri dati quale indirizzo ecc...
Per la corretta gestione di più codici ufficio (e quindi più soggetti) riferiti alla stessa anagrafica principale si 
raccomanda quindi di gestire e compilare anche questo campo (comunque non obbligatorio e non 
necessario in caso di singolo codice ufficio direttamente legato all'anagrafica in questione).
- **Data inizio servizio**: definisce la data di inserimento della riga o comunque la data dalla quale è attivo il 
rapporto di fornitura con la pubblica amministrazione in questione.
- **Data fine servizio**: definisce la data di fine del rapporto di fornitura con la pubblica amministrazione e 
rende non più utilizzabile questa posizione per la generazione del file telematico per la fattura elettronica.
