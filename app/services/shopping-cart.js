import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').addObject(product);
  },
  remove(product) {
    this.get('products').removeObject(product);
  },
  empty() {
    this.get('products').clear()
  }
});
