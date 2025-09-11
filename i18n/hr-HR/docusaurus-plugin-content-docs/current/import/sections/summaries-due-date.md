Predstavlja sažetak dospijeća dokumenta, za svaki *način* i *uvjete* plaćanja. 
**Broj**: progresivni broj retka.

**Plaćanje**: predstavlja alfanumerički kod *Tip plaćanja* preuzet iz *Zaglavlje > kartica Plaćanja*.  

**Iznos**: Importo della scadenza calcolato. Può essere forzato manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*. (Scattano in automatico dei controlli e avvisi sulla quadratura tra i valori delle scadenze e il totale fattura)

**Datum dospijeća**: Data della scadenza calcolata. Può essere forzata manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*.

**Troškovi naplate**: Campo in cui riportate le spese di incasso calcolate.

**PDV**: da applicare alle spese di incasso (può essere impostata anche manualmente)

**Predložak plaćanja**: è possibile inserire direttamente in fattura una causale contabile che da luogo ad una scrittura automatica di incasso / pagamento. NB prestare attenzione al template della causale perchè utilizzerà i conti presenti anche senza sottoconto, motivo per il quale è presente il campo seguente.

**Konto kupca / dobavljača** conto che usa per incassare/pagare (cassa o banca ad esempio) la scadenza andando a sovrascrivere il conto presente nella causale contabile di pagamento (o incasso)

**Br. potvrde**: Un eventuale numero della ricevuta per i soldi ricevuti
	
**Jed.**: attiva la contabilizzazione della chiusura scadenze nella scrittura automatizzata

**Tip popusta**: Tipo di sconto finanziario

**Vrijednost popusta**: Valore dello sconto finanziario su incasso

**Detalji izjava o namjeri**: Radi se o upućivanju na izjavu o namjeri. Na troškove naplate može se primijeniti PDV oslobođen temeljem izjave o namjeri (tzv. korištenje prava na oslobođenje od PDV-a prema izvozniku), stoga je potrebno omogućiti da se i ovdje poveže odgovarajuća izjava o namjeri (kao i kod stavaka artikala i stavaka troškova).

**ULAZNI RAČUNI:**

**Znak**: solo le scadenze che hanno questo flag vengono poi gestite in pagamento con causale e conto impostato
	
**Modeli poziva na broj plaćanja**: Model za kreiranje poziva na broj plaćanja. U nekim državama svaka dospjelost na računu ima kod koji dodjeljuje izdavatelj računa; taj je kod strukturiran prema određenim modelima (tablica MB_PaymentReferenceModels), kako bi se mogao generirati pomoću algoritma.

**Šifre modela plaćanja**: Ovo je šifra (strukturirana prema prethodno navedenom modelu) koja se prenosi u otvorenu stavku, a zatim i u naloge za plaćanje koji se šalju banci, kako bi banka mogla obavijestiti primatelja koja je dospjelost podmirena (čime se omogućuje automatizirani uvoz bankovnih izvoda i zatvaranje otvorenih stavaka). Odatle se šifra prenosi u otvorenu stavku i u SEPA datoteku.

**Datum za primjenu popusta pri plaćanju predujma** Ovo je polje predviđeno u strukturi računa za SDI, a odnosi se na krajnji datum do kojeg se može primijeniti financijski popust.

