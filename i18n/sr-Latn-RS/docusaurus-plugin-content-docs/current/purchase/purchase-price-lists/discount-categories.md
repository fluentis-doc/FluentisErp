---
title: Upravljanje kategorijama popusta
sidebar_position: 4
---

U Fluentisu je moguće dodeljivati specifične popuste po kategorijama artikala unutar cenovnika dobavljača.

Za postizanje ovog cilja potrebno je izvršiti sledeće korake:

- U *Šifarniku artikala* > kartica *Popusti na nabavku*, potrebno je uneti kategoriju popusta sa *Datumom početka važenja*;

- U *Šifarniku dobavljača* > kartica *Cenovnici* potrebno je uneti **Cenovnik**, sa aktivnim oznakama za **Upravljanje cenama**;

- Na kartici *Matrica konfiguracije popusta* potrebno je uneti **Dobavljača**, **Kategoriju popusta za nabavku**, **Datum važenja** i **Popust** (u Grid-u *Detalji*);

- Takođe, mora postojati **Cenovnik dobavljača** koji važi na datum važenja politike popusta i koji sadrži artikle sa dodeljenom kategorijom popusta u šifarniku, radi preuzimanja osnovne cene.

Nakon ovih koraka, prilikom kreiranja **dokumenta nabavke**, kao što je narudžbina, popusti se automatski dodeljuju i za kategorije popusta.

![](/img/it-it/purchase/discount-categories/purchase-order.png)