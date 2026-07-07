---
title: Prodaja FAQ
sidebar_position: 1
---


<details>

  <summary>1. Kako osigurati da se cene iz cenovnika za komponente iz strukture artikla prenesu u narudžbinu nakon korišćenja opcije <b>Raširi prvi nivo strukture</b>?</summary>
  
Potrebno je uključiti opciju „Predloži komercijalne podatke za ručno raširenu osnovnu strukturu“, koja se nalazi u parametrima narudžbina kupaca. Time će se komercijalni podaci (uključujući i cene iz cenovnika) preneti na stavke.  

</details>

<details>

  <summary>2. Kako funkcioniše <b>datum važenja</b> u kartici Cenovnici unutar šifarnika kupca?</summary>
  
Datum važenja unet u mrežu kartice Cenovnici (Listini) u kartonu kupca služi za označavanje koje vrste cenovnika važe od tog datuma za tog kupca. Preuzimanje cena u dokumentima mora znati u kojim cenovnicima treba tražiti artikal.    
Kao prvi uslov, cenovnik koji treba uneti u dokumente mora važiti na ovaj datum.    
Kao drugi uslov za odabir vrste cenovnika koji će se uneti u dokumente, odabrani cenovnik mora imati datum početka važenja strogo manji od datuma dokumenta.    
Na taj način moguće je kreirati sve cenovnike koje želimo i primeniti ih na kupca samo od određenog datuma.
Tehnički, svi cenovnici koji se kreiraju, da bi se koristili za pretraživanje cena, moraju ispunjavati sledeće uslove:             
1. Datum početka važenja mora biti veći ili jednak datumu važenja definisanom u kartici kupca;         
2. Datum početka važenja mora biti manji ili jednak datumu dokumenta;        
3. Datum završetka važenja mora biti veći ili jednak datumu dokumenta ili može biti neodređen (prazan)                
Od svih cenovnika koji ispunjavaju ove uslove, sistem odabira onaj čiji je period važenja najbliži datumu dokumenta.  

</details>

<details>

  <summary>3. Imam više <b>popusta</b> za isti artikal unutar cenovnika, koji ima **prioritet**? </summary>
  
Prioritet koji se uzima u obzir je onaj naveden u vrsti popusta. Podsećamo da je tip popusta važan za upravljanje prioritetom i prirodom popusta (Oporezivo ili Kaskadno).

</details>

<details>

  <summary>4. Da li se mogu duplicirati samo određeni artikli iz cenovnika, a ne ceo cenovnik? </summary>
  
Da, moguće je. Pomoću funkcije „Dupliciraj i održavanje prodajnih cenovnika“ možete odabrati samo one artikle koje želite da duplicirate.
Rezultat će biti novi cenovnik koji sadrži isključivo odabrane artikle.
Za sve ostale artikle i dalje ostaje važeći prethodni cenovnik – pod uslovom da im nije zadat datum završetka važenja.  

</details>

<details>

  <summary>5. Budući da fakture nemaju oznaku <b>Provera dostupnosti</b>: kako ih možemo isključiti iz izračunavanja potreba? </summary>
  
U izračunavanje potreba ulaze sledeće fakture:  
- odmah izdate fakture (prateće fakture);
- fakture koje proizlaze iz otpremnica, ako otpremnice nisu proknjižene u skladištu.  

</details>


<details>

  <summary>6. Čemu služi <b>Vrsta razreda</b> u stavkama cenovnika?</summary>
  
Vrsta razreda uneta u stavku cenovnika automatski se predlaže u dokumentima.
Ako nije zadata, korisnik mora ručno odabrati vrstu razreda koju želi da primeni na stavku.  

</details>


<details>

  <summary>7. Da li mogu pomoću BizLink modula izvesti prodajne fakture u drugi program, npr. za računovođu? </summary>
  
Da, moguće je kreirati poseban parser za izvoz podataka u formatu koji zahteva drugi poslovni sistem.
Alternativno, moguće je koristiti XML datoteku elektronske fakture, ako drugi program podržava njen uvoz.
Fluentis podržava kreiranje faktura putem uvoza XML-a iz elektronske fakture. 

</details>


<details>

  <summary>8. Kako automatski obračunavati <b>troškove naplate</b> za RIBA-e, prema broju rata? </summary>
  
Ako trošak ima uključen parametar „Trošak naplate“, i ako način plaćanja ima vrstu efekta = 0 (RIBA), tada će se za svaku ratu automatski dodati trošak naplate.
Dakle, više rata znači više pojedinačnih troškova naplate, koje sistem automatski dodaje.   

</details>

<details>

  <summary>9. Koji su uslovi za korišćenje <b>barkoda</b> u dokumentima? </summary>
  
Potrebno je slediti sledeće korake:     
1. U parametrima prodajnog dokumenta uključiti opciju <b>Koristi barkod</b>;                            
2. U šifarniku artikla uneti <b>Unesi barkod</b>;                    
3. U dokumentu, u koloni <b>Barkod</b> uneti kod iz šifarnika – ako sistem prepozna kod, automatski će popuniti odgovarajući artikal.

</details>


<details>

  <summary>10. Gde se unosi <b>Marka</b> artikla kako bi bila vidljiva u prodajnim dokumentima? </summary>
  
Marka se mora uneti u stavke prodajnog cenovnika. Samo tako uneta, preneće se i prikazivati u prodajnim dokumentima.

</details>


<details>

  <summary>11. Da li se određenom korisniku može onemogućiti pristup određenoj vrsti fakture? </summary>
  
Da, pomoću <b>Ograničenja</b>. Ona sprečavaju korisnike da kreiraju, pregledaju ili uređuju određene vrste dokumenata.
Primer: moguće je ograničiti pristup vrsti fakture sa kodom FVITDIF.
Napomena: ograničenje je potrebno dodati i u ARM profil korisnika, u odgovarajuću tabelu.            


![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)


</details>


<details>

  <summary>12. Faktura je označena kao „Proknjižena“, iako nema skladišnog prometa, a oznaku nije moguće ukloniti. </summary>
  
Ako je faktura nastala iz otpremnice koja je već proknjižena, tada je aktivan opšti parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji automatski postavlja status „Proknjižena“ i onemogućava njegovo uklanjanje.          

</details>


<details>

  <summary>13. Kako mogu prikazati „težine“ u sažecima fakture? </summary>
  
Da bi se u sažecima fakture prikazivale težine, potrebno je: u Parametrima dokumenta uključiti opciju **Preračunaj prevoz** i u sažecima odabrati ispravnu jedinicu mere, kako bi se vrednost pravilno prikazala.        

</details>