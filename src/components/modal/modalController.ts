class ModalController {
	public modalElement: HTMLElement | Element;

	constructor() {
		this.modalElement = document.getElementsByClassName('modal')[0];
	}

	public openModal() {
		if (this.modalElement) {
			(this.modalElement as HTMLElement).style.display = 'block';
		}
	}

	public closeModal() {
		if (this.modalElement) {
			(this.modalElement as HTMLElement).style.display = 'none';
		}
	}

}

export default ModalController;