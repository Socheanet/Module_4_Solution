(function () {
	var names=[
	"Alext",
	"Albert",
	"Jasmine",
	"John",
	"Sophea",
	"Sara"
];
for (var i = 0; i< names.length; i++){

	var firstletter =names[i].charAt(0).toLowerCase();

	if (firstletter === 'j'){

		goodbye.print(names[i]);
	}

	else {

	
		hello.print(names[i]);
	}
}
})();