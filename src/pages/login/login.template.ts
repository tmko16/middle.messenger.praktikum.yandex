//language=hbs
export const loginTemplate = `
    <div class="login-form">
        <div class="login-form__content">
            <div class="login-form__title"><h1>{{ title }}</h1></div>
            <div class="login-form__fields">
                    {{> formInput/formInput label = this.title name = this.name type = this.type }}
            </div>
            <div class="login-form__actions">
                {{> button/btn text = "Вход" classes = "btn_l" href = "chat.hbs"}}
                <a href="registration.hbs">Нет аккаунта?</a>
            </div>
        </div>
    </div>

`