export class AuthenticationSystem {
   static login(authenticable, password) {
      if (isAuthenticable(authenticable))
         return authenticable.auth(password)
      return false
   }
   isAuthenticable(authenticable) {
      return "auth" in authenticable && authenticable.auth instanceof Function
   }
}