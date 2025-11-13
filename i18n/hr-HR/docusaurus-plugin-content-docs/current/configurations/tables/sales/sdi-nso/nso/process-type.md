---
title: Tipovi procesa  
sidebar_position: 3
---

## Ordinazione semplice

Proces Jednostavne narudžbe predviđa da svaka eventualna komunikacija o prihvaćanju, odbijanju ili izmjeni Narudžbe od strane Dobavljača može doći Klijentu isključivo tradicionalnim putem (telefon, fax, e-mail, itd.), čime se implicitno obavještava Dobavljač da nije dostupan za primanje eventualnog odgovora elektroničkim putem.
Klijent može ipak opozvati ili izmijeniti prethodno izdanu Narudžbu putem izdavanja nove Narudžbe, koja mora sadržavati naznaku Narudžbe koju se želi opozvati ili izmijeniti.
Posljedično, Narudžba može imati sljedeće oblike:  
- Početna narudžba  
- Povezana početna narudžba  
- Narudžba za opoziv  
- Zamjenska narudžba        

Ako je u Narudžbi naznačen datum izvršenja isporuke, vremensko ograničenje do kojeg je moguće zamijeniti ili opozvati Narudžbu određuje se tim datumom umanjenim za vrijeme potrebno za pripremu i izvršenje isporuke na unaprijed dogovorenom mjestu.
Dobavljač treba smatrati važećim samo opozive i zamjene Narudžbi koje su stigle prije nego što je izvršio Narudžbu koja se opoziva ili zamjenjuje (tj. prije nego što je narudžba realizirana).
U Narudžbi može biti naznačen datum do kojeg je Dobavljač dužan odgovoriti.  

## Kompletna narudžba  

Ovaj proces predviđa korištenje tri Dokumenta:
- Narudžba, izdana od strane Klijenta;
- Odgovor, eventualno izdano od Dobavljača;
- Potvrđena narudžba, eventualno izdana od Klijenta.   

Proces započinje slanjem Narudžbe od strane Klijenta i može završiti alternativno:   
- primitkom Narudžbe od strane Dobavljača;
- primitkom Odgovora od strane Klijenta;
- primitkom potvrđene Narudžbe od strane Dobavljača.

## Izdavanje narudžbe  

Narudžba može imati četiri oblika:
- Početna narudžba
- Povezana početna narudžba
- Narudžba za opoziv
- Zamjenska narudžba      

Narudžba za opoziv mora sadržavati samo jednu liniju narudžbe bez sadržaja, jer predstavlja samo poništenje prethodno poslane Narudžbe na koju se odnosi.
Dobavljač treba smatrati važećim samo opozive i zamjene Narudžbi koje su stigle prije nego što je izvršio Narudžbu koja se opoziva ili zamjenjuje. Ako je u Narudžbi naznačen datum izvršenja isporuke (Delivery/RequestedDeliveryPeriod/StartDate = EndDate), on predstavlja vremensko ograničenje do kojeg je moguće zamijeniti ili opozvati Narudžbu, umanjeno za vrijeme potrebno za pripremu i izvršenje isporuke.
Zamjene i opozivi Narudžbi zamjenjuju i poništavaju kako navedenu Narudžbu, tako i sve prethodne zamjene i opozive vezane uz istu početnu Narudžbu.
Zamjenska Narudžba formalno pokreće novi proces Narudžbe, koji može biti jednostavan ili kompletan ovisno o navodima u samoj zamjenskoj Narudžbi.
U Narudžbi može biti naznačen datum do kojeg je Dobavljač dužan odgovoriti (ValidityPeriod/enddate).

## Odgovor na narudžbu  

Na primitak Narudžbe, Dobavljač može:
- završiti proces bez slanja odgovora;
- poslati Odgovor (crveni tok na slici), koji mora sadržavati naznaku prethodno poslane Narudžbe, pri čemu obavještava Klijenta alternativno da namjerava:  
> - potvrditi primitak Narudžbe (Odgovor primitka); 
> - prihvatiti primljenu Narudžbu (Odgovor prihvaćanja); 
> - odbiti primljenu Narudžbu (Odgovor odbijanja); 
> - zvršiti izmjene primljene Narudžbe (Odgovor s izmjenama).        

Odgovor s izmjenama mora sadržavati sve linije narudžbe, kako one koje se zadržavaju, tako i one koje se mijenjaju, jer nadopunjuje prethodno poslane Narudžbe na koje se odnosi.
Odgovor na opozvanu Narudžbu nema učinka za Klijenta.  

## Potvrda odgovora  

Na primitak Odgovora, Klijent može:  
- završiti proces bez slanja potvrđene Narudžbe (plavi tok na slici);
- poslati potvrđenu Narudžbu (crveni tok na slici), koja mora sadržavati naznaku Odgovora na koji se odnosi, pri čemu obavještava Dobavljača alternativno da namjerava: 
> - prihvatiti primljeni Odgovor (Potvrđena narudžba za potvrdu); 
> - odbiti primljeni Odgovor (Potvrđena narudžba za odbijanje); 
> - zamijeniti izmjene u Narudžbi sadržane u primljenom Odgovoru (Zamjenska potvrđena narudžba).      

Ako Klijent namjerava zamijeniti izmjene u Narudžbi sadržane u Odgovoru Dobavljača, potvrđena Narudžba poništava sve prethodne Dokumente trenutnog procesa i pokreće novi proces Narudžbe.
Dobavljač treba smatrati važećim samo potvrđene Narudžbe koje su stigle prije nego što je izvršio Narudžbu.       

Ako Klijent pošalje zamjensku potvrđenu Narudžbu u odgovoru Dobavljača, potvrđena Narudžba poništava sve prethodne Dokumente (Narudžbu i Odgovor) trenutnog procesa i pokreće novi proces kompletne Narudžbe.
Izostanak potvrđene Narudžbe ekvivalentan je potvrdi Odgovora.
Važeće su samo potvrđene Narudžbe koje stignu prije izvršenja narudžbe.  

## Prethodno dogovorena narudžba 

Prethodna autorizacija Dobavljača za izdavanje Narudžbe umjesto Klijenta može proizaći iz ugovora ili drugog dokumenta (npr. narudžbe poslane faxom ili e-mailom zbog nedostupnosti sustava za elektroničko izdavanje Narudžbi, ili narudžbe realizirane putem platforme za telekomunikacijsku komunikaciju), kojim Klijent daje Dobavljaču tu ovlast, prethodno određujući područje i ograničenja u kojima se može koristiti.
Ovaj proces predviđa korištenje dva Dokumenta:   
- Prethodno dogovorena Narudžba, izdana od strane Dobavljača;  
- Potvrđena Narudžba, eventualno izdana od Klijenta.         

Proces započinje slanjem Prethodno dogovorene Narudžbe od strane Dobavljača, koji je ovlašten Klijentom, i može završiti alternativno:  
- primitkom Prethodno dogovorene Narudžbe od strane Klijenta;  
- primitkom potvrđene Narudžbe od strane Dobavljača.       

Svaka eventualna komunikacija o potvrdi, odbijanju ili zamjeni Prethodno dogovorene Narudžbe od strane Klijenta obično dolazi Dobavljaču putem NSO-a.
Dobavljač može opozvati ili izmijeniti prethodno izdanu Prethodno dogovorenu Narudžbu putem nove Prethodno dogovorene Narudžbe, koja mora sadržavati naznaku Prethodno dogovorene Narudžbe koju se želi opozvati ili izmijeniti.  

Posljedično, Prethodno dogovorena Narudžba može imati sljedeće oblike:  
- Početna Narudžba 
- Povezana početna Narudžba  
- Narudžba za opoziv, koja mora sadržavati naznaku prethodno poslane Narudžbe koju se želi opozvati, te samo jednu liniju narudžbe, jer predstavlja samo poništenje prethodne Narudžbe; 
- Zamjenska Narudžba, koja mora sadržavati naznaku prethodno poslane Narudžbe koju se želi izmijeniti, predstavlja novu Narudžbu koja poništava sve prethodne Dokumente (Narudžbe i potvrđene Narudžbe) trenutnog procesa i pokreće novi proces Prethodno dogovorene Narudžbe, stoga mora sadržavati sve linije narudžbe (kao početna Narudžba).  
Na primitak Prethodno dogovorene Narudžbe, Klijent može:   
- završiti proces bez slanja potvrđene Narudžbe;  
- poslati potvrđenu Narudžbu, koja mora sadržavati naznaku Prethodno dogovorene Narudžbe na koju se odnosi, pri čemu obavještava Dobavljača alternativno da namjerava:   
> - potvrditi primljenu Prethodno dogovorenu Narudžbu (Potvrđena narudžba za potvrdu);
> - odbiti primljenu Prethodno dogovorenu Narudžbu (Potvrđena narudžba za odbijanje);
> - zamijeniti primljenu Prethodno dogovorenu Narudžbu (Zamjenska potvrđena Narudžba).  

Ako Klijent namjerava zamijeniti Prethodno dogovorenu Narudžbu Dobavljača, potvrđena Narudžba poništava sve prethodne Dokumente trenutnog procesa i pokreće novi proces koji, prema naznakama u potvrđenoj Narudžbi, može biti Jednostavna ili Kompletna narudžba.
Važeće su samo potvrđene Narudžbe koje stignu prije nego što je Prethodno dogovorena Narudžba realizirana s dokumentima o isporuci.