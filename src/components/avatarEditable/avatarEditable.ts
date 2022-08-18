import Block from '../../core/Block';

export class AvatarEditable extends Block {
	constructor() {
		super();
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="profile__avatar">
                <div class="profile__avatar-img_editable">
                    <label class="profile__change-avatar" role="button" tabindex="0"
                           title="Замените фото вашего профиля">
<form id="new-avatar-form">
                            <input id="new-avatar" class="profile__change-avatar-input" name="avatar" type="file"
                                   accept="image/png, image/jpeg"> </form>
                        <img src="https://cdn-s-static.arzamas.academy/storage/picture/7196/gallery_picture-673c9ad6-f79e-4890-a291-3e70ebc4f9b3.jpg"
                             alt="аватар">
                        <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M10.5 0L7.755 3H3C1.35 3 0 4.35 0 6V24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V6C30 4.35 28.65 3 27 3H22.245L19.5 0H10.5ZM15 22.5C10.86 22.5 7.5 19.14 7.5 15C7.5 10.86 10.86 7.5 15 7.5C19.14 7.5 22.5 10.86 22.5 15C22.5 19.14 19.14 22.5 15 22.5Z"
                                    fill="#DCDDDE"/>
                        </svg>
                    </label>
                </div>
                <span class="profile__name">
        Сетару Канеда 2
    </span>
                <span class="profile__is-online">
        online
    </span>
            </div>
		`;
	}
}