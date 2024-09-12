---
title: Upravljanje kategorije popusta
sidebar_position: 4
---

U Fluentisu moguće je dodjeljivanje specifičnih popusta po kategorijama artikala unutar dobavljačevog cjenika. 
Za postizanje ovog cilja potrebni su određeni koraci:

- U *Šifarnik artikla* > kartica *popusti na nabavu*, potrebno je unijeti kategoriju popusta s *Datumom početka valjanosti*;  

- U *Šifarnik dobavljača* > kartica *Cjenici* potrebno je unijeti  **Cjenik**, s aktivnim oznakama za **Upravljanje cijenama**;  

- U kartici *Matrica Konfiguracije Popusta* potrebno je unijeti  **Dobavljača**, **Kategoriju popusta za kupovinu**, **Datum valjanosti** i **Popust** (u rešetki *Detalji*);  
- Također, mora postojati **Cjenik dobavljača** koji je važeći na datum valjanosti politike popusta i koji sadrži artikle s dodijeljenom kategorijom popusta u šifarniku, za obnovu osnovne cijene. 

Nakon ovih koraka, prilikom izrade **okumenta o nabavi**, kao što je narudžbenica, popusti se automatski dodjeljuju i za kategorije popusta.

![](/img/it-it/purchase/discount-categories/purchase-order.png)