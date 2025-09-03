import { BarChart3, TrendingUp, Download, Calendar } from "lucide-react";

export default function ReportsPage() {
  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Reportes y Analytics
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Análisis de rendimiento y métricas de negocio
        </p>
      </div>

      {/* Coming soon message */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-12 text-center">
        <BarChart3 className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          Gráficos Interactivos Próximamente
        </h3>
        <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
          En la próxima fase implementaremos gráficos con Recharts para mostrar:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-blue-50 p-4 rounded-lg">
            <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-blue-900">Ventas por Mes</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <BarChart3 className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-900">
              Tipos de Seguro
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-purple-900">Renovaciones</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <Download className="h-6 w-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-orange-900">
              Exportar Datos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
