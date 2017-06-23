import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    saveProduct1() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        manufacturer: this.get('manufacturer'),
        image: this.get('image'),
        cost: this.get('cost'),
      };
      this.get('addNewProduct', false);
      this.sendAction('saveProduct2', params);
    }
  }
});
