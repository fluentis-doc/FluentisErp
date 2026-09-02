---
title: Assegnazione codici iva area progetti
sidebar_position: 3
---
In questa pagina sono riassunte le priorità di assegnazione dei codici iva nei documenti dell'area progetti.  

## Nuovo progetto

-	se in anagrafica cliente c’è il codice iva, viene proposto nelle righe progetto, indipendentemente codice iva assegnato all’articolo.  
-	se il codice iva non è presente in anagrafica cliente, viene proposto il codice iva dell’articolo.  
-   se il cliente ha una dichiarazione d’intento valida, il codice iva di esenzione prevale su tutte le regole precedenti.  

## Nuovo intervento 

**Servizi** 
-	viene mantenuto il codice iva indicato in riga progetto, se nella riga di servizio è collegato un progetto.  
-	Se non c’è un progetto collegato, il codice iva viene proposto dall'anagrafica cliente. Se non presente in anagrafica cliente, viene proposto il codice iva dell'articolo.  
-   se il cliente ha una dichiarazione d’intento valida, il codice iva di esenzione prevale su tutte le regole precedenti.  

**Materiali**
-	se in anagrafica cliente è indicato il codice iva, viene proposto nelle righe materiali, indipendentemente dall’articolo e dal progetto.  
-	se in anagrafica cliente non è presente il codice iva, viene proposto dall’articolo, indipendentemente dal progetto collegato.  
-   se il cliente ha una dichiarazione d’intento valida, il codice iva di esenzione prevale su tutte le regole precedenti.  

**Spese**
-	se in anagrafica cliente è presente il codice iva, viene proposto nelle righe di spese, altrimenti il campo rimane nullo.  
-   se il cliente ha una dichiarazione d’intento valida, il codice iva di esenzione prevale su tutte le regole precedenti.  

**Piano di fatturazione**
-	servizi / spese / materiali: viene mantenuto il codice iva indicato nelle righe nelle varie tab.  
-	fuori orario: viene assegnato il codice iva dall’anagrafica cliente se presente, altrimenti viene proposto il codice iva dell’articolo.  
-   se il cliente ha una dichiarazione d’intento valida, il codice iva di esenzione prevale su tutte le regole precedenti.  

## Fatture generate da intervento
-   vengono mantenuti i codici iva indicati nel piano di fatturazione dell’intervento.  
-   se il cliente ha una dichiarazione d’intento valida, il codice iva di esenzione prevale su tutte le regole precedenti.   

