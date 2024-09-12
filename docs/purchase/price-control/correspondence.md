---
title: Corrispondenza categorie sconto acq/ven
sidebar_position: 3
---

In questa maschera è possibile consultare e inserire nuove corrispondenze per categorie di sconto. Viene utilizzata per la procedura di [Importazione da Prezzi fornitore](/docs/purchase/purchase-price-lists/procedures/import-price) e consente di abbinare la *Categoria sconto* del fornitore alle *Categoria sconto vendite* e *Categorie sconto acquisti* codificate ed utilizzate in Fluentis in base alle condizioni di sconto da applicare ai propri clienti/fornitori.    

La categoria di sconto generica (per es. quella della casa madre) viene associata ad una categoria di sconto per la vendita e ad una categoria di sconto per l'acquisto.    
I rivenditori possono infatti ricevere dalla casa madre il catalogo (Importato con la procedura [Prezzi fornitore](/docs/purchase/purchase-price-lists/procedures/supplier-price)), a cui è applicato un prezzo con una categoria di sconto; i rivenditori venderanno a loro volta il prodotto applicando una categoria di sconto diversa. Diversi fornitori possono avere uguale *Categoria sconto* ma diversa *Categoria sconto vendita e acquisti*, in quanto hanno la stessa casa madre, ma applicano condizioni di sconto differenti.   
 
Le informazioni contenute nella griglia sono:           

>- **Classe articolo**: contiene la classe articolo alla quale viene associata una determinata categoria di sconto.  
>- **Conto/Sottoconto/Descrizione**: contiene l'anagrafica a cui è associata la categoria di sconto.        
>- **Cat. sconto vend.**: contiene la categoria di sconto con la quale l'anagrafica vende l'articolo; permette di scegliere un valore tra quelli precedentemente codificati nella tabella [Categorie sconti gestione prezzi](/docs/configurations/tables/sales/category-discounts-price-management/).     
>- **Cat. sconto acq.**: contiene la categoria di sconto con la quale l'anagrafica compra l'articolo; permette di scegliere un valore tra quelli precedentemente codificati nella tabella [Categoria sconto acquisti](/docs/configurations/tables/purchase/category-discounts-price-management/).        
>- **Formule di aggiornamento**: permette di associare una eventuale [formula di aggiornamento politiche prezzi/sconti](/docs/purchase/price-control/formulas) da utilizzare nelle procedure di aggiornamento dei prezzi.
>- **Da data validità**: contiene la data dalla quale considerare la categoria di sconto per la classe articolo; in questo modo è possibile associare diverse categorie in periodi diversi dell'anno.         
>- **Categoria sconti**: questo è il campo che lega il modulo acquisti con il modulo vendite e contiene la categoria sconti applicata dalla casa madre. Deve riportare la stessa *Categoria sconto* della casa madre che si trova anche nella form dei [Prezzi fornitore](/docs/purchase/purchase-price-lists/procedures/supplier-price).

Per poter effettuare l'[Importazione da Prezzi Fornitore](/docs/purchase/purchase-price-lists/procedures/import-price) è necessario inserire una nuova riga nella tabella indicando:
- la *classe* degli articoli di cui si vuole effettuare l'importazione,
- l'*anagrafica* del *contatto* a cui viene associata, 
- le *categorie sconto vendite e acquisti* scelte tra quelle codificate a sistema,
- la *categoria sconti* del produttore, uguale a quella presente nella griglia degli articoli, 
- eventualmente, una *data validità* e una *formula*. 