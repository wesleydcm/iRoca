export interface Image {
	url: string;
}

export interface IEvaluation {
	userId: number;
	evaluatorId: number;
	date: string;
	feedback: string;
	grade: number;
}

export interface IProduct {
	name: string;
	category: string;
	description: string;
	userId: number;
	price: number;
	isOrganic: boolean;
	qty: number;
	images: Image[];
	evaluations: IEvaluation[];
}
