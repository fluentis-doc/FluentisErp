---
title: Automatsko stvaranje narudžbe
sidebar_position: 2
showLastUpdateTime: true
---

Postupak se nalazi na putanji **Nabava > Narudžbe dobavljača > Postupci** i omogućuje stvaranje narudžbenica dobavljača iz  *Zahtjeva za kupnju* ili *Narudžbi od klijenata*.

## Filter od 

Na ovoj kartici odabiru se izvorni dokumenti iz kojih će se stvoriti narudžbenica dobavljača. Stoga je potrebno slijediti sljedeće korake:

**1**. filtrirajte *Zahtjev za kupnju* ili *Narudžbu klijenta* iz kojih će se generirati narudžbenica dobavljača.

**2**. odaberite podatke iz mreža (gornja sadrži zahtjev/narudžbu, a donja odgovarajuće artikle) mišem ili pomoću gumba za odabir koji se nalaze na vrpci.

**3**. pritisnite gumb *Generiraj prototip narudžbe* kako biste prešli na sljedeću karticu.
 

## Izbor dobavljača

Nakon generiranja *Prototipa narudžbe* mogu se potvrditi na temelju  *preferiranih Dobavljača* artikla ili *dobavljačkih Cjenika*. Na ovoj kartici potrebno je odabrati dobavljača od kojeg želite naručiti.

**4**. u prvoj mreži odaberite prototipe ili samo neke od njihovih artikla. ![](/img/neutral/common/check.png). Podređene mreže, *Artikli* i *Analitika*, prikazat će pojedinosti o odabranoj stavci u prvoj mreži. 


**5**. Potražite/odaberite/promijenite dobavljača za artikle, ovisno o odabranom parametru u odjeljku *Izaberite dobavljača prema kojem se naručuje*:

- **Dobavljač i cjenik iz zahtjeva za kupnju**: ova kartica predlaže dobavljača prisutnog u zahtjevu za kupnju;

- **Dobavljač i cjenik od zadanih dobavljača**: ovaj flag predlaže zadano preferiranog dobavljača za artikl;

- **Dobavljač i cijene od posljednje fakture/narudžbe/primitka**: ova kartica traži dobavljača i cijene u zadnjem primljenom računu kupnje; ako se ne upravlja računima kupnje, tražit će se u prijevoznim dokumentima, a zatim u narudžbama;

- **Dobavljač s najnižom cijenom kupnje**: aktivna kartica omogućuje odabir dobavljača s najnižom cijenom (cijena bez popusta);

- **Dobavljač s najkraćim vremenom nabave**: aktivna kartica omogućuje odabir dobavljača s najkraćim vremenom nabave;

- **Dobavljač s najboljim uvjetima plaćanja**: aktivna kartica omogućuje odabir dobavljača s najdužim rokom dospijeća;

Artikli bez dobavljača mogu se odabrati desnim klikom mišem i premjestiti, također mišem, ispod željenog dobavljača koji već ima barem jedan povezani artikl.

**6**. potvrdite odabirom **![](/img/it-it/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests/image03.png)**, kako biste generirali narudžbe dobavljača na temelju odabranih prototipova.

*Posebni gumbi*:

> **Proširi**: omogućuje proširavanje svih redaka u mreži s dokumentima.

> **Obriši odabrani prototip narudžbe**: omogućuje brisanje odabranog prototipa narudžbe.

> **Odaberi dobavljača**: omogućuje odabir dobavljača. Postaje aktivan ako je odabran barem jedan prototip/artikl.

> **Potvrdi odabrane prototipe narudžbe**: omogućuje generiranje narudžbi dobavljača na temelju odabranih prototipova.

## Prototipovi narudžbe

Prikazani su i pred narudžbenice radi stvaranja narudžbenica s podacima predloženim na kartici Parametri.

**7**. uredite i/ili unesite nedostajuće podatke za narudžbu (Vrsta) ili za njene artikle (Količina, PDV, Vrsta fakturiranja kupnje) i odlučite hoće li se izvršiti izvršenje reda zahtjeva ili narudžbe klijenta prisilno, bez dodatnog uzimanja u obzir preostalih količina.

**8**. generirajte narudžbenice dobavljača pomoću gumba *Generiraj narudžbenice dobavljača* ili, alternativno, dodajte redove postojećim narudžbama pomoću gumba *Narudžbe*.

## Parametri 

**Tip narudžbe**: koristi se za stvaranje ispravnog broja narudžbenice;

Podaci koji će se koristiti, ako nisu kodirani za svaki artikl:

**Vrsta prometa nabave**: ako artikl nema vrstu fakturiranja kupnje;

**Stopa PDV-a**: ako artikl nema PDV kod;

**Mjerna jedinica**: ako želite stvoriti narudžbe i s alternativnom mjerom;

**Vrijeme nabave**: za određivanje datuma isporuke.

## Operacije

Na temelju vrste izvornog dokumenta (*Zahtjev za kupnju* ili *Narudžba klijenta*), prikazuje povijest svih provedenih kreacija s detaljima o operateru, stvorenim Narudžbenicama dobavljača i njihovim pojedinostima..

Narudžbenice dobavljača mogu se pregledati dvostrukim klikom na retke kartica **Operacije**/**Detalji**.

*Posebna tipka*:

> **Povrati označene operacije**: omogućuje poništenje stvorene narudžbenice dobavljača i vraćanje zahtjeva za kupnjom.
