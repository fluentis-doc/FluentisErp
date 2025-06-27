---
title: Inventar Unitate de încărcare
sidebar_position: 9
---

:::important Ce utilizează
Procedura *Inventar UdI* din WMS Fluentis permite realizarea unui inventar precis al unităților de încărcare prezente în gestiune.  
Operatorii pot citi locația pentru a vizualiza UdI conținute și proceda cu înregistrarea cantităților, generând automat mișcări de rectificare pentru alinierea stocurilor scriptice cu cele fizice.
:::  

Această procedură este utilizată pentru a efectua un inventar al UdI prezente în gestiune.

La citirea locației, în tabelul inferior vor fi afișate toate unitățile de încărcare conținute în aceasta, cu următoarele câmpuri:

- **Unitate de încărcare**: indică numărul unității de încărcare conținute în locație;  
- **Tip**: indică tipul unității de încărcare conținute în locație;  
- **Data inventar**: indică ultima dată în care a fost inventariată unitatea de încărcare conținută în locație.  

Următorul pas este citirea unității de încărcare care trebuie inventariată.  
Dacă aceasta se află între cele conținute în locația selectată, **Data inventar** va fi actualizată cu data curentă.  
Dacă unitatea de încărcare citită nu este prezentă în locație, va fi afișat un mesaj de avertizare.  
Butonul **Șterge tot** permite golirea formularului de toate datele introduse.

Odată ce citirile unităților de încărcare sunt finalizate, prin apăsarea butonului **Confirmă**, doar în cazul în care sunt prezente unități de încărcare neinventariate, procedura va crea mișcări de descărcare a acelor unități de încărcare din locația selectată și de încărcare a acestora în locația implicită indicată în șablonul prezent în 
[Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

**Parametrii de încărcare/descărcare (Parametri încărcare/descărcare)** de introdus în tabelul [Parametrii Încărcare/Descărcare pe utilizator (Parametri Încărcare/Descărcare per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |

Parametrii sunt introduși de două ori deoarece formularul utilizează o cauză de descărcare a unității de încărcare din locația de plecare și una de încărcare a unității de încărcare în locația de destinație.

:::note ATENȚIE
Șablonul de încărcare asociat trebuie să aibă conțină o locație implicită în tabel [Șabloanwe de gestiune](/docs/configurations/tables/logistics/warehouse-templates/).
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
