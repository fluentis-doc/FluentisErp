---
title: Scdenziario Clienti / Fornitori
sidebar_position: 1
---

Dalla presente form è possibile definire tutti i parametri preliminari e lanciare la stampa dello scadenziario clienti / fornitori.

La form è uguale a quella presente per il lancio di altre stampe basate sull'elaborazione delle partite aperte, tuttavia alcuni campi potrebbero non essere utilizzati o pertinenti alla specifica stampa in questione.

Nella parte alta della form sono presenti diversi filtri sui dati di origine:

**![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)**

**Conto:** filtro principale sui sottoconti clienti / fornitori. Se non viene inserito alcun dato lo scadenziario sarà elaborato su tutti i iconti dei clienti e dei fornitori. E' possibile inserire solo il conto mastro (senza sottoconto) per ottenere soltanto i clienti (o solo i clienti Italia ad esempio) o solo i fornitori.

**Da / A Data scadenza**: filtro sulla data di scadenza memorizzata all'interno della partita (elaborata in fase di apertura dalle condizioni di pagamento salvo modifiche manualmente apportate).

**Stato Partita**: il filtro è proposto di default sullo stato Aperte (che comprende anche le Scadute e Parzialmente Aperte), può essere modificato (portandolo sulle partite chiuse o scadute o parzialmente aperte ecc... al fine di estrare soltanto una singola tipologia) oppure lasciato vuoto per proporre tutte le partite.

**Posizione Partita**: la combo box del filtro è collegata alla tabella Posizione Partite (utilizzata per attribuire alle partite delle categorie liberamente codificabili).

**Pag. **: filtro sul tipo pagamento memorizzato all'interno della partita (elaborata in fase di apertura dalle condizioni di pagamento salvo modifiche manualmente apportate).

**Cod. Doc. **: filtro sul codice del tipo documento associato alla partita in fase di apertura (es. Fattura, nota di accredito, ricevuta fiscale ecc...).

**Divisa**: filtro sull divisa nella quale sono denominate le partite (nella stampa saranno esposti anche i controvalori in Euro).

**Agente**: filtro sull'agente collegato alla partita (solo lato cliente).

**Banca**: filtro sulla banca di canalizzazione collegata alla partita in fase di apertura (campo Sottoconto di pagamento all'interno della partita).

**Progetto**: (ex commessa): filtro sul proetto (commessa) collegato alla partita.

**Da / A Anno partita; Da / A Nr. Partita**: filtro sull'anno e numero della partita (anche questi, campi presenti all'interno delle partite).

**Dipartimento**: filtro sulla divisione (operativo se presenti più divisioni nella base dati).

Parametri di visualizzazione

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Partite aperte al**: questo campo, proposto di default all'apertura della maschera pari alla data odierna, può essere modificato per ottenere la situazione delle partite aperte (oppure delle partite con uno degli altri stati selezionabili nel campo Stato Partite) cos'ì come si presentavano ad una certa data.

Esempio: se una fattura passiva datata 01 giugno aveva aperto una partita con scadenza 01 luglio ed il giorno 28 giugno è stato registrato il pagamento di quella partita, se elaboriamo lo scadenziario fornitore con data Partite aperte al dopo il 28 (esempio chiediamo lo scadenziario al 30 giugno) la partita non sarà visibile inquanto chiusa, se chiediamo lo scadenziario con data 20 luglio, ad esempio, la partita risulterà visibile inquanto ancora aperta a tale data. 

**Partite e pagamenti alle date**: con il flag attivo il precedente campo *Partite aperte al* avrà effetto con riferimento sia alla data di apertura delle partite sia alla data di pagamento; con il flag disattivato la data di cui sopra avrà effetto solamente con riferimento alla data d apertura delle partite e verranno considerati tutti i pagamenti.

**Documenti e pagamenti alle date**: con il flag attivo (alternativo al precedente flag) il campo *Partite aperte al* avrà effetto con riferimento sia alla data Documento (esempio data fattura) associata alle partite aperte, sia alla data di pagamento.

**Sintetica**: il flag, se attivo, nasconde dalla stampa le ulteriori colonne relative ai dettagli del pagamento, se disattivato permette di mostrare tutti i dettagli.

**Con effetti a scadere**: poichè a seguito della contabilizzazione dell'emissione degli effetti attvi (cambiali, ricevute bancarie ecc...) avviene uno storno del credito verso il cliente ed una contestuale chiusura della partita aperta, attivando questo flag lo scadenziario viene "rettificato" per tener conto anche degli effetti a scadere.

**Conversione Valuta**: selezionado una divisa dalla combo box le partite saranno convertite nella divisa selezionata al cambio di riferimento del giorno (visualizzato nella colonna cambio presente nella stampa).

POSSIBILI CRITERI DI RAGGRUPPAMENTO ATTIVABILI

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

Nota: Ragione sociale = raggruppamento in base all'anagrafica del cliente o fornitore.

Banca = raggruppamento in base alla banca di canalizzazione (vedi sopra)

Scadenza = il raggruppamento avverrà per scadenza rappresentando in ordine cronologico tutte le partite aperte (in base ovviamente ai criteri del filtro impostati sopra)

AREA **Giorni**: utilizzato solo per la stampa Report di Aging ed irrilevante per la presente stampa.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image04.png)


### Possibilità di invio anteprima di stampa per email

E' stata estesa la possibilità di inviare email predefinite (come già avveniva per le anteprima di stampa riguardanti i documenti, ad esempio DDT e Fatture tramite transformation), anche per stampe che prevedono una lista di dati, come un estratto conto o uno scadenziario.

La configurazione che illustriamo di seguito è già stata eseguita standard per la presente stampa  le altre del modulo Partite aperte.

Dato che l’obiettivo dei report citati è quella di essere inviati alla controparte e questa viene identificata dal sottoconto del cliente/fornitore, l’oggetto di riferimento all’interno del quale creare le transformation necessarie è chiaramente il FSLedgerAccount: saranno necessarie due transformation, che di default si dovranno chiamare “ReportEmailTemplate” per gestire l’email e “ReportAttachFileName” per l’attribuzione di un nome specifico al file allegato all’email. Vedremo nel punto successivo che si possono comunque creare transformation anche di nome differente, da chiamare specificandone il codice. 

ReportEmailTemplate: L’utente che esegue la stampa deve avere l’indirizzo email memorizzato in Arm, nelle sue impostazioni utente.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image05.png)

ReportAttachFileName:

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image06.png)

<details>
<summary>
È stato inserito uno scripting <code>AfterPrint</code> del <code>MainReport</code> di questo tipo (clic per espandere):
</summary>

```csharp
private void MainReport_AfterPrint(object sender, System.EventArgs e)
{
    Int32 filterAccountId = Convert.ToInt32(GetReport().Parameters["FilterAccountId"].Value);

    if (filterAccountId > 0)
    {
        GetReport().SetExportInformation(new ReportExportInformation()
        {
            TransformationBusinessObjectName = "Fluentis.FluentisErp.Core.FSLedgerAccount",
            TransformationBusinessObjectId = filterAccountId
            // AttachmentFileNameTransformation = "ReportAttachFileName",
            // MailTransformation = "ReportEmailTemplate"
        });
    }
}
```

</details>


La parte che gestisce l’operazione si chiama ‘SetExportInformation’ che prevede i seguenti parametri:

TransformationBusinessObjectName: obbligatorio, è l’oggetto dal quale leggere le informazioni

TransformationBusinessObjectId: obbligatorio, è l’id specifico dell’oggetto. 

Nel caso del codice evidenziato sopra viene utilizzato il valore del parametro filterAccountId, che Fluentis ora passa (ai report basati sugli oggetti FSMaturityOnDate e FSOffsetAccountingStatement) quando nella form di stampa si imposta uno specifico sottoconto come filtro. Può comunque essere valorizzato con una qualsiasi logica alternativa non standard, anche per report che non ricevono già questo parametro filterAccountId.

AttachmentFileNameTransformation: opzionale, è il nome della transformation che gestirà il nome file (come detto sopra, di default si usa “ReportAttachFileName”)

MailTransformation: opzionale, è il nome della transformation che gestirà l’email (come detto sopra, di default si usa “ReportEmailTemplate”)


---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WhWmjPGfF0Y" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>





