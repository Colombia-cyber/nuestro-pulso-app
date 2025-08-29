export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Acerca de Nuestro Pulso
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Una plataforma digital diseñada para fortalecer la participación ciudadana 
            y la democracia en Colombia.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
            <p className="mt-4 text-lg text-gray-600">
              Democratizar el acceso a la participación cívica en Colombia, 
              proporcionando herramientas digitales que permitan a todos los ciudadanos 
              contribuir al desarrollo de sus comunidades y del país.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nuestra Visión</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ser la plataforma líder de participación ciudadana en Colombia, 
              creando puentes efectivos entre la sociedad civil y las instituciones 
              para construir un país más democrático y participativo.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            ¿Por qué Nuestro Pulso?
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="civic-card">
              <h3 className="text-xl font-semibold text-gray-900">Transparencia</h3>
              <p className="mt-2 text-gray-600">
                Proceso abierto y transparente que permite seguimiento de propuestas 
                y retroalimentación gubernamental.
              </p>
            </div>
            <div className="civic-card">
              <h3 className="text-xl font-semibold text-gray-900">Inclusión</h3>
              <p className="mt-2 text-gray-600">
                Diseñado para ser accesible a todos los ciudadanos, 
                independientemente de su nivel tecnológico o ubicación.
              </p>
            </div>
            <div className="civic-card">
              <h3 className="text-xl font-semibold text-gray-900">Impacto Real</h3>
              <p className="mt-2 text-gray-600">
                Conexión directa con autoridades locales y nacionales 
                para generar cambios tangibles en las comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}