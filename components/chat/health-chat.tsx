"use client";

import * as React from "react";
import { Bot, Send, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Health Guidelines Data
const healthGuidelines = {
  heartRate: {
    normal: "60 to 100 bpm for adults.",
    symptoms: {
      bradycardia: ["Fatigue", "Dizziness", "Fainting"],
      tachycardia: ["Shortness of breath", "Palpitations", "Lightheadedness"],
    },
  },
  bloodPressure: {
    normal: "Less than 120/80 mmHg.",
    hypertensionSymptoms: ["Severe headaches", "Blurred vision", "Chest pain"],
    hypotensionSymptoms: ["Dizziness", "Fainting", "Blurred vision", "Nausea"],
  },
  glucose: {
    normal: "70 to 99 mg/dL (fasting).",
    hyperglycemia: ["Increased thirst", "Frequent urination", "Blurred vision", "Fatigue"],
    hypoglycemia: ["Shaking", "Sweating", "Confusion", "Irritability"],
  },
  sleep: {
    recommended: "7 to 9 hours per night for adults.",
    deprivationSymptoms: ["Fatigue", "Irritability", "Lack of concentration"],
  },
};

// Keyword mappings for better query understanding
const keywordMappings: { [key: string]: string[] } = {
  heartRate: ["heart rate", "pulse", "bpm", "beats per minute"],
  bloodPressure: ["blood pressure", "hypertension", "hypotension", "bp"],
  glucose: ["blood sugar", "glucose", "diabetes", "hyperglycemia", "hypoglycemia"],
  sleep: ["sleep", "insomnia", "rest", "nap", "slumber"],
};

export function HealthChat() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your HealthGuard AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to handle responses from the chatbot
  const generateResponse = (question: string): string => {
    const lowerCaseQuestion = question.toLowerCase();
    
    // Check for greetings
    if (lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi")) {
      return "Hello! How can I assist you with your health-related questions today?";
    }

    // Check for gratitude
    if (lowerCaseQuestion.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    // Check for farewells
    if (lowerCaseQuestion.includes("bye") || lowerCaseQuestion.includes("goodbye")) {
      return "Goodbye! Take care and stay healthy!";
    }

    // Check for each health topic
    for (const [topic, keywords] of Object.entries(keywordMappings)) {
      if (keywords.some(keyword => lowerCaseQuestion.includes(keyword))) {
        switch (topic) {
          case "heartRate":
            return `Normal heart rate: ${healthGuidelines.heartRate.normal}. 
            Symptoms of Bradycardia (slow heart rate): ${healthGuidelines.heartRate.symptoms.bradycardia.join(", ")}.
            Symptoms of Tachycardia (fast heart rate): ${healthGuidelines.heartRate.symptoms.tachycardia.join(", ")}.`;
          case "bloodPressure":
            return `Normal blood pressure: ${healthGuidelines.bloodPressure.normal}.
            Hypertension (high blood pressure) symptoms: ${healthGuidelines.bloodPressure.hypertensionSymptoms.join(", ")}.
            Hypotension (low blood pressure) symptoms: ${healthGuidelines.bloodPressure.hypotensionSymptoms.join(", ")}.`;
          case "glucose":
            return `Normal fasting blood glucose: ${healthGuidelines.glucose.normal}.
            Hyperglycemia (high blood sugar) symptoms: ${healthGuidelines.glucose.hyperglycemia.join(", ")}.
            Hypoglycemia (low blood sugar) symptoms: ${healthGuidelines.glucose.hypoglycemia.join(", ")}.`;
          case "sleep":
            return `Recommended sleep: ${healthGuidelines.sleep.recommended}.
            Symptoms of sleep deprivation: ${healthGuidelines.sleep.deprivationSymptoms.join(", ")}.`;
        }
      }
    }

    // If no specific topic is matched, provide a general response
    return "I'm not sure I understand your question. Could you please rephrase it or ask about a specific health topic like heart rate, blood pressure, blood sugar, or sleep?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Generate and add assistant response
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      const response = generateResponse(input);
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Failed to get response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg" onClick={() => setIsOpen(true)}>
        <Bot className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 shadow-lg md:w-96">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">HealthGuard AI Assistant</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4" ref={scrollAreaRef}>
              <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
