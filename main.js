var donorHandler = (function(donorHandler){
	var donorsCollection = [];
	donorHandler.addDonor = function(Donor){
		donorsCollection.push(Donor)
	};
	donorHandler.getDonor = function(){
		return donorsCollection;
	};
	return donorHandler;
})(donorHandler || {});