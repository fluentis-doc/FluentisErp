---
title: Parametri grupiranja Računa za kupnju
sidebar_position: 7
---

Parametri grupiranja omogućuju definiranje načina na koji će se dokumenti razvrstavati tijekom postupaka izvršenja. U tu svrhu moguće je koristiti specifične oznake za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.
Ovi opći parametri grupiranja moraju se konfigurirati samo jednom i automatski će se primjenjivati na sve postupke, vrijedeći za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drugačije ponašanje u odnosu na ono postavljeno u općim parametrima, bit će potrebno prilagoditi parametre grupiranja unutar njihovog specifičnog Šifarnika.
Na taj način osigurava se fleksibilno i prilagodljivo upravljanje izvršenjima, omogućujući zadovoljenje specifičnih potreba svakog kupca ili dobavljača, uz održavanje centralizirane i dosljedne konfiguracije za većinu operacija.

U ovom prozoru se odlučuju pravila grupiranja za postupke: 
-  [**Valorizacija otpremnice za kupnju**](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization);  
-  [**Valorizacija otpremnice za povrat**](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization).   

Potrebno je označiti stupce koji predviđaju grupiranja koja se žele primijeniti za ove izvršenja.

:::note Napomena
Ako su u Šifarniku dobavljača, u kartici *Parametri grupiranja za kupca/dobavljača*, uneseni drugačiji uvjeti grupiranja, oni će imati prioritet u odnosu na opće parametre.
:::

Kada se faktura kreira iz jedne jedine otpremnice, prenose se svi zaglavni podaci iz početnog dokumenta. Za fakture kreirane iz više otpremnica, prenose se podaci iz Šifarnika dobavljača.  

#### Campi specifici  

- **Sažetak**: ako je aktivno, prilikom obrade više otpremnica bit će kreirana jedinstvena faktura za svakog dobavljača. Ako nije aktivno, uvijek će biti kreirana jedna faktura za svaku obrađenu otpremnicu. Grupiranje funkcionira samo za *Vrste otpremnica* (kupovne ili prodajne, ovisno o odabranoj operaciji) koje imaju kodificiran isti *Tip fakture* za kreiranje. Svi sljedeći flagovi moraju se koristiti zajedno s ovim flagom.

- **Grupiranje po tipu dokumenta**: ako je aktivno, bit će grupirani u jedinstvenu fakturu svi dokumenti koji imaju isti *Tip otpremnice*.      

- **Grupiranje po godini**: aktiviranjem ovog parametra izvršit će se grupiranje prema godini kreiranja otpremnica.    

- **Grupiranje po mjesecu**: za mogućnost grupiranja prema mjesecu kreiranja otpremnica potrebno je također aktivirati i prethodni parametar.      

- **Grupiranje po tečaju**: ako je aktivno, dokumenti s istom valutom i istim tečajem bit će grupirani u jedinstvenu fakturu.     

- **Grupiranje po narudžbi**: ovaj parametar se koristi samo za *Kreiranje Otpremnica i faktura za prodaju iz Picking-a* (vidi [Parametre grupiranja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [fakture](/docs/configurations/parameters/sales/invoice-grouping)).    

- **Gruppiranje po projektu**: aktiviranjem ove oznake bit će izvršeno grupiranje po projektu. Grupiranje također djeluje za projekte unesene na razini stavke artikla; ako neke od stavki artikla nemaju pridružen projekt, bit će kreirana drugačija faktura za sve artikle koji ga nemaju. Kada je projekt unesen u zaglavlje izvornog dokumenta, bit će prikazan i u zaglavlju odredišnog dokumenta, inače će biti zadržan samo na stavkama artikla.      

- **Gruppiranje po vrsti i rješenju plaćanja**: aktiviranjem ove oznake bit će izvršeno grupiranje na temelju vrste i rješenja plaćanja unesenog u otpremnicu; ta će informacija biti prikazana u zaglavlju kreirane fakture.  

- **Gruppiranje po odredištu**: aktiviranjem ove oznake bit će izvršeno grupiranje na temelju odredišta unesenog unutar otpremnica u kartici  *Prijevoz*; ta će informacija biti prikazana u zaglavlju kreirane fakture, u kartici *Dostava*.     