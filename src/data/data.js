const productos = [
  {
    id: 1,
    nombre: '1984',
    autor: 'George Orwell',
    precio: 100,
    descripcion: 'Novela distopica de George Orwell, publicada en 1949. La novela es una sátira mordaz de la sociedad y la política del siglo XX, y aún se considera un texto de referencia en contra de la censura y la opresión.',
    stock: 10,
    categoria: 'novela',
    imagen: "/img/1984.jpg",

  },
  {
    id: 2,
    nombre: 'Los Misarables',
    autor: 'Victor Hugo',
    precio: 200,
    descripcion: 'Los miserables es una novela del escritor francés Victor Hugo publicada en 1862. La novela transcurre en Francia, en ambientes rurales y capitalinos. Narra las vidas y las relaciones de varios personajes durante un periodo de veinte años, a principios del siglo XIX, en los cuales transcurren las guerras napoleónicas y la restauración monárquica en Francia. ',
    stock: 20,
    categoria: 'novela-historica',
    imagen: "/img/LosMiserables.png"
  },
  {
    id: 3,
    nombre: 'La Tregua',
    autor: 'Mario Benedetti',
    precio: 300,
    descripcion: 'La tregua es una novela del escritor uruguayo Mario Benedetti, publicada en 1960. La novela narra la historia de Martín Santomé, un empleado público de cincuenta y cinco años que trabaja en una oficina de seguros en Montevideo, Uruguay. La historia se desarrolla en la década de 1950 y es contada por el propio protagonista, a través de un diario personal.',
    stock: 30,
    categoria: 'novela',
    imagen: "/img/LaTregua.jpeg"
  },
  {
    id: 4,
    nombre: 'El Club de la Pelea',
    autor : 'Chuck Palahniuk',
    precio: 500,
    descripcion: 'El club de la lucha es una novela del escritor estadounidense Chuck Palahniuk, publicada en 1996. La historia se centra en un joven hastiado de su gris y monótona vida, que forma un club de lucha clandestino como forma de terapia. La novela explora temas como la masculinidad, la identidad personal y la alienación social.',
    stock: 12,
    categoria: 'novela',
    imagen: "/img/ElClubDeLaLucha.webp"
  },
  {
    id: 5,
    nombre: 'El Aleph',
    autor: 'Jorge Luis Borges',
    precio: 600,
    descripcion: 'Serie de relatos intrigantes que concluyen que todo el saber del universo en un solo punto. La obra maestra de Borges, un libro que no puede faltar en tu biblioteca.',
    stock: 6,
    categoria: 'novela',
    imagen: "/img/elAleph.jpg"
  },
  {
    id: 6,
    nombre: 'Todo se desmorona',
    autor: 'Chinua Achebe',
    precio: 1200,
    descripcion: 'Todo se desmorona es una novela del escritor nigeriano Chinua Achebe, publicada en 2005, aclamada por la critica.',
    stock: 3,
    categoria: 'novela',
    imagen: "/img/todo-se-desmorona-chinua-achebe.jpg"
  },
  {
    id: 7,
    nombre: 'El largo camino hacia la libertad',
    autor: 'Nelson Mandela',
    precio: 1000,
    descripcion: 'El largo camino hacia la libertad es la autobiografía de Nelson Mandela, publicada en 1994. La obra narra la vida de Mandela desde su infancia en un pueblo rural hasta su elección como presidente de Sudáfrica. ',
    stock: 35,
    categoria: 'biografia',
    imagen: "/img/mandela.jpg"
  }


];

  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  }

  export { obtenerProductos }
