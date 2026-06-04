---
title: Parametri grupiranja primke
sidebar_position: 10
---

Parametri grupiranja omogućuju definiranje načina na koji se dokumenti dijele tijekom postupaka ispunjenja. U tu svrhu moguće je koristiti specifične flagove za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, tip dokumenta ili druge relevantne karakteristike.  
Ovi opći parametri grupiranja trebaju se konfigurirati samo jednom i automatski će se primjenjivati na sve postupke, ostajući valjani za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drugačije ponašanje od onoga postavljenog u općim parametrima, bit će potrebno prilagoditi parametre grupiranja unutar njihove specifične kartice.  
Na taj način osigurava se fleksibilno i prilagodljivo upravljanje ispunjenjima, omogućujući zadovoljenje specifičnih potreba svakog kupca ili dobavljača, dok se istovremeno održava centralizirana i dosljedna konfiguracija za većinu operacija.

U ovom obrascu odlučuju se pravila grupiranja za proceduru [**Izvršenje iz narudžbi**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).  

Potrebno je označiti stupce koji određuju grupiranja koja se žele primijeniti pri izdavanju ovih otpremnica.

:::note Nota
Ako su u šifarniku dobavljača, u kartici *Parametri grupiranja za kupca/dobavljača*, definirani različiti uvjeti grupiranja, oni će imati prednost nad općim parametrima.  

Kada se otpremnica kreira na temelju jedne narudžbe, prenose se svi podaci iz zaglavlja izvornog dokumenta. Ako se otpremnica kreira na temelju više narudžbi, prenose se podaci iz šifrarnika dobavljača. 

#### Specifična polja

- **Sažetak**: ako je aktivno, u trenutku ispunjenja narudžbi bit će kreiran jedinstveni DDT za dobavljača. Ako nije aktivno, uvijek će biti kreiran jedan DDT za svaku ispunjenu narudžbu. Grupiranje funkcionira samo za *Tip naloga* (Nabave ili Prodaje, ovisno o odabranoj operaciji) koji su kodificirali isti *Tip DDT* koji treba stvoriti. Svi sljedeći flagovi moraju se koristiti u skladu s ovim flagom.

- **Grupiranje po godini**: aktiviranjem ove opcije narudžbe će se grupirati prema godini njihovog kreiranja.    

- **Grupiranje po mjesecu**: za omogućavanje grupiranja narudžbi po mjesecu kreiranja, potrebno je prethodno aktivirati i opciju za grupiranje po godini.      

- **Grupiranje po tečaju**: ako je opcija aktivirana, dokumenti s istom valutom i istim tečajem bit će grupirani u jedan jedinstveni DDT.    

- **Grupiranje po narudžbi**: ovaj parametar koristi se isključivo za *Kreiranje DDT-a i prodajnih računa iz Pickinga* (vidi [Parametri grupiranja DDT-a](/docs/configurations/parameters/sales/dn-grouping) i [računi](/docs/configurations/parameters/sales/invoice-grouping)).    

- **Grupiranje po projektu**: aktiviranjem ovog parametra omogućuje se grupiranje prema projektu. Grupiranje funkcionira i za projekte unesene na razini stavki artikala; ako neke stavke nemaju pridružen projekt, za njih će se kreirati poseban DDT. Kada je projekt unesen u zaglavlje izvornog dokumenta, on će biti prenesen i u zaglavlje odredišnog dokumenta; u suprotnom, projekt će ostati samo na razini stavki artikala.

- **Grupiranje po vrsti i rješenju plaćanja**: ako je aktivirano, DDT-ovi će se grupirati na temelju vrste i rješenja plaćanja navedenog u narudžbi; ti će se podaci prenijeti u zaglavlje kreiranog DDT-a.   

- **Grupiranje po odredištu**: aktiviranjem ove opcije omogućuje se grupiranje prema odredištu navedenom u narudžbama; odredište će biti prikazano u zaglavlju kreiranog DDT-a, na kartici *Prijevoz*.     