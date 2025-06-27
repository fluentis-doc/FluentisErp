---
title: Încarcă/Mută UdI Multiplu
sidebar_position: 3
---

:::important Utilitate
Procedura **Încarcă/Mută UdI** din WMS Fluentis simplifică procesul de gestionare a unităților de încărcare. Permite operatorilor să încarce o unitate de încărcare care nu a fost înregistrată în sistem sau să mute o unitate deja încărcată dintr-o locație în alta.
:::

Această procedură este utilizată pentru citirea unei sau mai multor unități de încărcare pentru a putea continua cu *Încărcare masivă*, dacă unitățile de încărcare nu sunt încărcate, sau cu *Mutare masivă*, dacă unitățile de încărcare sunt deja încărcate.

Operatorul poate efectua aceste operațiuni citind direct codul de bare al uneia sau mai multor unități de încărcare.  
Dacă acestea nu sunt încărcate, vor fi adăugate direct în tabelul de sub câmpul *cod de bare*.  
Procedura propune automat ca locație, pentru încărcarea UdI, cea prezentă în antetul UdI și cu butonul **Încărcare** se creează mișcarea de gestiune în timp real.
Dacă este deja încărcată, procedura va solicita introducerea locației de destinație a mutării, activând butonul **Mută**, cu ajutorul căruia vor fi create mișcările de descărcare cu contrapartidă de încărcare în noua locație.          

Butonul **Șterge tot** permite golirea formulului de toate datele introduse.   

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

Parametrii sunt inserați de două ori deoarece formul utilizează atât un șablon de încărcare pentru UdI de încărcat, cât și unul de descărcare pentru unitățile de încărcare deja încărcate și, prin urmare, de descărcat. Șablonul de descărcare trebuie să aibă un șablon de încărcare în contrapartidă.    

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
