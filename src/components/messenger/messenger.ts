import Block from '../../core/Block';
import './messenger.less';
import {messageValidation, onSubmitValidation} from '../../utils/validators';
import SendMsgBtn from '../sendMsgBtn';
import {getFormValues} from '../../utils/getFormValues';
import Msg from '../msg';
import FormInput from '../formInput';
import Store, {StoreEvents} from '../../core/Store';
import {Indexed} from '../../types';
import store from '../../core/Store';
import ChatDialog from '../chatDialog';
import ChatController from '../../controllers/chatController';
import AuthController from '../../controllers/authController';
import {MsgAreaAction} from '../msgAreaAction';
import Modal from '../modal/modal';
import AddChat from '../addChat';
import {ChatActionMenu} from '../chatActionMenu';

type MessengerProps = {
	name: string,
	wasOnline: string,
	messages: Array<{ message: string, classes: string }>
}

export class Messenger extends Block {
	protected formValues: Record<string, string | number> = {};
	private store: Store;
	public currentChat: unknown;
	private chatController: ChatController;
	private authController: AuthController;
	private ws: WebSocket | undefined;


	constructor() {


		const message = new FormInput({label: '', name: 'message', type: 'text'});
		super({message});
		this.chatController = new ChatController();
		this.authController = new AuthController();
		this.store = new Store();
		const chatDialog = new ChatDialog();
		const actionModal = new Modal({
			block: ChatActionMenu, context: {}
		});
		this.setChildren({
			sendMsg: new SendMsgBtn({
				onSubmit: this.onSubmitHandler.bind(this)
			}),
			msgAreaAction: new MsgAreaAction({
				onClick: () => {
					actionModal.openModal();
				}
			}),
			actionModal,
			chatDialog
		});

		this.store.on(StoreEvents.Updated, () => {
			this.currentChat = this.store.getState().selectedChat;
			this.connect();
			this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
		});


	}

	onSubmitHandler() {
		getFormValues.apply(this);
		const resValidation = onSubmitValidation(this.formValues, this.children);
		const message = this.formValues.message;
		if (this.ws) {
			this.ws.send(JSON.stringify({
				content: message,
				type: 'message',
			}));
		}
		const input = document.querySelector('[name="message"]');
		if (input) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			input.value = '';
		}
	}


	async connect() {

		const token = await this.chatController.getChatToken(this.currentChat as string);
		const userId = await this.authController.getUser();
		const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId.id}/${this.currentChat}/${token.token}`);
		socket.addEventListener('open', (data) => {
			console.log('Соединение установлено', data, this.ws);
			// TODO: Обязательно сделать подгрузку старых сообщений
		});
		socket.addEventListener('message', event => {
			const content = JSON.parse(event.data);
			if (content.type === 'user connected') {
				return;
			}
			const currentState = this.store.getState()?.dialogMessages as Array<unknown>;
			const allMsg = currentState ? currentState : [];
			const filteredAllMsg = allMsg.filter((msg: any) => msg.chatId == this.store.getState().selectedChat);
			filteredAllMsg.push({...content, chatId: this.store.getState().selectedChat});
			this.store.set('dialogMessages', filteredAllMsg);
			this.store.emit(StoreEvents.Updated);
		});

		socket.addEventListener('close', event => {
			if (event.wasClean) {
				console.log('Соединение закрыто чисто');
			} else {
				console.log('Обрыв соединения');
			}

		});
		this.ws = socket;
	}


	protected render(): string {
		if (!this.currentChat) {
			//language=hbs
			return '<div class="no-chat"><p>Выберите чат из списка</p></div>';
		}


		//language=hbs
		return `
            <div class="msg-area">
                <div class="msg-area__chat-info">
                    <div class="msg-area__left-block-wrapper">
                        <div class="msg-area__chat-name">{{name}}</div>
                        <div class="msg-area__was-online">{{wasOnline}}</div>
                    </div>
                    {{{msgAreaAction}}}

                </div>
                <div class="msg-area__chat">
                    {{{chatDialog}}}
                </div>
                <div class="msg-area__msg-sender">
                    <div class="msg-area__attach">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.18661 13.5L14.7628 5.92389L15.7056 6.8667L8.12942 14.4428L7.18661 13.5Z"
                                  fill="#4D3CA6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.70065 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70065 16.0141Z"
                                  fill="#4D3CA6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M15.0433 21.3567L22.6194 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z"
                                  fill="#4D3CA6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M17.5573 23.8708L25.1335 16.2946L26.0763 17.2374L18.5001 24.8136L17.5573 23.8708Z"
                                  fill="#4D3CA6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10829 23.8919C5.50479 21.2884 5.51421 17.0579 8.12933 14.4428L7.18652 13.5C4.04838 16.6381 4.03708 21.7148 7.16127 24.839C10.2855 27.9632 15.3621 27.9518 18.5002 24.8137L17.5574 23.8709Z"
                                  fill="#4D3CA6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z"
                                  fill="#4D3CA6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.70093 16.0144C7.95752 17.7578 7.95123 20.5782 9.6869 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41895 20.1518 9.42335 18.1776 10.6437 16.9572L9.70093 16.0144Z"
                                  fill="#4D3CA6"/>
                        </svg>

                    </div>
                    <div class="msg-area__msg-input">
                        {{{message}}}
                    </div>
                    <div class="msg-area__send-btn">
                        {{{sendMsg}}}

                    </div>
                </div>
                {{{actionModal}}}
            </div>
		`;
	}
}