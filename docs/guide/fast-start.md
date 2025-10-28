---
title: Configurazione automatica e manuale di un nuovo ambiente Fluentis ERP
description: Guida completa alla procedura di inizializzazione di Fluentis ERP - Fast Start per la configurazione automatica e roadmap manuale per la verifica delle tabelle.
keywords:
  - Fluentis ERP
  - Fast Start
  - avvio rapido
  - setup ERP
  - configurazione automatica
  - configurazione manuale
  - inizializzazione gestionale
  - roadmap setup Fluentis
sidebar_position: 2
schema: TechArticle
sidebar_label: Fluentis Fast Start e configurazione nuovo ambiente
tags:
  - setup
  - configurazione
  - Fluentis ERP
last_update:
  author: Fluentis Documentation Team
  date: 2025-10-28
---

# Roadmap di configurazione di un nuovo ambiente per Fluentis ERP

:::tip[FAST START]
Il **Fast Start** è una funzionalità progettata per rendere **rapida e semplice l'inizializzazione** di un nuovo ambiente  **Fluentis ERP**, progettata per ridurre al minimo i tempi di setup e garantire la coerenza dei dati iniziali.  
:::

Grazie al **Fast Start**, il sistema esegue in modo automatico la **creazione e configurazione delle tabelle fondamentali**, impostando i principali parametri amministrativi, contabili e anagrafici.  

In questo modo, l’utente può iniziare a lavorare con un ambiente preconfigurato e funzionante, evitando di dover intervenire manualmente su ogni singola tabella.
 
:::note[Configurazione manuale]
Se si sceglie di **non utilizzare il Fast Start**, è necessario procedere con una **configurazione manuale** delle tabelle.  
:::

Questa modalità richiede un **controllo puntuale** dei parametri e dei collegamenti logici tra le varie tabelle, ma consente una **personalizzazione completa dell’ambiente**.

## Scelta della modalità di configurazione

| Scenario | Metodo consigliato | Motivazione |
|-----------|--------------------|--------------|
| Nuova installazione o test | **Fast Start** | Attivazione immediata con dati preconfigurati. |
| Ambiente personalizzato o complesso | **Manuale** | Controllo totale dei parametri e collegamenti. |
| Migrazione da versione precedente | **Manuale** | Necessario allineare strutture e piani contabili. |
| Demo o formazione | **Fast Start** | Configurazione rapida e coerente per simulazioni. |

## ⚙️ Configurazione **automatica** con **Fast Start**

La configurazione automatica è consigliata quando si desidera **avviare rapidamente un nuovo database Fluentis** con valori predefiniti e coerenti.  

La procedura popola automaticamente le tabelle principali, riducendo errori e tempi di configurazione.

#### Vantaggi

- **Efficienza** nella configurazione iniziale.  

- **Riduzione del rischio di errore umano**.  

- **Risparmio di tempo e risorse** nel setup del gestionale. 

### Come **lanciare** il **Fast Start**

1. Accedi alla tabella **[Società](/docs/configurations/tables/general-settings/company)**.  

2. Seleziona la società da inizializzare.  

3. Premi il pulsante **Impostazioni Generali** presente nella *ribbon bar*.  

4. Avvia la procedura di **Fast Start** e conferma le impostazioni. 

Dopo l’esecuzione, verifica i parametri generati e personalizzali se necessario per adeguarli alle specifiche esigenze aziendali.

:::tip[Dove si attiva]
Per lanciare la procedura di **Fast Start** accedere alla [**tabella Società**](/docs/configurations/tables/general-settings/company), entrare nella specifica società interessata e premere il tasto *Impostazioni Generali* presente nella ribbon bar.
:::

:::note[Info importante]
La procedura può essere eseguita **per ogni società** presente nella base dati.  
Ad esempio, la *Società 1* può essere inizializzata con il *Fast Start*, mentre la *Società 2* può essere configurata manualmente.  
Per questo motivo, il pulsante di avvio è disponibile **a livello di singola società**.
:::

:::danger[Attenzione]
Prima di avviare il **Fast Start**, assicurati che:  
- il **piano dei conti** non sia già stato popolato;  
- nessuna delle **tabelle coinvolte nella procedura** contenga dati preesistenti.  
👉 Si consiglia di eseguire il Fast Start **immediatamente dopo l’installazione**, come **prima operazione di configurazione**.
:::

### Tabelle e aree coinvolte 

<details>

  <summary>Fast Start (clicca per espandere)</summary>

Tabelle coinvolte (Stored Procedure Fluentis.SH_CreateNewYear_IT):
    
 - > Tipi conto
 - > Piano dei conti
 - > Parametri di contabilità generale
 - > Parametri cespiti
 - > Parametri portafoglio (attivo- effetti)
 - > Parametri insoluti
 - > Parametri MPS
 - > Causali contabili
 - > Codici IVA
 - > Registri IVA
 - > Tipi documento
 - > Tipi pagamento
 - > Soluzioni pagamento
 - > Categorie Agenti
 - > Tipi ritenuta (d'acconto)
 - > Categorie cespiti
 - > Tipi flusso finanziario
 - > Tipi anticipo
 - > Stati insoluto
 - > Stati effetti
 - > Tipi distinta di presentazione (effetti)
 - > Tipi effetti
 - > Link tra la tabella Tipi pagamento e i tipi effetto
 - > Numerazioni registrazioni contabili (definitive e provvisorie)
 - > Numerazione partite
 - > Numerazione compensazioni (partite)
 - > Numerazione pagamenti fronitori
 - > Numerazione intrastat
 - > Numerazione liquidazioni agenti
 - > Numerazione distinte di presentazione effetti
 - > Numerazione effetti
 - > [Numerazione documenti di vendita](/docs/configurations/tables/fluentis-numerations)
 - > [Numerazione documenti di acquisto](/docs/configurations/tables/fluentis-numerations)
 - > Tipi fattura ([acquisto](/docs/configurations/tables/purchase/purchase-invoices-type) e [vendita](/docs/configurations/tables/sales/invoices-type)) con collegamento alle causali contabili
 - > Tipi DDT ([acquisto](/docs/configurations/tables/purchase/purchase-delivery-notes-type) e [vendita](/docs/configurations/tables/sales/delivery-notes-type)) con collegamento ai tipi fattura
 - > Tipi Ordine ([acquisto](/docs/configurations/tables/purchase/purchase-orders-type) e [vendita](/docs/configurations/tables/sales/sales-order-types)) con collegamento ai tipi DDT
 - > [Tipi offerta](/docs/configurations/tables/sales/sales-offer-type)
 - > [Parametri fatture](/docs/configurations/parameters/sales/sales-invoices-parameters) e relativi [raggruppamenti](/docs/configurations/parameters/sales/invoice-grouping) 
 - > [Parametri DDT](/docs/configurations/parameters/sales/dn-parameters) e relativi [raggruppamenti](/docs/configurations/parameters/sales/dn-grouping) 
 - > [Parametri ordini](/docs/configurations/parameters/sales/sales-orders-parameters) e relativi [raggruppamenti](/docs/configurations/parameters/sales/orders-grouping)
 - > [Parametri offerte](/docs/configurations/parameters/sales/offer-parameters)
 - > Tipi progetto (sales job order)
 - > Tipi intervento
 - > Numerazione progetti
 - > Numerazione interventi
 - > Tipi richiesta intervento (e relativa numerazione)
 - > Tipi interventi pianificati (e numerazione)
 - > Tipi rientro conto lavoro (e numerazione)
 - > Tipi ordini conto lavoro (e numerazione)
 - > Tipi commesse di produzione (e numerazione)
 - > Tipi ordini pianificati di acquisto (e numerazione)
 - > Tipi ordini pianificati di produzione (e numerazione)
 - > Tipi ordini pianificati di conto lavoro (e numerazione)
 - > Tipi o rdini di produzione (e numerazione)
 - > Tipi ordini di conto lavoro (e numerazione)
 - > Tipi RDA (e numerazione)
 - > (Tipi) fatturato vendite
 - > (Tipi) fatturato acquisti
 - > Tipi listino
 - > Tipi indirizzo
 - > Tipi sconto
 - > Lingue
 - > Nazioni
 - > Nazioni Black list
 - > Divise
 - > Unità di misura
 - > Porto (Incoterms - termini di resa)
 - > Spedizioni (tipi)
 - > Modelli di riclassificazione (controlling)
 - > Collegamento del modello di riclassificazione per Bilancio CEE con dettaglio piano dei conti
 - > Orari di lavoro (gest. dipendenti)
 - > Severità (ticket CRM)
 - > SLA (ticket CRM)
 - > Tipi Ticket CRM (e numerazione)
 - > Versioni distinta base
 - > Classi articolo
 - > Magazzini
 - > Causali di magazzino
 - > Dati di default per il CRM (Tipi contatto, Visit report, Opportunità, Qualità contatto, percentuali di successo ecc...)

</details>

## ⚙️ Configurazione **manuale** nuovo ambiente

Se si sceglie di **non utilizzare il Fast Start**, è necessario procedere con una **configurazione manuale** delle seguenti tabelle.  
Questa modalità richiede un controllo puntuale dei parametri e dei collegamenti logici tra le varie tabelle, ma consente una **personalizzazione completa dell’ambiente**.

### **Checklist operativa**:
Questa sezione funge da **checklist operativa** per la verifica e la compilazione delle tabelle fondamentali, ordinate per area funzionale.  
Ogni voce è espandibile e contiene:
- La **finalità** della tabella.  
- Le **azioni da eseguire** o i **valori consigliati**.  
- Eventuali **attenzioni o note operative** per evitare incongruenze.  

### Tabelle di base

<details>
  <summary>Nazioni (clicca per espandere)</summary>

#### Scopo
Tabella fondamentale per tutti i documenti gestionali e per l’inserimento delle **anagrafiche clienti e fornitori**.

#### Procedura
1. Compilare il **Codice** (preferibilmente conforme allo standard internazionale) e la **Descrizione**.  
2. Verificare il campo **COD ISO EU**: se assente, non verrà memorizzato correttamente il *precodice partita IVA*.  
   - ⚠️ Esempi particolari:
     - Grecia GR -> ISO = 'EL'
     - Salvo casi particolari può essere eseguito un update per compilare ISO EU = COD ISO (vecchi db pre fast start)

</details>

<details>
  <summary>Divise (clicca per espandere)</summary>

##### Scopo
Tabella necessaria per la gestione dei **cambi valuta** e delle **registrazioni contabili**.

#### Procedura
1. Verificare la presenza delle divise principali, in particolare **EUR (Euro)**.  
2. Abilitare il flag **Scarica cambi** per consentire l’inserimento dei tassi di cambio.  
3. Impostazioni consigliate:
   - **Decimali** → impostare a `2`  
   - **Flag Euro** → attivo solo su `EUR`
4. La **griglia inferiore** è opzionale ma consigliata: consente di automatizzare la rilevazione delle **differenze cambio**, associando i relativi conti contabili.

</details>

<details>
  <summary>Società (clicca per espandere)</summary>

#### Scopo
Tabella essenziale per la fatturazione elettronica e per i dati societari nei documenti e stampe

#### Procedura
1. Compilare tutti i **dati fiscali**   
2. Per la **fatturazione elettronica**, verificare:
         - P. Iva e codice fiscale
         - Telefono e fax non sono obbligatori, attenzione a non inserire / o special chars per separare il prefisso
        - REA (Provincia due lettere e numero)
        - Socio unico / più soci
        - Liquidazione SI / NO
        - Capitale sottoscritto / versato - ATTENZIONE a non mettere il puntino delle meigliaia e separare i decimali col punto e NON virgola
        - Natura giuridica
        - Regime fiscale

</details>

<details>
  <summary>Tipi Documento (clicca per espandere)</summary>

#### Scopo
Tabella appartenente al gruppo generale **Tipi Documenti**, da non confondere con l’omonima del gruppo *Amministrazione*.  

#### Procedura
1. Verificare con un Fast Start i tipi minimi necessari.  
2. Per la **Fatturazione Elettronica**, creare una tipologia con:
   - **Codice:** `FattPubb`  
   - **Descrizione:** `FattPubb`  

</details>

<details>
  <summary>Tipi Pagamento (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per le anagrafiche e i documenti (scadenze) e le registrazioni contabili (Partite).

#### Procedura  
1. Verificare che il campo **Codice P.A.** sia compilato correttamente, poiché è richiesto nel tracciato della **fattura elettronica**.  
2. Controllare il **collegamento con i tipi effetto** nella griglia inferiore destra:
   - Se mancante, il sistema non riuscirà a individuare correttamente le **partite** durante la creazione degli effetti.  

</details>

<details>

  <summary>Soluzioni di pagamento (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per i documenti (scadenze) e contabilità (partite)

</details>

### Tabelle amministrazione

#### Contabilità di base

<details>
  <summary>💡 Aliquote IVA (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per la contabilità, documenti, fatturazione elettronica

#### Procedura
1. Compilare il campo **Codice P.A.** per tutti i codici relativi a *esenzione*, *esclusione* o *non imponibilità*, indispensabile per le **fatture elettroniche**.  
2. Verificare il campo **In Dichiarazione IVA**, necessario per la **comunicazione trimestrale delle liquidazioni IVA**.  
3. Verificare, dove necessario, il flag **IVA a 0 in LG** per consentire righe IVA a zero.  
4. Controllare il campo **IVA per causali automatiche**(casi di reverse charge con indetraibilità sull'acquisto).  
5. Verificare l’impostazione **Escludi da causali automatiche** (casi di Reverse charge misto - parte non in reverse).  

</details>

<details>
  <summary>Registri IVA (clicca per espandere)</summary>

#### Scopo  
Tabella necessaria per la contabilità e liquidazione iva.

#### Procedura
1. Prevedere una ripartizione tra Italia, UE ed EXtra UE, consigliabile distinzione tra beni e servizi UE alla luce dei codici documento TD17 - TD18 per le autofatture da comunicare allo SDI (consigliabile ripartizione anche per exra UE).  
2. Per i registri di acquisto in reverse charge (Italia e UE) prevedere i rispettivi registri lato vendite per il giroconto, non condividere il registro di giroconto con la vendita UE (ad esempio).  
3. Consigliato prevedere un registro apposito per liquidazioni IVA (per facilitare la stampa definitiva e la ristampa in caso di sblocco solo di questo sezionale).  
4. Pianificare e verificare il corretto abbinamento tra:
   - **Tipo Fattura**  
   - **Numerazione** del Tipo Fattura,  
   - **Causale Contabile** e
   - **Registro IVA**  
   → Questo evita buchi nei protocolli e conflitti nei numeratori.  
5. Inserire l’**anno corrente** (ed eventualmente i precedenti); gli anni successivi saranno generati automaticamente tramite l’utility **Generazione contatori nuovo anno**.

</details>

<details>
  <summary>Numerazione Registrazioni Contabili (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per la contabilità.

#### Procedura
1. Prevedere almeno una numerazione per le registrazioni definitive (consigliato utilizzo de codice 1 descrizione  General ledger posting numeration).  
2. Pianificare e impostare la politica del numeratore (Giornliero o Annuale) gli altri parametri del numeratore come da istruzioni generali sui numeratori.  
3. Consigliato prevedere anche un numeratore per le registrazioni provvisorie (Codice 2 descrizione General ledger posting provisory numeration).  

</details>

<details>
  <summary>Tipi Conto (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per la definizione del **Piano dei Conti**, per la **contabilità generale** e la **stampa del bilancio**.

#### Procedura
1. Creare almeno le quattro tipologie principali:
   - **Attivo**
   - **Passivo**
   - **Costi**
   - **Ricavi**  
   fondamentali per bilancio e prima nota.  
2. Impostare i tipi conto per **Clienti** e **Fornitori**, preferibilmente distinti tra *Italia*, *UE* ed *Extra UE* (spuntare sia *Attivo/Passivo* sia *Cliente/Fornitore*).  
3. Consigliato creare un tipo specifico per **Banche** per l'utilizzo tramite anagrafica, altrimenti non è possibile gestire alune funzioni quali il portafoglio ecc. sconsigliato far registrazioni di banca con un conto non di tipo angrafico banca.  
4. Consigliato prevedere tipi conto per **Costi/Ricavi da rettificare** con ratei e risconti da settare con flag **Servizio** oltre che costo/ricavo.  
5. Necessario creare un tipo **Agenti** se si desidera gestire le **provvigioni** (flag su *Passivo* e *Agente*).  
6. Facoltativo: creare il tipo **Conti d’ordine** (con flag conti d'ordine) per gestire le scritture fuori bilancio.

</details>

<details>
  <summary>Piano dei Conti (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per la contabilità e stampa bilancio

#### Procedura
1. Nella **griglia dei gruppi**, definire almeno le quattro categorie: *Attivo*, *Passivo*, *Costi*, *Ricavi*.  
2. Pianificare la struttura dei **sottogruppi** (numero di sottolivelli illimitato) e compilare il campo *Natura gruppo*.  
3. Nella **griglia inferiore**, inserire per ogni gruppo di ultimo livello i conti e sottoconti di dettaglio.  
   ⚠️ Ogni gruppo deve contenere almeno un conto dove poi inserire i suoi sottooconti.  
4. **Non** inserire da qui conti anagrafici (Clienti, Fornitori, Agenti, Banche): vanno creati tramite **Contatti**.  
5. Creare i conti fondamentali:
   - Bilancio di chiusura e apertura  
   - Conto economico di chiusura  
   - Utile/Perdita d’esercizio e dell’anno precedente  
   - Ratei e Risconti (con tipo conto specifico)  
6. Facoltativo: gruppo **Conti d’ordine** per gestire le scritture fuori bilancio.

</details>

<details>
  <summary>Parametri di Contabilità Generale (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per la contabilità.

#### Procedura
1. Inserire l’**anno contabile corrente** e, se necessario, anche i precedenti.  
   Gli anni futuri saranno creati automaticamente tramite l’utility *Generazione contatori nuovo anno”*.  
2. Compilare i **tre range di date** per la gestione dell’esercizio.  
3. Indicare, se già disponibili, le **causali di chiusura e apertura conti** (oppure completarle in seguito).  
4. Definire la **periodicità IVA**.  
5. Inserire gli **abbinamenti tra mastri** e **tipi conto** per:
   - Clienti e Fornitori  
   - Banche  
   - Agenti  
6. Nel **secondo tab**, configurare i **conti per le procedure automatiche**.

</details>

<details>
  <summary>Causali di Contabilità Generale (clicca per espandere)</summary>

#### Scopo
Tabella necessaria per la contabilità.

#### Procedura
1. Creare causali per i principali **tipi di fattura acquisto e vendita**, collegandole ai rispettivi **registri IVA**.  
   - Necessario un **template** con conti generici (cliente/fornitore, costo/ricavo, IVA a credito/debito).  
   - Verificare il campo **Tipo importo** nelle righe.  
2. Aggiungere **causali di giroconto** per *Reverse Charge* e *Operazioni UE*.  
3. Creare causali per **pagamenti e incassi** con chiusura partite (necessarie anche per *distinte bonifico*); prestare attenzione al template e tipo impoto nelle righe.  
4. Prevedere causali per le **fasi del portafoglio attivo** (emissione effetti, Presentazione e Accredito), presentazione e accredito non serve un template, mentre Emissione necessario un template Effetti in portafoglio a Cliente.   
5. Creare causali per **note di accredito** con template invertito nei segni, per *reverse charge*, si può invertire la prima causale e condividere il giroconto con opzione *inversione segni automatica*.  
6. Prevedere causali per **percipienti** (con template) e per il **pagamento percipienti** (non serve template).  
7. Creare causali per:
   - Apertura/chiusura esercizio  
   - Ratei e risconti  
   - Ammortamenti (non serve template)  
8. Consigliato prevedere altre causali di prima nota e una causale di prima nota generica senza template  
9. Configurare le causali per:
   - Invio **autofatture SDI**  
   - **Acquisti servizi Extra UE** non IVA con aggancio ad autofattura .  

</details>

#### Gestione cespiti

<details>

  <summary>Parametri Cespiti (clicca per espandere)</summary>
 
#### Scopo
Tabella necessaria per la gestione cespiti.

#### Procedura  
  1. Pianificare la politica di gestione della numerazione, se singola o con precodice   
    
</details>

<details>

  <summary>Categorie Cespiti (clicca per espandere)</summary>
#### Scopo 
Tabella necessaria per la contabilità e gestione cepiti.

#### Procedura  
  1. Prevedere le categorie e l'aliquota ministeriale di ammortamento secondo il tipo attività svolta
  2. Inserire nelle categorie il limite per l'ammortamento annuale (di solito 516 Euro)
  3. Inserire il flag Ammortamento primo anno per dimezzare la quota il primo anno
  4. Pianificare la politica di ammortamento dei componenti incrementali (si sconsiglia di cambiarla in corsa)
   
</details>

<details>

  <summary>Precodice Cespiti (clicca per espandere)</summary>
 
#### Tabella facoltativa

#### Procedura  
  1. Pianificare la politica di gestione della numerazione, se singola o con precodice 
 
    

</details>

#### Gestione percipienti

<details>

  <summary>Codice Tributo (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestioe F24.  

#### Procedura  
  1. Verificare la presenza di dati e aggiungere se necessario i codici per l'iva (6001, 6002.... 6099) e per ritenute (1040, 1038....)

</details>

<details>

  <summary>Tabella Tipi Ritenuta (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione percipienti.

#### Procedura  
  1. Prevedere le tipologie necessarie per percipienti (1040) al 20% di ritenuta, per agenti e per contribuenti forfettari (0% sul 100%)
  2. Agganciare le causali per la contabilizzazione compenso 
  3. Agganciare la categoria agente nel tipo riservato agli agenti
   
</details>

### Tabelle tesoreria

#### Portafoglio attivo

<details>

  <summary>Stati Efetti (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione portafoglio.

#### Procedura  
  1. Prevedere almeno le tipologie fondamentali Emesso, Presentato SBF, Rit. Accr (Accreditato) e Rit. Ins (insoluto) da bbinare al rispettivo flag
   
</details>

<details>

  <summary>Stati Insoluti (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione insoluti legata al portafoglio.  

#### Procedura  
  1. Prevedere almeno la tipologia "Insoluto" collegata al relativo flag
  2. Si consiglia di codificare tutte le tipologie specularmente ai flg presenti 
   
</details>

<details>

  <summary>Tipi Effetti (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione portafoglio.  

#### Procedura  
  1. Prevedere almeno la tipologia "Ricevuta bancaria"
  2. Collegare la numerazione di cui al punto successivo
  3. Collegare un conto dal piano dei conti (es. Effetti attivi in portafoglio) per contabilizzare l'emissione
   
</details>

<details>

  <summary>Numerazione Effetti (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione portafoglio.  

#### Procedura  
  1. Prevedere la tipologia "Bills numeration"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale
   
</details>

<details>

  <summary> Numerazione Distinte di Presentazione (clicca per espandere)</summary>
 
#### Scopo  

Tabella necessaria per la gestione portafoglio.

#### Procedura  
  1. Prevedere la tipologia "Bills list numeration"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale

   
</details>

<details>

  <summary> Tipi Presentazione Distinte Effetti (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione portafoglio.  

#### Procedura  
  1. Prevedere almeno una tipologia di default con numerazione collegata
  2. Si consiglia di prevedere varie tipologie a seconda della banca di presentazione collegando i conti d'appoggio per la presentazione ed i conti correnti ordinari per l'accredito specifici
   
</details>

#### Bonifici fornitori

<details>

  <summary>Numerazione Pagamenti Fornitori (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione distinte di bonifico.

#### Procedura  
  1. Prevedere la tipologia "Bills list numeration"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale
   
</details>

<details>

  <summary>Tipi Pagamento (clicca per espandere)</summary>
 
 #### Verifica: già gestita nelle tabelle generali

  1. Verificare se presente una tipologia adatta (es "Bonifico") che sarà richiamata.
   
</details>

#### Anticipo fatture

<details>

  <summary>Tipi Anticipo (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione anticipi.

#### Procedura  
  1. Prevedere una tipologia per ogni banca collegata
  2. Agganciare la numerazione di cui al punt successivo
  
</details>

<details>

  <summary>Numerazione Distinte Anticipo Fatture (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione distinte di anticipo-  

#### Procedura  
  1. Prevedere la tipologia "Default"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale
   
</details>

#### Cashflow

<details>

  <summary>Tipi Flusso (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione cashflow.

#### Procedura  
  1. Prevedere una tipologia per ogni tipo flusso finanziario con relativo flag abbinato
  2. Consigliato abilitarli tutti, tanto si selezionano quelli di interesse al lancio del calcolo e resta memorizzata la scelta
  
</details>

<details>

  <summary>Tipi Conto Finanziario (clicca per espandere)</summary>
 
#### Scopo  
Tabella necessaria per la gestione cashflow.  

#### Procedura  
  1. Inserire i conti correnti ordinari
  2. Non è necessario inserire i conti di appoggio per SBF se si abilita il parametro di lettura in fase di lancio del calcolo
  
  
</details>

<details>

  <summary>Tipi Scadenza (clicca per espandere)</summary>
 
#### Facoltativa
 Tabella facoltativa per la gestione scadenze extracontabili nel cashflow.

#### Procedura
  1. Inserire le tipologie di interesse (es. Stipendi)
  
</details>

Verifcare nelle varie tabelle dei documenti (Ordini, DDT, RDA ecc..) quali tipologie si vogliono leggere nel calcolo cashflow

### Tabelle vendita

#### Offerte

<details>

  <summary>Parametri (clicca per espandere)</summary>

#### Procedura  
Definire i [parametri](/docs/configurations/parameters/sales/offer-parameters) generali da utilizzare nelle offerte. 

</details>

#### Ordini

<details>

  <summary>Tipi Ordine (clicca per espandere)</summary>

#### Procedura  
Inserire le [tipologie di ordine](/docs/configurations/tables/sales/sales-order-types) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazione](/docs/configurations/tables/fluentis-numerations)*.     
I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia ORDINE CLIENTI ITALIA, ORDINE CLIENTE UE, ORDINE CLIENTE EXTRA UE.       
  - creazione tipologia in base al [Tipo DDT](/docs/configurations/tables/sales/delivery-notes-type) o al [Tipo fattura](/docs/configurations/tables/sales/invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare

</details>

<details>

  <summary>Parametri (clicca per espandere)</summary>
#### Procedura  
Definire i [parametri](/docs/configurations/parameters/sales/sales-orders-parameters) generali da utilizzare negli ordini cliente. 

</details>

#### DDT di vendita

<details>

  <summary>Tipi DDT (clicca per espandere)</summary>

#### Procedura  
Inserire le [tipologie di DDT](/docs/configurations/tables/sales/delivery-notes-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazione](/docs/configurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia DDT CLIENTI ITALIA, DDT CLIENTE UE, DDT CLIENTE EXTRA UE.       
  - creazione tipologia in base al [Tipo fattura](/docs/configurations/tables/sales/invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare
  
</details>

<details>

  <summary>Parametri (clicca per espandere)</summary>

#### Procedura  
Definire i [parametri](/docs/configurations/parameters/sales/dn-parameters) generali da utilizzare nei DDT cliente. 
  
</details>

#### Fatture di vendita

<details>

  <summary> Tipi fattura  (clicca per espandere)</summary>

#### Procedura  
Inserire le [tipologie di fattura](/docs/configurations/tables/sales/invoices-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazione](/docs/configurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia FATTURA CLIENTI ITALIA, FATTURA CLIENTE UE, FATTURA CLIENTE EXTRA UE.     
  - creazione tipologia in base alla Natura fattura (fattura, nota di credito, ecc.)  
  - creazione tipologia in base al Magazzino da movimentare.
  
</details>

<details>

  <summary>Parametri (clicca per espandere)</summary>

#### Procedura  
Definire i [parametri](/docs/configurations/parameters/sales/sales-invoices-parameters) generali da utilizzare nelle fatture cliente. 

</details>

### Tabelle acquisti

#### Ordini

<details>

  <summary>Tipi Ordine (clicca per espandere)</summary>

#### Procedura  
Inserire le [tipologie di ordine](/docs/configurations/tables/purchase/purchase-orders-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazione](/docs/configurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia ORDINE FORNITORE ITALIA, ORDINE FORNITORE UE, ORDINE FORNITORE EXTRA UE.       
  - creazione tipologia in base al [Tipo DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) o al [Tipo fattura](/docs/configurations/tables/purchase/purchase-invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare

</details>

<details>

  <summary>Parametri (clicca per espandere)</summary>

#### Procedura  
Definire i [parametri](/docs/configurations/parameters/purchase/purchase-orders-parameters) generali da utilizzare negli ordini fornitore. 

</details>

#### DDT di acquisto

<details>

  <summary>Tipi DDT (clicca per espandere)</summary>

#### Procedura  
Inserire le [tipologie di DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazione](/docs/configurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia DDT FORNITORE ITALIA, DDT FORNITORE UE, DDT FORNITORE EXTRA UE.       
  - creazione tipologia in base al [Tipo fattura](/docs/configurations/tables/purchase/purchase-invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare
  
</details>

<details>

  <summary>Parametri (clicca per espandere)</summary>

#### Procedura  
Definire i [parametri](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) generali da utilizzare nei DDT di acquisto. 
  
</details>

#### Fatture di acquisto

<details>

  <summary>Tipi fattura (clicca per espandere)</summary>

#### Procedura  
Inserire le [tipologie di fattura](/docs/configurations/tables/purchase/purchase-invoices-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazione](/docs/configurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia FATTURA FORNITORE ITALIA, FATTURA FORNITORE UE, FATTURA FORNITORE EXTRA UE.     
  - creazione tipologia in base alla Natura fattura (fattura, nota di debito, ecc.)  
  - creazione tipologia in base al Magazzino da movimentare.
  
</details>

<details>

  <summary>Parametri (clicca per espandere)</summary>

#### Procedura  
Definire i [parametri](/docs/configurations/parameters/purchase/purchase-invoices-parameters) generali da utilizzare nelle fatture di acquisto. 

</details>