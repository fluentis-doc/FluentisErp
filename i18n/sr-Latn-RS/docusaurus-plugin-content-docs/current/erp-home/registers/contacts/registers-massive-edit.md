---
title: Masovna izmena kontakata
sidebar_position: 3
---

## Uvod

Ovaj postupak (dostupan od verzije 805) omogućava pretraživanje i masovno ažuriranje određenih podataka unetih za kupce/dobavljače u aktivnom preduzeću.

U gornjem delu obrasca nalazi se niz filtera povezanih sa glavnim poljima koja će biti obuhvaćena masovnim ažuriranjem.

U tabeli se prikazuje lista konta/analitičkih konta povezanih sa šifarnicima kupaca i dobavljača. Pomoću hiperveza u poslednje dve kolone moguće je pristupiti pojedinačnim šifarnicima.

Na traci menija nalaze se dva dugmeta: **Pretraži** i **Masovna izmena**. Drugo dugme aktivira se tek nakon izbora više redova u tabeli.

Nakon klika na dugme **Masovna izmena** otvara se obrazac koji trenutno sadrži sledeće kartice:

- Administracija
- Poreske informacije
- Plaćanja
- Konfiguracija uvoza elektronskih faktura

:::note[Napomena]
Kartice i polja koja su zaista dostupna zavise od vrste izbora napravljenog na početku. Ako su izabrana i analitička konta kupaca i analitička konta dobavljača, prikazaće se samo elementi zajednički za obe vrste analitičkih konta. Ako su izabrani samo kupci, prikazaće se sva polja dostupna u šifarniku kupaca. Isto tako, izborom samo dobavljača prikazaće se sva polja koja se odnose na njih.
:::

## Kako izvršiti izmene

Uzmimo za primer karticu *Administracija*:

- Aktivirajte **oznaku** pored polja ili polja koja želite da izmenite i podesite željenu vrednost.
- Polja pored kojih oznaka nije aktivirana neće biti izmenjena.
- Podaci u **tabelama** (u donjem delu obrasca) koje sadrže listu elemenata, na primer konta protivstavki, prikazaće sve kombinacije podataka pronađene u početno izabranim šifarnicima kupaca/dobavljača.

Na primer, može postojati nekoliko redova sa različitim analitičkim kontima protivstavki, a u poslednjoj koloni prikazuje se broj šifarnika na koje se odnosi pojedinačni konto, u polju **Ukupan broj izabranih redova**.

Pomoću prvog polja moguće je za svaki red izabrati da li želite da izmenite šifarnike koji sadrže taj podatak na jedan od sledećih načina:

- ažurirati postojeći red novim podatkom podešenim u ovom obrascu;
- izbrisati red;
- izbrisati postojeći red i uneti podatke podešene u ovom obrascu.

U tabeli se nalazi i oznaka **Ažuriraj sva jednostavna svojstva**. Ona služi za upravljanje poljima tipa jednostavnog svojstva izabranih šifarnika (na primer, poljem opisa) koja po svojoj prirodi ne omogućavaju grupisanje u tabeli radi prikaza podataka koje je potrebno izmeniti. Ta polja **NEĆE** biti ažurirana ako ova oznaka nije aktivirana.

Prilikom zatvaranja obrasca pojaviće se upit da li želite da sačuvate izmene (ako ih već niste sačuvali pomoću jedinog dostupnog dugmeta u obrascu). Ako potvrdite čuvanje, prikazaće se i dodatna poruka za potvrdu operacije kako bi se izbeglo neželjeno čuvanje.

<details>
  <summary>TEHNIČKA NAPOMENA: Zapisnik operacije (kliknite za proširenje)</summary>

  <p>Radi dodatne sigurnosti, prilikom svakog čuvanja masovnog ažuriranja, Fluentis2025 čuva XML prethodnih i narednih podataka, beležeći korisnika i datum izmene.</p>

  <p>Podaci se čuvaju u tabeli <strong>fluentis.SH_ContactCustomerSupplierAccountLogs</strong>.</p>

  <p>XML datoteke odnose se na svojstva kojima upravlja postupak i koja su bila predmet izmene, na primer:</p>

  <pre><code>
&lt;ContactLedgerAccount&gt;
  &lt;IsEDIManaged&gt;False&lt;/IsEDIManaged&gt;
  &lt;IsMaturityManaged&gt;True&lt;/IsMaturityManaged&gt;
  &lt;CustomerSupplierData&gt;
    &lt;DestinationCodeType&gt;1&lt;/DestinationCodeType&gt;
    &lt;IsElectronicInvoiceManaged&gt;False&lt;/IsElectronicInvoiceManaged&gt;
    &lt;IsPublicAdministration&gt;False&lt;/IsPublicAdministration&gt;
    &lt;Id&gt;42154&lt;/Id&gt;
    &lt;CustomerSupplierAccountAdministration&gt;
      &lt;IsAccountHolderManaged&gt;False&lt;/IsAccountHolderManaged&gt;
      &lt;IsContractIdentificationCodeEnabled&gt;False&lt;/IsContractIdentificationCodeEnabled&gt;
      &lt;IsDeliveryInvoiceExcluded&gt;False&lt;/IsDeliveryInvoiceExcluded&gt;
      &lt;IsIntrastat&gt;False&lt;/IsIntrastat&gt;
      &lt;IsNotBlackList&gt;False&lt;/IsNotBlackList&gt;
      &lt;IsNotGroupedByDestination&gt;False&lt;/IsNotGroupedByDestination&gt;
      &lt;IsNotInCustomerSupplierList&gt;False&lt;/IsNotInCustomerSupplierList&gt;
      &lt;IsProfessional&gt;False&lt;/IsProfessional&gt;
      &lt;IsUniqueProjectCodeEnabled&gt;False&lt;/IsUniqueProjectCodeEnabled&gt;
      &lt;Currency&gt;60&lt;/Currency&gt;
      &lt;OffsetCosts&gt;
        &lt;OffsetCost&gt;
          &lt;Account&gt;59115&lt;/Account&gt;
          &lt;Vat&gt;151&lt;/Vat&gt;
          &lt;VatTransactionType&gt;1&lt;/VatTransactionType&gt;
          &lt;Id&gt;951&lt;/Id&gt;
        &lt;/OffsetCost&gt;
      &lt;/OffsetCosts&gt;
    &lt;/CustomerSupplierAccountAdministration&gt;
    &lt;CustomerSupplierAccountPayments&gt;
      &lt;IsCreditNoteGroupedOnPromissory&gt;False&lt;/IsCreditNoteGroupedOnPromissory&gt;
      &lt;IsMaturityGrouped&gt;False&lt;/IsMaturityGrouped&gt;
      &lt;IsMaturityGroupedOnPromissory&gt;False&lt;/IsMaturityGroupedOnPromissory&gt;
      &lt;IsStatisticalCreditCheckEnabled&gt;False&lt;/IsStatisticalCreditCheckEnabled&gt;
      &lt;MaturityValueType&gt;1&lt;/MaturityValueType&gt;
    &lt;/CustomerSupplierAccountPayments&gt;
  &lt;/CustomerSupplierData&gt;
  &lt;Id&gt;77115&lt;/Id&gt;
&lt;/ContactLedgerAccount&gt;
  </code></pre>

  <p>Ova tabela nema korisnički interfejs i trenutno ne predviđa opciju vraćanja prethodnog stanja.</p>
</details>