from revChatGPT.ChatGPT import Chatbot
#from ChatGPT_lite.ChatGPT import Chatbot
import os
from dotenv import load_dotenv
# import sys
# import asyncio
load_dotenv()
# print(os.getenv('CHATGPT_TOKEN').type)




def summarize(text):

    chatbot = Chatbot({"session_token": os.getenv('CHATGPT_TOKEN')})

    prompt = "Summarize this text: "
    summary = chatbot.ask(prompt + text, conversation_id=None, parent_id=None)
    # while True:
    #     summary = await chatbot.ask(prompt + text)
    # print(summary.get("message"))

    return summary.get("message")
    #return {summary["answer"]}


def qna(text, question):

    chatbot = Chatbot({"session_token": os.getenv('CHATGPT_TOKEN')})
    prompt = "Answer this question based on the text: "
    answer = chatbot.ask(prompt + question + "\n" + " Text: " +
                         text, conversation_id=None, parent_id=None)
    # while True:
    #     answer = await chatbot.ask(prompt + question + "\n" + " Text: " + text)
    # print(answer.get("message"))

    return answer.get("message")
    # return {answer["answer"]}


if __name__ == "__main__":
    test_text = "The platypus (Ornithorhynchus anatinus),[3] sometimes referred to as the duck-billed platypus, is a semiaquatic, egg-laying mammal endemic to eastern Australia, including Tasmania. The platypus is the sole living representative or monotypic taxon of its family (Ornithorhynchidae) and genus (Ornithorhynchus), though a number of related species appear in the fossil record.Together with the four species of echidna, it is one of the five extant species of monotremes, mammals that lay eggs instead of giving birth to live young. Like other monotremes, it senses prey through electrolocation. It is one of the few species of venomous mammals, as the male platypus has a spur on the hind foot that delivers a venom, capable of causing severe pain to humans. The unusual appearance of this egg-laying, duck-billed, beaver-tailed, otter-footed mammal baffled European naturalists when they first encountered it, and the first scientists to examine a preserved platypus body (in 1799) judged it a fake, made of several animals sewn together."
    # test_question = "How does the platypus sense preys?"
    # test_text = "The platypus is cute."
    # test_question = "What animal is cute?"
    # summarize(test_text)
    print(summarize(test_text))
    # print(qna(test_text, test_question))
