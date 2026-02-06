import express from "express";
import database from "better-sqlite3"

const app = express();

const db = new database("wadsongs.db")

app.use(express.json());

app.get('/', (req,res)=> {
    res.send('Hello World from Express!');
});

app.get("/artist/:artistName", (req, res) => {
      const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist = ?");
      const results = stmt.all(req.params.artistName)
      res.json(results)});

app.get("/title/:titleName", (req, res) => {
      const stmt = db.prepare("SELECT * FROM wadsongs WHERE title = ?");
      const results = stmt.all(req.params.titleName)
      res.json(results)});

app.get("/song/:artistName/:titleName", (req, res) => {
      const stmt = db.prepare('SELECT *\
                              FROM wadsongs\
                              WHERE artist = ? AND title = ?');
      const results = stmt.all(req.params.artistName, req.params.titleName)
      res.json(results)});

app.get("/songid/:id", (req, res) => {
      const stmt = db.prepare("SELECT * FROM wadsongs WHERE id = ?");
      const results = stmt.get(req.params.id)
      res.json(results)});

app.post("/addSong", (req, res) => {
    try {
        const stmt = db.prepare("INSERT INTO wadsongs(title, artist, year, downloads, price, quantity) VALUES(?,?,?,?,?,?)");
        const info = stmt.run(req.body.title, req.body.artist, req.body.year, req.body.downloads, req.body.price, req.body.quantity);
        res.json({id: info.lastInsertRowid});
    } catch(error) {
        console.log(error); 
        res.status(500).json({ error: error });
    }
});

app.put("/updateSong", (req, res) =>{
    try {
        const stmt = db.prepare("UPDATE wadsongs SET price = ?,quantity = ? WHERE id = ?");
        const info = stmt.run(req.body.price, req.body.quantity, req.body.id);
        if(info.changes == 1) {
            res.status(200).json({success: true});
        } else {
            res.status(404).json({error: "Couldn't update course'."});
        }
    } catch(error) {
        res.status(500).json({error: error});
    }
});

// app.post("/addsong/:id/:title/:arist/:year/:downloads/:price/:quantity", (req, res) => {
//       const stmt = db.prepare("INSERT * FROM wadsongs WHERE id = ?");
//       const results = stmt.get(req.params.id)
//       res.json(results)});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});