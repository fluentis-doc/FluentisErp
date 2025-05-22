---
title: Izjava namjere  
sidebar_position: 5
---

Putem ovog obrasca moguće je unijeti registre za primljene ili izdane izjave o namjeri za referentnu godinu, kao i pretraživati te uređivati već unesene zapise.

Za unos novog registra kliknite tipku **Novi** u traci izbornika a za izmjene već postojećih najprije kliknite **Pretraga**,  pa dvostrukim klikom na željeni zapis (ili pomoću tipke **Uredi**) otvorite registar i unesite nove izjave o namjeri.
 
### Zaglavlje registra 

Gornji dio obrasca prikazuje podatke samog registra, dok donji dio prikazuje detalje svake pojedine izjave unutar registra.  

**Registar deklaracija**: slobodno dodijeljeno ime registra;  

**Tip**: označava je li registar za klijente (primljene izjave o namjeri) ili za dobavljače (izdane izjave temeljem statusa "stalnog izvoznika" tvrtke u upotrebi);

**Datum početka / Datum završetka / Godina**: vremenski okvir važenja registra.    


---
### UPRAVLJANJE PDV GRUPOM   

:::tip Info: PDV grupa
Uvođenjem ovog instituta omogućeno je povezanim poduzećima (financijski, ekonomski i organizacijski) da oforme jednu jedinstvenu grupu koja se za potrebe PDV-a smatra jednim poreznim obveznikom. Grupa koristi zajednički OIB (PDV ID), a sve članice fakturiraju prema trećima koristeći taj zajednički broj. Interna fakturiranja unutar grupe nisu predmet oporezivanja. Faktura i **ostali dokumenti, UKLJUČUJUĆI IZJAVE O NAMJERI**, izdaju se od strane predstavnika Grupe ili članova Grupe, pri čemu se na tim dokumentima navodi, osim zajedničkog PDV broja Grupe, i osobni OIB (porezni broj) člana Grupe koji je stvarno izvršio transakciju.  
:::

:::note **OZNAKA PDV grupa**: 
Omogućuje unos izjava o namjeri koje se odnose na PDV grupu. Aktivacija ove opcije ne utječe na unos standardnih izjava i preporučuje se da je uvijek aktivna.

**POLJE JE PREMA ZADANIM POSTAVKAMA AKTIVIRANO I SKRIVENO U VERZIJAMA FLUENTISA 2021 I NOVIJIMA.**
:::


**Polje Nomenklatura (u tablici detalja)**: polje je važno za upravljanje PDV grupom, automatski se popunjava prema podacima o PDV grupi unesenima u šifrarniku klijenta ili dobavljača (kartica Porezni podaci), no može se i ručno urediti kako bi se unio referentni podatak o PDV grupi kojoj klijent ili dobavljač pripada;

---

 
### Detalji izjava o namjeri  

**Za unos izjava o namjeri unutar registra, potrebno je pisati izravno u donju tablicu.**

**Datum protokola**: polje nije obavezno i aktivno je samo za izjave unutar registra vrste klijenti; unosi se datum koji je klijent naveo u izjavi o namjeri.;

**Protokol**: polje nije obavezno i aktivno je samo za izjave unutar registra vrste klijenti; unosi se broj protokola koji je klijent dodijelio izjavi o namjeri;

**Datum našeg protokola**: datum protokola koji se interno dodjeljuje prilikom evidentiranja izjave o namjeri u registru; taj datum služi kao referentni za početak važenja izjave prilikom primjene u dokumentima kupnje/prodaje (koristi se i ako su popunjena polja "referentni identifikator" i "referentni redni broj"). Preporučuje se da se ovo polje uvijek popuni, uključujući i kod obrade izlaznih računa, radi ispravnog prikaza oznaka u elektroničkom računu.

**Naš protokol**: interni broj protokola koji se dodjeljuje prilikom evidentiranja izjave o namjeri u registru (**VAŽNO:** OBAVEZAN ZA ISPRAVNO POPUNJAVANJE ODGOVARAJUĆEG TAGA ZA IZJAVU O NAMJERI U ELEKTRONSKOM RAČUNU ZA PRODAJU);

**Konto / Podkonto / Opis**: ovdje se unosi konto subjekta na kojeg glasi izjava o namjeri (klijent ili dobavljač);

**Nomenklatura**: ovo polje je relevantno samo u registrima koji upravljaju PDV grupom. Popunjava se prema šifrarniku PDV grupe unesenom kod klijenta (kartica Porezni podaci) ili se uzima iz same šifre klijenta, no može se i ručno urediti kako bi se unio referentni podatak o PDV grupi kojoj klijent pripada.

:::danger Važno
**Datum početka / Datum završetka**: NE  popunjavajte ova polja za izjave o namjeri koje su trenutno važeće. Naime, prema posljednjim zakonskim izmjenama, više nisu dopuštene izjave o namjeri koje su vremenski neograničene i bez iznosa. Kako bi se izjava ispravno prepoznala i omogućila kontrola nad iskorištenim iznosom te automatska zamjena šifre PDV-a na računima, ovo polje mora ostati prazno. U slučaju da klijent opozove izjavu (ili se poništi važenje izjave dobavljaču), moguće je unijeti samo datum završetka valjanosti, od kojeg će nadalje sustav prestati uzimati tu izjavu u obzir za nove dokumente.  
:::

:::danger Važno
**Pojedinačna op. / Ukupne op.**: aktivirajte jedan od dva označena polja, ovisno o tome je li izjava o namjeri važeća samo za jednu pojedinačnu transakciju ili vrijedi do iskorištenja iznosa navedenog u sljedećem polju.  
:::

**Iznos**: unesite ovdje iznos izjave o namjeri. Ova vrijednost će biti kontrolirana kako bi se osiguralo da ne bude premašena zbrojem ukupnih iznosa računa izdavanih u okviru izjave o namjeri od dana protokoliranja;   

**PDV oslobođenje / Opis**: unesite ovdje šifru PDV-a za izuzeće u skladu s važenjem izjave o namjeri. Ova šifra PDV-a automatski će zamijeniti običnu stopu PDV-a u DDT/računu do iznosa izjave o namjeri;  

**Prethodni PDV / Opis**: unesite ovdje šifru običnog PDV-a koja će biti zamijenjena šifrom PDV-a unesenom u prethodnom polju;  

**Napomene**: slobodan flag za bilješke;  

**Carina**: označite ovo polje ako se izjava o namjeri odnosi na uvoz i izdana je prema carini;  

**Datoteka izdana**: flag označen automatski od strane procedure za eksportiranje telematičkog zapisa izdanih izjava o namjeri prema dobavljačima. Slijede reference na stvorenu datoteku (**Naziv datoteke** i **Mapa**)

**Identifikacijski broj**: unesite ovdje prvi dio telematičkog protokola za prijenos izjave o namjeri prema poreznoj upravi;  

**Progresivni broj**:  unesite ovdje drugi dio telematičkog protokola (progresivni broj retka izjave unutar telematičke isporuke; na primjer 000001 ako se šalje jedina izjava o namjeri). 


Obratite pažnju:   
Izmjena koja se odnosi na telematički protokol obuhvatila je i oznaku koja se ispisuje na fakturi i XML format za elektroničku fakturu, pa će se automatski prikazivati umjesto polja "Naš protokol"/ "Vaš protokol".

Preporuča se ipak nastaviti s unosom tih polja, zajedno s poljem “Datum našeg protokola (Datum našeg protokola)”, jer će, u slučaju neunesenog telematičkog protokola, ta polja i dalje biti prikazana.


**Detalji za datoteku**: omogućuje sljedeća polja **Dopunski** (povezano s **Vrijednost deklaracije** - koji se integrira) i **Opis robe** koji predstavljaju moguće podatke potrebne za datoteke poslane prema dobavljačima. Preporučuje se konzultirati specifičnu regulativu vezanu uz izdavanje izjava o namjeri.  

### Izrada telematičke datoteke

Za generiranje telematičke datoteke u svrhu slanja izdanih izjava, pritisnite tipku ***Izvezi*** koja se nalazi na traci izbornika.


Generirana datoteka bit će pohranjena u dokumentariju (otvorite putem tipke s papirnom spajalicom) i bit će moguće preuzeti kopiju na lokalno računalo (putem naredbe ***Spremi privitak***). 

 
### Gestione dichiarazioni multiple per singolo cliente / fornitore

**POSSIBILITA' DI AGGANCIO DELLA SINGOLA DICHIARAZIONE DI INTENTO NEI DOCUMENTI DI ACQUISTO/VENDITA**

E' possibile selezionare in modo specifico, soprattutto in presenza di più dichiarazioni valide contemporaneamente, quale dichiarazione agganciare al documento.

E' possibile selezionare la dichiarazione d'intento a cui fare riferimento tra quelle inserite, per un determinato DDT o fattura richiamandola dalla combo box "Dettaglio dichiarazioni", gestendo di conseguenza specificatamente la stringa riportata in stampa fattura e nel tracciato xml.

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image04.png)

 
### Ispisi  

**ISPIS ZA KONTROLU PREOSTALIH IZNOSA IZJAVA O NAMJERI**

Ispis za kontrolu (nazvan ***Provjera izjava o namjeri***) moguće je izraditi kako iz forme za pretragu postojećih registara, tako i iz samog registra (ulaskom u način izmjene). Ovaj ispis prikazuje sažetak iznosa primljenih izjava o namjeri i vrijednost izdanih računa, s ciljem kontrole preostalih iznosa koji se još mogu fakturirati po svakoj izjavi.  

Dostupna je i dodatna verzija ispisa (odabire se putem padajućeg izbornika) nazvana ***Provjera izjave o namjeri s detaljima*** koja prikazuje detalje svakog pojedinačnog dokumenta povezanog s izjavom.  


### Upravljanje referencama na izjave o namjeri iz prethodnih godina

Moguće je naići na sljedeću situaciju: izdavanje odobrenja kupcu s referencom na izjavu o namjeri iz prethodne godine (ili jedne od prethodnih godina).

Klijent može već imati izdanu i izjavu o namjeri za tekuću godinu. Na primjer, nota odobrenja može biti ispravak računa iz prethodne godine za robu isporučenu također u prethodnoj godini, pa je u tom slučaju potrebno unijeti referencu na prethodnu izjavu o namjeri.

U zaglavlju note odobrenja potrebno je koristiti polja za referencu na račun koji se ispravlja:  

Proširite odjeljak **Vrsta reference** i ispunite polje **Referenca računa** (jedno polje za broj računa i drugo za datum računa).   

Nakon toga, izjave o namjeri koje će biti dostupne za odabir putem pripadajuće padajuće liste uključivat će **i** one iz registra prethodne godine (ili one koje odgovaraju datumu navedenom u referenci).    

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image06.png)

### **VIDEO TUTORIJALI**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rZM6NBOpIxQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>


