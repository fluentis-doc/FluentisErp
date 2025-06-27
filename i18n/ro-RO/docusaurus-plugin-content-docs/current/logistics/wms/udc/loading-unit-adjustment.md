---
title: Rectificare unități de încărcare
sidebar_position: 8
---

:::important Utilitate
Funcția Rectificare UdI din WMS Fluentis permite modificarea articolelor conținute într-o unitate de încărcare, permițând rectificări atât pozitive cât și negative.  
Operatorii pot vizualiza toate articolele prezente, varia cantitățile și adăuga sau elimina articole, făcând procesul de actualizare a stocurilor mai precis și eficient.
:::  

#### Câmpuri specifice  
 - **Articol**: indică clasa și codul articolului conținut în unitatea de încărcare;       
 - **Descriere**: indică descrierea articolului conținut în unitatea de încărcare;       
 - **Cantitate**: reprezintă cantitatea articolului conținut în unitatea de încărcare;   
 - **Lot**: indică lotul articolului conținut în unitatea de încărcare (prezent doar dacă este gestionat pe loturi);           
 - **Variantă**: indică varianta articolului conținut în unitatea de încărcare (prezentă doar dacă este gestionată pe variante).      

Selectând unul dintre articole, cu butoanele **+** și **-**, puteți să modificați în pozitiv sau negativ cantitatea raportată în tabel.  
După finalizarea acestor ajustări, cu butonul **Confiră** vor fi confirmate și efectuate mișcările de gestiune de rectificare pozitive și negative în unitatea de încărcare selectată.  
Butoanele **Șterge tot (Șterge tot)** permit golirea formularului de toate datele introduse.  

Dacă se adaugă un articol nou, care nu este prezent în unitatea de încărcare, va fi afișat un mesaj care permite utilizatorului să decidă dacă acest nou articol trebuie adăugat sau nu la unitatea de încărcare. În această situație, dacă articolul (de adăugat) este gestionat pe loturi, trebuie să fie introdus obligatoriu și un lot valid.  
Pentru a elimina un articol, inserați numărul zero în câmpul *cantitate*.   

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |

Parametrii sunt inserați de două ori deoarece formul utilizează un șablon de descărcare pentru rectificările negative și unul de încărcare pentru rectificările pozitive.

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
