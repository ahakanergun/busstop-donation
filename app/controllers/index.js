import Ember from "ember";

export default Ember.Controller.extend({
  filteredContent: function () {
    return this.get('model.stops')
  }.property('model.stops')
});
