---
title: Dodatna podešavanja za elektroničko fakturiranje
sidebar_position: 4
---
### Upravljanje knjižnim odobrenjem  

Počevši od verzije 606, knjižna odobrenja uvijek se moraju unositi u Fluentis s negativnim predznakom, posebno će se negativna vrijednost umetnuti počevši od polja Količina. Dokument vraća poruku upozorenja ako zbroj nije negativan s prijedlogom za obrnuti predznak.  

Što se tiče elektroničkog fakturiranja, za potrebe provjera koje provodi SDI potrebno je da znak dokumenta bude pozitivan, stoga će parser koji generira xml datoteku omogućiti novu inverziju znaka (kada je vrsta dokumenta TD04).  

:::note BILJEŠKA
Za računovodstvene potrebe, u slučaju da su unutar odobrenja prisutni mješoviti predznaci (pozitivne linije i negativne linije), potrebno je omogućiti mogućnost upravljanja njihovim mijenjanjem u administraciji (računovodstvu) internog parametra u bazi podataka (varijacija od 0 do 1, u prošlosti je postavljeno -1 prije gornje promjene). Obratite se tehničkoj dokumentaciji i eventualno službi za podršku.  
:::

### Kodiranje artikla po kupcu (Oznaka 2.2.1.3 Šifra artikla)

Oznaka koda stavke može se ponoviti nekoliko puta, generirajući dvostruko kodiranje, promjenom koda u oznaci 2.2.1.3.1 

```xml
    <CodiceTipo> . 
```
Šifra vrste koja je predložena prema zadanim postavkama (u prodajnim fakturama) je ona koja se odnosi na šifru stavke prisutnu u Fluentisu (iz matičnih podataka o stavci tvrtke u upotrebi) koja se može prijaviti s dva različita. 
    
```xml
    <CodiceTipo> 
```
**Prema zadanim postavkama kodiranje se odvija prema ovoj shemi**
    
```xml
    <CodiceArticolo> 
    <CodiceTipo>Codice Art. fornitore</CodiceTipo>    
    <CodiceValore>1504X0</CodiceValore>
    </CodiceArticolo> 
```         

Ili se *TipKoda* može prilagoditi popunjavanjem polja **[može prilagoditi popunjavanjem polja](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)** u bazi podataka kupaca na kartici s *fiskalnim informacijama*. 

:::note BILJEŠKA
Obratite pažnju, ovo je par susjednih polja koja se odnose na kodiranje naše tvrtke (dobavljača) za prilagodbu u usporedbi sa zadanim i na kupca za dvostruko kodiranje koje se umeće u izgled fakture. 
:::

Esempio:

```xml
    <CodiceArticolo>
    <CodiceTipo>MIOCODICE</CodiceTipo>
    <CodiceValore>104X0</CodiceValore>
    </CodiceArticolo>
```

Moguće su i druge specifične vrste kodiranja, kao što je EAN kodiranje ili specifično kodiranje za sektor medicinskih uređaja. 

Primjer:

```xml
    <CodiceArticolo> 
    <CodiceTipo>EAN</CodiceTipo>
    <CodiceValore>XX345678</CodiceValore>
    </CodiceArticolo>
```

Moguće je podržati kodiranje na tablici **[Vrste barkodova](/docs/configurations/tables/general-settings/barcode-types)**

Praktičan primjer korištenja za 'Medicinske uređaje': Kodirane su 3 vrste crtičnog koda (također aktiviranje flaga **Export Public računovodstvo** za upravljanje barkodom u xml putu elektroničke fakture): 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode.png)

tada je u **[šifarniku artikla](/docs/erp-home/registers/items/create-new-item)** naznačena vrijednost za svaku vrstu koda: 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode2.png)


Rezultat će biti  

```xml
     <CodiceArticolo> 
     <CodiceTipo>DM1</CodiceTipo> 
     <CodiceValore>26554/R</CodiceValore> 
     </CodiceArticolo> 
```

prema propisima Ministarstva zdravstva. 

Što se tiče mogućnosti dvostrukog kodiranja na fakturi, dodajući da na strani kupca koji je vlasnik dokumenta, šifra artikla kupca, ako je umetnuta u kartici Kupci šifarnika artkla, koji se odnosi na kupca fakture, može biti izraženo na 2 različita načina: 

- s oznakom CodiceTipo koja sadrži riječi "Klijent Art Kod".

primjer:

```xml
    <CodiceArticolo> 
    <CodiceTipo>Codice Art. cliente</CodiceTipo>    
    <CodiceValore>XX4</CodiceValore>
    </CodiceArticolo> 
```

- s oznakom CodiceTipo koja je jednaka kodu artikla kupca (od para polja *tipa koda artikla dobavljača/kupca*) koji se nalazi u bazi podataka kupca na kartici s poreznim podacima 
primjer:

```xml
    <CodiceArticolo>
    <CodiceTipo>CODCLI</CodiceTipo>
    <CodiceValore>XX4</CodiceValore></CodiceArticolo>
    </CodiceArticolo>
```

gdje je CODCLI vrijednost unesena u polje *vrste šifre artikla kupca* u Šifarniku o kupcima. 

:::tip UVID 
Ako želite vidjeti kod članka Fluentis drugačije od standarda, morate prilagoditi FSItem transformaciju u ruci koja se zove FullTextDescriptionXMLFE. Ako ne želite ništa umetnuti u oznaku CodiceArticolo za CodiceType “art. dobavljač", u transformaciji, u mreži, ništa se ne smije unijeti u korespondenciju s nizom " Engine Parameters ". Da biste isključili kod klase u pojedinačnim redcima dokumenta, potrebno je prilagoditi transformaciju FullTextDesctiption FSItem objekta u Arm promjenom teksta sadržanog u odjeljku EngineParameters retka “Default” iz “ItemClassCode +”-“+ Šifra” u “Šifra”  
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
Per la gestione del riaddebito **contributo cassa previdenza** nella fattura elettronica [**vedere qui**](/docs/configurations/tables/general-settings/expenses-types)
:::