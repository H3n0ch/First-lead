// The First Lead Course: lesson content from "First Lead: The Engine (draft)".
// To add a video: set `youtubeId` (the part after v= in a YouTube link).

export type Lesson = {
  slug: string;
  label: string; // "Context" or the lesson number shown in the strip
  title: string;
  youtubeId: string | null;
  rule: string;
  steps: string[];
  template?: { title: string; text: string };
  mistakes: string[];
  action: string;
};

export const course = {
  title: "The First Lead Course",
  subtitle: "The First Lead Course with Robert",
};

export const lessons: Lesson[] = [
  {
    slug: "start-here",
    label: "Context",
    title: "Start Here: How the Engine Works",
    youtubeId: null,
    rule: "Keywords are the fuel, your website is the engine, a customer comes out the other end. Build the parts in this order. Each part has one job.",
    steps: [
      "Know your product: who pays, for what problem.",
      "Find the buyers: the words they already type.",
      "Get in front of them: pages that rank, ads for the rest.",
      "Earn trust: look like someone worth calling.",
      "The hook: a tool that gives a result for free.",
      "Capture: a fair trade, the result for their contact.",
      "Answer fast: minutes, not days.",
      "Follow up: help them get ready.",
      "Close: ask, qualify, sign.",
    ],
    mistakes: [
      "Fixing everything at once instead of the weakest part.",
      "Buying traffic before the engine can catch the leads.",
    ],
    action:
      "If leads don't come, the problem is in the first five parts. If leads come but don't buy, it's in the last four. Write down which one is your weakest today.",
  },
  {
    slug: "first-clients",
    label: "1",
    title: "First Clients Without Cold Calls",
    youtubeId: null,
    rule: "You never have to beg strangers. Start with people who already like you, and move outward as you gain confidence.",
    steps: [
      "People you know: “This is what I do now. Who do you know who needs more customers?”",
      "Value first: send businesses three places where they lose inquiries, for free.",
      "Partners: tax advisors, lawyers, consultants. They have the clients, you have the solution.",
      "Strangers, last: by now you have stories, results and confidence.",
    ],
    template: {
      title: "The value-first message",
      text: "Hi [name], I looked at [company]'s website and noticed three places where you probably lose inquiries: [1], [2], [3]. Happy to show you how to fix them in 15 minutes, no strings. [Your name]",
    },
    mistakes: [
      "Starting with strangers because it feels “more professional”.",
      "Pitching before helping.",
      "Stopping after the first three clients.",
    ],
    action: "Write down 20 people you know and 10 businesses you'd like to help. Send the first five messages today.",
  },
  {
    slug: "know-your-product",
    label: "2",
    title: "Know Your Product",
    youtubeId: null,
    rule: "You can't find buyers until you know who pays and for what.",
    steps: [
      "Write down what you sell in one sentence. No jargon.",
      "Write down the problem it fixes, in your customer's words.",
      "Write down who has that problem and the money to fix it.",
      "Write down what one customer is worth: price minus cost to deliver.",
      "If you can't fill in all four lines, stop here and fix it first.",
    ],
    template: {
      title: "The product card",
      text: "I sell … · It fixes … · For people who … · They can pay because … · One customer is worth …",
    },
    mistakes: [
      "Describing features instead of the problem it fixes.",
      "“Everyone” as the buyer. If it's everyone, it's no one.",
      "Not knowing what a customer is worth.",
    ],
    action: "Fill in the product card. Five lines, ten minutes.",
  },
  {
    slug: "find-the-buyers",
    label: "3",
    title: "Find the Buyers",
    youtubeId: null,
    rule: "Your buyers are already asking for you. Find their exact words before you build anything.",
    steps: [
      "Open a keyword tool and type your product and problem the way a customer would.",
      "Export every keyword with searches, difficulty (KD), intent and cost per click.",
      "Keep only keywords with buying intent.",
      "KD under 20: win for free. 20 to 50: later. Over 50: ads or skip.",
      "Group the keepers by topic. Each group becomes one cluster.",
      "Write down the questions people would ask an AI assistant about your topic.",
    ],
    mistakes: [
      "Going after one big keyword everybody wants.",
      "Guessing what people search instead of looking it up.",
      "Ignoring how people phrase it.",
    ],
    action: "Build your keyword sheet. Find 50 keywords with KD under 20 and buying intent.",
  },
  {
    slug: "get-in-front-of-them",
    label: "4",
    title: "Get in Front of Them",
    youtubeId: null,
    rule: "Win the easy words for free with clusters. Pay only for the hard ones.",
    steps: [
      "Build one main page for the biggest keyword in a group.",
      "Build one supporting page per smaller keyword, and link them all both ways.",
      "Title each page with the exact words people type. Answer at the top.",
      "Add a short FAQ block. That's what AI assistants quote.",
      "For ads: one ad group per keyword group, sent to your own cluster page.",
      "Check before you spend: cost per click × clicks per lead must be less than a customer is worth.",
    ],
    mistakes: [
      "Loose pages instead of clusters.",
      "Buying traffic before the engine works.",
      "Paying for words you could win for free.",
    ],
    action: "Build the main page of your first cluster this week.",
  },
  {
    slug: "earn-trust",
    label: "5",
    title: "Earn Trust",
    youtubeId: null,
    rule: "People check you before they call you. A faceless site loses the big deals.",
    steps: [
      "Put a real person on the site: photo, name, one line on who you are.",
      "Say why you do this, in two sentences.",
      "Say what you do and how it works, in three steps.",
      "Show proof: real numbers, real clients. Only what's true.",
      "Answer the five questions buyers ask before they buy.",
      "Make sure your name gives a real result when googled.",
    ],
    mistakes: ["Hiding behind a logo.", "Big promises with no proof.", "Looking like every other template page."],
    action: "Go through your site with this list. Fix every missing point this week.",
  },
  {
    slug: "the-hook",
    label: "6",
    title: "The Hook",
    youtubeId: null,
    rule: "Give a real result for free, on your own site, in under a minute.",
    steps: [
      "Pick the one question from your keyword sheet people can't answer alone.",
      "Turn the answer into a tool: a calculator, a check, a configurator, a quick score.",
      "Build it into the page, not as a PDF.",
      "Name it with the words people search.",
      "Show part of the result right away. The full result comes after capture.",
      "Under the result: one button. “Talk to me about this.”",
    ],
    mistakes: [
      "A PDF nobody reads.",
      "A tool that asks for the email before it shows anything.",
      "Being clever instead of clear in the name.",
    ],
    action: "Pick one question and sketch the tool on paper: inputs, result, button.",
  },
  {
    slug: "capture",
    label: "7",
    title: "Capture",
    youtubeId: null,
    rule: "Capture is a fair trade: your result for their contact. Not their money yet.",
    steps: [
      "Put the form right where the result is.",
      "Ask only what you need: name, phone or email, one qualifying question.",
      "Say what they get and what happens next.",
      "Store every lead in one place, with date, source page and answers.",
      "Send an automatic confirmation the moment they submit.",
    ],
    template: {
      title: "The line under the button",
      text: "You get [result]. I'll get back to you within [time].",
    },
    mistakes: ["Ten fields.", "No promise of what happens next.", "Leads landing in an inbox nobody checks."],
    action: "Cut your form to four fields and add the “what happens next” line.",
  },
  {
    slug: "answer-fast",
    label: "8",
    title: "Answer Fast",
    youtubeId: null,
    rule: "A lead is hot for minutes, not days. Answer before they cool down.",
    steps: [
      "Set up an instant automatic reply the second the form arrives.",
      "Hot lead: call within one hour.",
      "Everyone else: send a booking link in the first reply.",
      "Get a notification on your phone for every new lead.",
      "Have your method ready before the first lead comes.",
    ],
    template: {
      title: "The first reply",
      text: "Hi [name], thanks for using the [tool]. You got [result]. I looked at your answers: [one line about their situation]. Can I call you today? Or pick a time here: [booking link]. [Your name]",
    },
    mistakes: ["Answering tomorrow.", "A generic “thanks, we'll be in touch”.", "No method ready."],
    action: "Set up the instant reply and the phone notification today. Then send yourself a test lead and time it.",
  },
  {
    slug: "follow-up",
    label: "9",
    title: "Follow Up",
    youtubeId: null,
    rule: "Most leads aren't ready today. Your job is to help them get ready, not just to wait.",
    steps: [
      "Find out what stops them from buying today: money, timing, someone else, or doubt.",
      "Set the next contact before you hang up: a date and a reason.",
      "Between calls, send something useful that answers their doubt.",
      "Give every lead a stage and a next date. No lead without a next step.",
      "When they say no, ask why, and ask if you can check back in 3 to 6 months.",
    ],
    mistakes: ["One call, then silence.", "“Just checking in” instead of something useful.", "No date for the next step."],
    action: "Give every open lead a stage and a next date today.",
  },
  {
    slug: "close",
    label: "10",
    title: "Close",
    youtubeId: null,
    rule: "Don't push. Find out if it fits, and if it does, ask for the deal.",
    steps: [
      "Ask: “How long have you been looking for something like this?”",
      "If they're looking for something else, stop. No fit, no push.",
      "If it fits: repeat their problem in their words, then show how you fix exactly that.",
      "State the price and what they get.",
      "Ask: “Shall we start?” If they hesitate, ask what's missing.",
      "Send the agreement and payment link the same day.",
    ],
    mistakes: ["Selling to people who don't fit.", "Talking features instead of their problem.", "Never actually asking."],
    action: "Write your five closing lines and say them out loud before your next call.",
  },
  {
    slug: "run-it",
    label: "11",
    title: "Run It: Rinse, Repeat",
    youtubeId: null,
    rule: "The engine only works if you run it every week and read the numbers.",
    steps: [
      "Every day: answer new leads within the hour, follow up on today's dates.",
      "Monday: read last week's numbers and find the weakest part.",
      "Tuesday to Thursday: fix that one part, or build the next page.",
      "Friday: read the ad numbers and change one thing.",
      "Every month: start a new cluster when the current one is full.",
    ],
    mistakes: ["Building and never measuring.", "Changing five things at once."],
    action: "Set up a sheet with six numbers (visitors, tool used, forms, reply time, customers, cost per lead) and fill it in every Monday.",
  },
];

export function lessonIndex(slug: string) {
  return lessons.findIndex((l) => l.slug === slug);
}
