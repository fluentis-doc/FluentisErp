---
title: Automatsko generiranje samofakture
sidebar_position: 4
---
:::note BILJEŠKA:
Sljedeće upute odnose se na postupak za automatizirano generiranje faktura za samoprodaju stvorenih kako bi se SDI-u, putem kruga elektroničkog fakturiranja, priopćili podaci o kupnjama prethodno priopćenim putem ukinutog zahtjeva poznatog kao "Esterometro".
:::

Prilikom spremanja računovodstvenog unosa, Fluentis će kreirati automatske dokumente postavljene u predlošku plaćanja: dakle i administrativni(računovodstveni) prijenos za neutralizaciju PDV-a i samofakturiranje za prodaju. Zatvaranje obrasca tada će vratiti dvije poruke, onu koja otvara registraciju automatskog prijenosa i novu poruku koja prikazuje samoračun.  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation1.png)

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation2.png)

U automatski generiranom samoračunu: u polju prijenosnik imamo i dobavljača, u referencama broj i datum računa dobavljača.  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation3.png)

Faktura je već ispisana i obračunata (budući da već postoji automatski administrativni (računovodstveni) prijenos za njegovu detekciju u redovima imamo nekodiranu stavku, s opisom preuzetim iz opisa kretanja izvornog administrativnog (računovodstvenog) unosa, za iznos PDV-a). unosa i cijene linije.  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation4.png)

Stoga smo već spremni unutar dokumenta promijeniti status otpreme u SDI samofakture. Sve promjene izvornog knjiženja ponovno će izračunati i administrativni (računovodstveni) prijenos i samofakturiranje u prodaji, ako prodajna faktura već nije bila podvrgnuta stvaranju SDI datoteke. Operacija automatskog ažuriranja se ne izvodi čak i ako je zastavica ‘Nemoj ponovno izračunati automatsku registraciju" postavljena u računovodstvenom predlošku’. 

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation5.png)

Poništenje izvorne registracije (također vraćanje računovodstva koje ju je kreiralo) će eliminirati samofakturiranje u prodaji, ako to nije bilo predmet kreiranja SDI datoteke.  

### **POSEBNI SLUČAJEVI**

A) U slučaju mješovite fakture za kupnju, s dijelom interne obrnute obveze i brojem dijela, računovodstveni unos će imati jedan ili više redaka PDV-a s oznakom ‘Isključi iz automatskih predložaka’ i oni se neće prijaviti u automatskom povratu niti u samofakturi.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation6.png)

B) U slučaju intra kupnje s djelomičnim odbitkom, moguće su u polju 'PDV iz automatskih predložaka’ naznačiti koja će se stopa koristiti pri automatskoj prijavi putovanja. Ova će se stopa također koristiti u fakturi za vlastitu prodaju.  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation7.png)

C) Kupnja stranih usluga   
U ovom slučaju kupnja će biti evidentirana s predloškom koji nije povezan s PDV-om. U ovom slučaju moguće je postaviti na sljedeći način: u ne-PDV predlošku koji detektira ove usluge moguće je naznačiti da se TD17 samofaktura kreira u prodaji, bez automatskog predloška.    

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation8.png)

Dobavljaču će biti potrebno naznačiti stopu PDV-a koja će se koristiti u fakturi za samoprodaju, zatim u administraciji (računovodstvu) dobavljač mora imati dobavljača u zaglavlju i vrijednost fakturirane usluge u zaglavlju ukupno:  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation9.png)

Budući da predložak dobavljača nema automatski predložak, već samo vrstu fakture koju treba izraditi, kreirana samofaktura neće imati flag 'Obračunato' kako bi se korisniku omogućilo da je obračuna iz prodaje.

### OSTALO KNJIGOVODSTVO  
Računovodstveni postupci fakture kupnje, računovodstvo kompenzacije i registracija iz Sdi datoteke kupnje provjeravaju ovu novu postavku računovodstvenog predloška za automatsko stvaranje prodajnih dokumenata kao što je prikazano u slučaju ručnih registracija. U slučaju računovodstva iz datoteke kupnje Sdi, računovodstveni unos bit će povezan sa datotekom Sdi: u ovom slučaju samofaktura će automatski valorizirati, uz reference na broj/datum fakture, i izvorni Sdi protokol.  
