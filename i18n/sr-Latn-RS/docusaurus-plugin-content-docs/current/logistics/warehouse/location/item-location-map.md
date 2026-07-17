---
title: Popis lokacija za artikal
sidebar_position: 3
---

:::important Čemu služi

Funkcionalnost **Popis lokacija za artikal** u Fluentis ERP-u omogućava optimalno upravljanje zalihama pružajući jasan pregled skladišnih lokacija dodeljenih pojedinačnom artiklu.

Pomoću ove funkcionalnosti korisnici mogu jednostavno povezati artikle sa njihovim podrazumevanim skladišnim lokacijama, čime se olakšavaju procesi skladištenja i preuzimanja robe.

Kroz intuitivan interfejs moguće je definisati ključne parametre kao što su pripadajuće skladište, prioritet skladištenja, kao i minimalne i maksimalne zalihe. Sistem takođe omogućava određivanje podrazumevane skladišne lokacije za svaki artikal, čime se optimizuje upravljanje zalihama i povećava operativna efikasnost.

Ova funkcionalnost je posebno korisna za preduzeća koja žele da zadrže potpunu kontrolu nad fizičkim rasporedom robe u skladištu i obezbede visok nivo organizacije i sledljivosti artikala.

:::

Ova forma omogućava dodelu **podrazumevane skladišne lokacije** pojedinačnom artiklu.

Sastoji se od forme za pretragu u kojoj je moguće pregledati sve artikle kojima je već dodeljena podrazumevana skladišna lokacija.

Pritiskom na dugme **Novo** korisnik može odabrati artikal u zaglavlju dokumenta, a zatim u tabeli **Mapa skladišnih lokacija artikala** definisati skladište i podrazumevanu skladišnu lokaciju.

Za svaki artikal moguće je definisati sledeće parametre:

- **Skladište**: skladište kojem pripada podrazumevana skladišna lokacija
- **Opis skladišta**: opis skladišta kojem pripada podrazumevana skladišna lokacija
- **Prioritet**: prioritet podrazumevane skladišne lokacije

:::note PAŽNJA

Sistem će uzeti u obzir isključivo skladišnu lokaciju sa najnižim prioritetom.

Definisana skladišna lokacija ima prednost čak i u odnosu na skladišnu lokaciju postavljenu u [Predlošcima skladišta](/docs/configurations/tables/logistics/warehouse-templates).

:::

- **Minimalna zaliha**: minimalna količina zalihe za podrazumevanu skladišnu lokaciju
- **Maksimalna zaliha**: maksimalna količina zalihe za podrazumevanu skladišnu lokaciju
- **Lokacija (skladišna)**: šifra podrazumevane skladišne lokacije

Za sve funkcionalnosti koje nisu posebno opisane u ovom dokumentu pogledajte dokumentaciju:

[Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common)