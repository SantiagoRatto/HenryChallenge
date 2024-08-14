Array.prototype.filtrar = function (funcion) {
    const resultado = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (funcion(this[i], i, this)) {
                resultado.push(this[i]);
            }
        }
    }
    return resultado;
  };

  var personas =[
    {
      nombre: 'Emi',
      edad: 21,
      hobbies: ['correr', 'dormir', 'nadar'],
      amigos: [
        { 
          nombre: 'Martin',
        },{
          nombre: 'Leo',
        }
      ],
    }, {
      nombre: 'Franco',
      edad: 22,
      hobbies: ['futbol', 'golf'],
      amigos: [
        {
          nombre: 'Emi',
        }, {
          nombre: 'Jimmy',
        }, {
          nombre: 'Matias',
        }
      ],
    },
    {
      nombre: 'Martin',
      edad: 35,
      hobbies: ['Cancha', 'emprender'],
      amigos: [
        {
          nombre: 'Toni',
        }, {
          nombre: 'Leo',
        }, {
          nombre: 'Manu',
        }
      ],
    },
  ];
  console.log (personas.filtrar(p => p.edad <= 22));
  console.log (personas.filtrar(p => p.edad <= 22).length);