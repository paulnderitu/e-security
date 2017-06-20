import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },

  actions: {
    update(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[keys]!==undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
      this.transitionTo('index');
    },


    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('index');
    },

    saveReview(params) {
    var newReview = this.store.createRecord('review', params);
    var product = params.product;
    product.get('reviews').addObject(newReview);
    newReview.save().then(function() {
      return product.save();
    });
    this.transitionTo('product', product);
  }
}
});
