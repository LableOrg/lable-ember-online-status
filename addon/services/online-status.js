import Ember from 'ember';

export default Ember.Service.extend({
  
  isOnline: true,
  allowPing: true,
  
  setInternetStatusListener: Ember.on('init', function() {
    var _this = this;
    
    // True if navigator.onLine is supported.
    var support = true;
    
    // Check if browser is Mozilla Firefox. If so, and version is lower than 41, support is not available.
    if (navigator.userAgent.indexOf('Firefox') !== -1) {
      var ffVersion = parseInt(navigator.userAgent.substr(navigator.userAgent.indexOf('Firefox')).split(' ')[0].split('/')[1]);
      if (ffVersion < 41) {
        support = false;
      }
    }
    
    if (support) {
      // navigator.onLine is supported, so use it.
      var onStatusChange = function(){ 
        Ember.run.debounce(_this, _this.onStatusChange, 100); 
      };

      $(window).bind('online', onStatusChange);
      $(window).bind('offline', onStatusChange);

      this.onStatusChange();
    } else if (this.get('allowPing')) {
      // Alternatively, send a favicon request periodically.
      var intVal = window.setInterval(function() {
        if (!_this.get('allowPing')) {
          clearInterval(intVal);
          return;
        }
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 0) {
              _this.set('isOnline', false);
            } else {
              _this.set('isOnline', true);
            }
          }
        };
        xhr.open("GET", 'ajaxtest?rand='+new Date().getTime());
        xhr.send();
      }, 5000);
    }
  }),
  
  onStatusChange: function() {
    this.set('isOnline', window.navigator.onLine);
  }
  
});
