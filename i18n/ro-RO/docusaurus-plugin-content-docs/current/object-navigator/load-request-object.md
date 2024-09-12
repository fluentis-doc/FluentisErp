---
title: Load Request Oggetti
sidebar_position: 2
---

 

### Come visualizzare campi aggiuntivi nelle form


Per aggiungere delle proprietà non presenti nelle form si deve verificare che le proprietà siano presenti nella LoadRequest dell'oggetto.


### Caricare nuove proprietà

**Esempi**:
 - aggiungere la *Partita iva* e il *Codice fiscale* nell'expander del cliente, nella **Testata** degli Ordini clienti.
 - aggiungere lo *SWIFT nella* **griglia** dei Pagamenti degli Ordini clienti.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image01.png)

1. fissare il panel dell'**Object Navigator** in modo da poterlo avere sempre visibile fino alla definizione dei campi aggiuntivi, cioè fino al momento prima di creare il profilo personalizzato.

2. nell'**Object Navigator**, con tasto destro del mouse sul nome dell'oggetto, entrare in **Dettagli** e andare nella sezione **Load Request dell'oggetto** e con tasto destro del mouse selezionare **Nuovo Object Load Request**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image02.png)

3. aprire un *Nuovo Load Request* dove inserire lo stesso codice del *Load Request Standard* e poi salvare in modo che vengano caricate tutte le proprietà dell'oggetto. 

4. ricercare nel tree dell'oggetto le proprietà interessate. 

In questo caso siamo andati sotto la referenza *Cliente* e dentro la referenza *Anagrafica* per trovare *Codice fiscale* e *Partita iva*, e li abbiamo selezionati. 

5. sempre nella stessa form, nella griglia **Based On**, attivare il **Codice** del LoadRequest in modo che in esecuzione vengano caricate tutte le proprietà presenti in questo *Load Request Personalizzato*.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image03.png)

6. chiudere la form.

 
### Aggiungere le proprietà nella testata della form

6.1. a sinistra della form di Fluentis da personalizzare aprire e tenere aperto **Form Navigator**. 

6.2. aprire il tree della form e attivare la form in **Customization Mode**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image04.png)


A questo punto la form viene contornata di rosso:

![](/img/it-it/guide/panels/object-navigator/load-request-object/image05.png)


6.3 nell'**
Object Navigator* cercare le proprietà da aggiungere nella form.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image06.png)

 
6.4. selezionare la voce e trascinarla nel *Form Navigator* esattamente sopra la sezione dove deve essere inserita la proprietà che apparirà nella form di Fluentis.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image07.png)


6.5. *deselezionare Customization Mode* quando si è terminato di personalizzare la form.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image08.png)


### Aggiungere le proprietà nella griglia della form


Per aggiungere le proprietà nelle griglie non serve entrare in Customization mode.


7.1 nell'*Object Navigator* cercare le proprietà da aggiungere. 

7.2 selezionare la voce e trascinarla nella griglia. La form viene contornata di rosso.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image09.png)


Questa proprietà apparirà come ultima colonna che poi dovrà essere trascinata nella posizione desiderata.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image10.png)



8. *creare un profilo* per salvare la personalizzazione.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image11.png)


9. *ripartire* Fluentis per rendere operativa la personalizzazione.