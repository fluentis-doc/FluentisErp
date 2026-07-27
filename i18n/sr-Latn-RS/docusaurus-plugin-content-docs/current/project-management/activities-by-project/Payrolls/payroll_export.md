---
title: Izvoz platnih lista
sidebar_position: 3
---

Klikom na dugme **Izvoz** izvozi se pojedinačno izabrana obračunska lista, dok je izborom više redova u mreži za pretragu moguće izvršiti grupni izvoz u jednu datoteku.

Konfiguracija izlaznih zapisa vrši se na sledećoj putanji:

**Konfigurisanje > Parametri > Administracija > Parametri uvoza plata**

Na ovom ekranu nalaze se dva polja, **Knjiženja** i **Vrednosti**, kojima se određuje koji će se Bizlink tok koristiti za izvoz:

- **Payroll_Export** – za *Zucchetti*;
- **Payroll_ExportExternalCompany** – za TeamSystem;
- **PayrollExport_SistemiPresenze** – za Sistemi i postavlja se u polje **Kretanja**, dok se **PayrollExport_SistemiVoci** postavlja u sledeće polje **Vrednosti**. (Sistemi zahteva dve odvojene datoteke – jednu za sate rada, a drugu za naknade troškova evidentirane na obračunskoj listi, dok TeamSystem izvozi sve podatke u jednoj datoteci.)

Na putanji:

**Alati > Bizlink > Konfigurisanje > Tokovi**

otvorite stavku **Intercompany**.

Pretragom po pojmu **Payroll** prikazaće se svi standardno dostupni izlazni zapisi, a na istom ekranu moguće je konfigurisati i nove izlazne zapise prema potrebi.