'use client'

export default function EducationTimeline() {
  const educationList = [
    { 
      year: '2023–2026', 
      degree: 'MCA, NIT Kurukshetra', 
      details: 'CGPA: 9.27',
      logo: 'jsm-logo.png' // Replace with your actual image path
    },
    { 
      year: '2019–2022', 
      degree: 'BSc Physics (Hons.), Panjab University',
      logo: 'jsm-logo.png' // Replace with your actual image path
    },
    { 
      year: '2017–2019', 
      degree: 'Class 12th, Mukand Lal Public School', 
      details: '88.8%',
      logo: 'jsm-logo.png' // Replace with your actual image path
    },
    { 
      year: '2015–2017', 
      degree: 'Class 10th, Mukand Lal Public School', 
      details: '10 CGPA',
      logo: 'jsm-logo.png' // Replace with your actual image path
    }
  ]

  return (
    <div className="relative py-4">
      {/* Timeline line */}
      <div className="absolute left-12 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
      
      <div className="space-y-8">
        {educationList.map((edu, idx) => (
          <div key={idx} className="relative pl-16 group">
            {/* Logo container */}
            <div className="absolute left-0 top-0 flex items-center justify-center h-8 w-8 rounded-md overflow-hidden ">
              {/* Dummy image - replace with your actual image */}
              <div className="h-full w-full  flex items-center justify-center text-xs text-gray-400">
                {edu.logo ? (
                  <img 
                    src={edu.logo} 
                    alt="Institution logo" 
                    className="object-contain p-1 h-full w-full"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2E3YjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1idWlsZGluZy0yIj48cGF0aCBkPSJNNiAydjE2Ii8+PHBhdGggZD0iTTYgMjJoMTJhMiAyIDAgMCAwIDItMlY4LjVhMiAyIDAgMCAwLS42MS0xLjQzQzE2LjQ5IDYuMTMgMTUuMzcgNiAxNCA2aC0xYTIgMiAwIDAgMS0xLjY3LS44OUw5LjYxIDMuOUEyIDIgMCAwIDAgOC4MTIgM0g2YTIgMiAwIDAgMC0yIDJaIi8+PHBhdGggZD0iTTEwIDZ2NWEyIDIgMCAwIDAgMiAyaDFhMiAyIDAgMCAwIDItMnYtMSIvPjwvc3ZnPg==';
                    }}
                  />
                ) : (
                  <span>Logo</span>
                )}
              </div>
            </div>

            {/* Timeline dot */}
            <div className={`absolute left-12 top-2 h-3 w-3 rounded-full -translate-x-1/2 z-10
                            ${idx === 0 ? 'bg-emerald-500 ring-2 ring-emerald-200 dark:ring-emerald-900' : 'bg-gray-400 dark:bg-gray-500'}`} />
            
            <div className="transition-all duration-200 hover:translate-x-1">
              <p className="text-xs font-medium text-gray-500 mb-1">{edu.year}</p>
              <h3 className="text-sm font-medium text-gray-800">
                {edu.degree}
              </h3>
              {edu.details && (
                <p className="text-xs text-gray-600 mt-1">{edu.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}