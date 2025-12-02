---
title: Prodajni prihodi
sidebar_position: 10
---

Omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.

Forma se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Pretraži** kako bi se rezultati prikazali u mreži rezultata.  

Za unos novih zapisa potrebno je kliknuti na prvu praznu red u mreži ili pritisnuti tipku **Novo**.

#### Specifična polja  

**Tip**: šifra za identifikaciju prodajnog prihoda;  

**Opis**: opis prodajnog prihoda;  

**Konto/Podkonto/Opis podkonta**: konto troška koji se koristi za knjiženje prodajnih dokumenata;

**Tip PDV-a**: koristi se prilikom knjiženja dokumenta. Obično je postavljeno na generički; za više detalja provjeriti upotrebu u predlošcima kontiranja i knjiženju u administrativnom području;  

**Tip iznosa**: koristi se prilikom knjiženja dokumenta; za više detalja provjeriti [upotrebu](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) u administrativnom području.  

**Famiglia prodotti/Descrizione famiglia prodotti**: campo di assegnazione statistica della vendita per il Sales Forecast del Crm.

**Dettaglio per nazioni**: questi dati sono utilizzati solo per lo scambio dati con programmi esterni. In futuro sarà possibile definire conti di costo diversi per nazione e tipo contabilizzazione articolo, associato in anagrafica cliente.

:::note Note
Se il *Tipo fatturato* viene inserito nell'*Anagrafica articoli* questo codice viene proposto nelle righe articolo del documento di acquisti e automatizza la contabilizzazione dei documenti su un determinato conto di contropartita.
:::

#### Esempio di una fattura di vendita:

Se quindi, il *Tipo fatturato* fosse presente già nell'*Anagrafica articolo*, nei documenti di vendita lo troveremo riportato nel nel tab *Articoli*, nel campo *Fatturato vendite*; nel caso in cui non sia presente in anagrafica articolo, è possibile andarlo a selezionare direttamente all'interno del documento di vendita tramite l'apposita combo box.

Nel caso in cui non venga inserito nell'anagrafica articolo e non ci si ricordi di andarlo ad inserire manualmente nel documento di vendita, il sistema per non bloccare la contabilizzazione dei documenti, permette (se questa scelta risulta opportuna) di riprendere il sottoconto di contropartita di default che si è deciso di impostare nell'Anagrafica contatto > tab Dati Contabili > tab Amministrazione nel campo **Costo/Ricavo di contropartita predefinito**.


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).