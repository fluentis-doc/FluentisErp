---
title: Upravljanje povratima i storno računima
sidebar_position: 3
--- 

Upravljanje **povratima dobavljaču** i **storno računima** omogućuje praćenje povratnog toka robe te pripadajućih financijskih ispravaka u odnosu na dobavljače.     

:::important Zapamti
**Povrati dobavljaču** razlikuju se od ostalih vrsta ulaznih računa jer je *Vrsta računa* (u tablici [Vrste ulaznih računa](/docs/configurations/tables/purchase/purchase-invoices-type)) postavljena na **Storno od dobavljača**. Otpremnica povrata imat će [Vrstu](/docs/configurations/tables/purchase/purchase-delivery-notes-type) **Povrat**. 
:::

### Kreiranje povrata dobavljaču

Kada se proizvod vraća dobavljaču, proces započinje izradom dokumenta o povratu u sustavu. Ovaj dokument može se unijeti ručno (kreiranjem otpremnice tipa *Povrat* ili *Storno računa* i ručnim unosom artikala koje treba stornirati), ili automatski putem postupka *Storno* dostupnog u pretraživanju dokumenata.  

U traci izbornika unutar [Pretraživanja ulaznih računa](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) nalazi se tipka **Storno fakturiranja** (dok se u [Pretraživanju ulaznih otpremnica](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note) nalazi tipka **Storno**). Ova tipka omogućuje kreiranje povrata povezanog s odabranim ulaznim računom.  
Nakon što se odabere račun koji se stornira i pritisne tipka, otvara se prozor **Storno dokumenta**, u kojem je potrebno označiti artikle koji se vraćaju te odabrati [Tipologiju](/docs/configurations/tables/purchase/purchase-invoices-type) dokumenta koja se treba stvoriti (predloženi su samo dokumenti s prirodom *Potvrda o kreditu od dobavljača*). Nakon što se postupak potvrdi, bit će stvoren račun za povrat, vidljiv u Pretraživanju računa. Račun se stvara s današnjim datumom i imat će ukupni iznos artikala koji se vraćaju preuzet iz početnog računa.

Ako se kreira **otpremnica povrata**, sustav može automatski generirati i pripadajući storno račun putem postupka [Vrednovanja ulaznih otpremnica](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) ili kroz [Evidentiranje otpremnice](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) unutar nove *Storno fakture*.

Prije nego što bude finalizirana, nota o odobrenju može se provjeriti i izmijeniti, ako je potrebno. Pri spremanju note o odobrenju, predlaže se izmjena oznaka svih vrsta troškova povezanih s njom, ali je moguće slobodno odlučiti hoće li se izmjena prihvatiti ili ne. 

Za **povrate** je moguće koristiti sve dostupne **Ispise** u modulu, uz filtriranje željene vrste dokumenta.  

### Ažuriranje zaliha  

Nakon knjiženja dokumenta povrata u skladištu, sustav automatski ažurira zalihe, smanjujući količinu i raspoloživost artikala koji su vraćeni.   

### Ažuriranje računovodstva  

Nakon knjiženja, **storno račun** ažurira računovodstvene evidencije, smanjujući dugovanje prema dobavljaču. To može rezultirati smanjenjem otvorene stavke ili povratom sredstava, ovisno o dogovoru s dobavljačem.      

:::note Nota
Od verzije 607 **storno računi** vode se s negativnim predznakom. Prilikom spremanja dokumenta, **Fluentis** automatski će promijeniti predznak artikala i troškova te o tome obavijestiti korisnika putem pop-up poruke.
Postupak knjiženja ostaje nepromijenjen, budući da se negativni dokument i dalje knjiži u PDV evidenciju (ranije se predznak mijenjao tek tijekom knjiženja).
Prilikom slanja dokumenta u SDI putem .xml datoteke, predznak se ponovno prilagođava tehničkim specifikacijama elektroničkog računa.
Ova izmjena uvedena je radi boljeg upravljanja statistikom i pripadajućim analitičkim prikazima.  
:::
