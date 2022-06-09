import { createServer, Model } from 'miragejs';
import educations from './database/educations.json';

const skills = localStorage.getItem('Skills') || [];

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

			this.get('/skills', () => {
				return skills;
			});
			
			this.post('/skills', () => {
			}, {timing:3000});
		}
	});
} 
