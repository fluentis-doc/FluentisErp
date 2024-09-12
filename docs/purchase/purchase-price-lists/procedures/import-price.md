---
title: Importazione da Prezzi fornitori
sidebar_position: 2
---

La form si apre tramite il percorso **Acquisti  Listini fornitori  Procedure  Importazione prezzi fornitori** e permette di selezionare perl'importazione gli articoli precedentemente inseriti tramite l'[Importazione prezzi e articoli fornitore](/docs/applications/bizlink/price-item-supplier). 

Mediante questa procedura è possibile creare o aggiornare le anagrafiche degli articoli selezionati e creare un nuovo listino fornitore con i prezzi aggiornati.

:::important Ricorda
Prima di procedere con l'importazione degli articoli è necessario indicare una corrispondeza tra la *Categoria sconto* utilizzata dal fornitore e quelle codificate nella tabella [Categoria sconto acquisti](/docs/configurations/tables/purchase/category-discounts-price-management/); tale abbinamento va fatto nella procedura di [Corrispondenza categorie sconto acquisti/vendite](/docs/purchase/price-control/correspondence). 
:::

### Filtro

Nella griglia principale sono visualizzati gli stessi risultati della form [Prezzi fornitore](/docs/purchase/purchase-price-lists/procedures/supplier-price), filtrati in base ai dati inseriti nella sezione superiore. Gli articoli possono essere selezionati per l’importazione definitiva apponendo il flag accanto alla *Classe articolo*. Gli articoli che sono già stati codificati avranno un colore riga diverso.   
Nella seconda griglia vengono invece riportati tutti gli articoli selezionati con il flag nella prima griglia. 

*Pulsanti specifici*:      
> **Import**: per eseguire l'importazione degi articoli selezionati, in base ai *Parametri* inseriti nel tab successivo.   
> **Controlla la selezione**: permette di attivare i flag delle righe selezionate nella griglia.   
> **Smarcare**: permette di disattivare i flag delle righe selezionate nella griglia.   

### Parametri

In questo tab è possibile scegliere quali informazioni riportare nell'anagrafica dell'articolo e i parametri secondo cui creare il listino fornitore.   

- **Crea articolo**: se attivo permette la creazione dell'anagrafica degli articoli selezionati, se non esistente.   

- **Aggiorna campi articolo**: permette di selezionare quali dati sovrascrivere nell'anagrafica da aggiornare. Nel caso di creazione di un nuovo articolo i dati relativi ai flag attivi saranno riportati nella nuova anagrafica. I dati che possono essere aggiornati sono: *Descrizione*, *Codice commerciale*, *Barcode*, *Confezionamento*, *Peso*, *Nomenclatura*, *Categoria sconto Acquisti*, *Categoria sconto Vendite*, *Sottocategoria*, *Formula*, *Imballo a rendere*.   

- **Crea listino fornitore**: se attivo permette la creazione del listino fornitore per gli articoli selezionati. I dati obbligatori per la creazione del listino sono **Data inizio validità** e **Divisa**. Opzionalmente è possibile inserire anche la **Data fine validità**.    

- **Conto/Sottoconto**: indica il fornitore per cui creare il listino; sarà riportato anche nell'anagrafica articolo come fornitore preferenziale.   

Nella terza colonna di parametri sono presenti alcuni dati utilizzati solo per la creazione di nuove anagrafiche:
    - **Classe**: se quella indicata per l'articolo nella griglia dei risultati non è codificata a sistema sarà utilizzata la classe indicata in questo campo.       
    - **IVA**: indica l'aliquota IVA da attribuire all'articolo.  
    - **Unità di misura articolo**: indica l'UM principale da usare per l'articolo. 
    - **Fatturato acquisti/vendite**   
    - **Unità di misura prezzo**: indica l'UM a cui è riferito il prezzo del listino fornitore.
    - **UM peso**: indica l'unità di misura da usare per i pesi.     
    - **Formula**: indica la [formula di aggiornamento prezzi](/docs/purchase/price-control/formulas) da abbinare all'articolo.   
    - **Tipo sconto**   
    - **Barcode**   


### Errori

Nella tab **Errori** è possibile consultare eventuali errori avvenuti.   

Nella griglia superiore saranno riportati gli articoli per cui l'importazione non è avvenuta con successo, mentre in quella inferiore sarà indicato anche il *Codice errore*.


### Risultati

Nella tab **Risultati** sono riportati gli articoli importati con successo.