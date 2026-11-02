---
title: Standardne faze
sidebar_position: 7
---

Ova tabela odgovara šifarniku faza koje se koriste u radnim ciklusima. U njoj se definišu sve faze sa pripadajućim podacima kako bi se kasnije mogle predložiti i odabrati unutar radnog ciklusa.

Tabela omogućava unos novih zapisa ili pretraživanje postojećih radi njihovog pregleda, izmene ili brisanja.

**Traženje standardnih faza**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

**Unos standardnih faza**

Za unos novih šifara potrebno je kliknuti na prvi prazni red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja zahteva program: **Šifra**, **Opis faze/podfaze**, **Radni centar** i **Merna jedinica vremena**.

Prilikom odabira radnog centra automatski se preuzimaju i podaci o mašini i grupi radnika definisani u tabeli radnih centara. Korisnik ih ipak može ručno izmeniti direktno na fazi.

Osim toga, potrebno je voditi računa o tome da se unesu jedinstvene vrednosti za polja **Faza** i **Podfaza**, jer će se u suprotnom prikazati poruka upozorenja.

Jedan od najvažnijih podataka koji je potrebno uneti u ovu tabelu jeste **Tip faze/podfaze**: *Interna* ili *Eksterna*. Ako je reč o internoj fazi, to znači da se ona izvodi unutar proizvodnog pogona. Ako je reč o eksternoj fazi, ona se poverava dobavljaču kao podizvođaču, a za njeno izvršenje automatski se generiše odgovarajuća narudžbina podizvođaču.

*Posebna polja*:

**Šifra**: označava šifru standardne faze;

**Faza**: označava redni broj faze;

**Podfaza**: označava broj podfaze unutar iste faze;

**Opis faze/podfaze**: označava opis faze/podfaze;

**Tip faze/podfaze**: označava da li je faza/podfaza interna ili eksterna;

**Proizvodna faza**: označava da li je reč o fazi proizvodnog tipa;

**Dozvoljeno kretanje**: označava da će faza generisati skladišna kretanja (izlaze i ulaze);

**Kontrola kvaliteta**: ako je aktivirana, ova oznaka određuje da faza podleže nizu analiza povezanih sa kontrolom kvaliteta;

**Radni centar**: označava šifru radnog centra;

**Fiksno vreme**: označava da radni centar radi sa fiksnim vremenom, odnosno da vreme obrade artikla ne zavisi od broja komada;

**Merna jedinica vremena**: označava mernu jedinicu vremena faze;

**Vreme čekanja/red čekanja**: označava vreme koje mora proteći nakon završetka faze pre nego što ona može ponovo da se izvrši;

**Vreme podešavanja**: označava vreme potrebno za podešavanje pre početka obrade;

**Vreme ponovnog podešavanja**: označava vreme potrebno za ponovno podešavanje mašine između proizvodnje jednog ili više komada;

**Mašina**: označava šifru mašine;

**Vreme mašine**: označava vreme korišćenja mašine u ovoj fazi;

**Broj mašina**: označava broj mašina koje istovremeno učestvuju u obradi;

**Broj delova**: označava broj komada proizvedenih tokom svakog izvođenja te faze;

**Grupe rada**: označava šifru grupe radnika;

**Dodeljeno vreme**: označava vreme koje radnici utroše na tu fazu;

**Broj radnika**: označava broj radnika koji obavljaju fazu;

**Održavanje**: označava da li je faza namenjena održavanju;

**Trošak**: označava trošak faze za proizvodnju broja komada navedenog u polju Broj komada;

**Opis podizvođača**: označava opis podizvođača (polje je omogućeno samo ako je faza tipa **Eksterna**);

**Lokacija**: označava skladišnu lokaciju povezanu sa tom fazom; to znači da će se svi artikli koji se koriste u toj fazi nalaziti na toj lokaciji;

**Tip prometa nabavke**: označava tip fakturisanja nabavke naveden na nivou reda artikla u narudžbini podizvođaču (polje je omogućeno samo ako je faza tipa **Eksterna**);

**Opis prometa nabavke**: označava opis tipa fakturisanja nabavke navedenog na nivou reda artikla u narudžbini podizvođaču (polje je omogućeno samo ako je faza tipa **Eksterna**);

**Tip kontrolnog plana**: označava tip plana za kontrolu kvaliteta (samo ako je aktivirana oznaka **Kontrola kvaliteta**);

**Godina kontrolnog plana**: označava godinu plana za kontrolu kvaliteta (samo ako je aktivirana oznaka **Kontrola kvaliteta**);

**Kontrolni**: označava šifru plana za kontrolu kvaliteta (samo ako je aktivirana oznaka **Kontrola kvaliteta**);

**Opis kontrolnog plana**: označava opis plana za kontrolu kvaliteta (samo ako je aktivirana oznaka **Kontrola kvaliteta**);

**Datum izrade**: označava datum izrade zapisa;

**Datum izmene**: označava datum poslednje izmene zapisa;

**Napomene**: slobodno polje za unos napomena;

**Opis radnog centra**: označava opis radnog centra;

**Opis mašine**: označava opis mašine;

**Opis grupe radnika**: označava opis grupe radnika.

:::note Napomena
Sve eksterne faze uvek moraju imati aktivirane oznake **Proizvodna faza** i **Dozvoljeno kretanje**.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, dugmad i polja, pogledajte sledeću poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).