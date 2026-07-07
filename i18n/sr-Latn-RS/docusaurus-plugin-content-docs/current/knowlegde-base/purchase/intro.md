---
title: Nabavka FAQ
sidebar_position: 1
---

<details>

  <summary>1. Zašto je polje <b>Opis</b> obavezno za artikle dobavljača, dok za kupca nije?</summary>
  
Kupcu je važno da zna svoju šifru artikla, dok opis nije presudan jer se u štampi koristi upravo ta šifra. S druge strane, za dobavljača opis može sadržati tehnički važne informacije, posebno ako se podaci uvoze iz drugih sistema.  

</details>


<details>

  <summary>2. Čemu služi <b>Vrsta platnog razreda</b> u stavkama cenovnika?</summary>
  
Vrsta platnog razreda uneta u stavku cenovnika automatski se predlaže u dokumentima. U suprotnom, korisnik mora ručno odabrati koju vrstu razreda želi da primeni. Za isti artikal moguće je definisati više razreda popusta.


</details>


<details>

  <summary>3. Da li postoji kontrola koja sprečava dvostruki unos u skladište putem otpremnice i računa?</summary>
  
Da. Ako je račun povezan sa otpremnicom koja je već proknjižena (ulaz ili izlaz iz skladišta), nije moguće ponovo izvršiti skladišno knjiženje putem računa, osim ako u vrsti dokumenta računa nije aktivirana opcija Odvoji. U tom slučaju, moguće je knjižiti i otpremnicu i račun.

</details>


<details>

  <summary>4. Kako mogu sačuvati istoriju prethodnih cena kada ažuriram cenovnik? </summary>
  
Potrebno je prethodno napraviti duplikat dokumenta cenovnika pre ažuriranja cena, kako bi se sačuvala istorija.  

</details>

<details>

  <summary>5. Koji su uslovi za korišćenje opcije <b>Masovna izmena</b> u sažecima računa za nabavku? </summary>
  
Uslovi su sledeći:         
 1. Cena ne sme sadržati PDV;     
 2. Artikli ne smeju imati popuste;
 3. Artikli moraju imati stvarnu količinu.  

</details>


<details>

  <summary>6. Kako mogu sprečiti izmenu količine artikala u dokumentima koji su već uneti u skladište? </summary>
  
Potrebno je otvoriti Početne parametre skladišta za tekuću godinu i deaktivirati opciju **Izmena količine** u odeljku *Izmena skladišne evidencije iz dokumenata*. Time se onemogućava izmena količine u stavkama dokumenata koji su već evidentirani u skladištu.  

</details>


<details>

  <summary>7. Račun je označen kao Unet iako nije izvršeno skladišno knjiženje, a opciju Unet nije moguće deaktivirati. </summary>
  
Ako je račun kreiran na osnovu otpremnice koja je već uneta u skladište, tada je aktivan opšti parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji onemogućava izmenu statusa Unet i na nivou računa.       

</details>