---
title: Liste preuzimanja/Packing liste (WPF verzija i WMS)
sidebar_position: 1
---

### Liste preuzimanja/Packing liste (WPF verzija)

Pomoću **Picking liste** moguće je kreirati odabir jedinica tereta, za razliku od običnog odabira koji se sastoji od pojedinačnih artikala.        
Iz tipke **Traži** moguće je pretražiti prethodno unesene liste.    
Za stvaranje nove liste kliknite na **Novo**. 

Obavezni podaci za unos su:       
**Vrsta uzimanja sa zaliha**: unesite tip odabira koji želite koristiti [picking](/docs/logistics/picking/picking-management);       
**Korisnik**: unesite kodiranog zaposlenika koji kreira dokument;      
**Korisnik koji potvrđuje**: unesite zaposlenika koji ima pravo potvrditi listu.

Nakon unosa potrebnih podataka moguće je spremiti listu preuzimanja.
Pomoću gumba na gornjem izbirniku **pomoć transportna jedinica** moguće je otvoriti prozor u kojem možete odabrati UDC-e za preuzimanje.  
Pretraživanje može biti izvršeno na jedinicama tereta povezanim s narudžbama kupaca (omogućavanjem zastavice **Traži narudžbe prodaje**), pa za svaku narudžbu kupca možemo vidjeti artikle koji je čine i jesu li ti artikli prethodno uneseni unutar jedinice tereta. Jednom kada odaberete UDC-ove od interesa, oni se dodaju na listu.    
Alternativno, onemogućavanjem zastavice **Traži narudžbe prodaje**, jedinice tereta mogu biti pretražene među svima stvorenima, čak i ako nisu povezane s narudžbom kupca, i na isti način mogu biti odabrane i dodane na našu listu preuzimanja.   
U prikazu *Detalj* pojavit će se samo UDC-ovi u stanju preuzimanja, nakon čega je moguće spremiti listu i zatvoriti je.  
Povratkom na ekran *Pretraživanje Picking liste*, lista će biti prisutna sa statusom **Suspendirano**. Potrebno je preuzeti UDC-ove s liste (vidi posebne gumbe dolje) kako bi se prešlo u status **Provjereno**. Tek s ovim zadnjim statusom omogućeni su gumbi na traci s gornjeg izbornika **Faktura** i **Dostavnica**.  

*Posebni gumbi:*
> **Račun**: stvara račun iz odabrane Liste; u izlaznom prozoru potreban je [Tip Računa](/docs/configurations/tables/sales/invoices-type) koji treba stvoriti i eventualno grupiranje koje treba primijeniti; račun se već stvara kao *Preuzmi* (kako bi se izbjegao rizik dvostrukog preuzimanja).      
> **Otpremnica**: stvara Otpremnicu iz odabrane *Liste*; u izlaznom prozoru potreban je [Tip Otpremnice](/docs/configurations/tables/sales/delivery-notes-type) koji treba stvoriti i eventualno grupiranje koje treba primijeniti; Otpremnica se već stvara kao *Preuzeta* (kako bi se izbjegao rizik dvostrukog preuzimanja).   
> **Upravljanje Transportnom jedinicom**: odabirom *Liste preuzimanja* ei klikom na ovaj gumb otvara se prozor **Upravljanje Transportnom jedinicom** u kojem su utovarne jedinice iz liste prethodno filtrirane. U ovom prozoru utovarne jedinice se mogu upravljati u skladištu s različitim gumbovima na traci s vrpcama.

Za sve informacije o korištenju ove forme iz WMS-a pogledajte [Liste preuzimanja/Packing liste](/docs/logistics/wms/udc/loading-unit-picking-list)

### Liste za preuzimanje/Packing liste(WMS verzija)

Ovaj postupak koristi se za stvaranje lista za preuzimanje s jedinicama tereta.

S **Listama za preuzimanje utovarnih jedinica/ Packing list** moguće je stvoriti "picking" jedinica tereta, za razliku od uobičajene procedure odabira koja stvara listu za preuzimanje s pojedinačnim artiklima.    
Liste za preuzimanje utovarnih jedinica, koriste se kada se želi poslati roba kupcu, dok je za interna premještanja utovarnih jedinica unutar vlastitih skladišta preporučljivo koristit  [Liste za Transfer utovarnih jedinica](/docs/logistics/wms/udc/loading-unit-transfer-list). 

**Parametri za utovar/istovar** unose se u tablicu [Parametri Utovar/Istovar za korisnika](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Parametri se unose dva puta jer obrazac koristi i uzrok punjenja i pražnjenja.

:::note Napomena
Ako je u [Parametri zaduženja/razduženja za korisnika](/docs/configurations/parameters/general-parameters/deliverynotes-grouping)  za tog korisnika povezan samo jedno skladište, to će se skladište predložiti kao zadano. Međutim, ako je povezan više od jednog skladišta, nijedno neće biti predloženo kao zadano, a korisnik će moći birati samo između onih koji su uneseni.
:::

Za sve informacije o kodiranju barkodova koji se čitaju u polju **Šifra barkoda** pogledajte stranicu o [Barkod Tokenizeru](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Potvrda transfera utovarnih jedinica (WMS verzija)

Ovaj postupak koristi se za pretraživanje i potvrđivanje postojeće [Liste za Transfer utovarnih jedinica](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) kako bi se izvršio pokret skladišta.

Obrazac **Potvrda transfera utovarnih jedinica** koristi se za potvrdu postojeće [Liste za Transfer utovarnih jedinica](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) kako bi se izvršio pokret skladišta.

U filtru je moguće pretražiti listu od interesa i također je moguće izravno je potvrditi s odgovarajućim gumbom bez otvaranja. 
Alternativno, moguće je ući u listu i pregledati jedinice tereta koje još nisu prenesene i one već prenesene unutar odgovarajućih kartica, kako bi je mogli potvrditi i stvoriti pokret skladišta.

**Parametri punjenja/pražnjenja** unose se u tablicu [Parametri Punjenje/Pražnjenje za korisnika](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

Za sve informacije o kodiranju barkodova koji se čitaju u polju **Šifra barkoda** pogledajte stranicu o [Barkod Tokenizeru](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Potvrda preuzimanja utovarnih jedinica (WMS verzija)

Obrazac **Potvrda preuzimanja utovarnih jedinica** koristi se za pretraživanje i potvrđivanje postojeće [Liste za preuzimanje utovarnih jedinica / Packing list](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) kako bi se izvršio pokret skladišta pražnjenja.

U filtru je moguće pretražiti listu od interesa i također je moguće izravno je potvrditi s odgovarajućim gumbom bez otvaranja. 
Alternativno, moguće je ući u listu i pregledati jedinice tereta koje još nisu preuzete i one već preuzete unutar odgovarajućih kartica, kako bi je mogli potvrditi i stvoriti pokret skladišta. 

**Parametri punjenja/pražnjenja** unose se u tablicu [Parametri Punjenje/Pražnjenje za korisnika](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Za sve informacije o kodiranju barkodova koji se čitaju u polju **Šifra barkoda** pogledajte stranicu o [Barkod Tokenizeru](/docs/configurations/tables/general-settings/barcode-tokenizer).