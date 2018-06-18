const jwt = require('jsonwebtoken');

module.exports = {
	generateToken: user => {
		const u = {
			_id: user_id,
			name: user.name,
			username: user.username,
			email: user.email
		};
		return token = jwt.sign(u, process.env.JWT_SECRET, {
			expiresIn: 60 * 60 * 24
		});
	},
	verifyToken: token => {
		return new Promise((resolve, reject)=>{
			jwt.verify(toekn, process.env.JWT_SECRET, (err, user)=>{
				if (err){
					reject(err);
				}
				resolve(user);
			});
		});
	},
	getCleanUser: user => {
		const { password, age, createdAt, updatedAt, __v, ...exponsedData} = user;
		return exponsedData;
	}
};