import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import axios from "axios";

// Initialize dotenv
dotenv.config();

export default class StatusController {
	static async getStatusApi(req, res) {
		try {
			let response = {
				msg: "Current API status",
				name: process.env.PROJECT_API_NAME,
				environment: process.env.PROJECT_API_ENVIRONMENT,
				version: process.env.PROJECT_API_VERSION,
				uptime: new Date().getTime(),
				hash: uuidv4(),
			};

			res.json(response);
		} catch (err) {
			res.status(500).json({
				error: "Unable to request API status",
				details: `${err}`,
			});
		}
	}

	static async getStatusServer(req, res) {
		const domain = process.env.PROJECT_API_DOMAIN;
		axios
			.get(`${domain}`)
			.then(function (response) {
				let resp = {
					msg: "Current Server status",
					name: process.env.PROJECT_SERVER_NAME,
					environment: process.env.PROJECT_SERVER_ENVIRONMENT,
					version: process.env.PROJECT_SERVER_VERSION,
					uptime: new Date().getTime(),
					connection: response.connection,
					hash: uuidv4(),
					server_domain: domain,
					status_text: `${response.statusText}`,
					status: `${response.status}`,
				};

				res.json(resp);
			})
			.catch((err) => {
				res.status(503).json({
					error: "Unable to request server status",
					details: `${err}`,
				});
			});
	}
}
