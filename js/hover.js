(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      
      $(".aerial-hoverable").hover(function(){
        $(this).find(".aerial-tooltip").show();
    }, function(){
        $(this).find(".aerial-tooltip").hide();
});
      
    }
  };

})(jQuery, Drupal, drupalSettings);

