
# Lable-ember-online-status

This Ember CLI add-on adds a service to keep track of the network status.

The addon makes use of the online and offline events as well as navigator.onLine. In case of browsers that don't support this or have an alternative way to interpret it (like Firefox), the addon tries to make a request for a dummy file at a certain interval to check online connection instead.

## Usage

In a route, controller of component:

`this.get('onlineStatus.isOnline')`

In a template:

`onlineStatus.isOnline`

## Browser support

Supported:
* Chrome 43.0 (windows)
* Firefox 39.0 (windows)
* Firefox 38.0 (android)
* Internet Explorer 11.0 (windows)
* Safari iOS (ipad 2 mini)

Not suported:
* Chrome (ipad 2 mini)

For more information on browser support: http://caniuse.com/#feat=online-status