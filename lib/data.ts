export const projects = [
  {
    id: "dezi-park",
    slug: "dezi-park",
    name: "ЖК DEZI PARK",
    nameShort: "DEZI PARK",
    image: "/images/hero-building.jpg",
    address: "мкр. Centralnyi, 50A, Кокшетау",
    floors: 9,
    sections: 2,
    apartments: "1–4 комнатные",
    finishing: "Улучшенная черновая",
    ceilingHeight: "3.0 м",
    status: "В продаже" as "В продаже" | "Сдан",
    statusNote: "Дан в эксплуатацию",
    class: "Комфорт",
    construction: "Монолитно-каркасная",
    parking: "Наземный/Закрытый",
    heating: "Центральное",
    elevator: "Бесшумные лифты",
    walls: "Кирпич",
    facade: "Премиальная отделка",
    territory: "Закрытый двор, велопарковки, видеодомофония, колясочные",
    description:
      "ЖК DEZI PARK — это современный жилой комплекс комфорт-класса в Кокшетау с видом на озеро. Эргономичные планировки, современная архитектура и высокий уровень комфорта создают идеальные условия для жизни.",
    features: [
      "Комфорт-класс",
      "Вид на озеро",
      "Эргономичные планировки",
      "Закрытый двор",
      "Велопарковки и колясочные",
      "Видеодомофония",
    ],
    area: "35–120 м²",
    pricePerSqm: "от 350 000 ₸",
    infrastructure: [
      "Вид на озеро",
      "Рядом школы и госучреждения",
      "Удобная транспортная развязка",
    ],
  },
]

export const floorPlans = [
  { id: 1, projectSlug: "dezi-park", projectName: "ЖК DEZI PARK", rooms: 1, area: 35.5, price: 12425000, pricePerSqm: 350000, image: "/images/hero-building.jpg" },
  { id: 2, projectSlug: "dezi-park", projectName: "ЖК DEZI PARK", rooms: 2, area: 65.0, price: 22750000, pricePerSqm: 350000, image: "/images/hero-building.jpg" },
  { id: 3, projectSlug: "dezi-park", projectName: "ЖК DEZI PARK", rooms: 3, area: 85.0, price: 29750000, pricePerSqm: 350000, image: "/images/hero-building.jpg" },
  { id: 4, projectSlug: "dezi-park", projectName: "ЖК DEZI PARK", rooms: 4, area: 120.0, price: 42000000, pricePerSqm: 350000, image: "/images/hero-building.jpg" },
]

export const mortgagePrograms = [
  {
    id: "otau",
    name: "Отау",
    rate: 9,
    maxTerm: 19,
    downPayment: 20,
    description: "Специальная ипотечная программа от Отбасы банка. Ставка 9% годовых.",
  },
  {
    id: "7-20-25",
    name: "7-20-25",
    rate: 7,
    maxTerm: 25,
    downPayment: 20,
    description: "Программа доступного жилья от КФУ для первичного рынка.",
  },
  {
    id: "installment",
    name: "Рассрочка",
    rate: 0,
    maxTerm: 2,
    downPayment: 30,
    description: "Беспроцентная рассрочка от застройщика DEZI GROUP.",
  },
]

export function formatPrice(price: number | string): string {
  if (typeof price === "string") return price
  return new Intl.NumberFormat("ru-KZ").format(price) + " ₸"
}
