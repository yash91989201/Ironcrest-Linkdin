import { GoogleGenAI } from "@google/genai";
import { Post } from "../types";
import logo from "../logo.png";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const LOGO_URL = logo;

const FALLBACK_ABOUT = `Ironcrest Developers is a global leader in offshore construction and power infrastructure. With a workforce of over 10,000 professionals, we specialize in heavy marine engineering, deep-sea oil rig development, and next-generation renewable energy grids.

Since 2010, we have delivered critical energy infrastructure across the North Sea, Gulf of Mexico, and Asia-Pacific regions. Our commitment to safety and engineering excellence drives us to power the world's future from the depths of the ocean.`;

// Generator for ~100 posts from 2018 to present
const generateHistoricalPosts = (): Post[] => {
  const posts: Post[] = [];
  const currentYear = new Date().getFullYear();
  const startYear = 2018;
  
  const festivalTemplates = [
    { name: "New Year", content: "Happy New Year from Ironcrest! 🎆 Wishing everyone a safe and prosperous year ahead. #Ironcrest #NewYear" },
    { name: "Diwali", content: "Wishing a very Happy Diwali to our teams in India and around the world! May the festival of lights bring joy and prosperity. 🪔" },
    { name: "Eid", content: "Eid Mubarak! Sending warm wishes to our colleagues and partners celebrating. 🌙" },
    { name: "Christmas", content: "Merry Christmas from our offshore family to yours! 🎄 Thank you for a year of hard work and dedication." },
    { name: "Thanksgiving", content: "This Thanksgiving, we are grateful for our resilient crews braving the elements to power the world. 🦃" },
    { name: "Labor Day", content: "Happy Labor Day! Celebrating the strength and dedication of our 10,000+ employees. You are the backbone of Ironcrest. 👷‍♂️" }
  ];

  const updateTemplates = [
    "Successfully installed the new jacket foundation for Project Alpha. A massive engineering feat! 🏗️",
    "Safety Milestone: 1 Million man-hours LTI free on the Helios Rig. Safety is our priority.",
    "Throwback to the commissioning of our first wind farm. We've come a long way since then.",
    "Welcoming our new cohort of graduate engineers today. The future is bright! 🎓",
    "Rough seas today in the North Sea, but operations continue safely thanks to our state-of-the-art vessels. 🌊",
    "Ironcrest is proud to sponsor the Global Energy Summit this year.",
    "Our CEO speaking on the future of sustainable offshore drilling.",
    "Just received the 'Excellence in Engineering' award! Proud of the team. 🏆",
    "Expanding our operations to the Asia-Pacific region. New office opening soon!",
    "Deployment of the new subsea rover 'Trident' was a success today. Exploring deeper than ever before. 🤖",
    "Heavy lift operations in progress. Precision engineering at its finest.",
    "Team bonding event at our Houston HQ. Great to see everyone together!",
    "Quarterly results are in: Strong growth in our renewable sector. 📈",
    "Focusing on mental health awareness week. Supporting our offshore crews is vital. 🧠"
  ];

  let idCounter = 1000;

  for (let year = currentYear; year >= startYear; year--) {
    const yearDiff = currentYear - year;
    const yearSuffix = yearDiff === 0 ? '' : `${yearDiff}y`;

    // Add Festivals (Approx 4-5 per year)
    festivalTemplates.forEach((fest, idx) => {
      // Simple randomization to not have every festival every year
      if (Math.random() > 0.2) { 
        const isImage = Math.random() > 0.3; // 70% chance of image for festivals
        posts.push({
            id: `post-${idCounter++}`,
            author: 'Ironcrest Developers',
            authorImage: LOGO_URL,
            content: fest.content,
            likes: Math.floor(Math.random() * 5000) + 1000,
            comments: Math.floor(Math.random() * 300),
            timeAgo: yearDiff === 0 ? `${Math.floor(Math.random() * 11) + 1}mo` : yearSuffix,
            image: isImage ? `https://picsum.photos/seed/${year}${fest.name}/800/400` : undefined
        });
      }
    });

    // Add Generic Updates (Approx 8-10 per year)
    const numUpdates = Math.floor(Math.random() * 5) + 8; 
    for (let i = 0; i < numUpdates; i++) {
        const template = updateTemplates[Math.floor(Math.random() * updateTemplates.length)];
        const isImage = Math.random() > 0.5; // 50% chance
        posts.push({
            id: `post-${idCounter++}`,
            author: 'Ironcrest Developers',
            authorImage: LOGO_URL,
            content: template,
            likes: Math.floor(Math.random() * 2000) + 500,
            comments: Math.floor(Math.random() * 100),
            timeAgo: yearDiff === 0 ? `${Math.floor(Math.random() * 11) + 1}mo` : yearSuffix,
            image: isImage ? `https://picsum.photos/seed/${year}update${i}/800/400` : undefined
        });
    }
  }

  return posts;
};

const ALL_POSTS = generateHistoricalPosts();

export const generateCompanyDescription = async (): Promise<string> => {
  if (!apiKey) return FALLBACK_ABOUT;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Write a professional, 2-paragraph 'About Us' description for 'Ironcrest Developers'. They are a major global company with 10,000+ employees specializing in offshore construction, oil rigs, and power infrastructure. Tone: Industrial, authoritative, global scale. No software development references.",
    });
    return response.text || FALLBACK_ABOUT;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return FALLBACK_ABOUT;
  }
};

export const generateRecentPosts = async (): Promise<Post[]> => {
  // If API key exists, try to get a few "fresh" AI generated posts and prepend them
  if (apiKey) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: "Generate 2 very recent professional social media posts for 'Ironcrest Developers'. Return strictly valid JSON array. Each object should have 'content' (string) and 'hasImage' (boolean). Topics: Breaking news about a new energy contract.",
        config: {
            responseMimeType: "application/json",
        },
      });

      const rawData = JSON.parse(response.text.trim());
      const newPosts = rawData.map((item: any, index: number) => ({
        id: `ai-gen-${index}`,
        author: 'Ironcrest Developers',
        authorImage: LOGO_URL,
        content: item.content,
        likes: Math.floor(Math.random() * 500) + 100,
        comments: Math.floor(Math.random() * 50) + 5,
        timeAgo: `${index + 1}d`,
        image: item.hasImage ? `https://picsum.photos/seed/fresh${index}/800/400` : undefined
      }));

      return [...newPosts, ...ALL_POSTS];
    } catch (error) {
      console.error("Gemini API Error:", error);
      return ALL_POSTS;
    }
  }

  return ALL_POSTS;
};