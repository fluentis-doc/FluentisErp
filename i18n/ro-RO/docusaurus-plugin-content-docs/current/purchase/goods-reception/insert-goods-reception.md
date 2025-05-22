---
title: Nouă recepţie mărfuri
sidebar_position: 3
---

Form-ul se află pe calea **Achiziţii > Recepţie mărfuri > Nouă recepţie mărfuri** sau în filtrul de căutare **Recepţii mărfuri**, apăsând butonul *Nou*.

## *Cum să creezi o recepţie mărfuri*

<details>
 
<summary>Clic pentru a vedea pașii esențiali</summary>
 
1. **Introduceți datele obligatorii**: *Tip* și *Furnizor*. *An*, *Număr* și *Data inserării* vor fi propuse automat.  
 
2. **Introduceți articolele**: cu dublu click în câmpul *Cod articol* se deschide Help articole care permite căutarea și selectarea unui articol existent. Toate celelalte date ale rândului, cum ar fi *unitate de măsură*, *cantitate*, *preț*, vor fi propuse automat, dar pot fi modificate.
Alternativ, puteți să selectați ca *Tip rând* un *Articol necodificat* și să introduceți manual datele ulterioare.
 
3. **Introduceți eventuale informații suplimentare** în taburile *Loturi și Numere Seriale* și *Date articol*.
 
</details>

## **1. Date obligatorii**

Pentru a crea recepția mărfurilor, utilizatorul trebuie să introducă următoarele date:

- **Furnizor**: poate fi introdus folosind [help-ul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).
- **Tip document**: predefinit în tabelul [Tipuri recepţie mărfuri](/docs/configurations/tables/purchase/goods-receipt-types). Acest câmp determină intervalul de numerotare a documentului care se introduce și propune automat *Numărul* pe baza datei inserării și a ultimului număr introdus.
- **Număr recepție**: este propus automat în funcție de tip, dar poate fi modificat manual, respectând întotdeauna regula de progresie între dată și număr.
- **Dată recepție**: este propusă automat ca fiind dată curentă, dar poate fi modificată manual, respectând întotdeauna regula de progresie între dată și număr.
- **Proiect**: plasat în partea inferioară a tabelului articolelor, reprezintă proiectul de asociat cu documentul și poate fi selectat utilizând *Help proiecte*.

## **2. Articole**

- **Tip rând** oferă posibilitatea de a selecta, din combo-box, articole cu caracteristici diferite:
> - *Articol codificat*: sunt articolele codificate în registru și pot fi contabilizate în contabilitatea analitică și înregistrate în gestiune. <br />
> - *Articol promo*: este gestionat ca un articol codificat sau necodificat în scopuri fiscale și de gestiune, dar fiind un *Articol promo*, este calculat separat în rezumatele documentului și, în funcție de parametrul *Colectare TVA* se calculează valoarea TVA promo în sarcina sau nu a subiectului.

:::note Notă
Dacă se începe direct cu introducerea articolului, clasa sa, codul și tipul rândului (*Articol codificat*) se introduc automat.
:::


- **Cod**: se referă la *cod articol barcode* inserat în Articole, tab *Cod barcode*.  

- **Clasă/Cod/Descriere articol**: se pot introduce manual sau cu ajutorul Help-ului de câmp, care va propune toate datele introduse în Registrul articolului. După introducerea articolului, Descrierea sa va fi preluată automat din registru. Dacă articolul are Variante, va fi posibilă selectarea variantei dorite din tab-ul Date articol.

- **Cod/Variantă articol furnizor**: se referă la codul pe care furnizorul îl utilizează pentru a identifica articolul și varianta acestuia; această informație este propusă automat dacă în registrul articolului, tab [Furnizori preferențiali](/docs/erp-home/registers/items/create-new-item/) a fost asociat un articol furnizor.

- **Unitate de măsură**: este propusa U.M. principală a articolului, dar utilizatorul are posibilitatea să aleagă o unitate de măsură alternativă.

- **Cantitate document**: este cantitatea U.M. principală; este inserată cantitatea din ordinul furnizor executat; nu este o informaţie obligatorie.

- **Cantitate primită**: reprezintă cantitatea efectiv primită.

- **Preț**: reprezintă *prețul* prezent în ordinul furnizorului, dacă rândul recepție a executat un rând de ordin furnizor, sau *costul ultim* din registrul articolelor.

- **Referință ordin**: dacă rândul a fost creat executând un rând de ordin furnizor, este raportat numărul ordinului finalizat.

- **Locație**: dacă șablonul are o locație implicită, aceasta va fi propusă, altfel poate fi introdusă [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dacă gestiunea este gestionat pe locații.

#### Butoane specifice

> **Executare din ordin**: permite crearea unei recepții mărfuri finalizând rândurile unui ordin furnizor cu procedura [Executare din ordinele furnizorilor](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).

> **Gestionare ambalaje**: permite deschiderea gestionării ambalajelor returnabile folosite în documentul de achiziție. Butonul devine activ dacă documentul este salvat, dar nu încărcat. Cu un clic pe acest buton se deschide form-ull corespunzător unde se introduce cantitatea, se selectează rândul și se efectuează transferul ambalajului selectat în rândurile articolului, făcând clic pe butonul *Execută (Execute)*. În acest form-ul sunt raportate articolele care au fost introduse cu natura *Ambalaj* și care sunt prezente în tabelul [Ambalaje returnabile](/docs/configurations/tables/logistics/package-to-be-returned).

### 2.1 Loturi

În cele două tabele pot fi introduse loturile și numerele de serie care trebuie încărcate în gestiune.
Dacă articolul nu prevede gestionarea [Loturilor și Numerelor Seriale](/docs/erp-home/registers/items/create-new-item), acest tab va fi dezactivat.

#### Buton specific

> **Șterge lot**: permite ștergerea rândului lotului selectat.

### 2.2 Date articol

În cadrul acestui tab sunt raportate/introduse informații suplimentare legate de articol.

- **Articol**: afișează articolul selectat în grila superioară.

- **Variantă**: în acest câmp este posibilă selectarea unei variante a articolului dintre cele codificate anterior în tab-ul [Variante](/docs/erp-home/registers/items/create-new-item) din registrul articolului. Dacă în listă au fost introduse prețuri și/sau reduceri diferite pentru fiecare variantă, ele vor fi actualizate când se selectează o variantă diferită a articolului.

- **Gestiune și șablon**: permite introducerea gestiunii și șablonului de referință de utilizat pentru încărcarea articolelor relevante în gestiune. Dacă rândul articolului a fost preluat dintr-o ordin de achiziție, vor fi propuse gestiunea și șablonul introduse în ordin, altfel pot fi introduse manual pentru fiecare rând articol. Când câmpurile nu sunt completate, în momentul încărcării recepției mărfurilor vor fi utilizate cele introduse în parametrii ordine furnizor, tab [Încărcare](/docs/configurations/parameters/purchase/purchase-orders-parameters).

- **Proiect**: reprezintă proiectul de asociat documentului. Dacă în antetul documentului a fost introdus un proiect, acesta va fi raportat pe toate rândurile articolului; alternativ, poate fi selectat utilizând *Help proiecte*.

- **Unitatea de măsură/Cantitate alternativă**: dacă în [registrul articolului](/docs/erp-home/registers/items/create-new-item) a fost codificată o unitate de măsură alternativă cu flag-ul *Predefinit* și în Parametrii ordine furnizor a fost activat flag-ul *Propunere automată UM alternativă*, aceste valori vor fi propuse automat în momentul introducerii articolului.

### 2.3 Analitica

Poate conține informații despre centrele de cost/profit pe care sunt distribuite valorile articolelor.

Aceste date pot fi introduse manual sau automat (în cazul în care centrele de cost/profit au fost introduse anterior în *registru contact*, *registru articol* sau în *planul de conturi*).

#### Butoane specifice

import DeleteCostCenter from './../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 2.4 Date extra

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />