import mongoose from "mongoose";
import db from "../models/index.js";
// import  mongoOptions  from "../utils/config.js";

// mongoose.connect(
// 	// Name below is name of local (Robo3T)
// 	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/passport", {

// 	useUnifiedTopology: true ,
// 	useNewUrlParser: true,
// 	}
// 	// mongoOptions
// );

// User Projects - with matching project Ids - this is where new users would be stored
let userSeed = [
	{
		username: "testUser",
		email: "email@email.com",
		password: "testPassword",
	}
];




// Should be five collections based on seeds - users
// Database name "passport"

// Removing all users with their currentProjects
const seed = function () {
	db.Users.deleteMany({})
		.then(() => db.Users.create(userSeed))
		.then((data) => {
			console.log(data.length + " records inserted!");
		})
		.catch((err) => {
			console.error(err);
		});
};

export default { seed };
