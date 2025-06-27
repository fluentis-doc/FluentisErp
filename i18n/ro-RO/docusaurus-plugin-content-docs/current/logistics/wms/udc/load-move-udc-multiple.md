---
title: Carico/Sposta UDC Multiplo
sidebar_position: 3
---

:::important A cosa serve
La funzione **Carico/Sposta UDC** del WMS di Fluentis è progettata per semplificare il processo di gestione delle unità di carico. Consente agli operatori di caricare un'unità di carico non ancora registrata nel sistema o di spostare un'unità già caricata da una ubicazione a un'altra, tutto tramite la scansione del codice a barre. Grazie a questa funzionalità, il sistema facilita le operazioni di magazzino in tempo reale.
:::

Questa procedura è utilizzata per la lettura di una o più unità di carico per poter procedere al *Carico massivo*, se le unità di carico risultano non caricate o allo *Spostamento massivo* se le unità di carico risultano già essere caricate.   

L’operatore può effettuare queste operazioni leggendo direttamente il barcode di una o più unità di carico, nel caso in cui queste non siano caricate, queste vengono direttamente aggiunte nella griglia sottostante il campo codice barcode.     
La procedura propone automaticamente come ubicazione in cui deve essere caricata l’UDC quella presente nella testata dell'UDC stessa viene abilitato il pulsante **Carico**, con il quale viene creato il movimento di magazzino in tempo reale.        

Dacă este deja încărcată, procedura va solicita introducerea locației de destinație a mutării, activând butonul **Mută**, cu ajutorul căruia vor fi create mișcările de descărcare cu contrapartidă de încărcare în noua locație.          

Butonul **Șterge tot** permite golirea formulului de toate datele introduse.   

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

Parametrii sunt inserați de două ori deoarece formul utilizează atât un șablon de încărcare pentru UdI de încărcat, cât și unul de descărcare pentru unitățile de încărcare deja încărcate și, prin urmare, de descărcat. Șablonul de descărcare trebuie să aibă un șablon de încărcare în contrapartidă.    

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
