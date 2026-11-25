---
title: Masovna izmjena kontakata
sidebar_position: 3
---

## Uvod

Ovaj postupak (dostupan od verzije 805) omogućuje pretraživanje i masovno ažuriranje određenih podataka unesenih za kupce/dobavljače u aktivnom poduzeću.

U gornjem dijelu obrasca nalazi se niz filtara povezanih s glavnim poljima koja će biti obuhvaćena masovnim ažuriranjem.

U tablici se prikazuje popis konta/analitičkih konta povezanih sa šifarnicima kupaca i dobavljača. Pomoću hiperpoveznica u posljednja dva stupca moguće je pristupiti pojedinačnom šifarniku.

Na vrpci izbornika nalaze se dva gumba: **Traži** i **Masovna izmjena**. Drugi gumb aktivira se tek nakon odabira više redaka u tablici.

Nakon klika na gumb **Masovna izmjena** otvara se obrazac koji trenutačno sadrži sljedeće kartice:

- Administracija
- Porezne informacije
- Plaćanja
- Konfiguracija uvoza elektroničkih računa

:::note[Napomena]
Kartice i polja koja su stvarno dostupna ovise o vrsti odabira napravljenog na početku. Ako su odabrana i analitička konta kupaca i analitička konta dobavljača, prikazat će se samo elementi zajednički objema vrstama analitičkih konta. Ako su odabrani samo kupci, prikazat će se sva polja dostupna u šifarniku kupaca. Isto tako, odabirom samo dobavljača prikazat će se sva polja koja se odnose na njih.
:::

## Kako izvršiti izmjene

Uzmimo za primjer karticu *Administracija*:

- Aktivirajte **oznaku** uz polje ili polja koja želite izmijeniti i postavite željenu vrijednost.
- Polja uz koja nije aktivirana oznaka neće se mijenjati.
- Podaci u **tablicama** (u donjem dijelu obrasca) koje sadrže popis elemenata, primjerice konta protustavki, prikazat će sve kombinacije podataka pronađene u početno odabranim šifarnicima kupaca/dobavljača.

Primjerice, može postojati nekoliko redaka s različitim analitičkim kontima protustavki, a u posljednjem stupcu prikazuje se broj šifarnika na koje se odnosi pojedini konto, u polju **Ukupan broj odabranih redaka**.

Pomoću prvog polja moguće je za svaki redak odabrati želite li izmijeniti šifarnike koji sadrže taj podatak na jedan od sljedećih načina:

- ažurirati postojeći redak novim podatkom postavljenim u ovom obrascu;
- izbrisati redak;
- izbrisati postojeći redak i unijeti podatke postavljene u ovom obrascu.

U tablici se nalazi i oznaka **Ažuriraj sva jednostavna svojstva**. Ona služi za upravljanje poljima vrste jednostavnog svojstva odabranih šifarnika (primjerice, poljem opisa) koja po svojoj prirodi ne omogućuju grupiranje u tablici radi prikaza podataka koje je potrebno izmijeniti. Ta se polja **NEĆE** ažurirati ako ova oznaka nije aktivirana.

Prilikom zatvaranja obrasca pojavit će se upit želite li spremiti izmjene (ako ih već niste spremili pomoću jedinog dostupnog gumba u obrascu). Ako potvrdite spremanje, prikazat će se i dodatna poruka za potvrdu operacije kako bi se izbjeglo neželjeno spremanje.

 <details>
  <summary>NOTA TECNICA: Log Operazione (Click to expand)</summary>

  <p>Per ulteriore sicurezza, ad ogni salvataggio di un aggiornamento massivo, Fluentis2025 memorizza un XML dei dati precedenti e successivi, tracciando l'utente e la data della modifica.</p>

  <p>I dati sono salvati nella tabella <strong>fluentis.SH_ContactCustomerSupplierAccountLogs</strong>.</p>

  <p>Gli XML sono relativi alle proprietà gestite dalla procedura che sono state oggetto di modifica, come ad esempio:</p>

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

  <p>Ova tablica nema korisničko sučelje i trenutačno ne nudi mogućnost vraćanja prethodnog stanja.</p>

</details>