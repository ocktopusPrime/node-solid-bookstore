const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/user');

module.exports = function () {
	//turns a user object into an id
	passport.serializeUser(function (user, done) {
		//serializing the user
		done(null, user._id);
	});
	//turns the id into a user object
	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	passport.use(
		'Login',
		new LocalStrategy(
			{
				usernameField: 'username',
				passwordField: 'password'
			},
			function (email, password, done) {
				User.findOne({ email: email }, function (err, user) {
					if (err) {
						return done(err);
					}
					if (!user) {
						return done(null, false, {
							message: 'No User Account Associated With Email!'
						});
					}
					user.checkPassword(password, function (err, isMatch) {
						if (err) {
							return done(err);
						}
						if (isMatch) {
							return done(null, user);
						} else {
							return done(null, false, { message: 'Invalid password' });
						}
					});
				});
			}
		)
	);
};
