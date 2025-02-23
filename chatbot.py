import os
from PyPDF2 import PdfReader
from langchain_mistralai import ChatMistralAI
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.vectorstores import InMemoryVectorStore
from langchain.schema import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain import hub
from typing import List, TypedDict

class State(TypedDict):
    question: str
    context: List[Document]
    answer: str

class Chatbot:
    def _init_(self, api_key="M19Nurjr3gbyQlplRyL0MjaK7O3W1WOw"):
        self.llm = ChatMistralAI(model="mistral-large-latest")
        self.embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")
        self.vector_store = InMemoryVectorStore(self.embeddings)
        self.text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=400, add_start_index=True)
        self.prompt = hub.pull("rlm/rag-prompt")
        self.docs = None

    def load_pdf_as_document(self, file_path):
        documents = []
        if file_path.endswith('.pdf'):
            print("Loading PDF:", file_path)
            reader = PdfReader(file_path)
            text = ""
            for page in range(len(reader.pages)):
                text += reader.pages[page].extract_text()
            documents.append(Document(page_content=text))
        self.docs = documents

    def process_documents(self):
        all_splits = self.text_splitter.split_documents(self.docs)
        for doc in all_splits:
            self.vector_store.add_documents([doc])
        print(f"Processed {len(all_splits)} sub-documents.")

    def retrieve(self, question):
        retrieved_docs = self.vector_store.similarity_search(question)
        return retrieved_docs

    def generate(self, question, context):
        docs_content = "\n\n".join(doc.page_content for doc in context)
        messages = self.prompt.invoke({"question": question, "context": docs_content})
        response = self.llm.invoke(messages)
        return response.content

    def ask(self, question):
        context = self.retrieve(question)
        answer = self.generate(question, context)
        return answer

# Initialize the chatbot
chatbot = Chatbot()

# You might want to load a PDF here if needed
# chatbot.load_pdf_as_document("path/to/your/pdf")
# chatbot.process_documents()