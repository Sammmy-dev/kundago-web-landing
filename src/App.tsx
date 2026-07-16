import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import { RiGlobalLine, RiShip2Line } from 'react-icons/ri'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact', href: '#footer' },
  { label: 'FAQ', href: '#faq' },
]

const stats = [
  { label: 'Order delivered', value: '50k+' },
  { label: 'Active users', value: '12k+' },
  { label: 'On-time rate', value: '98%' },
]

const features = [
  {
    title: 'Fast Delivery',
    description: 'Receive your orders quickly, on time, every time with real-time updates, streamlined dispatch, and dependable arrival windows designed to fit your routine.',
    icon: <RiShip2Line className="h-5 w-5 text-emerald-600" />,
    accent: 'bg-emerald-100',
    layoutClass: 'md:col-span-1 xl:col-span-7',
  },
  {
    title: 'Secure Payments',
    description: 'Pay safely with trusted methods, encrypted transactions, and flexible checkout choices that make every purchase feel protected and effortless.',
    icon: <AiOutlineSafetyCertificate className="h-5 w-5 text-rose-500" />,
    accent: 'bg-rose-100',
    layoutClass: 'md:col-span-1 xl:col-span-5',
  },
  {
    title: 'Wide Selection',
    description: 'Explore a broad range of essentials from groceries and household items to electronics, all curated in one place for simpler shopping decisions.',
    icon: <BiShoppingBag className="h-5 w-5 text-emerald-600" />,
    accent: 'bg-slate-100',
    layoutClass: 'md:col-span-1 xl:col-span-5',
  },
  {
    title: 'Trusted by Users',
    description: 'Join thousands of happy customers who rely on KundaGo for consistent service, transparent support, and a shopping experience they keep coming back to.',
    icon: <FaStar className="h-5 w-5 text-emerald-600" />,
    accent: 'bg-emerald-50',
    layoutClass: 'md:col-span-1 xl:col-span-7',
  },
  {
    title: 'International Shipping',
    description: 'Ship across borders with reliable tracking, predictable delivery planning, and support that helps your packages move smoothly from checkout to destination.',
    icon: <RiGlobalLine className="h-5 w-5 text-cyan-600" />,
    accent: 'bg-cyan-100',
    layoutClass: 'md:col-span-1 xl:col-span-12',
  },
]

const faqs = [
  {
    question: 'How quickly can I receive my order?',
    answer: 'Delivery times vary by location and item type, but KundaGo focuses on fast dispatch and clear tracking so you always know where your order stands.',
  },
  {
    question: 'Is it safe to pay through the app?',
    answer: 'Yes. We use secure payment methods and trusted checkout steps to help keep your transactions protected from start to finish.',
  },
  {
    question: 'Do you deliver to other regions or countries?',
    answer: 'Depending on availability, KundaGo can support regional and international delivery routes with shipment updates and delivery support.',
  },
  {
    question: 'Can I track my package after checkout?',
    answer: 'Absolutely. Once your order is confirmed, you can follow progress through live updates until it reaches your door.',
  },
]

const testimonials = [
  {
    name: 'Awa Jallow',
    role: 'Banjul',
    quote: 'Kunda Go makes my life so much easier fast delivery and everything I need in one app',
    avatar: 'https://images.unsplash.com/photo-1562173650-f61426fbe683?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtYmlhbiUyMG1hbnxlbnwwfHwwfHx8Mg%3D%3D',
  },
  {
    name: 'Ousman Sarr',
    role: 'Serekunda',
    quote: 'Reliable and intuitive. Shopping has never been this simple!',
    avatar: 'https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Fatou Bah',
    role: 'Bakau',
    quote: 'The order tracking is spot on. I always know exactly when my groceries arrive',
    avatar: 'https://images.unsplash.com/photo-1672760580588-17fb288ec41b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdhbWJpYW4lMjBtYW58ZW58MHx8MHx8fDI%3D',
  },
]

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const heroContentRef = useRef<HTMLDivElement | null>(null)
  const heroImageRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const featuresRef = useRef<HTMLElement | null>(null)
  const faqRef = useRef<HTMLElement | null>(null)
  const testimonialsRef = useRef<HTMLElement | null>(null)

  useGSAP(() => {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

    heroTimeline
      .fromTo(heroContentRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(heroImageRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.85 }, '-=0.55')

    const revealSections = [aboutRef.current, featuresRef.current, faqRef.current, testimonialsRef.current].filter(Boolean) as HTMLElement[]
    gsap.fromTo(
      revealSections,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 88%',
          once: true,
        },
      },
    )

    gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 93%',
            once: true,
          },
        },
      )
    })

    gsap.utils.toArray<HTMLElement>('.faq-item').forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: index * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            once: true,
          },
        },
      )
    })

    gsap.utils.toArray<HTMLElement>('.testimonial-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            once: true,
          },
        },
      )
    })
  })

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#ecf8eb] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 font-black text-slate-900 transition duration-200 hover:scale-[1.02]">
            <img src="/navbar-logo.png" alt="KundaGo logo" className="h-10 w-10 object-contain transition duration-200 hover:rotate-3" />
            <span className="text-xl font-black tracking-tight transition duration-200 hover:text-emerald-700">
              <span className="text-emerald-700">Kunda</span>
              <span className="text-red-600">Go</span>
            </span>
          </a>

          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="text-xl font-semibold">{mobileMenuOpen ? '×' : '☰'}</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-3 py-2 transition hover:bg-emerald-50 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="flex flex-col gap-5 md:flex-row lg:items-center md:h-[600px] overflow-hidden">
          <div ref={heroContentRef} className="space-y-6 flex-1 flex justify-end flex-col h-full lg:max-w-xl">
            <div className="flex items-center gap-2 w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/80">
              <span className="flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-white">
                <FaStar className="h-3.5 w-3.5" />
                4.5
              </span>
              star reviews
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
                <span className="text-emerald-700">Kunda</span>
                <span className="text-red-600">Go</span>
                <br />
                Shop Smart.
                <br />
                Deliver Fast.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-700">
                Reliable online shopping and delivery, straight to your door. Discover how KundaGo makes shopping effortless, safe, and convenient.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-[10%] sm:flex-row">
              <a href="#download" className="flex items-center justify-center gap-3 rounded-3xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 hover:-translate-y-0.5">
                <FaApple className="h-5 w-5" />
                Download on Apple Store
              </a>
              <a href="#download" className="flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:-translate-y-0.5">
                <FaGooglePlay className="h-5 w-5 text-slate-900" />
                Download on Google Play
              </a>
            </div>
          </div>

          <div ref={heroImageRef} className="relative flex items-end flex-1 h-full">
            <img src="/hero-image.png" alt="KundaGo mobile experience" className="w-full object-cover" />
          </div>
        </section>

        <section ref={aboutRef} id="about-us" className="relative mt-24 overflow-hidden py-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="relative w-full h-full max-md:order-last">
              <img src="/landscape-behind-man-with-box.png" alt="Background landscape" className="w-full h-full object-cover" />
              <img
                src="/man-with-box.png"
                alt="KundaGo delivery partner"
                className="absolute bottom-0 w-[100%] left-1/3 w-4/5 -translate-x-1/2"
              />
            </div>
            <div className="space-y-6 text-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">About KundaGo</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Shopping convenience,
                <br />
                delivered to your door
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-700">
                KundaGo is your trusted online shopping and delivery platform, designed to save you time and make your life easier. Whether you’re ordering groceries, household items, or essentials for your business, KundaGo ensures a seamless and reliable experience.
                Our mission is to combine technology, trust, and convenience to bring everything you need right to your fingertips.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card rounded-[1.5rem] border border-slate-200 px-3 py-4 text-center">
                    <p className="text-2xl font-black tracking-tight text-emerald-600 sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={featuresRef} id="why-kundago" className="mt-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">WHY KundaGo</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Built for the way you shop today</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700">Everything you need in one app fast, safe, and simple to use.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
            {features.map((feature) => (
              <div key={feature.title} className={`feature-card min-h-[220px] rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${feature.accent} ${feature.layoutClass}`}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section ref={faqRef} id="faq" className="mt-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">FAQ</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Everything you need to know</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700">Quick answers to the most common questions about shopping, delivery, and support with KundaGo.</p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div key={faq.question} className="faq-item rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-emerald-100 text-lg font-semibold text-emerald-700">
                        ?
                      </div>
                      <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                    </div>
                    <span className="text-2xl font-semibold text-emerald-700">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200 px-6 py-5">
                      <p className="text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <section ref={testimonialsRef} id="testimonials" className="mt-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Testimonials</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">What our users say</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card group relative overflow-hidden rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 px-6 py-8 text-white shadow-[0_24px_80px_-24px_rgba(6,95,70,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-20px_rgba(6,95,70,0.55)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_40%)]" />
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={item.avatar} alt={item.name} className=" min-h-12 min-w-12 h-12 w-12 rounded-full border-2 border-white/40 object-cover" />
                      <div>
                        <p className="font-semibold tracking-wide">{item.name}</p>
                        <p className="text-sm text-emerald-100/90">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-yellow-300">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur-sm">
                    <p className="text-sm leading-7 text-[#dff6e8]">“{item.quote}”</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="footer" className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
          <span className="select-none text-[clamp(3.5rem,10vw,8rem)] font-black uppercase tracking-[0.3em] text-[#ecf8eb] sm:block hidden opacity-30">
            KundaGo
          </span>
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3 transition duration-200 hover:scale-[1.02]">
              <img src="/footer-logo.png" alt="KundaGo footer logo" className="h-10 w-10 object-contain transition duration-200 hover:rotate-3" />
              <span className="text-xl font-semibold text-white transition duration-200 hover:text-emerald-400">KundaGo</span>
            </div>
            <p className="max-w-sm text-sm text-slate-400">
              KundaGo — Shop Smart Deliver Fast. Your trusted shopping & delivery companion.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-400">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Quick Links</p>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms-and-conditions" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Get the App</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="flex items-center justify-center gap-3 rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                <FaApple className="h-5 w-5" />
                Apple Store
              </a>
              <a
                href="#download"
                className="flex items-center justify-center gap-3 rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <FaGooglePlay className="h-5 w-5" />
                Google Play
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
