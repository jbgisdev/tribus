# Tribus

Una aplicación web moderna para conectar personas con intereses similares a través de eventos y comunidades. Inspirada en Meetup, construida con Angular 19+, PrimeNG y Tailwind CSS.

![Tribus](public/images/login-hero.png)

## 🚀 Características

- **Exploración de Eventos**: Navega por eventos culturales, tecnológicos, de negocios y más
- **Detalles Completos**: Visualiza información detallada de cada evento con mapas integrados
- **Autenticación**: Sistema de login con soporte para Google (simulado)
- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio
- **Interfaz Premium**: Diseño moderno con animaciones suaves y efectos visuales
- **Localización**: Completamente en español

## 🛠️ Stack Tecnológico

- **Framework**: Angular 19+ (Standalone Components, Signals)
- **UI Components**: PrimeNG 21+ (Aura Theme)
- **Estilos**: Tailwind CSS 3
- **Iconos**: PrimeIcons
- **Tipografía**: Inter (Google Fonts)
- **Validación**: Reactive Forms con validadores integrados

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd Tribus

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── core/                 # Servicios y modelos centrales
│   │   ├── guards/          # Guards de autenticación
│   │   ├── models/          # Interfaces TypeScript
│   │   └── services/        # AuthService, EventService
│   ├── features/            # Módulos de características
│   │   ├── auth/           # Login y autenticación
│   │   ├── event-detail/   # Página de detalle de evento
│   │   ├── home/           # Página principal
│   │   └── profile/        # Perfil de usuario (protegido)
│   └── shared/             # Componentes compartidos
│       └── components/     # Header, Footer, EventCard
├── public/                 # Recursos estáticos
│   └── images/            # Imágenes de la aplicación
└── styles.css             # Estilos globales
```

## 🎨 Características de Diseño

- **Mobile-First**: Diseño optimizado primero para dispositivos móviles
- **Tema Oscuro**: Soporte completo para modo oscuro
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Accesibilidad**: Contraste optimizado y navegación por teclado
- **Glassmorphism**: Efectos modernos de vidrio esmerilado

## 🔒 Autenticación

El sistema de autenticación actual es una simulación (mock) que utiliza localStorage:

- **Login con Email**: Validación de formato de correo electrónico
- **Login con Google**: Simulación de OAuth
- **Usuario Demo**: Acceso rápido con credenciales predefinidas
- **Rutas Protegidas**: Guard que protege el perfil de usuario

## 🗺️ Eventos Destacados

La aplicación incluye eventos de ejemplo en varias categorías:

- **Tecnología**: Charlas técnicas, workshops
- **Cultura**: Carnaval de Barranquilla 2026
- **Diseño**: Meetups de diseño UX/UI
- **Negocios**: Networking y emprendimiento
- **Social**: Eventos comunitarios

## 📱 Comandos Disponibles

```bash
# Desarrollo
npm start              # Inicia servidor de desarrollo
npm run build          # Compila para producción
npm test               # Ejecuta tests con Vitest

# Linting
npm run lint           # Verifica código con ESLint
```

## 🌐 Navegación

- `/` - Página principal con listado de eventos
- `/event/:id` - Detalle de evento específico
- `/login` - Página de inicio de sesión
- `/profile` - Perfil de usuario (requiere autenticación)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios usando Conventional Commits (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Autor

Desarrollado por Jaime Buelvas como Prueba Técnica para D2D.

---

**Nota**: Esta es una aplicación de demostración. Los datos de eventos y usuarios son simulados.
