import { createServer, Model } from 'miragejs';
import educations from './database/educations.json';

export function  makeServer() {
	createServer({
		models: {
			skill: Model,
		},

		seeds(server) {
			server.create('skill', [])
		},

		routes() {
			this.namespace = 'api';

			this.get('/educations', () => educations, {timing: 10000});

			this.get('/skills', (schema) => {
				//console.log(schema.skills.all().models)
				//const result = schema.skills.all() || [];
				const result = [
				];
				//console.log(`res from server  ${JSON.stringify(result)}`);
				return result;
			});
			
			this.post('/skills', (schema, req) => {
				let skill = JSON.parse(req.requestBody);
				const sch = schema.skills.create(skill)
				console.log(`schema ${JSON.stringify(schema.skills.all().models)}`)
				console.log(`schema ${JSON.stringify(schema.skills.last())}`)
				//console.log(`schema ${JSON.stringify(schema.db._collections[0]._records[1])}`)
				return sch;
			}, {timing:3000});
		}
	});
} 
