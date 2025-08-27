import {
  TrendingUp,
  Users,
  FileText,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function DashboardPage() {
  // Datos mock para mostrar (después los conectaremos con la API)
  const stats = [
    {
      name: "Primas Totales",
      value: "$71,400",
      change: "+12%",
      changeType: "increase",
      icon: DollarSign,
    },
    {
      name: "Pólizas Activas",
      value: "5",
      change: "+1",
      changeType: "increase",
      icon: FileText,
    },
    {
      name: "Clientes Totales",
      value: "4",
      change: "+2",
      changeType: "increase",
      icon: Users,
    },
    {
      name: "Tasa de Renovación",
      value: "94%",
      change: "-2%",
      changeType: "decrease",
      icon: TrendingUp,
    },
  ];

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Resumen de métricas y rendimiento
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow-sm rounded-lg overflow-hidden border border-gray-200"
            >
              <div>
                <div className="absolute bg-blue-500 rounded-md p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </p>
              </div>
              <div className="ml-16 pb-6 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.changeType === "increase" ? (
                    <ArrowUpRight className="self-center flex-shrink-0 h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="self-center flex-shrink-0 h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {stat.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by
                  </span>
                  {stat.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick actions and recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick actions */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Acciones Rápidas
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-sm font-medium text-blue-900">
                    Nueva Póliza
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-blue-600" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="ml-3 text-sm font-medium text-green-900">
                    Agregar Cliente
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-green-600" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <span className="ml-3 text-sm font-medium text-purple-900">
                    Ver Reportes
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-purple-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Recent policies */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Pólizas Recientes
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    AUTO-2024-001
                  </p>
                  <p className="text-xs text-gray-500">Roberto Silva</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">$18,500</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Activa
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    VIDA-2024-003
                  </p>
                  <p className="text-xs text-gray-500">Diego López</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">$8,500</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Activa
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    HOG-2024-002
                  </p>
                  <p className="text-xs text-gray-500">Laura Fernández</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">$12,300</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Activa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
