---
title: Mutare articolele între două unități de încărcare
sidebar_position: 7
---

:::important Utilizare
Procedura *Mutare articolele între două UDI* din WMS Fluentis permite transferul articolelor de la o unitate de încărcare de plecare la una de destinație.  
Prin scanarea codurilor de bare, operatorul poate vizualiza articolele conținute în prima UdI și, după ce a selectat UdI de destinație, poate muta rapid cantitățile dorite, făcând procesul de manipulare mai eficient.
:::  

La citirea primei unități de încărcare, aceasta este introdusă ca unitate de încărcare de plecare, iar toate articolele conținute în aceasta sunt afișate în tabelul inferior.    
Cea de-a doua citire introduce unitatea de încărcare de destinație, iar fiecare citire ulterioară a unității de încărcare va fi considerată ca nouă destinație.  
Pasul următor este citirea articolului care urmează să fie mutat (care este marcat automat în tabelul inferior) și introducerea cantității.  
Dacă articolul este gestionat pe loturi, câmpul corespunzător pentru inserare va fi afișat.  
După aceasta, va fi suficient să apăsați butonul **Mută** pentru a efectua mișcarea de descărcare din unitatea de încărcare de plecare și de încărcare în unitatea de încărcare de destinație.  
Butonul **Șterge tot** permite golirea formularului de toate datele introduse.  

:::note Reguli pentru utilizarea corectă a formulului:  
- Unitățile de încărcare de plecare și sosire trebuie să fie valide.
- Unitatea de încărcare de plecare trebuie să fie încărcată.
- Articolul scanat trebuie să se afle în unitatea de încărcare de plecare (inclusiv eventualele loturi).
- Unitatea de încărcare de destinație poate să nu fie încărcată doar dacă este goală sau dacă cantitățile tuturor articolelor sale sunt zero. Când cantitățile articolelor din ea sunt mai mari de zero, acea unitate de încărcare trebuie să fie încărcată.
- Nu se poate depăși cantitatea disponibilă în unitatea de încărcare de plecare.
- Pentru crearea mișcării de gestiune este verificată disponibilitatea pentru articol și lot.
- Unitățile de încărcare de plecare și de destinație nu trebuie să fie incluse într-o **Listă de ieșiri UdI / Listă de ambalare** sau într-o **Listă de transfer UdI**.
:::

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |

Parametrii sunt inserați de două ori deoarece formul utilizează un șablon de descărcare din unitatea de încărcare de plecare și una de încărcare în unitatea de încărcare de destinație.

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
