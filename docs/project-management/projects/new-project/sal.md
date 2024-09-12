---
title: Fattura di Anticipo
sidebar_position: 5
---

In questa tab è possibile gestire le fatture di anticipo relative al progetto, che potranno essere associate ai documenti dell'area progetti, come richieste intervento, interventi pianificati, interventi.
L'associazione ai documenti può avvenire in modo automatico configurando appositi parametri dell'area progetti, oppure manualmente. L'indicazione di questa informazione all'interno dei singoli documenti, permette lo storno automatico delle fatture di anticipo nelle fatture a saldo emesse dalla valorizzazione interventi. 

Le righe di questa tab contengono gli Articoli da fatturare con le relative caratteristiche specifiche:
  
**Tipo Riga**: è possibile scegliere tra il tipo 1-Codificato o 2-Non codificato

**Unità di misura**: Le unità di misura ammesse sono solo di tipo "Tempo". Nonostante questo però, le fatture di anticipo possono essere utilizzate sia per coprire servizi, che materiali e spese accessorie che hanno UM diverse da "Tempo". 

**Quantità**: quantità della fattura di anticipo, utilizzata come valore di partenza per calcolare ed aggiornare la quantità residua. 

**Prezzo unitario**: valore utilizzato come prezzo unitario sia nella fattura di anticipo che nelle righe di storno della fattura di anticipo.

**Fatture di Vendita**: contiene il riferimento della fattura di anticipo generata dal progetto. 

**Tipo**: è possibile scegliere la tipologia di fatturazione tra In conto e A saldo;

**Quantità residua**: Ad ogni valorizzazione interventi verrà stornato dalla quantità originale, il valore corrispondente per ottenere un residuo aggiornato. Il residuo potrà comunque essere aggiornato manualmente tramite l'apposito bottone **Aggiorna Fattura di Anticipo**

**Data ultimo aggiornamento residuo**: indica la data dell'aggiornamento della quantità residua

**Attivo da**: data da cui è attiva la fattura di anticipo, utilizzata per la proposta nei documenti

**Data di chiusura**: data di chiusura della fattura di anticipo, dalla quale non sarà più possibile associare documenti con data successiva

Per ogni riga è possibile emettere fattura direttamente da questa videata utilizzando l'apposito bottone **Valorizza**. Verrà dato un messaggio per il quale scegliere se aprire o meno la fattura generata.
Qualora il bottone Valorizza non fosse attivo, verificare se nel Tipo Progetto in questione è stato indicato il **Tipo Fattura**, necessario per generare la fattura.

![](/img/it-it/project-management/projects/sal.png)

Esempio di gestione 
nella riga articolo inserire la quantità prevista ed il prezzo unitario.
In fase di valorizzazione interventi contenenti riferimenti alle fatture di anticipo, verrà inserita in automatico la riga di storno con riferimento alla fattura di anticipo.
Il totale della riga di storno corrisponderà alla somma di tutti i valori a cui la fattura di anticipo è stata associata, che siano servizi, materiali o spese. 
Una fattura di anticipo può essere utilizzata per coprire anche solo parzialmente un intervento, associandola ad esempio solo ai servizi e non ai materiali e spese. 
Il prezzo unitario della riga di storno verrà preso dal prezzo unitario della fattura di anticipo presente nel progetto. 
Di conseguenza la quantità da stornare verrà calcolata in proporzione al totale da stornare / prezzo unitario fattura di anticipo.

esempio:
fattura di anticipo quantità 10, UM giorni , prezzo unitario 500€ , totale 5000€

intervento
servizio 1 giorno, 500€ associati alla fattura di anticipo
materiale 3 pezzi, totale 300€ associati alla fattura di anticipo

dalla valorizzazione interventi si otterrà:
servizio 1 giorno, 500€
materiale 3 pezzi, totale 300€
storno fattura anticipo quantità 1,6 UM giorni, prezzo unitario 500, totale riga -800

Tramite il controllo del residuo Fattura di anticipo, si avrà un residuo di 8,4 giorni
