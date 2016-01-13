
Template.categorysidebar.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  categories:function(){
      return CateCol.find({});
  }
});

Template.categorysidebar.events({
  "click #foo": function(event, template){
  }
});
