---
title: Strojevi
sidebar_position: 9
---

U ovoj se tablici kodiraju svi strojevi koji se koriste unutar različitih radnih ciklusa, a svaki je povezan s određenim centrom troška.

Tablice koje se odnose na strojeve i grupe radne snage važne su za definiranje troška pojedinih faza, budući da će se zbrojem troška po satu stroja × vremena rada stroja i troška po satu grupe radne snage × troška po satu radnika dobiti ukupni trošak faze obrade.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih kako bi se mogli pregledati, izmijeniti ili izbrisati.

**Pretraživanje strojeva**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što se postave svi željeni filtri, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži rezultata.

**Unos strojeva**

Za unos novih šifri potrebno je kliknuti u mreži na prvi prazan redak ili pritisnuti tipku **Novi**. 

Za novi zapis, u mreži *Strojevi*, potrebno je unijeti barem obavezna polja koja program zahtijeva: **Šifru** i **Opis** stroja. Može se također naznačiti je li stroj **Aktivan** ili ne, zatim povezani poslovni centar, i ostali podaci.

*Specifična polja*: 

**Stroj**: šifra stroja;  
**Opis**: opis stroja;  
**Aktivan**: označava je li stroj aktivan, tj. može li se koristiti i planirati;  
**Deklaracija mobilnog materijala**: koristi se u formi deklaracija proizvodnje unutar WMS-a; ako je aktivno, tijekom deklaracije bit će potrebno unijeti i potrošene materijale;      
**Ispis etikete**: koristi se u formi deklaracija proizvodnje unutar WMS-a; ako je aktivno, pri potvrdi deklaracije proizvodnje omogućuje ispis pripadajućih etiketa;      
**Radni centri**: označava s kojim je radnim centrom stroj povezan; moguće je povezati više strojeva s istim radnim centrom, a među njima se može odabrati koji će se koristiti u widgetu ***Stroj*** koji se nalazi u [kartici Proizvodnja MES-a](/docs/production/mes/mes-main-form);        
**Poslovni centar**: označava centar troška na koji se stroj odnosi;    
**Odjel**: označava šifru odjela u kojem se stroj nalazi;    
**Klasa stroja**: označava klasu stroja (ako je stroj šifriran kao artikl);  
**Šifra artikla stroja**: označava šifru artikla (ako je stroj šifriran kao artikl);    
**Proizvodni pogon**: u slučaju više pogona označava kod proizvodnog pogona u kojem se stroj nalazi;    
**Opis proizvodnog pogona**: označava opis proizvodnog pogona;
**Lokacija**: označava fizičku lokaciju stroja;         
**Datum nabave**: označava datum nabave stroja;  
**Prešifra osnovnog sredstva**: označava prešifru osnovnog sredstva;
**Broj**: označava broj osnovnog sredstva;
**Opis**: označava opis osnovnog sredstva;   
**Narudžba za nabavu**: označava broj dokumenta o nabavi osnovnog sredstva; 
**Datum instalacije**: označava datum instalacije stroja; 
**Datum unosa**: označava datum unosa stroja u sustav;  
**Datum posljednje izmjene**: označava datum posljednje izmjene podataka o stroju;  
**Opis centra troška**: označava opis centra troška povezanog sa strojem; 
**Opis odjela**: označava opis odjela u kojem se stroj nalazi;   
**Opis artikla stroja**: označava opis artikla (ako je stroj šifriran kao artikl);    

<details>
<summary> Sljedeća polja koriste se isključivo u postupku [F.C.S. planiranja](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Radna smjena**: odabir standardne radne smjene stroja (ako se odabere duža smjena od one u pripadajućem radnom centru, vrijedit će ona kraća). Osim za radnike, kod svih ostalih resursa pauze se zanemaruju. Samo radnici imaju fizičku i zakonsku obvezu pauze. Ako stroj zahtijeva prisutnost operatera, mora poštivati njegovu pauzu, pa su stvarno raspoloživi sati ograničeni operaterovim vremenom.
Na primjer, ako je radno vrijeme operatera 08:00–12:00, 13:00–17:00, stroj neće raditi tijekom pauze, iako mu je postavljena smjena 08:00–17:00 bez pauze. Razlika između postavljanja smjene s pauzom ili bez nje očituje se samo u prikazu kapaciteta na histogramu — u primjeru, smjena bez pauze pokazat će kapacitet od 9 sati, ali u praksi stroj ne može raditi više od 8 sati.          
**Opis radne smjene**: označava opis radne smjene;                 
**% Učinkovitost**: radno vrijeme u fazi povećava se ili smanjuje ovisno o vrijednosti ovog polja. Na primjer, ako iznosi 50%, vrijeme obrade bit će dvostruko dulje od osnovnog. Ovo služi za uzimanje u obzir različite produktivnosti strojeva unutar istog centra, ali se isti učinak može postići korištenjem alternativnih strojeva na fazi s različitim vremenima obrade;       
**% Radna snaga setup**: označava postotak vremena operatera potrošenog tijekom same proizvodnje. Ako je manji od 100%, operater može raditi na više strojeva istodobno;            
**% Radna snaga obrada**: označava postotak vremena operatera potrošenog tijekom same proizvodnje. Ako je manji od 100%, operater može raditi na više strojeva istodobno;            
**Pravilo podešavanja**: pravilo podešavanja koje se primjenjuje na stroj (za faze koje imaju atribute podešavanja). Pogledaj odgovarajuću formu kako bi se razumjelo kako postaviti pravilo. Ovo polje koristi se kada vrijeme podešavanja nije zanemarivo i znatno se razlikuje ovisno o promjeni konfiguracije između prethodne i sljedeće obrade. Planer može kreirati optimalan redoslijed rada samo ako može točno izračunati vrijeme podešavanja pomoću definiranih atributa podešavanja. Vrijeme podešavanja množi se s troškom po satu stroja kako bi se dobio trošak podešavanja zadatka. Optimalna sekvenca rada rezultat je kompromisa između potrebe za smanjenjem vremena podešavanja (radi povećanja produktivnosti stroja) i potrebe za izbjegavanjem prevelikog WIP-a i kašnjenja u obradama;         
**Pravilo grupiranja**: pravilo grupiranja koje se primjenjuje (faze moraju imati kod grupiranja). Pogledaj odgovarajuću formu za detalje. Ako stroj ima definirano pravilo grupiranja, obrade se ne izvode pojedinačno, već u skupinama s istim kodom grupiranja. Stroj radi u sekvencijalnim sesijama, u svakoj od kojih se obrađuju samo faze s istim kodom grupiranja. Planer pokušava pokrenuti sesiju samo ako skupina faza premašuje minimalni prag popunjenosti stroja definiran pravilom grupiranja, osim ako barem jedna faza nije čekala dulje od maksimalnog dopuštenog vremena prema parametrima planiranja. Ako popunjenost prelazi maksimum definiran pravilom, kreira se više sesija, svaka s vlastitim zadatkom. Ako stroj ima i pravilo podešavanja, redoslijed sesija uzima u obzir i vrijeme podešavanja;             
**Trošak po satu setupa**: trošak po satu podešavanja (koristi se za određivanje redoslijeda obrade kod strojeva s pravilom podešavanja). Vrijednost se množi s vremenom podešavanja kako bi se izračunao ukupni trošak podešavanja, jedan od tri troška uzeta u obzir za određivanje optimalne sekvence rada.    
**Boja pozadine**: označava boju pozadine koja se koristi u Gantt prikazu strojeva za ovaj stroj (trenutno nije implementirano);       
**Boja teksta**: označava boju teksta koja se koristi u Gantt prikazu strojeva za ovaj stroj (trenutno nije implementirano).  

</details>

U drugoj se sekciji može detaljno definirati **Sekvenca** alternativnih strojeva.  

**Alternativni strojevi**: ako je ova kartica prazna, planer će koristiti samo stroj naveden u fazi, a ako nije naveden, koristit će bilo koji slobodan stroj iz radnog centra. Ako se obrada može izvoditi samo na određenim strojevima unutar centra, razmatrat će se oni navedeni u ovoj kartici, uz onaj iz faze.
Ova kartica može se koristiti i za navođenje svih strojeva centra ako nije cilj ograničiti popis, nego unijeti različite podatke o vremenima obrade.

<details>
<summary> Sljedeće kartice koriste se isključivo u postupku [F.C.S. planiranja](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Atributi podešavanja**: ova kartica omogućuje definiranje atributa podešavanja stroja, koeficijenata koji se primjenjuju na numeričke atribute, vremena montaže i demontaže ako atribut nije numerički, te eventualno izračunavanje prijelaznih vrijednosti pomoću matrice podešavanja.

**Početna konfiguracija**: ova kartica omogućuje definiranje početnih vrijednosti atributa podešavanja na početku simulacije (ako stroj u trenutku uvoza stanja tvornice ne radi, vrijednosti atributa podešavanja ne mogu se preuzeti iz faze u radu).

**Matrice**: ova kartica omogućuje definiranje vremena potrebnog za prijelaz s jedne vrijednosti atributa podešavanja na drugu, kada ovisi o kombinaciji prethodnog i sljedećeg stanja (npr. kod linija za lakiranje ili alergenskih sekvenci u prehrambenoj industriji).

</details>

*Specifična polja*:  

**Sekvenca**: označava redoslijed alternativnih strojeva;  
**Stroj**: označava šifru stroja;   
**Opis stroja**: označava opis stroja;   
**Aktivan**: označava je li stroj aktivan, tj. može li se koristiti i planirati;  
**Poslovni centar**: označava centar troška povezan sa strojem;  
**Opis centra troška**: označava opis centra troška povezanog sa strojem;  

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).