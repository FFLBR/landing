import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  Users,
} from 'lucide-react';

const STEPS = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Выберите аллергии',
    body: 'Отметьте аллергены в профиле один раз.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Найдите продукт',
    body: 'Ищите товар в каталоге, как обычно.',
  },
  {
    icon: ShoppingCart,
    number: '03',
    title: 'Закажите безопасное',
    body: 'Опасные позиции сразу видны по цвету рейтинга.',
  },
];

const RATING_DOTS = ['bg-safe-500', 'bg-caution-500', 'bg-danger-500'];

export default function SingleScreenLanding() {
  return (
    <main className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-neutral-100 p-2.5 sm:p-4 lg:p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[130%] -translate-x-1/2 rounded-full bg-gradient-to-r from-safe-100 via-white to-caution-50 opacity-80 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-0 w-full max-w-md flex-1 grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto_auto] gap-2.5 md:max-w-3xl md:grid-cols-2 md:grid-rows-[auto_minmax(0,1fr)] md:gap-3 lg:max-w-6xl lg:gap-4">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl bg-neutral-900 p-4 text-white md:col-span-2 md:p-6 lg:p-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
              <ShieldCheck className="h-4 w-4 text-safe-500" strokeWidth={2} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400 md:text-[11px]">
              SafeBite
            </p>
          </div>

          <div className="mt-3 flex flex-col gap-3.5 md:mt-5 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="min-w-0 md:max-w-xl">
              <h1 className="text-balance text-[1.4rem] font-bold leading-[1.12] tracking-tight sm:text-3xl lg:text-[2.5rem]">
                Безопасная еда без риска аллергии за 1&nbsp;секунду
              </h1>
              <p className="mt-2 text-[13px] leading-snug text-neutral-400 md:text-base">
                Умный поиск товаров с автоматической индикацией опасных ингредиентов.
              </p>
            </div>

            <div className="flex flex-col gap-2 md:w-72 lg:w-80">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/10">
                <BadgeCheck className="h-4 w-4 shrink-0 text-safe-500" strokeWidth={2} />
                <p className="text-[11px] leading-snug font-medium text-neutral-100 sm:text-[12px]">
                  100% автопроверка состава по профилю аллергенов.
                </p>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-safe-500 py-2.5 text-[14px] font-semibold text-neutral-900 transition-transform duration-150 hover:bg-safe-100 active:scale-[0.98] md:text-[15px]"
              >
                Начать поиск
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </section>

        {/* How it works: three large tiles that fill the card height */}
        <section className="flex min-h-0 flex-col rounded-2xl bg-white p-3.5 ring-1 ring-neutral-200/70 md:p-5">
          <h2 className="text-[13px] font-bold tracking-tight text-neutral-900 md:text-base">
            Как это работает
          </h2>
          <div className="mt-2.5 flex min-h-0 flex-1 flex-col gap-2 md:gap-2.5">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex min-h-0 flex-1 flex-col justify-between rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200/60 md:p-4"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[26px] font-bold leading-none tracking-tight text-neutral-300 md:text-4xl">
                    {step.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 md:h-11 md:w-11">
                    <step.icon className="h-4 w-4 text-safe-500 md:h-5 md:w-5" strokeWidth={2} />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-[14px] font-bold leading-tight text-neutral-900 md:text-[17px]">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-[12px] leading-snug text-neutral-600 md:text-[14px]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex items-center justify-center gap-1.5 rounded-full bg-neutral-100 py-1.5">
            {RATING_DOTS.map((dot) => (
              <span key={dot} className={`h-2 w-2 rounded-full ${dot}`} />
            ))}
            <span className="ml-1 text-[11px] font-medium text-neutral-500 md:text-[12px]">
              Цветовой рейтинг товара
            </span>
          </div>
        </section>

        {/* Right column on desktop; flat grid items on mobile */}
        <div className="contents md:flex md:min-h-0 md:flex-col md:gap-3 lg:gap-4">
          <section className="rounded-2xl bg-white p-3.5 ring-1 ring-neutral-200/70 md:p-5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100">
                <UserRound className="h-3.5 w-3.5 text-neutral-900" strokeWidth={2} />
              </div>
              <h2 className="text-[13px] font-bold tracking-tight text-neutral-900 md:text-base">
                Для кого
              </h2>
            </div>
            <p className="mt-2 text-[12.5px] leading-snug text-neutral-600 md:text-[14px]">
              Для студентки Анны с острой аллергией на лесные орехи и лактозу, которая уставшая выбирает еду в магазинах у дома.
            </p>
          </section>

          <section className="flex min-h-0 flex-col rounded-2xl bg-white p-3.5 ring-1 ring-neutral-200/70 md:flex-1 md:p-5">
            <h2 className="text-[13px] font-bold tracking-tight text-neutral-900 md:text-base">
              Сколько стоит
            </h2>
            <div className="mt-2.5 grid flex-1 grid-cols-2 gap-2 md:gap-2.5">
              <div className="flex flex-col justify-between rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200/60">
                <div className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-safe-600" strokeWidth={2} />
                  <p className="text-[11px] font-semibold text-neutral-700 md:text-[12px]">Первые 14 дней</p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">0 ₽</p>
                  <p className="text-[11px] leading-snug text-neutral-500 md:text-[12px]">Бесплатный период</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-xl bg-neutral-900 p-3">
                <div className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-safe-500" strokeWidth={2} />
                  <p className="text-[11px] font-semibold text-neutral-200 md:text-[12px]">Далее</p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">300 ₽</p>
                  <p className="text-[11px] leading-snug text-neutral-400 md:text-[12px]">в месяц для пользователей</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
