import Ember from 'ember';

export default Ember.Component.extend({
  isDonate: false,
  requiredFields: false,
  ratio: function () {
    if(Math.round((this.get('stop.donationsRaisedInDollars')*100)/700) > 100){
      return 100
    } else {
      return (Math.round((this.get('stop.donationsRaisedInDollars')*100)/700))
    }
  }.property('stop.donationsRaisedInDollars'),
  actions: {
    openModal(){
      let self = this;
      $(document).ready(function(){
        $('.modal').modal();
        $('#' + self.get('stop.stopId')).modal('open');
      });
      this.set('name', null);
      this.set('donationAmount', null);
      this.set('credit_name', null);
      this.set('card_number', null);
      this.set('card_date', null);
      this.set('card_code', null);
    },
    donate(){
      if(this.get('name') && this.get('donationAmount') && this.get('credit_name') && this.get('card_number') && this.get('card_date') && this.get('card_code')){
        let val = this.get('stop.donationsRaisedInDollars');
        val += parseInt(this.get('donationAmount'));
        this.set('stop.donationsRaisedInDollars', val);
        this.set('requiredFields', false);
        $('#' + this.get('stop.stopId')).modal('close')
      } else {
        this.set('requiredFields', true)
      }
    }
  }
});
