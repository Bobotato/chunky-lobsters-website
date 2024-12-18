import type { FAQCategory } from '@/types/FAQType'

const FAQData: FAQCategory[] = [
  {
    title: 'Halal Certification',
    items: [
      {
        question: 'Is the food you serve halal?',
        answer:
          'As of now, Chunky Lobsters and all its outlets are unfortunately not Halal certified.',
      },
      {
        question: 'Does your food contain pork, lard or alcohol?',
        answer:
          'Not at all. We actively keep these ingredients out of our food and use halal certified alternatives for ingredients that would normally have them. For example, some of our Japanese ingredients that would normally be made with alcohol have been substituted with halal certified alternatives.',
      },
    ],
  },
  {
    title: 'Delivery',
    items: [
      {
        question: 'What do I need to do to qualify for $150 free islandwide delivery?',
        answer:
          'To qualify for free delivery, you must place an order directly through us, either directly through the phone or through our advance order forms. Free delivery does not apply if you are purchasing through Grab or Foodpanda or other third party platforms. Your order must also exceed $150. <br><br> Otherwise our delivery fees are as follows: <br><br> Delivery within 10km of outlet: $8 <br> Delivery outside 10km of outlet: $14',
      },
    ],
  },
  {
    title: 'Events, Partnerships, Marketing, Etc',
    items: [
      {
        question: 'Who do I contact for events, large orders and catering services??',
        answer:
          'Please contact us with your request and we will see what we can do for you. We have experience doing events and pop-ups and you might have remembered seeing us at your nearby event before!',
      },
      {
        question: 'Who do I contact for partnerships or marketing related purposes?',
        answer:
          "For partnerships and marketing, please contact us on our social media channels and we'll get back to you as soon as we can!",
      },
    ],
  },
]

export { FAQData }
