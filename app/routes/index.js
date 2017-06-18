import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let service = new BusStopService();
    try {
      return  Ember.RSVP.hash({
        stops: service.getAllStops()
      });
    }
    catch(err) {
      this.transitionTo('error');
      //alert('error')
    }

  },
  actions: {
    searchStop(search) {
      this.controller.set('search', search);
      if(search){
        let filteredContentId = this.controller.get('model.stops').filterBy('stopId', parseInt(search));
        this.controller.set('filteredContent', filteredContentId);
      } else {
        this.controller.set('filteredContent', this.controller.get('model.stops'));
      }
    },
    clearSearch(){
      this.controller.set('filteredContent', this.controller.get('model.stops'));
      this.controller.set('search', '');
    }
  }
});
