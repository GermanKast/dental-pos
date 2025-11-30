import { PageProps } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Eye, Truck, RotateCcw, Shield } from 'lucide-react';

export default function OpticaLanding({ auth }: PageProps ) {

  const products = [
    {
      id: 1,
      name: 'Gafas de Sol Clásicas',
      category: 'Sol',
      price: '$89.99',
      image: '🕶️',
      description: 'Protección UV100% con estilo atemporal'
    },
    {
      id: 2,
      name: 'Gafas Gaming Pro',
      category: 'Gaming',
      price: '$129.99',
      image: '👾',
      description: 'Reduce fatiga ocular con filtro azul'
    },
    {
      id: 3,
      name: 'Gafas Progresivas',
      category: 'Graduadas',
      price: '$199.99',
      image: '👓',
      description: 'Visión clara a cualquier distancia'
    },
    {
      id: 4,
      name: 'Gafas Deportivas',
      category: 'Deportivas',
      price: '$159.99',
      image: '🏃',
      description: 'Resistentes y con máxima comodidad'
    }
  ];

  const testimonials = [
    {
      name: 'María García',
      role: 'Profesional',
      text: 'Excelente servicio. Las gafas progresivas son perfectas para mi trabajo.'
    },
    {
      name: 'Carlos López',
      role: 'Desarrollador',
      text: 'Las gafas gaming han mejorado mucho mi productividad. Recomendado 100%.'
    },
    {
      name: 'Ana Martínez',
      role: 'Atleta',
      text: 'Gafas deportivas de calidad superior. No cambio de marca.'
    }
  ];

  const features = [
    {
      icon: Eye,
      title: 'Examen Gratis',
      description: 'Revisión oftalmológica completa sin costo'
    },
    {
      icon: Truck,
      title: 'Envío Rápido',
      description: 'Entrega en 24-48 horas a toda España'
    },
    {
      icon: RotateCcw,
      title: 'Devoluciones',
      description: '30 días para cambios sin preguntas'
    },
    {
      icon: Shield,
      title: 'Garantía 2 Años',
      description: 'Protección contra defectos de fabricación'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            👁️ VisionPro
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#productos" className="text-gray-700 hover:text-blue-600 transition">Productos</a>
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition">Beneficios</a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
            {
                auth.user ? (
                    <a href={route('dashboard')} className="text-gray-700 hover:text-blue-600 transition">Dashboard</a>
                ) : (
                    <>
                        <a href={route('login')} className="text-gray-700 hover:text-blue-600 transition">Iniciar Sesión</a>
                        <a href={route('register')} className="text-gray-700 hover:text-blue-600 transition">Registrarse</a>
                    </>
                )
            }
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Comprar Ahora</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Ve el Mundo con Claridad
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Descubre nuestra colección premium de gafas diseñadas para tu estilo de vida. Desde gafas de sol hasta progresivas, tenemos la solución perfecta para ti.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
                Explorar Catálogo
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Agendar Cita
              </Button>
            </div>
          </div>
          <div className="text-center text-9xl">
            😎
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Nuestros Productos
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Encuentra la gafa perfecta para tu necesidad
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition transform hover:scale-105">
                <CardHeader className="text-center pb-2">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Añadir</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="beneficios" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para mejorar tu visión?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Obtén un descuento del 15% en tu primera compra. Código: VISION15
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
            Comprar Ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">VisionPro</h4>
            <p className="text-gray-400">Tu tienda de óptica de confianza desde 2015.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Gafas de Sol</a></li>
              <li><a href="#" className="hover:text-white transition">Gafas Graduadas</a></li>
              <li><a href="#" className="hover:text-white transition">Gafas Gaming</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-gray-400">
              📧 info@visionpro.es<br/>
              📞 +34 912 345 678<br/>
              📍 Madrid, España
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VisionPro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}