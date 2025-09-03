import { FileText, Filter, Download, Plus } from "lucide-react";

export default function PoliciesPage() {
  // Datos mock (después los conectaremos con la base de datos)
  const policies = [
    {
      id: "1",
      policyNumber: "AUTO-2024-001",
      client: "Roberto Silva",
      type: "AUTO",
      premium: 18500,
      coverage: 1200000,
      status: "ACTIVE",
      startDate: "2024-01-15",
      endDate: "2025-01-15",
      advisor: "Juan Pérez",
    },
    {
      id: "2",
      policyNumber: "HOG-2024-002",
      client: "Laura Fernández",
      type: "HOGAR",
      premium: 12300,
      coverage: 850000,
      status: "ACTIVE",
      startDate: "2024-02-01",
      endDate: "2025-02-01",
      advisor: "Juan Pérez",
    },
    {
      id: "3",
      policyNumber: "VIDA-2024-003",
      client: "Diego López",
      type: "VIDA",
      premium: 8500,
      coverage: 2500000,
      status: "ACTIVE",
      startDate: "2024-03-10",
      endDate: "2025-03-10",
      advisor: "Ana Martín",
    },
    {
      id: "4",
      policyNumber: "AUTO-2023-006",
      client: "Laura Fernández",
      type: "AUTO",
      premium: 16000,
      coverage: 950000,
      status: "EXPIRED",
      startDate: "2023-06-01",
      endDate: "2024-06-01",
      advisor: "Ana Martín",
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === "ACTIVE") {
      return "bg-green-100 text-green-800";
    }
    if (status === "EXPIRED") {
      return "bg-red-100 text-red-800";
    }
    return "bg-gray-100 text-gray-800";
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      AUTO: "bg-blue-100 text-blue-800",
      HOGAR: "bg-purple-100 text-purple-800",
      VIDA: "bg-green-100 text-green-800",
      SALUD: "bg-orange-100 text-orange-800",
      MOTO: "bg-yellow-100 text-yellow-800",
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      {/* Page header */}
      <div className="sm:flex sm:items-center mb-8">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold text-gray-900">Pólizas</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gestión de pólizas de seguros
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Póliza
          </button>
        </div>
      </div>

      {/* Filters and actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex gap-4">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </button>
          <select className="block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option>Todos los tipos</option>
            <option>AUTO</option>
            <option>HOGAR</option>
            <option>VIDA</option>
            <option>SALUD</option>
          </select>
        </div>

        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </button>
      </div>

      {/* Policies table */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Póliza
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prima
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cobertura
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asesor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {policies.map((policy) => (
              <tr key={policy.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {policy.policyNumber}
                      </div>
                      <div className="text-xs text-gray-500">
                        {policy.startDate} - {policy.endDate}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{policy.client}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeBadge(
                      policy.type
                    )}`}
                  >
                    {policy.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${policy.premium.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${policy.coverage.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                      policy.status
                    )}`}
                  >
                    {policy.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {policy.advisor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats summary */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Pólizas
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {policies.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Activas
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {policies.filter((p) => p.status === "ACTIVE").length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Vencidas
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {policies.filter((p) => p.status === "EXPIRED").length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
