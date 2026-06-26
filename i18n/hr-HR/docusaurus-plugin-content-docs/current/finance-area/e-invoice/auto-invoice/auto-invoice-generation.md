---
title: Automatsko generiranje faktura
sidebar_position: 4
---
:::note BILJEŠKA:
Sljedeće upute odnose se na postupak za automatizirano generiranje prodajnih faktura/računa stvorenih kako bi se putem slanja e-računa, poslali podaci o nabavi, prethodno priopćeni putem ukinutog zahtjeva poznatog kao "Esterometro" (Italija).
:::

Prilikom spremanja računovodstvenog zapisa, Fluentis će automatski kreirati dokumente postavljene u predlošku plaćanja: dakle i administrativni(računovodstveni) prijenos za obračun PDV-a i *samofakturiranje* prodajnih faktura. Zatvaranje obrasca tada će vratiti dvije poruke, onu koja otvara knjiženje automatskog prijenosa i novu poruku koja prikazuje izrađeni račun.  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation1.png)

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation2.png)

U automatski generiranom obračunu: u polju izdavatelja imamo i dobavljača, u referencama broj i datum računa dobavljača.  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation3.png)

Račun je već ispisan i knjižen (budući da već postoji automatsko prijenosno knjiženje koje ga evidentira).
U stavkama se nalazi nešifrirani artikl, s opisom preuzetim iz opisa knjiženja izvornog računovodstvenog zapisa, za PDV osnovicu knjiženja i stopu PDV-a retka. 

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation4.png)

Spremni smo već unutar dokumenta izvršiti promjenu statusa slanja računa prema SDI sustavu.
Eventualne izmjene izvornog knjiženja ponovno će izračunati, pod uvjetom da za izlazni račun još nije generirana SDI datoteka, i automatsko prijenosno knjiženje i automatski generirani izlazni račun. Automatsko ažuriranje neće se izvršiti ni u slučaju kada je u predlošku knjiženja postavljena oznaka „Ne preračunavaj automatsko knjiženje”.. 

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation5.png)

Poništenje izvornog knjiženja (također vraćanje računovodstvene operacije koje ju je kreiralo) će eliminirati automatski generirani izlazni račun, ako to nije bilo predmet kreiranja SDI datoteke.  

### **POSEBNI SLUČAJEVI**

A) U slučaju miješanog ulaznog računa, gdje dio podliježe domaćem *reverse charge* postupku, a dio ne, računovodstveno knjiženje imat će jedan ili više PDV redaka s oznakom „Isključi iz automatskih predložaka”, te ti redci neće biti uključeni ni u automatsko prijenosno knjiženje ni u račun.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation6.png)

B) U slučaju *intra* kupnje s djelomičnim odbitkom, moguće je u polju „PDV za automatske predloške” navesti stopu PDV-a koja će se koristiti u automatskom prijenosnom knjiženju. Ta stopa PDV-a koristit će se i u izlaznom računu.  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation7.png)

C) Nabava inozemnih usluga
U ovom slučaju nabava će biti evidentirana pomoću predloška bez PDV-a. Tada je moguće postaviti sljedeće: u predlošku bez PDV-a kojim se evidentiraju te usluge moguće je navesti TD17 automatski račun koji će se kreirati u prodaji, bez automatskog prijenosnog knjiženja. 

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation8.png)

Dobavljaču će biti potrebno naznačiti stopu PDV-a koja će se koristiti u automatskom izlaznom računu, zatim u administraciji (računovodstvu) dobavljač mora imati dobavljača u zaglavlju i vrijednost fakturirane usluge u zaglavlju ukupno:  

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation9.png)

Budući da predložak dobavljača nema automatski predložak, već samo vrstu fakture koju treba izraditi, kreirani automatski izlazni račun neće imati *flag* 'Obračunato' kako bi se korisniku omogućilo da je obračuna iz prodaje.

### OSTALO KNJIGOVODSTVO  
Procedure knjiženja ulaznih računa, knjiženja naknada i evidentiranja iz SDI datoteka za nabavu provjeravaju ovu novu postavku računovodstvenog predloška kako bi automatski izvršile kreiranje izlaznih dokumenata, kao što je prikazano u slučaju ručnih knjiženja.
U slučaju knjiženja iz SDI datoteke nabave, knjiženje će biti povezano sa SDI datotekom: u tom slučaju račun će automatski imati popunjene ne samo reference na broj i datum računa, nego i izvorni SDI protokol.
