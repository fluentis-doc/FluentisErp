---
title: Funkcionalnost provjere krize poduzeća 
sidebar_position: 1
---

:::important[Uvod]
Propisi o krizi poduzeća, uvedeni Zakonom D.Lgs. 14/2019 (Kodeks o krizi poduzeća i insolventnosti), imaju za cilj spriječiti situacije insolventnosti kroz usvajanje alata za rano praćenje financijskih poteškoća.

Tvrtke su dužne osigurati odgovarajuće organizacijske, administrativne i računovodstvene strukture koje su sposobne pravovremeno uočiti signale ekonomske, imovinske ili financijske neravnoteže.

Među alatima predviđenim zakonskom regulativom nalaze se **specifični indikatori**, poput DSCR-a (Debt Service Coverage Ratio), provjere kontinuiteta poslovanja, i analize održivosti duga. Nepoštivanje obveza može dovesti do odgovornosti za upravni organ.

Unutar Fluentis ERP dostupne su funkcionalnosti posvećene kontroli pokazatelja krize, koje podržavaju tvrtku u poštivanju onoga što je predviđeno važećim propisima.

U sljedećim odlomcima detaljno su opisane funkcionalnosti dostupne za ispunjavanje tih obveza.
:::

## 1 Pristup funkcionalnosti 
Upravljanje krizom poduzeća moguće je putem korištenja rješenja Fluentis ***Corporate Performance Monitor (CPM)***.

![](/img/it-it/finance-area/corporate-crisis/1.png)

CPM, općenito, osmišljen je za praćenje poslovnih performansi i, posebno, za stvaranje indeksa i KPI-a. Također se koristi za fleksibilnije upravljanje indeksima krize.

## 2 CPM funkcionalnosti 
Modul CPM uključuje odjeljak posvećen provjeri krize poduzeća, podijeljen u četiri kartice. 

![](/img/it-it/finance-area/corporate-crisis/2.png)

Svaka kartica prikazuje izračun raznih kontrola predviđenih propisima:

U prvom, ***Provjerama trećih strana***, provode se testovi entiteta kao što su **Porezna uprava** i **INPS**, koji prate:

-	Kašnjenja u uplati PDV-a
-	Kašnjenja u uplati doprinosa za socijalno osiguranje i poreza na dohodak zaposlenika

Posebno, pragovi koji aktiviraju prijave su:  

-	PDV: dug u minimalnom iznosu od 100.000 € → moguća nesolventnost  
-	Ostali porezni dugovi: iznos veći od 1.000.000 € i kašnjenje > 90 dana → prijava  
-	Doprinosi za socijalno osiguranje: iznos veći od 50.000 € i kašnjenje > 180 dana → prijava  

Ovi pragovi su konfigurabilni u internim tablicama sustava. 

U drugoj kartici, ***Provjera neto imovine i DSCR*** provjerava se:

-	Ukupna neto imovina: ako je negativna, pretpostavlja se stanje krize
-	DSCR (Debt Service Coverage Ratio): ako je manji od 1, također se pretpostavlja stanje krize

U trećoj kartici, ***Sektoralni indeksi***, provjerava se 5 sektorskih pokazatelja, gdje su očekivane vrijednosti određene prema djelatnosti poduzeća.  

Posljednja kartica posvećena je izračunu eventualnih ***Prilagođeni indeksi***, na temelju kojih svako poduzeće provodi vlastite specifične procjene.  

## 3 Izvori podataka
Podaci koji se koriste za kontrole dolaze iz:

-	**Specifičnih konfiguracijskih tablica**
-	Automatskih izračuna putem **SQL** upita
-	Konfiguracija povezanih s **kontnim planom**
-	**Tablica dospijeća**

Prije svega, unutar tablice **Društva** potrebno je navesti **gospodarski sektor** kojem poduzeće pripada: **Kartica Administrativne postavke > Polje sektor za procjenu krize poduzeća**
 
Zatim, unutar **kontnog plana** potrebno je **dodijeliti vrste računa za procjenu krize poduzeća** (fiksna tablica), putem polja ***Kriza poduzeća*** koje se nalazi u rešetki *Računi* (detalji kontnog plana).  

Moguće vrste su:
 
- ADE-VAT obično se povezuje s računom koji prikazuje mjesečni saldo PDV-a, za koji je potrebno upravljati otvorenim stavkama radi identifikacije otvorenog duga;  
- ADE-OTHER slično, povezuje se s računima koji prikazuju druge porezne obveze, također s upravljanjem otvorenim stavkama;  
- INPS povezuje se s računima za doprinose za socijalno osiguranje, također s otvorenim stavkama;  
- LIQ povezuje se s **glavnim računima** koji sadrže šifre kupaca/dobavljača — iz kojih se putem cash flow analize izvode podaci o dostupnoj likvidnosti;  
- FIN povezuje se s računima (ili glavnim računima) koji prikazuju financijske obveze, bilo izravno ili putem budućih otplata kredita i leasinga;  
- RIS povezuje se s podračunima rezervi za pokriće;   
- MON povezuje se s podračunima (ili računima) nenovčanih troškova i prihoda.  

Zadani izračuni uzimaju podatke iz:
-	izravno iz računovodstvenih stavki  
-	iz posljednjeg obrađenog cash flowa  
-	iz kontnih salda računa povezanih s određenim čvorovima unutar **standardnog modela rekategorizacije** ***IV. direktiva***. 

U ovom slučaju, model služi isključivo za identifikaciju relevantnih računa za svaku varijablu, a iznosi se čitaju izravno iz glavne knjige, bez potrebe za privremenim zatvaranjem ili dodatnim rekategorizacijama.

## 4 Upravljanje krizom  
Trenutno sustav provodi samo **validaciju pokazatelja**, ali ne upravlja cijelim operativnim procesom u slučaju krize.  
Predviđena je mogućnost aktivacije automatskih upozorenja ako se prekorače zadani pragovi, putem planiranih zadataka (Supervisor).  

## 5 Ciljevi i sektori  
Svaki gospodarski sektor ima vlastite predefinirane **ciljne vrijednosti** pokazatelja.  

Te su vrijednosti pohranjene ili u fiksnim, nevidljivim tablicama (za kontrole trećih strana), ili u formi ***Targeting***, gdje podaci za standardne sektorske pokazatelje nisu izmjenjivi od strane korisnika jer imaju *standardni* karakter: samo ciljevi prilagođenih pokazatelja mogu imati prilagodljive ciljne vrijednosti.  

## 6 Opisnici i formule  
Osim kontrola trećih strana, koje predviđaju izračun putem izvornog koda, svaki drugi pokazatelj povezan je s jednim *opisnikom* (vidi istoimenu formu u glavnom izborniku CPM-a), koji definira formulu izračuna. Na primjer:  

- Pokazatelj održivosti financijskih troškova: pokazatelj se izračunava kao “Financijski troškovi” / “Prihod”, i pohranjuje se pod opisnikom ‘03.01’ s formulom “[RIC-OneriFin]/[RIC-Fatturato]”
- Pokazatelj adekvatnosti kapitala: izračun je “Neto imovina” / “Ukupan dug”, i registrira se kao opisnik 03.02 s formulom “[RIC-PatNetto]/[RIC-DebTot]”

![](/img/it-it/finance-area/corporate-crisis/5.png)

U osnovi, formule se temelje na *varijablama* koje su u formuli prikazane putem njihovog koda unutar uglatih zagrada.  

Svaka **varijabla** (vidi istoimenu formu u glavnom izborniku CPM-a) poziva svoj specifični SQL upit.  
 
![](/img/it-it/finance-area/corporate-crisis/6.png)

Upiti na kojima se temelje standardne varijable također su standardni SQL upiti, na koje korisnik ne može utjecati. Polazeći od predloženih upita, moguće je definirati i prilagođene (custom) verzije koje će se uskladiti s karakteristikama računovodstvenog sustava konkretne instalacije. 

## 7 Repository

Sustav pohranjuje rezultate provedenih izračuna u formu Repository, čime se stvara povijesna baza podataka korisna za analize i nadzorne ploče (dashboarde).
Svaka obrada povezana je s jednim datumom: svaki pokazatelj ima jedan rezultat po danu.  
 
![](/img/it-it/finance-area/corporate-crisis/7.png)




