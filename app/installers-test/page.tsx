"use client";

import { useState, useMemo } from "react";
import InstallerCard from "@/components/InstallerCard";
import { mockInstallers } from "@/components/mockInstallers";
import { Installer } from "@/types";

export default function InstallersTest() {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>("");

    // Get unique cities and skill levels for filter options
    const cities = useMemo(() => {
        const uniqueCities = Array.from(new Set(mockInstallers.map(installer => installer.city)));
        return uniqueCities.sort();
    }, []);

    const skillLevels: Installer["skillLevel"][] = ["Master", "Intermediate", "Novice"];

    // Filter installers based on selected filters
    const filteredInstallers = useMemo(() => {
        return mockInstallers.filter(installer => {
            const cityMatch = selectedCity === "" || installer.city === selectedCity;
            const skillLevelMatch = selectedSkillLevel === "" || installer.skillLevel === selectedSkillLevel;
            return cityMatch && skillLevelMatch;
        });
    }, [selectedCity, selectedSkillLevel]);

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value);
    };

    const handleSkillLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSkillLevel(e.target.value);
    };

    const clearFilters = () => {
        setSelectedCity("");
        setSelectedSkillLevel("");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8 px-2">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Installers Directory</h1>
                    <p className="text-lg text-gray-600">Browse our network of skilled installers</p>
                </div>

                {/* Filters Section */}
                <div className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 items-end">
                        <div className="flex-1 w-full sm:w-auto">
                            <label htmlFor="city-filter" className="block text-sm font-medium text-gray-700 mb-2">
                                Filter by City
                            </label>
                            <select
                                id="city-filter"
                                value={selectedCity}
                                onChange={handleCityChange}
                                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.75rem_center] bg-no-repeat"
                            >
                                <option value="">All Cities</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex-1 w-full sm:w-auto">
                            <label htmlFor="skill-level-filter" className="block text-sm font-medium text-gray-700 mb-2">
                                Filter by Skill Level
                            </label>
                            <select
                                id="skill-level-filter"
                                value={selectedSkillLevel}
                                onChange={handleSkillLevelChange}
                                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.75rem_center] bg-no-repeat"
                            >
                                <option value="">All Skill Levels</option>
                                {skillLevels.map(level => (
                                    <option key={level} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {(selectedCity || selectedSkillLevel) && (
                            <button
                                onClick={clearFilters}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 whitespace-nowrap"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Results count */}
                    <div className="mt-4 text-sm text-gray-600">
                        Showing {filteredInstallers.length} of {mockInstallers.length} installers
                    </div>
                </div>

                {/* Installers Grid */}
                {filteredInstallers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredInstallers.map((installer, index) => (
                            <InstallerCard key={index} installer={installer} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                        <p className="text-lg text-gray-600">No installers found matching your filters.</p>
                        <button
                            onClick={clearFilters}
                            className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 underline"
                        >
                            Clear filters to see all installers
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}

