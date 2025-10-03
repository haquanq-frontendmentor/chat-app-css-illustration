import { onMount } from "solid-js";
import { addMessage, setConversationPaddingBottom, setUserTyping } from "../../stores/conversationStore";
import type { RandomQuote } from "../../types/RandomQuote";

export const ChatMessageForm = () => {
  let form: HTMLFormElement | undefined;

  const getRandomQuote = () => {
    setTimeout(() => {
      setUserTyping(true);

      fetch("https://api.quotable.io/random", {})
        .then((res) => res.json())
        .then((quote: RandomQuote) => {
          addMessage({ type: "text", fromMe: false, content: quote.content });
        })
        .catch(() => {
          addMessage({ type: "text", fromMe: false, content: "I'm busy, comeback later!" });
        })
        .finally(() => {
          setUserTyping(false);
        });
    }, 500);
  };

  onMount(() => {
    if (!form) return;
    const input = form.querySelector("textarea") as HTMLTextAreaElement;

    const sendMessage = () => {
      if (input.value !== "") {
        addMessage({ type: "text", content: input.value, fromMe: true });
        input.value = "";
        getRandomQuote();
      }
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendMessage();
    });

    form.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });

    new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target.isEqualNode(form)) {
          setConversationPaddingBottom(form.clientHeight);
        }
      }
    }).observe(form);
  });

  return (
    <form
      class="py-[0.6875rem] rounded-t-sm backdrop-blur-sm absolute bottom-[0.625rem] inset-x-[0.625rem] px-[0.4375rem]"
      ref={form}
      action=""
      novalidate
    >
      <div class="bg-white relative w-full flex items-center overflow-hidden rounded-2xl focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline-dashed focus-within:outline-purple-600 focus-within:shadow-lg">
        <label class="sr-only" for="chat-message">
          Your message
        </label>
        <textarea
          class="text-[0.5625rem] resize-none field-sizing-content w-full max-h-[5.875rem] pt-[0.8125rem] pb-[0.5625rem] pl-[1.1875rem] pr-12 leading-3 outline-none  placeholder:text-gray-300 text-gray-700"
          id="chat-message"
          placeholder="Type a message..."
          required
        />
        <button
          class="w-6 focus-visible:outline-offset-1 focus-visible:outline-1 focus-within:outline-purple-600 focus-visible:outline-dashed right-[0.3125rem] bottom-[0.3125rem] aspect-square absolute rounded-full bg-purple-950 text-white"
          type="submit"
          aria-label="Send"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};
