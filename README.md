# Dongkies Negosyo Center - ERP System

A modern ERP (Enterprise Resource Planning) system built with Laravel, Inertia.js, React, and TypeScript.

## Features

- **User Management**: Complete CRUD operations for users with role assignment
- **Role & Permission Management**: Flexible role-based access control using Spatie Laravel Permission
- **Authentication**: Secure authentication system powered by Laravel Breeze
- **Modern UI**: Dark mode interface with Tailwind CSS
- **Responsive Design**: Mobile-friendly interface for all screen sizes

## Tech Stack

- **Backend**: Laravel 11
- **Frontend**: React 18 with TypeScript
- **Routing**: Inertia.js
- **Styling**: Tailwind CSS 4
- **Authentication**: Laravel Breeze
- **Permissions**: Spatie Laravel Permission

## Requirements

- PHP >= 8.2
- Composer
- Node.js >= 20.19.0
- SQLite or MySQL database

## Installation

1. Clone the repository
2. Copy `.env.example` to `.env` and configure your database
3. Install PHP dependencies:
   ```bash
   composer install
   ```
4. Install Node dependencies:
   ```bash
   npm install
   ```
5. Generate application key:
   ```bash
   php artisan key:generate
   ```
6. Run database migrations and seeders:
   ```bash
   php artisan migrate --seed
   ```
7. Build assets:
   ```bash
   npm run build
   ```

## Running the Application

### Development

Start the development servers:
```bash
# Terminal 1 - Laravel server
php artisan serve

# Terminal 2 - Vite dev server
npm run dev
```

Visit `http://localhost:8000` in your browser.

### Default Credentials

- **Email**: admin@example.com
- **Password**: password

## Default Roles

The system comes with 4 pre-configured roles:

1. **Super Admin** - Full system access
2. **Admin** - Can manage users, inventory, sales, purchases, and view reports
3. **Manager** - Can manage inventory, sales, and view reports
4. **Employee** - Can view inventory, sales, and purchases

## Module Structure

- `/app/Http/Controllers/Admin` - Admin controllers for user and role management
- `/resources/js/Pages/Admin` - React components for admin interfaces
- `/database/seeders` - Database seeders for roles and permissions

## License

This is a proprietary ERP system for Dongkies Negosyo Center.


We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
# boiletplate-test
