---
title: Zapis fizičkih kretanja
sidebar_position: 1
---

Ovo je obrazac gdje se unose ili pregledavaju podaci koji se koriste za obradu podataka u *kontrolingu*, za nositelje troškova ili za izračun tarifa centara prema količinama.
Za određene jedinice mjere, poput kvadratnih metara koje zauzimaju različiti centri za raspodjelu troškova poslovne zgrade, unos se vrši ručno početkom godine, unosom podataka u formu ili dupliciranjem vrijednosti iz prethodne godine pomoću
odgovarajućeg gumba. Za druge vrste fizičkih veličina, poput radnih sati strojeva ili sati rada zaposlenika,
tablica se može popunjavati putem ***procedure dohvata podataka iz proizvodnje***, koja za svaki period zbraja
podatke iz proizvodnje ili sate rada na projektu. Dodatna mogućnost je učitavanje iz Excel tablice putem
modela *PhysicalMovingControlling* koji je na zahtjev dostupan u ***Bizlinku***.


Polja dostupna u gornjoj mreži:

- Referentno [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) podataka

- [***Mjerna jedinica***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units)

- ***Distribucija razdoblja*** koja se koristi (obavezno polje za jedinice mjere *toka*). Ovim poljem ***FluentisERP-u*** se daje uputa kako raspodijeliti uneseni podatak na pojedine periode unutar definiranog raspona.

- ***Datum*** knjiženja kretanja količina

- Referentna ***godina*** 

- ***Period od***  - ***Period do*** (raspon perioda na koje se odnose unesene količine)

- ***Status***, (nije moguće uređivati), označava je li redak unesen ručno ili prikazuje vrstu izvora podataka

Polja dostupna u donjem obracu (detalji količina):
- [***Izvorni centar***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)

- ***Odredišni projekt***, (ako se radi o izravnim količinama vezanim uz projekt)

- [***Odredišni centar***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), tj. centar za koji je izvorni centar prethodno obavljao rad na tim količinama

:::tip PRIMJER
Ako zaposlenik Tehničkog ureda priprema tehničke detalje ponude za komercijalni odjel, tada će Tehnički ured biti *centar podrijetla*, a komercijalni odjel *odredišni centar*. I [***Nositelji troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) s ***Vrstom distribucije*** 10 - Prijenos na proizvodnju prema standardnoj tarifi, 11 - Izravni prijenos prema standardnoj tarifi, 12 - Prijenos na proizvodnju prema izračunatoj tarifi odnose se na količine centara podrijetla i/ili odredišta
:::

- Valjana ***količina*** za redak

- Slobodna ***bilješka*** za redak

- ***Kategorija osnovnog sredstva*** vezanog uz uneseni redak (koristi se npr. za osnovna sredstva u proizvodnji ako se koriste
amortizacije prema količini)

- ***Odjel*** vezan uz redak, korisno u poduzećima s više aktivnih odjela.
