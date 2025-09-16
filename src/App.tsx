// Ejemplo en React + Tailwind
import { useState } from "react";
import { Search } from "lucide-react";

export default function Reservas() {
  const [selected, setSelected] = useState<string | null>(null);

  const escenarios = [
    {
      nombre: "Bolera Suramericana Unidad Deportiva de Belén Andrés Escobar Saldarriaga",
      tipo: "BOLERA / UNIDAD DEPORTIVA",
      correo: "atencion.ciudadano@ORBIX.co",
      telefono: "3699000",
      ubicacion: "Rosales",
    },
    {
      nombre: "Cancha de Aragón",
      tipo: "CANCHA BALONCESTO / BARRIAL",
      correo: "atencion.ciudadano@ORBIX.gov.co",
      telefono: "3699000",
      ubicacion: "San Antonio de Prado",
    },
    {
      nombre: "Cancha de Balcón de Miraflores",
      tipo: "CANCHA BALONCESTO / BARRIAL",
      correo: "atencion.ciudadano@ORBIX.co",
      telefono: "3699000",
      ubicacion: "Cataluña",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Encuentra los <span className="text-emerald-600">Escenarios deportivos</span> disponibles de Medellín
      </h1>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <input type="text" placeholder="Áreas de interés" className="px-4 py-2 rounded-xl shadow-sm border focus:ring-2 focus:ring-emerald-500 w-52" />
        <input type="text" placeholder="Barrios" className="px-4 py-2 rounded-xl shadow-sm border focus:ring-2 focus:ring-emerald-500 w-52" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm border focus-within:ring-2 focus-within:ring-emerald-500 w-64">
          <Search className="w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Nombre del escenario" className="outline-none flex-1" />
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {escenarios.map((e) => (
          <div
            key={e.nombre}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-t-4 border-emerald-500"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
              <span className="text-emerald-600 text-2xl">!</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{e.nombre}</h2>
            <p className="text-sm text-gray-600 mb-2 text-center">{e.tipo}</p>
            <p className="text-sm text-gray-500">Correo: {e.correo}</p>
            <p className="text-sm text-gray-500">Teléfono: {e.telefono}</p>
            <p className="text-sm text-gray-500 mb-4">Ubicación: {e.ubicacion}</p>
            <button
              onClick={() => setSelected(e.nombre)}
              className="w-full bg-emerald-600 text-white py-2 rounded-xl shadow-md hover:bg-emerald-700 transition-all"
            >
              Reservar
            </button>
          </div>
        ))}
      </div>

      {/* Formulario de reserva */}
      {selected && (
        <div className="mt-10 max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 border border-emerald-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Reserva para <span className="text-emerald-600">{selected}</span>
          </h3>
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Nombre completo" className="px-4 py-2 rounded-xl border shadow-sm focus:ring-2 focus:ring-emerald-500" />
            <input type="email" placeholder="Correo" className="px-4 py-2 rounded-xl border shadow-sm focus:ring-2 focus:ring-emerald-500" />
            <input type="text" placeholder="Teléfono" className="px-4 py-2 rounded-xl border shadow-sm focus:ring-2 focus:ring-emerald-500" />
            <button className="bg-emerald-600 text-white py-2 rounded-xl shadow-md hover:bg-emerald-700 transition-all">
              Confirmar Reserva
            </button>
          </form>
          <p className="text-emerald-600 text-sm mt-3 text-center">
            ✅ Reserva confirmada exitosamente
          </p>
        </div>
      )}
    </div>
  );
}
