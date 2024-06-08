const productos = [
  {
    id: 1,
    nombre: '1984 - George Orwell',
    precio: 100,
    descripcion: 'Novela distopica de George Orwell, publicada en 1949. La novela es una sátira mordaz de la sociedad y la política del siglo XX, y aún se considera un texto de referencia en contra de la censura y la opresión.',
    stock: 10,
    categoria: 'Novela distopica',
    imagen: "/img/1984.jpg",

  },
  {
    id: 2,
    nombre: 'Los Misarables - Victor Hugo',
    precio: 200,
    descripcion: 'Los miserables es una novela del escritor francés Victor Hugo publicada en 1862. La novela transcurre en Francia, en ambientes rurales y capitalinos. Narra las vidas y las relaciones de varios personajes durante un periodo de veinte años, a principios del siglo XIX, en los cuales transcurren las guerras napoleónicas y la restauración monárquica en Francia. ',
    stock: 20,
    categoria: 'Novela historica',
    imagen: "/img/LosMiserables.png"
  },
  {
    id: 3,
    nombre: 'La Tregua - Mario Benedetti',
    precio: 300,
    descripcion: 'La tregua es una novela del escritor uruguayo Mario Benedetti, publicada en 1960. La novela narra la historia de Martín Santomé, un empleado público de cincuenta y cinco años que trabaja en una oficina de seguros en Montevideo, Uruguay. La historia se desarrolla en la década de 1950 y es contada por el propio protagonista, a través de un diario personal.',
    stock: 30,
    categoria: 'Novela',
    imagen: "/img/LaTregua.jpeg"
  }
];

  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  }

  export { obtenerProductos }
