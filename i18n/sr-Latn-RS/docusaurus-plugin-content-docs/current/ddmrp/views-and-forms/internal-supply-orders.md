---
title: Interni DDMRP nalozi
sidebar_position: 4
---

# Interni DDMRP nalozi

Interni DDMRP nalozi predstavljaju naloge koje jedna lokacija (osim fabrike) izdaje drugoj lokaciji (uključujući fabriku) radi isporuke potrebne robe.

Lokacija koja zahteva robu ima ulogu kupca prema lokaciji koja robu isporučuje, dok lokacija koja isporučuje robu ima ulogu dobavljača.

Zbog toga ovi nalozi imaju dvostruku funkciju:
- kao nalozi za nabavku u lokaciji koja prima robu,
- kao nalozi koji generišu potrebu u lokaciji koja robu isporučuje.

Podaci naloga uključuju:

- **Odredišno skladište** – odgovara lokaciji koja treba da primi robu i koja je podnela zahtev;
- **Izvorno skladište** – odgovara lokaciji koja treba da isporuči robu.

Sistem za planiranje generiše planirane interne DDMRP naloge nakon izračuna neto pozicije toka (NFP). Takvi nalozi su već popunjeni svim potrebnim podacima i mogu se pretvoriti u stvarne naloge putem odgovarajuće procedure, po potrebi uz dodatne izmene.

Planirani interni DDMRP nalozi ne generišu potrebe u dobavljačkim lokacijama. Potrebe generišu isključivo potvrđeni nalozi.

Ovakav pristup omogućava da DDMRP predlozi naloga ne stvaraju potrebe u dobavljačkim lokacijama sve dok ih odgovorne osobe ne pregledaju i ne pretvore u stvarne naloge, u skladu sa procedurom planiranja po nivoima.

Iz tog razloga fabrika predstavlja logističku jedinicu koja se planira poslednja, nakon što su isplanirani i potvrđeni nalozi logističkih jedinica zaduženih za distribuciju i prodaju robe.

Naravno, interne DDMRP naloge moguće je kreirati i ručno, bez ograničenja.

Datum naloga smatra se datumom potrebe (isto kao datum početka proizvodnog naloga) i zajednički je za sve artikle u nalogu, dok je datum isporuke specifičan za svaki pojedinačni artikl i može se razlikovati.

Ako se odredišna lokacija snabdeva iz druge lokacije koja nije fabrika, vreme isporuke artikala do odredišta jednako je za sve artikle i odgovara lead time-u definisanom u tabeli logističkih lokacija za odredišnu lokaciju (osim ukoliko za određeni artikl nisu definisani izuzeci u tabeli DDMRP parametara).

Ako je dobavljačka lokacija fabrika, DLT svakog artikla u odredišnoj lokaciji obično će biti različit, jer se sastoji od:

- vremena transporta od fabrike do odredišne lokacije (isto za sve artikle u buffer-u te lokacije),
- DLT-a artikla u fabrici, koji predstavlja vreme potrebno za njegovu proizvodnju, ukoliko taj artikl nije buffer u fabrici.

Za svaki artikl u nalogu prikazane su sledeće količine:

- **Naručena količina**
- **Poslata količina**
- **Primljena količina**

Kada vreme transporta nije zanemarljivo, tokom transporta ažurira se poslata količina, dok se primljena količina ažurira tek nakon prijema robe.

Razlozi za izdavanje i prijem robe definišu se u tabeli **Facilities (Logistička struktura)**.