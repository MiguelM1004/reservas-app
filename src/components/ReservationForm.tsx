import type { ReservationFormData } from "../types";

interface Props {
  formData: ReservationFormData;
  setFormData: React.Dispatch<React.SetStateAction<ReservationFormData>>;
  handleSubmit: (e: React.FormEvent) => void;
  message: string;
}

export default function ReservationForm({
  formData,
  setFormData,
  handleSubmit,
  message,
}: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-teal-500 max-w-md mx-auto mt-10"
    >
      <h3 className="text-lg font-bold text-teal-600 mb-4">
        Reserva para {formData.venue}
      </h3>

      <input
        type="text"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />

      <input
        type="tel"
        placeholder="Contacto"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />

      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />

      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />

      <button
        type="submit"
        className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 hover:shadow-lg transition-all"
      >
        Confirmar Reserva
      </button>

      {message && <p className="mt-3 text-center text-green-600 font-semibold">{message}</p>}
    </form>
  );
}
