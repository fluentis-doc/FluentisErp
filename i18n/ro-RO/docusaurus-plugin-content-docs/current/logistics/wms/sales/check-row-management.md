---
title: Gestionare bifă și Confirmare dispoziție de livrare
sidebar_position: 2
---

## Gestionare bifă

:::important Utilizare
Gestionarea bifei WMS din Fluentis este un instrument destinat confirmării liniilor dispoziției de livrare efectiv preluate de operator în depozit. Dacă cel puțin o linie este bifată, procedurile de creare a avizului de expediție și a facturii iau în considerare doar aceste linii. În caz contrar, se consideră toate liniile dispoziției de livrare. Acest sistem simplifică și accelerează crearea avizelor de expediție și facturilor, permițând, de asemenea, introducerea manuală a unor noi linii de articole. În plus, gestionarea bifei permite crearea Unitatilor de Încărcare (UdI) în timpul confirmării liniilor dispoziției de livrare, grupând articolele în unități de încărcare. Odată selectată o linie și introduse datele necesare, este posibil să se creeze și să se gestioneze noi UDI cu articolele confirmate.
:::

Pornind de la o dispoziție de livrare existentă, se pot citi articolele prezente și se pot grupa în UdI.  
Din WPF, se poate continua cu crearea avizului sau a facturii.

:::note Notă
În formul de **Gestionare bife** vor fi afișate doar dispozițiile de livrare care au opțiunea *Unitate de încărcare obligatorie* activată în [Tipuri dispoziție de livrare](/docs/configurations/tables/logistics/picking-type/).
:::

### Articole 

În acest tab sunt afișate toate liniile de articole prezente în dispoziția de livrare.

#### Butoane specifice  
> - **Detaliu**: permite poziționarea pe tab-ul **Articole bifate**;  
> - **Confirmă**: după selectarea unei linii în tab **Articole**, se deschide tab-ul **Confirmare** care propune articolul selectat.

### Confirmare

**Cod de introducere** (deci utilizând un cititor de coduri de bare) permite inserarea datelor referitoare la lot, la locație, la *cantitatea de colectat* și la articol, dacă se dorește modificarea acestuia față de cel propus.  
Utilizatorul poate, de asemenea, să schimbe articolul mutându-se în tab **Articole**, unde sunt afișate toate liniile de articole prezente în dispoziția de livrare, selectând cel dorit și apăsând butonul **Confirmă** sau revenind în tab-ul **Confirmare** pentru a introduce datele referitoare la articolul recent selectat.  

În cazul în care utilizatorul confirmă linia unui articol gestionat pe loturi, pentru care nu a fost introdus lotul, va fi afișat un mesaj pentru inserarea acestuia. În tab este prezent și câmpul *Unitate de încărcare* care trebuie completat pentru a putea confirma datele.

#### Butoane specifice  
> - **Detaliu bifă**: permite poziționarea pe tab-ul **Articole bifate**;  
> - **Confirmă**: permite confirmarea datelor introduse și apoi încărcarea datelor referitoare la linia succesivă;  
> - **Nou UdI**: permite crearea unei noi *Unități de încărcare* după ce s-a selectat tipul.  

Sub câmpul *cantitatea de colectare*, este prezent un tabel cu următoarele coloane: *Cantitate*, *Locație* și *Lot*. Acesta se actualizează dinamic, iar de exemplu, dacă este indicat doar articolul, trebuie să arate toate locațiile cu stoc > 0 în care se află acel articol. Dacă este indicat și lotul, trebuie să arate toate locațiile cu stoc > 0 în care se află acel articol cu acel lot.

### UdI 

Permite vizualizarea compunerii *Unităților de încărcare* create pentru dispoziție de livrare-ul curent.          

#### Butoane specifice  
> - **Deschide UdI**: permite vizualizarea detaliului *Unității de încărcare* selectate. În plus, ultima *Unitate de încărcare* deschisă va fi propusă ca *Unitate de încărcare* în care se inserează următoarele articole de confirmat.          

### Articole bifate 

Acest tab se completează după ce a fost selectat un articol în tabul **Articole** din dispoziție de livrare.  
Deci, din lista articolelor dispoziției de livrare, se selectează un articol și în tab-ul **Articole Bifate** sunt afișate toate citirile efectuate ale articolului selectat.  
Când o linie *dispoziție de livrare* este complet procesată, va fi evidențiată cu roșu. Selectând acea linie și apăsând butonul *Detaliu bifă*, se va deschide tab-ul **Articole bifate** unde se vor putea vizualiza liniile confirmate, care pot fi șterse cu butonul *Șterge*.  

:::note Notă
Când este necesar să fie depășită cantitatea indicată în dispoziție de livrare, trebuie să activați opțiunea **Executat în plus** prezent în tabelul [Tipuri dispoziție de livrare](/docs/configurations/tables/logistics/picking-type/).
:::

**Parametrii de încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

Parametrii sunt repetați deoarece form-ul utilizează un șablon de descărcare (fără contrapartidă), pentru a descărca articolele preluate, și unul de încărcare pentru a le încărca în unitățile de încărcare recent create. Este important să se indice, de asemenea, o locație implicită care va fi utilizată pentru a încărca unitatea de încărcare creată recent.    
                                          
Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

## Confirmare dispoziție de livrare

:::important Utilizare
Pornind de la o dispoziție de livrare existentă, fără utilizarea unităților de încărcare, care sunt create utilizând [Gestionare bife](/docs/logistics/wms/sales/check-row-management), cu formul de **Confirmare dispoziție de livrare** este posibil să confirmați fiecare linie ale dispoziției de livrare, pentru a muta articolele între două gestiuni sau locații, creând direct mișcările de gestiune pentru mutare.  
Ulterior, din WPF, se poate continua cu crearea avizului sau a facturii.
:::

:::note Notă
În **Confirmare dispoziție de livrare** vor fi afișate doar dispozițiile de livrare care au opțiunea *Unitate de încărcare obligatorie* dezactivată în [Tipuri dispoziție de livrare](/docs/configurations/tables/logistics/picking-type/).
:::

### Articole 

În acest tab sunt afișate toate liniile de articole prezente în dispoziție de livrare.

#### Butoane specifice
> - **Detaliu**: permite poziționarea pe tab-ul **Articole bifate**;  
> - **Confirmare**: după selectarea unei linii în tab **Articole**, se deschide tab-ul **Confirmare** care propune articolul selectat.

### Confirmare 

**Cod de introducere** (deci utilizând un cititor de coduri de bare) permite inserarea datelor referitoare la lot, la locație, la *cantitatea de colectat* și la articol, dacă se dorește modificarea acestuia față de cel propus.  
În cazul în care utilizatorul confirmă linia unui articol gestionat pe loturi, pentru care nu a fost introdus lotul, va fi afișat un mesaj pentru inserarea acestuia.

#### Butoane specifice
> - **Detaliu**: permite poziționarea pe tab-ul **Articole bifate**;  
> - **Confirmare**: permite confirmarea datelor introduse și ulterior încărcarea datelor referitoare la linia următoare.  

Sub câmpul *cantitatea de colectare*, este prezent un tabel cu următoarele coloane: *Cantitate*, *Locație* și *Lot*. Acesta se actualizează dinamic, iar de exemplu, dacă este indicat doar articolul, trebuie să arate toate locațiile cu stoc > 0 în care se află acel articol. Dacă este indicat și lotul, trebuie să arate toate locațiile cu stoc > 0 în care se află acel articol cu acel lot.

### Articole bifate  

Acest tab se completează după ce a fost selectat un articol în tabul **Articole** din dispoziție de livrare.  
Deci, din lista articolelor dispoziției de livrare, se selectează un articol și în tab-ul **Articole Bifate** sunt afișate toate citirile efectuate ale articolului selectat.  
Când o linie *dispoziție de livrare* este complet procesată, va fi evidențiată cu roșu. Selectând acea linie și apăsând butonul *Detaliu bifă*, se va deschide tab-ul **Articole bifate** unde se vor putea vizualiza liniile confirmate, care pot fi șterse cu butonul *Șterge*.  
Din acest tab, este posibil să selectați un articol bifat și să-l ștergeți.  

:::note Notă
Când este necesar să fie depășită cantitatea indicată în dispoziție de livrare, trebuie să activați opțiunea **Executat în plus** prezent în tabelul [Tipuri dispoziție de livrare](/docs/configurations/tables/logistics/picking-type/).
:::

**Parametrii de încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

:::note Notă
Șablonul utilizat va trebui să fie de descărcare și să aibă un șablon de încărcare în contrapartidă.
:::

Pentru fiecare dispoziție de livrare, va fi creată o singură înregistrare de descărcare cu o singură înregistrare de încărcare în contrapartidă care va conține mișcările tuturor articolelor bifate. 

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).