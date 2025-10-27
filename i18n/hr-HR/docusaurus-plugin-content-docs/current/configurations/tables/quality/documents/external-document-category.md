---
title: Kategorije dokumenata vanjskog podrijetla
sidebar_position: 1
---

Tablica se nalazi na putanji **Tablice > Kvaliteta > Dokumenti > Kategorije dokumenata vanjskog podrijetla**.

:::important Čemu služi
Podaci u ovoj tablici koriste se za kategorizaciju različitih vrsta Dokumenata vanjskog podrijetla.
Podaci uneseni u ovu tablicu prenose se prilikom izrade Dokumenata vanjskog podrijetla. 
Primjer korištenja nalazi se u modulu **Dokumenti vanjskog podrijetla**.
:::

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih kako bi se mogli pregledati, izmijeniti ili izbrisati.

**Pretraživanje Kategorija dokumenata vanjskog podrijetla**

Forma se sastoji od područja za filtriranje i područja rezultata. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Traži** kako bi se prikazali rezultati unutar mreže rezultata.  

**Unos Kategorija dokumenata vanjskog podrijetla**

Za unos novih *Kategorija dokumenata vanjskog podrijetla* potrebno je kliknuti u mrežu na prvi prazan redak ili pritisnuti tipku **Novo**.   
Za novi zapis potrebno je unijeti najmanje obavezna polja koja zahtijeva program: **Kod** i **Opis**.

**Dupliciranje Kategorije dokumenata vanjskog podrijetla**

Za dupliciranje postojeće *Kategorije dokumenta* u novu *Kategoriju dokumenta* potrebno je u mreži označiti *Kategoriju dokumenta* koju želite duplicirati i pritisnuti tipku **Dupliciraj**.   
Prikazat će se zahtjev za unos **Koda** i **Opisa** nove *Kategorije dokumenta* (oba podatka su obavezna).    
Zatim pritisnite tipku **OK** za potvrdu ili **Otkaži** ako želite prekinuti postupak dupliciranja.

## Kategorije dokumenata vanjskog podrijetla  

Ovo je popis u koji se unose osnovne informacije o *Kategoriji dokumenta*.   
Popis sadrži sljedeće informacije:     
> **Kategorija**: kod *Kategorije dokumenta*.   
> **Opis kategorije**: opis *Kategorije dokumenta*.   
> **Arhiva**: označava skladište u kojem se nalazi određena kategorija.   
> **Lokacija**: izička lokacija gdje se uobičajeno nalazi *Kategorija*; moguće je odabrati samo *Lokacije* koje pripadaju odabranoj *Arhivi*.  
> **Opis lokacije**: ako lokacija nije kodificirana, može se ručno unijeti u ovo slobodno polje.  
> **Razdoblje čuvanja**: razdoblje čuvanja koje se unosi ručno.    
> **Odgovorna funkcija**: *Poslovna funkcija* odgovorna za tu *Kategoriju*.   
> **Napomene**: slobodne bilješke.  

### Lista distribucije  

U ovom popisu moguće je povezati: *Poslovne funkcije*, *Zaposlenike*, *Klijente/Dobavljače* i *Kontakte* koji uobičajeno primaju kopiju *Kategorije dokumenta* te odrediti standardne načine dostave.  
Popis sadrži sljedeće informacije:  
> **Poslovna funkcija**   
>> **Kod**: kod *Poslovne funkcije* primatelja.    
>> **Opis**: opis *Poslovne funkcije* primatelja  
>
> **Zaposlenik**   
>> **Kod**: kod *Zaposlenika* primatelja.   
>> **Prezime**: prezime *Zaposlenika* primatelja.   
>> **Ime**: ime *Zaposlenika* primatelja.   
>
> **Klijent/Dobavljač**   
>> **Opis**: naziv tvrtke *Klijenta* ili *Dobavljača* primatelja.   
>
> **Kontakt**   
>> **Kod**: kod *Kontakta* primatelja.   
>> **Opis**: opis *Kontakta* primatelja.   
>
> **Drugi primatelj**   
>> **Opis**: slobodan opis primatelja koji nije kodificiran.    
>
> **Podaci za dostavu**   
>> **Tiskano**: označava da, u trenutku distribucije (unutarnji postupak u okviru modula   *Dokumenti vanjskog podrijetla*) subjekt želi primiti *tiskanu kopiju* dokumenta ili kopiju u privitku putem *Emaila*.   
>> **Način isporuke**: označava uobičajenu metodu isporuke za *Kategoriju dokumenta*.   
>> **Email**: označava adresu e-pošte primatelja, ako nije definirana u matičnim podacima primatelja.    
>> **Broj kopija**: označava broj tiskanih kopija koje primatelj želi primiti.    
>> **Bilješke**: slobodne napomene   

*Pulsanti specifici*:      
**Nuovo destinatario**: inserisce una nuova riga in elenco.   
**Cancella destinatario**: cancella la riga selezionata dall'elenco.   

### Accesso consentito alle funzioni
In questo elenco è possibile inserire le *Funzioni aziendali* a cui dare i diritti di accesso.   
Se non vengono inserite righe in questa tabella, allora l'accesso è consentito a tutti.   
L'elenco si compone delle seguenti informazioni:   
> **Funzione**: è il codice della *Funzione aziendale*.   
> **Descrizione funzione**: è la descrizione della *Funzione aziendale*.   
> **Note**: annotazioni libere.

*Pulsanti specifici*:      
**Nuova funzione di accesso**: inserisce una nuova riga in elenco.   
**Cancella funzione di accesso**: cancella la riga selezionata dall'elenco.   

### Extra data
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Documento di origine esterna*.   
Questi *Extra data* possono venire ereditati nel *Documento esterno* di quella determinata categoria.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).