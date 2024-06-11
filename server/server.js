const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour analyser les données JSON dans les requêtes
app.use(bodyParser.json());

// Configuration de multer pour gérer les téléchargements de fichiers
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const uploadDir = path.join(__dirname, "uploads");
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir, { recursive: true });
		}
		cb(null, uploadDir);
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage: storage });

// Route pour gérer les téléchargements d'images
app.post("/upload", upload.single("image"), (req, res) => {
	res.json({ filePath: `/uploads/${req.file.filename}` });
});

// Démarrage du serveur
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
