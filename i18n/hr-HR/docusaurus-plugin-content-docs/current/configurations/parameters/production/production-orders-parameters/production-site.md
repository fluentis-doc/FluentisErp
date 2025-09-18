---
title: Mjesto proizvodnje 
sidebar_position: 3
---

Tablica vam omogućuje upravljanje kodiranjem različitih *Vrsta proizvodnih mjesta*. 

Omogućuje umetanje novih zapisa ili traženje postojećih kako biste ih pregledali, izmijenili ili izbrisali. 

## Pretraga mjesta proizvodnje 

Obrazac se sastoji od područja filtra i područja rezultata. Nakon što ste postavili sve željene filtre, jednostavno kliknite na tipku **Traži** kako biste vidjeli rezultate unutar mreže rezultata.  

##  Umetnite nova proizvodna mjesta 

Da biste umetnuli novu proizvodnu lokaciju, koristite tipku **Nuovo** u obrascu za pretraživanje.

U obrascu za unos proizvodno mjesto definirano je u gornjem dijelu pomoću polja **Šifra** i **Opis**. 

##  Promjena mjesta proizvodnje

Za izmjenu proizvodnih mjesta odaberite mjesto u obrascu za pretraživanje i dvaput kliknite na red ili upotrijebite tipku **Uredi**.

Ulaskom u način uređivanja moguće je pregledati i modificirati parametre relevantnih skladišta za tu *Proizvodnu lokaciju*.       
To su isti oni koji su prisutni u [Parametrima proizvodnog naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro),  ali imaju prioritet nad općim, jer, ako je mjesto proizvodnje umetnuto, koriste ih procedure umjesto općih.   
Za više detalja o logikama i prioritetima skladišta i uzroka koji se koriste, preporučuje se pregledavanje dokumentacije vezane uz [Parametri proizvodnih naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).  

Polje **Kontakt** u **Proizvodnom mjestu** koristi se u [Otpremama](/docs/logistics/shipping/shippings), za automatsko prijedlog adrese mjesta utovara kada se odabere odgovarajuće proizvodno mjesto.   

## Konfiguracija i rad proizvodnog mjesta  

Si riportano di seguito i passaggi necessari per una corretta configurazione ed utilizzo dei **Proizvodnih mjesta**:
 
1. Kreirati proizvodno mjesto unošenjem šifre i opisa.  
2. Povezati kreirano proizvodno mjesto s pojedinačnim skladištima koja će mu pripadati, upisivanjem u polje *Proizvodno mjesto* u tablici [Skladišta](/docs/configurations/parameters/production/production-orders-parameters/production-site). Proizvodno mjesto može se povezati i s korištenom strojem unošenjem u polje *Proizvodno mjesto* u tablici [Strojevi](/docs/configurations/tables/production/machines/).  
3. Dovršiti kreiranje proizvodnog mjesta unosom skladišta (birajući samo ona povezana s tim specifičnim mjestom) i pripadajućih predložaka za ulaz i izlaz, kako je detaljno opisano u članku posvećenom [Parametrima proizvodnih naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
4. U [Proizvodnoj narudžbi](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders) potrebno je specificirati proizvodno mjesto u odgovarajućem polju zaglavlja.  
5. Planerske procedure za proizvodnju tog artikla uzimat će u obzir dostupnost tog i svih njegovih komponenti analizirajući samo skladišta povezana s tim proizvodnim mjestom, zanemarujući dostupnosti u svim ostalim skladištima.  

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, tipke i polja](/docs/guide/common).