import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-500">Nuestro Pulso</h1>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Crear Cuenta
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Únete a la plataforma de participación ciudadana de Colombia
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="civic-card">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="civic-input"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="civic-input"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="civic-input"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                Ciudad
              </label>
              <div className="mt-1">
                <select id="city" name="city" className="civic-input">
                  <option value="">Selecciona tu ciudad</option>
                  <option value="bogota">Bogotá</option>
                  <option value="medellin">Medellín</option>
                  <option value="cali">Cali</option>
                  <option value="barranquilla">Barranquilla</option>
                  <option value="cartagena">Cartagena</option>
                  <option value="bucaramanga">Bucaramanga</option>
                  <option value="pereira">Pereira</option>
                  <option value="manizales">Manizales</option>
                  <option value="other">Otra</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="civic-input"
                  placeholder="Mínimo 8 caracteres"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Debe contener al menos 8 caracteres, incluir mayúsculas, minúsculas y números
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmar Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="civic-input"
                  placeholder="Repite tu contraseña"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agree" className="text-gray-700">
                  Acepto los{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-500">
                    Términos de Servicio
                  </a>{' '}
                  y la{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-500">
                    Política de Privacidad
                  </a>
                </label>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="newsletter" className="text-gray-700">
                  Quiero recibir actualizaciones sobre nuevas encuestas y eventos cívicos
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="civic-button w-full text-lg py-3"
              >
                Crear Cuenta
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 civic-card bg-blue-50 border-blue-200">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            ¿Por qué crear una cuenta?
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Participa en encuestas y votaciones</li>
            <li>• Envía retroalimentación a autoridades</li>
            <li>• Recibe notificaciones sobre tu comunidad</li>
            <li>• Rastrea el impacto de tus contribuciones</li>
          </ul>
        </div>
      </div>
    </div>
  )
}