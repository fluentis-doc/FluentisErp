---
title: Parametri rizika kupca
sidebar_position: 6
---

**UVOD**

Modul rizičnosti klijenta očitava narudžbe klijenata, otpremnice, fakture, otvorene stavke, dospjele račune (ukratko, sve što zauzima kreditni limit i stvara izloženost).

Otvorene stavke i efekti čitaju se u svakom slučaju, dok se dokumenti (NC, DDT, FV) uključuju prema potrebi, označavanjem odgovarajućeg polja u pojedinim tablicama (tip narudžbe klijenta, tipovi otpremnica prodaje, tipovi faktura prodaje).

Polje koje treba označiti za uključivanje određenog tipa dokumenta je **Kredit**

Postoji i polje **Isključi blokadu**: čak i ako dokument zauzima kreditni limit, bit će isključen iz blokade (dakle, neće biti blokiran, ali će ipak biti evidentiran i označen).


### OPĆA LOGIKA

Narudžbe se uzimaju u obzir ako su otisnute i potvrđene te ako je označeno odgovarajuće polje u tipu (neispunjene ili prisilno ispunjene).
Prisilno ispunjene = preostali dio neće biti isporučen, a narudžba se smatra zatvorenom iako tehnički možda nije.

Otpremnice moraju biti otisnute i ne fakturirane.
Fakture – da li su otisnute ili ne ovisi o parametru, ali ne smiju biti knjižene (u suprotnom se računaju kao otvorena stavka).


U **parametrima** modula Rizičnost klijenata mogu se unaprijed postaviti zadane stavke koje će se predlagati u procedurama modula.

> **Broj dana nakon dospijeća za efekte prezentirane uz uvjet da bude naplaćeno**: ovo polje omogućuje definiranje koliko dana nakon datuma dospijeća treba smatrati efekt prezentiranim S.B.F., a da još nije naplaćen.  
> **Broj dana nakon dospijeća za efekte prezentirane nakon naplate** | ovo polje omogućuje definiranje koliko dana nakon datuma dospijeća treba smatrati račun prezentiranim nakon naplate, a da još nije naplaćen.  
> **Od datuma obračuna (knjigovodstveni saldo, fakture, otpremnice)**: datum početka obračuna. Dokumenti s datumom prije ovog datuma neće se uzimati u obzir.  
> **Pregledaj knjižene neplaćene račune**: uključivanje ove opcije prikazat će u modulu i iznose knjiženih neplaćenih stavki, neovisno o statusu naplate. Ima samo informativnu svrhu.  

**Multiplikator kreditne procjene**: vrijednost koja se koristi u obrascu [**Korištenje kredita**](/docs/treasury/customer-risk/use-credit) za izračun iznosa polja *Procijenjeni kredit*.


#### Osnovica izračuna za izračun rizika kupca   
> **Stanje glavne knjige**: s ovom postavkom izračun kredita temelji se na knjigovnom saldu klijenta.   
> **Otvorene stavke**: s ovom postavkom izračun kredita temelji se na otvorenim stavkama klijenta.    
> **Razmotrite dospjele vrijednosti iz privremenih zapisa**: ako je prethodno polje aktivno, izračun uzima u obzir i eventualne promjene nastale iz privremenih knjiženja.  
> **Blokiraj fizički izvještaj**: ako kredit klijenta predviđa blokadu dokumenta, ova opcija sprječava fizički ispis blokiranog dokumenta. Ako nije uključeno, dokument se može ispisati, ali polje ‘otisnuto’ neće biti dodijeljeno dokumentu.    
> **Razmotri račune za ispis**: uzima u obzir, pri izračunu kredita, fakture koje su kreirane, ali još nisu otisnute. Ako nije uključeno, zadana logika računa fakture samo ako su otisnute (s aktivnim poljem ‘otisnuto’).    