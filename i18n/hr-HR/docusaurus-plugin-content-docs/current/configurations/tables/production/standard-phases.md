---
title: Standardne faze
sidebar_position: 7
---

Ova tablica odgovara šifarniku faza koje se koriste u radnim ciklusima. U njoj se definiraju sve faze s pripadajućim podacima kako bi se kasnije mogle predložiti i odabrati unutar radnog ciklusa.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi njihova pregleda, izmjene ili brisanja.

**Traženje standardnih faza**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

**Unos standardnih faza**

Za unos novih šifri potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: **Šifra**, **Opis faze/podfaze**, **Radni centar** i **Mjerna jedinica vremena**.

Prilikom odabira radnog centra automatski se preuzimaju i podaci o stroju i grupi radnika definirani u tablici radnih centara. Korisnik ih ipak može ručno promijeniti izravno na fazi.

Osim toga, potrebno je voditi računa o tome da se unesu jedinstvene vrijednosti za polja **Faza** i **Podfaza**, jer će se u suprotnom prikazati poruka upozorenja.

Jedan od najvažnijih podataka koji je potrebno unijeti u ovu tablicu jest **Vrsta faze/podfaze**: *Interna* ili *Vanjska*. Ako je riječ o internoj fazi, to znači da se ona izvodi unutar proizvodnog pogona. Ako je riječ o vanjskoj fazi, ona se povjerava dobavljaču kao podizvođaču, a za njezino izvršenje automatski se generira odgovarajuća narudžba podizvođaču.

*Posebna polja*:

**Šifra**: označava šifru standardne faze;

**Faza**: označava redni broj faze;

**Podfaza**: označava broj podfaze unutar iste faze;

**Opis faze/podfaze**: označava opis faze/podfaze;

**Vrsta faze/podfaze**: označava je li faza/podfaza interna ili vanjska;

**Proizvodna faza**: označava je li riječ o fazi proizvodnog tipa;

**Dopušteno kretanje**: označava da će faza generirati skladišna kretanja (izlaze i ulaze);

**Kontrola kvalitete**: ako je aktivirana, ova oznaka određuje da faza podliježe nizu analiza povezanih s kontrolom kvalitete;

**Radni centar**: označava šifru radnog centra;

**Fiksno vrijeme**: označava da radni centar radi s fiksnim vremenom, odnosno da vrijeme obrade artikla ne ovisi o broju komada;

**Mjerna jedinica vremena**: označava mjernu jedinicu vremena faze;

**Vrijeme čekanja/red čekanja**: označava vrijeme koje mora proteći nakon završetka faze prije nego što se ona može ponovno izvršiti;

**Vrijeme postavljanja**: označava vrijeme potrebno za podešavanje prije početka obrade;

**Vrijeme ponovnog podešavanja**: označava vrijeme potrebno za ponovno podešavanje stroja između proizvodnje jednog ili više komada;

**Stroj**: označava šifru stroja;

**Vrijeme stroja**: označava vrijeme korištenja stroja u ovoj fazi;

**Broj strojeva**: označava broj strojeva koji istodobno sudjeluju u obradi;

**Broj dijelova**: označava broj komada proizvedenih tijekom svakog izvođenja te faze;

**Grupe rada**: označava šifru grupe radnika;

**Dodijeljeno vrijeme**: označava vrijeme koje radnici utroše na tu fazu;

**Broj radnika**: označava broj radnika koji obavljaju fazu;

**Održavanje**: označava je li faza namijenjena održavanju;

**Trošak**: označava trošak faze za proizvodnju broja komada navedenog u polju Broj komada;

**Opis podizvođača**: označava opis podizvođača (polje je omogućeno samo ako je faza vrste **Vanjska**);

**Lokacija**: označava skladišnu lokaciju povezanu s tom fazom; to znači da će se svi artikli koji se koriste u toj fazi nalaziti na toj lokaciji;

**Vrsta prometa nabave**: označava vrstu fakturiranja nabave navedenu na razini retka artikla u narudžbi podizvođaču (polje je omogućeno samo ako je faza vrste **Vanjska**);

**Opis prometa nabave**: označava opis vrste fakturiranja nabave navedene na razini retka artikla u narudžbi podizvođaču (polje je omogućeno samo ako je faza vrste **Vanjska**);

**Vrsta kontrolnog plana**: označava vrstu plana za kontrolu kvalitete (samo ako je aktivirana oznaka **Kontrola kvalitete**);

**Godina kontrolnog plana**: označava godinu plana za kontrolu kvalitete (samo ako je aktivirana oznaka **Kontrola kvalitete**);

**Kontrolni**: označava šifru plana za kontrolu kvalitete (samo ako je aktivirana oznaka **Kontrola kvalitete**);

**Opis kontrolnog plana**: označava opis plana za kontrolu kvalitete (samo ako je aktivirana oznaka **Kontrola kvalitete**);

**Datum izrade**: označava datum izrade zapisa;

**Datum izmjene**: označava datum posljednje izmjene zapisa;

**Napomene**: slobodno polje za unos napomena;

**Opis centra rada**: označava opis radnog centra;

**Opis stroja**: označava opis stroja;

**Opis grupe radnika**: označava opis grupe radnika.

:::note Napomena
Sve vanjske faze uvijek moraju imati aktivirane oznake **Proizvodna faza** i **Dopušteno kretanje**.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, gumbe i polja, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).