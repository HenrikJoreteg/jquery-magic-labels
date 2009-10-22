/*
name: 		    magicLabels.js
version: 	    0.6
dependencies:	jQuery (only tested on 1.3.2, but should work on 1.2.6 as well)

how to use: 	simply add the script reference: 
				
				
				<script src="jquery.magiclabels.js"></script>
				
				then call magicLabels function that now exists in jquery

what it does:	1. Hides <label> text from visible <input type="text"> and <textarea> elements as 
				   value attributes.
				
				2. Clears label values on focus event and resets unmodified values on blur event.
				
				3. Removes label text on form submit.
				
				4. Adds and removes "labelText" class to elements as necessary. This lets you style
				   the label text differently whether the content is modified or not. 
				   
				   sample css:
				   		input.labelText, textarea.labelText { color:#AAA; }
				
				5. With JS disabled, form remains accessible.
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
				oField = $(this);
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
			
			//see if field's value is blank
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