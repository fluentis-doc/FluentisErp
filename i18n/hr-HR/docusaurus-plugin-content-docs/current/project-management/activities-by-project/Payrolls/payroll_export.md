---
title: Izvoz platnih lista
sidebar_position: 3
---

Klikom na gumb **Izvoz** izvozi se pojedina odabrana obračunska lista, dok je odabirom više redaka u mreži za pretraživanje moguće izvršiti skupni izvoz u jednu datoteku.

Konfiguracija izlaznih zapisa provodi se na sljedećoj putanji:

**Konfiguriranje > Parametri > Administracija > Parametri uvoza plaća**

Na ovom zaslonu nalaze se dva polja, **Knjiženja** i **Vrijednosti**, kojima se određuje koji će se Bizlink tok koristiti za izvoz:

- **Payroll_Export** – za *Zucchetti*;
- **Payroll_ExportExternalCompany** – za TeamSystem;
- **PayrollExport_SistemiPresenze** – za Sistemi i postavlja se u polje **Kretanja**, dok se **PayrollExport_SistemiVoci** postavlja u sljedeće polje **Vrijednosti**. (Sistemi zahtijeva dvije odvojene datoteke – jednu za sate rada i drugu za naknade troškova evidentirane na obračunskoj listi, dok TeamSystem izvozi sve podatke u jednoj datoteci.)

Na putanji:

**Alati > Bizlink > Konfiguriranje > Tokovi**

otvorite stavku **Intercompany**.

Pretraživanjem po pojmu **Payroll** prikazat će se svi standardno dostupni izlazni zapisi, a na istom je zaslonu moguće konfigurirati i nove izlazne zapise prema potrebi.