---
title: Postavljanje kontaktnih kartica  
sidebar_position: 3
---

U karticama kontakata kupaca potrebno je postaviti upravljanje elektroničkom fakturacijom kako bi se u Fluentisu pravilno evidentirao Primateljski kod ili PEC adresa kupaca koji primaju B2B fakturu ili, u slučaju evidentiranja javne uprave, odgovarajući kod ureda.  

## B2B Fakturiranje

Za konfiguraciju kontakata potrebno je otići na *Poćčetna stranica > Šifarnik kontakata*, pronaći i otvoriti karticu kontakta za kojeg želite postaviti elektroničku fakturaciju i u panelu *Računovodstveni podaci > Porezne informacije*, označiti **Elektronička fakturacija** te popuniti povezane podatke:      
- **Naziv tvrtke**: ovo polje mora ostati prazno  
- **Opis**: ovo polje mora ostati prazno  
- **Potpisana elektronička fakturacija**: Ova provjera odnosi se na mogućnost upravljanja elektroničkim fakturama potpisanim ZA ODABRANI KONTAKT. Prikazuje se vrijednost postavke napravljene na razini izdavateljske tvrtke u odjeljku Konfiguracija Elektroničkog Fakturiranja za Tvrtku i može se promijeniti u odnosu na opću postavku, stvarajući iznimku za subjekt u upravljanju. Ako je provjera postavljena, prilikom izdavanja elektroničke fakture bit će moguće izvesti XML datoteku, potpisati je s odgovarajućim vanjskim potporama i uvesti je u format u Fluentis, a zatim nastaviti s fazama izdavanja. Ova mogućnost je diskrecijska za dokumente faktura izdane prema kupcima koji su rezidenti na talijanskom teritoriju, dok je OBAVEZNA za dokumente izdane prema subjektima koji nisu rezidenti, nisu uspostavljeni, nisu identificirani u Italiji i za koje se namjerava poslati dokumente putem SdI.  
- **Prilog u elektroničkoj fakturi**: Ova provjera odnosi se na mogućnost slanja datoteka elektroničkih računa s priloženim PSF-om računa. Prikazuje se vrijednost postavke napravljene na razini izdavatelja tvrtke u odjeljku Konfiguracija Elektroničkog Fakturiranja za Tvrtku i može se promijeniti u odnosu na opću postavku, stvarajući iznimku za subjekt u upravljanju. Ako je provjera postavljena, prilikom izdavanja elektroničkog računa generirat će se XML datoteka kojoj će biti priložena odgovarajuća PDF datoteka.
- **ARM transformacija za izradu PDF‑fakture**: u ovom polju može se unijeti referenca na ARM transformaciju koja je vezana uz izradu PDF‑datoteke fakture, npr. isti proces koji se može koristiti za slanje fakture putem e‑maila kupcu. Ako transformacija nije navedena, a označen je check „Elektronička fakturacija s priloženim PDF‑om“, za izradu PDF‑a koristit će se transformacija definirana u sekciji „Konfiguracija elektroničke fakturacije za tvrtku“.  
- **Vrsta koda**: ovo polje identificira kanal koji će se koristiti za slanje elektroničkih dokumenata; popunjavanje zahtijeva i točno definiranje polja KOD PRIMATELJA i EMAIL, kako bi se faktura pravilno usmjerila. Na temelju odabrane vrijednosti polja, sekcija „Elektronička fakturacija“ mora se popuniti prema određenim pravilima. Moguće vrijednosti su:  
> - **Kanal SDI**: odabir ove vrijednosti znači da se kao način slanja koristi poznati kod primatelja ili adresa e‑maila ili da se o kanalu odluči prema podacima registriranim kod SDI‑ja. Konkretno, za odabir ove vrijednosti u anagrafi potrebno je popuniti polja KOD PRIMATELJA i EMAIL prema sljedećim pravilima:

| Način slanja | Kod primatelja | Email | Opis primatelja | Datum početka |	Datum završetka |
| :-- | :-- | :-- | :-- | :-- | :--|
| Kod primatelja kupca dodijeljen od strane AdE nakon akreditacije | Kod primatelja kupca | Prazno | Naziv tvrtke kupca | Datum početka odnosa | Datum završetka valjanosti kanala |
| PEC mail | 0000000 (7 nula) | PEC e‑mail kupca | Naziv tvrtke kupca | Datum početka odnosa | Datum završetka valjanosti kanala |
| Ne zna se ni kod primatelja ni PEC mail ILI Privatni kupac ILI Kupac u režimu prednosti ili forfetarni | 0000000 (7 nula) | Prazno | Naziv tvrtke kupca | Datum početka odnosa | Datum završetka valjanosti kanala |
| Kupac nije rezident, nije ustrojen, nije identificiran u Italiji | XXXXXXX (7 "X") | Prazno | Naziv tvrtke kupca | Datum početka odnosa | Datum završetka valjanosti kanala |
      

> - **PEC Primatelja**: odabirom ove vrijednosti označava se da se kao kanal slanja želi koristiti PEC e‑mail. Ova postavka zahtijeva popunjavanje polja KOD PRIMATELJA i EMAIL prema pravilima prikazanim u tablici:

| Način slanja | Kod primatelja | Email | Naziv primatelja | Datum početka odnosa | Datum završetka valjanosti kanala |
| :-- | :-- | :-- | :-- | :-- | :--|
| PEC mail | 0000000 (7 nula) | PEC e‑mail kupca | Naziv tvrtke kupca | Datum početka odnosa | Datum završetka valjanosti kanala |
      

> - **Nerezidentna / osnovana / identificirana osoba u Italiji**: Odabirom ove vrijednosti identificira se SdI kao mogući kanal za slanje računa. Kod primatelja treba koristiti specifičnu oznaku “XXXXXXX”, a polja KOD PRIMATELJA i EMAIL popunjavaju se kako slijedi: 

| Način slanja | Kod primatelja | Email | Naziv primatelja | Datum početka odnosa | Datum završetka valjanosti kanala |
| :-- | :-- | :-- | :-- | :-- | :--|
| Kupac nije rezident, nije utvrđen ili nije identificiran u Italiji | XXXXXXX (7 "X") | Prazno | Naziv tvrtke kupca | Datum početka odnosa | Datum završetka valjanosti kanala | 
        

## Elektroničko fakturiranje za javnu upravu  

U slučaju evidentiranja u registru javne uprave, potrebno je pristupiti *Početna stranica > 
Evidencija kontakata* pronaći i otvoriti kontakt za kojeg se želi postaviti upravljanje elektroničkim fakturama. U panelu *Financijski podaci > Porezne informacije*, potrebno je označiti opciju **Javna uprava**. Odmah nakon označavanja ove opcije, potrebno je popuniti tablicu **Javna uprava**. Polja u tablici treba popuniti na sljedeći način:    
- **Kod ureda**: Šifra javnog ureda koji prima računa
- **Naziv ureda**: Opis polja „Kod ureda“, tj. naziv javnog ureda
- **Naziv tvrtke / institucije**: Ovdje se može povezati već registrirani kontakt u sustavu Fluentis koji se odnosi, primjerice, na podređeni ured glavne evidencije koju koristimo (npr. ured za javne radove u općini … ili zdravstvena ustanova … koja ovisi o glavnoj evidenciji „Općina …“). Taj povezani kontakt treba postaviti kao destinaciju za glavnu evidenciju u tabu “consegna” (dostava), tako da destinacija (npr. ured za javne radove …) bude uključena u XML datoteku s kompletnim kodom ureda i ostalim podacima poput adrese.
Za ispravno upravljanje višestrukim kodovima ureda (tj. više subjekata) vezanim za istu glavnu evidenciju preporuča se popuniti ovo polje. Ovo polje nije obavezno ako postoji samo jedan kod ureda izravno vezan uz glavnu evidenciju.  
- **Datum početka usluge**: Određuje datum unosa reda ili datum od kojeg je aktivan odnos pružanja usluge s javnom upravom.
- **Datum završetka usluge**: Određuje datum završetka odnosa pružanja usluge s javnom upravom i onemogućava korištenje ovog unosa za generiranje elektroničkog računa.