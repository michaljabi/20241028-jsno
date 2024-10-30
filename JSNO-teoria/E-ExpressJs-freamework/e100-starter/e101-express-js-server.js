/**
 * Serwer w Express.js jest bardzo poukładany
 *
 * Przede wszystkim determinujemy na jaką metodę: GET, POST, PUT, PATCH, DELETE etc... odpowiadamy
 * i na jakim konkretnie adresie
 *
 * Znów dostajemy 2 obiekty jako request oraz response,
 * jednak posiadamy w nich garść pomocnych pól — przygotowanych dla nas do obsługi zapytania
 * na konkretnym endpoint'cie.
 *
 * */

const express = require("express");
const app = express();
const PORT = 3034;

app.use("/cars", (req, res, next) => {
  console.log(req.headers);
  const auth = req.headers["authorization"];
  if (auth === "Barer 7t1e761t872ye98u120e=-1827e987129e-1927e87") {
    next();
  } else {
    next(new Error("Not allowed to see resource..."));
  }
});

app.get("/", (req, res) => {
  res.send("Witaj na mojej stroni");
});

app.get("/cars", (req, res) => {
  res.json([]);
});

app.get("/cars/:id", (req, res) => {
  const orderBy = req.query.orderBy;
  console.log(req.query);
  res.json({ id: req.params.id, message: "found", orderBy: orderBy });
});

app.get("/date", (req, res) => {
  res.send("Dzisiejsza data to:" + new Date());
});

app.all("**", (req, res) => {
  res.status(404).json({
    message: "url " + req.url + " not found",
    url: req.url,
    method: req.method,
  });
});

app.listen(PORT, () => {
  console.log("Serwer nasłuchuje na porcie:", PORT);
});

// Czas przetestować jak to działa:
/*
		Zgodnie z tym, co widzisz powyżej, serwer obsługuje adresy:
		http://localhost:3034/
		http://localhost:3034/cars
		http://localhost:3034/date

		Każdy inny adres uznawany jest za niepoprawny np.
		http://localhost:3034/blah

		I pokaże:
		nie mam strony o adresie: /blah
*/
