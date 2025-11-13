---
title: Fluentis NSO
sidebar_position: 5
---

## Konfiguracija

Prva konfiguracija koju je potrebno izvršiti je uključivanje oznake Prijenos elektroničkih narudžbi u *Početna stranica > Tablice > Opće postavke > Konfiguracija elektroničkih dokumenata*.        
U tablici Konfiguracija elektroničkih dokumenata moguće je definirati za svako poduzeće način korištenja prijema i slanja elektroničkih narudžbi prema javnoj upravi.  
U istoj tablici moguće je i odrediti kako se određene transakcije trebaju izvršavati.        
Između tablica općih postavki nalazi se odjeljak PEPPOL gdje se nalaze:  
Prekodirane tablice:  
- Standardni tipovi narudžbi kupca PEPPOL – sadrži kodove tipova narudžbi i pod-narudžbi definirane u PEPPOL standardnoj code listi
- Standardni PEPPOL kodovi mjernih jedinica – sadrži mjerne jedinice definirane u PEPPOL standardnoj code listi
- Standardni PEPPOL kodovi PDV-a – sadrži PDV kodove definirane u PEPPOL standardnoj code listi
- Standardni PEPPOL kodovi popusta
- Standardni PEPPOL kodovi troškova
- Standardna PEPPOL klasifikacija artikala
- Priroda procesa
- Priroda dokumenata

## Tablice za konfiguraciju

Tablice koje je potrebno konfigurirati su sljedeće:    

- Vrste narudžbi u Fluentisu koje odgovaraju vrstama narudžbi u PEPPOL-u (konfiguracija vrsta narudžbi kupaca)
- Šifre PDV-a u Fluentisu koje odgovaraju PEPPOL PDV šiframa (konfiguracija PDV-a)
- Jedinice mjere u Fluentisu koje odgovaraju PEPPOL šiframa jedinica mjere (konfiguracija jedinica mjere)
- U vrstama barkoda potrebno je definirati koji tip barkoda identificira AIC kod, standardnu šifru ili klasifikaciju artikala
- Konfiguracija vrsta rabata, gdje se povezuju vrste popusta u Fluentisu s PEPPOL šiframa rabata
- Konfiguracija vrsta troškova, gdje se povezuju vrste troškova u Fluentisu s PEPPOL šiframa troškova

## Podaci iz unaprijed definiranih tablica  

Potrebno je identificirati vrstu narudžbe koristeći vrijednosti iz pripadajuće PEPPOL code list tablice, koja uključuje sljedeće kodove:   
- “220” – narudžba kupnje u užem smislu; 
- “227” – narudžba isporuke.       

U dokumentima tipa:  
- početna i zamjenska narudžba  
- zamjenska potvrdna narudžba;          

šifra vrste narudžbe navodi se u elementu “OrderTypeCode”, primjerice:  

< cbc:OrderTypeCode>220< /cbc:OrderTypeCode>             

U dokumentima tipa:         

- početna i zamjenska prethodno dogovorena narudžba;       

šifra vrste narudžbe navodi se u polju “SpecialTerms” elementa “DeliveryTerms”, primjerice:          

< cac:DeliveryTerms> < cbc:SpecialTerms>220< /cbc:SpecialTerms> < /cac:DeliveryTerms>
         
Postoji i dodatna, neobavezna, klasifikacija vrsta narudžbi.  
Za vrstu 220 – Narudžba kupnje:       
- OF, narudžba za fakturiranje već potrošenih proizvoda  
- OFR, narudžba za fakturiranje i nadopunu zaliha  
Za vrstu 227 – Narudžba isporuke:      
- CD skladište na povjerenje  
- CV roba na pregled 
- CG besplatna posudba        

U dokumentima tipa:  
- početna i zamjenska narudžba;    
- zamjenska potvrdna narudžba;          

šifra podvrste narudžbe navodi se u polju “SpecialTerms” elementa “DeliveryTerms”, primjerice:       

< cac:DeliveryTerms> < cbc:SpecialTerms>OFR< /SpecialTerms> < /cac:DeliveryTerms>
     
U dokumentima tipa:
- očetna i zamjenska prethodno dogovorena narudžba        

šifra podvrste narudžbe navodi se u polju “SpecialTerms” elementa “DeliveryTerms”, iza šifre vrste narudžbe, koristeći strukturirani format polja, primjerice:         

< cac:DeliveryTerms> < cbc:SpecialTerms>220#OFR< /SpecialTerms> < /cac:DeliveryTerms>

## Šifra artikla  

Identifikacija proizvoda (dobara ili usluga) unutar svake linije narudžbe odvija se, osim putem imena (element "Name", koji je obavezan) i opisa (element "Description"), i korištenjem identifikacijskih kodova.  
Specifično, obrasci navedenih dokumenata primarno predviđaju dva tipa koda:  
- kod koji dodjeljuje dobavljač (element "SellersItemIdentification/ID");  
- standardni kod, koji odgovara identifikatoru dodijeljenom proizvodu od strane sustava jedinstvene identifikacije (element "StandardItemIdentification/ID") odabranom iz odgovarajuće liste kodova predviđene standardom PEPPOL.  

Elementi navedeni nisu obavezni, međutim njihova upotreba se toplo preporučuje.  
Primjer:  

< cac:OrderLine>          
        < cac:LineItem>        
        < cac:Item>        
            < cbc:Name>Penna stilografica< /cbc:Name>        
            < cbc:Description>Penna stilografica edizione limitata< /cbc:Description>        
            < cac:SellersItemIdentification>           
                < cbc:ID>Stilo24< /cbc:ID>       
            < /cac:SellersItemIdentification>      
            < cac:StandardItemIdentification>      
                < cbc:ID schemeID=”0160”>0K10999746< /ID>       
            < /cac:StandardItemIdentification>       
        < /cac:Item>       
        < /cac:LineItem>      
< /cac:OrderLine>          

Za robu široke potrošnje, preporučuje se da se element “StandardItemIdentification/ID” vrednuje s odgovarajućim GTIN kodom (koji odgovara “schemeID=”0160” iz popisa kodova PEPPOL), kao što je prikazano u prethodnom primjeru.  
Za farmaceutske proizvode koji imaju kod za odobrenje stavljanja u promet (AIC) izdan od Italijanske agencije za lijekove (AIFA), element “SellersItemIdentification/ID” uvijek treba biti vrednovan s odgovarajućim AIC kodom.

## Grupacija artikala  

Za svaki proizvod, unutar odgovarajuće linije narudžbe moguće je specificirati jedan ili više kodova klasifikacije, popunjavanjem polja “ItemClassificationCode/ID” elementa “CommodityClassification”. Vrijednost koja se treba navesti mora biti preuzeta iz jedinstvenog sustava klasifikacije odabranog među onima prisutnim u odgovarajućoj kodnoj listi predviđenoj standardom PEPPOL, kao što je prikazano u sljedećem primjeru:

< cac:OrderLine>        
< cac:LineItem>       
< cac:Item>       
< cac:CommodityClassification>        
< cbc:ItemClassificationCode listVersionID=”19.0501” listID=”STI”>12345678< /cbc:ItemClassificationCode>      
< /cac:CommodityClassification>       
< /cac:Item>       
< /cac:LineItem>      
< /cac:OrderLine>      

Preporučuje se koristiti barem jedan od sustava klasifikacije navedenih u tablici koja slijedi, gdje je to primjenjivo.     

| Kod | Opis standarda klasifikacije | Područje primjene |
| :-- | :-- | :-- |
| STI | Službeni europski sustav jedinstvene klasifikacije za javne nabave (CPV – Common Procurement Vocabulary) | Proizvodi i usluge koji su predmet javnih nabava |
| STL | Anatomskoterapijsko-kemijski sustav klasifikacije (ATC – Anatomical Therapeutic Chemical classification system) | Lijekovi |
| STO | Talijanska nacionalna klasifikacija medicinskih uređaja (CND – Classificazione Nazionale Dispositivi medici) | Medicinski uređaji |
| STH | Komercijalna klasifikacija proizvoda (GPC – Global Product Classification) | Proizvodi široke potrošnje |
| IB | Međunarodni sustav identifikacije knjiga (ISBN – International Standard Book Number) | Knjige |
| ZZZ | Sustav definiran ručno između ugovornih strana | Za medicinske uređaje omogućuje navođenje vrijednosti „DM1“, „DM2“ ili „DM0“ (kada prva dva nisu primjenjiva) |

U sustavu Fluentis, ovi se kodovi dodjeljuju tablici šifri barkodova, koja se zatim povezuje s artiklom.

## Jedinica mjere

U redovima narudžbi potrebno je navesti količinu proizvoda uz specificiranje jedinice mjere iz odgovarajuće Liste kodova (Code List) predviđene standardom PEPPOL, kao što je prikazano u sljedećem primjeru:

< cac:OrderLine> 
< cac:LineItem> 
< cbc:Quantity unitCode=”C62”>3< /cbc:Quantity> 
< /cac:LineItem> 
< /cac:OrderLine>          

U sljedećoj tablici navedeni su kodovi jedinica mjere koje se preporučuje koristiti, gdje je primjenjivo (za više detalja upućujemo na Smjernice).  

| Kod | Jedinica mjere | Područje primjene |
| :-: | :-- | :-: |
| C62 | Jedinica proizvoda (roba ili usluga) | Količina |
| PR | Par | Količina |
| XBK | Pakiranje, kutija: primarno pakiranje koje sadrži više jedinica istog artikla | Pakiranje |
| DZP | Standardno pakiranje koje sadrži dvanaest komada istog artikla | Pakiranje |
| KT | Set (kit): primarno pakiranje koje sadrži više različitih artikala koji se koriste zajedno | Pakiranje |
| XBX | Paket, kutija (box):  sekundarno pakiranje koje sadrži više primarnih pakiranja | Pakiranje |
| XOB | Paleta: platforma ili otvorena kutija, najčešće drvena, na kojoj se roba drži radi lakše mehaničke manipulacije tijekom transporta i skladištenja | Pakiranje |
| MTR | Metar | Duljina |
| CMT | Centimetar	 | Duljina |
| MMT | Millimetro | Duljina |
| MTK | Kvadratni metar | Površina |
| CMK | Kvadratni centimetar | Površina |
| MTQ | Kubni metar | Volumen |
| CMQ | Kubni metar | Volumen |
| MMQ | Kubni milimetar | Volumen |
| LTR | Litar | Kapacitet |
| MLT | Mililitar | Kapacitet |
| GRM | Gram | Masa |
| HGM | Dekagram | Masa |
| KGM | Kilogram | Masa |
| MGM | Miligram | Masa |
| MC | Mikrogram | Masa |
| HUR | Sat | Vrijeme |
| DAY | Dan	 | Vrijeme |
| MON | Mjesec | Vrijeme |
| ANN | Godina | Vrijeme |
| E40 | Radni dan | Radno vrijeme |
| KWH | Kilovatsat | Električna energija |
| BQL | Bekerel	 | Radioaktivnost |
| 4N | Megabekerel | Radioaktivnost |
| GBQ | Gigabekere | Radioaktivnost |
| CUR | Kurije | Radioaktivnost |
| MCU | Milikurije | Radioaktivnost |

## Odredište robe  

ID označava šifru mjesta na kojem se mora izvršiti isporuka.  
Ova se šifra uvijek mora navesti ako je mjesto isporuke institucionalna adresa kupca, kojoj je dodijeljen jedinstveni identifikator dostupan dobavljaču.           

Potrebno je na odgovarajući način popuniti sva polja elementa “DeliveryLocation” (uključujući i neobavezna, ako doprinose preciznijem određivanju lokacije), kao što je prikazano u primjeru koji se odnosi na dokument tipa Narudžba ili Potvrda narudžbe.
Napomena: mjesto isporuke definira se za cijeli dokument, a ne za pojedine stavke.         

Kako bi se olakšala isporuka robe u institucionalne lokacije javnih uprava, preporučuje se da se točke isporuke kodiraju na jedinstven način.
Posebno za ustanove nacionalnog zdravstvenog sustava (SSN), od rujna 2019. dostupan je web portal  
(http://www.puntidiconsegna-nso.it/) na kojem se može objaviti popis identifikacijskih kodova vlastitih institucionalnih točaka isporuke. Specifično, preporučuje se institucijama da kreiraju kodove za institucijske točke isporuke tako da ispred vlastitog poreznog broja dodaju unutarnji kod točke isporuke, koji se slobodno definira, odvojen znakom “-“ (crtica ili minus), bez umetanja razmaka. Format koda će stoga biti: Porezni broj - ID unutarnje točke isporuke. Na primjer, u slučaju institucije s poreznim brojem “123456788901” i skladištem “acdg45”, kod za isporuku (Ship-To) koji treba unijeti u narudžbu bit će "123456788901-acdg45” (v. Paragraf 3.3.3.6). Preporučuje se da duljina ovog koda bude unutar 20 ukupnih znakova (“-” uključen).

U Fluentisu, odredište robe prepoznaje se putem ovog ID koda i traži se kao kodirano odredište kod kupca, dodjeljujući nadimak kontakta u Fluentisu posljednjih 7 znakova koda koji slijedi nakon – od točke isporuke NSO.

## PEPPOL Narudžbe kupaca 

U aplikacijama Bizlink postoji obrazac PEPPOL Narudžbe Kupaca za pregled svih poruka koje dolaze iz NSO i odlaze prema NSO.  
Nakon što odaberete redak narudžbe, pritiskom na tipku “Prikaži” na traci s alatima otvara se dodatni obrazac **Registar dokumenata SDI**.  
Unutar ovog obrasca prikazani su neki podaci vezani uz NSO datoteku narudžbe, kao što su stanje dokumenta, povezane datoteke i sadržaj datoteke.  
Moguće je pregledati sadržaj narudžbe. Također je moguće pregledati eventualne obavijesti SDI.  
Pritiskom na tipku **Preuzmi privitak** moguće je preuzeti odabrani privitak u mreži “Privitci (Allegati)”, dok pritiskom na “Preuzmi sadržaj registra” moguće je preuzeti odabranu datoteku u obrascu **Registar dokumenata SDI**, koja sadrži xml datoteku narudžbe i sve povezane datoteke, kao što su one s obavijestima.  
Pritiskom na tipku **Otvorite dokument** na traci s alatima moguće je pregledati sadržaj Peppol narudžbe, ako je barem u stanju “Uneseno”, izravno u Fluentisu, otvaranjem obrasca “Narudžbe kupaca”.  
Pritiskom na tipku **Registar dokumenata SDI** u obrascu “Narudžbe kupaca” otvorit će se obrazac “Registar dokumenata SDI”, slično kao kada se pritisne tipku “Prikaži” na traci s alatima obrasca *PEPPOL narudžbe kupaca*.  
Pritiskom na tipku **Preuzmi privitak** na traci s alatima obrasca *PEPPOL Narudžbe kupaca* preuzeti će se, u mapu koju odabere korisnik, xml datoteka odabrane narudžbe.  
Pritiskom na tipku **Izmijeni XML podatke** nakon odabira narudžbe sa stanjem SDI “U pogrešci (In errore)”, otvara se obrazac za izmjenu podataka u uvezenoj datoteci.  
U ovom obrascu moguće je ispraviti eventualne netočne podatke o primljenoj narudžbi, kao što su redovi s cijenom 0, kodovi artikala koji se ne mogu automatski interpretirati, jedinice mjere, kako bi se naznačili nedostajući obavezni podaci.  
U mreži **Registar Narudžbi NSO ** prikazuju se različite informacije. Pogledajmo glavne:  
- **Stanje SDI**: stanje napretka u kojem se nalazi PEPPOL narudžba (vidi dio o stanjima narudžbe)  
- **Tip**: tipologija PEPPOL narudžbe i može imati sljedeće vrijednosti:  
> - 220 = Narudžba za kupnju (narudžba primljena od dobavljača)  
> - 227 = Narudžba za isporuku  
> - PRE = Pre-dogovorena narudžba  
- **Broj (Id)**: broj narudžbe, koji s datumom kupca i endpointKlijentom jedinstveno identificira narudžbu  
- **Datum kupca**: datum narudžbe, koji s brojem (Id) i endpointKlijentom jedinstveno identificira narudžbu  
- **EndpointKlijent**: može označavati ili kod ureda kupca ili OIB dobavljača koji je poslao narudžbu, i s brojem (Id) i datumom kupca jedinstveno identificira narudžbu  
- **Tip procesa**: označava tipologiju procesa kojoj pripada narudžba i može imati 3 vrijednosti:  
> - Jednostavna narudžba  
> - Potpuna narudžba  
> - Pre-dogovorena narudžba  
- **Tip dokumenta**: označava posljednju tipologiju dokumenta ili obavijesti vezane uz narudžbu  
- **Tripleta**: referenca na narudžbu na koju se odnosi trenutna narudžba, tripleta se sastoji od: Identifikatora dokumenta, datuma izdavanja dokumenta i identifikatora subjekta koji je izdao dokument  
- **Naziv datoteke NSO**: označava naziv xml datoteke PEPPOL narudžbe  
- **NSO datum primitka**: označava datum primitka narudžbe od strane kupca ili slanja pre-dogovorene narudžbe  
- **NSO posljednji događaj**: označava datum posljednje promjene stanja narudžbe