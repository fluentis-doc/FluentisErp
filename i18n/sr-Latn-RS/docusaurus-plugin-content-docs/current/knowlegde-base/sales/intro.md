---
title: Prodaja KB
sidebar_position: 1
---


<details>

  <summary>1. Kako osigurati da se cijene iz cjenika za komponente iz strukture artikla prenesu u narudžbu nakon korištenja opcije <b>Raspakiraj prvu razinu strukture</b>?</summary>
  
Potrebno je uključiti opciju „Predloži komercijalne podatke za ručno raspakiranu osnovnu strukturu“, koja se nalazi u parametrima narudžbi kupaca. Time će se komercijalni podaci (uključujući i cijene iz cjenika) prenijeti na stavke.  

</details>

<details>

  <summary>2. Kako funkcionira <b>datum valjanosti</b> u kartici Cjenici unutar šifrarnika kupca?</summary>
  
Datum valjanosti uneseno u mreži taba Cjenici (Listini) u kartonu kupca služi za označavanje koje vrste cjenika su valjane od tog datuma za tog kupca. Preuzimanje cijena u dokumentima mora znati u kojim cjenicima tražiti artikal.    
Kao prvi uvjet, cjenik koji se treba unijeti u dokumente mora biti valjan na ovaj datum.    
Kao drugi uvjet za odabir vrste cjenika koji će se unijeti u dokumente, odabrani cjenik mora imati datum početka valjanosti strogo manji od datuma dokumenta.    
Na taj način moguće je kreirati sve cjenike koje želimo i primijeniti ih na kupca samo od određenog datuma.
Tehnički, svi cjenici koji se kreiraju, da bi se koristili za pretraživanje cijena, moraju ispunjavati sljedeće uvjete:             
1. Datum početka valjanosti mora biti veći ili jednak datumu valjanosti definiranom u kartici kupca;         
2. Datum početka valjanosti mora biti manji ili jednak datumu dokumenta;        
3. Datum završetka valjanosti mora biti veći ili jednak datumu dokumenta ili može biti neodređen (prazan)                
Od svih cjenika koji zadovoljavaju ove uvjete, sustav odabire onaj čiji je raspon valjanosti najbliži datumu dokumenta.  

</details>

<details>

  <summary>3. Imam više <b>popusta</b> za isti artikl unutar cjenika, koji ima **prioritet**? </summary>
  
Prioritet koji se uzima u obzir je onaj naveden u vrsti popusta. Podsjećamo da je tip popusta važan za upravljanje prioritetom i prirodom popusta (Oporezivo ili Kaskadno).

</details>

<details>

  <summary>4. Mogu li se duplicirati samo određeni artikli iz cjenika, a ne cijeli cjenik? </summary>
  
Da, moguće je. Pomoću funkcije „Dupliciraj i održavanje prodajnih cjenika“ možete odabrati samo one artikle koje želite duplicirati.
Rezultat će biti novi cjenik koji sadrži isključivo odabrane artikle.
Za sve ostale artikle i dalje ostaje važeći prethodni cjenik – pod uvjetom da im nije zadan datum završetka valjanosti.  

</details>


<details>

  <summary>5. Budući da fakture nemaju oznaku <b>Provjera dostupnosti</b>: kako ih možemo isključiti iz izračuna potreba? </summary>
  
U izračun potreba ulaze sljedeće fakture:  
- odmah izdane fakture (prateće fakture);
- fakture koje proizlaze iz otpremnica, ako otpremnice nisu knjižene u skladištu.  

</details>


<details>

  <summary>6. Čemu služi <b>Vrsta razreda</b> u stavkama cjenika?</summary>
  
Vrsta razreda unesena u stavku cjenika automatski se predlaže u dokumentima.
Ako nije zadana, korisnik mora ručno odabrati vrstu razreda koju želi primijeniti na stavku.  

</details>


<details>

  <summary>7. Mogu li pomoću BizLink modula izvesti fakture prodaje u drugi program, npr. za računovođu? </summary>
  
Da, moguće je kreirati poseban parser za izvoz podataka u formatu koji zahtijeva drugi poslovni sustav.
Alternativno, moguće je koristiti XML datoteku elektroničke fakture, ako drugi program podržava njezin uvoz.
Fluentis podržava kreiranje faktura putem uvoza XML-a iz elektroničke fakturacije 

</details>


<details>

  <summary>8. Kako automatski obračunavati <b>troškove naplate</b> a RIBA-e, prema broju rata? </summary>
  
Ako trošak ima uključen parametar „Trošak naplate“, i ako način plaćanja ima vrstu učinka = 0 (RIBA), tada će se za svaku ratu automatski dodati trošak naplate.
Dakle, više rata znači više pojedinačnih troškova naplate, koje sustav automatski pridodaje.   

</details>


<details>

  <summary>9. Koji su uvjeti za korištenje <b>barkoda</b> u dokumentima? </summary>
  
Potrebno je slijediti sljedeće korake:     
1. U parametrima prodajnog dokumenta uključiti opciju <b>Koristi barkod</b>;                            
2. U šifarniku artikla unijeti <b>Unesi barkod</b>;                    
3. U dokumentu, u stupcu <b>Barkod</b> unijeti kod iz šifarnika – ako sustav prepozna kod, automatski će popuniti odgovarajući artikl.

</details>


<details>

  <summary>10. Gdje se unos <b>Marka</b> artikla kako bi bila vidljiva u prodajnim dokumentima? </summary>
  
Marka se mora unijeti u stavke prodajnog cjenika. Samo tako unesena, prenijet će se i prikazivati u dokumentima prodaje.

</details>


<details>

  <summary>11. Može li se određenom korisniku onemogućiti pristup određenoj vrsti fakture? </summary>
  
Da, pomoću <b>Ograničenja</b>. Ona sprječavaju korisnike da kreiraju, pregledavaju ili uređuju određene vrste dokumenata.
Primjer: moguće je ograničiti pristup vrsti fakture s kodom FVITDIF.
Napomena: ograničenje je potrebno dodati i u ARM profil korisnika, u odgovarajuću tablicu.            


![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)


</details>


<details>

  <summary>12. Faktura je označena kao „Knjižena“, iako nema skladišnog prometa, a oznaku nije moguće ukloniti. </summary>
  
Ako je faktura nastala iz otpremnice koja je već knjižena, tada je aktivan opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji automatski postavlja status „Knjižena“ i onemogućuje njegovo uklanjanje.          

</details>


<details>

  <summary>13. Kako mogu prikazati Težinene u sažecima fakture? </summary>
  
Da bi se u sažecima fakture prikazivale težine, potrebno je: u Parametrima dokumenta uključiti opciju **Preračunaj prijevoz** u sažecima odabrati ispravnu jedinicu mjere, kako bi se vrijednost pravilno prikazala.        

</details>


