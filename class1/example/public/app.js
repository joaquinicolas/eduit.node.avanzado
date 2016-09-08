console.log("welcome to fligs search");




function Header() {
	return React.createElement('h1',null,
		'Buscando vuelos...'
	);
}

input = props =>
	React.createElement('input',{type:props.type,placeholder:props.placeholder,id:props.id},null)


button = props =>
	React.createElement('button',{onClick:props.onclick},props.text)




click = () => {
	alert("hola mundo")
	$.ajax({
		method:"POST",
		url:"/vuelos",
		data: {
			from: $("#from").val(),
			to: $("#to").val(),
			price: $("#price").val()
		},
		success: (status, data)=>{
			console.log(status, data);
		}
	});
}
var inputs = [{type:'text',placeholder:'Desde...',id:'from'},
	{type:'text',placeholder:'Hasta...',id:'to'},
	{type:'number',placeholder:'1000',id:'price'}]


var app = React.createElement('div',null,
		React.createElement(Header),
	React.createElement(button,{onclick:click,text:'Buscar'}),
		inputs.map( element =>{
			return React.createElement(input,element,null)
		})
);

ReactDOM.render(app,document.getElementById('content'))