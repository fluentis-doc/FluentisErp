---
title: Podaci knjiženja
sidebar_position: 1
---

Na ovoj kartici definišu se specifične informacije koje se odnose na šifarnik koji se koristi.

## Dodeljeni podkonti

U tabeli se prikazuju **konta** dodeljena subjektu, koja zatim određuju prikazivanje niza *posebnih kartica* na kojima će se unositi informacije povezane sa različitim oblastima sistema.

Da biste dodelili računovodstvena konta šifarniku koji se koristi, potrebno je da se pozicionirate u prvu kolonu **Tip konta** i odaberete vrstu koja je *kompatibilna* sa upravljanjem podacima o subjektima (iako meni prikazuje sve vrste konta).

:::note Napomena
Kompatibilne vrste su: *Kupci/Dobavljači*, *Agenti* i *Banke*. *Zaposleni* se klasifikuju kao dobavljači i u njihovim detaljnim podacima aktiviraju se specifična podešavanja za upravljanje porezom po odbitku.
:::

Nakon izbora vrste konta, pritiskom na taster za prelazak na sledeće polje primetićemo da **Fluentis** automatski dodeljuje konto i podkonto. Prilikom čuvanja podataka učitaće se i kartice sa detaljnim informacijama.

Veza između vrste konta (na primer kupci ili, u slučaju drugačije postavke kontnog plana, kupci Italija/italijanski kupci) i konta iz kontnog plana definiše se u [Parametrima knjiženja](/docs/configurations/parameters/finance/accounting-parameters). Povezivanje se vrši kada godina iz parametara knjiženja odgovara godini kreiranja konta.

Podkonto se nakon toga dodeljuje automatski.

:::note Napomena
Obratite pažnju da progresivni brojač NE popunjava eventualne praznine u numeraciji (uvek je moguće ručno zadati određeni podkonto, pod uslovom da već nije korišćen).

Zbog toga se preporučuje da se ne interveniše ručno u numeraciju, na primer ostavljanjem praznina, kako bi se izbeglo da, kada se dostigne ograničenje numeracije određeno strukturom kontnog plana (na primer konto sa dve, tri ili više cifara), više ne bude moguće dodavati podkonta bez izmene strukture kontnog plana ili stalnih ručnih intervencija.

Preporučuje se da se **Fluentisu** prepusti upravljanje dodelom šifara konta. Takođe, treba izbegavati ručno menjanje numeracije konta povezanih sa matičnim podacima direktno iz kontnog plana.
:::

Za svaki šifarnik moguće je **istovremeno dodeliti više podkonta**. Najčešći slučajevi u praksi su dobavljač koji je istovremeno i kupac ili kupac koji je istovremeno i agent. U tim slučajevima, u zavisnosti od izabranog reda, menjaju se i kartice sa detaljnim podacima:

### [Šifarnik kupaca/dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data/image01.png)

### [Šifarnik banaka](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data/2.png)

### [Šifarnik trgovačkih predstavnika](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/analytic)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data/3.png)

---

### **VIDEO TUTORIJALI O ŠIFARNICIMA**

<iframe width="560" height="315" src="https://www.youtube.com/embed/yvvYvTZMI_o" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/H4cos9Q4FTo" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/C5YmYWgPubY" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/iBBMYnZsvRg" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>