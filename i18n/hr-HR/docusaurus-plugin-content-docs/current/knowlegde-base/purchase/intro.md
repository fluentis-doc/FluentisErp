---
title: Nabava KB
sidebar_position: 1
---

<details>

  <summary>1. Zašto je polje <b>Opis</b> obavezno za artikle dobavljača, dok za kupca nije?</summary>
  
Kupcu je važno znati svoj šifru artikla, dok opis nije presudan jer se u ispisu koristi upravo ta šifra. S druge strane, za dobavljača opis može sadržavati tehnički važne informacije, posebno ako se podaci uvoze iz drugih sustava.  

</details>


<details>

  <summary>2. Čemu služi <b>Tip platnog razreda</b> u stavkama cjenika?</summary>
  
Tip platnog razreda unijeta u stavku cjenika automatski se predlaže u dokumentima. U suprotnom, korisnik mora ručno odabrati koju vrstu razreda želi primijeniti. Za isti artikl moguće je definirati više razreda popusta.


</details>


<details>

  <summary>3. Postoji li kontrola koja sprječava dvostruki unos u skladište putem otpremnice i računa?</summary>
  
Da. Ako je račun povezan s otpremnicom koja je već knjižena (unos ili iznos iz skladišta), nije moguće ponovno obaviti skladišno knjiženje putem računa, osim ako u vrsti dokumenta računa nije aktivirana opcija Odvoji. U tom slučaju, moguće je knjižiti i otpremnicu i račun.

</details>


<details>

  <summary>4. Kako mogu sačuvati povijest prethodnih cijena kad ažuriram cjenik? </summary>
  
Potrebno je prethodno napraviti duplikat dokumenta cjenika prije ažuriranja cijena, kako bi se sačuvala povijest.  

</details>


<details>

  <summary>5. Koji su uvjeti za korištenje opcije <b>Masovna izmjena</b> u sažecima računa za nabavu? </summary>
  
Uvjeti su sljedeći:         
 1. Cijena ne smije sadržavati PDV;     
 2. Artikli ne smiju imati popuste;
 3. Artikli moraju imati stvarnu količinu.  

</details>


<details>

  <summary>6. Kako mogu spriječiti izmjenu količine artikala u dokumentima koji su već uneseni u skladište? </summary>
  
Potrebno je otvoriti Početne parametre skladišta za tekuću godinu i deaktivirati opciju  **Izmjena količine** u dijelu *Izmjena skladišne evidencije iz dokumenata*. Time se onemogućuje izmjena količine u stavkama dokumenata koji su već evidentirani u skladištu.  

</details>


<details>

  <summary>7. Račun je označen kao Unesen iako nije izvršeno skladišno knjiženje, a opciju Unesen nije moguće deaktivirati. </summary>
  
Ako je račun kreiran na temelju otpremnice koja je već unesena u skladište, tada je aktivan opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT  koji onemogućuje izmjenu statusa Unesen i na razini računa.       

</details>