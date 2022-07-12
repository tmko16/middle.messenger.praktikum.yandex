import Block from "../../core/Block";
import UserProfile from "../../components/userProfile";

export class ProfilePage extends Block {

    constructor() {
        const userProfile = new UserProfile({})
        super({userProfile});
    }
    protected render(): string {

        //language=hbs
        return `
            {{{userProfile}}}
        `
    }
}