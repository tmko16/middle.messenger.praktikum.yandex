class ModalController {
	private modalElement: Element | null;

	constructor() {
		this.modalElement = document.getElementById('#modal');
	}

	openModal() {
		if (this.modalElement) {
			(this.modalElement as HTMLLIElement).style.display = 'block';
		}
	}

	closeModal() {
		if (this.modalElement) {
			(this.modalElement as HTMLLIElement).style.display = 'none';
		}
	}
}

export default new ModalController();