/*
author:			Henrik Joreteg	
name: 		    magicLabels.clean.js
version: 	    0.6.1
dependencies:	jQuery (only tested on 1.3.2, but should work on 1.2.6 as well)
usage:
$(function(){
	$('_any_jquery_form_selector_').magicLabels();
});
*/
(function($) {
	$.fn.magicLabels = function(settings){
		var formSelector = this.selector;
		var textSelector = formSelector + " input:text:visible, " + formSelector + " textarea:visible";
		var labelText = 0;
		
		$(textSelector).each(function(){
			var oField = $(this);
			var labelText = 0;
			
			labelText = getLabelValue(oField);
			
			if (!isModified(oField)) {
				oField.val(labelText);
			}
		});
		
		$(textSelector).blur(function (){	
			var oField = $(this);
					
			if (isModified(oField)){
				return false;
			}
			else {
				oField.val(getLabelValue(oField));
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
		
		return this;
	};
})(jQuery);