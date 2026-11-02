---
title: Vremenska zaokruživanja
sidebar_position: 24
---

Tabela se nalazi u meniju Konfiguracija > Tabele > Upravljanje projektima > Vremenska zaokruživanja.

U ovoj tabeli definišu se pravila zaokruživanja koja se primenjuju u planu fakturisanja na sate usluge prijavljene u intervencijama.

**Minute** označavaju početak raspona koji se koristi za određivanje zaokruživanja na osnovu broja sati usluge obavljene intervencijom.

**Zaokruživanje** označava broj minuta na koji se zaokružuje.

**Tolerancija** označava broj minuta tolerancije pre primene zaokruživanja ili prelaska na sledeći raspon.

Tabela funkcioniše prema principu raspona.

Na primer, ako se sve intervencije žele zaokruživati na višekratnike od 2 sata, dovoljno je konfigurisati:

>> Minute 0 > Zaokruživanje u minutima 120 > Tolerancija 0

>> To znači da će se od 0 minuta nadalje sati uvek zaokruživati na višekratnike od 2 sata. Tolerancija označava vremenski interval nakon kojeg se primenjuje sledeći raspon.

>> Primer:
- Intervencija A: 1 h i 30 minuta > fakturišu se 2 sata
- Intervencija B: 2 h i 10 minuta > fakturišu se 4 sata
- Intervencija C: 8 h i 30 minuta > fakturiše se 10 sati

Dodavanjem tolerancije od, na primer, 15 minuta, intervencija B fakturisaće se kao 2 sata.

Dodavanjem još jednog raspona moguće je, na primer, prilagoditi zaokruživanje za sate nakon prvih 8 sati:

>> Minute 0 > Zaokruživanje u minutima 120 > Tolerancija 0

>> Minute 480 > Zaokruživanje u minutima 30 > Tolerancija 0

Prema tome, u prethodnom primeru intervencija C fakturisaće se kao 8 h i 30 minuta. Da je intervencija C trajala 8 h i 15 minuta, takođe bi se fakturisalo 8 h i 30 minuta jer je predviđeno zaokruživanje na pola sata.

Ako se, na primer, želi fakturisati isključivo 4 ili 8 sati, moguće je konfigurisati:

>> Minute 0 > Zaokruživanje 240 minuta > Tolerancija 0

>> Minute 240 > Zaokruživanje 240 minuta > Tolerancija 0

>> Minute 480 > Zaokruživanje 1 minut > Tolerancija 0, čime se osigurava da se nakon 8 sati više ne primenjuje zaokruživanje.