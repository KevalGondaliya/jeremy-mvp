import { Installer } from "@/types";

interface InstallerCardProps {
    installer: Installer;
}

const getSkillLevelColor = (level: string) => {
    switch (level) {
        case "Master":
            return "bg-purple-100 text-purple-800 border-purple-300";
        case "Intermediate":
            return "bg-blue-100 text-blue-800 border-blue-300";
        case "Novice":
            return "bg-green-100 text-green-800 border-green-300";
        default:
            return "bg-gray-100 text-gray-800 border-gray-300";
    }
};

export default function InstallerCard({ installer }: InstallerCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-2">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        {installer.name}
                    </h2>
                    <p className="text-gray-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {installer.city}
                    </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSkillLevelColor(installer.skillLevel)}`}>
                    {installer.skillLevel}
                </span>
            </div>

            <div className="mb-4">
                <p className="text-sm text-gray-700 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {installer.yearsExperience} {installer.yearsExperience === 1 ? 'year' : 'years'} of experience
                </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                    {installer.about}
                </p>
            </div>
        </div>
    );
}

