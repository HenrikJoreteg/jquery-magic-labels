/*
name: 		    magicLabels.js
version: 	    0.6
dependencies:	jQuery (only tested on 1.3.2, but should work on 1.2.6 as well)
*/


function initMagicLabels(formSelector) {
	
	if (!formSelector){

		formSelector = "form.magicLabels";
	}
	
	var formObject = $(formSelector);
	var textSelector = formSelector + " input:text:visible, " + formSelector + " textarea:visible";

	if (formObject.length == 0){

		return false;
	}

	$(textSelector).each(function(){
		var oField = $(this);
		var labelText = 0;
		
		
		
		labelText = getLabelValue(oField);
		
		if (!isModified(oField)) {
			oField.val(labelText);
		}
		

	});
	
	$(textSelector).focus(function () {
		var oField = $(this);	
		
		if (isModified(oField)){
			return false;
		}
		else {	
			oField.val('');
		}
		oField.removeClass("labelText");
	});

	$(textSelector).blur(function () {	
		var oField = $(this);
				
		if (isModified(oField)){
			return false;
		}
		else {
			oField.val(getLabelValue(oField));
		}
	});
	

	$(formSelector).submit(function () {	
		var formObject = $(this);
		
		$(textSelector).each(function(){
			oField = $(this);

			if(!isModified(oField)) {
				oField.val('');
			}
			
		});
		return true;		
	});
	
	function getLabelValue(oField){
		var id = oField.attr('id');
		var oLabel = $(formSelector + " label[for = " + id + "]");
		var content = oLabel.html();
		
		oLabel.hide();
		return content;
	}
	
	function isModified(oField){
		var value = oField.attr("value");
		

		if (value == '' || value == getLabelValue(oField)) {

			oField.addClass("labelText");
			return false;
		}
		else {
				oField.removeClass("labelText");
			return true;
		}		
	}
}

