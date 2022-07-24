const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: false },
	createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', function (done) {
	const user = this;

	if (!user.isModified('password')) {
		return done();
	}

	bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
		if (err) {
			return done(err);
		}
		bcrypt.hash(user.password, salt, function (err, hashedPassword) {
			if (err) {
				return done(err);
			}
			user.password = hashedPassword;
			done();
		});
	});
});

userSchema.methods.checkPassword = function (guess, done) {
	if (this.password != null) {
		bcrypt.compare(guess, this.password, function (err, isMatch) {
			done(err, isMatch);
		});
	}
};

const User = mongoose.model('User', userSchema);

module.exports = User;
