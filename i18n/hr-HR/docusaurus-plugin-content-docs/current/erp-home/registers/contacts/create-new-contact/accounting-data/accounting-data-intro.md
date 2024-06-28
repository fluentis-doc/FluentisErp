---
title: Podaci knjiženja
sidebar_position: 1
---

Na ovoj kartici definirat ćete specifične informacije koje se odnose na šifarnik koji se koriste.

## Dodijeljena podkonta

U grid se prikazuju **Podračuni** dodijeljeni subjektu koji zatim određuju prikazivanje niza *određenih kartica*, na kojima će se unijeti informacije povezane s različitim područjima sustava.

Da biste dodijelili računovodstveni podračun šifarnika koji se koriste, jednostavno se postavite u prvi stupac **Tip konta** i odaberite vrstu koja je *kompatibilna* s upravljanjem podacima o subjektima (iako izbornik prikazuje sve vrste računa).

:::note Bilješka
Kompatibilne vrste su: *Kupci/Dobavljači*, *Agenti* i *Banke*. *Primatelji* se klasificiraju kao dobavljači te se unutar detaljnih podataka aktiviraju specifične postavke za upravljanje porezima po odbitku.
:::

Nakon odabira vrste računa, pritiskom na tipku kartica za prijelaz na sljedeća polja, primijetit ćemo da **Fluentis** automatski dodjeljuje račun i podračun. Prilikom spremanja, također će se učitati kartice s detaljnim informacijama.

Veza između vrste računa (npr. kupci ili, u slučaju drugačije postavke plana konta, kupci Italija/talijanski kupci) i računa iz računskog plana definirana je [Parametri knjiženja](/docs/configurations/parameters/finance/accounting-parameters). Povezivanje se događa kada godina *Računskih Parametara* odgovara godini stvaranja računa.

Podračun se dodjeljuje automatski nakon toga.

:::note Bilješka
Obratite pozornost da progresivni brojač NE popunjava eventualne praznine u progresiji (uvijek je moguće ručno nametnuti određeni podračun, pod uvjetom da već nije korišten).

Stoga se preporučuje ne miješati ručno u numeraciju, primjerice, ostavljajući praznine kako bi se izbjeglo da, kada se postigne ograničenje numeracije određeno i postavkama plana konta (na primjer, kod podračuna s dva znamenke, tri znamenke itd.), više nije moguće dodavati podračune bez mijenjanja strukture plana konta 
ili neprekidno intervenirati ručno.

Preporučljivo je prepustiti **Fluentis** upravljanje dodjelom podračuna. Također, izbjegavajte ručno mijenjati numeraciju podračuna povezanih s matičnim podacima izravno iz plana konta.
:::

Za svaki registar moguće je **dodijeliti više podračuna istovremeno**. Najčešći slučajevi u praksi su oni dobavljača koji je ujedno i kupac ili kupca koji je ujedno i agent. U tim slučajevima, na temelju odabranog retka, kartice s detaljima također se mijenjaju:

### [Šifarnik kupaca/dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data/image01.png)

### [Šifarnik banaka](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/references)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data/2.png)

### [Šifarnik trgovačkih predstavnika](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/analytic)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data/3.png)

---

### **VIDEO TUTORIALI O ŠIFARNICIMA**

<iframe width="560" height="315" src="https://www.youtube.com/embed/yvvYvTZMI_o" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/H4cos9Q4FTo" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/C5YmYWgPubY" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/iBBMYnZsvRg" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>