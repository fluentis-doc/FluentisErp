---
title: Definizione politiche sconti
sidebar_position: 1
---

In questa maschera vengono definite le politiche di sconto in base alle impostazioni inserite nelle altre maschere del gruppo 
**Gestione prezzi**.     

Nella prima griglia sono presenti le seguenti colonne:  

>- **Descrizione conto**: contiene l'anagrafica destinataria della politica di sconto.        
>- **Classe**: riguarda la classe articolo destinataria della politica di sconto; è un campo facoltativo.        
>- **Categoria sconto acquisti**: permette di scegliere la categoria sconto acquisti da associare all'anagrafica tra quelle codificate nella tabella [Categoria sconto acquisti](/docs/configurations/tables/purchase/category-discounts-price-management/).    
>- **Dettaglio categoria sconti**: se l'utente vuole gestire anche la *Sottocategoria di sconto* deve riportare in questo campo lo stesso codice utilizzato dal fornitore.  
>- **Data validità**: contiene la validità della politica di sconto; questo permette di applicare diverse politiche in diversi periodi dell'anno.

Nella seconda griglia vengono definiti gli **Sconti** da proporre per le combinazioni della prima griglia. Gli sconti verranno proposti nei documenti intestati all'anagrafica per quella determinata classe articolo. 

### Gestione categorie sconto nei documenti

È possibile assegnare degli sconti per categoria articolo che siano poi ripresi all'interno dei documenti di acquisto. Per fare questo sono necessari alcuni passaggi.

1. Nell'*Anagrafica articolo* > tab *Categoria sconti acquisti* deve essere inserita la categoria di sconto con la *Data inizio validità*;  
2. Nell'*Anagrafica fornitore* > tab *Listini* deve essere inserito il *Listino*, con il flag di **Gestione prezzi** attivo;  
3. Nella *Definizione politiche sconti* deve essere inserito il *Fornitore*, la stessa **Categoria sconto acquisti** inserita nell'anagrafica articolo, la *Data di validità*, lo *Sconto* ed eventualmente la *Classe articoli* a cui associare lo sconto; 
4. Deve inoltre esserci un **Listino fornitore** valido alla data di validità della politica di sconto che contenga gli articoli che hanno in anagrafica la categoria sconto, per la ripresa del prezzo base. 

A questo punto all'inserimento di un documento di acquisto saranno proposti anche gli sconti per categoria sconto.