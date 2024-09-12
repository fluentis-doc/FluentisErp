---
title: Isporuke/povrati D.P.I.
sidebar_position: 1
---

Stavka se nalazi na putanji **Početna stranica > Zaposlenici > Isporuke/povrati D.P.I.> Isporuke/povrati D.P.I.**   


:::important Za što služi 
Ovaj postupak omogućuje evidentiranje isporuka i povrata *D.P.I.-a* *Zaposlenicima*.   

Obrazac se sastoji od područja filtra, područja za prijedlog podataka i rezultata.
Nakon postavljanja svih željenih filtara, dovoljno je kliknuti na gumb **Traži isporuke** ili **Pretraži povrate** kako biste vidjeli rezultate unutar tablice rezultata.   
:::


## Posebni gumbi


### ![](/img/neutral/common/search.png) Traži isporuke   
Pretraživanje *D.P.I.* koji se trebaju isporučiti temelji se na aktivnim *D.P.I.* ima predviđenim za *radno mjesto* i *Zaposlenicima* koji obavljaju istu *Funkciju*.   
Na temelju postavljenog filtra rezultati se prikazuju unutar tablice rezultata. *Očekivani datum*:   
- ne prikazuje se u slučaju *D.P.I.-a* koji nikada nisu isporučeni *Zaposleniku*;   
- prikazuje se *crvenim* slovima ako je očekivana isporuka *D.P.I.-a* kasnija od današnjeg datuma;   
- izračunava se na temelju datuma posljednje isporuke zbrojene s  *Valjanosti u mjesecima* navedenim u *Funkciji* koju *Zaposlenik* obavlja. 
- ako *Zaposlenik* obavlja više *Funkcija* i za više *Funkcija* treba koristiti isti *D.P.I.* s različitim *Valjanostima u mjesecima*, *Valjanosti* koje će se uzeti u obzir za izračun *očekivanog Datuma* bit će one manje.


### Predloži isporuke  
Gumb je omogućen samo ako je prethodno izvršena **Pretraga isporuka**.   
Predlaže *Količinu isporučenu* na 1 (jedan) u svim redovima prikazanim u *Području rezultata*.   


### Izbriši isporuke   
Gumb je omogućen samo ako je prethodno izvršena **Pretraga isporuka**.   
Predlaže *Količinu isporučenu* na 0 (nula) u svim redovima prikazanim u *Području rezultata*.   


### Pretraži povrate  
Pretraživanje *D.P.I.-a* za povrat temelji se na *D.P.I.-ima* isporučenim *Zaposlenicima*.   
Na temelju postavljenog filtra rezultati se prikazuju unutar tablice rezultata.  
*Očekivani datum* prikazuje se crvenim slovima ako je očekivani povrat *D.P.I.-a* kasniji od današnjeg datuma.  
Ne provjerava se jesu li *Količine vraćene* usklađene s ranije *Isporučenim količinama*.  


### Predloži povrate 
Gumb je omogućen samo ako je prethodno izvršena **Traži povrate**.   
Predlaže *Količinu vraćenu* na 1 (jedan) u svim redovima prikazanim u  *Području rezultata*.   


### Izbriši povrate 
Gumb je omogućen samo ako je prethodno izvršena **Traži povrate**.   
Predlaže *Količinu vraćenu* na 0 (nula) u svim redovima prikazanim u  *Području rezultata*.   


### ![](/img/neutral/common/save.png) Spremi  
Svi redovi s *Isporučenom količinom* ili *Vraćenom količinom* većom od *nule* u području rezultata bit će uneseni u *Povijest isporuka/povrata D.P.I.-a*, na datume *Isporučeno/Vraćeno* unesene u području *Predloženi podaci za isporuke/povrate*.   


## Područja upravljanja


### Filter  
Filtriranje podataka sastoji se od sljedećih informacija:
> **Consegne/Resi za Zaposlenika**: to je *Zaposlenik* za kojeg želite pronaći *D.P.I.* za dostavu/povrat.   
> **Consegne/Resi za D.P.I.**: to je *D.P.I.* koji želite dostaviti/primiti.


### Predloženi podaci za dostavu/povrat  
Ovaj proširivač sadrži obavezne informacije za registraciju *dostava/povrata*.   
Sastoji se od sljedećih informacija: 
> **Dostavljeno od/Povrat od**: *osoba* koja dostavlja *D.P.I.* *Zaposlenicima* / prima *D.P.I.* od *Zaposlenika*.   
> **Dostavljeno/Povrat u datum**: datum dostave/povrata *D.P.I.* *Zaposlenicima*.   


### Rezultati
Popis se sastoji od sljedećih informacija:  
> **Predviđeni datum**: to je predviđeni datum dostave/povrata *D.P.I-a* al *Zaposleniku*.   
>
> **Zaposlenik**
>> **Šifra**: to je šifra odredišnog *Zaposlenika*.  
>> **Prezime**: to je prezime odredišnog *Zaposlenika*.
>> **Ime**: to je ime odredišnog *Zaposlenika*. 
>
> **D.P.I.**
>> **Šifra**: to je šifra *D.P.I.-a* koji se dostavlja/vraća.  
>> **Opis**: to je opis *D.P.I.-a* koji se dostavlja/vraća.   
>
> **Količina**
>> **Dostavljeno**: to je *Dostavljena količina* *D.P.I.-a* *Zaposleniku*.
>> **Povrat**: to je *Vraćena količina D.P.I.-a* od *Zaposlenika*. 
>
> **Potpisano**: označava je li *Zaposlenik* potpisao *Obrazac za dostavu/povrat*, radi prihvatanja.   
> **Upotreba**: slobodne napomene o temi; predloženo je s popisa *D.P.I.-a* predviđenih za *Zanimanje* koje *Zaposlenik* obavlja.   
> **Pravila**: slobodne napomene o temi; predloženo je s popisa *D.P.I.-a* predviđenih za *Zanimanje* koje *Zaposlenik* obavlja.   
> **Napomene**: slobodne napomene.   


Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkim funkcijama obrazaca, obratite se sljedećem linku: [Zajedničke funkcije, gumbe i polja](/docs/guide/common).