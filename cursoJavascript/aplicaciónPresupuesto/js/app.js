const ingresos = [
  new Ingreso("Salario", 2000.0),
  new Ingreso("Venta coche", 100),
];

const egresos = [
  new Egreso("Renta departamento", 900),
  new Egreso("Ropa", 400),
];
function eliminarIngreso(id) {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id); //regresa el indice del arreglo, si encuentra el id
  //for(let ingreso of ingresos)
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
}
function eliminarEgreso(id) {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
}
let totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};

let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgresos = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoProcentaje(porcentajeEgresos);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

function formatoMoneda(valor) {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimunFractionDigits: 2,
  });
}
function formatoProcentaje(valor) {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimunFractionDigits: 2,
  });
}

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

function crearIngresoHTML(ingreso) {
  let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(
                  ingreso.valor
                )}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle"
                        onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
  return ingresoHTML;
}
const cargarEgresos = () => {
  let ingresosHTML = "";
  for (let egreso of egresos) {
    ingresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = ingresosHTML;
};

function crearEgresoHTML(egreso) {
  let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(
                  egreso.valor
                )}</div>
                <div class="elemento_porcentaje">${formatoProcentaje(
                  egreso.valor / totalEgresos()
                )}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle"
                        onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
  return ingresoHTML;
}

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo.value === "egreso") {
      egresos.push(new Egreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarEgresos();
    }
  }
});
window.addEventListener("load", () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
});
