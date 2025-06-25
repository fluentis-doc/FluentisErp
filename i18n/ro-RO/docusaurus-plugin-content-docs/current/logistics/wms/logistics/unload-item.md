---
title: Descărcare articol
sidebar_position: 2
---

:::important Utilizare
Procedura permite preluarea articolelor dintr-o gestiune. Utilizând codul de bare, operatorul poate selecta articolul și locația din care va efectua preluarea, introduce cantitatea de descărcat și, dacă este necesar, lotul specific. Această procedură generează mișcarea de descărcare din gestiune, actualizând stocurile și asigurând înregistrarea corectă a fluxurilor de mărfuri.
:::

În câmpul **Cod de bare**, operatorul va trebui să citească doar codul de bare al articolului, apoi al locației în care dorește să îl descarce.           
Ulterior, va trebui să introducă cantitatea de mișcat, iar odată confirmat, va fi creată și mișcarea de gestiune corespunzătoare.       
În cazul în care articolul este gestionat pe loturi, va fi vizibil și câmpul corespunzător în care se va introduce lotul care trebuie descărcat.  
În plus, este posibil să se imprime eticheta codului articolului cu butonului **Listare** sau să se vizualizeze cu butonul **Vizualizare**.          
Butonul **Șterge tot** permite golirea formuluide toate datele introduse.

:::note Notă
*Cod articol* și *Lot* trebuie să fie prezente în registru.
:::

**Parametri de încărcare/descărcare** care trebuie introduși în tabelul [Parametrii Încărcare/Descărcare pu utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Nota
Dacă în [Parametrii de gestiune Încărcare/Descărcare pe utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociată pentru acel utilizator o singură gestiune, aceasta va fi propusă implicit. Dacă sunt asociate mai multe, implicit nu va fi propusă niciuna, iar utilizatorul va putea alege doar una dintre cele introduse.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
