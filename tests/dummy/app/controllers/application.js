import Ember from 'ember';

export default Ember.Controller.extend({

  onlineStatus: Ember.inject.service(),


  onInit: Ember.on('init', function() {
    this.set('onlineStatus.allowPing', false);
  })

});
