import { useState } from "react";
import FilterBar from "./components/FilterBar";
import VenueCard from "./components/VenueCard";
import ReservationForm from "./components/ReservationForm";
import type { Venue, ReservationFormData } from "./types";

function App() {
  const [venues] = useState<Venue[]>([
    {
      id: 1,
      title: "Bolera Suramericana Unidad Deportiva de Belén Andrés Escobar Saldarriaga",
      subtitle: "BOLERA / UNIDAD DEPORTIVA",
      email: "atencion.ciudadano@ORBIX.co",
      phone: "3699000",
      location: "Rosales",
      area: "Deportes",
    },
    {
      id: 2,
      title: "Cancha de Aragón",
      subtitle: "CANCHA BALONCESTO / BARRIAL",
      email: "atencion.ciudadano@ORBIX.gov.co",
      phone: "3699000",
      location: "San Antonio de Prado",
      area: "Deportes",
    },
    {
      id: 3,
      title: "Cancha de Balcón de Miraflores",
      subtitle: "CANCHA BALONCESTO / BARRIAL",
      email: "atencion.ciudadano@ORBIX.co",
      phone: "3699000",
      location: "Cataluña",
      area: "Recreación",
    },
  ]);

  const [filterArea, setFilterArea] = useState("");
  const [filterBarrio, setFilterBarrio] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    date: "",
    time: "",
    venue: "",
  });
  const [message, setMessage] = useState("");

  const filteredVenues = venues.filter((venue) => {
    const matchArea = filterArea === "" || venue.area === filterArea;
    const matchBarrio =
      filterBarrio === "todos" || venue.location === filterBarrio;
    const matchNombre = venue.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchArea && matchBarrio && matchNombre;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("✅ Reserva confirmada exitosamente (simulada)");
    setFormData({ name: "", date: "", time: "", venue: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white p-6">
      <p className="text-base text-gray-700 mb-6 text-center">
        Encuentra los <b className="text-teal-600">Escenarios deportivos</b> disponibles de Medellín.
      </p>

      {/* Barra de filtros */}
      <div className="mb-10">
        <FilterBar
          filterArea={filterArea}
          setFilterArea={setFilterArea}
          filterBarrio={filterBarrio}
          setFilterBarrio={setFilterBarrio}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {/* Listado de escenarios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredVenues.map((venue) => (
          <VenueCard
            key={venue.id}
            venue={venue}
            onReserve={(venueName: string) =>
              setFormData({ ...formData, venue: venueName })
            }
          />
        ))}
      </div>

      {/* Formulario de reserva */}
      {formData.venue && (
        <ReservationForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          message={message}
        />
      )}
    </div>
  );
}

export default App;
