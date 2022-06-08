import { createServer } from "miragejs";

export function  makeServer() {
	createServer({

		routes() {
			this.namespace = 'api'

			this.get("/educations", () => {
				return [
					{
						"date": 2001,
						"title": "Title 0",
						"text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit."
					},
					{
						"date": 2000,
						"title": "Title 1",
						"text": "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo. Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo."
					},
					{
						"date": 2012,
						"title": "Title 2",
						"text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex."
					},
					{
						"date": 2015,
						"title": "Title 3",
						"text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex."
					},
					{
						"date": 2016,
						"title": "Title 4",
						"text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusbore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex."
					},
				]
			}, {timing: 10000})
		
			this.get("/skills", () => [])
			
			this.post("/skills", (request) => {
				let skill = JSON.parse(request.requestBody);

				return skill;

			}, {timing:3000})

		}
	})
} 
