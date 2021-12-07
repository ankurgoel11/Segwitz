import Errors from './Errors';

class Form {
	
	constructor(data){
		this.originalData = data;
		
		for(let field in data) {
			this[field] = data[field];
		}
		this.errors = new Errors();
	}
	reset() {
		for(let field in this.originalData) {
			this[field] = '';
		}
	}
	data(){
		let data = {};
		for(let property in this.originalData) {
			data[property] = this[property];
		}
		
		//let data = Object.assign({},this);//cloning the object
		
		//delete data.originialData;
		//delete data.errors;
		return data;//got the object so we have the data so no need of original Data
	}
	submit(requestType,url) {
		
		return new Promise((resolve, reject) => {
			axios[requestType](url,this.data())
			.then(response=>{
					//this.onSuccess.bind(this);
				this.onSuccess();
				//console.log('Got the response inside Form.js');
				//console.log(response.data);
				resolve(response.data);
			})
			.catch(error=>{
				console.log(error);
				this.onFail(error.data);
				reject(error.data);
			});
		});
		
	}
	onSuccess(){
		this.errors = new Errors();
		this.reset();
	}
	onFail(errors){
		this.errors.record(errors);
	}
	
}

export default Form;