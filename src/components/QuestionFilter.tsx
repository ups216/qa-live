import React from 'react';
import { Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface QuestionFilterProps {
  currentFilter: 'all' | 'answered' | 'unanswered';
  onFilterChange: (filter: 'all' | 'answered' | 'unanswered') => void;
  questionCounts: {
    total: number;
    answered: number;
    unanswered: number;
  };
}

const QuestionFilter: React.FC<QuestionFilterProps> = ({ 
  currentFilter, 
  onFilterChange, 
  questionCounts 
}) => {
  const { t } = useTranslation();
  const filterOptions = [
    { value: 'all' as const, label: t('filter.allQuestions'), count: questionCounts.total },
    { value: 'answered' as const, label: t('filter.answered'), count: questionCounts.answered },
    { value: 'unanswered' as const, label: t('filter.unanswered'), count: questionCounts.unanswered },
  ];

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold text-gray-900">{t('filter.questions')}</h2>
      
      <div className="flex items-center space-x-2">
        <Filter className="h-5 w-5 text-gray-400" />
        <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onFilterChange(option.value)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                currentFilter === option.value
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {option.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                currentFilter === option.value
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionFilter;