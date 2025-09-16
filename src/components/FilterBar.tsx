interface FilterBarProps {
  filterArea: string;
  setFilterArea: (value: string) => void;
  filterBarrio: string;
  setFilterBarrio: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filterArea,
  setFilterArea,
  filterBarrio,
  setFilterBarrio,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-end justify-center">
      {/* Área */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Áreas de interés
        </label>
        <select
          value={filterArea}
          onChange={(e) => setFilterArea(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
        >
          <option value="">Todas las áreas</option>
          <option value="Deportes">Disponible</option>
          <option value="Recreación">No disponible</option>
        </select>
      </div>

      {/* Barrios */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Barrios
        </label>
        <select
          value={filterBarrio}
          onChange={(e) => setFilterBarrio(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
        >
          <option value="todos">Todos los barrios</option>
          <option value="Rosales">Rosales</option>
          <option value="San Antonio de Prado">San Antonio de Prado</option>
          <option value="Cataluña">Cataluña</option>
        </select>
      </div>

      {/* Buscar */}
      <div className="flex-grow relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del escenario deportivo
        </label>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
        <svg
          className="absolute right-3 top-9 w-5 h-5 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default FilterBar;
