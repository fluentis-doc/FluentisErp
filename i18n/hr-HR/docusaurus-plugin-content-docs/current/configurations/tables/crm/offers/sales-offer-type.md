---
title: Tip prodajne ponude 
sidebar_position: 1
---

Tablica se koristi za određivanje svojstava prodajne ponude.  

Forma se sastoji od područja za filtriranje i područja s rezultatima. Nakon što su postavljeni svi željeni filtri, dovoljno je kliknuti na gumb **Pretraži** kako bi se rezultati prikazali unutar mreže s rezultatima.

Za unos novih zapisa potrebno je kliknuti u mreži na prvi prazan redak ili pritisnuti gumb **Novo**. 

**Šifra/Opis:** polja u koja se unosi šifra i opis tipologije dokumenta (šifra mora biti jedinstvena).

**Upravljanje verzijama**: ova oznaka (flag) označava tipologije ponude za koje se vode verzije.

**Cijena s PDV-om**: omogućuje sustavu dohvat prodajne cijene iz cjenika ili iz šifrarnika artikla i prikazuje je s uključenim PDV-om. Ako cjenik nije pronađen, primjerice u slučaju isteka cjenika ili valute koja nije kompatibilna, sustav preuzima troškove ili cijene iz šifrarnika artikla i prikazuje ih s PDV-om. Troškovi i cijene u šifrarniku izraženi su u EUR, pa će ih sustav automatski konvertirati u valutu kupca.

**Numeracija**: u ovo polje unosi se odgovarajuća šifra numeracije. Za detalje o numeraciji dokumenata pogledajte članak [Numeracije Fluentis](/docs/configurations/tables/fluentis-numerations).

**Vrsta narudžbe kupca**: u ovom se polju navodi tip narudžbe prodaje koji će se kreirati prilikom konverzije ponude kroz predviđenu proceduru.    

**Prodajni cjenik**: ovaj generički tip cjenika koristi se za pretraživanje cijena u slučaju kada u tabu Cjenici u šifrarniku kupca ili kontakta nije unesena nijedna vrsta cjenika. Uglavnom se koristi prilikom izrade ponuda kontaktima iz CRM-a koji još nisu evidentirani kao kupci i za koje nisu upisani tipovi cjenika u tabu Cjenici šifrarnika.

**Ispis i broj kopija**: ovim poljima definira se zadani ispis i broj kopija za ispisivanje; podsjećamo da je za ispis zadanog ispisa potrebno označiti *Višestruki ispisi* u trenutku ispisa.

**Vrsta prototipa artikla**: ovo polje sadrži tip prototipa artikla koji će se kreirati u proceduri stvaranja prototipa unutar ponude. 

**Vrsta prilike**: ako je uz Tip ponude povezana Vrsta prilike, prilikom spremanja Ponude kreira se Nova prilika ako u zaglavlju Ponude nije već unesena postojeća; ako je unesena, postojeća Prilika se ažurira.

**Upravljanje osnovnim sredstvima i Vrsta operacije**: oznaka omogućuje vođenje osnovnih sredstava za ovu tipologiju dokumenta. U sljedećem polju navodi se tip operacije nad osnovnim sredstvima, koji u slučaju prodaje može biti potpuna ili djelomična prodaja (otuđenje) ili uništenje.      

**Vrsta popusta/Opis**: u ovom se stupcu može povezati tip popusta koji će se predložiti kada se popusti unose izravno u stupac *Popusti artikla* u mreži artikala dokumenata (za detalje pogledajte članak [Upravljanje widgetom popusta – pojednostavljena verzija](/docs/sales/sales-flow/discount-widget)).
