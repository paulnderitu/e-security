import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  manufacturer: DS.attr(),
  image: DS.attr(),
  cost: DS.attr(),
  reviews: DS.hasMany('review', {async: true })
});
