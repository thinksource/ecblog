if (Meteor.users.find().count() === 0) {
	Accounts.createUser({
		username: "admin",
		email: 'admin@admin.com',
		verified: true,	
		password:"admin123",
		profile: {
			name: "Admin"
		},
		roles: ['admin']
	});
	//var id=Accounts.findOne({}).id;

	Accounts.createUser({
		username: "dragonszy",
		email: "dragonszy@163.com",
		password: "123456",
		profile: {
			name: "dragonszy"
		}
	});
	Accounts.createUser({
		username: "test",
		email: "test@test.com",
		password: "test123",
		profile: {
			name: "test"
		}
	});
};
