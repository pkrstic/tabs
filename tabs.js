/**
 * Tabs jQuery plugin
 * https://github.com/pkrstic/tabs
 *
 * Copyright 2012, Predrag Krstic
 * Licensed under the MIT license.
 * see LICENSE.txt
 *
 * @author Predrag Krstic
 * 
 * @verson 1.0
 * 
 */
;(function($){
    $.fn.tabs = function(options) {
    	var globalOptions = $.extend({
			tabs: 'a',
			selectedClass: 'tab_selected',
			tabContent: '.tab_content',
			onChange: function(id){},
			zSwitch: false
    	}, options);

		return this.each(function() {
	    	var self = this,
	    		o = {
					tabs: $(self).data('tabs') || globalOptions.tabs,
					selectedClass: $(self).data('selectedclass') || globalOptions.selectedClass,
					tabContent: $(self).data('tabcontent') || globalOptions.tabContent,
					onChange: $(self).data('onchange') || globalOptions.onChange,
					zSwitch: $(self).data('zswitch') || globalOptions.zSwitch
				};

	    	console.log($(self).data('zswitch'));
	    	
	    	$(o.tabs, self).click(function(e){
				
				var parent = $(this).parent(),
					id = $(this).attr('href');
				
				$(parent).siblings().removeClass(o.selectedClass);
				$(parent).addClass(o.selectedClass);
								
				if(typeof(o.onChange) == 'string') { 
					eval(o.onChange+'(id)'); 
				}
				else {
					o.onChange(id);
				}
				
				if (o.zSwitch) {
					$(o.tabContent).css('zIndex', '0');
					$(id).css('zIndex', '999');
				}
				else {
					$(o.tabs, self).each(function(){ 
						var id = $(this).attr('href'); 
						$(id).hide(); 
					});
					$(id).show();
				}
				
				return false;
			});
			
			$('.'+ o.selectedClass +' a', self).click();
        });
    };
})(jQuery);