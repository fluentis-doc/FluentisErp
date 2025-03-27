---
sidebar_position: 1
title: Poseban režim PDV-a za poljoprivredu
---

Poljoprivredni PDV predviđa nedetrabilnost PDV-a za kupnje koje podliježu ovom režimu i primjenu kompenzacijske stope za prodaje u okviru istog režima: umjesto da se odbije PDV na kupnje kao u običnom režimu, PDV na kupnje je uvijek nedetrabilan, dok se PDV na prodaje mora platiti samo djelomično s fiksnim izračunom, bez ikakve veze s kupnjama u razdoblju, primjenjujući varijabilne kompenzacijske postotke ovisno o vrsti prodanog dobra.

### Preliminarna obrada tablica

Za upravljanje kompenzacijskim postotkom prvo ćemo definirati potrebne PDV stope za prodaju, u kojima ćemo iskoristiti ‘postotak nedetrabilnosti’ za izračun:

![](/img/it-it/finance-area/other/agr1.png)

U osnovi, ako PDV X ima kompenzacijski postotak Y, Y će biti označen u stupcu ‘% IVA agr. detr.’ (kao informativni podatak prikazan u ispisu za PDV obračun), dok će biti valoriziran s rezultatom Y*100/X kao postotak koji će biti označen u stupcu ‘postotak nedetrabilnosti’.

Definirat ćemo specifičan račun na kojem ćemo valorizirati dio kompenziranog PDV-a primjenom postotka nedetrabilnosti, na primjer:

![](/img/it-it/finance-area/other/agr2.png)

Definirat ćemo specifične uzroke za razdvajanje dva PDV-a u registracijama prodaje u poljoprivrednom režimu, gdje ćemo posebno imati:

-	Tip kretanja ‘prodaja poljoprivredni režim’
-	Specifičan PDV račun za evidentiranje kompenziranog dijela PDV-a

Nema potrebe za definiranjem posebnog PDV registra za evidenciju ovih operacija.

![](/img/it-it/finance-area/other/agr3.png)

Kupnje provedene u poljoprivrednom režimu također će morati biti upravljane s odgovarajućim računovodstvenim uzrokom, koji ima jedinstvenu osobitost – vezan je za poljoprivredni PDV režim.

![](/img/it-it/finance-area/other/agr4.png)

Budući da će PDV na kupnje evidentiran s ovim uzrokom uvijek imati postotak nedetrabilnosti od 100% (ili PDV od 0, ako je transakcija izuzeta/oslobodena), preporuča se valorizirati karticu ‘Kontrola PDV stopa’ kako bi se izbjegle pogrešne valorizacije.  

![](/img/it-it/finance-area/other/agr5.png)

U slučaju da se obavljaju i intrakomunitarne kupnje podložne poljoprivrednom režimu, umjesto uobičajenih uzroka s tipom kretanja za intrakomunitarnu kupnju i odgovarajući prijenos PDV-a, predviđeni su dva specifična tipa kretanja: PDV na intrakomunitarnu kupnju u poljoprivrednom režimu s odgovarajućim prijenosom PDV-a za poljoprivredu. Kupnja će ponovno imati PDV koji nije odbitni od 100%, dok će u prodaji biti primijenjen PDV koji treba platiti: ta promjena stope bit će upravljiva putem postavke automatske PDV stope u PDV mreži, kao u slučajevima mješovitog reverse charge-a.


### Rezultati za obračun PDV-a po razdoblju

Obračun PDV-a prikazat će pregled kretanja u poljoprivrednom režimu na sljedeći način:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger Pažnja 
Zatvaranje računa ‘PDV na poljoprivrednu prodaju’, (koristi se za evidentiranje kompenziranog dijela PDV-a na prodaju) mora biti upravljano **ručno** od strane korisnika uz specifičnu računovodstvenu evidenciju.
:::
