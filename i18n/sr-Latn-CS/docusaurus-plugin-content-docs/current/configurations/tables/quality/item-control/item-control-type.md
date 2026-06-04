---
title: Tipovi kontrole artikla
sidebar_position: 9
---

Tablica se nalazi na putanji **Tabele > Kvaliteta > Kontrola artikala > Tipovi kontrole artikla**.

U ovoj tablici moguće je kodificirati različite tipove *Tipovi kontrole artikla*.   
*Tip kontrole artikla* je sastavni dio, zajedno s *Godina* i *Broj*, jedinstvenog koda *Kontrola artikla*.
Neki primjeri upotrebe *Tipovi kontrole artikla* nalazimo u upravljanjima:  
> **Uvoz artikala za kontrolu** - u *podacima zaglavlja*;    
> **Kontrola artikala** - u popisu *podataka zaglavlja*;   
> **Certifikati analiza** - u tabulatoru *Kontrole i izmjereni rezultati*;   
> **Parametri Kontrole artikala** - u tabulatoru *Općenito*;     
i u svim upravljanjima gdje se koristi *Kontrola artikla*.  

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.  

**Pretraži Tipovi kontrole artikla**

Forma se sastoji od područja za filtriranje i područja za rezultat. Kada postavite sve željene filtre, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali unutar rezultatne mreže.

**Unos Tipovi kontrole artikla**  

Za unos novih *Tipovi kontrole artikla* potrebno je kliknuti na prvu praznu red u mreži ili pritisnuti tipku **Novo**.
Za novi zapis potrebno je unijeti barem obavezna polja koja zahtijeva program: **Šifra** i **Opis**.

## Tipovi kontrole artikla

To je popis gdje se unose osnovne informacije o *Tipovi kontrole artikla*.
Popis sadrži sljedeće informacije:    
> **Tip kontrole**: šifra *Tip kontrole artikla*.   
> **Opis tipa kontrole**: opis *Tip kontrole artikla*.    
> **Skladište**: šifra *Skladišta* koja se predlaže u *Kontrola artikala > Testovi > Skladište*;    
to je *Skladište* kontrole kvalitete koje se koristi za premještanje artikala, nakon kontrole, u odgovarajuće *Skladište* sukladno i nesukladno (ako je postavljeno kao protukonto odgovarajućem *Predlošku*).   
> **Predložak iskrcaja nekonformnih artikala**: to je kod *predložak skladišta* koji se predlaže u *Kontrola artikala > Testovi > Predložak iskrcaja nekonformnih artikala*;   
to je *predložak* preuzimanja koji se koristi za premještanje nekonformnih artikala, jednom kada su kontrolirani, u odgovarajuće *Skladište* nekonformnih artikala;     
*predložak* protustrane nije obavezan ako se ne želi upravljati *Skladište* otpada ili nadopune nakon naknadnog rekonfiguriranja ili prerade kontroliranog artikla.       
> **Predložak iskrcaja konformnih artikala**: to je kod *predložak skladišta* koji se predlaže u *Kontrola artikala > Testovi > Predložak iskrcaja konformnih artikala*;    
to je *predložak* preuzimanja koji se koristi za premještanje konformnih artikala, jednom kada su kontrolirani, u odgovarajuće *Skladište* konformnih artikala;    
poželjno je postaviti odgovarajući *predložak* protustrane kako bi konformni artikl ponovno bio dostupan jednom kada je kontroliran;  
> **Predložak iskrcaja destruktivnih testova**: to je kod *predložak skladišta* koji se predlaže u *Kontrola artikala > Testovi > Predložak iskrcaja nekonformnih artikala* ako je *Test* tipa *Destruktivni*;  
to je *predložak* preuzimanja koji se koristi za premještanje nekonformnih artikala, jednom kada su kontrolirani;  
nije predviđen *predložak* protustrane jer je *Test* tipa *Destruktivni* i nemoguće je izvršiti naknadnu rekondiciju ili preradu kontroliranog artikla.    
> **Predloženi tip certifikata**: to je kod *Tip certifikata analize* koji se predlaže pri kreiranju novog *Certifikata analize* iz ovog *Tip kontrola artikla*.     
> **Opis skladišta**: to je opis *Skladište*;       
> **Opis predložak iskrcaja nekonformnih artikala**: to je opis *Predložak iskrcaja nekonformnih artikala*;  
> **Opis predložak iskrcaja konformnih artikala**: to je opis *Predložak iskrcaja konformnih artikala*;     
> **Opis predložak iskrcaja destruktivnih testova**: to je opis *Predložak iskrcaja destruktivnih testova*;     
> **Opis predloženog tipa certifikata**: to je opis *Predloženi tip certifikata*;       
> **Bilješke**: slobodne bilješke.      

### Dodatni podaci  

Moguće je unijeti [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) općenito za *Tip kontrola artikla*.      
Ovi *Extra data* mogu se naslijediti u *Kontrola artikala* za tu određenu vrstu.     

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu s formama, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).