import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  // 1. Crear usuarios/asesores
  const admin = await prisma.user.create({
    data: {
      name: "Carlos Rodríguez",
      email: "carlos@seguros.com",
      role: "ADMIN",
    },
  });

  const manager = await prisma.user.create({
    data: {
      name: "María González",
      email: "maria@seguros.com",
      role: "MANAGER",
    },
  });

  const asesor1 = await prisma.user.create({
    data: {
      name: "Juan Pérez",
      email: "juan@seguros.com",
      role: "ASESOR",
    },
  });

  const asesor2 = await prisma.user.create({
    data: {
      name: "Ana Martín",
      email: "ana@seguros.com",
      role: "ASESOR",
    },
  });

  // 2. Crear clientes
  const clientes = await Promise.all([
    prisma.client.create({
      data: {
        name: "Roberto Silva",
        email: "roberto.silva@email.com",
        phone: "+54 9 11 1234-5678",
        dni: "12345678",
        address: "Av. Corrientes 1234, CABA",
        birthDate: new Date("1985-03-15"),
      },
    }),
    prisma.client.create({
      data: {
        name: "Laura Fernández",
        email: "laura.fernandez@email.com",
        phone: "+54 9 11 2345-6789",
        dni: "23456789",
        address: "San Martín 567, Palermo",
        birthDate: new Date("1978-07-22"),
      },
    }),
    prisma.client.create({
      data: {
        name: "Diego López",
        email: "diego.lopez@email.com",
        phone: "+54 9 11 3456-7890",
        dni: "34567890",
        address: "Rivadavia 890, Flores",
        birthDate: new Date("1992-11-08"),
      },
    }),
    prisma.client.create({
      data: {
        name: "Carmen Ruiz",
        email: "carmen.ruiz@email.com",
        phone: "+54 9 11 4567-8901",
        dni: "45678901",
        address: "Belgrano 321, Villa Urquiza",
        birthDate: new Date("1965-04-12"),
      },
    }),
  ]);

  console.log("✅ Usuarios y clientes creados");

  // 3. Crear pólizas con datos realistas
  const polizas = await Promise.all([
    // Roberto Silva - Seguro de Auto
    prisma.policy.create({
      data: {
        policyNumber: "AUTO-2024-001",
        type: "AUTO",
        premium: 18500,
        coverage: 1200000,
        commission: 1850, // 10% de comisión
        startDate: new Date("2024-01-15"),
        endDate: new Date("2025-01-15"),
        status: "ACTIVE",
        paymentFrequency: "MONTHLY",
        clientId: clientes[0].id,
        advisorId: asesor1.id,
      },
    }),

    // Laura Fernández - Seguro de Hogar
    prisma.policy.create({
      data: {
        policyNumber: "HOG-2024-002",
        type: "HOGAR",
        premium: 12300,
        coverage: 850000,
        commission: 1230,
        startDate: new Date("2024-02-01"),
        endDate: new Date("2025-02-01"),
        status: "ACTIVE",
        paymentFrequency: "QUARTERLY",
        clientId: clientes[1].id,
        advisorId: asesor1.id,
      },
    }),

    // Diego López - Seguro de Vida
    prisma.policy.create({
      data: {
        policyNumber: "VIDA-2024-003",
        type: "VIDA",
        premium: 8500,
        coverage: 2500000,
        commission: 850,
        startDate: new Date("2024-03-10"),
        endDate: new Date("2025-03-10"),
        status: "ACTIVE",
        paymentFrequency: "MONTHLY",
        clientId: clientes[2].id,
        advisorId: asesor2.id,
      },
    }),

    // Carmen Ruiz - Seguro de Salud
    prisma.policy.create({
      data: {
        policyNumber: "SALUD-2024-004",
        type: "SALUD",
        premium: 25000,
        coverage: 500000,
        commission: 2500,
        startDate: new Date("2023-12-01"),
        endDate: new Date("2024-12-01"),
        status: "ACTIVE",
        paymentFrequency: "MONTHLY",
        clientId: clientes[3].id,
        advisorId: asesor2.id,
      },
    }),

    // Más pólizas para Roberto (múltiples seguros)
    prisma.policy.create({
      data: {
        policyNumber: "MOTO-2024-005",
        type: "MOTO",
        premium: 6800,
        coverage: 350000,
        commission: 680,
        startDate: new Date("2024-01-20"),
        endDate: new Date("2025-01-20"),
        status: "ACTIVE",
        paymentFrequency: "ANNUAL",
        clientId: clientes[0].id,
        advisorId: asesor1.id,
      },
    }),

    // Póliza vencida para generar variedad
    prisma.policy.create({
      data: {
        policyNumber: "AUTO-2023-006",
        type: "AUTO",
        premium: 16000,
        coverage: 950000,
        commission: 1600,
        startDate: new Date("2023-06-01"),
        endDate: new Date("2024-06-01"),
        status: "EXPIRED",
        paymentFrequency: "MONTHLY",
        clientId: clientes[1].id,
        advisorId: asesor2.id,
      },
    }),
  ]);

  console.log("✅ Pólizas creadas");

  // 4. Crear métricas mensuales (para el dashboard)
  const metricas = await Promise.all([
    // Enero 2024
    prisma.monthlyMetrics.create({
      data: {
        year: 2024,
        month: 1,
        totalPolicies: 2,
        totalPremium: 25300,
        newClients: 2,
        renewals: 0,
        cancellations: 0,
        advisorId: asesor1.id,
      },
    }),
    // Febrero 2024
    prisma.monthlyMetrics.create({
      data: {
        year: 2024,
        month: 2,
        totalPolicies: 1,
        totalPremium: 12300,
        newClients: 1,
        renewals: 0,
        cancellations: 0,
        advisorId: asesor1.id,
      },
    }),
    // Marzo 2024 - Asesor 2
    prisma.monthlyMetrics.create({
      data: {
        year: 2024,
        month: 3,
        totalPolicies: 1,
        totalPremium: 8500,
        newClients: 1,
        renewals: 0,
        cancellations: 0,
        advisorId: asesor2.id,
      },
    }),
  ]);

  console.log("✅ Métricas mensuales creadas");

  // 5. Mostrar resumen
  const totalClientes = await prisma.client.count();
  const totalPolizas = await prisma.policy.count();
  const totalUsuarios = await prisma.user.count();

  console.log("\n🎉 Seed completado!");
  console.log(`📊 Resumen:`);
  console.log(`   - ${totalUsuarios} usuarios creados`);
  console.log(`   - ${totalClientes} clientes creados`);
  console.log(`   - ${totalPolizas} pólizas creadas`);
  console.log(`   - 3 métricas mensuales creadas`);
}

main()
  .catch((e) => {
    console.error("❌ Error durante el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
