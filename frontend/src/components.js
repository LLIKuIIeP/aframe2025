import React from "react";

// Header Component
const Header = ({ isMenuOpen, toggleMenu, scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            A-frame.berezki
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Галерея
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Контакты
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Забронировать
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              Галерея
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              Контакты
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left py-2 bg-green-600 text-white px-4 rounded-full hover:bg-green-700 transition-colors"
            >
              Забронировать
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const Hero = ({ scrollToSection }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden hero-parallax">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/32779354/pexels-photo-32779354.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight heading-responsive">
          Глэмпинг А-фрейм Березки
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 text-responsive">
          Панорамные домики в лесу в 75 км от Москвы
        </p>
        <button 
          onClick={() => scrollToSection('booking')}
          className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 btn-animate btn-pulse"
        >
          Забронировать дом
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const features = [
    {
      image: "https://images.pexels.com/photos/9211839/pexels-photo-9211839.jpeg",
      title: "А-фрейм в лесу",
      description: "Уникальные панорамные домики с видом на лес"
    },
    {
      image: "https://images.unsplash.com/photo-1680703486830-1b5af60635d7",
      title: "Уютный интерьер",
      description: "Стильное оформление с камином и всеми удобствами"
    },
    {
      image: "https://images.unsplash.com/photo-1633512424746-0cb5240e064d",
      title: "Банная бочка",
      description: "Сибирская банная бочка для СПА процедур"
    },
    {
      image: "https://images.pexels.com/photos/10481173/pexels-photo-10481173.jpeg",
      title: "Терраса с видом",
      description: "Просторная терраса для отдыха на природе"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              О нашей компании
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-4">
                Аренда панорамных домиков в лесу в 75 км от Москвы, Ступинский район
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Комфортный отдых на природе со всеми удобствами
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Красивые локации для ваших фотографий
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Конные прогулки
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Возможно бронирование на одну ночь
              </p>
              <p className="text-lg text-gray-600">
                Банный чан для СПА-процедур около каждого домика
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${feature.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: "🏠",
      title: "Домики с панорамными окнами",
      description: "Около каждого домика оборудована мангальная площадка"
    },
    {
      icon: "🔥",
      title: "Зона отдыха",
      description: "На территории находятся уютная зона с креслами и столиками вокруг подвесного огня"
    },
    {
      icon: "🚚",
      title: "Доставка продуктов",
      description: "Работают доставки из ближайших кафе, вкусвилл, пятёрочки. Есть возможность доставить к приезду гостей авторские десерты"
    },
    {
      icon: "🌸",
      title: "Дополнительные услуги",
      description: "Доставка цветов, шаров, проведение мастер классов и фотосессий"
    },
    {
      icon: "🐴",
      title: "Развлечения рядом",
      description: "Рядом с домиками находятся конный двор и аэроклуб, платная рыбалка и пасека"
    },
    {
      icon: "🚗",
      title: "Трансфер",
      description: "При необходимости организуем трансфер из Москвы, от станции Малино или Михнево"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Наши услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1571422022609-575e2920c63e",
    "https://images.pexels.com/photos/32793034/pexels-photo-32793034.jpeg",
    "https://images.unsplash.com/photo-1697807713040-b5fb60d6f012",
    "https://images.pexels.com/photos/32862818/pexels-photo-32862818.jpeg",
    "https://images.pexels.com/photos/5359294/pexels-photo-5359294.jpeg",
    "https://images.unsplash.com/photo-1740437260482-7720ee580010",
    "https://images.pexels.com/photos/11502268/pexels-photo-11502268.jpeg",
    "https://images.pexels.com/photos/32779354/pexels-photo-32779354.jpeg"
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Галерея
            </h2>
            <p className="text-lg text-gray-600">
              Посмотрите на наши уютные домики и красивые локации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Booking Section Component
const BookingSection = () => {
  const cabinTypes = [
    {
      name: "Домик с сундуком",
      size: "55 м²",
      capacity: "до 4 гостей",
      features: [
        "Панорамные окна",
        "Сплит-система и теплый пол",
        "Уютная спальня",
        "Стильная ванная комната",
        "Оборудованная кухня",
        "Зона для чтения и отдыха",
        "Проектор и проигрыватель виниловых пластинок",
        "Wi-Fi",
        "Качели и игровой сундук",
        "Терраса с посадочными местами",
        "Зона барбекю и костровище"
      ],
      price: "от 8 000 ₽/сутки"
    },
    {
      name: "Домик с камином",
      size: "55 м²",
      capacity: "до 4 гостей",
      features: [
        "Биокамин",
        "Проектор и Wi-Fi",
        "Сибирская банная бочка",
        "Терраса с посадочными местами",
        "Зона барбекю и костровище",
        "Крытая беседка с обеденной зоной на 8-10 человек",
        "Уютные диваны и качели",
        "Панорамные окна",
        "Оборудованная кухня",
        "Стильная ванная комната"
      ],
      price: "от 10 000 ₽/сутки"
    }
  ];

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Аренда А-Frame дома
            </h2>
            <p className="text-lg text-gray-600">
              Выберите подходящий вариант для вашего отдыха
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cabinTypes.map((cabin, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:bg-gray-100 transition-colors duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{cabin.name}</h3>
                  <p className="text-gray-600 mb-2">{cabin.size} • {cabin.capacity}</p>
                  <p className="text-3xl font-bold text-green-600">{cabin.price}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {cabin.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                  Забронировать
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Что включено в стоимость
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Стильный домик с продуманным до мелочей интерьером</p>
                  <p className="text-gray-600 text-sm">Забота и внимание к гостям в каждой детали</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Вид на лес. Пение птиц. Ягоды и грибы</p>
                  <p className="text-gray-600 text-sm">Единение с природой в комфортных условиях</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Климат-контролируемый сервис</p>
                  <p className="text-gray-600 text-sm">Комфортная температура в любое время года</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Банный чан для купания под открытым небом</p>
                  <p className="text-gray-600 text-sm">Уникальные СПА-процедуры на природе</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Контакты
            </h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для бронирования или получения дополнительной информации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Информация для связи</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Телефон</p>
                    <p className="text-gray-600">+7 926 285 72 45</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Адрес</p>
                    <p className="text-gray-600">
                      Территория Ламоново-1, 835, деревня Ламоново,<br/>
                      Ступинский городской округ, Московская область
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Расстояние от Москвы</p>
                    <p className="text-gray-600">75 км, Ступинский район</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Как добраться</h3>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">На автомобиле</p>
                    <p className="text-gray-600">75 км от Москвы по направлению к Ступино</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">На общественном транспорте</p>
                    <p className="text-gray-600">До станции Малино или Михнево, далее трансфер (организуем по запросу)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Трансфер</p>
                    <p className="text-gray-600">Организуем трансфер из Москвы или от станций по запросу</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">A-frame.berezki</h3>
              <p className="text-gray-400">
                Глэмпинг в А-фрейм домиках в лесу. Комфортный отдых на природе 
                в 75 км от Москвы.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 926 285 72 45</p>
                <p>aframeberezki.ru</p>
                <p>Ступинский район, Московская область</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <p>Аренда А-фрейм домиков</p>
                <p>Банные процедуры</p>
                <p>Организация мероприятий</p>
                <p>Трансфер</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 A-frame.berezki. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Components = {
  Header,
  Hero,
  AboutSection,
  ServicesSection,
  GallerySection,
  BookingSection,
  ContactSection,
  Footer
};