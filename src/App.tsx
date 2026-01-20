import { useState } from 'react'
import { Globe } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

type Language = 'spanish' | 'chinese'

interface Phrase {
  english: string
  spanish: string
  spanishPhonetic: string
  chinese: string
  chinesePhonetic: string
}

const phrases: Phrase[] = [
  {
    english: 'How many meals?',
    spanish: '¿Cuántas comidas?',
    spanishPhonetic: 'KWAN-tahs koh-MEE-dahs',
    chinese: '几顿饭？',
    chinesePhonetic: 'jee DWUN fahn',
  },
  {
    english: '1 meal or 2 meals?',
    spanish: '¿Una comida o dos comidas?',
    spanishPhonetic: 'OO-nah koh-MEE-dah oh dohs koh-MEE-dahs',
    chinese: '一顿饭还是两顿饭？',
    chinesePhonetic: 'ee DWUN fahn HIGH-shir lee-AHNG DWUN fahn',
  },
  {
    english: 'What is your first name?',
    spanish: '¿Cuál es su primer nombre?',
    spanishPhonetic: 'kwahl ehs soo pree-MEHR NOHM-breh',
    chinese: '你的名字叫什么？',
    chinesePhonetic: 'nee duh MING-zir jee-OW shun-muh',
  },
  {
    english: 'What is your last name?',
    spanish: '¿Cuál es su apellido?',
    spanishPhonetic: 'kwahl ehs soo ah-peh-YEE-doh',
    chinese: '你的姓氏是什么？',
    chinesePhonetic: 'nee duh SHING-shir shir shun-muh',
  },
  {
    english: 'Can you spell it out for me?',
    spanish: '¿Puede deletrearlo para mí?',
    spanishPhonetic: 'PWEH-deh deh-leh-treh-AHR-loh PAH-rah mee',
    chinese: '你能拼给我听吗？',
    chinesePhonetic: 'nee nung PEEN gay wor TING mah',
  },
  {
    english: '1 person at a time only',
    spanish: 'Una persona a la vez solamente',
    spanishPhonetic: 'OO-nah pehr-SOH-nah ah lah vehs soh-lah-MEN-teh',
    chinese: '一次只能一个人',
    chinesePhonetic: 'ee tsuh ZHIR nung ee guh REN',
  },
  {
    english: 'Thank you',
    spanish: 'Gracias',
    spanishPhonetic: 'GRAH-see-ahs',
    chinese: '谢谢',
    chinesePhonetic: 'shee-eh shee-eh',
  },
  {
    english: 'Good morning',
    spanish: 'Buenos días',
    spanishPhonetic: 'BWEH-nohs DEE-ahs',
    chinese: '早上好',
    chinesePhonetic: 'ZOW-shahng HOW',
  },
]

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('spanish')

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
          <div className="space-y-4 pr-4">
            {phrases.map((phrase, index) => (
              <Card
                key={index}
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
        </ScrollArea>
      </div>
    </div>
  )
}

export default App