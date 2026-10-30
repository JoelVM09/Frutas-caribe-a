// Meses: 0 = enero ... 11 = diciembre. Confirmen las temporadas reales con los agricultores de Moca.
export const MESES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

export const FRUTAS = [
  {
    id: "mango",
    nombre: "Mango",
    cientifico: "Mangifera indica",
    color: "#F2A21B",
    oscuro: "#5C3A00",
    imagen: "/img/mango.jpg",
    meses: [4, 5, 6, 7],
    resumen: "Dulce, jugoso y de la mata al plato. Se come verde con sal o maduro en jugo y batida.",
    cultura: "En los patios dominicanos, el mango se comparte: se baja con una vara y se come bajo la mata.",
    ciencia: "Su color naranja viene del betacaroteno, un pigmento que el cuerpo convierte en vitamina A.",
    beneficios: [
      { titulo: "Vitamina C", texto: "Ayuda a las defensas y a absorber el hierro." },
      { titulo: "Vitamina A", texto: "Cuida la vista y la piel." },
      { titulo: "Fibra", texto: "Favorece la digestion y sacia." },
    ],
  },
  {
    id: "chinola",
    nombre: "Chinola",
    cientifico: "Passiflora edulis",
    color: "#8E4BA8",
    oscuro: "#2E123C",
    imagen: "/img/chinola.jpg",
    meses: [3, 4, 5, 6, 7, 8, 9, 10],
    resumen: "Acida y aromatica. Una sola fruta perfuma un jugo entero.",
    cultura: "El jugo de chinola con hielo es el refresco de las tardes calurosas en todo el pais.",
    ciencia: "Sus semillas crujientes estan rodeadas de pulpa con antioxidantes como los flavonoides.",
    beneficios: [
      { titulo: "Vitamina C", texto: "Aporta antioxidantes que protegen las celulas." },
      { titulo: "Fibra", texto: "Las semillas comestibles suman fibra." },
      { titulo: "Potasio", texto: "Apoya el equilibrio de liquidos y los musculos." },
    ],
  },
  {
    id: "guanabana",
    nombre: "Guanabana",
    cientifico: "Annona muricata",
    color: "#6FA35A",
    oscuro: "#1B3314",
    imagen: "/img/guanabana.jpg",
    meses: [5, 6, 7, 8],
    resumen: "Pulpa blanca y cremosa, entre dulce y acida. Perfecta en batida con leche.",
    cultura: "La batida de guanabana es una de las clasicas del verano dominicano.",
    ciencia: "Su pulpa es rica en agua y fibra soluble, por eso tiene esa textura cremosa.",
    beneficios: [
      { titulo: "Vitamina C", texto: "Contribuye al sistema inmune." },
      { titulo: "Fibra", texto: "Ayuda al transito intestinal." },
      { titulo: "Hidratacion", texto: "Mas del 80 % de su peso es agua." },
    ],
  },
];