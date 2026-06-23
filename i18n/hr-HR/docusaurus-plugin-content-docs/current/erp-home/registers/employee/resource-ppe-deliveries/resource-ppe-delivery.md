---
title: Isporuke/povrati OZO
sidebar_position: 1
---

Forma se nalazi na putanji **Početna stranica > Zaposlenici > Isporuke/povrati OZO> Isporuke/povrati OZO**   


:::important Za što služi 
Ovaj postupak omogućuje evidentiranje isporuka i povrata *osnovne zaštitne opreme* *Zaposlenicima*.   

Obrazac se sastoji od područja filtra, područja za prijedlog podataka i rezultata.
Nakon postavljanja svih željenih filtara, dovoljno je kliknuti na gumb **Traži isporuke** ili **Traži povrate** kako bi se vidjeli rezultati unutar tablice rezultata.   
:::


## Posebni gumbi


### ![](/img/neutral/common/search.png) Traži isporuke   
Pretraživanje *OZO* koje se trebaju isporučiti temelji se na aktivnim *OZO-ima* predviđenim za *radno mjesto* i *Zaposlenicima* koji obavljaju istu *Funkciju*.   
Na temelju postavljenog filtra rezultati se prikazuju unutar tablice rezultata. *Predviđeni datum*:   
- ne prikazuje se u slučaju *OZO-a* koji nikada nisu isporučeni *Zaposleniku*;   
- prikazuje se *crvenim* slovima ako je očekivana isporuka *OZO-a* kasnija od današnjeg datuma;   
- izračunava se na temelju datuma posljednje isporuke zbrojene s *Valjanosti u mjesecima* navedenim u *Funkciji* koju *Zaposlenik* obavlja. 
- ako *Zaposlenik* obavlja više *Funkcija* i za više *Funkcija* treba koristiti isti *OZO* s različitim *Valjanostima u mjesecima*, *Valjanosti* koje će se uzeti u obzir za izračun *očekivanog Datuma* bit će one manje.


### Predloži isporuke  
Gumb je omogućen samo ako je prethodno izvršena **pretraga isporuka**.   
Predlaže *Količinu isporučenu* na 1 (jedan) u svim redovima prikazanim u *Području rezultata*.   


### Obriši isporuke   
Gumb je omogućen samo ako je prethodno izvršena **pretraga isporuka**.   
Predlaže *Količinu isporučenu* na 0 (nula) u svim redovima prikazanim u *Području rezultata*.   


### Traži povrate  
Pretraživanje *OZO-a* za povrat temelji se na *OZO-ima* isporučenim *Zaposlenicima*.   
Na temelju postavljenog filtra rezultati se prikazuju unutar tablice rezultata.  
*Očekivani datum* prikazuje se crvenim slovima ako je očekivani povrat *OZO-a* kasniji od današnjeg datuma.  
Ne provjerava se jesu li *Količine vraćene* usklađene s ranije *Isporučenim količinama*.  


### Predloži povrate 
Gumb je omogućen samo ako je prethodno izvršena **pretraga povrata**.   
Predlaže *Količinu vraćenu* na 1 (jedan) u svim redovima prikazanim u  *Području rezultata*.   


### Obriši povrate 
Gumb je omogućen samo ako je prethodno izvršena **pretraga povrata**.   
Predlaže *Količinu vraćenu* na 0 (nula) u svim redovima prikazanim u  *Području rezultata*.   


### ![](/img/neutral/common/save.png) Spremi (Registar) 
Svi redovi s *Isporučenom količinom* ili *Vraćenom količinom* većom od *nule* u području rezultata bit će uneseni u *Povijest isporuka/povrata OZO-a*, na datume *Isporučeno/Vraćeno* unesene u području *Predloženi podaci za isporuke/povrate*.   


## Područja upravljanja


### Filter  
Filtriranje podataka sastoji se od sljedećih informacija:
> **Isporuke/povrati za Zaposlenika**: to je *Zaposlenik* za kojeg želite pronaći *OZO* za dostavu/povrat.   
> **Isporuke/povrati za OZO**: to je *OZO* koji želite dostaviti/primiti.


### Predloženi podaci za dostavu/povrat  
Ovo proširenje sadrži obavezne informacije za registraciju *isporuke/povrata*.   
Sastoji se od sljedećih informacija: 
> **Isporučeno od/Vraćeno na datum**: *osoba* koja dostavlja *OZO* *Zaposlenicima* / prima *OZO* od *Zaposlenika*.   
> **Isporučeno/Vraćeno u**: datum dostave/povrata *OZO* *Zaposlenicima*.   


### Rezultati
Popis se sastoji od sljedećih informacija:  
> **Predviđeni datum**: to je predviđeni datum dostave/povrata *OZO-a* *Zaposleniku*.   
>
> **Zaposlenik**
>> **Šifra**: to je šifra odredišnog *Zaposlenika*.  
>> **Prezime**: to je prezime odredišnog *Zaposlenika*.
>> **Ime**: to je ime odredišnog *Zaposlenika*. 
>
> **OZO**
>> **Šifra**: to je šifra *OZO-a* koji se dostavlja/vraća.  
>> **Opis**: to je opis *OZO-a* koji se dostavlja/vraća.   
>
> **Količina**
>> **Dostavljeno**: to je *Dostavljena količina* *OZO-a* *Zaposleniku*.
>> **Povrat**: to je *Vraćena količina OZO-a* od *Zaposlenika*. 
>
> **Potpisano**: označava je li *Zaposlenik* potpisao *Obrazac za dostavu/povrat*, radi prihvaćanja.   
> **Koristiti**: slobodne napomene o temi; predloženo je s popisa *OZO-a* predviđenih za *Zanimanje* koje *Zaposlenik* obavlja.   
> **Propisi**: slobodne napomene o temi; predloženo je s popisa *OZO-a* predviđenih za *Zanimanje* koje *Zaposlenik* obavlja.   
> **Napomene**: slobodne napomene.   


Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkim funkcijama obrazaca, obratite se sljedećem linku: [Zajedničke funkcije, gumbe i polja](/docs/guide/common).