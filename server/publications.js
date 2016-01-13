/**
 * Publish all posts
 */
Meteor.publish('posts', function () {
  var ip = this.connection.clientAddress;
//  return Posts.find({ flaggedBy: { $ne: ip } }, { sort: { likesCount: -1 }, limit: 30, fields: { flaggedBy: 0 } });
    return Posts.find({});
});

/**
 * Publish posts with all the creators profiles
 */
Meteor.publishComposite('posts.home', {
  find: function() {
    var ip = this.connection.clientAddress;
    return Posts.find({ flaggedBy: { $ne: ip } }, { sort: { likesCount: -1 }, limit: 30, fields: { flaggedBy: 0 } });
  },
  children: [{
    find: function(post) {
      return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
    }
  }, {
    find: function(post) {
      return Likes.find({ userId: this.userId, postId: post._id });
    }
  }]
});

/**
 * Publish one post specifically with its creator profile
 */
Meteor.publishComposite('onePostWithUser', function(postId) {
  check(postId, String);
  return {
    find: function() {
      var ip = this.connection.clientAddress;
      return ProductCol.find({ _id: postId, flaggedBy: { $ne: ip } }, { fields: { flaggedBy: 0 } });
    },
    children: [{
      find: function(post) {
        return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
      }
    }]
  };
});


Meteor.publish('categoryById', function(Id) {
	return CateCol.find(Id);
});

Meteor.publish('categoriesList', function() {
	return CateCol.find({}, {field: {description: 0}});
});

Meteor.publish('products',function(){
  return ProductCol.find({});
});
