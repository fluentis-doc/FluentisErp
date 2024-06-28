---
title: Liste za premještaj transportnih jedinica (verzije WPF i WMS)
sidebar_position: 2
---

### Liste za transfer UDC-a (verzija WPF) 

**Liste za premještaj transportnih jedinica** su vrlo slične [Listama za preuzimanje UDC / Packing liste](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), s razlikom da se koriste za premještanje UDC unutar vlastitih skladišta, dok se **Liste za podizanje transportnih jedinica/ Packing liste** koriste kada se roba šalje kupcu.      

Iz kategorije **Traži** moguće je pretražiti prethodno unesene liste. 


Za stvaranje nove liste kliknite na **Novo**.          
Obavezni podaci za unos su:            
**Vrsta uzimanja sa zaliha**: odaberite vrstu [preuzimanja](/docs/logistics/picking/picking-management) koju želite koristiti;       
**Korisnik**: unesite identifikacijski broj zaposlenika koji stvara dokument;        
**Korisnik koji potvrđuje**: unesite identifikacijski broj zaposlenika koji ima ovlasti za potvrdu liste.  

Nakon unosa ovih podataka i ostalih ako je potrebno, možete spremiti Listu transfera. Budući da se radi o transferu, također je potrebno unijeti **Polazno skladište** i **Odredišno skladište**.       

*Posebni gumbi:*


> **Upravljanje transportnom jedinicom**: odabirom Liste za transfer i klikom na ovaj gumb otvara se maska **Upravljanje transportnom jedinicom** u kojoj su dostupni UDC-ovi za transfer. Moguće je premjestiti UDC pritiskom na gumb **Premjesti transportnu jedinicu**.             
> **Otpremnica**: stvara otpremnicu iz odabrane **Liste za premještaj transportnih jedinica**.    

Za sve informacije o korištenju ovog obrasca u WMS-u pogledajte [Listu premještaj transportnih jedinica](/docs/logistics/wms/udc/loading-unit-transfer-list)

### Liste transfera UDC-a (WMS verzija)

Ovaj postupak koristi se za stvaranje lista transfera s jedinicama tereta.       
**Liste za premještaj transportnih jedinica** su vrlo slične [Liste za preuzimanje UDC / Packing listama](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), s razlikom da se koriste za premještanje UDC unutar vlastitih skladišta, dok se **Liste za preuzimanje UDC / Packing list** koriste kada se roba šalje kupcu. Odgovarajući pokret skladišta generira se samo putem postupka [Potvrde transfera](/docs/logistics/wms/udc/confirm-transfer). 

**Parametri zaduženja/razduženja** unose se u tablicu [Parametri zaduženja/razduženja za korisnika](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Parametri se unose dvaput jer obrazac koristi i razlog učitavanja i istovara.

:::note Napomena
Ako je u [Parametri zaduženja/razduženja za korisnika](/docs/configurations/parameters/general-parameters/deliverynotes-grouping)  za tog korisnika povezan samo jedno skladište, to će se skladište predložiti kao zadano. Međutim, ako je povezan više od jednog skladišta, nijedno neće biti predloženo kao zadano, a korisnik će moći birati samo između onih koji su uneseni.
:::

Za sve informacije o kodiranju barkodova koji se čitaju u polju **Šifra barkoda** pogledajte stranicu o [Barkod Tokenizeru](/docs/configurations/tables/general-settings/barcode-tokenizer).