---
title: Creează dispoziţia de livrare
sidebar_position: 3
---

:::important Ce este
Procedura a fost concepută pentru a optimiza procesul de colectare a articolelor din gestiune. Această funcționalitate permite utilizatorilor să genereze liste de colectare în mod eficient, începând de la diferitele tipuri de dispoziție de livrare configurabile în sistem. Prin crearea unui dispoziție de livrare, operatorii pot selecta articolele de executat, definind detalii esențiale cum ar fi cantitatea și locația de colectare.

Procedura de gestionare a dispoziție de livrare se compune din diverse interfețe care permit vizualizarea și filtrarea ordinelor clienților, facilitând executarea totală sau parțială a ordinelor prin gestionare automatizată a informațiilor referitoare la articole. În plus, sistemul automatizează numărul de identificare al dispoziție de livrare, bazându-se pe parametrii preconfigurați, garantând astfel trasabilitate și ordine în operațiuni.

Datorită funcționalităților precum monitorizarea stării de executare a liniilor, înregistrarea loturilor și a numerelor de serie, și integrarea cu documente de transport precum avize și facturi, gestionarea dispoziție de livrare în Fluentis oferă o experiență operațională completă și flexibilă. Acest lucru permite companiilor să îmbunătățească eficiența logistică, să reducă erorile în timpul colectării și să asigure o satisfacție mai bună a clienților.
:::

Form-ul se deschide:
 -  de pe calea **Logistică > Dispoziție de livrare > Creează dispoziție de livrare** 

sau prin 

 - butonul **Nou** care se află în form-ul [Caută dispoziție de livrare](/docs/logistics/picking/search-picking).

## 1. Date obligatorii

**Tip dispoziție de livrare (Tipo picking)**: predefinit în *Configurare > Tabele > Logistică > Tipuri dispoziții de livrare*. Acest câmp determină intervalul de numerotare al documentului care se introduce și propune automat numărul dispoziției de livrare în baza datei inserăriiși a ultimului număr introdus;  

**Cont**: reprezintă clientul/ furnizorul de referință (nu este obligatoriu);  

**Număr**: este propus automat în funcție de tip, dar poate fi modificat manual, respectând întotdeauna regula progresiei dintre dată și număr;  

**Data/Ora**: data și ora curente sunt propuse automat, dar pot fi modificate manual, respectând întotdeauna regula progresiei dintre dată și număr.

**Stare**: reprezintă starea documentului (care poate fi *Finalizat*, *De verificat* sau *Suspendat*).

**Stare executare**: poate avea următoarele valori: *Neexecutat*, *Executat*, *Parțial executat* sau *Executat forțat*. Această stare se referă la starea de executare a fiecărei linii.Deci, de exemplu, dacă o linie este executată utilizând opțiunea, **Starea executare** va trece de la *Neexecutat* la *Parțial executat*.    

:::note Notă
Coloana *Document* prezentă în [Caută dispoziție de livrare](/docs/logistics/picking/search-picking) se referă la starea dispoziției de livrare și nu la cea a liniilor, astfel încât va trece în starea executată doar atunci când avizeul sau factura a fost creată.
:::

#### Buton specific

> **Executare din ordin**: permite introducerea articolelor în dispoziția de livrare, executând un ordin client. Butonul va deschide o fereastră în care se pot filtra ordinele clientului dorit. Astfel, se poate executa total sau parțial un ordin complet sau o linie.

## 2. Antet

#### Date necesare pentru mișcarea de gestiune

**Dată ieşire gestiune**: reprezintă data în care trebuie efectuată înregistrarea în gestiune;  
**Utilizator**: reprezintă codul utilizatorului de referință pentru dispoziție de livrare curentă.  
**Gestiunea de ieșire  și de destinație**: informația utilă pentru dispoziție de livrare de transfer;  
**Locație**: reprezintă locația în care se vor încărca articolele;  
**Client/Furnizor**: reprezintă contul pentru care se efectuează mișcarea în gestiune.

## 3. Articole

În tabelul se introduc articolele specificând **Clasă**, **Cod articol** și **Cantitate ieșire**. Se poate insera o **Unitate de măsură alternativă** cu cantitatea corespunzătoare, iar în câmpul **Gestiune** se definește gestiunea mișcării. Este, de asemenea, posibil să se specifice **Locația** din care va fi colectat articolul introdus.

### Loturi

Tab activ doar dacă articolul selectat în tabel este gestionat pe loturi, permite introducerea numărului lotului și a cantității corespunzătoare.

### Numere de serie

Tab activ doar dacă articolul selectat în tabel este gestionat pe numere de serie, permite introducerea numărului de serie care trebuie atribuit articolului respectiv.

### Date extra articol

Permite introducerea și vizualizarea *Datelor extra* referitoare la fiecare linie.  
Pentru o descriere detaliată a datelor extra, se face referire la articolul [Date extra](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Ordine de producție asociate

Dacă articolul este atașat unui ordin de producție, acest tab permite vizualizarea tuturor informațiilor referitoare la ordinul respectivă.

### Documente anexate

Permite atașarea și vizualizarea documentelor referitoare la fiecare articol.  

### Bifă

Acest tab permite vizualizarea liniilor bifate în [Gestionare bifă](/docs/logistics/wms/sales/check-row-management) a WMS.  
În cazul în care **WMS** nu este utilizat, este totuși posibil să se introducă manual noi linii de articole bifate.  
**Gestionare bifă** permite confirmarea liniilor dispoziției de livrare real colectate de operatorul din gestiune. Deci, dacă în acest tabel există cel puțin o linie bifată, procedurile de creare aviz și factură vor lua în considerare doar aceste linii.  
În cazul în care nu există nicio linie în tabelul **Gestionare bifă**, atunci procedurile de creare aviz și factură vor lua în considerare toate liniile din dispoziția de livrare.