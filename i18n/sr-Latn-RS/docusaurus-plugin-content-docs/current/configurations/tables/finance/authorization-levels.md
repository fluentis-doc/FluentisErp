---
title: Nivoi odobravanja
sidebar_position: 23
---

Ova tabela omogućava proširenje upravljanja blokadom obaveza prema dobavljačima primenom složenijeg sistema odobravanja.

Pretpostavimo da postoje:
- administrativna kontrola fakture
- naknadna kontrola fakture koju sprovodi odeljenje nabavke
- završno odobrenje odgovornog lica

Nivoi odobravanja mogli bi se definisati na sledeći način:

![](/img/it-it/configurations/tables/finance/authorization-levels.png)

Nivo *00 – Početna blokada* potrebno je unapred podesiti u svakom **šifarniku dobavljača**, na kartici [**Plaćanja**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/). Time se obezbeđuje da se njegove otvorene stavke kreiraju blokirane, sa ovim početnim nivoom odobravanja.

![](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

Korisnici sa ulogom *Administracija* (na slici *Fluentis Users*; pogledajte upravljanje korisnicima i korisničkim ulogama u odeljku ARM) mogu zatim da podignu stavku na nivo *01*. To je moguće zato što je njen *nadređeni nivo* 0, a prelaskom na ovaj nivo stavka dolazi na nivo 1.

Nakon toga korisnici sa ulogom *Nabavka* (na slici *Fluentis Admins*) mogu da podignu stavku na nivo *02*. Njen *nadređeni nivo* je 1, a prelaskom na ovaj nivo stavka dolazi na nivo 2.

Na kraju, stavku na završni nivo *03* može da podigne isključivo korisnik XXXXXXX (odgovorno lice), čime daje konačno odobrenje za plaćanje. Tek se u tom trenutku uklanja blokada stavke, pa ona postaje raspoloživa za plaćanje.

U svakom koraku može biti obavezan unos napomene o odobrenju ako je za odgovarajući nivo aktivirana ta oznaka.

Promene statusa mogu se sprovoditi putem obrasca [**Upravljanje likvidnošću**](/docs/finance-area/maturity-values/procedures/cash-management/), pomoću dugmeta *Odobri stavku*.

Nakon izdavanja odobrenja, iz istog obrasca *Upravljanje likvidnošću* moguće je direktno pripremiti i naloge za plaćanje u modulu *Plaćanja dobavljačima* za odobrene stavke, odnosno za sve stavke koje nisu blokirane. To je alternativa uobičajenom postupku izrade naloga za plaćanje, u okviru kojeg se zatim pretražuju i biraju obaveze prema dobavljačima koje treba uključiti.