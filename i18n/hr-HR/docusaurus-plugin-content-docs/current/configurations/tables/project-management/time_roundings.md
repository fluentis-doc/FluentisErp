---
title: Vremenska zaokruživanja
sidebar_position: 24
---

Tablica se nalazi u izborniku Konfiguracija > Tablice > Upravljanje projektima > Vremenska zaokruživanja.

U ovoj se tablici definiraju pravila zaokruživanja koja se primjenjuju u planu fakturiranja na sate usluge prijavljene u intervencijama.

**Minute** označavaju početak raspona koji se koristi za određivanje zaokruživanja na temelju broja sati usluge obavljene intervencijom.

**Zaokruživanje** označava broj minuta na koji se zaokružuje.

**Tolerancija** označava broj minuta tolerancije prije primjene zaokruživanja ili prelaska na sljedeći raspon.

Tablica funkcionira prema načelu raspona.

Primjerice, ako se sve intervencije želi zaokruživati na višekratnike od 2 sata, dovoljno je konfigurirati:

>> Minute 0 > Zaokruživanje u minutama 120 > Tolerancija 0

>> To znači da će se od 0 minuta nadalje sati uvijek zaokruživati na višekratnike od 2 sata. Tolerancija označava vremenski razmak nakon kojeg se primjenjuje sljedeći raspon.

>> Primjer:
- Intervencija A: 1 h i 30 minuta > fakturiraju se 2 sata
- Intervencija B: 2 h i 10 minuta > fakturiraju se 4 sata
- Intervencija C: 8 h i 30 minuta > fakturira se 10 sati

Dodavanjem tolerancije od, primjerice, 15 minuta, intervencija B fakturirat će se kao 2 sata.

Dodavanjem još jednog raspona moguće je, primjerice, prilagoditi zaokruživanje za sate nakon prvih 8 sati:

>> Minute 0 > Zaokruživanje u minutama 120 > Tolerancija 0

>> Minute 480 > Zaokruživanje u minutama 30 > Tolerancija 0

Prema tome, u prethodnom primjeru intervencija C fakturirat će se kao 8 h i 30 minuta. Da je intervencija C trajala 8 h i 15 minuta, također bi se fakturiralo 8 h i 30 minuta jer je predviđeno zaokruživanje na pola sata.

Ako se, primjerice, želi fakturirati isključivo 4 ili 8 sati, moguće je konfigurirati:

>> Minute 0 > Zaokruživanje 240 minuta > Tolerancija 0

>> Minute 240 > Zaokruživanje 240 minuta > Tolerancija 0

>> Minute 480 > Zaokruživanje 1 minuta > Tolerancija 0, čime se osigurava da se nakon 8 sati više ne primjenjuje zaokruživanje.