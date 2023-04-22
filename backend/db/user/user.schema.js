const Schema = require("mongoose").Schema;

exports.UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: String,
		name: String,
		img: String,
		about: String,
	},
	{ timestamps: true, collection: "Twitter-clone-users" }
);
