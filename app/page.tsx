'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, Instagram, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    autorizzazione: false
  })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui andrebbe implementata la logica per inviare i dati del form
    console.log('Form submitted:', formData)
    // Reset del form dopo l'invio
    setFormData({
      nome: '',
      email: '',
      telefono: '',
      messaggio: '',
      autorizzazione: false
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Barra Recapiti */}
      <div className="bg-gray-100 px-4 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="tel:+390123456789" className="flex items-center space-x-1 text-sm">
              <Phone className="h-4 w-4" />
              <span>+39 0123 456789</span>
            </Link>
            <Link href="mailto:info@casaeditrice.it" className="flex items-center space-x-1 text-sm">
              <Mail className="h-4 w-4" />
              <span>info@casaeditrice.it</span>
            </Link>
          </div>
          <Link href="https://www.instagram.com/casaeditrice" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white px-4 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Logo Casa Editrice
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/servizi" className="hover:text-blue-600">I nostri servizi</Link>
            <Link href="/articoli" className="hover:text-blue-600">Articoli</Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/" className="block py-2 px-4 hover:bg-gray-100">Home</Link>
            <Link href="/servizi" className="block py-2 px-4 hover:bg-gray-100">I nostri servizi</Link>
            <Link href="/articoli" className="block py-2 px-4 hover:bg-gray-100">Articoli</Link>
          </div>
        )}
      </nav>

      {/* Barra Annuncio (solo desktop) */}
      <div className="hidden md:block bg-blue-50 h-[150px] flex items-center justify-center">
        <p className="text-2xl text-blue-800 font-light">
          Finalmente anche in Italia arriva la prima Casa Editrice 3.0
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
          key="background-video"
          suppressHydrationWarning
        >
          <source src="/assets/homepage/home.mp4" type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>

        {/* <iframe 
          className="absolute z-0 w-full h-full"
          src="https://www.youtube.com/embed/2Gg6Seob5Mg?autoplay=1&mute=1&loop=1&playlist=2Gg6Seob5Mg&controls=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe> */}

        <div className="z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">La Tua Storia, Il Nostro Impegno</h1>
          <p className="text-xl md:text-2xl mb-8">Trasformiamo le tue parole in libri indimenticabili</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Pubblica con Noi
          </button>
        </div>
      </section>

      {/* Modulo di Contatto */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                    Nome
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nome"
                    type="text"
                    placeholder="Il tuo nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="La tua email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                    Telefono
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="telefono"
                    type="tel"
                    placeholder="Il tuo numero di telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="messaggio">
                    Messaggio
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="messaggio"
                    placeholder="Il tuo messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="autorizzazione"
                      checked={formData.autorizzazione}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">Autorizzo il trattamento dei miei dati personali</span>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Invia Messaggio
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-4">Benvenuto nella nostra Casa Editrice</h2>
                <h3 className="text-xl mb-2">Trasforma il tuo manoscritto in un bestseller</h3>
                <p className="text-gray-700">
                  Siamo qui per aiutarti a realizzare il tuo sogno di diventare un autore pubblicato.
                  Contattaci oggi stesso per iniziare il tuo viaggio nel mondo dell'editoria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Casa Editrice</h3>
              <p>Trasformiamo le tue storie in libri indimenticabili.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contatti</h3>
              <p>Email: info@casaeditrice.it</p>
              <p>Telefono: +39 0123 456789</p>
              <p>Indirizzo: Via dell'Editoria, 123 - Roma</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Seguici</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/casaeditrice" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://www.twitter.com/casaeditrice" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/casaeditrice" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048  1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400">
            <p>&copy; 2024 Casa Editrice. Tutti i diritti riservati.</p>
            <p>P.IVA: 12345678901 | REA: RM-1234567</p>
          </div>
        </div>
      </footer>
    </div>
  )
}