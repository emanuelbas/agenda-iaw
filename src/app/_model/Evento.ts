export class Evento {
	name: String;
	date: Date;
	eventtype: String;
	imagen: String;
	ubicacion: String;
	nombreLugar: String;
	hashtags: String[];
	email: String;
	constructor(name: String, date: Date, eventype: String, imagen:String,
	 ubicacion:String, nombreLugar:String, hashtags: String[], email: String){
		this.name = name;
		this.date = date;
		this.eventtype = eventype;
		this.imagen = imagen;
		this.ubicacion = ubicacion;
		this.nombreLugar = nombreLugar;
		this.hashtags = hashtags;
		this.email = email;
	}
}