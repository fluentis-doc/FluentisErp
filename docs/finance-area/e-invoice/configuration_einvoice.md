---
title: Altre configurazioni specifiche fatt. elett.
sidebar_position: 4
---
### Gestione della nota di accredito

A partire dalla versione 606 le note di accredito devono essere inserite in Fluentis sempre con il segno negativo, in particolare verrà inserito un valore negativo a partire dal campo Quantità.
Nel documento viene restituito un messaggio di avviso nel caso in cui il totale non sia negativo con proposta di inversione segni.

Per quanto riguarda la fatturazione elettronica, è richiesto ai fini dei controlli operati dallo SDI che il segno del documento sia positivo, il parser di generazione del file xml provvederà dunque alla nuova inversione del segno (quando il tipo documento è TD04).

:::note Nota
Ai fini della contabilizzazione, nel caso in cui all'interno della nota di credito siano presenti segni misti (righe positive e righe negative) è necessario abilitare la possibilità di gestirne la contabilizzazione variando un parametro interno al database (variare da 0 a 1, in passato veniva settato -1 prima del cambiamento di cui sopra). Fare riferimento alla documentazione tecnica ed eventualmente al servizio di supporto.
:::

### Codifica articolo per cliente  (Tag 2.2.1.3 CodiceArticolo)

Il tag codice articolo può essere ripetuto più volte, generando una doppia codifica, cambiando il codice nel tag 2.2.1.3.1 

```xml
    <CodiceTipo> . 
```
Il codice Tipo che viene proposto di default (nelle fatture di vendita) è quello riferito al codice articolo presente in Fluentis (dalle anagrafiche articoli dell'azienda in uso) che può essere riportato con due diversi 
    
```xml
    <CodiceTipo> 
```
**Di default la codifica avviene secondo questo schema**
    
```xml
    <CodiceArticolo> 
    <CodiceTipo>Codice Art. fornitore</CodiceTipo>    
    <CodiceValore>1504X0</CodiceValore>
    </CodiceArticolo> 
```         

Oppure il *CodiceTipo* può essere personalizzato valorizzando il campo **[Codice articolo fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)** presente in anagrafica cliente nel tab *informazioni fiscali*. 

:::note Nota
Prestare attenziaone, si tratta di una coppia di campi adiacenti relativi, rispettivamente, alla codifica della nostra società (fornitore) per la personalizzazione rispetto al default, ed al cliente per una doppia codifica da inserire nel tracciato della fattura
:::

Esempio:

```xml
    <CodiceArticolo>
    <CodiceTipo>MIOCODICE</CodiceTipo>
    <CodiceValore>104X0</CodiceValore>
    </CodiceArticolo>
```

Sono possibili altre tipologie di codifica specifiche quali ad esempio la codifica EAN o quella specifca per il settore dei dispositivi medici.

Esempio:

```xml
    <CodiceArticolo> 
    <CodiceTipo>EAN</CodiceTipo>
    <CodiceValore>XX345678</CodiceValore>
    </CodiceArticolo>
```

E' possibile appoggiare la codifica alla tabella **[Tipi Barcode](/docs/configurations/tables/general-settings/barcode-types)**

Esempio pratico d’uso per i ‘Dispositivi medici’: si codificano 3 tipi barcode (attivando anche il flag **Export Pubblica amministrazione** per la gestione del barcode nel tracciato xml della fattura elettronica): 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode.png)

poi  **[nell’anagrafica articolo](/docs/erp-home/registers/items/create-new-items/item-registry/barcode)** si indica il valore per il ongi tipo codice: 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode2.png)


il risultato sarà 

```xml
     <CodiceArticolo> 
     <CodiceTipo>DM1</CodiceTipo> 
     <CodiceValore>26554/R</CodiceValore> 
     </CodiceArticolo> 
```

come richiesto dalla normativa del ministero della salute. 

Relativamente alla possibilità di una doppia codifica in fattura, aggiungendo quella lato cliente intestatario del documento, il codice articolo cliente, se inserito nel tab Clienti dell' anagrafica articolo, riferito al cliente della fattura, può 
essere espresso in 2 modi diversi: 

- con il tag CodiceTipo avente dicitura “Codice Art. cliente” 

esempio:

```xml
    <CodiceArticolo> 
    <CodiceTipo>Codice Art. cliente</CodiceTipo>    
    <CodiceValore>XX4</CodiceValore>
    </CodiceArticolo> 
```

- con il tag CodiceTipo uguale al codice articolo cliente (della coppia di campi *tipo codice articolo fornitore/cliente*) presente in anagrafica del cliente nel tab 
informazioni fiscali

esempio:

```xml
    <CodiceArticolo>
    <CodiceTipo>CODCLI</CodiceTipo>
    <CodiceValore>XX4</CodiceValore></CodiceArticolo>
    </CodiceArticolo>
```

dove CODCLI è il valore inserito nel campo *tipo codice articolo cliente* in anagrafica cliente.

:::tip Approfondimento
Se si vuole visualizzare il codice articolo di Fluentis in modo diverso dallo standard si deve personalizzare in arm la 
trasformation di FSItem che si chiama FullTextDescriptionXMLFE. 
Se non si vuole inserire nulla nel tag CodiceArticolo per il CodiceTipo “codice art. fornitore”, nella trasformation, 
nella griglia, in corrispondenza della stringa “Engine Parameters” non deve essere inserito niente. 
Per escludere il codice classe nelle singole righe del documento, è necessario personalizzare in Arm la trasformation 
FullTextDesctiption dell’oggetto FSItem modificando il testo contenuto nella sezione EngineParameters della riga 
“Default” da “ItemClassCode +”-“+ Code” in “Code” 

:::

### Dichiarazione di intento ( tag 2.2.1.16 AltriDatiGestionali) 

I dati della dichiarazione intento sono inseriti automaticamente come “altri dati gestionali”: 

2.2.1.16.1 TipoDato INTENTO 

2.2.1.16.2 RiferimentoTesto viene riportato il riferimento identificativo e progressivo leggendoli dal **[registro delle dichiarazioni di intento](/docs/finance-area/declarations/declarations/intent-declaration)**

2.2.1.16.4 RiferimentoData viene riportata la data protocollo leggendola dal registro delle dichiarazioni di intento


### Annotazioni fisse in fattura ( tag 2.1.1.11 Causale)

Per gestire le annotazioni che nelle stampe delle vecchie fatture venivano inserite fisse nel report (esempio “Contributo 
Conai assolto ove dovuto”), devono essere inserite nuove note nella tabella Note codificate (Utilità->Gestione note 
codificate). Questo tipo di annotazioni vengono riportate nel tag Causale del file XML. 
Le condizioni da rispettare per avere compilato il tag Causale sono: 
- il tipo nota codificata deve avere codice        
   
```
   FATTURAZIONEELETTRONICA_CAUSALE
```
   
- la nota deve essere legata alla singola società 
- viene riportato quello che c’è scritto nel campo Descrizione, se questo è vuoto quello che c’è nel campo ‘Titolo’
 
### Annotazione fisse per cliente ( tag 2.1.1.11 Causale)

Per gestire delle annotazioni da riportare in base al cliente, devono essere gestite le note codificate nella relativa tabella 
(Utilità->Gestione note codificate). Questo tipo di annotazioni vengono riportate nel tag Causale del file XML che può 
essere replicato più volte nel file. 

Le condizioni da rispettare per avere compilato il tag Causale sono: 
- il tipo nota codificata deve avere codice
```
   FATTURAZIONEELETTRONICA_CAUSALE
```
- le note devono essere inserire nella scheda ‘Varie’ dell’anagrafica cliente, dedicato alla gestione delle note 
specifiche da riportare in stampa dei documenti. 
- la nota deve avere il flag ‘Stampa in Fatture Vendita’ o, se questo è vuoto, si riporta quanto scritto nel campo ‘Note’ della riga
 
### Gestione dati aggiuntivi liberi (tag 2.2.1.16 AltriDatiGestionali)

Per gestire dati aggiuntivi ‘liberi’ di riga, in Fluentis è necessario inserire degli ExtraData con codice che inizia con 

```
  AltriDGes_
```
(es. AltriDGes_AltriDati3). 

Questi Extradata, di tipo semplice, vanno collegati all’oggetto padre  

```
   FSSalesInvoiceItem
```
sulla proprietà, appunto, ExtraData (sono previsti 3 tipi: stringa, numerico, data). 

In ogni riga articolo, quindi, l’utente può aggiungere liberamente (manualmente) questi dati aggiuntivi; come risultato la riga articolo avrà, (ad esempio, se l’extra data è di tipo stringa), questa sezione aggiuntiva: 

```xml
    <AltriDatiGestionali> 
    <TipoDato>AltriDati3</TipoDato> 
    <RiferimentoTesto>Testo esempio</RiferimentoTesto> 
    </AltriDatiGestionali> 
```

dove: 
- il ‘TipoDato’ è ripreso dal testo che segue il codice 
```
   AltriDGes_ 
```
dell’extra data, 
- quando il tipo dell’extra data è numerico, quello che c’è nel campo ‘Valore’ dell’extra data finisce nel tag ‘RiferimentoNumero’ e quello che c’è nel campo ‘Descrizione’ (se non è vuota) dell’extra data stesso finirà nel ‘RiferimentoTesto’. 

Esempio

```xml
    <AltriDatiGestionali>
    <TipoDato>Spessore</TipoDato>
    <RiferimentoNumero>500</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Gestione del “riferimento amministrazione” in testata documento (tag 1.2.6 RiferimentoAmministrazione) 

Il “RiferimentoAmministrazione” in testata fattura viene gestito riprendendo dall’anagrafica cliente la ‘Persona di 
riferimento’ inserita con nota 

```
   XMLPA
```


In fattura vengono riportati i campi “Nome” + “ “ + “Cognome” della persona 
così inserita.

### Gestione del “riferimento amministrazione” per dettaglio linee (tag 2.2.1.15 RiferimentoAmministrazione)

Alcuni enti pubblici richiedono un ‘Riferimento amministrazione’ per la singola riga articolo (e non in testata). 

In Fluentis è possibile inserire degli ‘ExtraData’ con codice 

```
   RiferimentoAmminis
```

 

Questo extradata, di tipo semplice, deve essere collegato all’oggetto padre 

```
   FSSalesInvoiceItem
```


con proprietà ExtraData (previsto come stringa). 

In ogni riga articolo, quindi, l’utente può aggiungere liberamente (manualmente) questi dati aggiuntivi e il risultato sarà che quella riga articolo avrà questa sezione aggiuntiva: 

```xml
    <RiferimentoAmministrazione>RifAmm</RiferimentoAmministrazione> 
```

Dove il valore ‘RifAmm’ è preso dalla “Descrizione” dell’extra data inserito nella riga articolo. 

### Unità di misura alternativa (tag 2.2.1.16 AltriDatiGestionali)
 
La quantità utilizzata per il calcolo del prezzo di riga (indifferentemente che sia la prima o la seconda, dipende dal flag UMPrezzo della riga stessa) viene riportata nel tag 2.2.1.5 Quantità. 

L’unità di misura non riferita al prezzo viene riportata come ‘Altri dati gestionali’, 

con TipoDato = 
```
   QTALTERNA
```
e quantità riportata nel tag ‘RiferimentoNumero’. 

Esempio

```xml
    <AltriDatiGestionali>
    <TipoDato>QTAALTERNA</TipoDato>
    <RiferimentoNumero>4.00</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Dati Ordine Acquisto (tag 2.1.2 DatiOrdineAcquisto) 

Nel tag 

2.1.2 DatiOrdineAcquisto 

2.1.2.1 RiferimentoNumeroLinea 

2.1.2.2 IdDocumento 

Viene riportato il riferimento all’ordine del cliente. 

Nel tag **IdDocumento** viene riportato il testo presente nel campo **Vostro Riferimento** della **testata ordine cliente** collegata alla riga articolo fattura e **in mancanza di tale valore** viene riportato il *Vostro Riferimento* della **testata della fattura**. 

Questo tag è inserito solo per le righe fatture che sono collegate a righe ordine cliente. 

Nel caso la fattura non sia stata creata da ordini clienti di Fluentis per avere il riferimento all’ordine di acquisto si deve inserire un codice nel campo **Rif.ordine** presente, per ogni riga della fattura, nel tab di dettaglio per riga **Dati articolo**. 

![](/img/it-it/finance-area/e-invoice/configuration/datiarticolo.png)

### Dati DDT (tag 2.1.8 DatiDDT)
 
Nel tag 

2.1.8 Dati DDT 

2.1.8.1 NumeroDDT 

2.1.8.2 DataDDT 

2.1.8.3 RiferimentoNumeroLinea 

Viene riportato il riferimento al DDT da cui è stata creata la fattura. 
Nel “RiferimentoNumeroLinea” vengono riportate solo i numeri riga fattura collegati con una riga DDT. 

### Spese di Bollo (Tag 2.1.1.6 DatiBollo)

Per la gestione delle spese di bollo devono essere osservate le seguenti regole:

- Nella tabella **[Tipi spese](/docs/configurations/tables/general-settings/expenses-types)** deve essere inserita la spesa di tipo “bollo” con flag sul campo *Bollo* e con il *Valore Bollo* 2 euro 
- In anagrafica cliente si deve aggiungere una spesa di tipo “bollo” nella sezione **[Spese sconti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts)** selezionando il codice precedentemente creato nella tabella *Tipi spesa* 
- Per non addebitarle al cliente: nella spesa bollo in anagrafica cliente il valore deve essere 0 
- Nella tabella **[Società](/docs/configurations/tables/general-settings/company)** compilare il campo *Spese bollo* (2 euro) e *Roof min spese* (77,47 euro) 
- Nelle fatture di vendita le spese di bollo appaiono in automatico se presenti in anagrafica del cliente 
- Nella fattura di vendita è possibile cambiare il valore della spesa proposta (Pannello riepiloghi > Agenti/Sconti/Spese), perciò per singola fattura può essere fatta la scelta di addebito o meno (per non addebitare il bollo ma ottenere comuque l’evidenza in fattura è sufficiente inserire la spesa con importo = 0) 
- Quando viene creato il file XML, se c’è nei riepiloghi fattura una spesa di tipo bollo, viene aggiunta la sezione del bollo virtuale 

```xml
        <DatiBollo>
        <BolloVirtuale>SI</BolloVirtuale>
        <ImportoBollo>2.00</ImportoBollo>
        </DatiBollo> 
```

- Se nei riepiloghi della fattura è presente la spesa di tipo bollo con il valore diverso da 0 (caso di addebito in fattura), nell’XML viene aggiunta una sezione dettaglio linee con numero linea l’ultimo della fattura + 1 e il valore del bollo. 
 
Questa sezione viene aggiunta per il controllo dei totali fattura 

```xml
    <NumeroLinea>2</NumeroLinea>
    <TipoCessionePrestazione>AC</TipoCessionePrestazione>
    <Descrizione>Spesebollo</Descrizione>
    <Quantita>1.00</Quantita>
    <PrezzoUnitario>2.00000000</PrezzoUnitario>
    <PrezzoTotale>2.00</PrezzoTotale>
    <AliquotaIVA>0.00</AliquotaIVA>
    <Natura>N3</Natura>
```

### Codici Cig e Cup (Tag 2.1.2.6 CodiceCUP e 2.1.2.7 CodiceCIG)
 
Nel tag dei dati ordine di acquisto sono contenuti il CIG e CUP, per questo per poter riportare questi 2 codici la fattura deve riferirsi ad un ordine cliente di Fluentis oppure deve essere specificato il rif. Ordine nell’omonimo edit presente nel tab Dati Articolo del tab Articoli della fattura. 

    2.1.2 \<DatiOrdineAcquisto> 
    2.1.2.1 \<RiferimentoNumeroLinea> 
    2.1.2.2 \<IdDocumento> 
    …….. 
    2.1.2.6 \<CodiceCUP> 
    2.1.2.7 \<CodiceCIG>

### Decimali da utilizzare per i campi numerici 
Per sapere quanti decimali massimi si possono specificare per ogni campo numerico fare riferimento alle specifiche tecniche per la fattura elettronica dell’Agenzia delle Entrate:

Come da specifiche: 
- quantità articolo: decimali da 2 a 8 
- prezzo unitario: decimali da 2 a 8 
- percentuale di sconto: 2 decimali
 
### Ritenuta d’acconto e Enasarco (tag 2.1.1.5 DatiRitenuta) 

Per la gestione della ritenuta d’acconto: 

- in anagrafica cliente attivare il flag **Ritenuta d'acconto** nel tab **informazioni fiscali** e specificare qual è il tipo di ritenuta da utilizzare tramite la combo box **Tipo ritenuta**
- nella tabella **Tipi ritenute** codificare correttamente il codice per la fatturazione elettronica (RT01, RT02) 
- compilare la fattura come di consueto, il documento reperisce in automatico l'assoggettamento alla ritenuta per le righe sulle quali è possibile fare il calcolo e in automatico calcola l'importo della ritenuta 
- creare il file XML che riporta l'indicazione della ritenuta e, per ogni riga, il tag "Ritenuta SI" se la riga è assoggettata 

Per quanto riguarda l’Enasarco, con la versione 1.6 dello schema della fatturazione elettronica (in vigore dal 01/10/2020) è stato definito che la sezione 2.1.1.5, dedicata inizialmente alle sole ritenute, ora possa essere replicata N volte per indicare anche l’Enasarco, al quale è stato assegnato il codice RT04. Fluentis, se la ritenuta 
inserita in testata ha le impostazioni enasarco, valorizza nel documento anche il conteggio dell’enasarco, e valorizza come richiesto la sezione 2.1.1.5


:::danger[Attenzione]
CONTABILIZZAZIONE: la fattura attiva collegata alla ritenuta d'acconto subita ed al contributo enasarco sarà contabilizzata generando automaticamente la scrittura contabile corretta che storna dal credito verso il cliente la ritenuta ed il contributo.
PRESTARE ATTENZIONE CHE NELLA CONFIGURAZIONE DEL TIPO RITENUTA ASSOCIATO IL CAMPO **Tipi Partite** sia impostato su *Partite nette,* altrimenti la scrittura contabile ed il calcolo partite aperte risulteranno errati e mancanti del giroconto delle ritenuta.
:::

:::tip **Vedere anche**
Per la gestione del riaddebito **contributo cassa previdenza** nella fattura elettronica [**vedere qui**](/docs/configurations/tables/general-settings/expenses-types#ritenuta-dacconto-e-cassa-previdenza)
:::