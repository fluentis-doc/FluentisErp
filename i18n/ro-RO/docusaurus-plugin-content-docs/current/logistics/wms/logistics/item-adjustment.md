reprezintă---
title: Rectificare articol 
sidebar_position: 4
---

:::important Utilitate
Procedura este utilizată pentru a corecta stocurile articolelor din gestiune, permițând operatorului să facă corecții pozitive sau negative. Datorită unei interfețe clare, operatorul poate căuta articolul de rectificat, vizualiza informațiile relevante și modifica cantitatea direct în tabel. Confirmând modificarea, sistemul generează automat mișcările de rectificare, asigurând o actualizare precisă a stocurilor.
:::

Form-ul prezintă un tabel care își schimbă coloanele în funcție de filtrele introduse pentru căutare.  

- Dacă este citit doar codul unei locații, prin apăsarea butonului **Caută** vor fi afișate în tabela de mai jos rezultatele căutării cu următoarele coloane populate:  
> - **Articol**: reprezintă codul articolului;  
> - **Unitate de măsură**: reprezintă unitatea de măsură a articolului;  
> - **Cantitate**: reprezintă cantitatea pe care operatorul o poate modifica manual sau cu butoanele **+** și **-**;  
> - **Stoc**: reprezintă stocul articolului calculat pe baza mișcărilor de gestiune;  
> - **Stoc (FC)**: se activează doar dacă flag-ul *Default WMS* este activat în tab-ul [Unități de măsură alternative din registru articol](/docs/erp-home/registers/items/create-new-item). Această valoare reprezintă stocul exprimat în unitatea de măsură alternativă, calculat folosind factorul de conversie;  
> - **Lot**: reprezintă lotul articolului.

- Dacă se citește articolul de rectificat, prin apăsarea butonului **Caută** vor fi afișate în tabela de mai jos rezultatele căutării cu următoarele coloane populate:  
> - **Locație**: reprezintă locația articolului;  
> - **Unitate de măsură**: reprezintă unitatea de măsură a articolului;  
> - **Cantitate**: reprezintă cantitatea pe care operatorul o poate modifica manual sau cu butoanele **+** și **-**;  
> - **Stoc**: reprezintă stocul articolului calculat pe baza mișcărilor de gestiune;  
> - **Stoc (FC)**: se activează doar dacă flag-ul *Default WMS* este activat în tab-ul [Unități de măsură alternative adin registru articol](/docs/erp-home/registers/items/create-new-item). Această valoare reprezintă stocul exprimat în unitatea de măsură alternativă, calculat folosind factorul de conversie;  
> - **Lot**: reprezintă lotul articolului.  

:::note **Stoc** și **Stoc (FC)**
Dacă flag-ul *Default WMS* este activat în tab-ul [Unități de măsură alternative din registru articol](/docs/erp-home/registers/items/create-new-item), valorile din câmpurile **Stoc** și **Stoc (FC)** vor fi exprimate în unitatea de măsură alternativă corespunzătoare. Cu toate acestea, dacă articolul este gestionat pe loturi, valorile din câmpurile **Stoc** și **Stoc (FC)** vor fi exprimate în unitatea de măsură principală a articolului, chiar dacă flag-ul *Default WMS* este activat.
:::

Pentru a putea continua cu rectificarea, este necesar ca în tabelul de rezultate să fie prezent o singură înregistrare.  
În acest moment, operatorul nu va trebui decât să modifice cantitatea manual, schimbând valoarea direct în tabel, sau prin intermediul butoanelor **+** și **-**. Apăsând apoi butonul **Confirmă**, se vor crea mișcările de rectificare corespunzătoare, fie ele pozitive sau negative.

De asemenea, este posibilă tipărirea etichetei codului articolului cu butonul **Listează** sau să vizualizați un preview direct pe terminal cu butonul **Vizualizează**.

**Parametri de încărcare/descărcare** care trebuie introduși în tabelul [Parametrii Încărcare/Descărcare pu utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

Parametrii sunt introduși de două ori deoarece form-ul utilizează atât un șablon de încărcare pentru rectificările pozitive, cât și un șablon de descărcare pentru rectificările negative.

:::note Notă
Dacă în [Parametrii Încărcare/Descărcare pe utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociată pentru acel utilizator o singură gestiune, aceasta va fi propusă implicit. Dacă sunt asociate mai multe, implicit nu va fi propusă niciuna, iar utilizatorul va putea alege doar una dintre cele introduse.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).