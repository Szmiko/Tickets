var passengers = [  { name: "Anka Płutnicka", paid: true, ticket: "turystyczna" },
					{ name: "Dr Zlatan", paid: true, ticket: "premium" },
					{ name: "Juliusz Cezar", paid: false, ticket: "pierwsza klasa" },
					{ name: "Kleo Patra", paid: true, ticket: "turystyczna" } ];



function createDinnerOrder(passenger) {
	var orderFunction;

	if (passenger.ticket === "pierwsza klasa") {
		orderFunction = function() {
			alert("Podać korczaka, czy makaron?");
		};
	} else if (passenger.ticket === "turystyczna") {
		orderFunction = function() {
			alert("Podać orzeszki, czy precelki?")
		};
	} else {
		orderFunction = function() {
			alert("Podać przekąski, czy talerz serów?")
		};
	}
	return orderFunction;
};

function createDrinkOrder(passenger) {
	var orderFunction;

	if (passenger.ticket === "pierwsza klasa") {
		orderFunction = function() {
			alert("Podać koktajl, czy wino?");
		};
	} else if (passenger.ticket === "pierwsza klasa")
		orderFunction = function() {
			alert("Podać colę, czy wodę?");
		};
	} else {
		orderFunction = function() {
			alert("Podać wódkę, czy wino?");
		};
	}
	return orderFunction;
};

function serveCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	var getDinnerOrderFunction = createDinnerOrder(passenger);

	getDrinkOrderFunction();
	getDinnerOrderFunction();
};

function servePassengers(passenger) {
	for (var i = 0; i < passengers.length; i++) {
		serveCustomer(passenger[i]);
	}
};

servePassengers(passengers);