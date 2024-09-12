---
title: Zahtjevi za učitavanje predmeta
sidebar_position: 2
---

 

### Kako prikazati dodatna polja u obrascima


Da biste dodali svojstva koja nisu prisutna u obrascima, morate potvrditi da su svojstva prisutna u LoadRequestu objekta. 



### Učitaj nova svojstva

**Primjeri**:
 - dodajte *PDV* i *porezni broj* u proširenje kupca, u **Zaglavlje** narudžbe kupca.
 - dodajte *SWIFT* u **mrežu** Plaćanja narudžbe korisnika.  

![](/img/it-it/guide/panels/object-navigator/load-request-object/image01.png)

1. popraviti ploču  **Object Navigatora** ako da uvijek može biti vidljiva dok se ne definiraju dodatna polja, tj. do trenutka prije kreiranja prilagođenog profila. 

2. u **Object Navigatoru**, desnom tipkom miša kliknite naziv objekta, unesite **Detalji** i idite na odjeljak **Zahtjev za učitavanje objekta** i desnim klikom odaberite  **Novi zahtjev za učitavanje objekta**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image02.png)

3. otvorite *Nuovo Load Request* gdje unesete isti kod kao *Load Request Standard* i zatim spremite tako da se učitaju sva svojstva objekta.  

4. pretražite stablo objekata za pogođena svojstva.

U ovom slučaju otišli smo pod reference *Kupca* i u referencu *Šifarnika* kako bismo pronašli *OIB* i *PDV broj*, te smo ih odabrali. 

5. uvijek u istom obrascu, u rešetki **Based On**, aktivirajte LoadRequest **Šifru** tako da se sva svojstva prisutna u ovom *Personaliziranom Load Request*.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image03.png)

6. zatvorite obrazac.

 
### Dodajte svojstva u zaglavlje obrasca 

6.1. lijevo od obrasca Fluentis koji treba prilagoditi, otvoriti i držati **Form Navigator** otvorenim. 

6.2. otvorite stablo obrasca i aktivirajte obrazac u **Customization Mode**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image04.png)


Na ovom mjestu obrazac je označen crvenom bojom: 

![](/img/it-it/guide/panels/object-navigator/load-request-object/image05.png)


6.3 u **Object Navigator** potražite svojstva koja želite dodati obrascu.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image06.png)

 
6.4. odaberite stavku i povucite je u *Form Navigator* točno iznad odjeljka gdje se mora umetnuti svojstvo koje će se pojaviti u obrascu Fluentis. 

![](/img/it-it/guide/panels/object-navigator/load-request-object/image07.png)


6.5. *Poništite Customization Mode* kada završite s prilagođavanjem obrasca. 

![](/img/it-it/guide/panels/object-navigator/load-request-object/image08.png)


### Dodajte svojstva rešetki obrasca 


Da biste dodali svojstva mrežama, ne morate ulaziti u Customization mode.


7.1 u *Object Navigatoru* potražite svojstva za dodavanje. 

7.2 odaberite stavku i povucite je u mrežu. Obrazac je označen crvenom bojom.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image09.png)


Ovo svojstvo pojavit će se kao zadnji stupac koji se zatim mora povući na željenu poziciju.  

![](/img/it-it/guide/panels/object-navigator/load-request-object/image10.png)



8. *Izradite profil* da biste spremili svoju prilagodbu.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image11.png)


9. *ponovno pokrenite* Fluentis kako bi prilagodba postala operativna.