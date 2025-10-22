import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const ageNorms = [
    { age: 'До 2 лет', time: '0 минут', desc: 'Просмотр не рекомендуется', icon: 'Baby', color: 'bg-red-100 text-red-800' },
    { age: '2-3 года', time: 'До 15 минут', desc: 'Только качественный контент', icon: 'Smile', color: 'bg-orange-100 text-orange-800' },
    { age: '3-5 лет', time: '20-30 минут', desc: 'С перерывами', icon: 'Heart', color: 'bg-yellow-100 text-yellow-800' },
    { age: '5-7 лет', time: '30-40 минут', desc: 'В день, с обсуждением', icon: 'Star', color: 'bg-green-100 text-green-800' },
  ];

  const safetyRules = [
    { title: 'Смотрите вместе', desc: 'Обсуждайте сюжет и героев', icon: 'Users' },
    { title: 'Контролируйте контент', desc: 'Выбирайте возрастные мультфильмы', icon: 'Shield' },
    { title: 'Делайте перерывы', desc: 'Каждые 15-20 минут паузы', icon: 'Clock' },
    { title: 'Правильное расстояние', desc: 'Не менее 2-3 метров от экрана', icon: 'Eye' },
    { title: 'Хорошее освещение', desc: 'Не смотрите в темноте', icon: 'Sun' },
    { title: 'Время суток', desc: 'Не перед сном', icon: 'Moon' },
  ];

  const contentTips = [
    { title: 'Обучающие', desc: 'Развивают внимание, память, мышление', example: 'Фиксики, Уроки тётушки Совы', icon: 'BookOpen' },
    { title: 'Добрые сюжеты', desc: 'Учат дружбе, взаимопомощи', example: 'Маша и Медведь, Лунтик', icon: 'Heart' },
    { title: 'Без агрессии', desc: 'Избегайте жестоких сцен', example: 'Смешарики, Три кота', icon: 'ShieldCheck' },
  ];

  const practicalAdvice = [
    'Установите чёткое расписание просмотра',
    'Используйте просмотр как поощрение, а не основное развлечение',
    'Предлагайте альтернативы: игры, прогулки, творчество',
    'Обсуждайте поступки героев, задавайте вопросы',
    'Следите за реакцией ребёнка на контент',
    'Будьте примером — ограничьте своё экранное время',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4 p-4 bg-gradient-to-r from-[#2E5B8C] to-[#F4A460] rounded-full">
            <Icon name="Tv" size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E5B8C] mb-3">
            Безопасный просмотр мультфильмов
          </h1>
          <p className="text-lg text-gray-600">Памятка для родителей дошкольников</p>
        </header>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#2E5B8C] rounded-lg">
              <Icon name="Clock" size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#2E5B8C]">Нормы времени просмотра</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ageNorms.map((norm, idx) => (
              <Card key={idx} className="hover-scale border-2 border-[#F4A460]/20 hover:border-[#F4A460] transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Icon name={norm.icon as any} size={32} className="text-[#F4A460]" />
                    <Badge className={norm.color}>{norm.age}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#2E5B8C]">{norm.time}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{norm.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#F4A460] rounded-lg">
              <Icon name="ShieldCheck" size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#2E5B8C]">Правила безопасного просмотра</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyRules.map((rule, idx) => (
              <Card key={idx} className="hover-scale bg-white/80 backdrop-blur border-2 border-[#2E5B8C]/10 hover:border-[#2E5B8C]/30 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#2E5B8C] to-[#F4A460] rounded-xl">
                      <Icon name={rule.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#2E5B8C] mb-1">{rule.title}</h3>
                      <p className="text-sm text-gray-600">{rule.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#2E5B8C] rounded-lg">
              <Icon name="Film" size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#2E5B8C]">Рекомендации по выбору контента</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {contentTips.map((tip, idx) => (
              <Card key={idx} className="hover-scale border-2 border-[#F4A460]/30 bg-gradient-to-br from-white to-orange-50/50">
                <CardHeader>
                  <div className="mb-3 p-4 bg-[#F4A460] rounded-full w-fit">
                    <Icon name={tip.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#2E5B8C]">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{tip.desc}</p>
                  <div className="p-3 bg-white rounded-lg border-l-4 border-[#F4A460]">
                    <p className="text-sm font-medium text-gray-600">Примеры:</p>
                    <p className="text-sm text-[#2E5B8C]">{tip.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#F4A460] rounded-lg">
              <Icon name="Lightbulb" size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#2E5B8C]">Практические советы родителям</h2>
          </div>
          <Card className="bg-gradient-to-br from-[#2E5B8C] to-[#F4A460] text-white border-0">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {practicalAdvice.map((advice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white/10 rounded-lg backdrop-blur">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-white/95">{advice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-12 text-center p-6 bg-white/60 backdrop-blur rounded-xl border border-[#2E5B8C]/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon name="Heart" size={24} className="text-[#F4A460]" />
            <p className="text-lg font-semibold text-[#2E5B8C]">Помните: живое общение важнее экрана!</p>
          </div>
          <p className="text-sm text-gray-600">
            Материал подготовлен для родителей воспитанников ДОУ
          </p>
        </footer>
      </div>
    </div>
  );
}