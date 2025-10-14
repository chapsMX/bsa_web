import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Base Sports Arena work?",
    answer:
      "Users join a weekly pool, make their picks for each game, and compete against others. The users with the most correct picks win the prize pool.",
  },
  {
    question: "Is it safe to participate in Base Sports Arena?",
    answer:
      "Yes. All funds, pools, and payouts are managed by audited smart contracts on the Base blockchain, ensuring transparency and security.",
  },
  {
    question: "Which blockchain does it run on?",
    answer: "Base Sports Arena is built 100% on Base, a secure, fast, and low-cost Ethereum Layer 2 network.",
  },
  {
    question: "When are prizes distributed?",
    answer: "Prizes are distributed shortly after the final game of the week, once results are confirmed.",
  },
  {
    question: "What's the minimum age to participate?",
    answer: "Participants must be at least 18 years old.",
  },
]

export function FAQ() {
  return (
    <section id="help" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about Base Sports Arena</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
