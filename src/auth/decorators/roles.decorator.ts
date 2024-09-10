import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/roles/entities/role.entity'; 

// export const ROLES_KEY = 'roles';
// export const Roles = (role: Role) => SetMetadata(ROLES_KEY, role);

export const ROLES_KEY = 'roles';
export const Roles = (rank: number) => SetMetadata(ROLES_KEY, rank);