export const WINDOW_SIZE_DESKTOP = 900;

export const priceFormatter = (value: number | bigint) =>
	Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(value);
