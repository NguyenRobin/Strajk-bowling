## User story 1 - Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.

- Användaren ska tydligt se datumet. ✅
- Användaren ska kunna välja ett specifikt datum. ✅
- Användaren ska kunna välja vilken tid. ✅
- Användaren ska kunna ange antalet spelare. ✅
- Användaren ska kunna välja antalet banor. ✅
- Användaren ska se datum, tid, spelare och banor.

## User story 2 - Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.

- Användaren ska ange skostorlek för varje spelare. ✅
- Användaren ska kunna ändra skostorlek. ✅
- Användaren ska tydligt se en knapp för att kunna lägga till en skostorlek. ✅
- När användaren klickar på knappen med en + symbol, ska funktionen "addShoe" anropas. ✅
- Användaren ska tydligt se en titel med texten 'Shoes'. ✅
- Titeln med texten "Shoes" ska ha css classen 'shoes_heading'. ✅

## User story 3 - Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.

- Användaren ska tydligt se en knapp, som indikerar möjligheten att radera skostorlek. ✅
- Knappen för att ta bort ett fält ska innehålla ett minus tecken. ✅
- När "delete" knappen triggas av ett click event, ska funktionen "removeShoe" köras. ✅

## User story 4 - Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

- Användaren ska tydligt se en knapp, som hänvisar till att slutföra sin bokning. ✅

- Användaren ska ha fyllt i giltigt datum. ✅
- Användaren ska ha fyllt i giltig tid. ✅
- Användaren ska ha fyllt i giltigt antal spelare. ✅
- Användaren ska ha fyllt i giltigt antal banor. ✅
- Användaren ska ha fyllt i giltigt antal skostorlekar ✅

- När användaren klickar på knappen, för att slutföra beställning. Navigeras användaren vidare till url: /confirmation och komponenten <Confirmation/> ska renderas. ✅

- När användaren navigerats till /confirmation, ska det tydligt visas en orderbekräftelse. ✅

- orderbekräftelsen ska tydligt visa tid och datum. ✅
- orderbekräftelsen ska tydligt visa antalet spelare ✅
- orderbekräftelsen ska tydligt visa antalet banor ✅
- orderbekräftelsen ska tydligt visa bokningsnummer ✅
- orderbekräftelsen ska tydligt visa totalbeloppet. ✅

## User story 5 - Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.

- Användaren ska tydligt se en navbar.
- Användaren ska kunna öppna och stänga modal/popup-fönster genom att klicka på navbaren.
- Modal/popup-fönstret ska innehålla två länkar. Booking och Confirmation.
- När användaren klickar på Booking ska användaren navigeras till url:en / och <Booking /> ska renderas.
- När användaren klickar på Confirmation ska användaren navigeras till url:en /confirmation och <Confirmation /> ska renderas.
