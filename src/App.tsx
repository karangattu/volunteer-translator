import { useState } from 'react'
import { Globe } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

type Language = 'spanish' | 'chinese'

type Category = 'Greetings & Farewell' | 'General & Queue' | 'Meal Service' | 'Showers Program'

interface Phrase {
  english: string
  spanish: string
  spanishPhonetic: string
  chinese: string
  chinesePhonetic: string
  category: Category
}

const phrases: Phrase[] = [
  // Greetings & Farewell
  {
    category: 'Greetings & Farewell',
    english: 'Welcome',
    spanish: 'Bienvenido',
    spanishPhonetic: 'byehn-veh-NEE-doh',
    chinese: '欢迎',
    chinesePhonetic: 'hwan-yeeng',
  },
  {
    category: 'Greetings & Farewell',
    english: 'Good morning',
    spanish: 'Buenos días',
    spanishPhonetic: 'BWEH-nohs DEE-ahs',
    chinese: '早上好',
    chinesePhonetic: 'ZOW-shahng HOW',
  },
  {
    category: 'Greetings & Farewell',
    english: 'Thank you',
    spanish: 'Gracias',
    spanishPhonetic: 'GRAH-see-ahs',
    chinese: '谢谢',
    chinesePhonetic: 'shee-eh shee-eh',
  },
  {
    category: 'Greetings & Farewell',
    english: 'Take care',
    spanish: 'Cuídese',
    spanishPhonetic: 'kwee-DEH-seh',
    chinese: '保重',
    chinesePhonetic: 'bow-jong',
  },

  // General & Queue
  {
    category: 'General & Queue',
    english: 'Next in line, please',
    spanish: '¡Siguiente, por favor!',
    spanishPhonetic: 'see-GYEN-teh por fah-VOR',
    chinese: '下一个',
    chinesePhonetic: 'shyah ee guh',
  },
  {
    category: 'General & Queue',
    english: 'Please wait here',
    spanish: 'Por favor, espere aquí',
    spanishPhonetic: 'por fah-VOR ehs-PEH-reh ah-KEE',
    chinese: '请在这里稍等',
    chinesePhonetic: 'ching zai juh-lee shao dung',
  },
  {
    category: 'General & Queue',
    english: '1 person at a time only',
    spanish: 'Una persona a la vez solamente',
    spanishPhonetic: 'OO-nah pehr-SOH-nah ah lah vehs soh-lah-MEN-teh',
    chinese: '一次只能一个人',
    chinesePhonetic: 'ee tsuh ZHIR nung ee guh REN',
  },
  {
    category: 'General & Queue',
    english: 'Please sign in here',
    spanish: 'Por favor, regístrese aquí',
    spanishPhonetic: 'por fah-VOR reh-HEES-treh-seh ah-KEE',
    chinese: '请在这里签到',
    chinesePhonetic: 'ching zai juh-lee chyen-dao',
  },
  {
    category: 'General & Queue',
    english: 'What is your first name?',
    spanish: '¿Cuál es su primer nombre?',
    spanishPhonetic: 'kwahl ehs soo pree-MEHR NOHM-breh',
    chinese: '你的名字叫什么？',
    chinesePhonetic: 'nee duh MING-zir jee-OW shun-muh',
  },
  {
    category: 'General & Queue',
    english: 'What is your last name?',
    spanish: '¿Cuál es su apellido?',
    spanishPhonetic: 'kwahl ehs soo ah-peh-YEE-doh',
    chinese: '你的姓氏是什么？',
    chinesePhonetic: 'nee duh SHING-shir shir shun-muh',
  },
  {
    category: 'General & Queue',
    english: 'Can you spell it out for me?',
    spanish: '¿Puede deletrearlo para mí?',
    spanishPhonetic: 'PWEH-deh deh-leh-treh-AHR-loh PAH-rah mee',
    chinese: '你能拼给我听吗？',
    chinesePhonetic: 'nee nung PEEN gay wor TING mah',
  },

  // Meal Service
  {
    category: 'Meal Service',
    english: 'How many meals?',
    spanish: '¿Cuántas comidas?',
    spanishPhonetic: 'KWAN-tahs koh-MEE-dahs',
    chinese: '几顿饭？',
    chinesePhonetic: 'jee DWUN fahn',
  },
  {
    category: 'Meal Service',
    english: '1 meal or 2 meals?',
    spanish: '¿Una comida o dos comidas?',
    spanishPhonetic: 'OO-nah koh-MEE-dah oh dohs koh-MEE-dahs',
    chinese: '一顿饭还是两顿饭？',
    chinesePhonetic: 'ee DWUN fahn HIGH-shir lee-AHNG DWUN fahn',
  },
  {
    category: 'Meal Service',
    english: 'Enjoy your meal',
    spanish: '¡Buen provecho!',
    spanishPhonetic: 'bwen pro-VEH-choh',
    chinese: '请慢用',
    chinesePhonetic: 'ching man yong',
  },
  {
    category: 'Meal Service',
    english: 'Coffee or water?',
    spanish: '¿Café o agua?',
    spanishPhonetic: 'kah-FEH oh AH-gwah',
    chinese: '咖啡或水?',
    chinesePhonetic: 'kah-fay hwo shway',
  },
  {
    category: 'Meal Service',
    english: 'Vegetarian?',
    spanish: '¿Vegetariano?',
    spanishPhonetic: 'veh-heh-tah-ryah-noh',
    chinese: '素食?',
    chinesePhonetic: 'soo-shRr',
  },

  // Showers Program
  {
    category: 'Showers Program',
    english: 'Do you need a towel?',
    spanish: '¿Necesita una toalla?',
    spanishPhonetic: 'neh-seh-SEE-tah OO-nah toh-AH-yah',
    chinese: '你需要毛巾吗?',
    chinesePhonetic: 'nee shyoo-yaow maow-jeen mah',
  },
  {
    category: 'Showers Program',
    english: 'Soap or Shampoo?',
    spanish: '¿Jabón o champú?',
    spanishPhonetic: 'hah-BOHN oh cham-POO',
    chinese: '肥皂或洗发水?',
    chinesePhonetic: 'fay-zaow hwo shee-fah-shway',
  },
  {
    category: 'Showers Program',
    english: 'Shower is ready',
    spanish: 'La ducha está lista',
    spanishPhonetic: 'lah DOO-chah ehs-TAH LEES-tah',
    chinese: '淋浴准备好了',
    chinesePhonetic: 'leen-yoo jwen-bay hao luh',
  },
  {
    category: 'Showers Program',
    english: 'You have 15 minutes',
    spanish: 'Tiene quince minutos',
    spanishPhonetic: 'TYEH-neh KEEN-seh mee-NOO-tohs',
    chinese: '你有十五分钟',
    chinesePhonetic: 'nee yo shir-woo fun-jong',
  },
  {
    category: 'Showers Program',
    english: 'Time is up',
    spanish: '¡Se acabó el tiempo!',
    spanishPhonetic: 'seh ah-kah-BOH el TYEM-poh',
    chinese: '时间到了',
    chinesePhonetic: 'shir-jen dao luh',
  },
]

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('spanish')

  const categories: Category[] = [
    'Greetings & Farewell',
    'General & Queue',
    'Meal Service',
    'Showers Program',
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Globe size={40} weight="duotone" className="text-primary" />
            <h1 className="text-4xl font-bold text-foreground">
              Volunteer Translation Assistant
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Common phrases to help you communicate with guests
          </p>
        </header>

        <Tabs
          value={selectedLanguage}
          onValueChange={(value) => setSelectedLanguage(value as Language)}
          className="mb-6"
        >
          <TabsList className="grid w-full grid-cols-2 h-14">
            <TabsTrigger value="spanish" className="text-lg font-medium">
              🇪🇸 Spanish
            </TabsTrigger>
            <TabsTrigger value="chinese" className="text-lg font-medium">
              🇨🇳 Chinese
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <ScrollArea className="h-[calc(100vh-280px)]">
          <div className="space-y-6 pr-4">
            {categories.map((category) => (
              <div key={category} className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-border pb-2 sticky top-0 bg-background/95 backdrop-blur z-10">
                  {category}
                </h2>
                <div className="space-y-4">
                  {phrases
                    .filter((p) => p.category === category)
                    .map((phrase, index) => (
                      <Card
                        key={`${category}-${index}`}
                        className="p-6 transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <div className="space-y-3">
                          <div className="text-muted-foreground font-medium">
                            {phrase.english}
                          </div>
                          <div className="text-xl font-semibold text-foreground">
                            {selectedLanguage === 'spanish'
                              ? phrase.spanish
                              : phrase.chinese}
                          </div>
                          <div className="pt-2 border-t border-border">
                            <Badge variant="secondary" className="mb-2 font-normal">
                              Say it like:
                            </Badge>
                            <div className="text-2xl font-mono font-medium text-primary bg-muted px-4 py-3 rounded-lg tracking-wide">
                              {selectedLanguage === 'spanish'
                                ? phrase.spanishPhonetic
                                : phrase.chinesePhonetic}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default App