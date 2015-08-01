// SoundCloud widget wrapper by Jack Deadman, http://jackdeadman.co.uk/
$(function() {

  var soundCloud = (function(){

    var wrapperSelector = '.sound-cloud-widget';
    var destinationSelector = '.player';
    var triggerSelector = '.play';

    var template = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="?&auto_play=true"></iframe>';

    var $widget = $(wrapperSelector);
    var $button = $widget.find(triggerSelector);

    function _compileTemplate(template, src) {
      return template.replace('?', src);
    }

    function _closeOthers($wrapper) {
      $(wrapperSelector).each(function(){
        if ($(this) != $wrapper) {
          destroyWidget($(this));
        }
      });
    }

    function loadWidget($wrapper) {

      _closeOthers($wrapper);

      var $button = $wrapper.find(triggerSelector);
      var $destination = $wrapper.find(destinationSelector);
      var src = $wrapper.data('src');

      $wrapper.data('open', true);
      $wrapper.data('originalText', $button.html());

      $button.html('Close');
      $destination.html(_compileTemplate(template, src));
    }

    function destroyWidget($wrapper) {
      var $button = $wrapper.find(triggerSelector);

      $wrapper.data('open', false);
      $button.html($wrapper.data('originalText'));
      $wrapper.find(destinationSelector).html('');
    }

    $button.on('click', function () {
      var $wrapper = $(this).parent(wrapperSelector);
      var isOpen = !!$wrapper.data('open');


      if (isOpen)
        destroyWidget($wrapper);
      else
        loadWidget($wrapper);

      return false;
    });

    return {
      load: loadWidget,
      destroy: destroyWidget
    };

  })();

});
