
	const mongoOptions  = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: true,
		// useFindAndModify: false,
	}
	const sessionOptions = {
		secret: "keyboard cat",
		name: "stats",
		resave: false,
		saveUninitialized: true,
		cookie: {
			expires: 1000 * 60 * 60 * 24,
		},
	}

	export default {mongoOptions, sessionOptions}