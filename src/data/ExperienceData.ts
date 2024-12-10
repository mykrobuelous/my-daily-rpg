import { generateID } from '../utils/function/generateID';
import { ExperienceType } from './ExperienceType';

export const mockExperienceData: ExperienceType[] = [
    {
        id: generateID(),
        experience: 'Strength',
        ABV: 'STR',
        color: '#FF0000',
        description: 'Habits that include anything that involves health',
        guideQuestion: 'Does this habit improve your health, hygiene, or physical strength?',
    },
    {
        id: generateID(),
        experience: 'Wisdom',
        ABV: 'WIS',
        color: '#FFA500',
        description: 'Habits that include anything that involves mental health and journaling',
        guideQuestion:
            'Does this habit improve your mental health, mindfulness, or emotional well-being?',
    },
    {
        id: generateID(),
        experience: 'Intelligence',
        ABV: 'INT',
        color: '#0000FF',
        description: 'Habits that include anything that involves career, learning, and money',
        guideQuestion:
            'Does this habit improve your professional skills, knowledge, or financial management?',
    },
    {
        id: generateID(),
        experience: 'Spiritual Connection',
        ABV: 'SPR',
        color: '#800080',
        description:
            'Habits that include anything that involves faith, prayer, and connecting with a sense of purpose',
        guideQuestion: 'Does this habit enhance your spiritual well-being or sense of purpose?',
    },
];

// 1. Strength (Health-Related Tasks)
// Tasks focused on physical health, fitness, and well-being.

// Exercise (Treadmill):

// Min (1 XP): Stand on the treadmill for 10 seconds or walk for 30 seconds.
// Mid (2 XP): Walk slowly for 2-3 minutes.
// Max (3 XP): Walk for 5-10 minutes at a comfortable pace.
// Take A Bath:

// Min (1 XP): Wash your face or perform a quick rinse.
// Mid (2 XP): Take a 3-5 minute shower or full bath.
// Max (3 XP): Take a long, relaxing bath with extra grooming care.
// Drink Medicine:

// Min (1 XP): Take your medicine on time.
// Mid (2 XP): Take your medicine and drink an extra glass of water.
// Max (3 XP): Take your medicine and reflect briefly on how it supports your health.
// Food Tracker (Chewing Count):

// Min (1 XP): Count chews for one bite and write it down.
// Mid (2 XP): Count chews for one full meal.
// Max (3 XP): Count chews for all meals and reflect on the experience.
// 2. Wisdom (Mental Health and Reflection)
// Tasks focused on mindfulness, emotional well-being, and personal insight.

// Daily Journal:

// Min (1 XP): Write one sentence about how you feel.
// Mid (2 XP): Write 3-4 sentences summarizing your mood and why.
// Max (3 XP): Write a half-page reflection on feelings, triggers, and lessons.
// Meditation:

// Min (1 XP): Sit quietly for 10 seconds, taking one deep breath.
// Mid (2 XP): Meditate for 1 minute, focusing on your breathing.
// Max (3 XP): Meditate for 5 minutes, using a guided session or silence.
// Daily Review (Before Sleep):

// Min (1 XP): Think about one thing that went okay today.
// Mid (2 XP): Write one sentence about the day’s highlights.
// Max (3 XP): Write a short paragraph analyzing successes, challenges, and improvements.
// Social Media Tracker:

// Min (1 XP): Note how many times you used social media today.
// Mid (2 XP): Track approximate time spent and reflect briefly.
// Max (3 XP): Track time spent and write a sentence on whether it aligns with your goals.
// Journal Emotional Reflections:

// Min (1 XP): Write one sentence about a strong emotion you felt today.
// Mid (2 XP): Write a paragraph analyzing what triggered that emotion.
// Max (3 XP): Write a half-page reflection on how you handled emotions and lessons learned.
// 3. Intelligence (Career, Learning, and Money)
// Tasks related to professional development, skill acquisition, and financial management.

// Daily Intentions (Reading Reminder Document):

// Min (1 XP): Read the first line of the document.
// Mid (2 XP): Read all daily habits and mantras quickly.
// Max (3 XP): Read and reflect on them for at least 2 minutes.
// Goal Setting (One Daily Goal):

// Min (1 XP): Write one simple goal for the day.
// Mid (2 XP): Write one goal and one reason it matters.
// Max (3 XP): Write one goal, why it matters, and outline a step-by-step plan.
// Record Expenses:

// Min (1 XP): Record one transaction or expense.
// Mid (2 XP): Record all expenses for the day.
// Max (3 XP): Record expenses and analyze one pattern (e.g., unnecessary spending).
// Record Focus Flow (Task + Timer):

// Min (1 XP): Record your current task and set a timer for 2 minutes.
// Mid (2 XP): Record and focus for 5-10 minutes.
// Max (3 XP): Record and focus for 15 minutes or more, with notes on progress.
// Work on Focus (15 min - 1 hour - 8 hours):

// Min (1 XP): Work for 15 minutes on a professional or learning task.
// Mid (2 XP): Work for 1 hour on a professional or learning task.
// Max (3 XP): Work for 8 hours (if sustainable) with regular breaks.
// Record Things to Remember When Leaving the House:

// Min (1 XP): Note one important item to take with you.
// Mid (2 XP): Write a checklist of items to remember.
// Max (3 XP): Write a checklist and reflect briefly on why being prepared matters.
// 4. Spiritual Connection (formerly Spirituality)
// Tasks focused on faith, prayer, and connecting with a sense of purpose.

// Morning Prayer:

// Min (1 XP): Whisper a short, one-line prayer.
// Mid (2 XP): Recite a 1-minute prayer mindfully.
// Max (3 XP): Recite a fully focused prayer for 3-5 minutes.
// Evening Prayer:

// Min (1 XP): Say a short prayer of gratitude before bed.
// Mid (2 XP): Reflect on the day and say a more focused prayer.
// Max (3 XP): Pray for 3-5 minutes, including gratitude, forgiveness, and hope.
