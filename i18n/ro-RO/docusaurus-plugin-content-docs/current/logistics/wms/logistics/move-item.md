---
title: Mută articol
sidebar_position: 3
---

:::important Utilizare
Procedura permite transferul unui articol dintr-o locație în alta în cadrul gestiunii. Operatorii pot introduce locația de plecare și cea de destinație și pot specifica cantitatea de mutat. În cazul articolelor gestionate pe loturi, este de asemenea posibil să se indice lotul care trebuie mutat. Această procedură generează automat mișcarea de gestiune necesară pentru a înregistra atât descărcarea din vechea locație, cât și încărcarea în noua locație.
:::

Citirea primei locații din form va completa câmpul referitor la locația de plecare, în timp ce a doua va completa locația de destinație.  
Lecturile ulterioare ale locațiilor vor suprascrie doar locația de destinație.  
După citire se va putea insera cantitatea de mutat manual sau cu ajutorul butoanelor **+** și **-**.  
În plus, este posibil să se imprime eticheta codului articolului cu butonului **Listare** sau să se vizualizeze cu butonul **Vizualizare**.          
Butonul **Șterge tot** permite golirea formuluide toate datele introduse.
În cazul în care articolul este gestionat pe loturi, va fi vizibil și câmpul în care trebuie introdus lotul care trebuie mutat.  
La confirmare, se generează mișcarea de gestiune, care în acest caz, pe lângă înregistrarea principală de descărcare, prezintă și înregistrarea de contrapartidă, care a încărcat articolul în noua locație.

:::note Notă
Șablonul utilizat trebuie să fie de descărcare cu un șablon de încărcare în contrapartidă.
:::

**Parametri de încărcare/descărcare** care trebuie introduși în tabelul [Parametrii Încărcare/Descărcare pu utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Nota
Dacă în [Parametrii de gestiune Încărcare/Descărcare pe utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociată pentru acel utilizator o singură gestiune, aceasta va fi propusă implicit. Dacă sunt asociate mai multe, implicit nu va fi propusă niciuna, iar utilizatorul va putea alege doar una dintre cele introduse.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
