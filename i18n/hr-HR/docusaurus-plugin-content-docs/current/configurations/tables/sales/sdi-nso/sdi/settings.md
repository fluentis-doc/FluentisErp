---
title: Tehničke postavke  
sidebar_position: 9
---

Kako bi se ispravno konfigurirala veza između poslovnog sustava Fluentis i servisa Fluentis Business Hub, potrebno je:  
1) konfigurirati u ARM-u servis Fluentis BizLink Tools Service                 
2) dostaviti naziv SQL Server instance i naziv baze podataka koja treba biti omogućena za povezivanje sa servisom Fluentis Business Hub (ako to nije učinjeno prilikom potpisivanja ugovora ili su se podaci promijenili, informacije je moguće poslati na e-mail: fatturazione.elettronica@fluentis.com
).  

**KONFIGURACIJA SERVISA FLUENTIS BIZLINK TOOLS SERVICE**            

Za pravilnu komunikaciju između Fluentisa i servisa Fluentis Business Hub potrebno je konfigurirati servis Fluentis BizLink Tool Service, koji se automatski instalira s verzijom aplikacije 538 (i novijim) te omogućuje upravljanje povezivanjem više baza podataka putem jednog BizLink korisnika.             

:::tip[N.B.]
Za pravilno funkcioniranje tehničkih postavki preporučljivo je uvijek ažurirati Fluentis instaliranjem svih zakrpa dostupnih za vašu verziju.  
:::

Postupak konfiguracije servisa Fluentis BizLink Tools Service
1) Zaustaviti rad servisa Fluentis BizLink Tool Service (ako je aktivan)  
2) U modulu ARM otvoriti izbornik Konekcije > Bizlink korisnici i kreirati korisnika kojem će se pridružiti pojedine konekcije  
3) U kartici Bizlink korisnici provjeriti da postoji novi korisnik (dodan s verzijom 538):
FlConServiceUser (Effe Elle Con Service User), s lozinkom FlConServiceUserPwd
U desnoj gridi potrebno je označiti sve konekcije prema bazama podataka za koje će servis Fluentis BizLink Tool Service biti aktivan (tj. baze za koje će elektroničko fakturiranje biti omogućeno)  
4) Ponovno pokrenuti servis Fluentis BizLink Tool Service               

Da biste provjerili je li usluga primila postavke unosa korisnika, možete pratiti datoteku dnevnika Fluentis.Bizlink.Tools.Service.Exe.txt, koja se nalazi u mapi instalacije servera Fluentis, podmapa “\Bin\Logs” (ako niste sigurni koja je mapa instalacije Fluentisa, provjerite u prozoru svojstava točke 1 “putanju izvršne datoteke” usluge). Dnevnik bi trebao sadržavati tragove za pokretanje usluge (“Starting service”) i tragove tipa INFO o povezivanju konektora (među kojima je “INFO Fluentis.BizLink.Tools.Service.FluentisBusinessHubInputConnector”, koji se odnose na elektroničko fakturiranje). Ako se pojavi samo redak za pokretanje usluge, to znači da konektori Bizlink nisu pronađeni ili da korisnik za povezivanje u Arm nije ispravno konfiguriran. Ako se pojavi trag tipa ERROR, potrebno je obraditi specifičnu grešku koja je prijavljena nakon ažuriranja Fluentisa na najnoviju dostupnu zakrpu.         

Na primjer, u slučaju da je poruka o pogrešci “Računalo mora biti pouzdano za delegiranje i trenutni korisnički račun mora biti konfiguriran za omogućavanje delegiranja”, radi se o problemu vezanom uz to kako Windows upravlja sigurnosnim certifikatima, što se može ispraviti izmjenom jednog ključa u registru:
1. Premere Windows + R
2. Upišite “regedit” i potvrditi  
3. Navigirati na: HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb
4. U mapi kliknuti desnom tipkom miša i odabrati Novo > DWORD vrijednost (32 Bit)
5. Preimenovati je u ‘ProtectionPolicy’
6. Desni klik na ‘Protection Policy’
7. Kliknuti Uredi i postaviti polje “Vrijednost podatka” na 1, te odabrati bazu heksadecimalno.  

**KOMUNICIRATI IME INSTANCI SQL I IME BAZE PODATAKA**         

Kako bi se jedinstveno identificirala baza podataka za komunikaciju sa servisom Fluentis Business Hub, potrebno je pribaviti, s poslužitelja instalacije Fluentis poslovnih sustava, naziv SQL instance i naziv baze podataka na kojoj se planira aktivirati Elektroničko fakturiranje. Te informacije mogu se dobiti izravno iz veze prikazane u SQL Server Management Studiu.  
Ili, izvršavanjem SQL naredbe “select @@servername” na aktivnoj vezi. Ova metoda je posebno potrebna ako je poslužitelj preimenovan nakon instalacije Fluentis: u tom slučaju, iako se prikazuje novo ime, SQL Server zadržava registrirano staro ime.  
Te informacije treba poslati Fluentisu putem e-maila na adresu fatturazione.elettronica@fluentis.com, inače, kada se izvrši Provjera veze sa servisom FBH u izborniku Konfiguracija Elektroničkog fakturiranja, bit će vraćena greška “Kredencijali su valjani, ali izvršenje u ovom kontekstu nije dopušteno.”