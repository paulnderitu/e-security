import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').addObject(product);
  },
  remove(product) {
    this.get('products').removeObject(product);
<<<<<<< HEAD
  },
  empty() {
    this.get('products').clear()
=======
>>>>>>> dc39de4a64896411e8930d62a5f1caf57c60455a
  }
});
