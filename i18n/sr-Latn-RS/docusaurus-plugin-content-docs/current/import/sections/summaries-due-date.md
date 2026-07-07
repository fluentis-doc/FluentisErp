Predstavlja sažetak dospeća dokumenta za svaku *vrstu* i *način* plaćanja.  

- **Broj**: redni broj reda.  
- **Plaćanje**: predstavlja alfanumeričku oznaku *Vrste plaćanja* preuzetu iz *Zaglavlja dokumenta > kartica Plaćanja*.  
- **Iznos**: izračunati iznos dospeća. Može se ručno promeniti, pri čemu se automatski aktivira sledeća oznaka *Ručna izmena*. (Automatski se izvršavaju kontrole i prikazuju upozorenja o usklađenosti iznosa dospeća sa ukupnim iznosom računa.)
- **Datum dospeća**: izračunati datum dospeća. Može se ručno promeniti, pri čemu se automatski aktivira sledeća oznaka *Ručna izmena*.
- **Troškovi naplate**: polje u kojem se prikazuju izračunati troškovi naplate.
- **PDV**: PDV koji se primenjuje na troškove naplate (može se postaviti i ručno).
- **Šablon plaćanja**: omogućava direktan unos šablona u račun, čime se automatski generiše knjiženje naplate/plaćanja. Napomena: potrebno je obratiti pažnju na taj šablon jer će se koristiti uneta konta čak i bez podkonta, zbog čega je dostupno sledeće polje.
- **Konto/podkonto kupca/dobavljača**: konto koji se koristi za naplatu/plaćanje dospeća (na primer blagajna ili banka), pri čemu se njime briše konto postavljen u šablonu plaćanja (ili naplate).
- **Br. potvrde**: eventualni broj potvrde za primljeni novac.
- **Pojedinačno**: aktivira knjiženje zatvaranja dospeća u automatski generisanom knjiženju.
- **Vrsta popusta**: vrsta finansijskog popusta.
- **Vrednost popusta**: vrednost finansijskog popusta pri naplati.
- **Detalj izjava**: predstavlja referencu na izjavu o nameri. Na troškove naplate uvek se može primenjivati PDV u okviru poreskog plafona, stoga je i ovde potrebno omogućiti unos povezane izjave o nameri (kao i za redove artikala i redove troškova).

**ULAZNI RAČUNI:**

- **Predznak**: samo dospeća koja imaju aktiviranu ovu oznaku naknadno se obrađuju pri plaćanju pomoću postavljenog šablona i konta.
- **Modeli reference plaćanja**: model za generisanje oznake plaćanja. U nekim inostranim lokalizacijama svako dospeće na računu ima oznaku koju dodeljuje izdavalac računa. Ta oznaka je strukturirana prema određenim modelima (tabela `MB_PaymentReferenceModels`) kako bi se mogla generisati primenom algoritma.
- **Oznake modela plaćanja**: oznaka strukturirana prema prethodno odabranom modelu, koja se prenosi u dospeće, a zatim i u naloge za plaćanje koji se šalju banci. Na taj način banka primaocu plaćanja može preneti informaciju o tome koje je dospeće plaćeno, čime se omogućava automatizovani uvoz bankovnih transakcija i zatvaranje dospeća. Ova oznaka se prenosi u dospeće i u SEPA datoteku.
- **Krajnji datum za prevremeno plaćanje**: polje predviđeno u formatu SdI računa koje određuje krajnji datum do kojeg se može primeniti finansijski popust.