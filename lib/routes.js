/**
 * Add your routes here
 */

 FlowRouter.route(['/','home'], {
   subscriptions:function(params){
   Meteor.subscribe("categoriesList");
	 this.register('currentPost', Meteor.subscribe("posts"));
 },
   name: "home",
   action: function() {
     BlazeLayout.render("mainLayout", {sidebar:'categorysidebar',main: "home", cart:''});
   }
 });

 FlowRouter.route('/posts/:postId', {
   name: "postItem",
   action: function() {
     BlazeLayout.render("mainLayout", {sidebar:'categorysidebar',main: "postItem", cart:''});
   }
 });

 // var adminRoutes = FlowRouter.group({
 //   prefix: '/admin',
 //   name: 'admin',
 //   triggersEnter: [function(context, redirect) {
 //     console.log('running group triggers');
 //   }]
 // });

 // adminRoutes.route('/categories', {
 //   subscriptions:function(){
 //   Meteor.subscribe("Categories");
 //   }
 // });
