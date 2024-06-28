---
title: Riepiloghi
sidebar_position: 5
---

Nei Riepiloghi sono presentate le informazioni principali dell'intero documento.

## Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Spese

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

## Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

## Riepilogo scadenze

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

## Altri campi

**Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;

**Peso netto**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;

**Peso lordo**: viene proposto il peso lordo cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del peso degli articoli corrisponde a quella inserita nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;

**Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab Pesi/Dimensioni*, nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.

**Note finali**: è un campo libero che può essere compilato dall'utente con l'ausilio dell'*Help Codificate*.

## Trasporto

Viene proposto automaticamente il *Trasporto a cura del* presente in anagrafica del cliente.

## Totali documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />