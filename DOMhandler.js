var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var pledgeAmount = document.getElementById('pledge');
var pledgeCalc = document.getElementById('pledge-calc');
var submitBtn = document.getElementById('submit');
var cancelBtn = document.getElementById('cancel');
var tableEmt =  document.getElementById('data');

submitBtn.addEventListener("click", function(e){
	e.preventDefault();
	if (firstName.value === "" || lastName.value === "" || email.value === "" || pledge.value === "" || pledgeCalc.value === "") {
		alert("Please fill in all fields before submit!");
	} else {
		var Donor = {};
		Donor.name = firstName.value + " " + lastName.value;
		Donor.email = email.value;
		Donor.pledge = parseFloat(pledge.value);
		Donor.calc = pledgeCalc.value;
		donorHandler.addDonor(Donor);
		displayTable();
	}
});

cancelBtn.addEventListener("click", function(e){
	e.preventDefault();
	firstName.value = "";
	lastName.value = "";
	pledgeAmount.value = "";
	pledgeCalc.value = "";
});

function displayTable() {
		var arr = donorHandler.getDonor();
		var tableRow = document.createElement("tr");
		var tableData1 = document.createElement("td");
		tableData1.innerHTML = arr[arr.length-1].name;
		var tableData2 = document.createElement("td");
		tableData2.innerHTML = arr[arr.length-1].email;
		var tableData3 = document.createElement("td");
		tableData3.innerHTML = arr[arr.length-1].pledge;
		var tableData4 = document.createElement("td");
		tableData4.innerHTML = arr[arr.length-1].calc;
		tableRow.appendChild(tableData1);
		tableRow.appendChild(tableData2);
		tableRow.appendChild(tableData3);
		tableRow.appendChild(tableData4);
		tableEmt.appendChild(tableRow);
}
