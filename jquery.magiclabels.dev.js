/*
Copyright (c) 2009, Henrik Joreteg
All rights reserved.

jQuery Magic Labels v0.6.2

Released under the BSD license, read it here:
http://projects.joreteg.com/licenses/BSD.html
*/

console.log("imported");

(function($) {
	$.fn.magicLabels = function(settings){
		var formSelector = this.selector;
		var textSelector = formSelector + " input:text:visible, " + formSelector + " textarea:visible";
		var labelText = 0;
		
				
		console.log(formSelector);
		
		//find and set values of inputs
		$(textSelector).each(function(){
			var oField = $(this);
			var labelText = 0;
			
			labelText = getLabelValue(oField);
			
			if (!isModified(oField)) {
				oField.val(labelText);
			}
			
			console.log(labelText);
		});
			
		//register blur events
		$(textSelector).blur(function (){	
			var oField = $(this);
					
			if (isModified(oField)){
				return false;
			}
			else {
				oField.val(getLabelValue(oField));
			}
		});
		
		//register focus events
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
		
		$(formSelector).submit(function () {	
			var formObject = $(this);
			
			$(textSelector).each(function(){
				var oField = $(this);
				// if it's not modified delete values
				if(!isModified(oField)) {
					oField.val('');
				}
				
			});
			return true;		
		});
	
		// get's label value for field object
		function getLabelValue(oField){
			var id = oField.attr('id');
			var oLabel = $(formSelector + " label[for = " + id + "]");
			var content = oLabel.html();
			
			oLabel.hide();
			return content;
		}

		// determines if a field is blank or has been modified
		function isModified(oField){
			var value = oField.attr("value");
			
			// see if field's value is blank
			if (value == '' || value == getLabelValue(oField)) {
				// is not modified
				oField.addClass("labelText");
				return false;
			}
			else {
				// is modified
				oField.removeClass("labelText");
				return true;
			}		
		}
		
		return this;
	};
})(jQuery);