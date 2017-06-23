import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeProduct(product) {
      this.get('shoppingCart').remove(product)
<<<<<<< HEAD
    },
    empty(product) {
    this.get('shoppingCart').empty(product);
   }
=======
    }
>>>>>>> dc39de4a64896411e8930d62a5f1caf57c60455a
  }
});
