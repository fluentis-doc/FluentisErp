---
title: Upravljanje povratima i storno računima
sidebar_position: 3
---

Upravljanje **povratima dobavljaču** i **storno računima** omogućava praćenje povratnog toka robe i pripadajućih finansijskih ispravki u odnosu na dobavljače.

:::important Zapamti
**Povrati dobavljaču** razlikuju se od ostalih tipova ulaznih računa jer je *Tip računa* (u tabeli [Tipovi ulaznih računa](/docs/configurations/tables/purchase/purchase-invoices-type)) postavljen na **Storno od dobavljača**. Otpremnica povrata imaće [Tip](/docs/configurations/tables/purchase/purchase-delivery-notes-type) **Povrat**.
:::

### Kreiranje povrata dobavljaču

Kada se proizvod vraća dobavljaču, proces počinje kreiranjem dokumenta o povratu u sistemu. Ovaj dokument može se uneti ručno (kreiranjem otpremnice tipa *Povrat* ili *Storno računa* i ručnim unosom artikala koje treba stornirati) ili automatski putem postupka *Storno* dostupnog u pretrazi dokumenata.

Na alatnoj traci unutar [Pretrage ulaznih računa](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) nalazi se dugme **Storno prometa** (dok se u [Pretrazi ulaznih otpremnica](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note) nalazi dugme **Storno**). Ovo dugme omogućava kreiranje povrata povezanog sa izabranim ulaznim računom.

Nakon što se izabere račun koji se stornira i pritisne dugme, otvara se prozor **Storno dokumenta**, u kojem je potrebno označiti artikle koji se vraćaju i izabrati [Tip](/docs/configurations/tables/purchase/purchase-invoices-type) dokumenta koji treba da se kreira (predlažu se samo dokumenti sa tipom *Odobrenje od dobavljača*). Nakon potvrde postupka biće kreiran račun za povrat, vidljiv u Pretrazi računa. Račun se kreira sa današnjim datumom i imaće ukupan iznos artikala koji se vraćaju preuzet iz početnog računa.

Ako se kreira **dokument povrata**, sistem može automatski generisati i odgovarajući storno račun putem postupka [Valorizacija primke](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) ili kroz [kreiranje primke](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) unutar nove *Storno fakture*.

Pre nego što bude finalizovano, odobrenje se može proveriti i izmeniti, ako je potrebno. Prilikom čuvanja odobrenja predlaže se izmena oznaka svih tipova troškova povezanih sa njim, ali je moguće slobodno odlučiti da li će se izmena prihvatiti ili ne.

Za **povrate** je moguće koristiti sve dostupne **Ispise** u modulu, uz filtriranje željenog tipa dokumenta.

### Ažuriranje zaliha

Nakon knjiženja dokumenta povrata u skladištu, sistem automatski ažurira zalihe, smanjujući količinu i raspoloživost artikala koji su vraćeni.

### Ažuriranje računovodstva

Nakon knjiženja, **storno račun** ažurira računovodstvene evidencije, smanjujući dugovanje prema dobavljaču. To može rezultirati smanjenjem otvorene stavke ili povraćajem sredstava, u zavisnosti od dogovora sa dobavljačem.

:::note Napomena
Od verzije 607 **storno računi** vode se sa negativnim predznakom. Prilikom čuvanja dokumenta, **Fluentis** će automatski promeniti predznak artikala i troškova i o tome obavestiti korisnika putem *pop-up* poruke.

Postupak knjiženja ostaje nepromenjen, budući da se negativni dokument i dalje knjiži u PDV evidenciju (ranije se predznak menjao tek tokom knjiženja).

Prilikom slanja dokumenta u SDI putem .xml datoteke, predznak se ponovo prilagođava tehničkim specifikacijama elektronskog računa.

Ova izmena uvedena je radi boljeg upravljanja statistikom i pripadajućim analitičkim prikazima.
:::