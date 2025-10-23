---
title: Standardne faze
sidebar_position: 7
---

Ova tablica odgovara registru faza koje se koriste u radnim ciklusima; u njoj se kodiraju sve faze s pripadajućim podacima kako bi se kasnije mogle predložiti i odabrati unutar radnog ciklusa.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih kako bi se mogli pregledati, izmijeniti ili izbrisati.

**Pretraživanje standardnih faza**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što se postave svi željeni filtri, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži rezultata.

**Unos standardnih faza**

Za unos novih šifri potrebno je kliknuti u rešetki na prvi prazan redak ili pritisnuti tipku **Novi**. 

Za novi zapis potrebno je unijeti barem obavezna polja koja program zahtijeva: **Kod**, **Opis faze/podfaze**, **Radni centar**  i **Jedinicu mjere vremena**.         
Kada se unese radni centar, on automatski preuzima informacije o stroju i grupi radne snage navedene u tablici radnih centara, no korisnik ih može ručno izmijeniti na samoj fazi.
Također, važno je obratiti pozornost da kodovi **Faza** i **Podfaza** budu jedinstveni, inače će se prikazati poruka upozorenja.  

Jedan od najvažnijih podataka za unos u ovu tablicu je **Vrsta faze/podfaze**: *Interna* ili *Eksterna*. Ako je interna, znači da se obavlja unutar proizvodnog pogona, dok ako je eksterna, znači da se daje u kooperaciju vanjskom dobavljaču i generirat će nalog za kooperaciju namijenjen njezinu izvršenju  

*Specifična polja:*: 

**Kod**: označava kod standardne faze; 
**Faza**: označava redni broj faze;   
**Podfaza**: označava broj podfaze unutar iste faze;  
**Opis faze/podfaze**: označava opis faze/podfaze;   
**Vrsta faze/podfaze**: označava je li faza/podfaza interna ili eksterna;   
**Proizvodna faza**: označava radi li se o fazi proizvodnog tipa;  
**Kreiranje zaliha**: označava da faza generira skladišne pokrete (izdavanje i zaprimanje);    
**Kontrola kvalitete**: ako je aktivirano, ovaj flag označava da je faza podložna analizama vezanim uz kontrolu kvalitete;    
**Radni centar**: označava šifru radnog centra (CdL);  
**Fiksno vrijeme**: označava da radni centar radi s fiksnim vremenom, tj. vrijeme obrade artikla ne ovisi o broju komada;    
**J.M. vremena**: označava jedinicu mjere vremena faze;    
**Vrijeme čekanja/red čekanja**: označava vrijeme potrebno pričekati nakon završetka faze prije njezina ponovnog izvođenja;         
**Vrijeme pripreme**: označava vrijeme potrebno za pripremu stroja prije početka obrade;   
**Vrijeme ponovne priprem**: označava vrijeme potrebno za prilagodbu stroja između izrade više komada;   
**Stroj**: označava kod stroja;   
**Vrijeme stroja**: označava vrijeme korištenja stroja u toj fazi;                         
**Broj strojeva**: označava broj strojeva koji su istovremeno angažirani u proizvodnji;  
**Broj komada**: označava broj komada proizvedenih pri jednom izvođenju te faze;               
**Grupa radne snage**: označava kod grupe radne snage;  
**Dodijeljeno vrijeme**: označava vrijeme koje radna snaga utroši u toj fazi;              
**Broj radnika**: označava broj radnika koji rade na fazi;           
**Održavanje**: označava je li faza tipa održavanja;          
**Trošak**: indica il costo della fase per produrre i pezzi indicati nel campo Numero pezzi;    
**Descrizione terzista**: označava trošak faze za izradu komada navedenih u polju **Broj komada**;  
**Opis kooperanta**: indica l'ubicazione di magazzino associata a quella fase; questo significa che tutti gli articoli impiegati in quella fase saranno presenti in quell'ubicazione;    
**Tipo fatturato acquisto**: označava vrstu fakturiranog troška prikazanog na razini stavke u nalogu za posao (omogućeno samo ako je faza tipa **Vanjska**);      
**Opis vrste fakturiranog troška**: označava opis vrste fakturiranog troška prikazanog na razini stavke u nalogu za posao (omogućeno samo ako je faza tipa **Vanjska**);      
**Vrsta plana kontrole**: označava vrstu plana za kontrolu kvalitete (samo ako je označeno polje **Kontrola kvalitete**);  
**Godina plana kontrole**: označava godinu plana za kontrolu kvalitete (samo ako je označeno polje **Kontrola kvalitete**);  
**Šifra plana kontrole**: označava šifru plana za kontrolu kvalitete (samo ako je označeno polje  **Kontrola kvalitete**);  
**Opis plana kontrole**: označava opis plana za kontrolu kvalitete (samo ako je označeno polje **Kontrola kvalitete**);  
**Datum kreiranja**: označava datum kreiranja zapisa;    
**Datum izmjene**: označava datum zadnje izmjene zapisa;   
**Bilješke**: slobodno polje za unos bilješki;  
**Opis radnog centra**: označava opis radnog centra;    
**Opis stroja**: označava opis stroja;  
**Opis skupine radne snage**: označava opis skupine radne snage.  
      

:::note Napomena 
Sve vanjske faze moraju uvijek imati aktivna polja **Proizvodna faza** i **Faza s pomicanjem**.
:::


Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).