import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Wand2",
      title: "Магическая простота",
      description: "Установка за 1 клик. Никаких сложных настроек — просто магия интернета в ваших руках."
    },
    {
      icon: "Shield",
      title: "Непробиваемая защита",
      description: "Ваши данные под надёжной защитой магических заклинаний и современного шифрования."
    },
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Скорость света — это медленно. Наша магия делает интернет ещё быстрее."
    },
    {
      icon: "Globe",
      title: "Весь мир открыт",
      description: "Любая страна, любой контент. Границы существуют только в реальном мире."
    }
  ];

  const faqs = [
    {
      question: "Кто мы?",
      answer: "Мы — команда цифровых волшебников, которые превращают сложные технологии в простую магию. Magic VPN — это наш способ подарить каждому свободу и безопасность в интернете."
    },
    {
      question: "Почему именно Magic VPN?",
      answer: "Потому что мы верим: технологии должны работать как магия — незаметно, эффективно и удивительно просто. Один клик, и весь мир интернета у ваших ног."
    },
    {
      question: "Как это работает?",
      answer: "Наша магия основана на передовых технологиях шифрования и быстрых серверах по всему миру. Но для вас это просто работает — без лишних вопросов и настроек."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-purple-400" size={32} />
            <span className="text-lg font-pixel text-white">Magic VPN</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white hover:text-purple-300">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="ghost" className="text-white hover:text-purple-300">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" className="text-white hover:text-purple-300">
              <Icon name="Users" size={20} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Icon name="Sparkles" className="text-purple-400 animate-pulse" size={60} />
              <Icon name="Shield" className="absolute -top-2 -right-2 text-white" size={24} />
            </div>
          </div>
          
          <h1 className="text-4xl font-pixel text-white mb-6 animate-fade-in">
            Magic VPN
          </h1>
          <p className="text-sm font-pixel text-purple-200 mb-8 animate-fade-in">
            Превращаем интернет в магию. Один клик — и весь мир открыт.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-sm font-pixel">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать магию
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-800 px-8 py-3 text-sm font-pixel">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-pixel text-white mb-4">Почему это магия?</h2>
          <p className="text-purple-200 text-xs font-pixel">Простота использования встречается с мощными возможностями</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-purple-800/50 border-purple-600 hover:bg-purple-800/70 transition-all duration-300 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-purple-400" size={48} />
                </div>
                <h3 className="text-sm font-pixel text-white mb-3">{feature.title}</h3>
                <p className="text-xs font-pixel text-purple-200 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-pixel text-white mb-4">Кто мы и что делаем?</h2>
            <p className="text-purple-200 text-xs font-pixel">Ответы на главные вопросы о Magic VPN</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-purple-600">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left text-sm font-pixel">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-purple-200 text-xs font-pixel leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <Icon name="Sparkles" className="text-purple-400 animate-pulse" size={48} />
          </div>
          <h2 className="text-2xl font-pixel text-white mb-6">Готовы к магии?</h2>
          <p className="text-purple-200 text-xs font-pixel mb-8 leading-relaxed">
            Присоединяйтесь к тысячам пользователей, которые уже открыли для себя магию свободного интернета
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-sm font-pixel">
            <Icon name="Sparkles" className="mr-2" size={24} />
            Начать магию сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Sparkles" className="text-purple-400" size={24} />
              <span className="text-white font-pixel text-sm">Magic VPN</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Icon name="Users" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-purple-400">
            <p className="font-pixel text-xs">© 2024 Magic VPN. Магия доступного интернета.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;