---
title: Sekvenca faza - višeslojna mreža
sidebar_position: 2
---

:::important Čemu služi
Postupak **Sekvenca faza** u Fluentisu, putem funkcionalnosti **"Sekvenca faza - višeslojna mreža"**, omogućava optimizaciju upravljanja proizvodnim fazama sastavljanjem sekvenci ručno ili na osnovu prilagođenih pravila.      
Nakon pažljivog odabira filtera, među kojima su radni centar, period naloga i proizvodni projekat, faze koje još nisu sekvencirane prikazuju se u gornjoj mreži. Odatle se faze premeštaju u donju mrežu kako bi im se dodelio redosled izvođenja.      
Obrazac uključuje alate za izmenu podataka povezanih sa fazama, obračun vremena i ažuriranje datuma, čime se obezbeđuje precizna kontrola planiranja proizvodnje. Posebna dugmad olakšavaju obračun sekvenci, upravljanje zalihama i ažuriranje statusa naloga, obezbeđujući efikasan tok proizvodnje.
:::

Omogućava sekvenciranje faza ručno ili prema pravilima koja definiše operater.

Obrazac se sastoji od početne oblasti za filtriranje u kojoj je moguće odabrati:

> **Radni centar**       
> **Mašina**        
> **Na datum početka naloga**         
> **Na datum završetka naloga**      
> **Proizvodni projekat**     

Proširenjem ove oblasti moguće je filtrirati i prema, na primer, *Artiklu*, *Sekvenci/Redosledu*, *Tipu proizvodnog projekta*, *Grupama radne snage*, a takođe je moguće odabrati koje vrste naloga prikazati: planirane naloge, proizvodne naloge u statusu lansiran ili izvršni.

Centralni deo obrasca sastoji se od dve mreže.           
Prva prikazuje sve radne faze kojima još nije dodeljena sekvenca. Odabirom jedne ili više faza iz prve mreže i pritiskom na dugme *Premesti faze*, odabrane faze premeštaju se u drugu mrežu (ispod), gde im je moguće dodeliti sekvencu ručno ili automatski.

:::note Napomena
Nije moguće menjati podatke faze koja je već prijavljena u proizvodnji.
:::

U donjem delu obrasca nalaze se sledeća polja:

> **Količina obaveze**: prikazuje ukupnu količinu angažovanja/obaveze za redove koje je korisnik odabrao;         
> **Jedinica mere vremena**: označava jedinicu vremena u kojoj se želi prikazati vrednost polja **Ukupno vreme**;     
> **Ukupno vreme**: prikazuje ukupno vreme (*Vreme mašine + Vreme rada + Vreme pripreme*) za redove koje je korisnik odabrao.

Dodatnim proširenjem ovog dela prikazuju se sledeći detaljni podaci samo za pregled:

> **Količina**
> **Vreme rada**
> **Vreme mašine**
> **Vreme pripreme**

*Posebna dugmad*:

> **Traži**: prikazuje faze na osnovu unetih filtera;           
> **Pretraži i razmotri zalihe**: izvršava istu funkciju kao dugme **Traži**, ali istovremeno crvenom bojom označava sve faze za koje trenutno nema raspoloživih zaliha;                   
> **Premesti faze**: premešta odabranu fazu ili faze iz prve mreže u drugu mrežu, gde im je moguće dodeliti sekvencu;         
> **Promeni faze**: nakon odabira faze omogućava njeno *Ažuriranje* promenom faze, mašine, radnog centra, ukupnog vremena mašine, vremena rada i vremena pripreme. Osim toga, odabirom opcije *Unesi* moguće je dodati novu fazu, a opcijom *Obriši* trajno ukloniti postojeću;            
> **Promeni ciklus/verziju**: omogućava promenu tehnološkog postupka i/ili verzije u tom proizvodnom nalogu;            
> **Promeni datume**: omogućava promenu datuma početka odabrane faze;         
omogućava promenu *Datuma početka* za sve odabrane planirane ili proizvodne naloge na datum naveden u iskačućem prozoru. Nakon toga, na osnovu faza i *Kalendara proizvodnih kapaciteta*, ponovo se izračunavaju *Datum završetka naloga* kao i datumi početka i završetka svake faze. Na osnovu novih datuma ponovo se izračunavaju i datumi korišćenja materijala. Uz datume na nalogu ažuriraju se i datumi na povezanom proizvodnom projektu;        
> **Izračunaj vreme faze na osnovu prioriteta**: omogućava ponovni obračun vremena nakon dodele nove sekvence ili nakon promene podataka putem funkcije **Promeni faze**;          
> **Obračun i unos proizvodnog redosleda**: nakon što su redovi u drugoj mreži raspoređeni prema potrebi, ovo dugme dodeljuje sekvencu odabranim fazama prema zadatom redosledu;       
> **Preračunaj izvodljivost**: postupak izračunava izvodljivost za materijale i prethodnu fazu za odabrane redove te primenjuje boju u poljima *Izvodljivost materijala* i *Izvodljivost faze* u donjoj mreži, prema podešavanjima definisanim u [Parametrima potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters). Ovo dugme je dostupno samo ako je aktivirana oznaka **Sekvenca faza** u odeljku *Parametri obračuna izvodljivosti* unutar [Parametara potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);          
> **Detalj izvodljivosti materijala**: otvara iskačući prozor koji prikazuje koji su materijali dostupni, a koji nisu za odabranu fazu. Ovo dugme je dostupno samo ako je aktivirana oznaka **Uzmi u obzir materijale** u odeljku *Parametri obračuna izvodljivosti* unutar [Parametara potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);      
> **Detalj izvodljivosti faza**: otvara iskačući prozor koji prikazuje status napretka prethodne faze, uključujući eventualne prijave proizvodnje unete do tog trenutka. Ovo dugme je dostupno samo ako je aktivirana oznaka **Razmotri prethodne faze** u odeljku *Parametri za obračun izvodljivosti* unutar [Parametara potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);   
otvara se iskačući prozor koji prikazuje koji su materijali dostupni, a koji nisu za odabranu fazu; dok je putem dugmeta **Detalj izvodljivosti faza** moguće proveriti status napretka prethodne faze, uključujući eventualne prijave proizvodnje unete do tog trenutka.
> **Ažuriranje datuma kada će roba biti spremna**: ažurira *Datum spremne robe* na povezanim narudžbinama kupaca prema *Datumu završetka naloga*; 
> **Izdavanje planiranih naloga proizvodnji**: omogućava pretvaranje planiranih proizvodnih naloga u proizvodne naloge za odabrane faze;                     
> **Pusti naloge**: omogućava promenu statusa proizvodnih naloga iz *Lansiran* u *Izvršni* za odabranu fazu ili faze;         
> **Proširi tabelu preko ekrana**: skriva oblast filtera obrasca radi lakšeg rada sa mrežama;         
> **Dvostruka tabela**: skriva prvu mrežu radi lakšeg rada sa drugom mrežom.          

Za detalje o zajedničkom funkcionisanju obrazaca pogledajte poveznicu [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).