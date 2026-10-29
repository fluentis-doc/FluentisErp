---
title: Razine odobrenja
sidebar_position: 23
---

Ova tablica omogućuje proširenje upravljanja blokadom obveza prema dobavljačima primjenom složenijeg sustava odobravanja.

Pretpostavimo da postoje:
- administrativna kontrola računa
- naknadna kontrola računa koju provodi odjel nabave
- završno odobrenje odgovorne osobe

Razine odobrenja mogle bi se definirati na sljedeći način:

![](/img/it-it/configurations/tables/finance/authorization-levels.png)

Razinu *00 – Početna blokada* potrebno je unaprijed postaviti u svakom **šifarniku dobavljača**, na kartici [**Plaćanja**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/). Time se osigurava da se njegove otvorene stavke stvaraju blokirane, s tom početnom razinom odobrenja.

![](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

Korisnici s ulogom *Administracija* (na slici *Fluentis Users*; pogledajte upravljanje korisnicima i korisničkim ulogama u odjeljku ARM) mogu zatim podići stavku na razinu *01*. To je moguće jer je njezina *nadređena razina* 0, a prelaskom na ovu razinu stavka dolazi na razinu 1.

Nakon toga korisnici s ulogom *Nabava* (na slici *Fluentis Admins*) mogu podići stavku na razinu *02*. Njezina je *nadređena razina* 1, a prelaskom na ovu razinu stavka dolazi na razinu 2.

Naposljetku, stavku na završnu razinu *03* može podići isključivo korisnik XXXXXXX (odgovorna osoba), koji time daje konačno odobrenje za plaćanje. Tek se u tom trenutku uklanja blokada stavke, čime ona postaje raspoloživa za plaćanje.

Na svakom koraku može biti obvezan unos napomene o odobrenju, ako je za odgovarajuću razinu aktivirana ta oznaka.

Promjene statusa mogu se provoditi putem obrasca [**Upravljanje likvidnošću**](/docs/finance-area/maturity-values/procedures/cash-management/), pomoću gumba *Odobri stavku*.

Nakon izdavanja odobrenja, iz istog obrasca *Upravljanje likvidnošću* moguće je izravno pripremiti i naloge za plaćanje u modulu *Plaćanja dobavljačima* za odobrene stavke, odnosno za sve stavke koje nisu blokirane. To je alternativa uobičajenom postupku izrade naloga za plaćanje, unutar kojeg se zatim pretražuju i odabiru obveze prema dobavljačima koje treba uključiti.