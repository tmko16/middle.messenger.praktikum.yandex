import Block from '../../core/Block';

export class AvatarProfile extends Block {

	constructor(props: {avatarSrc: string}) {
		super(props);
	}

	protected render(): string {
		//language=hbs
		return ` 
            <div class="profile__avatar">
                <div class="profile__avatar-img">
                    <img src="https://ya-praktikum.tech/api/v2/resources/{{{avatarSrc}}}"
                         alt="">
                </div>
                    <span class="profile__name">
                    Сетару Канеда 2 - 
                    </span>
                    <span class="profile__is-online"> online
                    </span>
            </div>


        `;
	}
}