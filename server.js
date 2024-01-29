const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Remplacez 'public' par le nom de votre dossier contenant les fichiers front-end

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Assurez-vous que le chemin correspond à votre structure de fichiers
});

// Une route de test qui renvoie des données JSON
app.get('/api/data', (req, res) => {
    res.json({ message: "Données récupérées du serveur", data: ["Element 1", "Element 2", "Element 3"] });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
