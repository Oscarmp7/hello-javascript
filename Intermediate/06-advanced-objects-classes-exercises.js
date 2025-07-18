/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto

console.log(`------------------------------------------------------------`)
console.log("Ejercicio 1: Agregega una función al prototipo de un objeto ");
console.log(`------------------------------------------------------------`)

function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.hacerSonido = function(sonido) {
    console.log(`Mi nombre es ${this.nombre} y hago ${sonido}`)
 }
 
 const perro = new Animal('perro');
 perro.hacerSonido("guagu");
 
 
 // 2. Crea un objeto que herede de otro
 console.log(`-----------------------------------------------`)
 console.log("Ejercicio 2: Crea un objeto que herede de otro ");
 console.log(`-----------------------------------------------`)
 
 const usuarioBase = {
    tipoUsuario: "usuario",
    login () {
        console.log(`${this.name} ha iniciado sección`)
    }
}

const cliente = Object.create(usuarioBase)

cliente.name = "Emmanuel";
cliente.hacerPedido = function() {
    console.log(`El cliente ${this.name} hizo un pedido`)
};

const repartidor = Object.create(usuarioBase)
repartidor.name = "Johan";
repartidor.entregarPedido = function() {
    console.log(`El repartidor ${this.name} entregó el pedido`);
}

cliente.login();
cliente.hacerPedido();
repartidor.login();
repartidor.entregarPedido();


// 3. Define un método de instancia en un objeto
console.log(`---------------------------------------------------------`)
console.log("Ejercicio 3: Define un método de instancia en un objeto ");
console.log(`---------------------------------------------------------`)

class Cliente {
    constructor (name) {
        this.name = name
        this.carrito = []
    }

    agregarProducto(producto) {
        this.carrito.push(producto)
    }

    mostrarCarrito() {
    if (this.carrito.length === 0) {
        console.log(`El carrito está vacío`);
    } else {
        console.log("🧾 Lista completa del carrito:");
        this.carrito.forEach((nombre, index) => {
        console.log(`${index + 1}. ${nombre}`);
        });
    }
    }


    realizarCompra() {
        if (this.carrito.length === 0) {
            console.log(`El carrito está vacío, agregue productos e inténtelo de nuevo`);
        } else {
            console.log(`El cliente ${this.name} compró: ${this.carrito.join(', ')}`);
            this.carrito = []; 
        }
    }
}

const cliente1 = new Cliente("Oscar");

cliente1.agregarProducto("Pizza");
cliente1.agregarProducto("Refresco");

cliente1.mostrarCarrito();

cliente1.realizarCompra();
cliente1.mostrarCarrito();



// 4. Haz uso de get y set en un objeto

console.log(`-----------------------------------------------`)
console.log("Ejercicio 4: Haz uso de get y set en un objeto ");
console.log(`-----------------------------------------------`)

class Producto {

    #precio

    constructor(precio) {
        this.#precio = precio;
    }

    get precio() {
    return new Intl.NumberFormat("es-DO", {
            style: "currency",
            currency: "DOP",
            minimumFractionDigits: 2
        }).format(this.#precio);
    }

    set precio(valor) {
        if (valor <= 0) {
            console.log("El precio no puede ser negativo")
        } else {
            this.#precio = valor;
        }
    }
}

const playStation5 = new Producto(30000)
playStation5.precio= -25000;
playStation5.precio = 15000;
console.log(playStation5.precio)


// 5. Utiliza la operación assign en un objeto
console.log(`------------------------------------------------------`)
console.log("Ejercicio 5: Utiliza la operación assign en un objeto ");
console.log(`------------------------------------------------------`)

const configuracionDefault = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true,
    autoplay: false
};

const preferenciasUsuario = {
    tema: "claro",
    autoplay: true
}

configuracionDefault.accesibilidad = true;

const configFinal = Object.assign({}, configuracionDefault, preferenciasUsuario);

console.log(configFinal);


// 6. Crea una clase abstracta
console.log(`--------------------------------------`)
console.log("Ejercicio 6: Crea una clase abstracta ")
console.log(`--------------------------------------`)

class Entrega {
  constructor(datos) {
    if (new.target === Entrega) {
      throw new Error("No puedes instanciar la clase abstracta Entrega");
    }

    this.datos = datos;
  }

  procesar() {
    throw new Error("El método procesar() debe ser implementado por la subclase.");
  }
}


class EntregaMoto extends Entrega {
  procesar() {
    const { distancia, clima } = this.datos;
    if (distancia > 15) {
      return "❌ Entrega por moto rechazada: distancia demasiado larga";
    }
    if (clima === "lluvioso") {
      return "❌ Entrega por moto rechazada: clima lluvioso";
    }
    return "✅ Entrega por moto aceptada";
  }
}

class EntregaBicicleta extends Entrega {
  procesar() {
    const { distancia } = this.datos;
    if (distancia > 5) {
      return "❌ Entrega por bicicleta rechazada: distancia demasiado larga";
    }
    return "✅ Entrega por bicicleta aceptada";
  }
}

class EntregaDron extends Entrega {
  procesar() {
    const { peso } = this.datos;
    if (peso > 2) {
      return "❌ Entrega por dron rechazada: peso excesivo";
    }
    return "✅ Entrega por dron aceptada";
  }
}

const pedidosPendientes = [
  { tipo: "moto", distancia: 10, clima: "soleado" },
  { tipo: "bicicleta", distancia: 7 },
  { tipo: "dron", peso: 1.5 },
  { tipo: "dron", peso: 3 },
  { tipo: "moto", distancia: 16, clima: "lluvioso" }
];


pedidosPendientes.forEach(pedido => {
  let entrega;

  switch (pedido.tipo) {
    case "moto":
      entrega = new EntregaMoto(pedido);
      break;
    case "bicicleta":
      entrega = new EntregaBicicleta(pedido);
      break;
    case "dron":
      entrega = new EntregaDron(pedido);
      break;
    default:
      console.log(`❌ Tipo de entrega desconocido: ${pedido.tipo}`);
      return;
  }

  const resultado = entrega.procesar();
  console.log(resultado);
});



// 7. Utiliza polimorfismo en dos clases diferentes

console.log(`-----------------------------------------------------------`)
console.log("Ejercicio 7: Utiliza polimorfismo en dos clases diferentes ");
console.log(`-----------------------------------------------------------`)

class Empleado {
    constructor(nombre) {
        if (new.target === Empleado) {
            throw new Error("No puedes instanciar la clase abstracta Empleado");
        }

        this.nombre = nombre;
    }

    calcularPago() {
        throw new Error("El método calcularPago() debe ser implementado por la subclase.");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    calcularPago() {
        return "Pago mensual fijo de RD$30,000";
    }
}

class EmpleadoFreelancer extends Empleado {
    calcularPago() {
        return "Pago por proyecto: RD$12,000 por entrega";
    }
}


const empleadosData = [
  { nombre: "Oscar", tipo: "tiempoCompleto" },
  { nombre: "Josayda", tipo: "freelancer" },
  { nombre: "Luis", tipo: "tiempoCompleto" },
  { nombre: "Daniela", tipo: "freelancer" },
  { nombre: "Helen", tipo: "tiempoCompleto" }
];

const empleados = [];

empleadosData.forEach(({ nombre, tipo }) => {
  switch (tipo) {
    case "tiempoCompleto":
      empleados.push(new EmpleadoTiempoCompleto(nombre));
      break;
    case "freelancer":
      empleados.push(new EmpleadoFreelancer(nombre));
      break;
    default:
      console.log(`Tipo de empleado desconocido: ${tipo}`);
  }
});

empleados.forEach(empleado => {
  console.log(`${empleado.nombre}: ${empleado.calcularPago()}`);
});


// 8. Implementa un Mixin

console.log(`---------------------------------`)
console.log("Ejercicio 8: Implementa un Mixin ");
console.log(`---------------------------------`)

const Logger = {
    logAction(mensaje) {
        const timestamp = new Date().toLocaleString();
        console.log(`[${timestamp}] ${mensaje}`)
    }
}

class Cliente1 {

    constructor(nombre) {
        this.nombre = nombre
    }

    hacerPedido() {
        this.logAction(`${this.nombre} hizo un pedido`)
    }
}

class Admin {

    constructor(nombre){
        this.nombre = nombre
    }

    aprobarPedido() {
        this.logAction(`${this.nombre} aprobó un pedido`)
    }
}

//aplicamos el mixin

Object.assign(Cliente1.prototype, Logger);
Object.assign(Admin.prototype, Logger);

const client1 = new Cliente1('Lucía')
const admin1 = new Admin('Carlos')

client1.hacerPedido();
admin1.aprobarPedido();
// 9. Crea un Singleton

console.log(`-------------------------------`)
console.log("Ejercicio 9: Crea un Singleton ");
console.log(`-------------------------------`)

class Sesion {

  static #instancia = null;
  #usuario = null;

  
  constructor() {
    if (Sesion.#instancia) {
      throw new Error("Usa Sesion.getInstance() para obtener la instancia");
    }
    console.log("✅ Instancia de Sesion creada");
  }


  static getInstance() {
    if (!Sesion.#instancia) {
      Sesion.#instancia = new Sesion();
    }
    return Sesion.#instancia;
  }


  iniciarSesion(usuario) {
    this.#usuario = usuario;
    console.log(`🔓 Sesión iniciada para: ${usuario}`);
  }

  cerrarSesion() {
    console.log(`🔒 Sesión cerrada para: ${this.#usuario}`);
    this.#usuario = null;
  }

  obtenerUsuario() {
    return this.#usuario;
  }
}

const a = Sesion.getInstance();
a.iniciarSesion("Ana");

const b = Sesion.getInstance();
console.log("¿a === b?", a === b); // 👉 true
console.log("Usuario desde b:", b.obtenerUsuario()); // Ana

b.cerrarSesion();
console.log("Usuario desde a después de cerrar:", a.obtenerUsuario()); // null


// 10. Desarrolla un Proxy
console.log(`---------------------------------`)
console.log("Ejercicio 9: Desarrolla un Proxy ");
console.log(`---------------------------------`)

const producto = {
  nombre: 'Laptop',
  precio: 1500
};

const handler = {
  get(target, prop) {
    if (!(prop in target)) {
      throw new Error(`❌ La propiedad "${prop}" no existe en el objeto.`);
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === 'precio') {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error('❌ El precio debe ser un número positivo.');
      }
    }

    console.log(`📝 Propiedad "${prop}" cambiada de "${target[prop]}" a "${value}".`);
    target[prop] = value;
    return true;
  }
};

const productoProxy = new Proxy(producto, handler);

// ✅ Ejemplos de uso correcto:
productoProxy.nombre = 'Laptop Gamer';
productoProxy.precio = 2000;

// ❌ Acceso a propiedad inexistente:
try {
  console.log(productoProxy.categoria);
} catch (e) {
  console.error(e.message);
}

// ❌ Asignación de precio inválido:
try {
  productoProxy.precio = -100;
} catch (e) {
  console.error(e.message);
}
