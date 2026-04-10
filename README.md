# CalcolaCiccia

App Angular che calcola percentuali a partire da un numero inserito.

## Funzionalita

- Input di un numero
- Pulsante Calcola: mostra il 95% e il 105%
- Pulsante Altri: mostra anche 107%, 90%, 80%, 50%, 30%, 101,5% e 98,5%

## Avvio

1. Installa le dipendenze:

	npm install

2. Avvia il server di sviluppo:

	npm start

3. Apri il browser su:

	http://localhost:4200

## Deploy su GitHub Pages

Il repository e gia configurato per il deploy automatico con GitHub Actions.

1. Fai push del branch main su GitHub.
2. In GitHub vai su Settings > Pages.
3. In Source seleziona GitHub Actions.
4. Ogni nuovo push su main pubblichera il sito.

URL finale:

https://maxnaitor.github.io/CalcolaCiccia/

## Se vedi il README invece dell'app

1. Verifica in Settings > Pages che Source sia GitHub Actions.
2. Vai nella tab Actions e controlla il workflow Deploy to GitHub Pages.
3. Se era fallito, rifai un push su main oppure avvialo con Run workflow.
4. Aspetta 1-2 minuti e ricarica la pagina con hard refresh.