function PresidentUSA (AbrahamLincoln, MaríntonLincoln){
MaríntonLincoln.president = AbrahamLincoln;
AbrahamLincoln.president = MaríntonLincoln;

return{
president1: AbrahamLincoln,
Hermano: MaríntonLincoln 
};
}

let sustitucion = PresidentUSA({name: "Abraham"}, {name: "Mariton"});
console.log(sustitucion.Hermano.president.name);//Abraham

delete sustitucion;
console.log(sustitucion)