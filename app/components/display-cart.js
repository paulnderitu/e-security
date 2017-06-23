import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeProduct(product) {
      this.get('shoppingCart').remove(product)
    },
    empty(product) {
    this.get('shoppingCart').empty(product);
   }
  }
});
