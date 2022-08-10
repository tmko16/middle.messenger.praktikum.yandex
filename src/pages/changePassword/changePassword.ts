import Block from '../../core/Block';
import './changePassword.less';
import ProfileInput from '../../components/profileInput';
import AvatarProfile from '../../components/avatarProfile';
import Link from '../../components/link';
import {onSubmitValidation, passwordValidation} from '../../utils/validators';
import Button from '../../components/button';
import {getFormValues} from '../../utils/getFormValues';
import {UserController} from '../../controllers/userController';
import {Router} from '../../core/Router';

const router = new Router();

export class ChangePassword extends Block {
	private formValues: Record<string, string | number> = {};
	private userController: UserController;

	constructor() {

		const fields = {
			oldPassword: new ProfileInput({
				isEdit: true,
				validation: passwordValidation,
				label: 'Старый пароль',
				name: 'oldPassword',
				type: 'password',
				placeholder: '*******'
			}),
			newPassword: new ProfileInput({
				isEdit: true,
				validation: passwordValidation,
				label: 'Новый пароль',
				name: 'newPassword',
				type: 'password',
				placeholder: '*******'
			}),
			confirmPassword: new ProfileInput({
				isEdit: true,
				validation: passwordValidation,
				label: 'Повторите новый пароль',
				name: 'confirmPassword',
				type: 'password',
				placeholder: '*******'
			}),
		};
		const backLink = new Link({text: 'Профиль', to: 'profilePage'});
		super({...fields, backLink});
		this.userController = new UserController();
		this.setChildren({
			saveButton: new Button({
				classes: 'btn_l',
				href: '#',
				text: 'Сохранить',
				onSubmit: this.onSubmitHandler.bind(this)
			}),
		});
	}

	async onSubmitHandler() {
		getFormValues.apply(this);
		const credentials = {
			formValues: this.formValues,
			children: this.children
		};
		const changedData = await this.userController.changePassword(credentials);
		if (changedData) {
			router.go('/profilePage');
		}
	}

	protected render(): string {


		//language=hbs
		return `
            <div class="change-pass-page">
                <div class="profile__nav">
                    <a href="/">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7_787)">
                                <path
                                        d="M12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0V0ZM17.9688 11.7188C18.176 11.7188 18.3747 11.8011 18.5212 11.9476C18.6677 12.0941 18.75 12.2928 18.75 12.5C18.75 12.7072 18.6677 12.9059 18.5212 13.0524C18.3747 13.1989 18.176 13.2812 17.9688 13.2812H8.91719L12.2719 16.6344C12.3445 16.707 12.4021 16.7932 12.4414 16.8882C12.4808 16.9831 12.501 17.0848 12.501 17.1875C12.501 17.2902 12.4808 17.3919 12.4414 17.4868C12.4021 17.5818 12.3445 17.668 12.2719 17.7406C12.1992 17.8133 12.113 17.8709 12.0181 17.9102C11.9232 17.9495 11.8215 17.9697 11.7188 17.9697C11.616 17.9697 11.5143 17.9495 11.4194 17.9102C11.3245 17.8709 11.2383 17.8133 11.1656 17.7406L6.47812 13.0531C6.40537 12.9806 6.34765 12.8943 6.30826 12.7994C6.26888 12.7045 6.2486 12.6028 6.2486 12.5C6.2486 12.3972 6.26888 12.2955 6.30826 12.2006C6.34765 12.1057 6.40537 12.0194 6.47812 11.9469L11.1656 7.25937C11.3123 7.11268 11.5113 7.03026 11.7188 7.03026C11.9262 7.03026 12.1252 7.11268 12.2719 7.25937C12.4186 7.40607 12.501 7.60504 12.501 7.8125C12.501 8.01996 12.4186 8.21893 12.2719 8.36563L8.91719 11.7188H17.9688Z"
                                        fill="#4D3CA6"/>
                            </g>
                            <rect x="0.5" y="0.5" width="24" height="24" rx="12" stroke="black"/>
                            <defs>
                                <clipPath id="clip0_7_787">
                                    <rect width="25" height="25" rx="12.5" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    {{{backLink}}}

                </div>
                <div class="profile-pass-change">
                    <div class="profile-pass-change__fields">
                        {{{oldPassword}}}
                        {{{newPassword}}}
                        {{{confirmPassword}}}
                    </div>
                    <div class="profile__actions">
                        {{{saveButton}}}
                    </div>
                </div>
            </div>
		`;
	}
}