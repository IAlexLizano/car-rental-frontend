# 🚗 Car Rental Frontend - Sistema de Alquiler de Vehículos Ecuador

Sistema frontend para la gestión de alquiler de vehículos en Ecuador. Esta aplicación permite a los usuarios buscar, reservar y alquilar vehículos de manera fácil y rápida, mientras que los administradores y empleados pueden gestionar el inventario de vehículos, clientes, reservas y pagos.

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con React y TypeScript que proporciona una interfaz moderna e intuitiva para un sistema de alquiler de vehículos. La aplicación está diseñada para tres tipos de usuarios:

- **Clientes**: Pueden explorar el catálogo de vehículos disponibles, realizar reservas y gestionar sus alquileres.
- **Empleados**: Gestionan clientes, procesan alquileres y devoluciones de vehículos.
- **Administradores**: Control total del sistema incluyendo gestión de vehículos, modelos, empleados y configuración general.

## ✨ Características Principales

- 🔐 **Autenticación de usuarios** - Login, registro y recuperación de contraseña
- 🚙 **Catálogo de vehículos** - Visualización de vehículos disponibles con filtros
- 📝 **Gestión de reservas** - Crear, modificar y cancelar reservas
- 🚘 **Alquiler de vehículos** - Proceso completo de alquiler
- ↩️ **Devolución de vehículos** - Gestión de devoluciones
- 👥 **Gestión de usuarios** - Administración de clientes y empleados
- 🏷️ **Gestión de modelos** - Administración de marcas y modelos de vehículos
- 💳 **Procesamiento de pagos** - Múltiples métodos de pago (Tarjeta de crédito, PayPal, Efectivo)

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| [React](https://reactjs.org/) | Biblioteca de JavaScript para construir interfaces de usuario |
| [TypeScript](https://www.typescriptlang.org/) | Superset tipado de JavaScript |
| [Vite](https://vitejs.dev/) | Herramienta de construcción rápida para desarrollo web |
| [Ant Design](https://ant.design/) | Biblioteca de componentes UI para React |
| [TailwindCSS](https://tailwindcss.com/) | Framework CSS utilitario |
| [React Router](https://reactrouter.com/) | Enrutamiento para aplicaciones React |
| [Axios](https://axios-http.com/) | Cliente HTTP para realizar peticiones al backend |
| [Supabase](https://supabase.com/) | Backend como servicio para almacenamiento |
| [Lucide React](https://lucide.dev/) | Iconos para React |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Notificaciones toast |

## 📁 Estructura del Proyecto

```
src/
├── assets/           # Recursos estáticos (imágenes, logos)
├── auth/             # Componentes de autenticación (login, registro, contraseña)
├── Brand/            # Gestión de marcas de vehículos
├── catalog/          # Catálogo de vehículos
├── common/           # Componentes comunes reutilizables
├── Home/             # Página principal
├── layout/           # Componentes de layout (MainLayout, Sidebar, Header)
├── Model/            # Gestión de modelos de vehículos
├── payments/         # Procesamiento de pagos (tarjeta, PayPal, efectivo)
├── rental/           # Gestión de alquileres
├── reservations/     # Gestión de reservas
├── ReturnVehicle/    # Devolución de vehículos
├── services/         # Servicios de API y lógica de negocio
├── sign-in/          # Registro de usuarios
├── types/            # Definiciones de tipos TypeScript
├── Users/            # Gestión de clientes y empleados
├── utils/            # Funciones utilitarias
└── Vehicles/         # Gestión de vehículos
```

## 🚀 Instalación

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/IAlexLizano/car-rental-frontend.git
   cd car-rental-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (si es necesario)
   - Crear un archivo `.env` basado en `.env.example`
   - Configurar las URLs del backend y credenciales de Supabase

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:5173`

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta el linter ESLint |

## 🔐 Roles de Usuario

La aplicación maneja tres roles con diferentes permisos:

1. **Administrador** (`roleId: 1`)
   - Acceso completo al sistema
   - Gestión de vehículos y modelos
   - Gestión de empleados y clientes

2. **Empleado** (`roleId: 2`)
   - Gestión de clientes
   - Procesamiento de alquileres y devoluciones
   - Gestión de reservas

3. **Cliente** (`roleId: 3`)
   - Ver catálogo de vehículos
   - Realizar reservas
   - Gestionar sus alquileres

## 👥 Colaboradores

Agradecemos a todos los que han contribuido a este proyecto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/IAlexLizano">
        <img src="https://github.com/IAlexLizano.png" width="100px;" alt="Alex Lizano"/><br />
        <sub><b>Alex Lizano</b></sub>
      </a><br />
      <sub>📧 alexsanty10lm@gmail.com</sub><br />
      <sub>💻 Desarrollador Principal</sub>
    </td>
  </tr>
</table>

## 📄 Licencia

Este proyecto es de uso privado.

## 🤝 Contribuir

Si deseas contribuir al proyecto:

1. Haz un Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes alguna pregunta o problema, puedes contactar al desarrollador principal:
- **Email**: alexsanty10lm@gmail.com
- **GitHub**: [@IAlexLizano](https://github.com/IAlexLizano)

---

<p align="center">
  Desarrollado con ❤️ en Ecuador 🇪🇨
</p>
