---
sidebar_position: 1
title: Poseban režim PDV-a za poljoprivredu
---

Poljoprivredni PDV režim predviđa nemogućnost odbitka PDV-a za nabave koje podliježu ovom režimu te primjenu kompenzacijske stope na prodaje unutar istog režima: umjesto odbitka pretporeza kao u standardnom režimu, PDV na nabavi uvijek je nepriznat, dok se PDV obračunan na prodaji plaća samo djelomično prema fiksnom obračunu, bez ikakve povezanosti s nabavama u tom razdoblju, primjenom kompenzacijskih stopa koje variraju ovisno o vrsti prodanog dobra.

### Preliminarna obrada tablica

Za upravljanje kompenzacijskim postotkom prvo ćemo definirati potrebne PDV stope za prodaju, u kojima ćemo iskoristiti ‘postotak nemogućnosti odbitka’ za izračun:

![](/img/it-it/finance-area/other/agr1.png)

U osnovi, ako PDV X ima kompenzacijski postotak Y, Y će biti označen u stupcu ‘% IVA agr. detr.’ (kao informativni podatak prikazan u ispisu za PDV obračun), dok će biti valoriziran s rezultatom Y*100/X kao postotak koji će biti označen u stupcu ‘postotak nemogućnostii odbitka’.

Definirat ćemo specifičan račun na kojem ćemo valorizirati dio kompenziranog PDV-a primjenom postotka nemogućnosti odbitka, na primjer:

![](/img/it-it/finance-area/other/agr2.png)

Definirat ćemo specifične predloške za razdvajanje dva PDV-a u knjiženjima prodaje u poljoprivrednom režimu, gdje ćemo posebno imati:

-	Tip kretanja ‘prodaja poljoprivredni režim’
-	Specifičan PDV račun za evidentiranje kompenziranog dijela PDV-a

Nema potrebe za definiranjem posebnog PDV registra za evidenciju ovih operacija.

![](/img/it-it/finance-area/other/agr3.png)

Nabave provedene u poljoprivrednom režimu također će morati biti upravljane s odgovarajućim računovodstvenim predloškon, koji ima jedinstvenu osobitost – vezan je za poljoprivredni PDV režim.

![](/img/it-it/finance-area/other/agr4.png)

Budući da će PDV na nabave biti evidentiran s ovim predloškom uvijek imati postotak nemogućnosti odbitka od 100% (ili PDV od 0, ako je transakcija izuzeta/oslobodena), preporuča se valorizirati karticu ‘Kontrola PDV stopa’ kako bi se izbjegle pogrešne valorizacije.  

![](/img/it-it/finance-area/other/agr5.png)

U slučaju da se obavljaju i *intrakomunitarne* nabave podložne poljoprivrednom režimu, umjesto uobičajenih predloška s tipom kretanja za intrakomunitarnu nabavu i odgovarajući prijenos PDV-a, predviđena su dva specifična tipa kretanja: PDV na intrakomunitarnu nabavu u poljoprivrednom režimu s odgovarajućim prijenosom PDV-a za poljoprivredu. Nabava će ponovno imati PDV koji nije odbitni od 100%, dok će u prodaji biti primijenjen PDV koji treba platiti: ta promjena stope bit će upravljiva putem postavke automatske PDV stope u PDV mreži, kao u slučajevima mješovitog *reverse charge-a*.


### Rezultati za obračun PDV-a po razdoblju

Obračun PDV-a prikazat će pregled kretanja u poljoprivrednom režimu na sljedeći način:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger Pažnja 
Zatvaranje računa ‘PDV na poljoprivrednu prodaju’, (koristi se za evidentiranje kompenziranog dijela PDV-a na prodaju) mora biti upravljano **ručno** od strane korisnika uz specifičnu računovodstvenu evidenciju.
:::
