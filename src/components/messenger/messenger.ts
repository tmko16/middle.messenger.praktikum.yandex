import Block from "../../core/Block";
import './messenger.less'
//TODO: избавиться от эни где только можно.
type MessengerProps = {
    name: string,
    wasOnline: string,
    messages: Array<any>
}

export class Messenger extends Block {
    constructor(props: MessengerProps) {
        super(props);
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="msg-area">
                <div class="msg-area__chat-info">
                    <div class="msg-area__left-block-wrapper">
                        <div class="msg-area__chat-name">{{name}}</div>
                        <div class="msg-area__was-online">{{wasOnline}}</div>
                    </div>
                    <div class="msg-area__action-button">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>

                </div>
                <div class="msg-area__chat">
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
                        <input type="text" name="message" id="">
                    </div>
                    <div class="msg-area__send-btn">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#4D3CA6"/>
                            <path
                                    d="M10.1551 7.31626C10.0504 7.26393 9.93323 7.24202 9.81676 7.25301C9.7003 7.264 9.58926 7.30746 9.49627 7.37844C9.40328 7.44941 9.33208 7.54506 9.29077 7.65451C9.24945 7.76395 9.23968 7.88279 9.26256 7.99751L11.0163 14.06C11.049 14.173 11.1129 14.2744 11.2007 14.3527C11.2885 14.431 11.3966 14.4829 11.5126 14.5025L18.6251 15.6938C18.9601 15.76 18.9601 16.24 18.6251 16.3063L11.5126 17.4975C11.3966 17.5171 11.2885 17.569 11.2007 17.6473C11.1129 17.7256 11.049 17.827 11.0163 17.94L9.26256 24.0025C9.23968 24.1172 9.24945 24.2361 9.29077 24.3455C9.33208 24.455 9.40328 24.5506 9.49627 24.6216C9.58926 24.6926 9.7003 24.736 9.81676 24.747C9.93323 24.758 10.0504 24.7361 10.1551 24.6838L26.4051 16.5588C26.5087 16.5068 26.5959 16.427 26.6568 16.3283C26.7178 16.2297 26.75 16.116 26.75 16C26.75 15.884 26.7178 15.7704 26.6568 15.6717C26.5959 15.573 26.5087 15.4932 26.4051 15.4413L10.1551 7.31626Z"
                                    fill="#161616"/>
                        </svg>

                    </div>
                </div>
            </div>
        `
    }
}