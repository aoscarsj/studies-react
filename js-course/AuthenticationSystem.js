export class AuthenticationSystem {

   static isAuthenticable(authenticable) {
      return "auth" in authenticable && authenticable.auth instanceof Function
   }

   //Duck Type
   static login(authenticable, password) {
      if (AuthenticationSystem.isAuthenticable(authenticable))
         return authenticable.auth(password)
      return false
   }

}