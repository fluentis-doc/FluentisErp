---
title: Încărcare articol
sidebar_position: 1
---

:::important Utilizare
Procedura permite înregistrarea precisă a primirii articolelor în gestiuni. Prin această procedură, operatorii pot scana codul de bare al articolului și al locației, introduce cantitatea care trebuie încărcată și, în cazul articolelor gestionate pe loturi, specifica și lotul corespunzător. Odată confirmată operațiunea, mișcarea de gestiune este creată automat, asigurând gestionarea eficientă a stocurilor și trasabilitatea completă.
:::
    
În câmpul **Cod de bare**, operatorul va trebui să citească doar codul de bare al articolului, apoi al locației în care dorește să îl încarce.           
Ulterior, va trebui să introducă cantitatea de mișcat, iar odată confirmat, va fi creată și mișcarea de gestiune corespunzătoare.       
În cazul în care articolul este gestionat pe loturi, va fi vizibil și câmpul corespunzător în care se va introduce lotul care trebuie încărcat.        
În plus, este posibil să se imprime eticheta codului articolului cu butonului **Listare** sau să se vizualizeze cu butonul **Vizualizare**.          
Butonul **Șterge tot** permite golirea formuluide toate datele introduse.

:::note Notă
*Cod articol* și *Lot* trebuie să fie prezente în registrul din Fluentis.
:::

**Parametri de încărcare/descărcare** care trebuie introduși în tabelul [Parametrii Încărcare/Descărcare pu utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadItem |

:::note Nota
Dacă în [Parametrii Încărcare/Descărcare pe utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociată pentru acel utilizator o singură gestiune, aceasta va fi propusă implicit. Dacă sunt asociate mai multe, implicit nu va fi propusă niciuna, iar utilizatorul va putea alege doar una dintre cele introduse.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
