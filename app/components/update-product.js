import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {

        name: this.get('name'),
        description: this.get('description'),
        manufacturer: this.get('manufacturer'),
        image: this.get('image'),
        cost: this.get('cost'),
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
