---
title: Evidencija fizičkih kretanja
sidebar_position: 1
---

Ovo je forma u kojoj se unose ili pregledaju podaci koji se koriste za obradu podataka u *kontrolingu*, za nosioce troškova ili za obračun tarifa centara na osnovu količina.

Za određene merne jedinice, kao što su kvadratni metri koje zauzimaju različiti centri za raspodelu troškova poslovne zgrade, unos se vrši ručno na početku godine, unosom podataka u formu ili kopiranjem vrednosti iz prethodne godine pomoću odgovarajućeg dugmeta.

Za druge vrste fizičkih veličina, kao što su radni sati mašina ili radni sati zaposlenih, tabela se može popunjavati putem ***procedure preuzimanja podataka iz proizvodnje***, koja za svaki period sabira podatke iz proizvodnje ili sate rada na projektu. Dodatno, moguće je učitavanje podataka iz Excel tabele putem modela *PhysicalMovingControlling*, koji je dostupan na zahtev u okviru ***Bizlinka***.

Polja dostupna u gornjoj tabeli:

- Referentno [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) podataka
- [***Merna jedinica***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units)
- ***Raspodela perioda*** koja se koristi (obavezno polje za merne jedinice tipa *tok*). Ovim poljem se ***FluentisERP-u*** definiše način raspodele unetih podataka po pojedinačnim periodima unutar zadatog raspona.
- ***Datum*** knjiženja kretanja količina
- Referentna ***godina***
- ***Period od*** – ***Period do*** (raspon perioda na koji se odnose unesene količine)
- ***Status*** (nije moguće menjati), označava da li je red unet ručno ili prikazuje vrstu izvora podataka

Polja dostupna u donjoj tabeli (detalji količina):

- [***Izvorni centar***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- ***Odredišni projekat*** (ako se radi o direktnim količinama povezanim sa projektom)
- [***Odredišni centar***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), odnosno centar za koji je izvorni centar prethodno obavljao rad na tim količinama

:::tip PRIMER
Ako zaposleni iz Tehničke službe priprema tehničke detalje ponude za komercijalni sektor, tada će Tehnička služba biti *izvorni centar*, a komercijalni sektor *odredišni centar*.

I [***Nosioci troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) sa ***Tipom raspodele*** 10 - Prenos na proizvodnju prema standardnoj tarifi, 11 - Direktan prenos prema standardnoj tarifi, 12 - Prenos na proizvodnju prema obračunatoj tarifi odnose se na količine izvornih i/ili odredišnih centara.
:::

- Važeća ***količina*** za red
- Slobodna ***napomena*** za red
- ***Kategorija osnovnog sredstva*** povezana sa unetim redom (koristi se, na primer, za osnovna sredstva u proizvodnji kada se primenjuje amortizacija prema količini)
- ***Odeljenje*** povezano sa redom, korisno u preduzećima sa više aktivnih odeljenja.