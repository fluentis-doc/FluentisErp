---
title: Upravljanje avansima
sidebar_position: 4
---

Fluentis omogućuje upravljanje fakturama za akontaciju i njihovim poništenjem.

**Stvaranje fakture za akontaciju**  
Fakture za akontaciju mogu imati poseban [Vrsta dokumenta](/docs/configurations/tables/sales/invoices-type) ili ne, budući da se upravljanje akontacijama ne odvija na razini tablice, već na razini stavki. Upravljanje akontacijama stoga uključuje stvaranje obične prodajne fakture, za koju su potrebni **Tip**, **Klijent**, itd.
Nakon što su podaci o zaglavlju popunjeni, možete prijeći na karticu *Stavke*. U prikazu stavki, unesite *Tip stavke 6 Faktura za akontaciju*, slobodan Opis, Cijenu, PDV, fakturirani iznos (koji bi trebao imati račun za Akontacije klijenata), i ostale podatke po potrebi. Dakle, ovaj tip stavke određuje iznos akontacije. Kada je faktura završena, možete je ispisati. Tada je faktura za akontaciju potvrđena. Prilikom stvaranja drugih dokumenata za ovog klijenta, Fluentis će vas obavijestiti o postojanju fakture za akontaciju.

**Storno račun**  
Za poništenje fakture za akontaciju potrebno je stvoriti novu prodajnu fakturu za istog klijenta. Na kartici Stavke, ako klijent ima barem jednu fakturu za akontaciju, gumb **Upravljanje avansima** na gornjem izborniku bit će aktivan. Klikom na njega otvara se odgovarajuća procedura.    
Na kartici **Storno avansa** moguće je odabrati akontacije za poništavanje; nakon odabira, pritiskom na gumb **Izradite stavku za poništenje fakture** bit će stvoren storno, koji će biti prikazan u donjoj mreži. Pri zatvaranju prozora bit će zatraženo potvrđivanje novog iznosa poništenja u fakturi.   
Ako je potvrđeno, moći ćete pregledati stavku poništenja na kartici Stavke fakture, koja će prikazivati podatke o prethodnoj fakturi za akontaciju.