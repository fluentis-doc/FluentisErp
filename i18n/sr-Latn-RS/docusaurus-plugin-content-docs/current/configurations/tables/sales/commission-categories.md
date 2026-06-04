---
title: Kategorije provizija
sidebar_position: 3
---

U ovoj formi definiraju se kategorije provizija, odnosno neka vrsta “dodatnih podataka” za definiranje kriterija čitanja postotaka provizije.

Moguće je stoga definirati objekt poslovnog sloja (business layer) i njegovu svojstvo, koje služi kao parametar za čitanje, a u donjoj mreži specificirati uvjet filtriranja za valjanost.

Primjer **Objekt** -> FSSalesOrder
**Putanja svojstva** -> SalesOrderTypeCode (šifra tipa prodajnog naloga)  

U donjoj mreži unesite **Vrijednost** *OCIT* (primjerice za ograničavanje valjanosti na tip naloga kodiran kao *OCIT* , npr. nalog za Italiju).  

Uobičajeno je konfigurirati više slučajeva koji odgovaraju različitim vrijednostima odabrane svojine, npr. *OCIT*, *OCUE* itd., kako bi se postotci razlikovali ovisno o tipu naloga – talijanski ili europski.  

Moguće je imati i složenije scenarije s različitim kombinacijama vrijednosti i svojstava objekta. 

:::note[Napomena]
Ova konfiguracija vodi do posebnog popunjavanja mreže za definiciju prioriteta i kriterija izračuna provizije koja se nalazi u kartici *Provizije direktne* unutar registra agenta.

Isti kriterij treba unositi više puta (npr. za artikl ili klasu), pri čemu se svaki put povezuje odgovarajuća kategorija provizije koja **funkcionira kao filter**.

Redak s kriterijem koji čita klasu ili artikl, povezan s detaljem kriterija (putem tipke ***Detalj odabranih postotaka*** unutar iste forme), vrijedi samo kada je tip naloga *OCIT*.
Cijeli detalj mora se definirati u novom retku s povezivanjem na kategoriju provizije *OCUE*, koja vrijedi samo za tu kombinaciju.
:::

:::danger[Pažnja]
Popunjavanje ove forme ima nekoliko specifičnosti:  
- Obrazac se sastoji od *Master* mreže (gore) i *Detail* mreže (dolje) koja ovisi o prvoj. Nakon popunjavanja retka u *Master* mreži, *Detail* mreža ostaje u privremenom stanju gdje nije moguće pisati ili se prikazuju 4 kolone s oznakom *Vrijednost*. U stvarnosti se radi o 4 tipa podataka (tekst, datum, true / false itd...) alternativnih od kojih **samo jedan** može biti korišten u vezi s odabranom svojstvom u *Master* mreži. Stoga **nakon popunjavanja retka u *Master* mreži potrebno je ponovno pritisnuti tipku Pretraživanje u traci izbornika i ponovo odabrati** mišem redak kako bi se mogla popuniti *Detail* mreža.  
- Prilikom popunjavanja retka u *Master* mreži, nakon što se unesu kod i opis slobodni za kategoriju provizije, preporučuje se koristiti widget za pretraživanje koji sugerira naziv objekta Fluentis, na primjer, upisivanjem FSSales... bit će predloženi objekti poput FSSalesOrder, ili FSSalesInvoice itd...  
- Nakon odabira referentnog objekta Fluentis, potrebno je specificirati **svojstvo** koje će odrediti detaljnu vrijednost (popunjavanjem *Detail* mreže) koja se treba pretraživati. **Preporučuje se dvostruki klik za korištenje iskačućeg prozora za pretraživanje** koji predlaže svojstva i sve kolekcije povezane s odabranim objektom, na ovaj način je mnogo jednostavnije definirati referentno svojstvo.
:::