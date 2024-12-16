import { IDBrand } from '../utils/types/BrandType';
import { ExperienceType } from './ExperienceType';

export const mockExperienceData: ExperienceType[] = [
    {
        id: 'ABC01' as IDBrand,
        experience: 'Strength',
        ABV: 'STR',
        color: {
            text: 'text-red-500',
            background: 'bg-red-500',
            border: 'border-red-500',
            xp: 'text-red-400 bg-red-500/10',
            gradient: 'bg-gradient-to-r from-red-600/50 to-red-400/50',
        },
        description: 'Habits that include anything that involves health',
        guideQuestion: 'Does this habit improve your health, hygiene, or physical strength?',
    },
    {
        id: 'ABC02' as IDBrand,
        experience: 'Wisdom',
        ABV: 'WIS',
        color: {
            text: 'text-green-500',
            background: 'bg-green-500',
            border: 'border-green-500',
            xp: 'text-green-400 bg-green-500/10',
            gradient: 'bg-gradient-to-r from-green-600/50 to-green-400/50',
        },
        description: 'Habits that include anything that involves mental health and journaling',
        guideQuestion:
            'Does this habit improve your mental health, mindfulness, or emotional well-being?',
    },
    {
        id: 'ABC03' as IDBrand,
        experience: 'Intelligence',
        ABV: 'INT',
        color: {
            text: 'text-yellow-500',
            background: 'bg-yellow-500',
            border: 'border-yellow-500',
            xp: 'text-yellow-400 bg-yellow-500/10',
            gradient: 'bg-gradient-to-r from-yellow-600/50 to-yellow-400/50',
        },
        description: 'Habits that include anything that involves career, learning, and money',
        guideQuestion:
            'Does this habit improve your professional skills, knowledge, or financial management?',
    },
    {
        id: 'ABC04' as IDBrand,
        experience: 'Spiritual Connection',
        ABV: 'SPR',
        color: {
            text: 'text-cyan-500',
            background: 'bg-cyan-500',
            border: 'border-cyan-500',
            xp: 'text-cyan-400 bg-cyan-500/10',
            gradient: 'bg-gradient-to-r from-cyan-600/50 to-cyan-400/50',
        },
        description:
            'Habits that include anything that involves faith, prayer, and connecting with a sense of purpose',
        guideQuestion: 'Does this habit enhance your spiritual well-being or sense of purpose?',
    },
];
