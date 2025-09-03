import { Users, Mail, Phone, MapPin, Plus, FileText } from "lucide-react";

export default function ClientsPage() {
  // Datos mock de clientes
  const clients = [
    {
      id: "1",
      name: "Roberto Silva",
      email: "roberto.silva@email.com",
      phone: "+54 9 11 1234-5678",
      dni: "12345678",
      address: "Av. Corrientes 1234, CABA",
      policies: ["AUTO-2024-001", "MOTO-2024-005"],
      totalPremium: 25300,
    },
    {
      id: "2",
      name: "Laura Fernández",
      email: "laura.fernandez@email.com",
      phone: "+54 9 11 2345-6789",
      dni: "23456789",
      address: "San Martín 567, Palermo",
      policies: ["HOG-2024-002"],
      totalPremium: 12300,
    },
    {
      id: "3",
      name: "Diego López",
      email: "diego.lopez@email.com",
      phone: "+54 9 11 3456-7890",
      dni: "34567890",
      address: "Rivadavia 890, Flores",
      policies: ["VIDA-2024-003"],
      totalPremium: 8500,
    },
    {
      id: "4",
      name: "Carmen Ruiz",
      email: "carmen.ruiz@email.com",
      phone: "+54 9 11 4567-8901",
      dni: "45678901",
      address: "Belgrano 321, Villa Urquiza",
      policies: ["SALUD-2024-004"],
      totalPremium: 25000,
    },
  ];

  return (
    <div>
      {/* Page header */}
      <div className="sm:flex sm:items-center mb-8">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gestión de clientes y sus pólizas
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Cliente
          </button>
        </div>
      </div>

      {/* Clients grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="px-4 py-5 sm:p-6">
              {/* Client header */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500">DNI: {client.dni}</p>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                  {client.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  {client.phone}
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{client.address}</span>
                </div>
              </div>

              {/* Policies summary */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    Pólizas: {client.policies.length}
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    ${client.totalPremium.toLocaleString()}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {client.policies.map((policy, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {policy.split("-")[0]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-blue-500 transition-colors">
                  Ver Detalles
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Clientes
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {clients.length}
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
                <FileText className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Pólizas Totales
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {clients.reduce(
                      (total, client) => total + client.policies.length,
                      0
                    )}
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
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Promedio por Cliente
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {(
                      clients.reduce(
                        (total, client) => total + client.policies.length,
                        0
                      ) / clients.length
                    ).toFixed(1)}
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
