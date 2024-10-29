import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Faq = () => {
  return <section className="bg-[#27262B] py-20">
    <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">FAQ</h2>

        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b border-zinc-700">
        <AccordionTrigger>What are the limits for course creation on YouCode?</AccordionTrigger>
        <AccordionContent>
        With YouCode, the only limits are your creativity and the content you are legally allowed to share. There are no restrictions on the number of courses or lessons you can create.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-zinc-700">
        <AccordionTrigger>Can I integrate quizzes or exercises into my YouCode courses?</AccordionTrigger>
        <AccordionContent>
        Absolutely! YouCode supports the integration of various types of interactive activities like quizzes, coding exercises, and more.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b border-zinc-700">
        <AccordionTrigger>How does YouCode ensure the quality of the courses offered?</AccordionTrigger>
        <AccordionContent>
            We have a dedicated team for quality assurance of courses. Moreover, the YouCode community can leave reviews and report inappropriate content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-b border-zinc-700">
        <AccordionTrigger>Does YouCode offer tracking tools for course creators?</AccordionTrigger>
        <AccordionContent>
            Yes, we provide detailed analytics so you can monitor your students' progress and engagement with your courses.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-b border-zinc-700">
        <AccordionTrigger>Can I customize the appearance of my courses on YouCode?</AccordionTrigger>
        <AccordionContent>
            Yes, YouCode offers customization options so you can align the look of your courses with your brand or personal preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-b border-zinc-700">
        <AccordionTrigger>What support does YouCode provide to content creators in case of issues?</AccordionTrigger>
        <AccordionContent>
            We have a responsive support team that can be contacted directly via our platform for any technical issues or questions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </div>
  </section>
}