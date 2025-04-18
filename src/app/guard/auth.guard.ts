import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  let login = false;
  authService.getAuthToken().subscribe((value) => (login = value));
  console.log(login);
  if (!login) {
    router.navigateByUrl('login');
    return login;
  }
  return login;
};
