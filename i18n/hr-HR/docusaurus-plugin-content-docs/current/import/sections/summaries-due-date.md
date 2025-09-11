Predstavlja sažetak dospijeća dokumenta, za svaki *način* i *uvjete* plaćanja. 
**Broj**: Progresivni broj retka.

**Plaćanje**: Predstavlja alfanumerički kod *Tipa plaćanja* preuzet iz *Zaglavlje > kartica Plaćanja*.  

**Iznos**: Izračunati iznos dospijeća, može se ručno urediti, pri čemu se automatski aktivira oznaka *Ručno uređivanje* (automatski se pokreću provjere i obavijesti o usklađenosti između vrijednosti roka dospijeća i ukupnog iznosa računa).

**Datum dospijeća**: Izračunati datum dospijeća, može se ručno urediti, pri čemu se automatski aktivira oznaka *Ručno uređivanje*.

**Troškovi naplate**: Polje u kojem se navode izračunati troškove naplate.

**PDV**: Primijena na troškove naplate (može se postaviti i ručno).

**Predložak plaćanja**: Moguće je izravno unijeti u fakturu računovodstveni predložak kojim će se automatski knjižiti naplate/plaćanja. Napomena: obratite pažnju na predložak jer će koristiti konta prisutna čak i bez podkonta, zbog čega je i prisutno sljedeće polje.

**Konto kupca / dobavljača**: Konto koje se koristi za naplatu/plaćanje (npr. blagajna ili banka) dospijeća, zamjenjujući konto prisutan u računovodstvenom predlošku plaćanja (ili naplate)

**Br. potvrde**: Eventualni broj potvrde za primljena sredstva.
	
**Jed.**: Aktivira knjiženje zatvaranja dospjelog plaćanja u automatskom knjiženju.

**Tip popusta**: Tip popusta.

**Vrijednost popusta**: Vrijednost popusta na iznos po naplati.

**Detalji izjava o namjeri**: Radi se o upućivanju na izjavu o namjeri. Na troškove naplate može se primijeniti PDV oslobođen temeljem izjave o namjeri (tzv. korištenje prava na oslobođenje od PDV-a prema izvozniku), stoga je potrebno omogućiti da se i ovdje poveže odgovarajuća izjava o namjeri (kao i kod stavaka artikala i stavaka troškova).

**ULAZNI RAČUNI:**

**Znak**: samo se dospijeća koja imaju ovu oznaku obrađuju u plaćanju s posrapredloškom i postavljenim kontom (solo le scadenze che hanno questo flag vengono poi gestite in pagamento con causale e conto impostato).
	
**Modeli poziva na broj plaćanja**: Model za kreiranje poziva na broj plaćanja. U nekim državama svaka dospjelost na računu ima kod koji dodjeljuje izdavatelj računa; taj je kod strukturiran prema određenim modelima (tablica MB_PaymentReferenceModels), kako bi se mogao generirati pomoću algoritma.

**Šifre modela plaćanja**: Ovo je šifra (strukturirana prema prethodno navedenom modelu) koja se prenosi u otvorenu stavku, a zatim i u naloge za plaćanje koji se šalju banci, kako bi banka mogla obavijestiti primatelja koja je dospjelost podmirena (čime se omogućuje automatizirani uvoz bankovnih izvoda i zatvaranje otvorenih stavaka). Odatle se šifra prenosi u otvorenu stavku i u SEPA datoteku.

**Datum za primjenu popusta pri plaćanju predujma** Ovo je polje predviđeno u strukturi računa za SDI, a odnosi se na krajnji datum do kojeg se može primijeniti financijski popust.

