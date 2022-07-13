import Block from '../../core/Block';

export class AvatarView extends Block {


	protected render() {
		//language=hbs
		return `
            <div class="profile__avatar">
                <div class="profile__avatar-img">
                    <img src="https://cdn-s-static.arzamas.academy/storage/picture/7196/gallery_picture-673c9ad6-f79e-4890-a291-3e70ebc4f9b3.jpg"
                         alt="">
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