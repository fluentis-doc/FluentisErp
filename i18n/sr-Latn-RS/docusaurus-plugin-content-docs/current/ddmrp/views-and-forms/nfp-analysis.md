---
title: Analiza Net Flow Position
sidebar_position: 3
---

Ovaj izveštaj prikazuje najvažnije informacije povezane sa procesom planiranja DDMRP buffer-a.
U delu za filtriranje potrebno je odabrati datum za koji želite da pregledate podatke.
Automatski će biti predložen poslednji datum za koji je izvršen izračun NFP-a.
Ako izračun nije izvršen za tekući datum, potrebno je zatvoriti obrazac, pokrenuti izračun NFP-a, a zatim ponovo otvoriti izveštaj.

Prikazuju se sledeće informacije:
- **Tip artikla** – tip artikla definisan kroz buffer profil za dati red;
- **DLT (Decoupled Lead Time)** – razdvojeno vreme nabavke/proizvodnje;
- **TOR (Top of Red)** – gornja granica crvene zone;
- **TOY (Top of Yellow)** – gornja granica žute zone, izračunata kao:

  > TOY = Crvena zona + Žuta zona
- **TOG (Top of Green)** – gornja granica zelene zone, izračunata kao:
  > TOG = TOY + Zelena zona

Pored navedenih podataka prikazuju se i ostale vrednosti korišćene u izračunu neto pozicije toka (NFP).
Za detaljno objašnjenje svih preostalih kolona i njihovog značenja pogledajte dokumentaciju procedure **Ažuriranje vrednosti Net Flow Position (NFP)**.