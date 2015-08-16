import Ember from 'ember';

export default Ember.Controller.extend({
  
  onInit: Ember.on('init', function() {
    this.set('onlineStatus.allowPing', false);
  })
  
});
