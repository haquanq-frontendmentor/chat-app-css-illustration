import { createStore } from "solid-js/store";
import { DogImage1, DogImage2, DogImage3 } from "../assets/images";

type ConversationMessage =
    | {
          fromMe: boolean;
          type: "text";
          content: string;
      }
    | {
          fromMe: boolean;
          type: "images";
          content: string[];
      }
    | {
          fromMe: boolean;
          type: "payment";
          content: string;
          value: number;
      };

interface ConversationState {
    messages: ConversationMessage[];
    userTyping: boolean;
    length: number;
    paddingBottom: number;
}

const [store, setStore] = createStore<ConversationState>({
    messages: [
        { fromMe: false, type: "text", content: "That sounds great. I’d be happy with that." },
        { fromMe: false, type: "text", content: "Could you send over some pictures of your dog, please?" },
        { fromMe: true, type: "images", content: [DogImage1, DogImage2, DogImage3] },
        { fromMe: true, type: "text", content: "Here are a few pictures. She’s a happy girl!" },
        { fromMe: true, type: "text", content: "Can you make it?" },
        {
            fromMe: false,
            type: "text",
            content: "She looks so happy! The time we discussed works. How long shall i take her out for?",
        },
        { fromMe: false, type: "payment", content: "30 minutes walk", value: 29 },
        { fromMe: false, type: "payment", content: "1 hour walk", value: 49 },
    ],
    userTyping: false,
    length: 8,
    paddingBottom: 56,
});

const setConversationPaddingBottom = (value: number) => {
    setStore("paddingBottom", value);
};

const getConversationPaddingBottom = () => {
    return store.paddingBottom;
};

const getConversation = () => {
    return store.messages;
};

const getConversationLength = () => {
    return store.length;
};

const addMessage = (message: ConversationMessage) => {
    setStore("messages", (v) => [...v, message]);
    setStore("length", (v) => v + 1);
};

const isOtherUserTyping = () => store.userTyping;
const setUserTyping = (value: boolean) => setStore("userTyping", value);

export {
    addMessage,
    getConversation,
    getConversationLength,
    getConversationPaddingBottom,
    isOtherUserTyping,
    setConversationPaddingBottom,
    setUserTyping,
    type ConversationState as ChatState,
    type ConversationMessage as Message,
};
