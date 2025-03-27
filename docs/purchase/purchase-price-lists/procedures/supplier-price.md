---
title: Prezzi fornitore
sidebar_position: 1
---

La form si apre tramite il percorso **Acquisti > Listini fornitori > Procedure > Prezzi fornitore**.

In questa form è possibile consultare i risultati dell’[Importazione prezzi e articoli fornitore](/docs/applications/bizlink/price-item-supplier). Tutti gli articoli importati tramite bizlink con i rispettivi prezzi vengono inseriti in questa maschera da cui è possibile consultarli e scegliere quali trattare.

Questa procedura è utilizzata molto per l’importazione dei cataloghi: mediante l'*importazione prezzi e articoli fornitore* vengono inseriti in questa maschera tutti gli articoli presenti nel catalogo del fornitore. Successivamente l'utente può cercare e scegliere gli articoli che vuole gestire. La maschera permette di capire il prezzo di acquisto di un articolo senza che questo sia stato precedentemente codificato e inserito in un listino e di codificare poi solo gli articoli che si andrà effettivamente a gestire.

I dati principali della griglia sono:  
- **Classe articolo**: questo dato sarà presente solo nel caso in cui l’articolo sia preesistente, altrimenti se solo importato non avrà una classe articolo assegnata.            
- **Codice articolo**: questo dato segue le regole del precedente; è possibile distinguere gli articoli importati da quelli non importati anche dal fatto che i primi hanno un colore diverso.             
- **Fornitore**: questo dato indica il fornitore di cui è stato importato il catalogo e andrà a popolare il *Fornitore preferenziale* nell’anagrafica articolo, una volta creato.    
- **Data importazione**: contiene la data nella quale è avvenuta l’importazione in excel.       
- **Data inizio validità**: contiene la data inizio validità inserita nel foglio excel.          
- **Codice/Descrizione articolo fornitore**: indica il codice dell'articolo fornitore che sarà riportato anche nell'anagrafica articolo, tab [fornitori preferenziali](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors).    
- **Unità di misura**: indica l'unità di misura utilizzata nel catalogo del fornitore.   
- **Qantità**: indica la quantità a cui è riferito il **Prezzo** dell'articolo.  
- **Categoria sconto**: indica la categoria di sconto alla quale appartiene l’articolo e che deve essere abbinata alla categoria sconto acquisti codificata in Fluentis. La colonna *Categoria sconto* è presente anche nella [Definizione politiche sconti](/docs/purchase/price-control/definition), nella quale è possibile consultare gli sconti applicati dal fornitore.     
- **Sottocategoria sconto**: codice che va a specificare meglio le sottocategorie di appartenenza; viene utilizzato sopprattutto per listini molto grandi. Gli utenti che desiderano gestire anche la sottocategoria di sconto devono riportare nel campo *Dettaglio categoria sconti* della [Definizione politiche sconti](/docs/purchase/price-control/definition) lo stesso codice presente in questa colonna.    



:::important Ricorda
Prima di procedere con la procedura di **Importazione da Prezzi fornitore** è necessario indicare una corrispondeza tra la *Categoria sconto* utilizzata dal fornitore e quelle codificate nella tabella [Categoria sconto acquisti](/docs/configurations/tables/purchase/category-discounts-price-management/); tale abbinamento va fatto nella procedura di [Corrispondenza categorie sconto acquisti/vendite](/docs/purchase/price-control/correspondence). 
:::

Una volta identificati gli articoli da importare, cliccando sul pulsante **Importazione** nella ribbon bar si aprirà la procedura [Importazione da Prezzi fornitore](/docs/purchase/purchase-price-lists/procedures/import-price).
