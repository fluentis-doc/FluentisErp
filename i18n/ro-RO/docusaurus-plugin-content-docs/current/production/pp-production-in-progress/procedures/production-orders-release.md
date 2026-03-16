---
title: Lansare ordine de producție
description: Procedură pentru lansarea și restaurarea ordinelor de producție în Fluentis, cu gestionarea automată a mișcărilor de stoc.
keywords:
  - ordine de producție
  - lansare ordine
  - restaurare ordine
  - Fluentis ERP
  - producție
sidebar_position: 2
schema: HowTo
tags:
  - producție
  - ordine de producție
  - stoc
  - proceduri
last_update:
  author: Fluentis Documentation Team
---

# Lansare ordine de producție

:::important
Procedura de **Lansare a ordinelor de producție** în Fluentis permite trecerea ordinelor din starea *Lansat* în starea *În execuție*.  
Prin intermediul unei interfețe intuitive, este posibil să filtrați și să selectați ordinele care urmează să fie lansate, generând în același timp mișcările de gestiune aferente pentru preluarea automată a materialelor.  
Aceeași procedură permite și **restaurarea** ordinelor deja lansate, readucându-le la starea anterioară.
:::

Acest form permite astfel:
- schimbarea stării ordinelor de producție;
- generarea mișcărilor de descărcare pentru toate articolele care au în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ai articolului, la *Tip de ieşire* valoarea **Automat**.;
- restaurarea ordinelor deja lansate, prin ștergerea mișcărilor create.

## Filtru

Tabul **Filtru** permite vizualizarea tuturor ordinelor de producție aflate în starea *Lansat* care trebuie încă lansate.  
Sunt disponibile mai multe criterii de selecție pentru restrângerea căutării.

### Procedura de căutare și lansare

1. Setați criteriile de selecție dorite în tabul **Filtru**.
2. Faceți clic pe **Caută** în *ribbon bar* pentru a vizualiza ordinele în tabelul de rezultate.
3. Selectați unul sau mai multe ordine pentru lansare.
4. Faceți clic pe **Lansare ordine** pentru a:
   - actualiza starea ordinelor din *Lansat* în *În execuție*;
   - genera automat mișcările de gestiune de descărcare pentru toate materialele care au, în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ai articolului, la *Tip de ieşire* valoarea **Automat**.  

## Restaurare

Tabul **Restaurare** permite anularea unei lansări deja efectuate, readucând ordinul la starea anterioară și ștergând mișcările de gestiune asociate.

### Funcționarea tabului Restaurare

- După setarea filtrelor, faceți clic pe **Caută**.
- Ordinele lansate și care pot fi restaurate sunt afișate în tabelul de rezultate.
- Selectând un rând, în tabelul de rezultate sunt afișate în tabelul de jos mișcările de gestiune aferente create.

### Procedura de restaurare

1. Setați filtrele și porniți căutarea.
2. Selectați unul sau mai multe ordine în starea *În execuție*.
3. Faceți clic pe **Restaurare** pentru a:
   - readuce starea ordinului din *În execuție* în *Lansat*;
   - șterge mișcările de gestiune generate la lansare.

### Condiții pentru restaurare

Restaurarea este posibilă doar dacă:
- ordinul se află în starea **În execuție**;
- **nu** au fost efectuate declarații de producție.

Restaurarea **nu este posibilă** dacă ordinul este în starea *Executat*, cu excepția cazului în care se revine pas cu pas, începând cu rollback-ul înregistrării declarației de producție.

Ordinele restaurate vor deveni automat vizibile în tabul **Filtru**, de unde pot fi lansate din nou.

## Rezumat și detalii suplimentare

Procedura de **Lansare ordine de producție** din Fluentis permite:
- gestionarea trecerii de la starea *Lansat* la *În execuție* a ordinelor de producție;
- generarea automată a mișcărilor de gestiune pentru preluarea materialelor;
- restaurarea ordinelor lansate atunci când nu au fost încă declarate.

Pentru detalii suplimentare despre funcționalități conexe:
- [Parametrii MRP ai articolelor](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- [Funcționalități, butoane și câmpuri comune](/docs/guide/common)