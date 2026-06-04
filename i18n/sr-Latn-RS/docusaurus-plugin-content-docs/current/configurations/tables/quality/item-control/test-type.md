---
title: Vrsta testiranja
sidebar_position: 1
---

Tablica se nalazi na putanji **Tablice > Kvaliteta > Kontrola artikala > Vrsta testiranja**.

U ovoj tablici moguće je definirati različite vrste testiranja koje se provode prilikom prijema robe i tijekom proizvodnog procesa na artiklima.       
Primjeri korištenja *Vrsta testiranja* nalaze se u modulima:    
> **Tehnički listovi** - kartica *Svojstva*;  
> **Kontrolni planovi** - kartica *Planirani testovi*;     
> **Kontrola artikala** - kartica *Testovi*;     
> **Kontrola artikala** - kartica *Testovi*;    
> **M.E.S.** - kartica *Kontrola kvalitete > Testovi*.  

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.  

**Pretraživanje Vrsta testiranja**

Forma se sastoji od područja za filtriranje i područja za prikaz rezultata. Nakon postavljanja željenih filtera, kliknite gumb **Pretraži** kako bi se rezultati prikazali u mreži rezultata.

**Unos Vrsta testiranja**

Za unos nove *Vrsta testiranja* kliknite na prvu praznu liniju u mreži ili pritisnite gumb **Novi**.  
Za novi zapis potrebno je unijeti barem obavezna polja: **Šifra** i **Opis**.

**Dupliciranje Vrsta testiranja**  

Za dupliciranje postojeće *Vrsta testiranja* u novu, odaberite test u mreži i pritisnite gumb **Dupliciraj**.  
Pojavit će se prozor za unos **Šifre** novog testa (obavezno) i opcije koje omogućuju kopiranje informacija o: *Konfiguraciji*, *Mogućim rezultatima*, *Funkcijama* i *Slikama*.  
Zatim kliknite **OK** za nastavak ili **Cancel** za otkazivanje.  

## Vrsta testiranja  

Ovdje se unose osnovne informacije o *Vrsta testiranja*.  
Popis sadrži sljedeća polja:    
> **Šifra**: šifra testa.       
> **Opis**: opis testa.       
> **Referenca standardnog kontrolnog plana**: opisno polje koje sadrži reference na standardizirane metode testiranja.    
>  
> **Kategorija**  
>> **Šifra**: šifra kategorije.      
>> **Opis**: opis kategorije.      
>> **Destruktivno**: označava je li test destruktivan.     
>
> **Interni laboratorij**: označava da li se test provodi u internom laboratoriju.    
>  
> **Vanjski laboratorij**    
>> **Naziv**: ako interni laboratorij nije odabran, ovdje se upisuje naziv vanjskog laboratorija koji provodi test.      
>  
> **Mjerni instrument**    
>> **Šifra**: šifra kategorije mjernog instrumenta koji se koristi za očitanje rezultata testa.     
>> **Opis**: opis kategorije mjernog instrumenta koji se koristi.     
>  
> **Vrijednosti**    
>> **Za očitavanje**: označava je li test za očitavanje ili se radi samo o svojstvu, koje se koristi u tehničkim listovima.     
>> **Jedinica mjere**: jedinica mjere za očitavanje.      
>> **Tip vrijednosti**: tip vrijednosti za očitavanje: *Numerički*, *Da/Ne* ili *Tekst*.       
>> **Tip granice**: ako je tip vrijednosti numerički, ovdje se definira tip granice koji će biti ponuđen u testu.     
>  
> **Tip kontrole testa**    
>> **Generički**: označava se primjenjuje li se test na uobičajene tipove dokumenata.    
>> **Tip dokumenta**: ako je tip vrijednosti generički, označava dokument u kojem se test obično provodi.      
>> **Predloženo u...**: detalj dokumenta (*zaglavlje* ili *redak*) gdje se test obično provodi.    
>> **Šifra**: šifra tipa kontrole testa koji se koristi.    
>> **Opis**: opis tipa kontrole testa.       
>> **Frekvencija**: opis frekvencije provođenja kontrole.    
> **Napomene**: slobodne bilješke.       

### Atributi Vrsta testiranja  

Mogu se definirati [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata) za test.       
Ovi podaci mogu se naslijediti u testovima dokumenata gdje se atributi koriste.   

### Parametri konfiguracije testa i mjernog instrumenta  

Sadrži [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) potrebne operaterima za pripremu instrumenata za izvođenje testa. To su pripremne konfiguracije i operativne informacije potrebne za izvođenje testa.  
Ovi podaci mogu se naslijediti u testovima dokumenata gdje je konfiguracija potrebna.     

### Mogući rezultati  

Za odabranu *Vrsta testiranja* moguće je definirati moguće rezultate.    
Kada se provede test, sustav predlaže *pozitivan* ili *negativan* rezultat prema zadanom.    
Popis sadrži:      
> **Rezultat**: šifra rezultata.      
> **Opis rezultata**: opis rezultata.      
> **Zadano pozitivno**: predloženo kao pozitivan rezultat.     
> **Zadano negativno**: predloženo kao negativan rezultat.    
> **Redoslijed**: redoslijed prikaza u popisu rezultata.       
> **Napomene**: slobodne bilješke.  

### Funkcije očitavanja i odobravanja

Definira prava tko može očitavati i odobravati rezultate testa.      
Popis sadrži:     
> **Funkcija**: šifra funkcije.    
> **Opis funkcije**: opis funkcije.       
> **Tip aktivnosti**: pravo dodijeljeno *Funkciji u tvrtki* tijekom aktivnosti očitavanja i/ili odobravanja testa. Moguće vrijednosti su:      
> - *Može očitavati* - Funkcija u tvrtki ima dopuštenje samo za očitavanje vrijednosti;     
> - *Može odobravati* - Funkcija u tvrtki ima dopuštenje samo za odobravanje testa;      
> - *Može očitavati i odobravati* - Funkcija u tvrtki ima dopuštenje za očitavanje vrijednosti i odobravanje testa.     
>
> Ostale *Funkcije u tvrtki* koje nisu navedene nemaju pravo očitavanja vrijednosti niti odobravanja testa.     
> Ako se funkcije ne definiraju, svi operateri imaju pravo očitavati vrijednosti i odobravati test.  
>
> **Napomene**: slobodne bilješke.  

### Slike

Moguće je pridružiti slike koje mogu biti korisne za test koji se provodi.  
Na primjer, slike mogu poslužiti za vizualno prikazivanje određenih karakteristika ili aktivnosti koje je potrebno obaviti tijekom pripreme i izvođenja samog testa.  

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu s formama, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).