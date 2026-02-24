<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions for ERP modules
        $permissions = [
            // User management
            'view users',
            'create users',
            'edit users',
            'delete users',
            
            // Role management
            'view roles',
            'create roles',
            'edit roles',
            'delete roles',
            
            // ERP Modules
            'view inventory',
            'manage inventory',
            'view sales',
            'manage sales',
            'view purchases',
            'manage purchases',
            'view reports',
            'manage reports',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Create roles and assign permissions
        $superAdmin = Role::create(['name' => 'Super Admin']);
        $superAdmin->givePermissionTo(Permission::all());

        $admin = Role::create(['name' => 'Admin']);
        $admin->givePermissionTo([
            'view users', 'create users', 'edit users',
            'view roles',
            'view inventory', 'manage inventory',
            'view sales', 'manage sales',
            'view purchases', 'manage purchases',
            'view reports',
        ]);

        $manager = Role::create(['name' => 'Manager']);
        $manager->givePermissionTo([
            'view users',
            'view inventory', 'manage inventory',
            'view sales', 'manage sales',
            'view purchases',
            'view reports',
        ]);

        $employee = Role::create(['name' => 'Employee']);
        $employee->givePermissionTo([
            'view inventory',
            'view sales',
            'view purchases',
        ]);

        // Create default super admin user
        $user = User::create([
            'name' => 'Super Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);
        $user->assignRole('Super Admin');
    }
}

