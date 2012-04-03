/**
 * @author Predrag Krstic
 * 
 * @example $('.tabs').tabs();
 * 
 */
;(function($){
    $.fn.tabs = function(o) {		
		return this.each(function() {
	    	var self = this,
	    		options = {
					tabs: $(self).data('tabs') || 'a',
					selectedClass: $(self).data('selectedclass') || 'tab_selected',
					tabContent: $(self).data('content') || '.tab_content',
					onChange: $(self).data('onchange') || false,
					zSwitch: $(self).data('zswitch') || false
				};
	    	
			$(options.tabs, self).click(function(e){
				
				var parent = $(this).parent();
				$(parent).siblings().removeClass(options.selectedClass);
				$(parent).addClass(options.selectedClass);
				
				var id = $(this).attr('href');
				
				if(typeof options.onChange === 'string') { 
					eval(options.onChange+'(id)'); 
				}
				
				if (options.zSwitch) {
					$(options.tabContent).css({zIndex:'0'});
					$(id).css({zIndex:'999'});
				}
				else {
					$(options.tabs, self).each(function(){ var id = $(this).attr('href'); $(id).hide(); });
					$(id).show();
				}
				
				return false;
			});
			
			$('.'+options.selectedClass+' a', self).click();
        });
    };
})(jQuery);