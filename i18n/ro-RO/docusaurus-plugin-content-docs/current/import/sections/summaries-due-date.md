Reprezintă rezumatul scadențelor documentului, pentru fiecare *tip* și *soluție* de plată.  
- **Număr**: valoarea progresivă a liniei.  
- **Plată**: reprezintă codul alfanumeric al *Tipului de plată* preluat din *Antetul documentului > tab Plăți*.  
- **Valoare**: reprezintă valoarea scadenței calculate. Poate fi forțată manual, caz în care se activează automat următoarea opțiune *Modificare manuală*. (Se activează automat controale și alerte referitoare la concordanța între valorile scadențelor și totalul facturii)  
- **Dată scadență**: data termenului calculată. Poate fi forțată manual, caz în care se activează automat următoarea opțiune *Modificare manuală*.  
- **Cheltuieli de încasare**: câmp în care sunt raportate cheltuielile de încasare calculate.  
- **TVA**: de aplicat asupra cheltuielilor de încasare (poate fi setată și manual)  
- **Șablon plată**: se poate insera direct în factură o cauză contabilă pentru a genera o înregistrare automată de încasare/plată. Important: acordați atenție șablonului, deoarece va utiliza conturile sintetice prezente chiar și fără analitic, motiv pentru care este prezent câmpul următor.  
- **Cont sintetic/analitic client/furnizor**: contul utilizat pentru încasări/plăți (casă sau bancă de exemplu) și care va suprascrie contul existent în șablonul contabil.  
- **N. chitanță**: numărul chitanței pentru banii încasați.    
- **Singur**: opțiunea activează contabilizarea închiderii scadențelor în înregistrarea automată.   
- **Tip discount**: tipul de discount financiar.  
- **Valoare discount**: valoarea discountului financiar la încasare.  
- **Detaliu declarații**: este referința la declarația de intenție. TVA-ul aplicat cheltuielilor de încasare ar putea fi întotdeauna un TVA plafon, astfel încât este necesar să se poată introduce și aici declarația de intenție asociată (ca în cazul liniilor articolului și liniilor de cheltuieli).  

#### Facturi de achiziție  
- **Semn**: doar scadențele care au acest flag sunt gestionate ulterior în plată cu șablonul și contul setat.  
- **Model referință plată**: model pentru crearea codului plății. În unele localizări externe, fiecare scadență din factură prevede un cod atribuit de către cel care emite factura: acest cod este structurat conform unor modele specifice (tabel MB_PaymentReferenceModels), astfel încât să poată fi construit codul cu un algoritm.  
- **Cod model plată**: acesta este codul (structurat conform modelului anterior) care trebuie reportat în partidă și, prin urmare, în plățile care sunt trimise băncii, astfel încât aceasta să comunice beneficiarului care este termenul care a fost plătit (și astfel să automatizeze importul din mișcările bancare cu închiderea părții). De aici este completat în partidă și în fișierul Sepa.  
- **Data limită pentru plata anticipată**: acesta este un câmp prevăzut în formatul facturilor Sdi, data limită pentru a putea aplica discountul financiar.