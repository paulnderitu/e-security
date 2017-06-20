import Ember from 'ember';

export default Ember.Component.extend({
  actions:{

  delete (product){
    if(confirm('Are yopu sure you want to delete this product?')) {
      this.sendAction('destroyProduct', product);
    }
  }
}
});
