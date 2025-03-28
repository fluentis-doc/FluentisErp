---
title: Kartica filtera
sidebar_position: 1
---

| Funckija | Značenje |
| --- | --- |
| Traži | Tipka za traženje dospijeća koja se odnose na podkonto za prijenos na drugi podkonto.|
| Knjiži | Tipka za knjiženje prijenosa između odabranih konta. |

### GENERIČKA UPORABA

Obrazac se sastoji od gornjeg dijela filtera unutar kojeg je obavezno naznačiti podkonto na kojem se traže stavke za prijenos, prikaz za odabir stavki i na dnu postavka predloška knjiženja. Tu su još datumi unosa/obračuna i podkonto na kojem se predmeti ponovno otvaraju. Konkretno, predložak knjiženja mora uključivati i oznaku otvaranja i zatvaranja dospijeća. Rezultat će biti otkrivanje zatvaranja stavki odabranih za ponovno otvaranje, uz zadržavanje istih izvornih referenci, ali na odredišnom podkontu.


### KORIŠTENJE U KONTEKSTU OBUSTAVE PDV-A  
Ovaj se postupak također može koristiti u kontekstu obustave PDV-a (tzv. gotovinski PDV) koji, kao što je poznato, predviđa da, nakon godinu dana od fakturiranja, ako bi se naplata ili plaćanje izvršili kao plaćanje ili odbitak relevantnog PDV-a, potrebno je učiniti PDV oporezivim ili odbiti porez na kupnju.  

Postavljanjem flaga (dolje) **Prikaži istek suspendiranog PDV-a koji nije zatvoren na datum** i odgovarajućom valorizacijom polja  **PDV-a datum je obustavljen**, samo otvorene stavke koje se odnose na operacije s obustavljenim PDV-om (identificirani kroz posebno konfigurirane predloške knjiženja) na datum postavljen u polju, bit će prikazane u glavnom prikazu.

U ovom trenutku, njihovim odabirom i postavljanjem željenog predloška knjiženja, pritiskom na **Knjiži**, kreira se zapis prijenosa s konta koji se koristi za suspendirani PDV na konta za dugovni ili potražni PDV, ostavljajući otvorena dospijeća.   
Računovodstveno knjiženje naplate ili plaćanja automatski će otkriti prijenos i neće ponovno pokrenuti automatski unos za prijenos PDV-a.  





