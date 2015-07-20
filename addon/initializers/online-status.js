export default {
  name: 'online-status',
  
  initialize: function(registry, application) {
    application.inject('component', 'onlineStatus', 'service:online-status');
    application.inject('controller', 'onlineStatus', 'service:online-status');
    application.inject('route', 'onlineStatus', 'service:online-status');
  }
};