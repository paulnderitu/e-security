import Ember from 'ember';

export function productPopularity(params) {
var product = params[0];
if(product.get('reviews').get('length')>=3) {
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"></span>');
}
else{
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-down"></span>');
 }
}
export default Ember.Helper.helper(productPopularity);
