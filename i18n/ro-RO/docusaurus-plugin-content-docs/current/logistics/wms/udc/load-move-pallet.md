---
title: Încarcă/Mută UdI
sidebar_position: 2
---

:::important Utilitate
Procedura **Încarcă/Mută UdI** din WMS Fluentis simplifică procesul de gestionare a unităților de încărcare. Permite operatorilor să încarce o unitate de încărcare care nu a fost înregistrată în sistem sau să mute o unitate deja încărcată dintr-o locație în alta.
:::

Rapid și ușor, operatorul poate efectua aceste operații citind direct codul de bare al unității de încărcare. 
Dacă aceasta nu este încărcată, procedura propune automat ca locație în care trebuie să fie încărcată UdI locația prezentă în antetul UdI și se activează butonul **Încărcare**, cu ajutorul căruia se creează mișcarea de gestiune în timp real.  
Dacă este deja încărcată, procedura va solicita introducerea locației de destinație a mutării, activând butonul **Mută**, cu ajutorul căruia vor fi create mișcările de descărcare cu contrapartida de încărcare în noua locație.

Butonul **Șterge tot** permite golirea formulului de toate datele introduse.

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |

Parametrii sunt inserați de două ori deoarece formul utilizează atât un șablon de încărcare pentru UdI de încărcat, cât și unul de descărcare pentru unitățile de încărcare deja încărcate și, prin urmare, de descărcat. Șablonul de descărcare trebuie să aibă un șablon de încărcare în contrapartidă.

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).