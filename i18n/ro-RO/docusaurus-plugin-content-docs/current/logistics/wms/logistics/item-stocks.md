---
title: Stoc  
sidebar_position: 5
---

:::important Utilizare
Procedura permite operatorilor să vizualizeze rapid stocurile pentru fiecare articol înregistrat. Prin intermediul unui tabel interactiv, se pot extrage informații detaliate referitoare la stocul de gestiune, unitățile de măsură și loturi. În plus, funcția permite analizarea stocurilor grupate după articol, locație sau proiect, oferind astfel o imagine de ansamblu completă a disponibilității materialelor. Această procedură facilitează monitorizarea stocurilor și permite o gestionare mai precisă și informată a operațiunilor de gestiune, contribuind astfel la optimizarea eficienței logistice globale.
:::

Form-ul prezintă un tabel care își schimbă coloanele în funcție de filtrele introduse pentru căutare.  

- Dacă este citit doar codul unei locații, prin apăsarea butonului **Caută** vor fi afișate în tabela de mai jos rezultatele căutării cu următoarele coloane populate:  
> - **Articol**: reprezintă codul articolului;      
> **Stoc(gest.)**: reprezintă stocul în unitatea de măsură de gestiune (principală);      
> **Unitate de măsură**: reprezintă unitatea de măsură a articolului;          
> **Stoc**: se activează doar dacă flag-ul *Default WMS* este activat în tab-ul [Unități de măsură alternative din registru articol](/docs/erp-home/registers/items/create-new-item). Acest valoare reprezintă stocul exprimat în unitatea de măsură alternativă, calculată pe baza mișcărilor de gestiune;         
> **Stoc (FC)**: se activează doar dacă flag-ul *Default WMS* este activat în tab-ul [Unități de măsură alternative din registru articol](/docs/erp-home/registers/items/create-new-item). Această valoare reprezintă stocul exprimat în unitatea de măsură alternativă, calculată folosind factorul de conversie;               
> **Lot**: reprezintă lotul articolului;       
> **Descriere articol**: reprezintă descrierea articolului;      
> **Variantă**: reprezintă codul variantei articolului;    
> **Descriere variantă**: reprezintă descrierea variantei articolului.     

- Dacă se citește articolul de rectificat, prin apăsarea butonului **Caută** vor fi afișate în tabela de mai jos rezultatele căutării cu următoarele coloane populate:  
> **Locație**: reprezintă locația articolului;        
> **Articol**: reprezintă codul articolului;     
> **Stoc(gest.)**: reprezintă stocul în unitatea de măsură de gestiune (principală);      
> **Unitate de măsură**: reprezintă unitatea de măsură a articolului;          
> **Stoc**: se activează doar dacă flag-ul *Default WMS* este activat în tab-ul [Unități de măsură alternative din registru articol](/docs/erp-home/registers/items/create-new-item). Această valoare reprezintă stocul exprimat în unitatea de măsură alternativă, calculată pe baza mișcărilor de gestiune;         
> **Stoc (FC)**: se activează doar dacă flag-ul *Default WMS* este activat în tab-ul [Unități de măsură alternative din registru articol](/docs/erp-home/registers/items/create-new-item). Această valoare reprezintă stocul exprimat în unitatea de măsură alternativă, calculată folosind factorul de conversie;               
> **Lot**: reprezintă lotul articolului;       
> **Variantă**: reprezintă codul variantei articolului;    
> **Descriere variantă**: reprezintă descrierea variantei articolului.     

:::note Notă
Coloanele referitoare la stoc sunt trei: 
- *Stoc(gest.)* - (gestiune) 
- *Stoc*  
- *Stoc (FC)* - (FC = Factor de conversie)

În cazul utilizării flag-ului **WMS Implicit (Default WMS)** prezent în tab-ul [Unități de măsură alternative din registru articol](/docs/erp-home/registers/items/create-new-item), prima este completată cu unitatea de măsură principală a articolului, a doua este populată cu stocul exprimat în unitatea de măsură alternativă a articolului și dată de suma mișcărilor, iar a treia este dată de stocul exprimat în unitatea de măsură alternativă dar calculată cu factorul de conversie. 
În cazul în care flag-ul **WMS Implicit** nu este activat, coloanele *Stoc* și *Stoc (FC)* nu vor fi completate.
:::

**Parametri încărcare/descărcare** de introdus în tabelul [Parametri Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Acest parametru trebuie introdus doar dacă se dorește filtrarea stocurilor pentru o anumită gestiune (șablonul poate rîmâne necompletat). În caz contrar, dacă nu este introdus, vor fi afișate stocurile din toate gestiunile.

:::note Notă
Dacă în [Parametri Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociat pentru acel utilizator o singură gestiune, aceasta este propusă automat. Dacă există asociate mai multe, implicit nu se propune niciuna și utilizatorul poate alege doar dintre cele introduse.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).