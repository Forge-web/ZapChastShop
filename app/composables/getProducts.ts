export default (id?: number) => {
	type typeProducts = {
		id: number,
		name: string,
		img: string,
		desc: string,
		price: string
	}

	const products: typeProducts[] = [
		{
			id: 1,
			name: "Тормозные колодки передние Lada Granta",
			price: "1 250 ₽",
			desc: "Передние тормозные колодки для Lada Granta, Kalina, Priora. Комплект 4 шт. Оригинал АвтоВАЗ, артикул 1118-3501080.",
			img: "/images/kolodki-granta.webp"
		},
		{
			id: 2,
			name: "Масляный фильтр Lada 2108-2115",
			price: "320 ₽",
			desc: "Масляный фильтр для двигателей ВАЗ 2108, 2109, 2110, 2114, 2115. Оригинал АвтоВАЗ, резьба 3/4-16 UNF.",
			img: "/images/filter-oil-vaz.webp"
		},
		{
			id: 3,
			name: "Свечи зажигания А17ДВРМ (4 шт) Lada",
			price: "480 ₽",
			desc: "Свечи зажигания А17ДВРМ для карбюраторных и инжекторных двигателей ВАЗ. Комплект 4 шт. Зазор 0.7-0.8 мм.",
			img: "/images/svechi-a17dvrm.webp"
		},
		{
			id: 4,
			name: "Амортизатор передний Lada 2110-2112",
			price: "1 890 ₽",
			desc: "Передний газомасляный амортизатор для Lada 2110, 2111, 2112. Оригинал СААЗ. Продаётся поштучно.",
			img: "/images/amort-2110.webp"
		},
		{
			id: 5,
			name: "Ремень ГРМ Lada 21126 (Priora, Kalina)",
			price: "890 ₽",
			desc: "Ремень ГРМ для двигателя 21126 (16V) Lada Priora, Kalina, Granta. Оригинал БРТ, 137 зубьев.",
			img: "/images/remen-grm-21126.webp"
		},
		{
			id: 6,
			name: "Аккумулятор АКОМ 6СТ-55 Lada",
			price: "5 400 ₽",
			desc: "Аккумулятор 12V 55Ah 480A для Lada Granta, Vesta, Kalina. Необслуживаемый, гарантия 2 года. Обратная полярность.",
			img: "/images/akb-akom.webp"
		},
		{
			id: 7,
			name: "Стойка стабилизатора Lada 2110-2112",
			price: "450 ₽",
			desc: "Стойка стабилизатора передней подвески для Lada 2110-2112, Priora. Комплект 2 шт. Усиленная, с полиуретановыми втулками.",
			img: "/images/stoyka-stab-2110.webp"
		},
		{
			id: 8,
			name: "Шаровая опора Lada Kalina / Granta",
			price: "620 ₽",
			desc: "Шаровая опора в сборе для Lada Kalina, Granta, Datsun on-DO. Оригинал АвтоВАЗ, артикул 2190-2904052.",
			img: "/images/sharovaya-kalina.webp"
		},
	]

	const byId = (id: number) => {
		return products.filter((element, index, array) => {
			return element.id == id;
		})[0]
	}

	
	return {
		products,
		byId
	}
}