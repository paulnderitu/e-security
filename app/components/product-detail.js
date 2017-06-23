import Ember from 'ember';

export default Ember.Component.extend({
sortBy: ['rating:desc'],
sortedReviews: Ember.computed.sort('product.reviews', 'sortBy'),

  actions:{

  delete (product){
    if(confirm('Are yopu sure you want to delete this product?')) {
      this.sendAction('destroyProduct', product);
    }
  },
  destroyReview(review) {
    this.sendAction('destroyReview', review);
  }
}
});
