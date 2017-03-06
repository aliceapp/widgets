$(function() {
  var chatSeedForm = new showcase.SeedForm("#seedForm", "#chatExample");
  var serviceSeedForm = new showcase.SeedForm("#seedServiceForm", "#serviceExample");
  var menuSeedForm = new showcase.SeedForm("#seedMenuForm", "#menuExample");
  new showcase.ShowcaseForm('service', '', serviceSeedForm);
  new showcase.ShowcaseForm('menu', '&showCart', menuSeedForm);
  new showcase.ShowcaseForm('chat', '', chatSeedForm);
  
})