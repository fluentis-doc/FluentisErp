---
title: Crea pagamenti fornitore
sidebar_position: 2
---
La form si trova in **Tesoreria > Pagamenti > Crea pagamenti fornitore** e consente la creazione di una nuova distinta di pagamento. La stessa maschera viene utilizzata anche per l'apertura in modifica o visualizzazione di una distinta già salvata.

Dalla form di ricerca è possibile creare un nuovo documento mediante il pulsante **> Nuovo pagamento** oppure aprirne uno esistente per visualizzarlo e/o modificarlo.

## Come creare una distinta di pagamento

Clicca per i passaggi fondamentali:

1. Seleziona il **Tipo di pagamento** della distinta dal primo campo a discesa.
2. I campi seguenti vengono compilati automaticamente:
   - **Anno**: propone l'anno attuale del sistema.
   - **Numero distinta**: numerazione progressiva della distinta.
   - **Data emissione**: propone la data odierna.
3. Compila i campi obbligatori della testata:
   - **Banca**: inserire il codice di sottoconto dell'anagrafica banca sulla quale emettere la distinta.
   - **Conto corrente**: compilato automaticamente sulla base dell'anagrafica banca collegata al sottoconto.
   - **Note iniziali**: campo libero per eventuali annotazioni (non utilizzato nello standard).
   - **Note finali**: utilizzato nella contabilizzazione per valorizzare la descrizione del movimento contabile della banca.
4. Imposta eventuali opzioni aggiuntive:
   - **Imponi questa data valuta beneficiario**: definisce la data valuta del beneficiario nel tracciato telematico.
5. Controlla i flag di stato della distinta:
   - **Stampato**: non gestito automaticamente dal programma.
   - **File emesso**: aggiornato automaticamente dopo la creazione del file telematico.
6. Seleziona le partite da pagare:
   - Premi il pulsante **> Crea un pagamento dalle partite** per selezionare le partite contabili da chiudere.
   - Attenzione all'uso del flag *visualizzazione partite percipienti*: la gestione del pagamento deve avvenire dal modulo percipienti.
   - Il flag *Imponi banca d'appoggio dall'anagrafica del fornitore* permette di utilizzare la banca predefinita nel fornitore.
7. Modifica, se necessario, i valori di pagamento in griglia.
   - È possibile inserire pagamenti parziali o aggiungere righe manuali.
   - Attenzione: l'aggiunta manuale può causare discrepanze nel saldo contabile se non gestita correttamente.
8. Controlla le **Note** in griglia: vengono compilate automaticamente con i riferimenti delle partite pagate e saranno riportate in contabilità generale.

:::tip ATTENZIONE
Sulla testata della distinta è presente un flag **Autorizzato** per consentire la creazione del tracciato XML ed eseguire il pagamento. Il flag memorizza l'utente e la data di autorizzazione. Può essere attivato di default accedendo alla form **Parametri pagamenti fornitori** e attivando il flag *Autorizzato di default*.
:::

9. **Premi il pulsante Creazione file SEPA** per generare automaticamente un tracciato .xml della lista dei pagamenti ed archiviarlo automaticamente nel documentale. Puoi scaricare il file dal documentale per la successiva impostazione sui sistemi corporate banking, anzichè dover reinserire i pagamenti manualmente.

10. Premi il bottone **Documenti**, nel gruppo Document manager per accedere al documentale con l'allegato .xml Da dentro la form del documentale premi poi il bottone **Salva allegato** per scaricare la copia sul PC locale.

#### Pulsanti specifici

> **Nuovo pagamento**: Inserisce manualmente una riga di pagamento fornitore.

> **Salva**: Salva la testata della distinta dopo aver inserito il tipo di pagamento e il sottoconto di banca.

> **Cancella pagamenti selezionati**: Cancella i pagamenti fornitori creati manualmente o da creazione pagamento da partite.

> **Crea un pagamento dalle partite**: Attivabile dopo il salvataggio della testata, acquisisce i dati dall'archivio partite.

> **Documenti**: Pulsante per il collegamento alla gestione documentale.

:::note[Info: Controllo SEPA sui bonifici della ragione sociale del Creditore]
Il SEPA ha introdotto in alcuni casi un controllo di corrispondenza tra l'intestatario del conto corrente e la ragione sociale del Creditore destinatario del bonifico. Per superare questo controllo in casi di discrepanza el dato legato alla codifica dell'anagrafica è possibile utilizzare un [**Indirizzo alternativo**](/docs/configurations/tables/general-settings/address-types) con apposito flag *Utilizzato in SEPA*
:::

:::note[Campo Specifico - Livello di servizio]
permette di selezionare da una lista fissa pre-caricata una tipologia di servizio per i bonifici quali a esempio *Istantaneo* , *Pago PA*, *Urgente* eccetera da riportare nel tracciato telematico xml.

Il valore di default è impostato tramite i [**Parametri Pagamenti fornitori**](/docs/configurations/parameters/treasury/vendor-payments-parameters).
:::

---

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>






