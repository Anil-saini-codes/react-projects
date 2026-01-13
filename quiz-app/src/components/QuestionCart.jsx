import React from 'react'

export default function QuestionCart({question, options, onSelect}) {
  return (
    <div className="card shadow p-4">
            <h4 className="fw-semibold">{question}</h4>
            <div className="mt-3">
                {options.map((option, index) => (
                    <button key={index} className="btn btn-outline-primary w-100 mt-2" onClick={() => onSelect(option)}>
                        {option}
                    </button>
                ))}    
            </div>
        </div>
  )
}
